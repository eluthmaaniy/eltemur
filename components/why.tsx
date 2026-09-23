import { reasons } from "@/data/reasons";

export function Why() {
  return (
    <section id="why" className="border-t border-line bg-canvas">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Why work with us
          </h2>
          <p className="mt-3 text-base leading-7 text-muted">
            The working habits behind a build, from the first conversation through launch.
          </p>
        </div>
        <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <li key={reason.title}>
                <Icon aria-hidden="true" className="text-royal" size={18} />
                <h3 className="mt-3 text-base font-semibold text-navy">{reason.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted">{reason.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
