/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  // Uncomment when deploying to a subdirectory
  // basePath: '/streetlight',
  // assetPrefix: '/streetlight',
}

module.exports = nextConfig

