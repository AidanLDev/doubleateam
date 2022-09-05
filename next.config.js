/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
