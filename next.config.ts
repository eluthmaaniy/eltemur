import type { NextConfig } from "next";

const indexNowKey = process.env.INDEXNOW_KEY?.trim() ?? "";
const indexNowKeyPattern = /^[A-Za-z0-9-]{8,128}$/;

const nextConfig: NextConfig = {
  output: "standalone",
  trailingSlash: false,
  outputFileTracingIncludes: {
    "/*": ["./node_modules/sharp/**/*", "./node_modules/@img/**/*"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.eltemur.com" }],
        destination: "https://eltemur.com/:path*",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    if (!indexNowKeyPattern.test(indexNowKey)) return [];
    return [
      {
        source: `/${indexNowKey}.txt`,
        destination: "/api/indexnow-key",
      },
    ];
  },
};

export default nextConfig;
