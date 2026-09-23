import { servicePages } from "@/data/service-pages";
import { absoluteUrl, businessInfo, schemaDescription } from "@/lib/site";

export function organizationId() {
  return `${absoluteUrl("/")}#organization`;
}

export function websiteId() {
  return `${absoluteUrl("/")}#website`;
}

export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": organizationId(),
    name: businessInfo.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/brand/logo-horizontal.png"),
    description: schemaDescription,
    email: businessInfo.email,
    telephone: businessInfo.phoneInternational,
    foundingDate: businessInfo.foundingDate,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "CAC Business Name Number",
      value: businessInfo.cacNumber,
    },
    areaServed: {
      "@type": "Country",
      name: businessInfo.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: businessInfo.email,
      telephone: businessInfo.phoneInternational,
      areaServed: "NG",
      availableLanguage: "English",
    },
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": websiteId(),
    url: absoluteUrl("/"),
    name: businessInfo.name,
    description: schemaDescription,
    inLanguage: "en",
    publisher: { "@id": organizationId() },
  };
}

export function homepageGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), websiteNode()],
  };
}

export function serviceNode(slug: string) {
  const page = servicePages.find((item) => item.slug === slug);
  if (!page) return null;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${absoluteUrl(`/services/${page.slug}`)}#service`,
        name: page.h1,
        serviceType: page.serviceType,
        description: page.metaDescription,
        url: absoluteUrl(`/services/${page.slug}`),
        provider: { "@id": organizationId() },
        areaServed: {
          "@type": "Country",
          name: businessInfo.country,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${absoluteUrl(`/services/${page.slug}`)}#faq`,
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}
