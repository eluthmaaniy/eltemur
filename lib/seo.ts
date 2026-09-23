import type { Metadata } from "next";
import { absoluteUrl, businessInfo, indexingEnabled, resolveSiteUrl } from "@/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  openGraphType?: "website" | "article";
};

export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
  openGraphType = "website",
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const index = indexingEnabled && !noIndex;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: businessInfo.name,
      locale: "en",
      type: openGraphType,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false, nocache: true },
  };
}

export function metadataBaseUrl() {
  return new URL(`${resolveSiteUrl()}/`);
}

export function verificationMetadata(): Metadata["verification"] {
  const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
  const bing = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?.trim();

  if (!google && !bing) return undefined;

  return {
    ...(google ? { google } : {}),
    ...(bing ? { other: { "msvalidate.01": bing } } : {}),
  };
}
