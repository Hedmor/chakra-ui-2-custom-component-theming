/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // For Chakra UI v2 compatibility
  transpilePackages: ["@chakra-ui/react"],
  // Enable experimental view transitions
  experimental: {
    viewTransition: true,
  },
}

module.exports = nextConfig

