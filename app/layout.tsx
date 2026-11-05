import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Analytics } from "@/components/analytics";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { metadataBaseUrl, verificationMetadata } from "@/lib/seo";
import { indexingEnabled, site } from "@/lib/site";
import "./globals.css";

const figtree = localFont({
  src: "./fonts/figtree-latin.woff2",
  weight: "400 800",
  display: "swap",
  variable: "--font-figtree",
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  metadataBase: metadataBaseUrl(),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: indexingEnabled
    ? { index: true, follow: true }
    : { index: false, follow: false },
  verification: verificationMetadata(),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${figtree.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-navy">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
