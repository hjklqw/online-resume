import { IconType } from 'react-icons'
import { MdEmail } from 'react-icons/md'
import { SiLinkedin, SiNpm } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { ExperienceModel } from './models'

export const contactInfo: { icon: IconType; text: string; isLink?: boolean }[] =
  [
    { icon: MdEmail, text: 'mp.hjklqw@gmail.com' },
    {
      icon: SiLinkedin,
      text: 'linkedin.com/in/michellepoon-dev',
      isLink: true,
    },
    { icon: FaGithub, text: 'github.com/hjklqw', isLink: true },
    { icon: SiNpm, text: 'npmjs.com/~michellepoonnoka', isLink: true },
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
        'React state management libraries (Redux, Recoil)',
        'HTML5',
        'CSS3 (SASS, styled-components)',
        'Backend technologies (Node.js Express, C# .Net Core)',
        'Databases (MongoDB, CosmosDB, Apollo GraphQL)',
        'Testing (Cypress, Jest, Storybook)',
        'DevOps (Github, Jira)',
      ],
      'Experience with:',
      ['Angular', 'Azure'],
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
    title: 'Front-End Developer',
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
