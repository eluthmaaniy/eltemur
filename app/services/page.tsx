import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EnquiryCta } from "@/components/enquiry-cta";
import { servicePages } from "@/data/service-pages";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Software Development Services in Nigeria | Eltemur Zentra Studio",
  description:
    "SaaS, website, web application, mobile app, and MVP development from Eltemur Zentra Studio, a registered technology company in Nigeria.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main" className="flex-1">
      <article className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 lg:py-16">
        <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Software development services
        </h1>
        <p className="mt-4 text-base leading-7 text-muted">
          Eltemur Zentra Studio is a registered Nigerian technology company. The services below
          are the kinds of products it builds: SaaS platforms, websites, web applications, mobile
          apps, and first versions for startups.
        </p>
        <ul className="mt-8 space-y-6">
          {servicePages.map((page) => {
            const summary = services.find((service) => service.href === `/services/${page.slug}`);
            return (
              <li key={page.slug} className="border-t border-line pt-5">
                <h2 className="text-xl font-bold text-navy">
                  <Link href={`/services/${page.slug}`} className="hover:text-royal">
                    {summary?.title ?? page.h1}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted">{page.lede}</p>
              </li>
            );
          })}
        </ul>

        <section id="product-consulting" className="mt-12 scroll-mt-24">
          <h2 className="text-xl font-bold text-navy">Product design and technical consulting</h2>
          <p className="mt-3 text-base leading-7 text-muted">
            Consulting is a recommendation before a build: what to make, how the main flow should
            work, and which technical approach fits. It is for a founder or business that is not
            ready to commission the full product, or that wants the scope cut to a first version.
          </p>
          <h3 className="mt-6 text-base font-semibold text-navy">What you leave with</h3>
          <ul className="mt-3 space-y-2">
            <li className="border-t border-line py-2 text-sm leading-6 text-muted">
              A written description of the user and the job the product must do.
            </li>
            <li className="border-t border-line py-2 text-sm leading-6 text-muted">
              The screens and steps for that job, and a list of what can wait.
            </li>
            <li className="border-t border-line py-2 text-sm leading-6 text-muted">
              A technical recommendation based on work Eltemur Zentra Studio has already shipped,
              such as React and Supabase for a web product, Paystack when it must charge, or
              Flutter for an offline Android app.
            </li>
          </ul>
          <p className="mt-4 text-sm leading-6 text-muted">
            Consulting does not invent a stack for its own sake. If the next step is a build, it
            continues into{" "}
            <Link href="/services/saas-development" className="font-semibold text-royal">
              SaaS development
            </Link>
            ,{" "}
            <Link href="/services/website-development" className="font-semibold text-royal">
              website development
            </Link>
            ,{" "}
            <Link
              href="/services/web-application-development"
              className="font-semibold text-royal"
            >
              web application development
            </Link>
            ,{" "}
            <Link href="/services/mobile-app-development" className="font-semibold text-royal">
              mobile app development
            </Link>
            , or{" "}
            <Link href="/services/mvp-startup-development" className="font-semibold text-royal">
              MVP and startup development
            </Link>
            .
          </p>
        </section>
        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy">Notes before you choose</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6">
            <li>
              <Link href="/insights/website-or-web-application" className="font-semibold text-royal">
                Website or web application: what should the business build?
              </Link>
            </li>
            <li>
              <Link href="/insights/what-to-include-in-a-first-version" className="font-semibold text-royal">
                What a first product version should include
              </Link>
            </li>
            <li>
              <Link href="/insights/what-to-prepare-before-a-project" className="font-semibold text-royal">
                What to prepare before a software project starts
              </Link>
            </li>
          </ul>
        </section>
        <EnquiryCta
          heading="Tell us which service fits"
          text="If you know the job but not the service, say what the user needs to finish. We will reply with the practical next step."
        />
      </article>
    </main>
  );
}
