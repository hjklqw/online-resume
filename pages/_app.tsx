import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import Script from 'next/script'
import { RecoilRoot } from 'recoil'
import { appWithTranslation } from 'next-i18next'

import 'common/styles/global.scss'

import { GlobalLayout } from '/common/layouts/global'
import { Head } from '/common/head'
import { PageModel } from '/common/models/page'
import { PageLayout } from '/common/layouts/page'
import { getScrollRoot } from '/utils/document'
import { gaTag } from '/utils/gaTag'

type Props<P = any> = AppProps<P> & {
  Component: PageModel<P>
}

const App = ({ Component, pageProps }: Props) => {
  Router.events.on('routeChangeComplete', (url) => {
    gaTag.pageView(url)
    getScrollRoot()?.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  })

  return (
    <RecoilRoot>
      <Script async src={gaTag.tagUrl} />
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: gaTag.installationScript,
        }}
      />
      <Head
        title={Component.title}
        description={Component.description}
        structuredData={Component.meta}
      />
      <GlobalLayout>
        {Component.usePageLayout !== false ? (
          <PageLayout
            title={Component.title}
            subtitle={Component.subtitle}
            maxWidth={Component.maxWidth}
          >
            <Component {...pageProps} />
          </PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </GlobalLayout>
    </RecoilRoot>
  )
}

export default appWithTranslation(App)
