import { site, telegramUrl } from "@/lib/site";
import { IconArrow, IconFacebook, IconTelegram } from "./Icons";
import { Magnetic } from "./Motion";

export function Contact() {
  return (
    <section id="contact" className="grain relative isolate overflow-hidden bg-teal text-charcoal">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/mark-dark.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-10 w-[34rem] max-w-none opacity-[0.09] md:-right-10"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
        <p className="eyebrow" data-reveal>
          Start a project
        </p>
        <h2
          className="mt-6 text-[clamp(3rem,9vw,8.5rem)] font-medium leading-[0.92]"
          data-reveal
          style={{ "--d": "100ms" } as React.CSSProperties}
        >
          Have an idea?
          <br />
          <span className="text-outline">Let&apos;s build it.</span>
        </h2>
        <div
          className="mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end"
          data-reveal
          style={{ "--d": "200ms" } as React.CSSProperties}
        >
          <p className="max-w-lg text-lg leading-relaxed text-charcoal/80">
            Tell us what you have in mind, even if it&apos;s still rough. We&apos;ll ask a few
            questions, suggest a sensible scope and send a clear, project-based quote. English or
            Khmer, whichever is easier for you.
          </p>
          <div className="flex flex-wrap gap-3">
            {telegramUrl && (
              <Magnetic>
                <a href={telegramUrl} className="btn btn-dark">
                  <IconTelegram className="h-5 w-5" />
                  Message on Telegram
                </a>
              </Magnetic>
            )}
            <a
              href={site.contact.facebook}
              className={telegramUrl ? "btn btn-ghost" : "btn btn-dark"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconFacebook className="h-5 w-5" />
              Message on Facebook
              <IconArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
