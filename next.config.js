/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{ protocol: "http", hostname: "via.placeholder.com" }],
  },
};

module.exports = nextConfig;
