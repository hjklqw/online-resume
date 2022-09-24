import Link from 'next/link'
import { MdLocalDrink } from 'react-icons/md'
import { HiDocumentText } from 'react-icons/hi'

import styles from './styles.module.scss'
import { Routes } from '/assets/routes'

type Props = {
  title: string
  subtitle: string
  children: React.ReactNode
}

export const GlobalLayout = ({ title, subtitle, children }: Props) => (
  <div className={styles.wrapper}>
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
