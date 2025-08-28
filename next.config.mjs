import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  basePath: process.env.PAGES_BASE_PATH,
  output: "export",
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [],
    unoptimized: true,
    qualities: [90],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withMDX(config);
