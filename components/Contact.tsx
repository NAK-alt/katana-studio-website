import { site, telegramUrl } from "@/lib/site";
import { IconFacebook, IconTelegram } from "./Icons";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal text-warm">
      <div className="dot-grid pointer-events-none absolute inset-0 text-white/[0.06]" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <p className="eyebrow text-teal">Contact</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-medium leading-tight sm:text-5xl">
          Have an idea? Let&apos;s build it well.
        </h2>
        <p className="mt-6 max-w-xl text-line/80">
          Tell us what you have in mind, even if it is still rough. We&apos;ll ask a few questions,
          suggest a sensible scope and send a clear, project-based quote.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {telegramUrl ? (
            <a href={telegramUrl} className="btn btn-primary">
              <IconTelegram className="h-5 w-5" />
              Message us on Telegram
            </a>
          ) : (
            <span
              className="btn cursor-default border border-white/20 text-line/60"
              title="Telegram link coming soon"
            >
              <IconTelegram className="h-5 w-5" />
              Telegram (coming soon)
            </span>
          )}
          <a
            href={site.contact.facebook}
            className={telegramUrl ? "btn btn-outline text-warm" : "btn btn-primary"}
          >
            <IconFacebook className="h-5 w-5" />
            Message us on Facebook
          </a>
        </div>
        <p className="mt-6 text-sm text-line/50">We work in English and Khmer.</p>
      </div>
    </section>
  );
}
