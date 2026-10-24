import Link from "next/link";
import { nav, site } from "@/lib/site";
import { IconMenu } from "./Icons";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${site.name}, home`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={light ? "/brand/mark-light.svg" : "/brand/mark-dark.svg"}
        alt=""
        width={36}
        height={32}
        className="h-8 w-auto"
      />
      <span className="font-heading text-lg font-medium tracking-[0.08em]">{site.name}</span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-warm/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate transition-colors hover:text-charcoal"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn btn-dark !py-2 !text-sm">
            Start a project
          </Link>
        </nav>
        <details className="menu relative md:hidden">
          <summary
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line"
            aria-label="Open menu"
          >
            <IconMenu className="h-5 w-5" />
          </summary>
          <nav
            aria-label="Mobile"
            className="absolute right-0 mt-3 flex w-56 flex-col rounded-2xl border border-line bg-warm p-3 shadow-lg"
          >
            {[...nav, { href: "/#contact", label: "Contact" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-line/40"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
