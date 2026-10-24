import Link from "next/link";
import { Contact } from "@/components/Contact";
import {
  IconArrow,
  IconBrowser,
  IconDatabase,
  IconLayout,
  IconPen,
  IconRocket,
  IconSystem,
} from "@/components/Icons";
import { ScrollWords, StudioClock } from "@/components/Motion";
import { site } from "@/lib/site";

const services = [
  {
    icon: IconBrowser,
    title: "Websites & web apps",
    text: "Clear, fast websites and web applications, from a single landing page to a full bilingual site.",
    tags: ["Landing pages", "Company sites", "Web apps"],
  },
  {
    icon: IconSystem,
    title: "Business systems",
    text: "Internal tools shaped around how your team already works, so daily tasks take less effort.",
    tags: ["Records", "Bookings", "Stock", "Dashboards"],
  },
  {
    icon: IconDatabase,
    title: "Backend & databases",
    text: "Data models, APIs and integrations that keep everything reliable behind the scenes.",
    tags: ["APIs", "Databases", "Integrations"],
  },
  {
    icon: IconLayout,
    title: "UI/UX design",
    text: "Interfaces planned around real people, with simple flows and a consistent look on every screen.",
    tags: ["User flows", "Wireframes", "Interface design"],
  },
  {
    icon: IconPen,
    title: "Branding & creative",
    text: "Logos, brand guidelines and visual assets. Photo and video editing is a newer area we are still growing.",
    tags: ["Logos", "Guidelines", "Social assets"],
  },
  {
    icon: IconRocket,
    title: "Deployment & support",
    text: "Hosting, domains, launch and steady care once your project is live.",
    tags: ["Hosting", "Domains", "Maintenance"],
  },
];

const marquee = [
  "Websites",
  "Web apps",
  "Business systems",
  "Backend",
  "UI/UX",
  "Branding",
  "Deployment",
];

const steps = [
  { title: "Talk", text: "We listen to the idea, who it's for and what it needs to do." },
  {
    title: "Plan",
    text: "We agree on scope, timeline and a project-based price before any work starts.",
  },
  {
    title: "Build",
    text: "Design and development in small steps, with regular check-ins so nothing surprises you.",
  },
  {
    title: "Launch",
    text: "We put it live, hand it over clearly and stay close to keep it running well.",
  },
];

const principles = [
  { title: "Clear", text: "Plain language, honest scope and no surprises on price." },
  { title: "Thoughtful", text: "Every screen and feature needs a reason to be there." },
  { title: "Built to last", text: "Solid foundations that are easy to maintain and grow." },
];

const faqs = [
  {
    q: "How much does a project cost?",
    a: "Every project is priced on its own scope, so there are no fixed packages. After a short conversation we send a clear quote, and work only starts once you're happy with it.",
  },
  {
    q: "How long does it take?",
    a: "It depends on the size of the project. A simple website is much quicker than a custom business system. We agree on a timeline together during planning.",
  },
  {
    q: "Do you work with clients outside Cambodia?",
    a: "Yes. We're based in Cambodia and work with local and international clients. Everything can be handled online.",
  },
  {
    q: "Can you work in Khmer?",
    a: "Yes. We work in English first and use Khmer whenever it's easier for you. We can also build bilingual English and Khmer websites.",
  },
  {
    q: "What happens after launch?",
    a: "We can look after hosting, domains, updates and small changes, so your project keeps running smoothly.",
  },
];

function delay(ms: number) {
  return { "--d": `${ms}ms` } as React.CSSProperties;
}

