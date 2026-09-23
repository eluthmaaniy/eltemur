import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { articles } from "@/data/insights";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Insights | Eltemur Zentra Studio",
  description:
    "Practical notes from Eltemur Zentra Studio on choosing a website or web application, shaping a first product version, and preparing a software project.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <main id="main" className="flex-1">
      <article className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 lg:py-16">
        <Breadcrumbs items={[{ name: "Insights", path: "/insights" }]} />
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">Insights</h1>
        <p className="mt-4 text-base leading-7 text-muted">
          Short, practical notes for people deciding what to build with Eltemur Zentra Studio.
          They describe choices already reflected in shipped work. They do not publish prices,
          rankings, or results that have not been verified.
        </p>
        <ul className="mt-8 space-y-6">
          {articles.map((article) => (
            <li key={article.slug} className="border-t border-line pt-5">
              <h2 className="text-xl font-bold text-navy">
                <Link href={`/insights/${article.slug}`} className="hover:text-royal">
                  {article.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">{article.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}
