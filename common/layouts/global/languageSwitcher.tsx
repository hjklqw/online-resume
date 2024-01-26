import { useRouter } from 'next/router'

import styles from './styles.module.scss'
import { TbLanguage as LanguageIcon } from 'react-icons/tb'

export const LanguageSwitcher = () => {
  const router = useRouter()
  const isEnglish = router.locale === 'en'

  function switchLanguage() {
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      undefined,
      { locale: isEnglish ? 'ja' : 'en' }
    )
  }

  return (
    <button
      className={styles.languageSwitcher}
      onClick={switchLanguage}
      title="JP currently available on landing page only!"
    >
      <LanguageIcon />
      {isEnglish ? 'EN' : '日本語'}
    </button>
  )
}
