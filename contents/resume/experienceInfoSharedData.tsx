import styles from './styles.module.scss'
import { IoLocationOutline as LocationIcon } from 'react-icons/io5'
import { TbBuildingEstate as CompanyIcon } from 'react-icons/tb'
import { FiCalendar as DateIcon } from 'react-icons/fi'

import { BaseExperienceModel } from './models'

type Props = {
  model: BaseExperienceModel
}

export const ExperienceInfoSharedData = ({ model }: Props) => (
  <>
    <span className={styles.title}>{model.title}</span>
    <div className={styles.companyAndLocation}>
      <div className={styles.withIcon}>
        <CompanyIcon />
        {model.company.name}
      </div>
      ,&nbsp;
      <div className={styles.withIcon}>
        <LocationIcon />
        {model.company.location}
      </div>
    </div>
    <div className={styles.withIcon}>
      <DateIcon />
      {model.dates}
    </div>
  </>
)
