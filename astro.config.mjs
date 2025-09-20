import { defineConfig } from "astro/config";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

import cloudflare from "@astrojs/cloudflare";

// Astro configuration for this demo project.  The default settings are
// sufficient for static sites, but a config file is still provided so
// that a user dropping these files into their own project has a
// reference point.  See https://docs.astro.build/en/reference/configuration/
// for more details.
export default defineConfig({
  // Site is used for absolute URLs (e.g., in RSS) and canonical generation in some contexts
  site: 'https://jasonholtdigital.com',
  integrations: [sentry(), spotlightjs()],
  // Cloudflare adapter
  // Note: The adapter may log an informational message about a `SESSION` KV binding for sessions.
  // If you don't use sessions, this can be safely ignored. If you do, add a KV namespace binding
  // named `SESSION` in wrangler.
  adapter: cloudflare(),
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        mode: "compile"
      }
    }
  },
});
