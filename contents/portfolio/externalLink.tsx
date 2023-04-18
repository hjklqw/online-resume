type Props = {
  href: string
  children: React.ReactNode
}

export const ExternalLink = ({ href, children }: Props) =>
  href === '' ? (
    <>{children}</>
  ) : (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
