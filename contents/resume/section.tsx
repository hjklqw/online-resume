import { TFunction } from 'next-i18next'
import styles from './styles.module.scss'

import { DataSection } from './models'

type Props = {
  section: DataSection
  children: React.ReactNode
  hideSeparator?: boolean
  className?: string
  t: TFunction
}

/** An info section with a separator on top of it. */
export const Section = ({
  section,
  children,
  hideSeparator,
  className,
  t,
}: Props) => (
  <>
    {!hideSeparator && <hr className={styles.separator} />}
    <section className={`${styles.info} ${className || ''}`}>
      <span className={styles.scrollAnchor} id={section} />
      <h2>{t(`${section}.label`)}</h2>
      {children}
    </section>
  </>
)
