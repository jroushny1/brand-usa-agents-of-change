/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.mux.com', 'images.unsplash.com'],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
}

module.exports = nextConfig
