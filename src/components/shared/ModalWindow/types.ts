import type { ReactNode } from "react"

export type ModalPropsType = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
}
