
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  devIndicators: {
    allowedDevOrigins: [
        '*.cloudworkstations.dev', // Allow any subdomain of cloudworkstations.dev
    ],
  },
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
    