import styles from './FlipCard.module.scss'
import { ReactNode } from 'react'

type FlipCardProps = {
  condition: boolean
  frontSide: ReactNode
  backSide: ReactNode
}

export default function FlipCard({ condition, frontSide, backSide }: FlipCardProps) {
  const innerClassName = `${styles.cardInner} ${condition ? styles.flipped : ''}`

  return (
    <article className={styles.wrapper}>
      <div className={innerClassName}>
        <div className={styles.cardFront}>{frontSide}</div>
        <div className={styles.cardBack}>{backSide}</div>
      </div>
    </article>
  )
}
