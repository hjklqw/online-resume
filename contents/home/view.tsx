import styles from './styles.module.scss'

import { contactInfo, education, experience, skills } from './data'
import { ExperienceInfo } from './experienceInfo'
import { ExperienceInfoOrientation } from './models'

export const HomePage = () => (
  <>
    <div className={styles.row}>
      <section className={`${styles.info} ${styles.contactInfo}`}>
        <h2>Contact</h2>
        {contactInfo.map((info, i) => {
          const contents = (
            <>
              <div className={styles.icon}>
                <info.icon />
              </div>
              <span className={styles.text}>{info.text}</span>
            </>
          )
          return (
            <div key={i}>
              {info.isLink ? (
                <a
                  key={i}
                  href={`https://${info.text}`}
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
      </section>

      <hr className={styles.separator} />

      <section className={styles.info}>
        <h2>Education</h2>
        <ExperienceInfo model={education} />
      </section>
    </div>

    <hr className={styles.separator} />

    <section className={styles.info}>
      <h2>Skills</h2>
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
    </section>

    <hr className={styles.separator} />

    <section className={styles.info}>
      <h2>Experience</h2>
      {experience.map((exp, i) => (
        <ExperienceInfo
          model={exp}
          orientation={ExperienceInfoOrientation.HORIZONTAL}
          key={i}
        />
      ))}
    </section>
  </>
)
