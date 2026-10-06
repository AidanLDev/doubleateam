import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'
import { SITE_NAME, SITE_DESCRIPTION } from '../lib/Consts'

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog')).sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
  )

  return rss({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.pubDate),
      link: `/posts/${post.id.replace(/\.mdx?$/, '')}/`,
      categories: post.data.tags,
    })),
    customData: '<language>en-gb</language>',
  })
}
