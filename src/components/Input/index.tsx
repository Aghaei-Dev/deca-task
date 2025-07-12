import React from 'react'
import styles from './Input.module.scss'

interface InputProps {
  type: string
  name: string
  value: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  labelText?: string
  placeholder?: string
  icon?: React.ReactNode
  onClick?: () => void
  errorText?: string
  required?: boolean
  informationText?: string
}

export default function Input({
  type,
  name,
  value,
  handleChange,
  labelText,
  placeholder,
  icon,
  onClick,
  errorText,
  required,
  informationText,
}: InputProps) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>
        {labelText || name}
        {required && errorText && <span className={styles.asterisk}>*</span>} :
      </label>

      <div className={styles.inputWrapper}>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
        {icon && (
          <span className={styles.icon} onClick={onClick}>
            {icon}
          </span>
        )}
      </div>

      <span className={errorText ? styles.error : styles.information}>
        {errorText || informationText}
      </span>
    </div>
  )
}
