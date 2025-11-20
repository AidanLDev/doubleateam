import * as Sentry from '@sentry/astro'

Sentry.init({
  dsn: 'https://d7231d4400ec29d086a59b07a80e2e00@o4510397968154624.ingest.de.sentry.io/4510398512431184',
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
})
