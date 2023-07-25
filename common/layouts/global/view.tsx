import styles from './styles.module.scss'

import { themeAtom } from '/utils/recoil/theme.atom'
import { useMountedRecoilState } from '/utils/recoil/useMountedRecoilState'
import { Header } from './header'
import { useRippleEffect } from './rippleEffect'
import { BackToTopButton } from './backToTop'

type Props = {
  children: React.ReactNode
}

export const GlobalLayout = ({ children }: Props) => {
  const [theme, setTheme] = useMountedRecoilState(themeAtom)
  const { addRippleEffect, Effect } = useRippleEffect()

  return (
    <div
      className={`${styles.wrapper} theme-${theme}`}
      onClick={addRippleEffect}
    >
      <Header theme={theme} setTheme={setTheme} />
      {children}

      <footer className={styles.footer}>&copy; Michelle Poon, 2023</footer>
      <BackToTopButton />
      <Effect />
    </div>
  )
}
