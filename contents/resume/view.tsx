import styles from './styles.module.scss'

import {
  awardTypeIconMap,
  contactInfo,
  education,
  experience,
  languages,
  miscExperience,
  overview,
  scholarshipsAndAwards,
  sections,
  skills,
} from './data'
import { ExperienceInfo } from './experienceInfo'
import {
  ContactInfoType,
  DataSection,
  ExperienceInfoOrientation,
} from './models'
import { Section } from './section'
import { JobInfo } from './jobInfo'
import Link from 'next/link'

export const ResumePage = () => (
  <>
    <Section section={DataSection.OVERVIEW} hideSeparator>
      {overview}
    </Section>

    <p>See specifics:</p>
    <nav className={styles.nav}>
      {Object.values(sections)
        .slice(1)
        .map((s) => (
          <Link href={`#${s.id}`} key={s.id}>
            {s.label}
          </Link>
        ))}
    </nav>

    <hr className={styles.separator} />

    <div className={styles.row}>
      <Section
        section={DataSection.CONTACT}
        className={styles.contactInfo}
        hideSeparator
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

      <Section section={DataSection.EDUCATION}>
        <ExperienceInfo model={education} />
      </Section>
    </div>

    <Section section={DataSection.SKILLS}>
      {skills.map((skill, i) => (
        <div key={i} className={styles.skill}>
          <h3 className={styles.categoryText}>
            <span>{skill.category}</span>
          </h3>
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

    <Section section={DataSection.EXPERIENCE}>
      {experience.map((exp, i) => (
        <JobInfo model={exp} key={i} />
      ))}
    </Section>

    <Section section={DataSection.MISC_EXPERIENCE}>
      {miscExperience.map((exp, i) => (
        <ExperienceInfo
          model={exp}
          orientation={ExperienceInfoOrientation.HORIZONTAL}
          key={i}
        />
      ))}
    </Section>

    <Section section={DataSection.AWARDS}>
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

    <Section section={DataSection.LANGUAGES}>
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
