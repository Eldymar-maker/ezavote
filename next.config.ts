import type {NextConfig} from 'next';
import { devIndicatorServerState } from 'next/dist/server/dev/dev-indicator-server-state';

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    enabled: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;