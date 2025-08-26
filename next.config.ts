
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // `output: 'export'` is auto-configured by App Hosting.
  // The `trailingSlash` option is needed for it to be compatible with
  // Netlify and other static hosts.
  trailingSlash: true,
  output: 'export',
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
    