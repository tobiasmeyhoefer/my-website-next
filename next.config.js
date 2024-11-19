// @ts-check

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
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
  experimental: {
    taint: true,
  },
};

module.exports = nextConfig;