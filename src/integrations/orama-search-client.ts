/**
 * Client-side Orama search loader.
 * Fetches pre-built indexes from /assets/oramaDB_{name}.json and caches them.
 * Same API as @orama/plugin-astro/client but works with our local integration.
 */
import { create, load, search } from '@orama/orama';

const dbs: Record<string, ReturnType<typeof create>> = {};

export async function getOramaDB(dbName: string) {
  if (dbName in dbs) return dbs[dbName];

  const db = create({ schema: { _: 'string' } });
  const res = await fetch(`/assets/oramaDB_${dbName}.json`);
  const data = await res.json();
  load(db, data);
  dbs[dbName] = db;
  return db;
}

export { search };
