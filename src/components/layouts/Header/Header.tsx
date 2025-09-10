import styles from "./Header.module.scss"
import Logo from "../../../assets/logo.svg?react"
import Button from "../../ui/Button"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Logo />
        <div className={styles.header__buttons}>
          <Button variant={"link"}>Контакты</Button>
          <Button variant={"auth"}>Войти</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
