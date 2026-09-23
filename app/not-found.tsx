import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Eltemur Zentra Studio" },
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-5 py-20 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-navy">Page not found</h1>
      <p className="mt-3 max-w-lg text-base leading-7 text-muted">
        That page is not on this site. You can return home or go straight to the work and contact
        sections.
      </p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
        <Link href="/" className="text-royal hover:text-royal-dark">
          Home
        </Link>
        <Link href="/work" className="text-royal hover:text-royal-dark">
          Selected work
        </Link>
        <Link href="/contact" className="text-royal hover:text-royal-dark">
          Contact
        </Link>
      </div>
    </main>
  );
}
