/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        port: '',
        pathname:
          '/content/v1/5ac261cf71069968df1e61a9/fb76429d-0eb4-420e-b013-96bc1c568570/peach+matcha+latte',
      },
    ],
  },
}

module.exports = nextConfig
