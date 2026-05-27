/**
 * Astro integration that builds Orama search indexes at build time.
 *
 * Fixed fork of @orama/plugin-astro for Astro 5/6 compatibility.
 * The upstream plugin crashes because Astro 6 removed `routes` from
 * the `astro:build:done` hook. This version uses `pages` + `dir`
 * directly to find rendered HTML files.
 *
 * Usage in astro.config.mjs:
 *   import oramaSearch from './src/integrations/orama-search.mjs';
 *   integrations: [oramaSearch({ dbName: { pathMatcher, contentSelectors } })]
 *
 * Client usage:
 *   import { getOramaDB, search } from '../integrations/orama-search-client';
 */

import { create, insert, save } from '@orama/orama';
import { compile } from 'html-to-text';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const PKG_NAME = 'orama-search-integration';

const titleConverter = compile({
  baseElements: { selectors: ['title'] },
  wordwrap: false,
});

const h1Converter = compile({
  baseElements: { selectors: ['h1'] },
  wordwrap: false,
});

const defaultSchema = {
  path: 'string',
  title: 'string',
  h1: 'string',
  content: 'string',
};

async function buildDB(dbConfig, pages, dir, logger) {
  const contentConverter = compile({
    baseElements: {
      selectors: dbConfig.contentSelectors?.length
        ? dbConfig.contentSelectors
        : ['body'],
    },
    wordwrap: false,
    selectors: [
      { selector: 'a', options: { ignoreHref: true } },
      { selector: 'img', format: 'skip' },
      { selector: 'script', format: 'skip' },
      { selector: 'style', format: 'skip' },
    ],
  });

  const basePath = dir.pathname;

  // Filter pages by pathMatcher and resolve to file paths
  const matchedPages = pages
    .filter(({ pathname }) => dbConfig.pathMatcher.test('/' + pathname))
    .map(({ pathname }) => {
      // Astro generates pageName/index.html for most pages, or 404.html for special pages
      const filePath = path.join(basePath, pathname, 'index.html');
      if (existsSync(filePath)) {
        return { pathname: '/' + pathname, filePath };
      }
      // Fallback: try without /index.html
      const altPath = path.join(basePath, pathname.replace(/\/$/, '') + '.html');
      if (existsSync(altPath)) {
        return { pathname: '/' + pathname, filePath: altPath };
      }
      return null;
    })
    .filter(Boolean);

  if (matchedPages.length === 0) {
    logger.warn(`No pages matched for this DB config.`);
    return null;
  }

  const db = create({
    schema: defaultSchema,
    ...(dbConfig.language ? { language: dbConfig.language } : undefined),
  });

  for (const { pathname, filePath } of matchedPages) {
    try {
      const html = readFileSync(filePath, 'utf-8');
      const title = titleConverter(html).trim();
      const h1 = h1Converter(html).trim();
      const content = contentConverter(html).trim();

      insert(db, { path: pathname, title, h1, content });
    } catch (err) {
      logger.warn(`Skipping ${pathname}: ${err.message}`);
    }
  }

  return db;
}

export default function oramaSearch(options) {
  return {
    name: PKG_NAME,
    hooks: {
      'astro:build:done': async function ({ pages, dir, logger }) {
        const assetsDir = path.join(dir.pathname, 'assets');
        if (!existsSync(assetsDir)) {
          mkdirSync(assetsDir, { recursive: true });
        }

        for (const [dbName, dbConfig] of Object.entries(options)) {
          const db = await buildDB(dbConfig, pages, dir, logger);
          if (!db) continue;

          const serialized = JSON.stringify(save(db));
          const outPath = path.join(assetsDir, `oramaDB_${dbName}.json`);
          writeFileSync(outPath, serialized, 'utf-8');

          const sizeKB = (Buffer.byteLength(serialized) / 1024).toFixed(1);
          logger.info(`${dbName}: indexed ${pages.length > 0 ? 'pages' : '0'}, ${sizeKB} KB → oramaDB_${dbName}.json`);
        }
      },
    },
  };
}
