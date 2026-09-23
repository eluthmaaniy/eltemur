import type { Metadata } from "next";
import Link from "next/link";
import { RiBuilding2Line } from "@remixicon/react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EnquiryCta } from "@/components/enquiry-cta";
import { pageMetadata } from "@/lib/seo";
import { businessInfo, companyDescription } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Eltemur Zentra Studio | Nigerian Technology Company",
  description:
    "Eltemur Zentra Studio is a registered Nigerian technology company that builds SaaS products, websites, web applications, mobile apps, and startup products.",
  path: "/about",
});

const facts = [
  ["Registered name", businessInfo.name],
  ["CAC registration", businessInfo.cacNumber],
  ["Registered in", businessInfo.country],
  ["Registration date", businessInfo.registrationDate],
  [
    "Services",
    "SaaS, websites, web applications, mobile apps, MVPs, and startup products",
  ],
] as const;

export default function AboutPage() {
  return (
    <main id="main" className="flex-1">
      <article className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 lg:py-16">
        <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          About Eltemur Zentra Studio
        </h1>
        <p className="mt-4 text-base leading-7 text-muted">{companyDescription}</p>
        <p className="mt-4 text-base leading-7 text-muted">
          The company builds client websites and applications, and it also ships its own products.
          Those products include outreach software, a store audit tool, exam preparation products,
          and an offline CGPA calculator, alongside portfolio websites for independent specialists.
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy">Company facts</h2>
          <dl className="mt-4 border-t border-line">
            {facts.map(([label, value]) => (
              <div key={label} className="grid gap-1 border-b border-line py-3 sm:grid-cols-[12rem_minmax(0,1fr)]">
                <dt className="text-sm font-semibold text-navy">{label}</dt>
                <dd className="text-sm leading-6 text-muted">{value}</dd>
              </div>
            ))}
            <div className="grid gap-1 border-b border-line py-3 sm:grid-cols-[12rem_minmax(0,1fr)]">
              <dt className="text-sm font-semibold text-navy">Contact email</dt>
              <dd className="text-sm leading-6">
                <a className="text-royal underline decoration-royal/30 underline-offset-4" href={`mailto:${businessInfo.email}`}>
                  {businessInfo.email}
                </a>
              </dd>
            </div>
            <div className="grid gap-1 border-b border-line py-3 sm:grid-cols-[12rem_minmax(0,1fr)]">
              <dt className="text-sm font-semibold text-navy">Phone</dt>
              <dd className="text-sm leading-6">
                <a
                  className="text-royal underline decoration-royal/30 underline-offset-4"
                  href={`tel:${businessInfo.phoneInternational}`}
                >
                  {businessInfo.phoneDisplay}
                </a>
              </dd>
            </div>
          </dl>
          <div className="mt-6 flex items-start gap-3">
            <RiBuilding2Line aria-hidden="true" className="mt-0.5 shrink-0 text-royal" size={18} />
            <p className="text-sm leading-6 text-navy">
              Registered with the {businessInfo.registrationAuthority}. Registration type: Registered
              Business Name. CAC {businessInfo.cacNumber}.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy">What the company builds</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
            <li className="border-t border-line py-2">
              <Link href="/services/saas-development" className="font-semibold text-navy hover:text-royal">
                SaaS products
              </Link>{" "}
              with accounts and payments.
            </li>
            <li className="border-t border-line py-2">
              <Link href="/services/website-development" className="font-semibold text-navy hover:text-royal">
                Public websites
              </Link>{" "}
              for companies, portfolios, and products.
            </li>
            <li className="border-t border-line py-2">
              <Link
                href="/services/web-application-development"
                className="font-semibold text-navy hover:text-royal"
              >
                Web applications
              </Link>{" "}
              for a specific workflow.
            </li>
            <li className="border-t border-line py-2">
              <Link href="/services/mobile-app-development" className="font-semibold text-navy hover:text-royal">
                Android applications
              </Link>
              , including offline tools.
            </li>
            <li className="border-t border-line py-2">
              <Link href="/services/mvp-startup-development" className="font-semibold text-navy hover:text-royal">
                First versions
              </Link>{" "}
              for startups that need to launch and learn.
            </li>
          </ul>
          <p className="mt-4 text-sm leading-6 text-muted">
            Completed work is listed on the{" "}
            <Link href="/work" className="font-semibold text-royal">
              project index
            </Link>
            .
          </p>
        </section>

        <EnquiryCta />
      </article>
    </main>
  );
}
