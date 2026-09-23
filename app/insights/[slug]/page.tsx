import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EnquiryCta } from "@/components/enquiry-cta";
import { JsonLd } from "@/components/json-ld";
import { articles, getArticle } from "@/data/insights";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, businessInfo } from "@/lib/site";
import { organizationId } from "@/lib/structured-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return pageMetadata({
    title: article.metaTitle,
    description: article.description,
    path: `/insights/${article.slug}`,
    openGraphType: "article",
  });
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(`/insights/${article.slug}`)}#article`,
    headline: article.title,
    description: article.description,
    datePublished: article.published,
    dateModified: article.updated,
    inLanguage: "en",
    mainEntityOfPage: absoluteUrl(`/insights/${article.slug}`),
    author: {
      "@type": "Organization",
      "@id": organizationId(),
      name: businessInfo.name,
    },
    publisher: { "@id": organizationId() },
  };

  return (
    <main id="main" className="flex-1">
      <article className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 lg:py-16">
        <JsonLd data={schema} />
        <Breadcrumbs
          items={[
            { name: "Insights", path: "/insights" },
            { name: article.title, path: `/insights/${article.slug}` },
          ]}
        />
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-3 text-sm text-muted">
          Published {article.published} by {businessInfo.name}
        </p>
        <div className="mt-8 space-y-8">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold text-navy">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-base leading-7 text-muted">
                  {paragraph}
                </p>
              ))}
              {section.list ? (
                <ul className="mt-3 space-y-2">
                  {section.list.map((item) => (
                    <li key={item} className="border-t border-line py-2 text-sm leading-6 text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
        <p className="mt-10 text-sm leading-6 text-muted">
          Related service:{" "}
          <Link href={article.servicePath} className="font-semibold text-royal">
            {article.serviceLabel}
          </Link>
        </p>
        <EnquiryCta />
      </article>
    </main>
  );
}
