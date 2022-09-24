import type { NextPage } from 'next'

import { PageModel } from '/common/models/page'
import { HomePage } from '/contents/home'

const Home: NextPage = () => <HomePage />

const page = Home as PageModel<{}>
page.title = 'Michelle Poon'
page.subtitle = 'Resume'
page.description = 'Online resume'
page.meta = {
  '@type': 'CreativeWork',
  name: 'Online Resume',
  url: process.env.NEXT_PUBLIC_URL,
  email: 'mp.hjkqw@gmail.com',
}

export default Home
