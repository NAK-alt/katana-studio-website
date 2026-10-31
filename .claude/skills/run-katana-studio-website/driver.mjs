#!/usr/bin/env node
// Headless-Chromium smoke driver for the Katana Studio site.
//
//   node .claude/skills/run-katana-studio-website/driver.mjs [baseUrl] [outDir]
//
// Defaults: baseUrl=http://localhost:3000, outDir=/tmp/katana-shots.
// Takes desktop + mobile full-page screenshots, clicks a nav link, opens the
// mobile menu, checks the contact links and the 404 page, and fails (exit 1)
// on any console error or failed check.
//
// Extra env:
//   PAGE=/some/path    screenshot just this path (desktop + mobile) and exit
//   MOTION=1           keep animations on (default: reduced motion, see SKILL.md)
import { createRequire } from "node:module";
import { mkdirSync } from "node:fs";

// playwright is installed globally (NODE_PATH), which ESM `import` ignores.
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const out = process.argv[3] ?? "/tmp/katana-shots";
mkdirSync(out, { recursive: true });

const failures = [];
const check = (ok, msg) => {
  console.log(`${ok ? "ok  " : "FAIL"} ${msg}`);
  if (!ok) failures.push(msg);
};

const browser = await chromium.launch();
const ctxOpts = { reducedMotion: process.env.MOTION ? "no-preference" : "reduce" };

async function open(viewport, path, name) {
  const ctx = await browser.newContext({ ...ctxOpts, viewport, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(e.message));
  const res = await page.goto(base + path, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const file = `${out}/${name}.png`;
  await page.screenshot({ path: file, fullPage: true });
  console.log(`shot ${file}`);
  return { ctx, page, res, errors };
}

const desktop = { width: 1440, height: 900 };
const mobile = { width: 390, height: 844 };

if (process.env.PAGE) {
  for (const [vp, tag] of [[desktop, "desktop"], [mobile, "mobile"]]) {
    const { ctx, res, errors } = await open(vp, process.env.PAGE, `page-${tag}`);
    check(res.ok(), `${process.env.PAGE} ${tag} -> HTTP ${res.status()}`);
    check(errors.length === 0, `no console errors (${errors.join(" | ")})`);
    await ctx.close();
  }
} else {
  // Desktop home
  const d = await open(desktop, "/", "home-desktop");
  check(d.res.ok(), `/ -> HTTP ${d.res.status()}`);
  check(await d.page.locator("h1").isVisible(), "hero h1 visible");
  for (const id of ["services", "build", "process", "faq", "contact"]) {
    check((await d.page.locator(`#${id}`).count()) === 1, `section #${id} present`);
  }
  const tg = await d.page.locator('#contact a[href^="https://t.me/"]').getAttribute("href");
  check(tg === "https://t.me/Nak_Studio", `Telegram button -> ${tg}`);
  const fb = await d.page.locator('#contact a[href*="facebook.com"]').count();
  check(fb === 1, "Facebook button present");

  await d.page.getByRole("navigation", { name: "Main" }).getByRole("link", { name: "Process" }).click();
  await d.page.waitForFunction(() => location.hash === "#process");
  // html has scroll-behavior: smooth, so with MOTION=1 the scroll takes a moment.
  await d.page
    .waitForFunction(() => Math.abs(document.querySelector("#process").getBoundingClientRect().top) < 120, null, { timeout: 5000 })
    .catch(() => {});
  const top = await d.page.locator("#process").evaluate((el) => el.getBoundingClientRect().top);
  check(Math.abs(top) < 120, `nav "Process" scrolled #process to top (top=${Math.round(top)})`);
  await d.page.screenshot({ path: `${out}/nav-process.png` });
  console.log(`shot ${out}/nav-process.png`);
  check(d.errors.length === 0, `desktop: no console errors (${d.errors.join(" | ")})`);
  await d.ctx.close();

  // Mobile home + hamburger menu
  const m = await open(mobile, "/", "home-mobile");
  await m.page.evaluate(() => window.scrollTo(0, 0));
  await m.page.locator("summary[aria-label='Open menu']").click();
  const mobileNav = m.page.getByRole("navigation", { name: "Mobile" });
  check(await mobileNav.isVisible(), "mobile menu opens");
  await m.page.screenshot({ path: `${out}/menu-mobile.png` });
  console.log(`shot ${out}/menu-mobile.png`);
  check(m.errors.length === 0, `mobile: no console errors (${m.errors.join(" | ")})`);
  await m.ctx.close();

  // 404
  const n = await open(desktop, "/does-not-exist", "404");
  check(n.res.status() === 404, `/does-not-exist -> HTTP ${n.res.status()}`);
  check(await n.page.getByText("This page doesn't exist.").isVisible(), "404 copy visible");
  await n.ctx.close();
}

await browser.close();
console.log(failures.length ? `\n${failures.length} check(s) failed` : "\nall checks passed");
process.exit(failures.length ? 1 : 0);
