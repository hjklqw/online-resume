import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import { SetterOrUpdater } from 'recoil'
import { IconType } from 'react-icons'

import { RiLightbulbFlashLine, RiLightbulbLine } from 'react-icons/ri'
import { IoIosHome } from 'react-icons/io'
import { GiHeartDrop } from 'react-icons/gi'
import { TbClipboardText } from 'react-icons/tb'

import styles from './styles.module.scss'

import { Routes } from '/assets/routes'
import { Theme } from '/assets/theme'
import { getScrollRoot } from 'utils/document'

type Props = {
  theme: string | undefined
  setTheme: SetterOrUpdater<string>
}

/** The amount of time this should take to fade away, in miliseconds */
const FADE_TIME = 350

const navItems: {
  [key in Routes]: { icon: IconType; label: string; alt: string }
} = {
  [Routes.LANDING]: {
    icon: IoIosHome,
    label: 'Home',
    alt: 'Overview',
  },
  [Routes.DELICIOUSNESS]: {
    icon: GiHeartDrop,
    label: 'Deliciousness',
    alt: 'A recipe',
  },
}

export const Header = ({ theme, setTheme }: Props) => {
  const [isSticky, setSticky] = useState<boolean>(false)
  const [isFading, setFading] = useState<boolean>(false)

  const isDefaultTheme = theme === Theme.DEFAULT

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
      <Link href={Routes.LANDING}>
        <a className={styles.siteName} title="Home">
          The <span>O</span>nline Resume
        </a>
      </Link>
      <nav>
        {Object.entries(navItems).map(([route, data]) => (
          <Link href={route} title={data.alt} key={route}>
            <a>
              <data.icon />
              <span>{data.label}</span>
            </a>
          </Link>
        ))}
        <button
          className={styles.themeButton}
          onClick={() => setTheme(isDefaultTheme ? Theme.DARK : Theme.DEFAULT)}
          title={isDefaultTheme ? 'Turn off' : 'Turn on'}
        >
          {isDefaultTheme ? <RiLightbulbFlashLine /> : <RiLightbulbLine />}
        </button>
      </nav>
    </section>
  )
}
