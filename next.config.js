/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['i.pravatar.cc']
  }
};

module.exports = nextConfig;
