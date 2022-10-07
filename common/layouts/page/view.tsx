import styles from './styles.module.scss'

type Props = {
  title: string
  subtitle: string
}

export const PageLayout = ({ title, subtitle }: Props) => (
  <header className={styles.header}>
    <h1>{title}</h1>
    <div className={styles.subtitle}>
      <span>{subtitle}</span>
      <hr />
    </div>
  </header>
)
