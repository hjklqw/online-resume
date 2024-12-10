import Image from 'next/image'

import { FaGithub } from 'react-icons/fa'

import styles from './styles.module.scss'
import { ExternalLink } from './externalLink'

type Props = {
  name: string
  description: JSX.Element
  imageSrc: string
  link: string
  githubLink: string
}

export const Sample = ({
  name,
  description,
  imageSrc,
  link,
  githubLink,
}: Props) => {
  return (
    <article className={styles.sample}>
      <section className={styles.image}>
        <ExternalLink href={link}>
          <Image
            src={`/samples/${imageSrc}`}
            alt={name}
            width={1618}
            height={1032}
            layout="responsive"
          />
        </ExternalLink>
      </section>
      <section className={styles.description}>
        <section>
          <h3>
            <ExternalLink href={link}>{name}</ExternalLink>
          </h3>
          {description}
        </section>
        {githubLink && (
          <section>
            <ExternalLink href={githubLink}>
              <FaGithub fontSize="2em" />
            </ExternalLink>
          </section>
        )}
      </section>
    </article>
  )
}
