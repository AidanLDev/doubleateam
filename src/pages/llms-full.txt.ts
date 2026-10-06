import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'
import { SITE_NAME, SITE_DESCRIPTION } from '../lib/Consts'

// Full text of every post for LLMs and AI agents, see https://llmstxt.org
export async function GET(context: APIContext) {
  const site = context.site!
  const posts = (await getCollection('blog')).sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
  )

  const sections = posts.map((post) => {
    const url = new URL(`/posts/${post.id.replace(/\.mdx?$/, '')}/`, site)
    // Make root-relative links and images absolute so they still resolve out of context
    const content = (post.body ?? '').replace(/\]\(\//g, `](${site.origin}/`)
    return [
      `# ${post.data.title}`,
      '',
      `URL: ${url}`,
      `Published: ${post.data.pubDate}`,
      ...(post.data.updatedDate ? [`Updated: ${post.data.updatedDate}`] : []),
      ...(post.data.tags?.length ? [`Tags: ${post.data.tags.join(', ')}`] : []),
      '',
      `> ${post.data.description}`,
      '',
      content.trim(),
    ].join('\n')
  })

  const header = `# ${SITE_NAME}\n\n> ${SITE_DESCRIPTION}`
  const body = [header, ...sections].join('\n\n---\n\n')

  return new Response(body + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
