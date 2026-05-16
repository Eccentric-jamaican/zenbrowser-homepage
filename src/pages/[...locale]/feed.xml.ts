import rss, { type RSSOptions } from '@astrojs/rss'

import { releaseNotes, type ReleaseNote } from '~/release-notes'

export { getStaticPaths } from '~/utils/i18n'

/** The default number of entries to include in the RSS feed. */
const RSS_ENTRY_LIMIT = 20

/**
 * Handles the GET request for the `feed.xml` endpoint.
 * @returns The RSS feed for Meditation Fields studio updates.
 */
export function GET(context: { url: URL }) {
  // Just in case the release notes array is empty for whatever reason.
  const latestDate =
    releaseNotes.length > 0 ? formatRssDate(releaseNotes[0].date as string) : new Date()

  const rssData: RSSOptions = {
    title: 'Meditation Fields Studio Updates',
    description:
      'Latest announcements, schedule updates, and wellness updates from Meditation Fields.',
    site: context.url,
    items: [],
    customData: `
            <language>en</language>
            <link>https://www.meditationfields.com/whatsnew</link>
            <copyright>Meditation Fields © ${new Date().getFullYear()} - All calm, all care.</copyright>
            <pubDate>${pubDate(latestDate)}</pubDate>
            <image>
                <url>https://www.meditationfields.com/favicon.ico</url>
                <title>Meditation Fields</title>
                <link>https://www.meditationfields.com</link>
            </image>
        `,
  }

  for (const releaseNote of releaseNotes.slice(0, RSS_ENTRY_LIMIT)) {
    rssData.items.push({
      title: `Studio update ${releaseNote.version}`,
      link: `https://www.meditationfields.com/whatsnew#${releaseNote.version}`,
      pubDate: formatRssDate(releaseNote.date as string),
      description: releaseNote.extra,
      content: formatReleaseNote(releaseNote),
    })
  }

  return rss(rssData)
}

/**
 * Formats a date string in the format day/month/year.
 *
 * Note: If release notes change to ISO format, this will need to be updated.
 * @param dateStr The date string to format.
 * @returns The passed in date string as a Date object.
 */
function formatRssDate(dateStr: string) {
  const splitDate = dateStr.split('/')
  if (splitDate.length !== 3) {
    throw new Error('Invalid date format')
  }

  const day = Number(splitDate[0])
  const month = Number(splitDate[1]) - 1
  const year = Number(splitDate[2])
  return new Date(year, month, day)
}

/**
 * Formats the release note entry for use as the content of the RSS feed.
 * @param releaseNote The release note to format.
 * @returns The formatted release note as a HTML string.
 */
function formatReleaseNote(releaseNote: ReleaseNote) {
  let content = `<p>
        If you have questions about our services or bookings, message us on <a href="https://wa.me/18767790854">WhatsApp</a>.
        Thanks for supporting our studio. ❤️
    </p>`

  if (releaseNote.extra) {
    content += `<p>${releaseNote.extra.replace(/(\n)/g, '<br />')}</p>`
  }

  content += addReleaseNoteSection(
    '⚠️ Important updates',
    releaseNote.breakingChanges?.map(breakingChangeToReleaseNote)
  )
  content += addReleaseNoteSection('✓ Service updates', releaseNote.fixes?.map(fixToReleaseNote))
  content += addReleaseNoteSection('🖌 Studio highlights', releaseNote.themeChanges)
  content += addReleaseNoteSection('⭐ New additions', releaseNote.features)

  return content
}

function addReleaseNoteSection(title: string, items?: string[]): string {
  if (!items) {
    return ''
  }

  let content = `<h2>${title}</h2>`
  content += '<ul>'
  for (const item of items) {
    if (item && item.length > 0) {
      content += `<li>${item}</li>`
    }
  }
  content += '</ul>'
  return content
}

function fixToReleaseNote(fix?: Exclude<ReleaseNote['fixes'], undefined>[number]) {
  if (typeof fix === 'string') {
    return fix
  }

  if (!fix || !fix.description || fix.description.length === 0) {
    return ''
  }

  let note = fix.description
  if (fix.issue) {
    note += ` (Ref #${fix.issue})`
  }
  return note
}

function breakingChangeToReleaseNote(
  breakingChange?: Exclude<ReleaseNote['breakingChanges'], undefined>[number]
) {
  if (typeof breakingChange === 'string') {
    return breakingChange
  }

  if (!breakingChange || !breakingChange.description || breakingChange.description.length === 0) {
    return ''
  }

  return breakingChange.description
}

function pubDate(date?: Date) {
  const newDate = date ?? new Date()

  const pieces = newDate.toString().split(' ')
  const offsetTime = pieces[5].match(/[-+]\d{4}/)
  const offset = offsetTime ? offsetTime : pieces[5]
  const parts = [`${pieces[0]},`, pieces[2], pieces[1], pieces[3], pieces[4], offset]

  return parts.join(' ')
}
