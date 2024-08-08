import Styles from './styles.module.scss'
import Tag from './Tag'

export default function PostCard({ slug, title, pubDate, heroImage, description, tags, redirectLink }) {
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.cardImage}>
        <img src={heroImage} alt={title} height="100%" width="100%" />
      </div>
      <div className={Styles.cardContent}>
        <h3>
          {redirectLink ? (
            <a href={redirectLink} target="__blank">
              {title}
            </a>
          ) : (
            <a href={`/posts/${slug}`}>{title}</a>
          )}
        </h3>
        <p>{description}</p>
        {tags && tags.length > 0 && (
          <div className={Styles.tagContainer}>
            {tags.map((tag) => (
              <Tag tag={tag} />
            ))}
          </div>
        )}
        <small>{pubDate}</small>
      </div>
    </div>
  )
}
