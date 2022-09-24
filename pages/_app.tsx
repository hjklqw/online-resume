import type { AppProps } from 'next/app'

import 'common/styles/global.scss'

import { GlobalLayout } from '/common/layouts/global'
import { Head } from '/common/head'
import { PageModel } from '/common/models/page'

type Props<P = any> = AppProps<P> & {
  Component: PageModel<P>
}

const App = ({ Component, pageProps }: Props) => (
  <GlobalLayout title={Component.title} subtitle={Component.subtitle}>
    <Head
      title={Component.title}
      description={Component.description}
      structuredData={Component.meta}
    />
    <Component {...pageProps} />
  </GlobalLayout>
)

export default App
