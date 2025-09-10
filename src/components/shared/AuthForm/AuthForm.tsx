import styles from "./AuthForm.module.scss"
import Button from "../../ui/Button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { authData } from "../../../schemas/authSchema.ts"
import { authSchema } from "../../../schemas/authSchema.ts"
import users from "../../../data/users.json"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import type { FormPropsType } from "./types.ts"

const AuthForm = (props: FormPropsType) => {
  const { onClose } = props
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<authData>({
    resolver: zodResolver(authSchema)
  })

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser")
    if (!currentUser) {
      navigate("/")
    }
  }, [])

  const onSubmit = (data: authData) => {
    const user = users.find((user) => user.login === data.login && user.password === data.password)

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user))
      navigate("/home")
      onClose()
    } else {
      alert("Неверный логин или пароль")
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__wrapper}>
        <label htmlFor="login">Логин</label>
        <input className={styles.form__input} id={"login"} type="text" {...register("login")} />
        {errors.login && <p className={"error"}>{errors.login.message}</p>}
      </div>
      <div className={styles.form__wrapper}>
        <label htmlFor="password">Пароль</label>
        <input className={styles.form__input} id={"password"} type="password" {...register("password")} />
        {errors.password && <p className={"error"}>{errors.password.message}</p>}
      </div>
      <Button variant={"primary"}>Войти</Button>
    </form>
  )
}

export default AuthForm
