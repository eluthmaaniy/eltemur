import type { Metadata } from "next";
import { About } from "@/components/about";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { Process } from "@/components/process";
import { SelectedWork } from "@/components/selected-work";
import { Services } from "@/components/services";
import { Why } from "@/components/why";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { homepageGraph } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: site.title,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <main id="main">
      <JsonLd data={homepageGraph()} />
      <Hero />
      <Services />
      <SelectedWork />
      <Process />
      <About />
      <Why />
      <ContactSection />
    </main>
  );
}
