import Link from "next/link";
import { BrandLink } from "@/components/brand-lockup";
import { DirectContact } from "@/components/direct-contact";
import { businessInfo, footerLinks } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="max-w-sm">
          <BrandLink />
          <p className="mt-4 text-sm leading-6 text-muted">
            We design and develop SaaS products, websites, web applications, mobile apps, and
            startup products.
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold text-navy">Explore</h2>
          <ul className="mt-3 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted hover:text-navy">
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
