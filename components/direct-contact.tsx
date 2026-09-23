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
      <ul className="space-y-2 text-sm">
        <li className="flex items-center gap-2">
          <RiMailLine aria-hidden="true" className={`shrink-0 ${iconClass}`} size={16} />
          <a className={linkClass} href={mailto}>
            {businessInfo.email}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <RiPhoneLine aria-hidden="true" className={`shrink-0 ${iconClass}`} size={16} />
          <a className={linkClass} href={tel}>
            {businessInfo.phoneDisplay}
          </a>
        </li>
        {tone === "light" ? (
          <li className="flex items-center gap-2">
            <RiWhatsappLine aria-hidden="true" className={`shrink-0 ${iconClass}`} size={16} />
            <a
              className={linkClass}
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
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={mailto}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-3.5 py-2 text-sm font-semibold text-navy hover:bg-white/90"
          >
            <RiMailLine aria-hidden="true" size={16} />
            Send an Email
          </a>
          <a
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-3.5 py-2 text-sm font-semibold text-white hover:border-white"
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
