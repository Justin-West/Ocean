/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/id/154/800/500",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
