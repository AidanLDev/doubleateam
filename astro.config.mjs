import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import compress from 'astro-compress'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'

import preact from '@astrojs/preact'
import aws from 'astro-sst'

import sentry from '@sentry/astro'

// Last modified date of each blog post, from its frontmatter, so the sitemap can tell crawlers what changed
const blogDir = './src/content/blog'
const postLastMod = Object.fromEntries(
  fs
    .readdirSync(blogDir)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => {
      const source = fs.readFileSync(path.join(blogDir, file), 'utf-8')
      const date = (source.match(/^updatedDate:\s*['"]?(.+?)['"]?\s*$/m) ??
        source.match(/^pubDate:\s*['"]?(.+?)['"]?\s*$/m))?.[1]
      // Format as a plain YYYY-MM-DD in local time, toISOString() would shift BST dates back a day
      const parsed = date && new Date(date)
      const lastmod =
        parsed &&
        `${parsed.getFullYear()}-${String(parsed.getMonth() + 1).padStart(2, '0')}-${String(parsed.getDate()).padStart(2, '0')}`
      return [`/posts/${file.replace(/\.mdx?$/, '')}/`, lastmod]
    }),
)

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.aidanlowson.com',
  redirects: {
    // Old misspelt slug, kept so existing links and search results still work
    '/posts/survivng-redundancy': '/posts/surviving-redundancy',
  },
  integrations: [
    compress({
      HTML: {
        // Keep attribute quotes and order so verification tags (e.g. Bing's msvalidate.01) match verbatim
        'html-minifier-terser': { removeAttributeQuotes: false, sortAttributes: false },
      },
    }),
    mdx(),
    sitemap({
      serialize(item) {
        const lastmod = postLastMod[new URL(item.url).pathname]
        return lastmod ? { ...item, lastmod } : item
      },
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
