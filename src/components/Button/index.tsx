import React from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
  className?: string
  children: React.ReactNode
  background?: string
  hover?: string
  circle?: boolean
  fn?: () => void
  style?: React.CSSProperties
  type?: 'button' | 'submit' | 'reset'
  disable?: boolean
  color?: string
  fill?: string
  fontSize?: string
  fontWeight?: string | number
}

export default function Button({
  className,
  children,
  background = 'var(--primary-500)',
  hover,
  fn,
  style,
  type = 'button',
  disable,
  color = 'var(--text-white)',
  fill = 'var(--text-white)',
  fontSize = '14px',
  fontWeight = '500',
}: ButtonProps) {
  const customStyle: React.CSSProperties = {
    '--color': color,
    fill,
    fontSize,
    fontWeight,
    borderColor: background,
    '--btn-background': background,
    '--btn-hover': hover || background,
  } as React.CSSProperties

  return (
    <button
      className={`${styles.button} ${className || ''}`}
      disabled={disable}
      type={type}
      style={{ ...customStyle, ...style }}
      onClick={fn}
    >
      {children}
    </button>
  )
}
