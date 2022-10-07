import { IconType } from 'react-icons'

import { BsFileEarmarkCodeFill } from 'react-icons/bs'
import { MdSpeed } from 'react-icons/md'
import { GiModernCity } from 'react-icons/gi'

export const highlights: {
  hook: string
  description: string | string[]
  icon: IconType
}[] = [
  {
    hook: 'Clean code',
    description:
      'Reads like natural language; visit the resume page for links to samples',
    icon: BsFileEarmarkCodeFill,
  },
  {
    hook: 'Speed',
    description: [
      'This entire site was built in a day—under 24 hours!',
      'This page, from conception to implementation, took just one night.',
    ],
    icon: MdSpeed,
  },
  {
    hook: 'Modern full stack',
    description:
      'React.js, Next.js, Redux, Recoil, ES6+, HTML5, CSS3, Node.js Express, and C# .Net to name a few',
    icon: GiModernCity,
  },
]
