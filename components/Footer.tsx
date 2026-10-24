import Link from "next/link";
import { nav, site, telegramUrl } from "@/lib/site";
import { StudioClock } from "./Motion";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-warm">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-10 pt-20 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="eyebrow text-teal">{site.tagline}</p>
          <p className="mt-4 max-w-xs text-line/70">{site.statement}</p>
        </div>
        <div>
          <p className="eyebrow text-line/40">Studio</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-line/80 transition-colors hover:text-teal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-line/40">Contact</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {telegramUrl && (
              <li>
                <a href={telegramUrl} className="text-line/80 transition-colors hover:text-teal">
                  Telegram
                </a>
              </li>
            )}
            <li>
              <a
                href={site.contact.facebook}
                className="text-line/80 transition-colors hover:text-teal"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-line/40">Based in</p>
          <p className="mt-5 text-sm text-line/80">Cambodia</p>
          <p className="mt-1 font-heading text-sm text-line/50">
            <StudioClock /> ICT (UTC+7)
          </p>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8" aria-hidden="true">
        <p className="select-none whitespace-nowrap font-heading text-[13.6vw] font-medium leading-[0.85] tracking-[-0.05em] text-white/[0.06] xl:text-[11.6rem]">
          Katana Studio<span className="text-teal/70">.</span>
        </p>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-5 py-6 text-xs text-line/40 sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Designed and built by {site.name}.</p>
        </div>
      </div>
    </footer>
  );
}
