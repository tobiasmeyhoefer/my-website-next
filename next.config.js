// @ts-check

const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  experimental: {
    taint: true,
  },
};

module.exports = withMDX(nextConfig);