export default function Home() {
  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-charcoal pt-16 text-warm">
        <div className="dot-grid absolute inset-0 -z-10 text-white/[0.06] [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_75%)]" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/mark-light.svg"
          alt=""
          aria-hidden="true"
          className="fade-in pointer-events-none absolute -right-16 top-24 -z-10 w-[min(62vw,46rem)] max-w-none opacity-[0.07] md:right-[-2rem]"
          style={delay(400)}
        />
        <div
          className="cut pointer-events-none absolute left-[-5%] top-[58%] -z-10 h-px w-[110%] bg-gradient-to-r from-transparent via-teal to-transparent"
          aria-hidden="true"
        />

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-5 pb-10 pt-12 sm:px-8 md:pt-20">
          <div
            className="fade-in flex flex-wrap items-center justify-between gap-4 text-sm text-line/60"
            style={delay(200)}
          >
            <p className="eyebrow text-teal">{site.tagline}</p>
            <p className="flex items-center gap-3">
              <span className="pulse h-2 w-2 rounded-full bg-teal" />
              Taking on new projects
              <span className="hidden text-line/30 sm:inline">/</span>
              <span className="hidden font-heading sm:inline">
                Cambodia · <StudioClock />
              </span>
            </p>
          </div>

          <h1 className="rise my-14 text-[clamp(3.2rem,10.5vw,10rem)] font-medium leading-[0.9]">
            <span>
              <span style={delay(100)}>Good ideas</span>
            </span>
            <span>
              <span style={delay(220)}>deserve to be</span>
            </span>
            <span>
              <span style={delay(340)}>
                built <em className="not-italic text-teal">well.</em>
              </span>
            </span>
          </h1>

          <div
            className="fade-in grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[1.3fr_1fr] md:items-end"
            style={delay(700)}
          >
            <p className="max-w-xl text-lg leading-relaxed text-line/75">
              {site.name} is a digital and creative studio in Cambodia. We design and develop
              thoughtful websites, systems and brands that look good, work well, and serve a
              purpose.
            </p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href="/#contact" className="btn btn-teal">
                Start a project <IconArrow />
              </Link>
              <Link href="/#services" className="btn btn-ghost text-warm">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Marquee ───────────── */}
      <section aria-label="What we do" className="marquee-wrap overflow-hidden border-b border-line bg-warm py-7">
        <div className="marquee" aria-hidden="true">
          {[0, 1].map((n) => (
            <div key={n} className="flex shrink-0 items-center">
              {marquee.map((item, i) => (
                <span key={item} className="flex items-center">
                  <span
                    className={`px-8 font-heading text-4xl font-medium tracking-tight md:text-6xl ${
                      i % 2 ? "text-outline" : ""
                    }`}
                  >
                    {item}
                  </span>
                  <span className="h-3 w-3 rounded-full bg-teal" />
                </span>
              ))}
            </div>
          ))}
        </div>
        <p className="sr-only">{marquee.join(", ")}</p>
      </section>

      {/* ───────────── Manifesto ───────────── */}
      <section className="bg-warm">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-28 sm:px-8 md:grid-cols-[14rem_1fr] md:py-40">
          <p className="eyebrow text-teal-dark" data-reveal>
            ( About the studio )
          </p>
          <div>
            <ScrollWords
              className="font-heading text-[clamp(1.9rem,4.2vw,3.6rem)] font-medium leading-[1.12] tracking-[-0.025em]"
              text="We're a flexible studio that turns ideas into websites, systems and brands. We start by understanding the idea, then build something that is clear to use, good to look at and practical to run."
            />
            <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
              {principles.map((p, i) => (
                <div key={p.title} className="bg-warm p-7" data-reveal style={delay(i * 120)}>
                  <span className="font-heading text-sm text-teal-dark">0{i + 1}</span>
                  <h3 className="mt-5 text-2xl font-medium">{p.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Services ───────────── */}
      <section id="services" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 pt-28 sm:px-8">
          <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="eyebrow text-teal-dark" data-reveal>
                ( Services )
              </p>
              <h2
                className="mt-5 text-[clamp(2.6rem,6vw,5.5rem)] font-medium leading-[0.95]"
                data-reveal
                style={delay(100)}
              >
                What we do
              </h2>
            </div>
            <p className="max-w-md text-slate md:justify-self-end" data-reveal style={delay(200)}>
              Six things we do well. Most projects mix a few of them, and that&apos;s exactly how we
              like it.
            </p>
          </div>
        </div>
        <ul className="mx-auto mt-16 max-w-7xl border-t border-line">
          {services.map(({ icon: Icon, title, text, tags }, i) => (
            <li key={title} className="border-b border-line" data-reveal>
              <div className="service-row relative isolate grid gap-4 px-5 py-9 sm:px-8 md:grid-cols-[5rem_1.1fr_1.3fr_auto] md:items-center md:gap-8">
                <span className="service-muted font-heading text-sm text-slate transition-colors">
                  0{i + 1}
                </span>
                <h3 className="flex items-center gap-4 text-3xl font-medium md:text-4xl">
                  <Icon className="h-7 w-7 shrink-0 text-teal" />
                  {title}
                </h3>
                <div>
                  <p className="service-muted text-slate transition-colors">{text}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {tags.map((t) => (
                      <li
                        key={t}
                        className="service-muted rounded-full border border-current/20 px-3 py-1 text-xs text-slate transition-colors"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="service-arrow hidden h-12 w-12 items-center justify-center rounded-full border border-line transition-all duration-500 md:flex">
                  <IconArrow />
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div className="h-28" />
      </section>

      {/* ───────────── What we build ───────────── */}
      <section id="build" className="bg-warm">
        <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
          <p className="eyebrow text-teal-dark" data-reveal>
            ( What we build )
          </p>
          <h2
            className="mt-5 max-w-4xl text-[clamp(2.6rem,6vw,5.5rem)] font-medium leading-[0.95]"
            data-reveal
            style={delay(100)}
          >
            From a first idea to something people use every day.
          </h2>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            <BuildCard
              n="01"
              title="Websites"
              text="A clear online home for your business that works on every screen, in English, Khmer or both."
              mock={<MockWebsite />}
            />
            <BuildCard
              n="02"
              title="Systems & dashboards"
              text="Tools for bookings, records, stock or reporting, so your team spends less time on admin."
              mock={<MockDashboard />}
              dark
              d={120}
            />
            <BuildCard
              n="03"
              title="Brand identities"
              text="Logos, colours, type and guidelines that make your business easy to recognise."
              mock={<MockBrand />}
              d={240}
            />
          </div>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <section id="process" className="relative overflow-hidden bg-charcoal text-warm">
        <div className="dot-grid absolute inset-0 text-white/[0.04]" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 md:py-36">
          <div className="grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow text-teal" data-reveal>
                ( Process )
              </p>
              <h2
                className="mt-5 text-[clamp(2.6rem,6vw,5.5rem)] font-medium leading-[0.95]"
                data-reveal
                style={delay(100)}
              >
                Calm, simple,
                <br />
                <span className="text-teal">step by step.</span>
              </h2>
            </div>
            <p className="max-w-md text-line/70 md:justify-self-end" data-reveal style={delay(200)}>
              You always know what&apos;s happening, what it costs and what comes next.
            </p>
          </div>

          <ol className="relative mt-20 grid gap-12 md:grid-cols-4 md:gap-8">
            <div
              className="absolute left-0 right-0 top-[1.4rem] hidden h-px bg-gradient-to-r from-teal via-white/20 to-white/5 md:block"
              aria-hidden="true"
            />
            {steps.map((step, i) => (
              <li key={step.title} className="relative" data-reveal style={delay(i * 140)}>
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-teal bg-charcoal font-heading text-sm text-teal">
                  0{i + 1}
                </span>
                <h3 className="mt-8 text-3xl font-medium">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-line/65">{step.text}</p>
              </li>
            ))}
          </ol>

          <div
            className="mt-24 flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:flex-row md:items-center md:justify-between md:p-10"
            data-reveal
          >
            <div>
              <p className="eyebrow text-teal">Pricing</p>
              <p className="mt-3 max-w-2xl text-xl leading-relaxed text-line/85">
                Every project is priced on its own scope. No fixed packages, no hidden extras. Just
                a clear quote before anything starts.
              </p>
            </div>
            <Link href="/#contact" className="btn btn-teal shrink-0 self-start md:self-auto">
              Ask for a quote <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section id="faq" className="bg-warm">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-28 sm:px-8 md:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="eyebrow text-teal-dark" data-reveal>
              ( FAQ )
            </p>
            <h2
              className="mt-5 text-[clamp(2.6rem,5vw,4.5rem)] font-medium leading-[0.95]"
              data-reveal
              style={delay(100)}
            >
              Good questions
            </h2>
            <p className="mt-6 max-w-xs text-slate" data-reveal style={delay(200)}>
              Something else on your mind? Just ask us directly.
            </p>
          </div>
          <div className="border-t border-charcoal/80">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className="faq group border-b border-line"
                data-reveal
                style={delay(i * 80)}
                open={i === 0}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-7 font-heading text-xl font-medium md:text-2xl">
                  {f.q}
                  <span className="faq-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-2xl font-light transition-transform duration-300 group-hover:border-teal group-hover:text-teal-dark">
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-8 leading-relaxed text-slate">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}

function BuildCard({
  n,
  title,
  text,
  mock,
  dark = false,
  d = 0,
}: {
  n: string;
  title: string;
  text: string;
  mock: React.ReactNode;
  dark?: boolean;
  d?: number;
}) {
  return (
    <article
      className={`mock-card group flex flex-col overflow-hidden rounded-3xl border ${
        dark ? "border-charcoal bg-charcoal text-warm" : "border-line bg-white"
      }`}
      data-reveal
      style={delay(d)}
    >
      <div
        className={`relative flex h-72 items-end justify-center overflow-hidden px-8 pt-10 ${
          dark ? "bg-ink" : "bg-[#efece7]"
        }`}
      >
        <div
          className={`dot-grid absolute inset-0 ${dark ? "text-white/[0.06]" : "text-charcoal/[0.07]"}`}
        />
        <div className="mock relative w-full">{mock}</div>
      </div>
      <div className="flex flex-1 flex-col p-8">
        <span className={`font-heading text-sm ${dark ? "text-teal" : "text-teal-dark"}`}>{n}</span>
        <h3 className="mt-3 text-2xl font-medium">{title}</h3>
        <p className={`mt-3 leading-relaxed ${dark ? "text-line/70" : "text-slate"}`}>{text}</p>
      </div>
    </article>
  );
}

/* Small illustrative UI mock-ups, drawn with plain elements. */

function MockWebsite() {
  return (
    <div className="mx-auto w-full max-w-[19rem] rounded-t-xl border border-b-0 border-line bg-white shadow-[0_-10px_40px_-10px_rgb(0_0_0/0.15)]">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-teal" />
        <span className="ml-3 h-2 flex-1 rounded-full bg-[#efece7]" />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between">
          <span className="h-2.5 w-12 rounded-full bg-charcoal" />
          <span className="flex gap-1.5">
            <span className="h-1.5 w-6 rounded-full bg-line" />
            <span className="h-1.5 w-6 rounded-full bg-line" />
            <span className="h-1.5 w-6 rounded-full bg-line" />
          </span>
        </div>
        <div className="space-y-2 pt-4">
          <span className="block h-4 w-[85%] rounded bg-charcoal" />
          <span className="block h-4 w-[60%] rounded bg-charcoal" />
        </div>
        <span className="block h-2 w-[70%] rounded-full bg-line" />
        <span className="inline-block h-6 w-20 rounded-full bg-teal" />
        <div className="grid grid-cols-3 gap-2 pt-2">
          <span className="h-14 rounded-lg bg-[#efece7]" />
          <span className="h-14 rounded-lg bg-[#efece7]" />
          <span className="h-14 rounded-lg bg-[#efece7]" />
        </div>
      </div>
    </div>
  );
}

function MockDashboard() {
  const bars = [40, 65, 50, 80, 58, 92, 70];
  return (
    <div className="mx-auto flex w-full max-w-[19rem] rounded-t-xl border border-b-0 border-white/10 bg-charcoal shadow-[0_-10px_40px_-10px_rgb(0_0_0/0.6)]">
      <div className="w-12 space-y-3 border-r border-white/10 p-3">
        <span className="block h-5 w-5 rounded-md bg-teal" />
        <span className="block h-1.5 w-5 rounded-full bg-white/20" />
        <span className="block h-1.5 w-5 rounded-full bg-white/20" />
        <span className="block h-1.5 w-5 rounded-full bg-white/20" />
      </div>
      <div className="flex-1 space-y-3 p-4">
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((k) => (
            <div key={k} className="rounded-lg border border-white/10 p-2">
              <span className="block h-1.5 w-8 rounded-full bg-white/20" />
              <span
                className={`mt-2 block h-3 w-10 rounded ${k === 0 ? "bg-teal" : "bg-white/60"}`}
              />
            </div>
          ))}
        </div>
        <div className="flex h-28 items-end gap-2 rounded-lg border border-white/10 p-3">
          {bars.map((h, k) => (
            <span
              key={k}
              className={`flex-1 rounded-t ${k === 5 ? "bg-teal" : "bg-white/15"}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="space-y-1.5">
          <span className="block h-1.5 w-full rounded-full bg-white/10" />
          <span className="block h-1.5 w-[80%] rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  );
}

function MockBrand() {
  return (
    <div className="mx-auto grid w-full max-w-[19rem] grid-cols-2 gap-3 pb-8">
      <div className="col-span-2 flex h-24 items-center justify-center rounded-xl bg-charcoal shadow-lg">
        <span className="font-heading text-2xl font-medium tracking-[0.12em] text-warm">
          Aa<span className="text-teal">.</span>
        </span>
      </div>
      <div className="flex h-20 items-end rounded-xl bg-teal p-3 shadow-lg">
        <span className="h-1.5 w-10 rounded-full bg-charcoal/40" />
      </div>
      <div className="flex h-20 flex-col justify-between rounded-xl border border-line bg-white p-3 shadow-lg">
        <span className="h-2 w-8 rounded-full bg-charcoal" />
        <span className="flex gap-1">
          <span className="h-4 w-4 rounded-full bg-charcoal" />
          <span className="h-4 w-4 rounded-full bg-slate" />
          <span className="h-4 w-4 rounded-full bg-line" />
          <span className="h-4 w-4 rounded-full bg-teal" />
        </span>
      </div>
    </div>
  );
}
