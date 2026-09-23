/**
 * Public site settings and official business details.
 * Do not put secrets in this file. It is imported by client components.
 *
 * Canonical host: https://eltemur.com
 * NEXT_PUBLIC_SITE_URL may override it. www.eltemur.com is normalised to the apex host.
 */

export const PRODUCTION_SITE_URL = "https://eltemur.com";

function readConfiguredSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || PRODUCTION_SITE_URL;

  try {
    const url = new URL(raw);
    if (url.protocol !== "https:" && url.protocol !== "http:") return PRODUCTION_SITE_URL;
    if (url.hostname === "www.eltemur.com") return PRODUCTION_SITE_URL;
    return url.origin;
  } catch {
    return PRODUCTION_SITE_URL;
  }
}

/** Canonical production origin. */
export const siteUrl = readConfiguredSiteUrl();

/** True when the canonical origin is https. */
export const hasProductionUrl = siteUrl.startsWith("https://");

/**
 * Public pages should be indexed only on the configured https host.
 * Preview deployments stay out of the index.
 */
export const indexingEnabled = hasProductionUrl && process.env.VERCEL_ENV !== "preview";

export function resolveSiteUrl() {
  return siteUrl;
}

export function absoluteUrl(path = "/") {
  const base = resolveSiteUrl();
  if (path === "/" || path === "") return base;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export const contentUpdated = "2026-09-23";

export const businessInfo = {
  name: "Eltemur Zentra Studio",
  email: "eltemurzentra@gmail.com",
  phoneDisplay: "+234 807 737 9147",
  phoneInternational: "+2348077379147",
  whatsappUrl:
    "https://wa.me/2348077379147?text=Hello%20Eltemur%20Zentra%20Studio%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.",
  cacNumber: "BN 9683554",
  registrationAuthority: "Corporate Affairs Commission, Nigeria",
  registrationDate: "15 July 2026",
  foundingDate: "2026-07-15",
  country: "Nigeria",
} as const;

export const companyDescription =
  "Eltemur Zentra Studio is a Nigerian technology company that builds SaaS products, websites, web applications, mobile applications, MVPs, startup products, and revenue-generating digital solutions for individuals and businesses.";

export const schemaDescription =
  "Eltemur Zentra Studio is a Nigerian technology company that builds SaaS products, websites, web applications, mobile applications, MVPs, and startup products.";

export const site = {
  name: businessInfo.name,
  title: "Eltemur Zentra Studio | SaaS, Web and Mobile App Development in Nigeria",
  description:
    "Eltemur Zentra Studio builds SaaS products, websites, web applications, mobile apps, MVPs, and startup products for individuals and businesses in Nigeria.",
  url: resolveSiteUrl(),
  email: businessInfo.email,
};

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = [
  ...navLinks,
  { href: "/insights", label: "Insights" },
] as const;
