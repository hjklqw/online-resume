import type { NextPage } from 'next'

import { PageModel } from '/common/models/page'
import { ResumePage } from '/contents/resume'

const Resume: NextPage = () => <ResumePage />

const page = Resume as PageModel<{}>
page.title = 'Michelle Poon'
page.subtitle = 'Resume'
page.description = 'Online resume'
page.meta = {
  '@type': 'CreativeWork',
  name: 'Online Resume',
  url: process.env.NEXT_PUBLIC_URL,
  email: 'mp.hjkqw@gmail.com',
}
page.maxWidth = 1750

export default Resume
