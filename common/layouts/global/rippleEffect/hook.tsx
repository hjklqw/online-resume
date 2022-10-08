import React, { useCallback, useRef, useState } from 'react'

import styles from './styles.module.scss'

/** In miliseconds */
const RIPPLE_EFFECT_ANIM_LENGTH = 500

export type Coords = { x: number; y: number }

export function useRippleEffect() {
  const [isShowingRippleEffect, setShowingRippleEffect] =
    useState<boolean>(false)
  const rippleEffectCoords = useRef<Coords>({ x: 0, y: 0 })

  const addRippleEffect = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (isShowingRippleEffect) return
      rippleEffectCoords.current = {
        x: e.clientX,
        y: e.clientY,
      }
      setShowingRippleEffect(true)
      setTimeout(() => setShowingRippleEffect(false), RIPPLE_EFFECT_ANIM_LENGTH)
    },
    [isShowingRippleEffect, setShowingRippleEffect]
  )

  const Effect = () => (
    <span
      className={`${styles.rippleEffect} ${
        isShowingRippleEffect ? styles.showing : ''
      }`}
      style={{
        top: rippleEffectCoords.current.y,
        left: rippleEffectCoords.current.x,
      }}
    />
  )

  return { addRippleEffect, Effect }
}
