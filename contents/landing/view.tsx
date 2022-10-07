import { useRef, useState } from 'react'
import styles from './styles.module.scss'

/** In miliseconds */
const RIPPLE_EFFECT_ANIM_LENGTH = 500

type Coords = { x: number; y: number }

export const LandingPage = () => {
  const [isShowingRippleEffect, setShowingRippleEffect] =
    useState<boolean>(false)
  const rippleEffectCoords = useRef<Coords>({ x: 0, y: 0 })

  function addRippleEffect(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (isShowingRippleEffect) return
    rippleEffectCoords.current = { x: e.clientX, y: e.clientY }
    setShowingRippleEffect(true)
    setTimeout(() => setShowingRippleEffect(false), RIPPLE_EFFECT_ANIM_LENGTH)
  }

  return (
    <div className={styles.wrapper} onClick={addRippleEffect}>
      <div className={styles.bgCircle}>
        <span />
        <span />
      </div>

      <header className={styles.header}>
        <h2>Web Dev</h2>
        <h1>Michelle Poon</h1>
        <h3>
          Full-stack software eingeer and web developer,&nbsp;
          <br />
          specializing in the front end
        </h3>
      </header>
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
