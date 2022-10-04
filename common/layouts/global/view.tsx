import Link from 'next/link'

import { MdLocalDrink } from 'react-icons/md'
import { HiDocumentText } from 'react-icons/hi'
import { RiLightbulbFlashLine, RiLightbulbLine } from 'react-icons/ri'

import styles from './styles.module.scss'

import { Routes } from '/assets/routes'
import { themeAtom } from '/utils/recoil/theme.atom'
import { Theme } from '/assets/theme'
import { useMountedRecoilState } from '/utils/recoil/useMountedRecoilState'

type Props = {
  title: string
  subtitle: string
  children: React.ReactNode
}

export const GlobalLayout = ({ title, subtitle, children }: Props) => {
  const [theme, setTheme] = useMountedRecoilState(themeAtom)

  return (
    <div className={`${styles.wrapper} theme-${theme}`}>
      <section className={styles.nav}>
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

      <section className={styles.content}>
        <header className={styles.header}>
          <h1>{title}</h1>
          <div className={styles.subtitle}>
            <span>{subtitle}</span>
            <hr />
          </div>
        </header>
        <main>{children}</main>
      </section>

      <footer className={styles.footer}>&copy; Michelle Poon, 2022</footer>
    </div>
  )
}
