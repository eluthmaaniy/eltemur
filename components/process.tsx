import Link from "next/link";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section id="process" className="border-t border-line bg-canvas">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            How a project runs
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Four stages, kept short so the work moves from the problem to a live product.
          </p>
        </div>
        <ol className="mt-10 grid items-start gap-8 border-line sm:grid-cols-2 lg:grid-cols-4 max-sm:gap-0 max-sm:border-l">
          {processSteps.map((step, index) => (
            <li key={step.title} className="max-sm:py-5 max-sm:pl-5">
              <p className="text-sm font-semibold text-royal">0{index + 1}</p>
              <h3 className="mt-2 text-base font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted sm:text-sm sm:leading-6">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-sm sm:leading-6">
          Related notes:{" "}
          <Link href="/insights/what-to-include-in-a-first-version" className="font-semibold text-royal">
            what a first version should include
          </Link>{" "}
          and{" "}
          <Link href="/insights/what-to-prepare-before-a-project" className="font-semibold text-royal">
            what to prepare before a project starts
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
