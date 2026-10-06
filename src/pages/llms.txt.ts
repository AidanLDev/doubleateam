import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'
import { SITE_NAME, SITE_DESCRIPTION } from '../lib/Consts'

// Index of the site for LLMs and AI agents, see https://llmstxt.org
export async function GET(context: APIContext) {
  const site = context.site!
  const posts = (await getCollection('blog')).sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
  )

  const postLinks = posts.map((post) => {
    const url = new URL(`/posts/${post.id.replace(/\.mdx?$/, '')}/`, site)
    return `- [${post.data.title}](${url}): ${post.data.description}`
  })

  const body = [
    `# ${SITE_NAME}`,
    '',
    `> ${SITE_DESCRIPTION}`,
    '',
    'Double A Team is the personal blog of Aidan Lowson (UK) and Arni Riani (Indonesia). Posts are first-hand experiences and practical guides, written in British English.',
    '',
    '## Blog posts',
    '',
    ...postLinks,
    '',
    '## Pages',
    '',
    `- [All posts](${new URL('/posts/', site)}): Searchable list of every blog post`,
    `- [About us](${new URL('/about-us/', site)}): Who Aidan & Arni are`,
    `- [Contact us](${new URL('/contact-us/', site)}): Social media links and how to get in touch`,
    '',
    '## Optional',
    '',
    `- [Full content](${new URL('/llms-full.txt', site)}): Every blog post in full as Markdown`,
    `- [RSS feed](${new URL('/rss.xml', site)}): Latest posts`,
    `- [Sitemap](${new URL('/sitemap-index.xml', site)}): Every page on the site`,
    '',
  ].join('\n')

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
