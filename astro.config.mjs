import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import compress from 'astro-compress'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'

import preact from '@astrojs/preact'

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
})
