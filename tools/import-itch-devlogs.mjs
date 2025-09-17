#!/usr/bin/env node
// Fetch specified Itch.io devlogs and generate Markdown posts in src/content/blog/
// Dependencies: none (uses built-in fetch in Node >=18)

import fs from 'node:fs/promises';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

const DEVLOG_URLS = [
  'https://jasonholtdigital.itch.io/mythic-gme-digital/devlog/912655/mythic-gme-digital-official-drm-free-release',
  'https://jasonholtdigital.itch.io/mythic-gme-digital/devlog/1007170/v15-is-here',
  'https://jasonholtdigital.itch.io/mythic-gme-digital/devlog/1018403/update-to-v153',
  'https://jasonholtdigital.itch.io/mythic-gme-digital/devlog/1022030/v154-localization-improvements-pinned-scenes',
  'https://jasonholtdigital.itch.io/mythic-gme-digital/devlog/1030315/mythic-gme-2e-v155-release-notes',
  'https://jasonholtdigital.itch.io/mythic-gme-digital/devlog/1030316/mythic-gme-2e-v155-release-notes',
];

const BLOG_DIR = path.resolve(process.cwd(), 'src/content/blog');

function slugify(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
    .slice(0, 120);
}

function extractJsonLd(html) {
  const scripts = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const m of scripts) {
    try {
      const obj = JSON.parse(m[1]);
      if (obj && (obj['@type'] === 'BlogPosting' || obj['@type'] === 'NewsArticle' || obj['@type'] === 'Article')) {
        return obj;
      }
    } catch {
      // ignore parse errors and continue
    }
  }
  return null;
}

function extractBodyHtml(html) {
  const bodyMatch = html.match(/<section[^>]*class=["'][^"']*post_body[^"']*["'][^>]*>([\s\S]*?)<\/section>/i);
  return bodyMatch ? bodyMatch[1].trim() : '';
}

function firstHeadingText(bodyHtml) {
  const h2 = bodyHtml.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  if (!h2) return '';
  return stripTags(h2[1]).trim();
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ');
}

function computeReadTime(bodyHtml) {
  const text = stripTags(bodyHtml);
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function fetchHtml(url) {
  // Prefer curl for reliability with Itch.io
  const args = ['-sL', '--max-time', '60', '-H', 'user-agent: Mozilla/5.0 (compatible; ImportScript/1.0)', url];
  const { stdout } = await execFileAsync('curl', args);
  if (!stdout || stdout.length === 0) {
    throw new Error(`Empty response from ${url}`);
  }
  return stdout.toString();
}

function getIdFromUrl(url) {
  const m = url.match(/devlog\/(\d+)\//);
  return m ? m[1] : '';
}

async function generateMarkdown({ title, summary, category, date, readTime, bodyHtml, url, id }) {
  const safeTitle = title.replace(/"/g, '\\"');
  const fm = [
    '---',
    `title: "${safeTitle}"`,
    `summary: "${summary.replace(/"/g, '\\"')}"`,
    `category: "${category}"`,
    `date: "${date}"`,
    `readTime: "${readTime}"`,
    'isSample: false',
    '---',
    '',
  ].join('\n');

  // Keep the original HTML verbatim inside Markdown for fidelity
  const body = `${fm}${bodyHtml}\n`;

  const filename = `${slugify(title)}-${id}.md`;
  const filepath = path.join(BLOG_DIR, filename);
  await fs.writeFile(filepath, body, 'utf8');
  return filepath;
}

async function run() {
  await ensureDir(BLOG_DIR);
  const results = [];
  for (const url of DEVLOG_URLS) {
    // eslint-disable-next-line no-console
    console.log(`Fetching: ${url}`);
    const id = getIdFromUrl(url);
    const html = await fetchHtml(url);
    const jsonld = extractJsonLd(html);
    if (!jsonld) throw new Error(`No JSON-LD BlogPosting found for ${url}`);
    const title = jsonld.headline || jsonld.name || 'Untitled';
    const date = (jsonld.datePublished || '').slice(0, 10) || '';
    const bodyHtml = extractBodyHtml(html);
    const summaryFromH2 = firstHeadingText(bodyHtml);
    const summary = summaryFromH2 || (stripTags(bodyHtml).slice(0, 180) + (stripTags(bodyHtml).length > 180 ? '…' : ''));
    const readTime = computeReadTime(bodyHtml);
    const category = 'Release Notes';
    // eslint-disable-next-line no-console
    console.log(`Parsed: ${title} (${date})`);
    const filepath = await generateMarkdown({ title, summary, category, date, readTime, bodyHtml, url, id });
    // eslint-disable-next-line no-console
    console.log(`Wrote: ${filepath}`);
    results.push({ url, filepath });
  }
  return results;
}

run()
  .then(results => {
    for (const r of results) {
      // eslint-disable-next-line no-console
      console.log(`Wrote: ${r.filepath}`);
    }
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
  });


