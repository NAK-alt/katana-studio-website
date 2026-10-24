import Link from "next/link";
import { Contact } from "@/components/Contact";
import {
  IconArrow,
  IconBrowser,
  IconDatabase,
  IconExternal,
  IconLayout,
  IconPen,
  IconRocket,
  IconSystem,
} from "@/components/Icons";
import { site } from "@/lib/site";

const services = [
  {
    icon: IconBrowser,
    title: "Websites & web apps",
    text: "Clear, fast websites and web applications, from a single landing page to a full bilingual site.",
  },
  {
    icon: IconSystem,
    title: "Business systems",
    text: "Internal tools shaped around how your team already works, such as records, bookings, stock and simple dashboards.",
  },
  {
    icon: IconDatabase,
    title: "Backend & databases",
    text: "Data models, APIs and integrations that keep things reliable behind the scenes.",
  },
  {
    icon: IconLayout,
    title: "UI/UX design",
    text: "Interfaces planned around real users, with simple flows and a consistent look across every screen.",
  },
  {
    icon: IconPen,
    title: "Branding & creative",
    text: "Logos, brand guidelines and visual assets. Photo and video editing is a newer part of our work that we are still growing.",
  },
  {
    icon: IconRocket,
    title: "Deployment & support",
    text: "Hosting, domains, launch and ongoing care once your project is live.",
  },
];

const steps = [
  {
    title: "Talk",
    text: "We listen to the idea, who it is for and what it needs to do.",
  },
  {
    title: "Plan",
    text: "We agree on scope, timeline and a project-based price before any work starts.",
  },
  {
    title: "Build",
    text: "Design and development in small steps, with regular check-ins so nothing surprises you.",
  },
  {
    title: "Launch & support",
    text: "We put it live, hand it over clearly and stay available to keep it running well.",
  },
];

const values = [
  { title: "Clear", text: "Plain language, honest scope and no surprises on price." },
  { title: "Thoughtful", text: "Every screen and feature should have a reason to be there." },
  { title: "Built to last", text: "Solid foundations that are easy to maintain and grow." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 md:grid-cols-[1.2fr_1fr] md:pb-28 md:pt-24">
          <div>
            <p className="eyebrow reveal text-teal-dark">{site.tagline}</p>
            <h1 className="reveal reveal-2 mt-5 text-5xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl">
              Good ideas deserve to be built <span className="text-teal">well.</span>
            </h1>
            <p className="reveal reveal-3 mt-7 max-w-lg text-lg leading-relaxed text-slate">
              {site.name} is a digital and creative studio in Cambodia. We design and develop
              thoughtful digital solutions that look good, work well, and serve a purpose.
            </p>
            <div className="reveal reveal-3 mt-9 flex flex-wrap gap-3">
              <Link href="/#contact" className="btn btn-dark">
                Start a project <IconArrow />
              </Link>
              <Link href="/#work" className="btn btn-outline">
                See our work
              </Link>
            </div>
          </div>
          <div className="reveal reveal-2 relative">
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-3xl bg-charcoal">
              <div className="dot-grid absolute inset-0 text-white/[0.07]" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/mark-light.svg"
                alt="Katana Studio monogram"
                className="absolute left-1/2 top-1/2 w-[62%] -translate-x-1/2 -translate-y-1/2"
              />
              <p className="eyebrow absolute bottom-6 left-6 text-line/50">
                Design / Development / Systems / Branding
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-line/70">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-end">
            <div>
              <p className="eyebrow text-teal-dark">Services</p>
              <h2 className="mt-4 text-4xl font-medium leading-tight">What we build</h2>
            </div>
            <p className="max-w-xl text-slate md:justify-self-end">
              We take on projects of different sizes for local and international clients. If your
              idea sits between two of these, that is normal. Most good projects do.
            </p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="group bg-warm p-8 transition-colors hover:bg-white">
                <Icon className="h-7 w-7 text-teal-dark" />
                <h3 className="mt-6 text-xl font-medium">{title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-line/70 bg-white/60">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <p className="eyebrow text-teal-dark">Selected work</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight">Case studies</h2>
          <article className="mt-14 grid items-center gap-10 overflow-hidden rounded-3xl bg-charcoal text-warm md:grid-cols-2">
            <video
              className="aspect-[4/5] w-full object-cover"
              src="/work/synergist-showcase.mp4"
              poster="/work/synergist-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Walkthrough of the Synergist Lubricants website on phone and desktop"
            />
            <div className="px-7 pb-10 md:px-4 md:py-10 md:pr-12">
              <p className="eyebrow text-teal">Case study 01</p>
              <h3 className="mt-4 text-3xl font-medium sm:text-4xl">Synergist Lubricants</h3>
              <p className="mt-5 leading-relaxed text-line/80">
                A bilingual English and Khmer website for a lubricants brand in Cambodia. Visitors
                browse product ranges, read specifications and get in touch. It is built to inform
                and start conversations, so there is no cart or checkout.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2 text-xs">
                {["Web design", "Development", "English / Khmer", "Deployment"].map((t) => (
                  <li key={t} className="rounded-full border border-white/15 px-3 py-1 text-line/80">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/work/synergist-lubricants" className="btn btn-primary">
                  Read the case study <IconArrow />
                </Link>
                <a
                  href="https://synergist-lubricants.vercel.app/en/"
                  className="btn btn-outline text-warm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit site <IconExternal />
                </a>
              </div>
            </div>
          </article>
          <p className="mt-6 text-sm text-slate">More case studies will be added as projects launch.</p>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-t border-line/70">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <p className="eyebrow text-teal-dark">How we work</p>
          <h2 className="mt-4 max-w-xl text-4xl font-medium leading-tight">
            A calm, simple process from idea to launch
          </h2>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t border-charcoal pt-6">
                <span className="font-heading text-sm text-teal-dark">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-medium">{step.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-16 rounded-3xl border border-line p-8 md:flex md:items-center md:justify-between md:gap-10">
            <div>
              <h3 className="text-xl font-medium">Pricing</h3>
              <p className="mt-2 max-w-2xl text-slate">
                Every project is priced on its own scope. We don&apos;t sell fixed packages. Tell us
                what you need and we&apos;ll send a clear quote before anything starts.
              </p>
            </div>
            <Link href="/#contact" className="btn btn-dark mt-6 shrink-0 md:mt-0">
              Ask for a quote <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-line/70 bg-white/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-2">
          <div>
            <p className="eyebrow text-teal-dark">About</p>
            <h2 className="mt-4 text-4xl font-medium leading-tight">Built from ideas.</h2>
            <p className="mt-6 leading-relaxed text-slate">
              {site.name} is a flexible digital and creative studio based in Cambodia. We work with
              local and international clients, in English and Khmer, on websites, business systems
              and brands.
            </p>
            <p className="mt-4 leading-relaxed text-slate">
              We start every project by understanding the idea behind it, then build something that
              is clear to use, good to look at and practical to run.
            </p>
          </div>
          <ul className="grid gap-4 self-end">
            {values.map((v) => (
              <li key={v.title} className="flex gap-5 rounded-2xl border border-line bg-warm p-6">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-teal" />
                <div>
                  <h3 className="text-lg font-medium">{v.title}</h3>
                  <p className="mt-1 text-[0.95rem] text-slate">{v.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact />
    </>
  );
}
