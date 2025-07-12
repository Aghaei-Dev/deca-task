import styles from './Loader.module.scss'

type LoaderProps = {
  color?: string
  border?: string
}

export default function Loader({
  color = 'var(--primary-500)',
  border = 'var(--primary-600)',
}: LoaderProps) {
  const circleStyle: React.CSSProperties = {
    backgroundColor: color,
    border: `1px solid ${border}`,
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.circle} style={circleStyle}></div>
      <div className={styles.circle} style={circleStyle}></div>
      <div className={styles.circle} style={circleStyle}></div>
      <div className={styles.circle} style={circleStyle}></div>
    </div>
  )
}
