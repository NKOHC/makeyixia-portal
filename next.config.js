/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; img-src 'self' data:;"
          }
        ]
      }
    ]
  },
  serverOptions: {
    port: process.env.PORT || 3000
  }
}

module.exports = nextConfig

