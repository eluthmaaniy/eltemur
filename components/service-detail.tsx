import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EnquiryCta } from "@/components/enquiry-cta";
import { JsonLd } from "@/components/json-ld";
import type { ServicePage } from "@/data/service-pages";
import { getProject } from "@/data/projects";
import { serviceNode } from "@/lib/structured-data";

export function ServiceDetail({ page }: { page: ServicePage }) {
  const schema = serviceNode(page.slug);
  const related = page.projectSlugs
    .map((slug) => getProject(slug))
    .filter((project) => project !== undefined);

  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 lg:py-16">
      {schema ? <JsonLd data={schema} /> : null}
      <Breadcrumbs
        items={[
          { name: "Services", path: "/services" },
          { name: page.h1, path: `/services/${page.slug}` },
        ]}
      />
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">{page.h1}</h1>
      <p className="mt-4 text-base leading-7 text-muted">{page.lede}</p>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Who it is for</h2>
        <ul className="mt-3 space-y-2">
          {page.audience.map((item) => (
            <li key={item} className="border-t border-line py-2 text-sm leading-6 text-muted">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Problems it solves</h2>
        <div className="mt-4 space-y-5">
          {page.problems.map((problem) => (
            <div key={problem.title}>
              <h3 className="text-base font-semibold text-navy">{problem.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{problem.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">What Eltemur Zentra Studio can build</h2>
        <ul className="mt-3 space-y-2">
          {page.builds.map((item) => (
            <li key={item} className="border-t border-line py-2 text-sm leading-6 text-muted">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Main deliverables</h2>
        <ul className="mt-3 space-y-2">
          {page.deliverables.map((item) => (
            <li key={item} className="border-t border-line py-2 text-sm leading-6 text-muted">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">How this work runs</h2>
        <ol className="mt-4 space-y-4">
          {page.process.map((step, index) => (
            <li key={step.title}>
              <h3 className="text-base font-semibold text-navy">
                <span className="text-royal">0{index + 1} </span>
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Technologies on related work</h2>
        <p className="mt-3 text-sm leading-6 text-navy">{page.technologies.join(", ")}</p>
        <p className="mt-2 text-sm leading-6 text-muted">{page.technologyNote}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Related work</h2>
        <ul className="mt-3 space-y-3">
          {related.map((project) => (
            <li key={project.slug} className="border-t border-line py-3">
              <Link
                href={`/work/${project.slug}`}
                className="text-base font-semibold text-navy hover:text-royal"
              >
                {project.name}
              </Link>
              <p className="mt-1 text-sm leading-6 text-muted">{project.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Questions</h2>
        <div className="mt-4 space-y-5">
          {page.faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-base font-semibold text-navy">{faq.question}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <EnquiryCta />
    </article>
  );
}
