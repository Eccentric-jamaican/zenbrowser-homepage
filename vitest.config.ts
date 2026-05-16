/// <reference types="vitest" />
import { getViteConfig } from 'astro/config'

export default getViteConfig({
  test: {
    exclude: ['**/node_modules/**', '**/src/tests/pages/**'],
  },
} as Parameters<typeof getViteConfig>[0] & { test: { exclude: string[] } })
