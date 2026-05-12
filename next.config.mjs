/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  env: {
    ASSET_PREFIX: '',
  },
};

export default nextConfig;
