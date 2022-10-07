import React, { useCallback, useRef, useState } from 'react'

import styles from './styles.module.scss'

import { NavDot } from './navDot'
import { highlights } from './data'
import { getScrollRoot } from '/common/layouts/global/utils'

/** In miliseconds */
const RIPPLE_EFFECT_ANIM_LENGTH = 500

type Coords = { x: number; y: number }

enum Sections {
  OVERVIEW = 'Overview',
  HIGHLIGHTS = 'Highlights',
}

export const LandingPage = () => {
  const [isShowingRippleEffect, setShowingRippleEffect] =
    useState<boolean>(false)
  const rippleEffectCoords = useRef<Coords>({ x: 0, y: 0 })

  const [activeNavIndex, setActiveNavIndex] = useState<number>(0)

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

      <header className={styles.header} id={Sections.OVERVIEW}>
        <h2>Web Dev</h2>
        <h1>Michelle Poon</h1>
        <h3>
          Full-stack software eingeer and web developer,&nbsp;
          <br />
          specializing in the front end
        </h3>
      </header>

      <nav className={styles.nav}>
        <NavDot
          label={Sections.OVERVIEW}
          top={0}
          index={0}
          currSelectedIndex={activeNavIndex}
          setActiveNavIndex={setActiveNavIndex}
        />
        <NavDot
          label={Sections.HIGHLIGHTS}
          top={50}
          index={1}
          currSelectedIndex={activeNavIndex}
          setActiveNavIndex={setActiveNavIndex}
        />
      </nav>

      <section className={styles.highlights} id={Sections.HIGHLIGHTS}>
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
  )
}
