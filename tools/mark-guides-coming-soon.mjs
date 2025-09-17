#!/usr/bin/env node
// Replace body content of all resources/*.md with "Coming soon." while preserving frontmatter
import fs from 'node:fs/promises';
import path from 'node:path';

const RES_DIR = path.resolve(process.cwd(), 'src/content/resources');

function splitFrontmatter(content) {
  const fmMatch = content.match(/^---[\r\n]([\s\S]*?)\n---[\r\n]?([\s\S]*)$/);
  if (!fmMatch) {
    return { frontmatter: null, body: content };
  }
  return { frontmatter: fmMatch[1].trim(), body: fmMatch[2] };
}

async function run() {
  const entries = await fs.readdir(RES_DIR);
  let count = 0;
  for (const entry of entries) {
    if (!entry.endsWith('.md')) continue;
    const file = path.join(RES_DIR, entry);
    const raw = await fs.readFile(file, 'utf8');
    const { frontmatter } = splitFrontmatter(raw);
    if (!frontmatter) {
      // Skip files without frontmatter to avoid breaking schema
      continue;
    }
    const next = `---\n${frontmatter}\n---\n\nComing soon.`;
    await fs.writeFile(file, next, 'utf8');
    // eslint-disable-next-line no-console
    console.log(`Updated: ${file}`);
    count++;
  }
  // eslint-disable-next-line no-console
  console.log(`Done. Updated ${count} file(s).`);
}

run().catch(err => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});


