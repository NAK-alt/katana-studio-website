import Link from "next/link";
import { nav, site, telegramUrl } from "@/lib/site";
import { Logo } from "./Header";

export function Footer() {
  return (
    <footer className="bg-charcoal text-warm">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="eyebrow mt-5 text-teal">{site.tagline}</p>
          <p className="mt-3 max-w-xs text-sm text-line/80">{site.statement}</p>
        </div>
        <div>
          <p className="eyebrow text-line/60">Studio</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-line/90 hover:text-teal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-line/60">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            {telegramUrl && (
              <li>
                <a href={telegramUrl} className="text-line/90 hover:text-teal">
                  Telegram
                </a>
              </li>
            )}
            <li>
              <a href={site.contact.facebook} className="text-line/90 hover:text-teal">
                Facebook
              </a>
            </li>
            <li className="text-line/60">Based in Cambodia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-line/50 sm:px-8">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
