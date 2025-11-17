import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 30_000,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
  use: {
    baseURL: 'http://localhost:4321',
    headless: true,
    actionTimeout: 0,
    trace: 'on-first-retry',
  },
  webServer: {
    // In CI run a production preview (build -> preview). Locally run the dev server.
    // Call astro CLI directly with --port flag to ensure it listens on the configured baseURL.
    command: process.env.CI
      ? 'pnpm exec astro build && pnpm exec astro preview --port 4321'
      : 'pnpm exec astro dev --port 4321',
    url: 'http://localhost:4321',
    // Reuse an existing server during local development, but make sure CI always starts a fresh one.
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
})
