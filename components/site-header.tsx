"use client";

import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { BrandLink } from "@/components/brand-lockup";
import { navLinks } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuButtonRef.current?.focus();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <BrandLink placement="header" />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/80 hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex min-h-10 items-center rounded-md bg-royal px-4 text-sm font-semibold text-white hover:bg-royal-dark"
          >
            Start a Project
          </Link>
        </nav>
        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-navy lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <RiCloseLine aria-hidden="true" size={20} />
          ) : (
            <RiMenuLine aria-hidden="true" size={20} />
          )}
        </button>
      </div>
      {open ? (
        <nav
          id={menuId}
          aria-label="Mobile"
          className="max-w-full overflow-x-clip border-t border-line bg-white px-5 py-3 lg:hidden"
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="block rounded-md px-2 py-3 text-base font-medium text-navy hover:bg-canvas"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={close}
            className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-royal px-4 py-3 text-sm font-semibold text-white hover:bg-royal-dark"
          >
            Start a Project
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
