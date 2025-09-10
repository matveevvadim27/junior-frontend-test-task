import styles from "./Header.module.scss"
import Logo from "../../../assets/logo.svg?react"
import Button from "../../ui/Button"
import type { HeaderPropsType } from "./types.ts"

const Header = (props: HeaderPropsType) => {
  const { onOpen } = props
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Logo />
        <div className={styles.header__buttons}>
          <Button href={"/contacts"} variant={"link"}>
            Контакты
          </Button>
          <Button onClick={onOpen} variant={"auth"}>
            Войти
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
