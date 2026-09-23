import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactSection } from "@/components/contact-section";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Eltemur Zentra Studio",
  description:
    "Contact Eltemur Zentra Studio by email, phone, or WhatsApp, or send a project brief. The studio is a registered technology company in Nigeria.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main" className="flex-1">
      <div className="mx-auto w-full max-w-6xl px-5 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
      </div>
      <ContactSection heading="h1" />
    </main>
  );
}
