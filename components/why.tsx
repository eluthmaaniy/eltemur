import { reasons } from "@/data/reasons";

export function Why() {
  return (
    <section id="why" className="border-t border-line bg-canvas">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Why work with us
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            The working habits behind a build, from the first conversation through launch.
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-1 items-start gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <li key={reason.title}>
                <div className="flex items-center gap-2.5 sm:block">
                  <Icon aria-hidden="true" className="shrink-0 text-royal" size={18} />
                  <h3 className="text-base font-semibold text-navy sm:mt-3">{reason.title}</h3>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-muted sm:mt-1.5 sm:text-sm sm:leading-6">
                  {reason.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
