import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

import styles from './styles.module.scss'

import { NavDot } from './navDot'
import { highlights } from './data'
import { Section } from './models'
import { contactInfo } from '/assets/sharedData'

export const LandingPage = () => {
  const [activeNavSection, setActiveNavSection] = useState<Section>(
    Section.OVERVIEW
  )

  const { t } = useTranslation('landing')

  return (
    <div className={styles.wrapper}>
      <div className={styles.bgCircle}>
        <span />
        <span />
      </div>
      <div className={styles.contents}>
        <header className={styles.header} id={Section.OVERVIEW}>
          <NavDot
            section={Section.OVERVIEW}
            activeNavSection={activeNavSection}
            setActiveNavSection={setActiveNavSection}
            t={t}
          />
          <h2>{t('header.title')}</h2>
          <h1>{t('header.name')}</h1>
          <h3>
            {t('header.desc1')}
            <br />
            {t('header.desc2')}
          </h3>
        </header>

        <span className={styles.navBar} />

        <section className={styles.highlights} id={Section.HIGHLIGHTS}>
          <NavDot
            section={Section.HIGHLIGHTS}
            activeNavSection={activeNavSection}
            setActiveNavSection={setActiveNavSection}
            t={t}
          />
          {highlights(t).map((highlight, i) => (
            <div className={styles.highlight} key={i}>
              <highlight.icon />
              <span className={styles.hook}>{highlight.hook}</span>
              <span>
                {Array.isArray(highlight.description)
                  ? highlight.description.map((d, j) => <p key={j}>{d}</p>)
                  : highlight.description}
              </span>
              {highlight.link && (
                <Link href={highlight.link.route}>
                  <a title={highlight.link.alt}>{highlight.link.text} &rarr;</a>
                </Link>
              )}
            </div>
          ))}
        </section>

        <section className={styles.links} id={Section.LINKS}>
          <NavDot
            section={Section.LINKS}
            activeNavSection={activeNavSection}
            setActiveNavSection={setActiveNavSection}
            t={t}
          />
          {contactInfo.map((link, i) => (
            <a
              className={styles.link}
              key={i}
              title={link.label}
              href={link.isEmail ? `mailto:${link.url}` : `https://${link.url}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.icon}>
                <link.icon size={link.iconProps?.size} />
              </div>
              <span className={styles.label}>{link.label}</span>
            </a>
          ))}
        </section>
      </div>
    </div>
  )
}
