import { IconType } from 'react-icons'
import { TFunction } from 'next-i18next'

import { BsFileEarmarkCodeFill } from 'react-icons/bs'
import { MdSpeed } from 'react-icons/md'
import { GiModernCity } from 'react-icons/gi'
import { Routes } from '/assets/routes'

export const highlights = (
  t: TFunction
): {
  hook: string
  description: string | string[]
  icon: IconType
  link?: {
    text: string
    route: string
    alt: string
  }
}[] => [
  {
    hook: t('highlights.code.hook'),
    description: t('highlights.code.description', {
      returnObjects: true,
    }) as string[],
    icon: BsFileEarmarkCodeFill,
  },
  {
    hook: t('highlights.speed.hook'),
    description: t('highlights.speed.description'),
    icon: MdSpeed,
    link: {
      text: t('highlights.speed.link.text'),
      route: Routes.RESUME,
      alt: t('highlights.speed.link.alt'),
    },
  },
  {
    hook: t('highlights.stack.hook'),
    description: t('highlights.stack.description'),
    icon: GiModernCity,
    link: {
      text: t('highlights.stack.link.text'),
      route: Routes.PORTFOLIO,
      alt: t('highlights.stack.link.alt'),
    },
  },
]
