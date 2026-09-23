import Link from "next/link";
import { productProjects } from "@/data/projects";

const preview = productProjects.slice(0, 4);

export function Hero() {
  return (
    <section className="hero-rise border-b border-line">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pb-14 pt-8 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-royal">Eltemur Zentra Studio</p>
          <h1 className="mt-3 text-[1.75rem] font-extrabold leading-tight tracking-tight text-navy sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            We build digital products that solve problems and create value.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
            Eltemur Zentra Studio builds SaaS platforms, websites, web applications, mobile
            apps, MVPs, and startup products in Nigeria that help individuals and businesses
            solve problems, improve operations, reach customers, and generate revenue.
          </p>
          <div className="mt-6 flex flex-col gap-3 min-[360px]:flex-row sm:mt-7">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-md bg-royal px-3.5 text-sm font-semibold text-white hover:bg-royal-dark sm:min-h-10 sm:px-4"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-md border border-line bg-white px-3.5 text-sm font-semibold text-navy hover:border-navy/30 sm:min-h-10 sm:px-4"
            >
              View Our Work
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">
            Selected products
          </p>
          <ul className="grid grid-cols-1 overflow-hidden rounded-lg border border-line min-[390px]:grid-cols-2">
            {preview.map((project) => (
              <li
                key={project.slug}
                className="border-b border-line last:border-b-0 min-[390px]:[&:nth-child(odd)]:border-r min-[390px]:[&:nth-child(n+3)]:border-b-0"
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="block h-full bg-white p-4 hover:bg-canvas focus-visible:relative sm:p-5"
                >
                  <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-royal">
                    {project.category}
                  </span>
                  <span className="mt-2 block text-base font-semibold text-navy">
                    {project.name}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-muted">
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
