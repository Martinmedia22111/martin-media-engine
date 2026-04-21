#!/usr/bin/env node
/**
 * Simple prerender script.
 * Runs after `vite build`, launches Puppeteer, serves dist/, visits all routes,
 * and saves rendered HTML for each route.
 *
 * This makes the SPA fully indexable by Google, Yandex, and AI search engines.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname } from "node:path";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, "..", "dist");
const PORT = 5555;

// All routes to prerender
const ROUTES = [
  "/",
  "/uslugi",
  "/uslugi/videoproduction",
  "/uslugi/reklamnye-roliki",
  "/uslugi/short-form-video",
  "/uslugi/smm-content-strategy",
  "/uslugi/3d-motion-design",
  "/uslugi/food-video",
  "/uslugi/influence-marketing",
  "/uslugi/ai-resheniya",
  "/uslugi/korporativnye-filmy",
  "/uslugi/pr-strategii",
  "/uslugi/hr-brand",
  "/uslugi/aerosyomka-panoramy",
  "/uslugi/reklamnyye-igry",
  "/kejsy",
  "/blog",
  "/o-kompanii",
  "/brief",
  "/kontakty",
  "/martin-lab",
  "/faq",
];

// Dynamically discover blog and case slugs
try {
  const blogFile = readFileSync(join(__dirname, "..", "src/data/blogArticles.ts"), "utf-8");
  const blogSlugs = [...blogFile.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]).filter((s) => s !== "string");
  for (const slug of blogSlugs) {
    if (!ROUTES.includes(`/blog/${slug}`)) ROUTES.push(`/blog/${slug}`);
  }
} catch {}

try {
  const casesFile = readFileSync(join(__dirname, "..", "src/data/cases.ts"), "utf-8");
  const caseSlugs = [...casesFile.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]).filter((s) => s !== "string");
  for (const slug of caseSlugs) {
    if (!ROUTES.includes(`/kejsy/${slug}`)) ROUTES.push(`/kejsy/${slug}`);
  }
} catch {}

const MIME_TYPES = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

// Start local static server that falls back to index.html for SPA routes
function startServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      let urlPath = decodeURIComponent(new URL(req.url, `http://localhost`).pathname);
      let filePath = join(DIST_DIR, urlPath);

      try {
        const stat = await readFile(filePath).catch(() => null);
        if (!stat || urlPath.endsWith("/")) {
          // Try as directory
          filePath = join(DIST_DIR, urlPath, "index.html");
          const dirContent = await readFile(filePath).catch(() => null);
          if (dirContent) {
            res.setHeader("Content-Type", "text/html");
            res.end(dirContent);
            return;
          }
          // Fall back to SPA index.html
          filePath = join(DIST_DIR, "index.html");
          const indexContent = await readFile(filePath);
          res.setHeader("Content-Type", "text/html");
          res.end(indexContent);
          return;
        }

        const ext = extname(filePath);
        const mimeType = MIME_TYPES[ext] || "application/octet-stream";
        res.setHeader("Content-Type", mimeType);
        res.end(stat);
      } catch {
        res.statusCode = 404;
        res.end("Not found");
      }
    });
    server.listen(PORT, () => resolve(server));
  });
}

async function prerender() {
  if (!existsSync(DIST_DIR) || !existsSync(join(DIST_DIR, "index.html"))) {
    console.error("❌ dist/ not found. Run `npm run build` first.");
    process.exit(1);
  }

  console.log(`🚀 Starting prerender server on http://localhost:${PORT}`);
  const server = await startServer();

  console.log("🌐 Launching Puppeteer...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  let success = 0;
  let failed = 0;

  for (const route of ROUTES) {
    try {
      const page = await browser.newPage();
      await page.setUserAgent("Mozilla/5.0 (compatible; Prerender) Chrome/120.0.0.0");

      // Block external analytics scripts (they slow things down and aren't needed in snapshot)
      await page.setRequestInterception(true);
      page.on("request", (req) => {
        const url = req.url();
        if (
          url.includes("mc.yandex") ||
          url.includes("googletagmanager") ||
          url.includes("google-analytics") ||
          url.includes("web3forms")
        ) {
          req.abort();
        } else {
          req.continue();
        }
      });

      page.on("console", (msg) => {
        if (msg.type() === "error") {
          console.warn(`   ⚠  Console error on ${route}: ${msg.text().slice(0, 120)}`);
        }
      });

      const url = `http://localhost:${PORT}${route}`;
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

      // Wait for React to mount and render
      await new Promise((r) => setTimeout(r, 1500));

      // Extract fully rendered HTML
      const html = await page.content();

      // Write to dist/<route>/index.html
      let outDir = route === "/" ? DIST_DIR : join(DIST_DIR, route);
      const outFile = join(outDir, "index.html");
      if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
      writeFileSync(outFile, html, "utf-8");

      await page.close();
      success++;
      console.log(`   ✓ ${route}`);
    } catch (err) {
      failed++;
      console.warn(`   ✗ ${route}: ${err.message}`);
    }
  }

  await browser.close();
  server.close();

  console.log(`\n✅ Prerendered ${success} routes. Failed: ${failed}.`);
  console.log(`📊 Total routes: ${ROUTES.length}`);
}

prerender().catch((err) => {
  console.error("⚠️  Prerender failed:", err.message);
  console.error("Build will continue without prerendering.");
  // Don't exit with error — let the build succeed with CSR-only HTML.
  // Redirects and other SEO improvements still apply.
  process.exit(0);
});
