/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Ensure all routes are generated at build time
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
}

module.exports = nextConfig