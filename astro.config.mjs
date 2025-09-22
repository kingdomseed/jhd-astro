import { defineConfig } from "astro/config";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import sentry from "@sentry/astro"; 
import cloudflare from "@astrojs/cloudflare";

// Astro configuration for this demo project.  The default settings are
// sufficient for static sites, but a config file is still provided so
// that a user dropping these files into their own project has a
// reference point.  See https://docs.astro.build/en/reference/configuration/
// for more details.
export default defineConfig({
  // Site is used for absolute URLs (e.g., in RSS) and canonical generation in some contexts
  site: 'https://jasonholtdigital.com',
  integrations: [
    sentry({
      sourceMapsUploadOptions: {
        project: "flutter",
        org: "jason-holt-digital-llc",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
    spotlightjs(),
  ],
  // Cloudflare adapter - session warnings are informational and can be ignored for static sites
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        mode: "compile"
      }
    }
  },
});
