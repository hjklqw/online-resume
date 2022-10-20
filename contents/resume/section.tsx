import styles from './styles.module.scss'

import { DataSection } from './models'
import { sections } from './data'

type Props = {
  section: DataSection
  children: React.ReactNode
  hideSeparator?: boolean
  className?: string
}

/** An info section with a separator on top of it. */
export const Section = ({
  section,
  children,
  hideSeparator,
  className,
}: Props) => (
  <>
    {!hideSeparator && <hr className={styles.separator} />}
    <section className={`${styles.info} ${className || ''}`}>
      <span className={styles.scrollAnchor} id={sections[section].id} />
      <h2>{sections[section].label}</h2>
      {children}
    </section>
  </>
)
