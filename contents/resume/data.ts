import { IconBaseProps, IconType } from 'react-icons'
import { IoLocationSharp } from 'react-icons/io5'
import { RiHonourLine } from 'react-icons/ri'
import { TbAward } from 'react-icons/tb'
import { MdOutlineSchool } from 'react-icons/md'

import {
  ContactInfoType,
  ExperienceModel,
  JobModel,
  DataSection,
} from './models'
import { contactInfo as baseContactInfo } from 'assets/sharedData'

export const sections: {
  [section in DataSection]: { id: string; label: string }
} = {
  [DataSection.OVERVIEW]: {
    id: 'overview',
    label: 'Overview',
  },
  [DataSection.CONTACT]: {
    id: 'contact',
    label: 'Contact',
  },
  [DataSection.EDUCATION]: {
    id: 'education',
    label: 'Education',
  },
  [DataSection.SKILLS]: {
    id: 'skills',
    label: 'Skills',
  },
  [DataSection.EXPERIENCE]: {
    id: 'experience',
    label: 'Experience',
  },
  [DataSection.MISC_EXPERIENCE]: {
    id: 'misc-experience',
    label: 'Misc Experience',
  },
  [DataSection.AWARDS]: {
    id: 'awards',
    label: 'Scholarships and Awards',
  },
  [DataSection.LANGUAGES]: {
    id: 'languages',
    label: 'Languages',
  },
}

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

export const overview =
  'Full-stack developer with 8+ years of experience, specializing in front-end web development with modern JS (React, Typescript, ES6+).'

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
        'Other frameworks and languages (Angular, Python, C++, Java, Ruby on Rails)',
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

export const experience: JobModel[] = [
  {
    title: 'Software Engineer',
    company: {
      name: 'TheoremOne',
      location: 'Remote',
      industry: 'Consultancy',
      size: 'Medium-Large (600 people)',
    },
    stack: 'React, Next.js, Typescript, MUI, Cypress, Jest',
    teamSize: '3 (FE only, Design and BE split with occasional sync-ups)',
    dates: 'January 2023 - March 2023',
    methodology: 'Agile',
    description: {
      'Project leadership and architectural setup': [
        'Worked as part of a small team to rebuild a complex form project from scratch',
        'Established the fundamental structure of the application, setting up the directory layout, file organization standards and specific coding conventions, base package dependencies, and creating a dynamic form generation and management system PoC to work off of',
        'Introduced teammates to the usage of specific testing technologies and UI libraries with the PoC',
      ],
      'Requirements gathering and presentation': [
        'Investigated, documented, and presented a catered dynamic form generation and data management system that is simple to use, understand, and is extensible to fit new or special business requirements',
        'Presented well-organized, attractive work in bi-weekly sprint demos that delighted clients and improved team morale',
      ],
    },
  },
  {
    title: 'Senior Front-End Developer',
    company: {
      name: 'EInc.',
      location: 'Remote',
      industry: 'Automobile',
      size: 'Medium (100 people)',
    },
    stack:
      'React, Next.js, Typescript, Styled-Components, Apollo GraphQL, Cypress, Jest, Storybook',
    teamSize: '7 (+2 for designers and manager)',
    dates: 'November 2021 - November 2022',
    methodology: 'Agile',
    description: {
      'Feature implementation within a large existing codebase': [
        'Added new features, such as heavy data displays and animated dashboard components, to a large car dealership management app off Figma design files, ensuring pixel-perfect implementation',
      ],
      'Test writing': [
        'Established the basis for complex integration testing via creation of custom cypress commands',
      ],
      'Bug fixing and reporting': [
        'Addressed issues found on Sentry, manual or automated testing, or Slack threads in a timely manner',
        'Created tickets with clear descriptions, reproduction steps, and sometimes possible solutions, adding the proper categories and labels to ensure intelligibility and organization',
      ],
    },
  },
  {
    title: 'Web and Software Developer',
    company: {
      name: 'Noka Software and Creative Inc.',
      location: 'Remote',
      industry: 'Consultancy',
      size: 'Super small (7 people)',
    },
    stack:
      'React, Next.js, Typescript, SASS, Node.js Express, MongoDB, Cypress, Jest',
    teamSize: '~5 for first project, then alone!',
    methodology: 'RAD/Waterfall',
    dates: 'May 2020 – November 2021',
    description: {
      'Start-to-finish full-stack development and delivery': [
        'Independently built a fully responsive, internationalized site with a complex form system, PDF generation, and email (SendGrid) integration',
        'Delivered the finished and polished product to the client in under four weeks',
      ],
      'Project architecting, design, and implementation': [
        'Gathered business requirements and determined the stack of the project, proposing architecture that would minimize costs, and implementing the code to a rapid development cycle',
      ],
      'Open-source development': [
        "Published two open-source React libraries under the company's discretion, then used them to successfully speed up development for subsequent projects",
      ],
    },
  },
  {
    title: 'Full Stack Software Engineer',
    company: {
      name: 'Thomson Reuters',
      location: 'Toronto ON',
      industry: 'News, Legal, Media, Technology',
      size: 'Large (10000+ employees)',
    },
    stack: 'Angular, Typescript, C# .Net, CosmosDB, Azure, Swagger',
    teamSize: '~10',
    methodology: 'Agile Scrum',
    dates: 'September 2018 – February 2020',
    description: {
      'Greenfield project construction': [
        'Designed and implemented full-stack solutions for an Angular greenfield project, delivering complete features with automated test coverage within one-week sprints',
      ],
      'Business requirement design and implementation': [
        'Determined the best user experience to address business requirements, implementing them full-stack and completing solutions that thrilled consumers',
        'Became the main UI/UX developer shortly after joining the team',
      ],
      'Microservice creation': [
        'Contributed to the fundamental structure of the application, implementing a scalable microservice architecture on Azure',
        'Created REST API endpoints in a C# .Net server, connecting and optimizing requests and responses',
      ],
    },
  },
  {
    title: 'Full Stack Web Developer',
    company: {
      name: 'OpenText',
      location: 'Ottawa ON',
      industry: 'Software Development',
      size: 'Large (10000+ employees)',
    },
    stack: 'jQuery, OScript (company-specific language), Java',
    teamSize: '2-3 (Worked 98% indepedently)',
    methodology: 'DevOps',
    dates: 'February 2016 – August 2018',
    description: {
      'New feature design and implementation': [
        'Built the front page of the customer support site using custom jQuery widgets and REST API calls',
      ],
      'Old feature redesign, improvement, and overhaul': [
        'Created a WYSIWYG editor integrated with a large scale CMS to dynamically generate product pages from database records, minimizing manual work for product managers and removing it for developers',
      ],
      'Internal tool development': [
        'Developed internal-use XML conversion software in Java',
      ],
    },
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
