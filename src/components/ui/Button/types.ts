import type { PropsWithChildren, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react"

export type ButtonPropsType = {
  variant?: "primary" | "secondary"
} & PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>>
