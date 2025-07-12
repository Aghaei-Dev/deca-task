'use client'
import { Toaster as Sonner, toast } from 'sonner'
import styles from './toaster.module.scss'

function Toaster() {
  return (
    <Sonner
      dir="rtl"
      richColors
      closeButton
      position="top-center"
      offset={'32px'}
      className={styles.toaster}
      toastOptions={{
        classNames: {
          toast: styles.toast,
          title: 'font-normal',
          closeButton: styles['toaster__close-button'],
          icon: 'hidden',
        },
      }}
    />
  )
}

export default Toaster
export { toast }
