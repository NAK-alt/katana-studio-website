# Katana Studio website

Business website for Katana Studio. Built From Ideas.

Next.js (App Router) + Tailwind CSS. Node.js 22 or newer.

- `npm install`, then `npm run dev` and open http://localhost:3000
- `npm run build` for a production build

## Editing content
- `lib/site.ts`: name, tagline, contact links. Set `contact.telegram` to the Telegram username (without @) to turn on the Telegram buttons.
- `app/page.tsx`: home page sections (hero, services, work, process, about).
- `app/work/synergist-lubricants/page.tsx`: case study 01.
- `public/brand`: logo marks from the Katana Studio brand pack. Do not redraw them.
- Fonts: Space Grotesk (headings) and Manrope (body), both under the SIL Open Font License, in `app/fonts`.
