import type { NextPage } from 'next'

import { PageModel } from '/common/models/page'
import { NotFoundPage } from '/contents/notFound'

const NotFound: NextPage = () => <NotFoundPage />

const page = NotFound as PageModel<{}>
page.title = '404'
page.subtitle = 'Not Found'
page.description = "This page doesn't exist!"

export default NotFound
