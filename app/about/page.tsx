import type { Metadata } from "next";
import Link from "next/link";
import { Contact } from "@/components/Contact";
import { IconArrow, IconTelegram } from "@/components/Icons";
import {
  FloatingContact,
  Magnetic,
  ScrollWords,
  Spotlight,
  StudioClock,
  Tilt,
} from "@/components/Motion";
import { site, telegramUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Meet Nak",
  description:
    "Nak is the founder and builder behind Katana Studio in Cambodia. One person who designs, builds and looks after your website or system, from the first message to launch day.",
  openGraph: {
    title: `Meet Nak | ${site.name}`,
    description:
      "The person behind Katana Studio. Websites, business systems and brands, built directly by the person you talk to.",
  },
};

const blade = [
  {
    title: "Sharp",
    text: "One clean cut. I focus on what your business actually needs and leave out the rest.",
  },
  {
    title: "Precise",
    text: "Every screen, button and word is there on purpose. Small details are where trust is won.",
  },
  {
    title: "Fast",
    text: "No layers of people between you and the work. Decisions happen in one conversation.",
  },
];

const promises = [
  {
    title: "You talk to me",
    text: "Not a salesperson, not an account manager. The person replying to your message is the one building your project.",
  },
  {
    title: "A clear quote first",
    text: "We agree on scope and price before anything starts. No hidden extras halfway through.",
  },
  {
    title: "English or Khmer",
    text: "Explain your idea in whichever language is easier. I can build bilingual sites too.",
  },
  {
    title: "Works on every phone",
    text: "Most of your customers will see your site on a phone, so that's where I start.",
  },
  {
    title: "I teach you to use it",
    text: "When it goes live, you get a walkthrough so you're never stuck waiting on me for simple changes.",
  },
  {
    title: "Two months of care, free",
    text: "After launch, the first two months of maintenance are on me, so small fixes cost you nothing.",
  },
];

const toolkit = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Databases & APIs", "Vercel"];

function delay(ms: number) {
  return { "--d": `${ms}ms` } as React.CSSProperties;
}

