import PostCard from './PostCard'
import { useStore } from '@nanostores/preact'
import { blogFilter } from '../../blogSearchStore'

export default function PostsContainer({ posts }) {
  const $blogFilter = useStore(blogFilter)
  return (
    <section class="container my-12">
      <ul class="my-3">
        {posts
          .filter((post) => {
            if ($blogFilter !== '') {
              const {
                data: { title, tags },
              } = post
              if (tags && tags.length > 0) {
                for (let i = 0; i < tags.length; i++) {
                  if (tags[i].toLowerCase().includes($blogFilter.toLowerCase())) {
                    return true
                  }
                }
              }
              return title.toLowerCase().includes($blogFilter.toLowerCase())
            }
            return true
          })
          .map((post) => {
            const {
              slug,
              data: { title, pubDate, heroImage, description, tags, redirectLink },
            } = post
            return (
              <PostCard
                description={description}
                slug={slug}
                title={title}
                pubDate={pubDate}
                heroImage={heroImage}
                tags={tags}
                redirectLink={redirectLink}
              />
            )
          })}
      </ul>
    </section>
  )
}
