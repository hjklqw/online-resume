import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import { RecoilRoot } from 'recoil'

import 'common/styles/global.scss'

import { GlobalLayout } from '/common/layouts/global'
import { Head } from '/common/head'
import { PageModel } from '/common/models/page'
import { PageLayout } from '/common/layouts/page'
import { getScrollRoot } from '/utils/document'

type Props<P = any> = AppProps<P> & {
  Component: PageModel<P>
}

const App = ({ Component, pageProps }: Props) => {
  Router.events.on('routeChangeComplete', () => {
    getScrollRoot()?.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  })

  return (
    <RecoilRoot>
      <Head
        title={Component.title}
        description={Component.description}
        structuredData={Component.meta}
      />
      <GlobalLayout>
        {Component.usePageLayout !== false ? (
          <PageLayout title={Component.title} subtitle={Component.subtitle}>
            <Component {...pageProps} />
          </PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </GlobalLayout>
    </RecoilRoot>
  )
}

export default App
