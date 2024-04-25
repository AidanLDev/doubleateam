import PostCard from "./PostCard";


export default function PostsContainer({posts}) {
  return (
    <section class="container my-12">
      <ul class="my-3">
        {
          posts.map((post) => {
            const {
              slug,
              data: { title, pubDate, heroImage, description, tags }
            } = post;
            return (
                <PostCard
                  description={description}
                  slug={slug}
                  title={title}
                  pubDate={pubDate}
                  heroImage={heroImage}
                  tags={tags}
                />
            )
          })
        }
      </ul>
    </section>
  )
}
