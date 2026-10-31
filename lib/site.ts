export const site = {
  name: "Katana Studio",
  tagline: "Built From Ideas.",
  statement: "Good ideas deserve to be built well.",
  description:
    "Katana Studio is a digital and creative studio in Cambodia. We design and develop thoughtful digital solutions that look good, work well, and serve a purpose.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://katana-studio-website.vercel.app",
  contact: {
    // Telegram username without the @. Leave empty until the handle is confirmed.
    telegram: "",
    facebook: "https://www.facebook.com/kstudio101/",
  },
};

export const telegramUrl = site.contact.telegram
  ? `https://t.me/${site.contact.telegram}`
  : null;

export const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#build", label: "What we build" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
];
