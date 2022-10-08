import React, { useCallback, useRef, useState } from 'react'

import styles from './styles.module.scss'

import { NavDot } from './navDot'
import { highlights } from './data'
import { getScrollRoot } from 'utils/document'
import { Coords, Section } from './models'
import { contactInfo } from '/assets/sharedData'

/** In miliseconds */
const RIPPLE_EFFECT_ANIM_LENGTH = 500

export const LandingPage = () => {
  const [isShowingRippleEffect, setShowingRippleEffect] =
    useState<boolean>(false)
  const rippleEffectCoords = useRef<Coords>({ x: 0, y: 0 })

  const [activeNavSection, setActiveNavSection] = useState<Section>(
    Section.OVERVIEW
  )

  const addRippleEffect = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (isShowingRippleEffect) return
      rippleEffectCoords.current = {
        x: e.clientX,
        y: (getScrollRoot()?.scrollTop || 0) + e.clientY,
      }
      setShowingRippleEffect(true)
      setTimeout(() => setShowingRippleEffect(false), RIPPLE_EFFECT_ANIM_LENGTH)
    },
    [isShowingRippleEffect, setShowingRippleEffect]
  )

  return (
    <div className={styles.wrapper} onClick={addRippleEffect}>
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
            top="0"
          />
          <h2>Web Dev</h2>
          <h1>Michelle Poon</h1>
          <h3>
            Full-stack software eingeer and web developer,&nbsp;
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

        <span
          className={`${styles.rippleEffect} ${
            isShowingRippleEffect ? styles.showing : ''
          }`}
          style={{
            top: rippleEffectCoords.current.y,
            left: rippleEffectCoords.current.x,
          }}
        />
      </div>
    </div>
  )
}
