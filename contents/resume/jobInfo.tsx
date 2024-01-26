import { TFunction } from 'next-i18next'
import styles from './styles.module.scss'

import { ExperienceInfoOrientation, JobModel } from './models'

type Props = {
  model: JobModel
  t: TFunction
}

export const JobInfo = ({ model, t }: Props) => (
  <div
    className={`${styles.jobInfo} ${styles.experienceInfo} ${
      styles[ExperienceInfoOrientation.HORIZONTAL]
    }`}
  >
    <section className={styles.experienceData}>
      <span>{model.title}</span>
      <span>
        {model.company.name}, {model.company.location}
      </span>
      <span>{model.dates}</span>
      <span>
        <span>{t('jobInfoLabels.companySize')}</span>
        <span>{model.company.size}</span>
      </span>
      <span>
        <span>{t('jobInfoLabels.industry')}</span>
        <span>{model.company.industry}</span>
      </span>
      <span>
        <span>{t('jobInfoLabels.stack')}</span>
        <span>{model.stack}</span>
      </span>
      <span>
        <span>{t('jobInfoLabels.methodology')}</span>
        <span>{model.methodology}</span>
      </span>
      <span>
        <span>{t('jobInfoLabels.teamSize')}</span>
        <span>{model.teamSize}</span>
      </span>
    </section>

    <section className={styles.experiencePoints}>
      {Object.entries(model.description).map(([task, points]) => (
        <div className={styles.task} key={task}>
          <span>{task}</span>
          <ul>
            {points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  </div>
)
