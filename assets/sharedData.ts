import { IconBaseProps, IconType } from 'react-icons'

import { MdEmail } from 'react-icons/md'
import { SiLinkedin, SiNpm } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'

export const contactInfo: {
  icon: IconType
  iconProps?: IconBaseProps
  url: string
  label: string
  isEmail?: boolean
}[] = [
  { icon: MdEmail, url: 'mp.hjklqw@gmail.com', label: 'Email', isEmail: true },
  {
    icon: SiLinkedin,
    url: 'linkedin.com/in/michellepoon-dev',
    label: 'LinkedIn',
  },
  {
    icon: FaGithub,
    iconProps: { size: '1.1em', style: { marginLeft: '-0.05em' } },
    url: 'github.com/hjklqw',
    label: 'GitHub',
  },
  { icon: SiNpm, url: 'npmjs.com/~michellepoonnoka', label: 'NPM' },
]
