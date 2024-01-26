import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { PageModel } from '/common/models/page'
import { LandingPage } from '/contents/landing'

const Landing: NextPage = () => <LandingPage />

const page = Landing as PageModel<{}>
page.title = 'Michelle Poon'
page.subtitle = 'Portfolio'
page.description = 'Online resume'
page.meta = {
  '@type': 'CreativeWork',
  name: 'Portfolio',
  url: process.env.NEXT_PUBLIC_URL,
  email: 'mp.hjkqw@gmail.com',
}
page.usePageLayout = false

export const getStaticProps: GetStaticProps = async ({
  locale,
  defaultLocale,
}) => {
  const translationsProps = await serverSideTranslations(
    locale ?? defaultLocale!,
    'landing'
  )

  return {
    props: {
      ...translationsProps,
    },
  }
}

export default Landing
