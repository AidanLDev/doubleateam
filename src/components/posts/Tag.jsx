import Styles from './styles.module.scss'

export default function Tag({tag}) {
  return (
    <div className={Styles.tagContainer}>
      <span>{tag}</span>
    </div>
  )
  
}