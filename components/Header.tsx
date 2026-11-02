"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site, telegramUrl } from "@/lib/site";
import { IconArrow, IconTelegram } from "./Icons";

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

const sectionIds = nav.map((n) => n.href.replace("/#", ""));

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // Hide on scroll down, show on scroll up, and track reading progress.
  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
      setScrolled(y > 24);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 400);
        last = y;
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Highlight the nav link for the section in view.
  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Full-screen mobile menu: lock scroll and close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 text-warm transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
        hidden && !open ? "-translate-y-full" : ""
      } ${
        scrolled || open
          ? "border-b border-white/10 bg-charcoal/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="relative z-10 mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo light />
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const isActive = active === item.href.replace("/#", "");
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`group relative text-sm transition-colors hover:text-warm ${
                  isActive ? "text-warm" : "text-line/70"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-teal transition-transform duration-300 group-hover:scale-x-100 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
          <Link href="/#contact" className="btn btn-teal !py-2.5 !text-sm">
            Start a project
          </Link>
        </nav>
        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/20 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-[4px]"
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-[4px]"
            }`}
          />
        </button>
      </div>

      {/* Reading progress, drawn like a blade along the header's edge. */}
      <div
        className="absolute bottom-[-1px] left-0 h-[2px] origin-left bg-gradient-to-r from-teal/0 via-teal to-teal"
        style={{ width: "100%", transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-0 -z-0 flex h-[100dvh] flex-col bg-charcoal px-5 pb-8 pt-24 transition-[opacity,visibility] duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="dot-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
        <nav aria-label="Mobile" className="relative flex flex-col">
          {[...nav, { href: "/#contact", label: "Contact" }].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className={`flex items-baseline gap-4 border-b border-white/10 py-5 font-heading text-4xl font-medium tracking-tight transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
            >
              <span className="font-heading text-xs text-teal">0{i + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="relative mt-auto space-y-4">
          <p className="flex items-center gap-3 text-sm text-line/60">
            <span className="pulse h-2 w-2 rounded-full bg-teal" />
            Taking on new projects
          </p>
          {telegramUrl && (
            <a
              href={telegramUrl}
              tabIndex={open ? 0 : -1}
              className="btn btn-teal w-full justify-center"
            >
              <IconTelegram className="h-5 w-5" />
              Message on Telegram
              <IconArrow />
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
