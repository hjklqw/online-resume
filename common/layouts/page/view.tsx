import styles from './styles.module.scss'

type Props = {
  title: string
  subtitle: string
  children: React.ReactNode
  maxWidth?: number
}

export const PageLayout = ({ title, subtitle, children, maxWidth }: Props) => (
  <section className={styles.wrapper} style={{ maxWidth }}>
    <header className={styles.header}>
      <h1>{title}</h1>
      <div className={styles.subtitle}>
        <span>{subtitle}</span>
        <hr />
      </div>
    </header>
    <main>{children}</main>
  </section>
)
