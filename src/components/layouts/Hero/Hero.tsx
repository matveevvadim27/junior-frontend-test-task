import styles from "./Hero.module.scss"
import Button from "../../ui/Button"
import classNames from "classnames"

const Hero = () => {
  return (
    <section className={classNames(styles.hero, "container")}>
      <h1 className={styles.hero__title}>Место для получения медицинской помощи</h1>
      <div className={styles.hero__buttons}>
        <Button variant={"primary"}>Войти</Button>
        <Button variant={"secondary"}>Контакты</Button>
      </div>
    </section>
  )
}

export default Hero
