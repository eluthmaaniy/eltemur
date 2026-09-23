import type { MetadataRoute } from "next";
import { articles } from "@/data/insights";
import { projects } from "@/data/projects";
import { servicePages } from "@/data/service-pages";
import { absoluteUrl, contentUpdated } from "@/lib/site";

const lastModified = new Date(`${contentUpdated}T00:00:00.000Z`);

const paths = [
  "/",
  "/about",
  "/services",
  ...servicePages.map((page) => `/services/${page.slug}`),
  "/work",
  ...projects.map((project) => `/work/${project.slug}`),
  "/contact",
  "/insights",
  ...articles.map((article) => `/insights/${article.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
  }));
}
