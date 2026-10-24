import Link from "next/link";
import { nav, site } from "@/lib/site";
import { IconMenu } from "./Icons";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name}, home`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={light ? "/brand/mark-light.svg" : "/brand/mark-dark.svg"}
        alt=""
        width={36}
        height={32}
        className="h-8 w-auto transition-transform duration-500 group-hover:-rotate-6"
      />
      <span className="font-heading text-lg font-medium tracking-[0.08em]">{site.name}</span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-charcoal/80 text-warm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo light />
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm text-line/80 transition-colors hover:text-warm"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-teal transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
          <Link href="/#contact" className="btn btn-teal !py-2.5 !text-sm">
            Start a project
          </Link>
        </nav>
        <details className="menu relative md:hidden">
          <summary
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20"
            aria-label="Open menu"
          >
            <IconMenu className="h-5 w-5" />
          </summary>
          <nav
            aria-label="Mobile"
            className="absolute right-0 mt-3 flex w-60 flex-col rounded-2xl border border-white/10 bg-charcoal p-3 shadow-2xl"
          >
            {[...nav, { href: "/#contact", label: "Contact" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-white/5"
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
