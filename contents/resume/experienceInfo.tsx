import styles from './styles.module.scss'

import { ExperienceInfoOrientation, ExperienceModel } from './models'

type Props = {
  model: ExperienceModel
  /** VERTICAL by default */
  orientation?: ExperienceInfoOrientation
}

export const ExperienceInfo = ({ model, orientation }: Props) => (
  <div
    className={`${styles.experienceInfo} ${
      styles[orientation || ExperienceInfoOrientation.VERTICAL]
    }`}
  >
    <section className={styles.experienceData}>
      <span>{model.title}</span>
      <span>{model.location}</span>
      <span>{model.dates}</span>
    </section>
    <section className={styles.experiencePoints}>
      <ul>
        {model.points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </section>
  </div>
)
