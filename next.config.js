/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/random",
      },
      {
        protocol: "https",
        hostname: "static01.nyt.com",
      },
      {
        protocol: "http",
        hostname: "cdn.weatherapi.com",
      },
    ],
  },
};

module.exports = nextConfig;
