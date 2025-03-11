import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: '/app2',
    assetPrefix: '/app2',
    images: {
      path: '/app2/_next/image',
    },
  }
  
export default nextConfig;