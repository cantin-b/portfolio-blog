import type { NextConfig } from "next";

const remoteConfig = {
    port: "",
    hostname: `${process.env.WORDPRESS_HOSTNAME}`,
    pathname: "/**",
}

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
