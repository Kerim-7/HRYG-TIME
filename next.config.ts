import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Генерирует статический HTML
  trailingSlash: true,  // Добавляет `/` в конце URL
  experimental: {
    optimizePackageImports: ["next/font", "react", "react-dom"],
  },
  images: {
    unoptimized: true,  // Отключает оптимизацию изображений для статического экспорта
    remotePatterns: [
      {
        protocol: "https",
        hostname: "md-gazeta.ru",
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
