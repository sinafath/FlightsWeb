/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'flightio.com',
        port: '',
        protocol: 'https',
      },
    ],
  },
};

module.exports = nextConfig;
