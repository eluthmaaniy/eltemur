import Link from "next/link";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-canvas">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">Services</h2>
          <p className="mt-3 text-base leading-7 text-muted">
            Practical builds for people who need a product, a website, or a first version they
            can put in front of customers.{" "}
            <Link href="/services" className="font-semibold text-royal">
              View the service pages
            </Link>
            .
          </p>
        </div>
        <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li key={service.title} className="border-t border-line py-5">
                <div className="flex gap-3">
                  <Icon aria-hidden="true" className="mt-0.5 shrink-0 text-royal" size={18} />
                  <div>
                    <h3 className="text-base font-semibold text-navy">
                      <Link href={service.href} className="hover:text-royal">
                        {service.title}
                      </Link>
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted">{service.description}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
