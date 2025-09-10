import type { PropsWithChildren, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react"

export type ButtonPropsType = {
  variant?: "primary" | "secondary" | "auth" | "link"
} & PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>>
