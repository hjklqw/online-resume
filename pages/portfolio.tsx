import type { NextPage } from 'next'

import { PageModel } from '/common/models/page'
import { PortfolioPage } from '/contents/portfolio'

const Portfolio: NextPage = () => <PortfolioPage />

const page = Portfolio as PageModel<{}>
page.title = 'Portfolio'
page.subtitle = 'Work samples'
page.description = 'Work samples'
page.meta = {
  '@type': 'CreativeWork',
  name: 'Portfolio',
  url: process.env.NEXT_PUBLIC_URL,
  email: 'mp.hjkqw@gmail.com',
}
page.maxWidth = 1750

export default Portfolio
