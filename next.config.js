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
  images: {
    unoptimized: true, // 如果部署到静态环境如 GitHub Pages
  },
}

module.exports = nextConfig

