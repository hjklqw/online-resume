import { NextComponentType, NextPageContext } from 'next'

export type PageModel<P> = NextComponentType<NextPageContext, any, P> & {
  title: string
  subtitle: string
  description?: string
  meta?: Record<string, any>
}
