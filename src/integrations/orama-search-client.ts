/**
 * Client-side Orama search loader.
 * Fetches pre-built indexes from /assets/oramaDB_{name}.json and caches them.
 * Indexes are generated at build time by the orama-search integration.
 * In dev mode (no build), fetch returns 404 — handled gracefully.
 */
import { create, load, search } from '@orama/orama';

const dbs: Record<string, ReturnType<typeof create>> = {};

export async function getOramaDB(dbName: string) {
  if (dbName in dbs) return dbs[dbName];

  const res = await fetch(`/assets/oramaDB_${dbName}.json`);
  if (!res.ok) throw new Error(`Search index not found (run npm run build first)`);

  const db = create({ schema: { _: 'string' } });
  const data = await res.json();
  load(db, data);
  dbs[dbName] = db;
  return db;
}

export { search };
