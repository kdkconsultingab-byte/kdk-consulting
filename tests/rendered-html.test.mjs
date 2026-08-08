import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the KDK Consulting company site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.doesNotMatch(html, developmentPreviewMeta);
  assert.match(html, /<title>KDK Consulting AB<\/title>/i);
  assert.match(html, /KDK Consulting AB/);
  assert.match(html, /info@kdkconsulting\.se/);
  assert.match(html, /Gothenburg, Sweden/);
  assert.equal(html.includes(["Cook", "Smart"].join("")), false);
  assert.match(html, /mobile applications/);
  assert.match(html, /AI-assisted tools/);
  assert.match(html, /Technology consulting and product development/);
  assert.match(html, /motion-enhanced/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("keeps public company content in source files", async () => {
  const [page, layout, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /export const metadata:\s*Metadata/);
  assert.match(page, /Organization information/);
  assert.match(page, /mailto:info@kdkconsulting\.se/);
  assert.match(layout, /title:\s*"KDK Consulting AB"/);
  assert.doesNotMatch(layout, /codex-preview|_sites-preview|themeColor|\bViewport\b/);
  assert.doesNotMatch(css, /letter-spacing:\s*-/);
  assert.doesNotMatch(css, /\.motion-ready\s+\.reveal[^,{]*\{\s*opacity:\s*0/);
  assert.doesNotMatch(css, /\.motion-enhanced\s+\.reveal[^,{]*,\s*\.motion-enhanced\s+\.reveal-item\s*\{\s*opacity:\s*0/);
  assert.match(css, /@keyframes reveal-in/);
});
