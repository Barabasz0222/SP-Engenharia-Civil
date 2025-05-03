/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Adicione domínios externos se necessário
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  reactStrictMode: true,
  swcMinify: true,
  // Configurações para Vercel
  output: 'standalone', // Garante build otimizado para Vercel
};

export default nextConfig;