/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/best-crm-for-realtors',
        destination: '/services/best-crm-for-realtors',
        permanent: true,
      },
      {
        source: '/real-estate-agent-leads',
        destination: '/services/real-estate-agent-leads',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
