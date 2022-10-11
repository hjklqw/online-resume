import styles from './styles.module.scss'

type Props = {
  headerText: string
  children: React.ReactNode
  hideSeparator?: boolean
  className?: string
}

/** An info section with a separator on top of it. */
export const Section = ({
  headerText,
  children,
  hideSeparator,
  className,
}: Props) => (
  <>
    {!hideSeparator && <hr className={styles.separator} />}
    <section className={`${styles.info} ${className || ''}`}>
      <h2>{headerText}</h2>
      {children}
    </section>
  </>
)
