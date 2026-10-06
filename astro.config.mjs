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
  redirects: {
    // Old misspelt slug, kept so existing links and search results still work
    '/posts/survivng-redundancy': '/posts/surviving-redundancy',
  },
  integrations: [
    compress(),
    mdx(),
    sitemap(),
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
