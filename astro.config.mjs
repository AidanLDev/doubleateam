import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import compress from 'astro-compress'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

import preact from '@astrojs/preact'
import aws from 'astro-sst'

import sentry from '@sentry/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.aidanlowson.com',
  integrations: [
    compress(),
    mdx(),
    sitemap({
      // Starter-template demo pages are noindexed, so keep them out of the sitemap too
      filter: (page) =>
        !['/markdown-page/', '/mdx-page/', '/accessible-components/'].some((path) => page.endsWith(path)),
    }),
    icon(),
    preact(),
    partytown({
      config: {
        forward: ['datalayer.push'],
      },
    }),
    sentry({
      project: 'double-a-team',
      org: 'processvision',
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@components': path.resolve('./src/components'),
        '@layouts': path.resolve('./src/layouts'),
        '@lib': path.resolve('./src/lib'),
        '@interfaces': path.resolve('./src/interfaces'),
      },
    },
  },
  adapter: aws(),
  output: 'static',
})
