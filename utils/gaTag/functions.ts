const ID = (() => {
  const value = process.env.NEXT_PUBLIC_GA_ID
  if (value === undefined) {
    throw new Error('The environment variable NEXT_PUBLIC_GA_ID is missing!')
  }
  return value
})()

function pageView(url: string) {
  window.gtag('config', ID, {
    page_path: url,
  })
}

function event(
  action: string,
  params: { category: string; label: string; value?: string }
) {
  window.gtag('event', action, {
    event_category: params.category,
    event_label: params.label,
    value: params.value,
  })
}

export const gaTag = {
  id: ID,
  pageView,
  event,
} as const
