import styles from "./AuthForm.module.scss"
import Button from "../../ui/Button"

const AuthForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.form__wrapper}>
        <label htmlFor="login">Логин</label>
        <input className={styles.form__input} id={"login"} type="text" />
      </div>
      <div className={styles.form__wrapper}>
        <label htmlFor="password">Пароль</label>
        <input className={styles.form__input} id={"password"} type="password" />
      </div>
      <Button variant={"primary"}>Войти</Button>
    </form>
  )
}

export default AuthForm
