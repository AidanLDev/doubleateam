import Styles from './styles.module.scss'

export default function Tag({ tag }) {
  return (
    <div className={Styles.tag}>
      <span>{tag}</span>
    </div>
  )
}
