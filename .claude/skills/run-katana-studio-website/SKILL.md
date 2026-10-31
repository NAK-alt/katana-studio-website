---
name: run-katana-studio-website
description: Build, run, and drive the Katana Studio website (Next.js). Use when asked to start the site, run the dev server, build it, typecheck it, take screenshots of a page (desktop or mobile), or check that a change works in the real browser.
---

The Katana Studio marketing site is a static Next.js 16 (App Router, Turbopack) + Tailwind 4 app with one real page (`/`) and a 404. An agent runs it by starting `next dev` (or `next start`) in the background, then driving headless Chromium with `.claude/skills/run-katana-studio-website/driver.mjs`, which screenshots desktop and mobile and checks the nav, mobile menu, contact links and 404.

All paths are relative to the repo root.

## Prerequisites

Node 22+ (the container has 22.23). Playwright and Chromium are preinstalled globally in the cloud container; nothing to `apt-get`.

## Setup

```bash
npm ci
```

## Build / typecheck

```bash
npm run typecheck
npm run build      # ~8s, prerenders /, /_not-found and the icon/OG images
```

There is no test suite and no lint script. Typecheck + build + the driver are the checks.

## Run (agent path)

Start the dev server in the background and wait for the port:

```bash
(npm run dev > /tmp/katana-dev.log 2>&1 &)
timeout 60 bash -c 'until curl -sf http://localhost:3000 >/dev/null; do sleep 1; done'
```

Run the full smoke flow (takes ~8s):

```bash
node .claude/skills/run-katana-studio-website/driver.mjs
```

It prints `ok`/`FAIL` per check and exits 1 on any failure or console error. Screenshots land in `/tmp/katana-shots/`:

| file | what |
|---|---|
| `home-desktop.png` | full page at 1440 wide |
| `home-mobile.png` | full page at 390 wide |
| `nav-process.png` | viewport after clicking "Process" in the header nav |
| `menu-mobile.png` | mobile hamburger menu open |
| `404.png` | `/does-not-exist` |

Options:

```bash
# Different base URL / output dir (positional)
node .claude/skills/run-katana-studio-website/driver.mjs http://localhost:3000 /tmp/katana-prod
# Just screenshot one path, desktop + mobile -> page-desktop.png / page-mobile.png
PAGE=/ node .claude/skills/run-katana-studio-website/driver.mjs
# Keep scroll animations on (see Gotchas: below-the-fold sections come out faded)
MOTION=1 node .claude/skills/run-katana-studio-website/driver.mjs http://localhost:3000 /tmp/katana-motion
```

Full-page shots are ~7500px tall. To actually look at one, shrink or crop it first:

```bash
python3 -c "from PIL import Image; im=Image.open('/tmp/katana-shots/home-desktop.png'); im.resize((im.width//4, im.height//4)).save('/tmp/katana-shots/home-desktop-small.png')"
```

For a new check, copy a block in `driver.mjs` (it is plain Playwright: `open(viewport, path, name)` returns `{ page, res, errors }`).

Stop the server:

```bash
fuser -k 3000/tcp
```

### Production build instead of dev

Use this to screenshot without the dev-only "N" badge in the bottom-left corner. Stop the dev server first.

```bash
fuser -k 3000/tcp
npm run build > /tmp/katana-build.log 2>&1
(npm start > /tmp/katana-start.log 2>&1 &)
timeout 30 bash -c 'until curl -sf http://localhost:3000 >/dev/null; do sleep 1; done'
node .claude/skills/run-katana-studio-website/driver.mjs http://localhost:3000 /tmp/katana-prod
fuser -k 3000/tcp
```

## Run (human path)

`npm run dev`, open http://localhost:3000, Ctrl-C to stop. Useless headless.

## Where things are

- `lib/site.ts`: name, tagline, Telegram/Facebook contact, nav links. The driver asserts the Telegram button points at `https://t.me/Nak_Studio`; update that line in `driver.mjs` if the handle changes.
- `app/page.tsx`: all home sections (`#services`, `#build`, `#process`, `#faq`); `components/Contact.tsx` is `#contact`.
- `components/Motion.tsx`: scroll reveal, scroll-lit words, Cambodia clock.

## Gotchas

- **Scroll-reveal hides content in full-page screenshots.** `RevealOnScroll` adds `.js` to `<html>`, and every `[data-reveal]` block stays at opacity 0 until an IntersectionObserver sees it. A `fullPage` screenshot never scrolls, so everything below the hero comes out washed out. The driver defaults to `reducedMotion: "reduce"`, which the CSS uses to show everything and kill animations. Only set `MOTION=1` when you are checking the animations themselves.
- **Smooth scrolling.** `html { scroll-behavior: smooth }` means after clicking a nav link the target is not in place yet. With reduced motion it jumps instantly; with `MOTION=1` the driver waits for it.
- **`lsof` finds nothing in this container.** The usual `lsof -ti:3000 | xargs kill` silently does nothing, the old server keeps running, and `npm start` then dies with `EADDRINUSE` while the driver quietly tests the old dev server. Use `fuser -k 3000/tcp` (killing `next-server` also takes its `npm`/`next dev` parents down).
- **`next dev` rewrites `AGENTS.md`** on start (it changes `# This is NOT...` to `## This is NOT...`). Per `AGENTS.md` itself, commit that change with your work rather than reverting it, or it comes back every run.
- **Dev badge.** Dev screenshots have the Next.js "N" indicator in the bottom-left; use the production path for clean screenshots.
- **Clock text changes.** The hero shows live Phnom Penh time (`StudioClock`), so screenshots of the hero are never pixel-identical between runs.
- **Playwright import.** It is installed globally (`NODE_PATH`), which ESM `import` ignores, so the driver loads it through `createRequire`. Don't add Playwright to `package.json` for this.
