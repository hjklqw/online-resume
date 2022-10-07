import styles from './styles.module.scss'

import { themeAtom } from '/utils/recoil/theme.atom'
import { useMountedRecoilState } from '/utils/recoil/useMountedRecoilState'
import { Header } from './header'

type Props = {
  mainContents: React.ReactNode
  subLayout?: React.ReactNode
}

export const GlobalLayout = ({ mainContents, subLayout }: Props) => {
  const [theme, setTheme] = useMountedRecoilState(themeAtom)

  return (
    <div className={`${styles.wrapper} theme-${theme}`}>
      <Header theme={theme} setTheme={setTheme} />

      <section className={styles.content}>
        {subLayout}
        <main>{mainContents}</main>
      </section>

      <footer className={styles.footer}>&copy; Michelle Poon, 2022</footer>
    </div>
  )
}
