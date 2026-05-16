import releaseNotesStable from './release-notes/stable.json'

type FixWithIssue = {
  description: string
  issue?: number
}

type Fix = string | FixWithIssue

export type BreakingChange = string | { description: string; link: string }

export type ReleaseNote = {
  version: string
  date?: string // optional for twilight
  extra?: string
  fixes?: Fix[]
  security?: string | string[]
  knownIssues?: string[]
  features?: string[]
  breakingChanges?: BreakingChange[]
  themeChanges?: string[]
  inProgress?: boolean
  workflowId?: number
  isTwilight?: boolean
  changes?: string[]
}

export const releaseNotes: ReleaseNote[] = releaseNotesStable.reverse()
export { default as releaseNotesTwilight } from './release-notes/twilight.json'
