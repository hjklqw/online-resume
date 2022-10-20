import { useCallback, useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'

import styles from './styles.module.scss'
import { getScrollRoot } from '/utils/document'

function scrollBackToTop() {
  getScrollRoot()?.scrollTo({ top: 0 })
}

export const BackToTopButton = () => {
  const [isShowing, setShowing] = useState<boolean>(false)

  const onScroll = useCallback((e: Event) => {
    const container = e.target as HTMLDivElement
    setShowing(container.scrollTop > window.innerHeight / 2)
  }, [])

  useEffect(() => {
    getScrollRoot()?.addEventListener('scroll', onScroll)
    return () => getScrollRoot()?.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return (
    <button
      className={`${styles.backToTopButton} ${isShowing ? '' : styles.hidden}`}
      title="Back to top"
      onClick={scrollBackToTop}
    >
      <MdOutlineKeyboardArrowUp />
    </button>
  )
}
