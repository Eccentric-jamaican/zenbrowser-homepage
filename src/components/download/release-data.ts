import { getUI } from '~/utils/i18n'

const BOOKING_LINK = 'https://wa.me/18767790854'

/**
 * Returns the releases object, injecting checksums dynamically.
 * @param locale The locale to use for labels
 * @param checksums Record<string, string> mapping filenames to SHA-256 hashes
 */
export function getReleasesWithChecksums(locale: string) {
  const {
    routes: {
      download: {
        links: { macos, windows, linux },
      },
    },
  } = getUI(locale)
  return (checksums: Record<string, string>) => {
    return {
      macos: {
        universal: {
          link: BOOKING_LINK,
          label: macos.universal,
          checksum: checksums['zen.macos-universal.dmg'],
        },
      },
      windows: {
        x86_64: {
          link: BOOKING_LINK,
          label: windows['64bit'],
          checksum: checksums['zen.installer.exe'],
        },
        arm64: {
          link: BOOKING_LINK,
          label: windows.ARM64,
          checksum: checksums['zen.installer-arm64.exe'],
        },
      },
      linux: {
        x86_64: {
          tarball: {
            link: BOOKING_LINK,
            label: linux.x86_64,
            checksum: checksums['zen.linux-x86_64.tar.xz'],
          },
        },
        aarch64: {
          tarball: {
            link: BOOKING_LINK,
            label: linux.aarch64,
            checksum: checksums['zen.linux-aarch64.tar.xz'],
          },
        },
        flathub: {
          all: {
            link: BOOKING_LINK,
            label: linux.flathub,
          },
        },
      },
    }
  }
}

export function getReleases(locale: string) {
  const {
    routes: {
      download: {
        links: { macos, windows, linux },
      },
    },
  } = getUI(locale)

  return {
    macos: {
      universal: {
        link: BOOKING_LINK,
        label: macos.universal,
      },
    },
    windows: {
      x86_64: {
        link: BOOKING_LINK,
        label: windows['64bit'],
      },
      arm64: {
        link: BOOKING_LINK,
        label: windows.ARM64,
      },
    },
    linux: {
      x86_64: {
        tarball: {
          link: BOOKING_LINK,
          label: linux.x86_64,
        },
      },
      aarch64: {
        tarball: {
          link: BOOKING_LINK,
          label: linux.aarch64,
        },
      },
      flathub: {
        all: {
          link: BOOKING_LINK,
          label: linux.flathub,
        },
      },
    },
  }
}
