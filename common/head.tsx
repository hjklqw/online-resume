import NextHead from 'next/head'

type Props = {
  title: string
  description: string | undefined
  structuredData: Record<string, any> | undefined
}

export const Head = ({ title, description, structuredData }: Props) => (
  <NextHead>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <title>{title}</title>
    <meta name="description" content={description} />
    {structuredData && (
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          ...structuredData,
        })}
      </script>
    )}
  </NextHead>
)
