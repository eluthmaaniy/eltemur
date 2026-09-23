import { RiBuilding2Line } from "@remixicon/react";
import Link from "next/link";
import { businessInfo } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">About</h2>
          <p className="mt-4 text-base leading-7 text-muted">
            We combine product thinking, design, and software development to turn useful ideas
            into working digital products. Our work ranges from client websites and applications
            to SaaS platforms and startup products developed under Eltemur Zentra Studio.
          </p>
          <p className="mt-4 text-base leading-7 text-muted">
            That includes outreach software, a store audit tool, exam preparation products, an
            offline CGPA calculator, and portfolio websites for independent specialists.
          </p>
          <div className="mt-8 flex items-start gap-3">
            <RiBuilding2Line aria-hidden="true" className="mt-0.5 shrink-0 text-royal" size={18} />
            <p className="text-sm leading-6">
              <span className="font-semibold text-navy">
                Registered with the {businessInfo.registrationAuthority}.
              </span>
              <span className="mt-1 block text-muted">CAC {businessInfo.cacNumber}</span>
              <Link href="/about" className="mt-2 inline-block font-semibold text-royal">
                Company facts and registration
              </Link>
            </p>
          </div>
        </div>
        <div className="border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <h3 className="text-sm font-semibold text-navy">What we build</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
            <li>SaaS products with accounts and payments</li>
            <li>Public websites and content-managed marketing sites</li>
            <li>Web applications for a specific workflow</li>
            <li>Android applications, including offline tools</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
