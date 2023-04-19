import { IconType } from 'react-icons'

import { BsFileEarmarkCodeFill } from 'react-icons/bs'
import { MdSpeed } from 'react-icons/md'
import { GiModernCity } from 'react-icons/gi'
import { Routes } from '/assets/routes'

export const highlights: {
  hook: string
  description: string | string[]
  icon: IconType
  link?: {
    text: string
    route: string
    alt: string
  }
}[] = [
  {
    hook: 'Clean code',
    description: [
      'Reads like natural language; self-documenting, clear intentions.',
      'Visit the links below to view samples!',
    ],
    icon: BsFileEarmarkCodeFill,
  },
  {
    hook: 'Speed',
    description:
      'This entire site was built within two days—from conception, design, to implementation and deployment!',
    icon: MdSpeed,
    link: {
      text: 'View my skills and experience',
      route: Routes.RESUME,
      alt: 'Resume',
    },
  },
  {
    hook: 'Modern full stack',
    description:
      'React.js, Next.js, Redux, Recoil, ES6+, HTML5, CSS3, Node.js Express, and C# .Net to name a few',
    icon: GiModernCity,
    link: {
      text: 'View my work samples',
      route: Routes.PORTFOLIO,
      alt: 'Portfolio',
    },
  },
]
