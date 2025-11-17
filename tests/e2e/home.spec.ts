import { test, expect } from '@playwright/test'

test('Home page shows a link with the home page text', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('span').filter({ hasText: 'Aidan & Arni' })).toBeVisible()
})
