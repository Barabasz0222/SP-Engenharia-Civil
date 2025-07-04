import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  reactStrictMode: true,
};

export default nextConfig;