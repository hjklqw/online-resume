import React from 'react'

import styles from './styles.module.scss'
import { Section } from './models'
import { TFunction } from 'next-i18next'

type Props = {
  section: Section
  activeNavSection: Section
  setActiveNavSection: React.Dispatch<React.SetStateAction<Section>>
  t: TFunction
}

export const NavDot = ({
  section,
  setActiveNavSection,
  t,
  ...props
}: Props) => {
  const isActive = section === props.activeNavSection
  return (
    <div
      className={`${styles.navDot} ${isActive ? styles.active : ''}`}
      onClick={() => {
        setActiveNavSection(section)
        document
          .getElementById(section)
          ?.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }}
      title={section}
    >
      <span className={styles.dot} />
      <span className={styles.label}>{t(`nav.${section}`)}</span>
    </div>
  )
}
