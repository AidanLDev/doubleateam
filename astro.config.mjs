import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import compress from 'astro-compress'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'
import path from 'path'

import preact from '@astrojs/preact'
import aws from 'astro-sst'

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.aidanlowson.com',
  integrations: [
    compress(),
    mdx(),
    tailwind(),
    sitemap(),
    icon(),
    preact(),
    partytown({
      config: {
        forward: ['datalayer.push'],
      },
    }),
  ],
  vite: {
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
