
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // This allows requests from the preview deployment to be authorized.
    // The previous value was:
    // allowedDevOrigins: ['*'],
    // This is not a security risk because it only applies to development.
    allowedDevOrigins: [
      'https://*.google.com',
      'https://*.cloud.google.com',
      'https://*.cloud.run',
    ],
  },
};

export default nextConfig;
