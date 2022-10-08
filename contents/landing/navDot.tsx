import React from 'react'

import styles from './styles.module.scss'
import { Section } from './models'

type Props = {
  section: Section
  activeNavSection: Section
  setActiveNavSection: React.Dispatch<React.SetStateAction<Section>>
}

export const NavDot = ({ section, setActiveNavSection, ...props }: Props) => {
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
      <span className={styles.label}>{section}</span>
    </div>
  )
}
