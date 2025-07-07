import type { NextConfig } from "next";

const remoteConfig = {
  port: process.env.WORDPRESS_PORT || "",
  hostname: process.env.WORDPRESS_HOSTNAME || "",
  pathname: "/wp-content/uploads/**",
};

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [  
      {
        ...remoteConfig,
        protocol: "https"
      },
      {
        ...remoteConfig,
        protocol: "http"
      }
    ],
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: `${process.env.WORDPRESS_URL}/wp-admin`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
