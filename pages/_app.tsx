import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

import 'common/styles/global.scss'

import { GlobalLayout } from '/common/layouts/global'
import { Head } from '/common/head'
import { PageModel } from '/common/models/page'
import { PageLayout } from '/common/layouts/page'

type Props<P = any> = AppProps<P> & {
  Component: PageModel<P>
}

const App = ({ Component, pageProps }: Props) => (
  <RecoilRoot>
    <Head
      title={Component.title}
      description={Component.description}
      structuredData={Component.meta}
    />
    <GlobalLayout
      subLayout={
        Component.usePageLayout !== false ? (
          <PageLayout title={Component.title} subtitle={Component.subtitle} />
        ) : undefined
      }
      mainContents={<Component {...pageProps} />}
    />
  </RecoilRoot>
)

export default App
