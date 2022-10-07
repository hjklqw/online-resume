import styles from './styles.module.scss'

type Props = {
  label: string
  top: number
  index: number
  currSelectedIndex: number
  setActiveNavIndex: React.Dispatch<React.SetStateAction<number>>
}

export const NavDot = (props: Props) => {
  const isActive = props.index === props.currSelectedIndex
  return (
    <div
      className={`${styles.dot} ${isActive ? styles.active : ''}`}
      style={{ top: `${props.top}%` }}
      onClick={() => {
        props.setActiveNavIndex(props.index)
        document
          .getElementById(props.label)
          ?.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }}
      title={props.label}
    >
      <span className={styles.label}>{props.label}</span>
    </div>
  )
}
