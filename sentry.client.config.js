import * as Sentry from '@sentry/astro'

Sentry.init({
  dsn: process.env.SENTRY_DNS,
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  tracesSampleRate: 1.0,
})
