import Styles from './styles.module.scss';
import Tag from './Tag';

export default function PostCard({slug, title, pubDate, heroImage, description, tags}) {
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.cardImage}>
        <img src={heroImage} alt={title} />
      </div>
      <div className={Styles.cardContent}>
      <h3>
        <a href={`/posts/${slug}`}>{title}</a>
      </h3>
      <p>
        {description}
      </p>
      {tags && tags.length > 0 && (
        tags.map(tag => <Tag tag={tag}/>)
      )}
      <small>
        {pubDate}
      </small>
      </div>
    </div>
  )
}