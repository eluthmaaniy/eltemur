import { RiMailLine, RiPhoneLine, RiWhatsappLine } from "@remixicon/react";
import { businessInfo } from "@/lib/site";

const mailto = `mailto:${businessInfo.email}`;
const tel = `tel:${businessInfo.phoneInternational}`;

export function DirectContact({ tone = "light" }: { tone?: "light" | "dark" }) {
  const linkClass =
    tone === "dark"
      ? "text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
      : "text-royal underline decoration-royal/30 underline-offset-4 hover:decoration-royal";
  const iconClass = tone === "dark" ? "text-white" : "text-royal";

  return (
    <div>
      <ul className="space-y-1 text-sm">
        <li className="flex min-w-0 items-center gap-2">
          <RiMailLine aria-hidden="true" className={`shrink-0 ${iconClass}`} size={16} />
          <a className={`inline-flex min-h-11 items-center max-lg:[overflow-wrap:anywhere] sm:min-h-0 ${linkClass}`} href={mailto}>
            {businessInfo.email}
          </a>
        </li>
        <li className="flex min-w-0 items-center gap-2">
          <RiPhoneLine aria-hidden="true" className={`shrink-0 ${iconClass}`} size={16} />
          <a className={`inline-flex min-h-11 items-center sm:min-h-0 ${linkClass}`} href={tel}>
            {businessInfo.phoneDisplay}
          </a>
        </li>
        {tone === "light" ? (
          <li className="flex min-w-0 items-center gap-2">
            <RiWhatsappLine aria-hidden="true" className={`shrink-0 ${iconClass}`} size={16} />
            <a
              className={`inline-flex min-h-11 items-center sm:min-h-0 ${linkClass}`}
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ) : null}
      </ul>
      {tone === "dark" ? (
        <div className="mt-6 flex flex-col gap-3 sm:mt-5 sm:flex-row">
          <a
            href={mailto}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-white px-3.5 text-sm font-semibold text-navy hover:bg-white/90 sm:min-h-10 sm:w-auto sm:px-4"
          >
            <RiMailLine aria-hidden="true" size={16} />
            Send an Email
          </a>
          <a
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border border-white/40 px-3.5 text-sm font-semibold text-white hover:border-white sm:min-h-10 sm:w-auto sm:px-4"
          >
            <RiWhatsappLine aria-hidden="true" size={16} />
            Chat on WhatsApp
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      ) : null}
    </div>
  );
}
