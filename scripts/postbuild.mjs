/**
 * Postbuild script — builds Orama search indexes from built HTML.
 *
 * Reads rendered HTML from dist/client/, extracts text from <main>,
 * creates two indexes (resources, blog), serializes to content-hashed
 * JSON files with a manifest for client discovery.
 *
 * Run: node scripts/postbuild.mjs (called automatically via npm run build)
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { create, insertMultiple, count } from "@orama/orama";
import { persist } from "@orama/plugin-data-persistence";
import { compile } from "html-to-text";

const DIST_DIR = path.join(process.cwd(), "dist/client");
const OUTPUT_DIR = DIST_DIR; // indexes go into dist/client for static serving

const mainConverter = compile({
  baseElements: { selectors: ["main"] },
  wordwrap: false,
  selectors: [
    { selector: "a", options: { ignoreHref: true } },
    { selector: "img", format: "skip" },
    { selector: "script", format: "skip" },
    { selector: "style", format: "skip" },
  ],
});

const titleConverter = compile({
  baseElements: { selectors: ["title"] },
  wordwrap: false,
});

/**
 * Walk dist/client for HTML files matching a path pattern.
 */
function collectPages(pathMatcher) {
  const records = [];
  walkDir(DIST_DIR, "", pathMatcher, records);
  return records;
}

function walkDir(baseDir, relDir, pathMatcher, records) {
  const fullDir = path.join(baseDir, relDir);
  if (!fs.existsSync(fullDir)) return;

  for (const entry of fs.readdirSync(fullDir, { withFileTypes: true })) {
    const relPath = path.join(relDir, entry.name);
    if (entry.isDirectory()) {
      walkDir(baseDir, relPath, pathMatcher, records);
    } else if (entry.name === "index.html") {
      // Convert file path to URL: /resources/getting-started/index.html → /resources/getting-started/
      const urlPath = "/" + relDir.replace(/\\/g, "/") + "/";
      if (!pathMatcher.test(urlPath)) continue;

      try {
        const html = fs.readFileSync(path.join(baseDir, relPath), "utf-8");
        const title = titleConverter(html).trim() || urlPath;
        const content = mainConverter(html).trim();
        if (!content) continue;

        records.push({
          url: urlPath,
          title: title.replace(/ — Jason Holt Digital$/, ""),
          content: content.slice(0, 5000), // cap for index size
          type: relDir.startsWith("blog") ? "blog" : "resource",
        });
      } catch (err) {
        console.warn(`Skipping ${relPath}:`, err.message);
      }
    }
  }
}

async function buildIndex(name, records) {
  if (records.length === 0) {
    console.warn(`  ${name}: no records found, skipping.`);
    return;
  }

  const db = await create({
    schema: {
      url: "string",
      title: "string",
      content: "string",
      type: "enum",
    },
  });

  await insertMultiple(db, records, 500);
  const docCount = await count(db);

  const serialized = await persist(db, "json");
  const jsonStr = JSON.stringify(serialized);

  // Content-hash filename for immutable caching
  const hash = crypto.createHash("md5").update(jsonStr).digest("hex").slice(0, 8);
  const fileName = `search-${name}.${hash}.json`;

  // Clean up old index files for this DB
  const existing = fs.readdirSync(OUTPUT_DIR).filter(
    (f) => f.startsWith(`search-${name}.`) && f.endsWith(".json")
  );
  for (const old of existing) {
    fs.unlinkSync(path.join(OUTPUT_DIR, old));
  }

  fs.writeFileSync(path.join(OUTPUT_DIR, fileName), jsonStr);

  const sizeKB = (Buffer.byteLength(jsonStr) / 1024).toFixed(1);
  console.log(`  ${name}: ${docCount} docs, ${sizeKB} KB → ${fileName}`);

  return { name, file: `/${fileName}` };
}

async function main() {
  console.log("Building Orama search indexes...");

  const resourceRecords = collectPages(/^\/resources\/[^/]+\/$/);
  const blogRecords = collectPages(/^\/blog\/(?!category\/|index)[^/]+\/$/);

  const results = await Promise.all([
    buildIndex("resources", resourceRecords),
    buildIndex("blog", blogRecords),
  ]);

  // Write manifest so the client knows current filenames
  const manifest = {};
  for (const r of results) {
    if (r) manifest[r.name] = r.file;
  }
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "search-manifest.json"),
    JSON.stringify(manifest)
  );

  console.log("Search indexes complete.");
}

main().catch((err) => {
  console.error("Postbuild failed:", err);
  process.exit(1);
});
