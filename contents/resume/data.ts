import { TFunction } from 'next-i18next'

import { IconBaseProps, IconType } from 'react-icons'
import { IoLocationSharp } from 'react-icons/io5'
import { RiHonourLine } from 'react-icons/ri'
import { TbAward } from 'react-icons/tb'
import { MdOutlineSchool } from 'react-icons/md'

import { ContactInfoType, ExperienceModel } from './models'
import { contactInfo as baseContactInfo } from 'assets/sharedData'

export const contactInfo = (
  t: TFunction
): {
  icon: IconType
  iconProps?: IconBaseProps
  text: string
  type: ContactInfoType
}[] => [
  ...baseContactInfo.map((info) => ({
    icon: info.icon,
    iconProps: info.iconProps,
    text: info.url,
    type: info.isEmail ? ContactInfoType.EMAIL : ContactInfoType.LINK,
  })),
  {
    icon: IoLocationSharp,
    iconProps: { size: '1.4em', style: { marginLeft: '-0.2em' } },
    text: t('contact.canada'),
    type: ContactInfoType.NONE,
  },
]

export const skills: { category: string; points: (string | string[])[] }[] = [
  {
    category: 'Technical',
    points: [
      'Proficiency with:',
      [
        'Javascript (React, Typescript, ES6+)',
        'React frameworks (Next.js, Redux, Recoil, React Router)',
        'HTML5',
        'Styling (CSS3, SASS, styled-components, MUI, vanilla-extract)',
        'Backend technologies (Node.js Express, C# .Net Core)',
        'Databases (MongoDB, CosmosDB, Apollo GraphQL, PostgreSQL)',
        'Testing (Cypress, Jest, Mocha, Jasmine, React Testing Library, Storybook)',
        'DevOps (Github, Jira, Azure DevOps)',
        'Source control (Git, Perforce)',
      ],
      'Experience with:',
      [
        'Other frameworks and languages (Ruby on Rails, Angular, Python, C++, Java)',
        'Other databases, ORMs, and data management tools (Redis, ElasticSearch, Kibana, Supabase, Prisma)',
        'Hosting and other DevOps (Docker, Azure Cloud, Github CI/CD, CircleCI, Launch Darkly)',
        'Gaming and creative software (Unreal Engine, 3ds Max, Blender, ZBrush, Sketchup, Photoshop, Clip Studio Paint, Daz Studio, FL Studio)',
      ],
      'Extensive full-stack, responsive, cross-browser and cross-platform development practise',
      'Speed and willingness to learn and apply new programming languages, styles, and concepts',
    ],
  },
  {
    category: 'Communication',
    points: [
      'Guided colleagues on syntax and logic flow while collaboratively developing an application',
      'Explained advanced programmatic and design ideas to first year game development students as a teaching assistant, providing technical feedback on assignments',
      'Comfortable with technical discussions across different disciplines, and conversing directly with Product Managers and Design teams',
      'Used the following communication, design sharing, and task tracking technologies:',
      [
        'Slack',
        'Microsoft Teams',
        'Figma',
        'Micro',
        'Jira',
        'Github',
        'Azure DevOps',
      ],
    ],
  },
  {
    category: 'Organization/Teamwork',
    points: [
      'Collaborated in agile environments and participated in daily stand-ups, peer code reviews, pair programming and frequent technical discussions',
      'Regularly worked remotely and with other remote, distributed, and cross-functional team members',
      'Self-motivated with a high degree of autonomy and comfortable with all team sizes',
    ],
  },
]

export const miscExperience: ExperienceModel[] = [
  {
    title: 'Co-Op Full-Stack Web Developer',
    location: 'Bank Of Canada, Ottawa, ON',
    dates: 'April 2014 – August 2014',
    points: [
      'Worked in a cross-functional Agile Scrum team to improve, bug fix, and add to the bank’s main and Museum PHP sites',
      'Styled the majority of the Bank’s responsive Museum site based on supplied design files',
      'Used BEHAT to create automated tests for UI and functionality',
    ],
  },
  {
    title: 'Co-Op Full-Stack Web Developer',
    location: 'BOLDstreet Wireless, Ottawa, ON',
    dates: 'September 2013 – January 2014',
    points: [
      'Built a credit card and registration system on top of a base website with a partner to facilitate users in purchasing internet time with a user-friendly interface, learning how to work with the code of an established system and how to design and incorporate databases into relevant projects, practicing both front and back-end development',
      'Finished building a site from scratch in two days based on given wireframes',
    ],
  },
  {
    title: 'User Application Support/Junior Programmer Analyst',
    location: 'Department of Justice Canada, Ottawa ON',
    dates: 'July 2013 – September 2013',
    points: [
      'Tested for and reported bugs, practising iterative error checking and gaining familiarity with common coding mistakes',
      'Investigated causes and solutions of bugs found by others on a list of thrown exceptions, providing detailed fixes and/or bug reports, facilitating the development of software solutions',
    ],
  },
  {
    title: 'Teaching Assistant',
    location: 'Carleton University, Ottawa ON',
    dates: 'January 2013 – May 2013',
    points: [
      'Marked the assignments of first year game development students, giving detailed feedback concerning design and code concepts, both providing thorough support and gaining experience in doing so, along with learning from the diversity of their work',
      'Communicated often with the professor to ensure that feedback delivery was well done and within the bounds of what he was looking for, gaining proficiency and understanding in methods of evaluating complex concepts',
    ],
  },
]

enum AwardType {
  HONORS,
  SCHOLARSHIP,
  AWARD,
}

export const scholarshipsAndAwards: {
  title: string
  date: string
  type: AwardType
}[] = [
  { title: "Dean's Honour List", date: 'January 2015', type: AwardType.HONORS },
  {
    title: 'General In-Course Scholarship',
    date: 'January 2015',
    type: AwardType.SCHOLARSHIP,
  },
  {
    title: 'Regional Japanese Speech Contest, 2nd place',
    date: 'January 2015',
    type: AwardType.AWARD,
  },
  { title: "Dean's Honour List", date: 'January 2013', type: AwardType.HONORS },
  {
    title: 'Lester Bowles Pearson Scholarship',
    date: 'January 2013',
    type: AwardType.SCHOLARSHIP,
  },
]

export const awardTypeIconMap: {
  [key in AwardType]: {
    icon: IconType
    size?: string
  }
} = {
  [AwardType.HONORS]: {
    icon: RiHonourLine,
    size: '0.9em',
  },
  [AwardType.SCHOLARSHIP]: {
    icon: MdOutlineSchool,
    size: '1.08em',
  },
  [AwardType.AWARD]: {
    icon: TbAward,
  },
}

export const languages: {
  name: string
  proficiency: string
  description: string
}[] = [
  {
    name: 'English',
    proficiency: 'Native',
    description:
      "The language I've been using professionally since the beginning",
  },
  { name: 'Cantonese', proficiency: 'Native', description: 'Speaking only' },
  {
    name: 'Japanese',
    proficiency: 'Advanced',
    description:
      'Limited working proficiency, but fine for non-technical conversations',
  },
  {
    name: 'German',
    proficiency: 'Intermediate-low',
    description: "Haven't used in a while!",
  },
]
