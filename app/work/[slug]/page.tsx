import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProjectMark } from "@/components/project-mark";
import { EnquiryCta } from "@/components/enquiry-cta";
import { JsonLd } from "@/components/json-ld";
import { servicesForProject } from "@/data/service-pages";
import { getProject, projects, type Project } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { organizationId } from "@/lib/structured-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const titles: Record<string, string> = {
  scoutier: "Scoutier | Email Outreach Software | Eltemur Zentra Studio",
  shopidict: "Shopidict | Online Store Audit | Eltemur Zentra Studio",
  uiprep: "UIPrep | UI Post-UTME Practice | Eltemur Zentra Studio",
  gradeng: "GradeNG | Offline CGPA Calculator | Eltemur Zentra Studio",
  passcarda: "Passcarda | JAMB and Post-UTME Practice | Eltemur Zentra Studio",
  "eldev-digital": "Eldev Digital Portfolio Website | Eltemur Zentra Studio",
  "mayus-alaro": "Mayus Alaro Marketing Website | Eltemur Zentra Studio",
  "beeba-expert": "Beeba Expert Portfolio Website | Eltemur Zentra Studio",
  "bofowo-agency": "Bofowo Agency Portfolio Website | Eltemur Zentra Studio",
  "rasab-junior": "Rasab Junior Portfolio Website | Eltemur Zentra Studio",
  "sumar-ecom-support": "Sumar Ecom Support Website | Eltemur Zentra Studio",
  adoltech: "Adoltech Portfolio Website | Eltemur Zentra Studio",
  "rafad-expert": "Rafad Expert Portfolio Website | Eltemur Zentra Studio",
  adex: "Adex Portfolio Website | Eltemur Zentra Studio",
};

const applicationCategories: Record<string, string> = {
  scoutier: "BusinessApplication",
  shopidict: "BusinessApplication",
  uiprep: "EducationalApplication",
  gradeng: "EducationalApplication",
  passcarda: "EducationalApplication",
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return pageMetadata({
    title: titles[project.slug] ?? `${project.name} | Eltemur Zentra Studio`,
    description: project.summary,
    path: `/work/${project.slug}`,
  });
}

function softwareSchema(project: Project) {
  if (project.group !== "product") return null;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${absoluteUrl(`/work/${project.slug}`)}#software`,
    name: project.name,
    description: project.summary,
    applicationCategory: applicationCategories[project.slug] ?? "BusinessApplication",
    operatingSystem: project.platforms.join(", "),
    url: project.links[0]?.href ?? absoluteUrl(`/work/${project.slug}`),
    ...(project.logo ? { image: absoluteUrl(project.logo.src) } : {}),
    publisher: { "@id": organizationId() },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = servicesForProject(project.slug);
  const schema = softwareSchema(project);

  return (
    <main id="main" className="flex-1">
      <article className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 lg:py-16">
        {schema ? <JsonLd data={schema} /> : null}
        <Breadcrumbs
          items={[
            { name: "Work", path: "/work" },
            { name: project.name, path: `/work/${project.slug}` },
          ]}
        />
        <p className="mt-6 text-sm font-semibold text-royal">{project.category}</p>
        <div className="mt-3 flex items-center gap-3.5">
          <ProjectMark project={project} size="md" />
          <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            {project.name}
          </h1>
        </div>
        <p className="mt-4 text-base leading-7 text-muted">{project.summary}</p>

        <dl className="mt-8 grid gap-4 border-y border-line py-5 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Platform
            </dt>
            <dd className="mt-1 text-sm text-navy">{project.platforms.join(", ")}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Technology used
            </dt>
            <dd className="mt-1 text-sm text-navy">{project.technologies.join(", ")}</dd>
          </div>
        </dl>

        {project.links.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-md border border-line px-3 py-2 text-sm font-semibold text-navy hover:border-royal hover:text-royal"
                >
                  {link.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 text-sm text-muted">No public link is listed for this project yet.</p>
        )}

        {project.problem ? (
          <section className="mt-10">
            <h2 className="text-xl font-bold text-navy">The problem</h2>
            <p className="mt-3 text-base leading-7 text-muted">{project.problem}</p>
          </section>
        ) : null}

        {project.solution ? (
          <section className="mt-8">
            <h2 className="text-xl font-bold text-navy">The solution</h2>
            <p className="mt-3 text-base leading-7 text-muted">{project.solution}</p>
          </section>
        ) : null}

        {project.features && project.features.length > 0 ? (
          <section className="mt-8">
            <h2 className="text-xl font-bold text-navy">Main features</h2>
            <ul className="mt-3 space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="border-t border-line py-2 text-sm leading-6 text-muted">
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {related.length > 0 ? (
          <section className="mt-10">
            <h2 className="text-xl font-bold text-navy">Related services</h2>
            <ul className="mt-3 space-y-2">
              {related.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm font-semibold text-royal hover:text-royal-dark"
                  >
                    {service.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <EnquiryCta
          heading="Start a similar project"
          text={`Tell Eltemur Zentra Studio if you need a ${project.category.toLowerCase()} with a job as specific as ${project.name}.`}
        />
      </article>
    </main>
  );
}
