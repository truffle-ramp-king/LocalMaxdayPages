import type { NextConfig } from 'next';

const nextConfig: NextConfig = process.env.GITHUB_PAGES === 'true' ? {
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH || '/LocalMaxdayPages',
  trailingSlash: true,
  images: { unoptimized: true },
} : {};

export default nextConfig;
