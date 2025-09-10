import styles from "./ServiceCard.module.scss"
import type { ServicePropsType } from "./types.ts"

const ServiceCard = (props: ServicePropsType) => {
  const { title, text, image } = props

  return (
    <li className={styles.card}>
      <div className={styles.card__wrapper}>
        <img className={styles.card__image} src={image} alt="Картинка услуги" />
      </div>
      <h2 className={styles.card__title}>{title}</h2>
      <hr className={styles.card__hr} />
      <p className={styles.card__text}>{text}</p>
    </li>
  )
}

export default ServiceCard
