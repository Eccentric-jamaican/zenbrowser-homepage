import { expect, test } from '@playwright/test'

test.describe('Booking page', () => {
  test('shows WhatsApp booking and services links', async ({ page }) => {
    await page.goto('/download')
    await page.waitForLoadState('domcontentloaded')

    await expect(page.getByRole('heading', { name: /book/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /whatsapp/i })).toHaveAttribute(
      'href',
      'https://wa.me/18767790854'
    )
    await expect(page.getByRole('link', { name: /services|menu/i })).toHaveAttribute(
      'href',
      '/#services'
    )
  })
})
