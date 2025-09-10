import styles from "./Contacts.module.scss"
import classNames from "classnames"

const Contacts = () => {
  return (
    <section className={classNames(styles.contacts, "container")}>
      <h1 className={styles.contacts__title}>Контакты</h1>
    </section>
  )
}

export default Contacts
