import Link from "next/link";
import { productProjects } from "@/data/projects";

const preview = productProjects.slice(0, 4);

export function Hero() {
  return (
    <section className="hero-rise border-b border-line">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-royal">Eltemur Zentra Studio</p>
          <h1 className="mt-3 text-[1.75rem] font-extrabold leading-tight tracking-tight text-navy sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            We build digital products that solve problems and create value.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-muted">
            Eltemur Zentra Studio builds SaaS platforms, websites, web applications, mobile
            apps, MVPs, and startup products in Nigeria that help individuals and businesses
            solve problems, improve operations, reach customers, and generate revenue.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-royal px-4 py-2.5 text-sm font-semibold text-white hover:bg-royal-dark"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-md border border-line bg-white px-4 py-2.5 text-sm font-semibold text-navy hover:border-navy/30"
            >
              View Our Work
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Selected products
          </p>
          <ul className="grid grid-cols-2 overflow-hidden rounded-lg border border-line">
            {preview.map((project, index) => (
              <li
                key={project.slug}
                className={[
                  index % 2 === 0 ? "border-r border-line" : "",
                  index < 2 ? "border-b border-line" : "",
                ].join(" ")}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="block h-full bg-white p-4 hover:bg-canvas sm:p-5"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-royal">
                    {project.category}
                  </span>
                  <span className="mt-2 block text-base font-semibold text-navy">
                    {project.name}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    {project.platforms.join(" · ")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
