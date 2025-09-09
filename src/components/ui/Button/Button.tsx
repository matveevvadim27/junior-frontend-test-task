import styles from "./Button.module.scss"
import classNames from "classnames"
import { Link } from "react-router-dom"
import type { ButtonPropsType } from "./types"

export const Button = (props: ButtonPropsType) => {
  const { children, className, href, variant = "", ...rest } = props
  const classes: string = classNames(styles.button, styles[variant], className)

  if (href) {
    return (
      <Link to={href} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
