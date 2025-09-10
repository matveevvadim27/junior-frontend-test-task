import styles from "./ModalWindow.module.scss"
import Button from "../../ui/Button"
import { useEffect, useRef } from "react"
import type { ModalPropsType } from "./types.ts"
import { createPortal } from "react-dom"
import { IoMdClose } from "react-icons/io"

const ModalWindow = (props: ModalPropsType) => {
  const { isOpen, onClose, children, title = "Авторизация" } = props

  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

  if (!isOpen) return null

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.modal__content} ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal__title}>
          <h3 className={styles.title}>{title}</h3>
          <Button className={styles.modal__btn} onClick={onClose}>
            <IoMdClose color={"#E74040"} size={30} />
          </Button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  )
}
export default ModalWindow
