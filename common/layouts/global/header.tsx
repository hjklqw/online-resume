import Link from 'next/link'
import { SetterOrUpdater } from 'recoil'
import React, { useCallback, useEffect, useState } from 'react'

import { MdLocalDrink } from 'react-icons/md'
import { HiDocumentText } from 'react-icons/hi'
import { RiLightbulbFlashLine, RiLightbulbLine } from 'react-icons/ri'

import styles from './styles.module.scss'

import { Routes } from '/assets/routes'
import { Theme } from '/assets/theme'
import { getScrollRoot } from './utils'

type Props = {
  theme: string | undefined
  setTheme: SetterOrUpdater<string>
}

/** The amount of time this should take to fade away, in miliseconds */
const FADE_TIME = 350

export const Header = ({ theme, setTheme }: Props) => {
  const [isSticky, setSticky] = useState<boolean>(false)
  const [isFading, setFading] = useState<boolean>(false)

  const onScroll = useCallback(
    (e: Event) => {
      const container = e.target as HTMLDivElement
      if (container.scrollTop > window.innerHeight / 2) {
        setSticky(true)
      } else if (isSticky) {
        setFading(true)
        setTimeout(() => {
          setSticky(false)
          setFading(false)
        }, FADE_TIME)
      }
    },
    [isSticky]
  )

  useEffect(() => {
    getScrollRoot()?.addEventListener('scroll', onScroll)
    return () => getScrollRoot()?.removeEventListener('scroll', onScroll)
  }, [onScroll])

  const className = [
    styles.nav,
    isSticky && styles.sticky,
    isFading && styles.fade,
  ]
    .filter((style) => !!style)
    .join(' ')

  return (
    <section className={className}>
      <Link href={Routes.HOME}>
        <a className={styles.siteName} title="Home">
          The <span>O</span>nline Resume
        </a>
      </Link>
      <nav>
        <Link href={Routes.HOME} title="Home">
          <a>
            <HiDocumentText />
            <span>Resume</span>
          </a>
        </Link>
        <Link href={Routes.DELICIOUSNESS} title="A recipe">
          <a>
            <MdLocalDrink />
            <span>Deliciousness</span>
          </a>
        </Link>
        {theme === Theme.DEFAULT ? (
          <RiLightbulbFlashLine
            onClick={() => setTheme(Theme.DARK)}
            title="Turn off"
          />
        ) : (
          <RiLightbulbLine
            onClick={() => setTheme(Theme.DEFAULT)}
            title="Turn on"
          />
        )}
      </nav>
    </section>
  )
}
