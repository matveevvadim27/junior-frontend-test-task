import styles from "./Home.module.scss"
import classNames from "classnames"
import Button from "../../ui/Button"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const user = JSON.parse(localStorage.getItem("currentUser") || "{}")

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("currentUser")
    navigate("/")
  }

  return (
    <section className={classNames(styles.home, "container")}>
      <h1 className={styles.home__title}>Привет, {user.name}</h1>
      <div className={styles.home__buttons}>
        <Button onClick={handleLogout} variant={"primary"}>
          Выйти из аккаунта
        </Button>
        <Button href={"/contacts"} variant={"secondary"}>
          Перейти в контакты
        </Button>
      </div>
    </section>
  )
}

export default Home
