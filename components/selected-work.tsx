import Link from "next/link";
import { productProjects, websiteProjects, type Project } from "@/data/projects";

function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="border-t border-line py-6">
      <div className="grid gap-3 md:grid-cols-[9.5rem_minmax(0,1fr)] md:gap-8">
        <p className="text-sm font-medium text-royal">{project.category}</p>
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-navy">
            <Link href={`/work/${project.slug}`} className="hover:text-royal">
              {project.name}
            </Link>
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{project.summary}</p>
          <p className="mt-3 text-sm text-navy/75">
            {project.platforms.join(" · ")}
            <span className="px-2 text-line">/</span>
            {project.technologies.slice(0, 4).join(", ")}
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
            <Link href={`/work/${project.slug}`} className="text-royal hover:text-royal-dark">
              Project details
            </Link>
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-royal"
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
            <p className="mt-3 text-base leading-7 text-muted">
              Products built under Eltemur Zentra Studio, and websites built for independent
              specialists.{" "}
              <Link href="/work" className="font-semibold text-royal">
                Open the project index
              </Link>
              .
            </p>
          </div>
        )}

        <div className={embedded ? "mt-2" : "mt-8"}>
          {embedded ? (
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">Products</h2>
          ) : (
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">Products</p>
          )}
          <div className="mt-2 border-b border-line">
            {productProjects.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          {embedded ? (
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">Websites</h2>
          ) : (
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">Websites</p>
          )}
          <ul className="mt-2 border-b border-line">
            {websiteProjects.map((project) => (
              <li key={project.slug}>
                <ProjectRow project={project} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
