import Link from "next/link";
import { featuredProjects, productProjects, websiteProjects, type Project } from "@/data/projects";

function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="border-t border-line py-6">
      <div className="grid gap-4 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-8">
        <p className="text-sm font-medium text-royal">{project.category}</p>
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-navy">
            <Link href={`/work/${project.slug}`} className="hover:text-royal">
              {project.name}
            </Link>
          </h3>
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-sm sm:leading-6">
            {project.summary}
          </p>
          <p className="mt-3 text-sm leading-6 text-navy sm:text-navy/80">
            <span className="block sm:inline">{project.platforms.join(" · ")}</span>
            <span className="mx-2 hidden text-line sm:inline" aria-hidden="true">
              /
            </span>
            <span className="mt-1 block sm:mt-0 sm:inline">
              {project.technologies.slice(0, 4).join(", ")}
            </span>
          </p>
          <div className="mt-2 flex flex-col items-start text-sm font-semibold sm:mt-3 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex min-h-11 items-center text-royal hover:text-royal-dark sm:min-h-0"
            >
              Project details
            </Link>
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-navy hover:text-royal sm:min-h-0"
              >
                {link.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectGroup({
  title,
  projects,
  heading,
}: {
  title: string;
  projects: Project[];
  heading: boolean;
}) {
  const Title = heading ? "h2" : "p";
  return (
    <div>
      <Title className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">{title}</Title>
      <div className="mt-2 border-b border-line">
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

export function SelectedWork({ embedded = false }: { embedded?: boolean }) {
  return (
    <section id={embedded ? undefined : "work"} className={embedded ? undefined : "scroll-mt-20"}>
      <div
        className={
          embedded
            ? "mx-auto w-full max-w-6xl px-5 pb-4 pt-8 sm:px-6 lg:px-8"
            : "mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20"
        }
      >
        {embedded ? null : (
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Selected work
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Products built under Eltemur Zentra Studio, and websites built for independent
              specialists.
            </p>
          </div>
        )}

        {embedded ? (
          <>
            <div className="mt-2">
              <ProjectGroup title="Products" projects={productProjects} heading />
            </div>
            <div className="mt-12">
              <ProjectGroup title="Websites" projects={websiteProjects} heading />
            </div>
          </>
        ) : (
          <>
            <div className="mt-8 border-b border-line">
              {featuredProjects.map((project) => (
                <ProjectRow key={project.slug} project={project} />
              ))}
            </div>
            <Link
              href="/work"
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-royal hover:text-royal-dark sm:min-h-0"
            >
              View All Projects
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
