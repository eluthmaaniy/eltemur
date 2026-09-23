import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EnquiryCta } from "@/components/enquiry-cta";
import { SelectedWork } from "@/components/selected-work";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Selected Work | Eltemur Zentra Studio",
  description:
    "SaaS products, web applications, an Android app, and websites built by Eltemur Zentra Studio in Nigeria.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main id="main" className="flex-1">
      <div className="mx-auto w-full max-w-6xl px-5 pt-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Work", path: "/work" }]} />
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Selected work
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          Products built under Eltemur Zentra Studio, and websites built for independent
          specialists. Each page states the problem, the solution, the platform, and the
          technologies used.
        </p>
      </div>
      <SelectedWork embedded />
      <div className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-6 lg:px-8">
        <EnquiryCta text="If you want something in this list built for your own workflow, send the job you need the product to do." />
      </div>
    </main>
  );
}
