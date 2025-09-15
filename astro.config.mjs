import { defineConfig } from "astro/config";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// Astro configuration for this demo project.  The default settings are
// sufficient for static sites, but a config file is still provided so
// that a user dropping these files into their own project has a
// reference point.  See https://docs.astro.build/en/reference/configuration/
// for more details.
export default defineConfig({
  integrations: [sentry(), spotlightjs()]
});