/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Explicitly disable server-side features
  experimental: {
    // Ensure no server components are used
  },
}

module.exports = nextConfig