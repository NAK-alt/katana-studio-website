import type { Metadata } from "next";
import Link from "next/link";
import { Contact } from "@/components/Contact";
import { IconArrow, IconExternal } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Synergist Lubricants case study",
  description:
    "How Katana Studio designed and built a bilingual English and Khmer website for Synergist Lubricants.",
};

const facts = [
  { label: "Client", value: "Synergist Lubricants" },
  { label: "Type", value: "Informational website" },
  { label: "Languages", value: "English and Khmer" },
  { label: "Our role", value: "Design, development and deployment" },
];

const built = [
  "A home page that introduces the brand and its product ranges by category",
  "A product catalogue with specifications, sizes and the applications each product suits",
  "Application, technology, about, FAQ and news sections",
  "Contact, become-a-dealer and where-to-buy pages that help visitors reach the team",
  "A language switch between English and Khmer, with Khmer typography set properly",
  "Responsive images and calm scroll motion that respects reduced-motion settings",
];

export default function SynergistCaseStudy() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 md:pt-20">
          <Link href="/#work" className="text-sm text-slate hover:text-charcoal">
            ← All work
          </Link>
          <p className="eyebrow mt-10 text-teal-dark">Case study 01</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-medium leading-[1.05] sm:text-6xl">
            Synergist Lubricants
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
            A bilingual website that helps customers and dealers in Cambodia understand the product
            range and get in touch.
          </p>
          <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="bg-warm p-5">
                <dt className="eyebrow text-slate">{f.label}</dt>
                <dd className="mt-2 font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-charcoal">
        <div className="mx-auto flex max-w-6xl justify-center px-5 py-14 sm:px-8">
          <video
            className="aspect-[4/5] w-full max-w-md rounded-2xl"
            src="/work/synergist-showcase.mp4"
            poster="/work/synergist-poster.jpg"
            controls
            muted
            playsInline
            preload="metadata"
            aria-label="Walkthrough of the Synergist Lubricants website on phone and desktop"
          />
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 md:grid-cols-[1fr_1.6fr]">
          <h2 className="text-3xl font-medium">The brief</h2>
          <div className="space-y-4 leading-relaxed text-slate">
            <p>
              Synergist needed a clear place online to present its lubricants to customers and
              potential dealers in Cambodia, in both English and Khmer.
            </p>
            <p>
              The site is informational by design. There is no cart, account or checkout. Its job is
              to explain the products well and make it easy to start a conversation with the team.
            </p>
          </div>

          <h2 className="text-3xl font-medium">What we built</h2>
          <ul className="space-y-3">
            {built.map((item) => (
              <li key={item} className="flex gap-4 leading-relaxed text-slate">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-medium">Approach</h2>
          <div className="space-y-4 leading-relaxed text-slate">
            <p>
              We worked from the logo and product photography the client supplied, and kept product
              information to verified specifications only. Nothing was invented to fill space.
            </p>
            <p>
              The design uses a dark navy and gold palette to suit the brand. Khmer and English are
              treated as equals, so both languages read naturally on phones as well as desktops.
            </p>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3 px-5 pb-24 sm:px-8">
          <a
            href="https://synergist-lubricants.vercel.app/en/"
            className="btn btn-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the live site <IconExternal />
          </a>
          <Link href="/#contact" className="btn btn-outline">
            Start a similar project <IconArrow />
          </Link>
        </div>
      </section>

      <Contact />
    </>
  );
}
