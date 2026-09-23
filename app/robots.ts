import type { MetadataRoute } from "next";
import { absoluteUrl, indexingEnabled } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!indexingEnabled) {
    return {
      rules: [
        { userAgent: "*", disallow: "/" },
        { userAgent: "OAI-SearchBot", disallow: "/" },
      ],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
