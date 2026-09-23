import Link from "next/link";
import { BrandLink } from "@/components/brand-lockup";
import { DirectContact } from "@/components/direct-contact";
import { businessInfo, footerLinks } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-8 px-5 py-14 sm:grid-cols-2 sm:gap-10 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8 lg:py-20">
        <div className="max-w-sm sm:col-span-2 lg:col-span-1">
          <BrandLink />
          <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-sm sm:leading-6">
            We design and develop SaaS products, websites, web applications, mobile apps, and
            startup products.
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold text-navy">Explore</h2>
          <ul className="mt-3 space-y-1">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-11 items-center text-sm text-muted hover:text-navy sm:min-h-0 sm:py-1">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-semibold text-navy">Contact</h2>
          <div className="mt-3">
            <DirectContact />
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4 text-sm text-muted sm:px-6 lg:px-8">
          <p>
            {businessInfo.name} · CAC {businessInfo.cacNumber}
          </p>
          <p>© {year} {businessInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
