import styles from './styles.module.scss'

import { ExperienceInfoOrientation, ExperienceModel } from './models'
import { ExperienceInfoSharedData } from './experienceInfoSharedData'

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
      <ExperienceInfoSharedData model={model} />
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
