import styles from "./Home.module.scss"
import classNames from "classnames"
import Button from "../../ui/Button"

const Home = () => {
  return (
    <section className={classNames(styles.home, "container")}>
      <h1 className={styles.home__title}>Привет, Сергей</h1>
      <div className={styles.home__buttons}>
        <Button variant={"primary"}>Выйти из аккаунта</Button>
        <Button variant={"secondary"}>Перейти в контакты</Button>
      </div>
    </section>
  )
}

export default Home
