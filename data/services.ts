import {
  RiCompass3Line,
  RiComputerLine,
  RiGlobalLine,
  RiRocketLine,
  RiSmartphoneLine,
  RiStackLine,
  type RemixiconComponentType,
} from "@remixicon/react";

export type Service = {
  title: string;
  description: string;
  href: string;
  icon: RemixiconComponentType;
};

export const services: Service[] = [
  {
    title: "SaaS Product Development",
    description:
      "A web product with accounts, the core workflow, and a way to charge for it, so you can run the service instead of stitching tools together.",
    href: "/services/saas-development",
    icon: RiStackLine,
  },
  {
    title: "Website Development",
    description:
      "A public website that explains the offer, shows the work, and gives people a direct way to enquire.",
    href: "/services/website-development",
    icon: RiGlobalLine,
  },
  {
    title: "Web Application Development",
    description:
      "A custom web application for work a brochure site cannot do: records, payments, dashboards, or an internal process.",
    href: "/services/web-application-development",
    icon: RiComputerLine,
  },
  {
    title: "Mobile Application Development",
    description:
      "A mobile app for a product that belongs on a phone, including offline use when the work has to continue without a connection.",
    href: "/services/mobile-app-development",
    icon: RiSmartphoneLine,
  },
  {
    title: "Startup and MVP Development",
    description:
      "A first working version, scoped to the features needed to launch and learn from real use.",
    href: "/services/mvp-startup-development",
    icon: RiRocketLine,
  },
  {
    title: "Product Design and Technical Consulting",
    description:
      "A clear recommendation on what to build, how the main flows should work, and which technical approach fits the goal.",
    href: "/services#product-consulting",
    icon: RiCompass3Line,
  },
];
