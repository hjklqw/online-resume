import { useRouter } from 'next/router'
import { GiSadCrab } from 'react-icons/gi'

import styles from './styles.module.scss'

export const NotFoundPage = () => {
  const router = useRouter()
  return (
    <div className={styles.wrapper} onClick={router.back}>
      <GiSadCrab />
      <p>Return to whence you came</p>
    </div>
  )
}
