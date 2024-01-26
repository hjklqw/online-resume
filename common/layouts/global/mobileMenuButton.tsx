import styles from './styles.module.scss'

type Props = {
  onClick: () => void
  isMenuOpen: boolean
}

export const MobileMenuButton = ({ onClick, isMenuOpen }: Props) => (
  <button
    type="button"
    onClick={onClick}
    className={`${styles.mobileMenuButton} ${isMenuOpen ? styles.open : ''}`}
  >
    <span />
    <span />
    <span />
  </button>
)
