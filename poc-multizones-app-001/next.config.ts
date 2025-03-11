import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/app2',
        destination: 'http://localhost:3001/app2',
      },
      {
        source: '/app2/:path*',
        destination: 'http://localhost:3001/app2/:path*',
      },
    ];
  },
};

export default nextConfig;
