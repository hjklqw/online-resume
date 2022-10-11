import styles from './styles.module.scss'

import {
  awardTypeIconMap,
  contactInfo,
  education,
  experience,
  languages,
  miscExperience,
  scholarshipsAndAwards,
  skills,
} from './data'
import { ExperienceInfo } from './experienceInfo'
import { ContactInfoType, ExperienceInfoOrientation } from './models'
import { Section } from './section'

export const ResumePage = () => (
  <>
    <div className={styles.row}>
      <Section
        headerText="Contact"
        hideSeparator
        className={styles.contactInfo}
      >
        {contactInfo.map((info, i) => {
          const contents = (
            <>
              <div className={styles.icon}>
                <info.icon {...(info.iconProps || {})} />
              </div>
              <span className={styles.text}>{info.text}</span>
            </>
          )
          return (
            <div key={i}>
              {info.type !== ContactInfoType.NONE ? (
                <a
                  key={i}
                  href={
                    info.type === ContactInfoType.EMAIL
                      ? `mailto:${info.text}`
                      : `https://${info.text}`
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {contents}
                </a>
              ) : (
                contents
              )}
            </div>
          )
        })}
      </Section>

      <Section headerText="Education">
        <ExperienceInfo model={education} />
      </Section>
    </div>

    <Section headerText="Skills">
      {skills.map((skill, i) => (
        <div key={i} className={styles.skill}>
          <h3 className={styles.categoryText}>{skill.category}</h3>
          <ul>
            {skill.points.map((p, j) =>
              Array.isArray(p) ? (
                <ul key={j}>
                  {p.map((subpoint, k) => (
                    <li key={k}>{subpoint}</li>
                  ))}
                </ul>
              ) : (
                <li key={j}>{p}</li>
              )
            )}
          </ul>
        </div>
      ))}
    </Section>

    <Section headerText="Experience">
      {experience.map((exp, i) => (
        <ExperienceInfo
          model={exp}
          orientation={ExperienceInfoOrientation.HORIZONTAL}
          key={i}
        />
      ))}
    </Section>

    <Section headerText="Misc Experience">
      {miscExperience.map((exp, i) => (
        <ExperienceInfo
          model={exp}
          orientation={ExperienceInfoOrientation.HORIZONTAL}
          key={i}
        />
      ))}
    </Section>

    <Section headerText="Scholarships and Awards">
      <div className={styles.awardsInfo}>
        {scholarshipsAndAwards.map((s, i) => {
          const icon = awardTypeIconMap[s.type]
          return (
            <div key={i} className={styles.award}>
              <icon.icon size={icon.size} />
              <span className={styles.title}>{s.title}</span>
              <span className={styles.date}>{s.date}</span>
            </div>
          )
        })}
      </div>
    </Section>

    <Section headerText="Languages">
      <div className={`${styles.awardsInfo} ${styles.languagesInfo}`}>
        {languages.map((language, i) => (
          <div key={i} className={styles.award}>
            <span className={styles.title}>{language.name}</span>
            <span className={styles.proficiency}>{language.proficiency}</span>
            <span className={styles.date}>{language.description}</span>
          </div>
        ))}
      </div>
    </Section>
  </>
)
