import React, { useState } from 'react'
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
          />
          <h2>Web Dev</h2>
          <h1>Michelle Poon</h1>
          <h3>
            Full-stack software engineer and web developer,&nbsp;
            <br />
            specializing in the front end
          </h3>
        </header>

        <span className={styles.navBar} />

        <section className={styles.highlights} id={Section.HIGHLIGHTS}>
          <NavDot
            section={Section.HIGHLIGHTS}
            activeNavSection={activeNavSection}
            setActiveNavSection={setActiveNavSection}
          />
          {highlights.map((highlight, i) => (
            <div className={styles.highlight} key={i}>
              <highlight.icon />
              <span className={styles.hook}>{highlight.hook}</span>
              <span>
                {Array.isArray(highlight.description)
                  ? highlight.description.map((d, j) => <p key={j}>{d}</p>)
                  : highlight.description}
              </span>
              {highlight.link && (
                <Link href={highlight.link.route} title={highlight.link.alt}>
                  <a>{highlight.link.text} &rarr;</a>
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
