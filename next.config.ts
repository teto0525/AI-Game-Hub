import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/AI-Game-Hub",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
