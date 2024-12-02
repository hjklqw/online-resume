import Script from 'next/script'

import { gaTag } from './functions'

const installationScript = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaTag.id}', {
  page_path: window.location.pathname,
});`

export const GaTagInstallationScript = () => (
  <>
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${gaTag.id}`}
    />
    <Script
      id="gtag"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: installationScript,
      }}
    />
  </>
)
