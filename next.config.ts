import type { NextConfig } from 'next';

const nextConfig: NextConfig =
  process.env.GITHUB_PAGES === 'true'
    ? {
        output: 'export',
        env: {
          NEXT_PUBLIC_BASE_PATH:
            process.env.PAGES_BASE_PATH || '/LocalMaxdayPages',
        },
        basePath: process.env.PAGES_BASE_PATH || '/LocalMaxdayPages',
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {};

export default nextConfig;