export default function About() {
  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="grain relative isolate overflow-hidden bg-charcoal pt-16 text-warm">
        <Spotlight />
        <div className="dot-grid absolute inset-0 -z-10 text-white/[0.06] [mask-image:radial-gradient(ellipse_at_30%_40%,black,transparent_75%)]" />
        <div
          className="cut pointer-events-none absolute left-[-5%] top-[70%] -z-10 h-px w-[110%] overflow-hidden bg-gradient-to-r from-transparent via-teal to-transparent shadow-[0_0_12px_rgb(20_184_166/0.6)]"
          aria-hidden="true"
        >
          <span className="gleam" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-14 sm:px-8 md:pt-24 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow fade-in text-teal" style={delay(150)}>
              ( The person behind the studio )
            </p>
            <h1 className="rise mt-8 text-[clamp(3.4rem,11vw,9.5rem)] font-medium leading-[0.9]">
              <span>
                <span style={delay(100)}>Hi, I&apos;m</span>
              </span>
              <span>
                <span style={delay(240)}>
                  <em className="sheen not-italic">Nak.</em>
                </span>
              </span>
            </h1>
            <p
              className="fade-in mt-10 max-w-xl text-lg leading-relaxed text-line/75 md:text-xl"
              style={delay(600)}
            >
              I started {site.name} to turn good ideas into websites, systems and brands that
              businesses are proud to show. I design it, build it and look after it myself, from
              your first message to launch day and beyond.
            </p>
            <div className="fade-in mt-10 flex flex-wrap gap-3" style={delay(800)}>
              {telegramUrl && (
                <Magnetic>
                  <a href={telegramUrl} className="btn btn-teal">
                    <IconTelegram className="h-5 w-5" />
                    Message me on Telegram
                  </a>
                </Magnetic>
              )}
              <Link href="/#services" className="btn btn-ghost text-warm">
                See what I build <IconArrow />
              </Link>
            </div>
          </div>

          {/* Studio ID card */}
          <div className="fade-in" style={delay(500)}>
            <Tilt>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink p-7 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.8)] sm:p-8">
                <div className="dot-grid absolute inset-0 text-white/[0.05]" aria-hidden="true" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/mark-light.svg"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-10 -right-10 w-64 opacity-[0.06]"
                />
                <div className="relative flex items-center justify-between">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/brand/mark-light.svg" alt="" className="h-9 w-auto" />
                  <span className="eyebrow text-line/40">Studio ID</span>
                </div>
                <div className="relative mt-10">
                  <p className="font-heading text-5xl font-medium tracking-tight">Nak</p>
                  <p className="mt-2 text-line/60">Founder &amp; builder, {site.name}</p>
                </div>
                <dl className="relative mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 text-sm">
                  {[
                    ["Based in", "Cambodia"],
                    ["Local time", null],
                    ["Speaks", "English · Khmer"],
                    ["Builds", "Web · Systems · Brands"],
                  ].map(([k, v]) => (
                    <div key={k} className="bg-ink p-4">
                      <dt className="eyebrow text-[0.65rem] text-line/40">{k}</dt>
                      <dd className="mt-2 font-heading text-warm">
                        {v ?? <StudioClock />}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="relative mt-6 flex items-center gap-3 text-sm text-line/70">
                  <span className="pulse h-2 w-2 rounded-full bg-teal" />
                  Taking on new projects
                </p>
              </div>
            </Tilt>
          </div>
        </div>
      </section>

      {/* ───────────── Statement ───────────── */}
      <section className="bg-warm">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-28 sm:px-8 md:grid-cols-[14rem_1fr] md:py-40">
          <p className="eyebrow text-teal-dark" data-reveal>
            ( Why it matters )
          </p>
          <ScrollWords
            className="font-heading text-[clamp(1.9rem,4.2vw,3.6rem)] font-medium leading-[1.12] tracking-[-0.025em]"
            text="You're not hiring an agency. You're hiring me. The person who answers your message is the same person who designs your screens, writes your code and keeps it running after launch."
          />
        </div>
      </section>

      {/* ───────────── Why a katana ───────────── */}
      <section className="grain relative isolate overflow-hidden bg-charcoal text-warm">
        <Spotlight />
        <div className="dot-grid absolute inset-0 text-white/[0.04]" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 md:py-36">
          <div className="grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow text-teal" data-reveal>
                ( Why a katana )
              </p>
              <h2
                className="mt-5 text-[clamp(2.6rem,6vw,5.5rem)] font-medium leading-[0.95]"
                data-reveal
                style={delay(100)}
              >
                One blade.
                <br />
                <span className="text-teal">Built with care.</span>
              </h2>
            </div>
            <p className="max-w-md text-line/70 md:justify-self-end" data-reveal style={delay(200)}>
              A katana is made by one craftsperson, shaped slowly and finished by hand. That&apos;s
              how I want every project to feel.
            </p>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
            {blade.map((b, i) => (
              <div key={b.title} className="bg-charcoal p-8 md:p-10" data-reveal style={delay(i * 140)}>
                <span className="font-heading text-sm text-teal">0{i + 1}</span>
                <h3 className="mt-6 text-4xl font-medium">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-line/65">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Promises ───────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
          <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="eyebrow text-teal-dark" data-reveal>
                ( Working with me )
              </p>
              <h2
                className="mt-5 text-[clamp(2.6rem,6vw,5.5rem)] font-medium leading-[0.95]"
                data-reveal
                style={delay(100)}
              >
                My promise to you
              </h2>
            </div>
            <p className="max-w-md text-slate md:justify-self-end" data-reveal style={delay(200)}>
              I only take on a few projects at a time, so each one gets my full attention.
            </p>
          </div>
          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {promises.map((p, i) => (
              <li
                key={p.title}
                className="group rounded-3xl border border-line bg-warm p-8 transition-colors duration-500 hover:border-teal"
                data-reveal
                style={delay((i % 3) * 120)}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-teal font-heading text-sm text-teal-dark transition-colors duration-500 group-hover:bg-teal group-hover:text-charcoal">
                  0{i + 1}
                </span>
                <h3 className="mt-7 text-2xl font-medium">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-slate">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Toolkit ───────────── */}
      <section className="border-y border-line bg-warm">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 md:grid-cols-[1fr_1.4fr] md:items-center">
          <div>
            <p className="eyebrow text-teal-dark" data-reveal>
              ( Toolkit )
            </p>
            <h2
              className="mt-5 text-[clamp(2.2rem,4.5vw,3.8rem)] font-medium leading-[0.95]"
              data-reveal
              style={delay(100)}
            >
              Modern tools, <span className="text-outline">no shortcuts.</span>
            </h2>
            <p className="mt-6 max-w-sm text-slate" data-reveal style={delay(200)}>
              The same tools used by the fastest sites on the web. This page is built with them
              too.
            </p>
          </div>
          <ul className="flex flex-wrap gap-3" data-reveal style={delay(200)}>
            {toolkit.map((t) => (
              <li
                key={t}
                className="rounded-full border border-charcoal/15 bg-white px-5 py-3 font-heading text-lg font-medium transition-colors duration-300 hover:border-teal hover:text-teal-dark"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact />
      {telegramUrl && <FloatingContact href={telegramUrl} label="Message Nak on Telegram" />}
    </>
  );
}
