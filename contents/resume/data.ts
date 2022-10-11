import { IconBaseProps, IconType } from 'react-icons'
import { IoLocationSharp } from 'react-icons/io5'
import { RiHonourLine } from 'react-icons/ri'
import { TbAward } from 'react-icons/tb'
import { MdOutlineSchool } from 'react-icons/md'

import { ContactInfoType, ExperienceModel } from './models'
import { contactInfo as baseContactInfo } from 'assets/sharedData'

export const contactInfo: {
  icon: IconType
  iconProps?: IconBaseProps
  text: string
  type: ContactInfoType
}[] = [
  ...baseContactInfo.map((info) => ({
    icon: info.icon,
    iconProps: info.iconProps,
    text: info.url,
    type: info.isEmail ? ContactInfoType.EMAIL : ContactInfoType.LINK,
  })),
  {
    icon: IoLocationSharp,
    iconProps: { size: '1.4em', style: { marginLeft: '-0.2em' } },
    text: 'Canada',
    type: ContactInfoType.NONE,
  },
]

export const education: ExperienceModel = {
  title: 'BCS Honours Game Development Stream',
  location: 'Carleton University, Ottawa ON',
  dates: 'September 2011 – December 2015',
  points: [
    'Co-op option',
    'Masters Accelerated stream',
    'Minor in Japanese and German',
  ],
}

export const skills: { category: string; points: (string | string[])[] }[] = [
  {
    category: 'Technical',
    points: [
      'Proficiency with:',
      [
        'Javascript (React, Typescript, ES6+)',
        'React frameworks (Next.js, Redux, Recoil, React Router)',
        'HTML5',
        'CSS3 (SASS, styled-components)',
        'Backend technologies (Node.js Express, C# .Net Core)',
        'Databases (MongoDB, CosmosDB, Apollo GraphQL)',
        'Testing (Cypress, Jest, Storybook)',
        'DevOps (Github, Jira, Azure DevOps)',
      ],
      'Experience with:',
      [
        'Other frameworks and languages (Angular, Python, C++, Java)',
        'Other databases (Postgres, Redis)',
        'Hosting and other DevOps (Docker, Azure Cloud, Github CI/CD)',
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
      'Used the following communication and task tracking technologies:',
      ['Slack', 'Microsoft Teams'],
    ],
  },
  {
    category: 'Organization/Teamwork',
    points: [
      'Collaborated in agile environments and participated in daily stand-ups, peer code reviews, pair programming and frequent technical discussions',
      'Regularly worked remotely and with other remote, distributed, cross-functional team members',
    ],
  },
]

export const experience: ExperienceModel[] = [
  {
    title: 'Senior Front-End Developer',
    location: 'EInc., Remote',
    dates: 'November 2021 - Present',
    points: [
      'Worked in an agile team to add new features to a large car dealership management app, creating animated dashboard components, as well as laying out large amounts of data in clear and attractive ways',
      'Established the basis for complex integration testing via creation of custom cypress commands',
    ],
  },
  {
    title: 'Web and Software Developer',
    location: 'Noka Software and Creative Inc, Remote',
    dates: 'May 2020 – November 2021',
    points: [
      'Independently built a fully responsive, internationalized site with a complex form system, delivering a finished and polished product to the client in under four weeks',
      'Published two open-source React libraries under the company’s discretion, then used them to successfully speed up development for subsequent projects',
    ],
  },
  {
    title: 'Full Stack Software Engineer',
    location: 'Thomson Reuters, Toronto ON',
    dates: 'September 2018 – February 2020',
    points: [
      'Designed and implemented full-stack solutions for an Angular greenfield project, delivering complete features with automated test coverage within one-week sprints and becoming the main UX developer shortly after joining the team',
      'Contributed to the fundamental .Net server-side structure of the application, implementing a scalable microservice architecture on Azure, and connecting and optimizing requests and responses',
    ],
  },
  {
    title: 'Full Stack Web Developer',
    location: 'OpenText, Ottawa ON',
    dates: 'February 2016 – August 2018',
    points: [
      'Created a WYSIWYG editor integrated with a large scale CMS to dynamically generate product pages from database records, minimizing manual work for product managers and removing it for developers',
      'Built the front page of the customer support site using custom jQuery widgets and REST API calls',
      'Developed internal-use XML conversion software in Java',
    ],
  },
]

export const miscExperience: ExperienceModel[] = [
  {
    title: 'Co-Op Full Stack Web Developer',
    location: 'Bank Of Canada, Ottawa, ON',
    dates: 'April 2014 – August 2014',
    points: [
      'Worked in a cross-functional Agile Scrum team to improve, bug fix, and add to the bank’s main and Museum PHP sites',
      'Styled the majority of the Bank’s responsive Museum site based on supplied design files',
      'Used BEHAT to create automated tests for UI and functionality',
    ],
  },
  {
    title: 'Co-Op Full Stack Web Developer',
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
