import styles from './styles.module.scss'

import { themeAtom } from '/utils/recoil/theme.atom'
import { useMountedRecoilState } from '/utils/recoil/useMountedRecoilState'
import { Header } from './header'

type Props = {
  title: string
  subtitle: string
  children: React.ReactNode
}

export const GlobalLayout = ({ title, subtitle, children }: Props) => {
  const [theme, setTheme] = useMountedRecoilState(themeAtom)

  return (
    <div className={`${styles.wrapper} theme-${theme}`}>
      <Header theme={theme} setTheme={setTheme} />

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
