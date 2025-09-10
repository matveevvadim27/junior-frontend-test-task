import styles from "./Header.module.scss"
import Logo from "../../../assets/logo.svg?react"
import Button from "../../ui/Button"
import type { HeaderPropsType } from "./types.ts"
import { useNavigate } from "react-router-dom"

const Header = (props: HeaderPropsType) => {
  const { onOpen } = props
  const user = localStorage.getItem("currentUser")
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("currentUser")
    navigate("/")
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Logo />
        <div className={styles.header__buttons}>
          <Button href={"/contacts"} variant={"link"}>
            Контакты
          </Button>
          {!user ? (
            <Button onClick={onOpen} variant={"auth"}>
              Войти
            </Button>
          ) : (
            <Button onClick={handleLogout} variant={"auth"}>
              Выйти
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
