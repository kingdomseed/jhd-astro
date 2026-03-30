import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import oramaSearch from "./src/integrations/orama-search.mjs";

export default defineConfig({
  site: 'https://jasonholtdigital.com',

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/demo'),
    }),
    oramaSearch({
      resources: {
        pathMatcher: /^\/resources\/.+/,
        contentSelectors: ["main"],
      },
      blog: {
        pathMatcher: /^\/blog\/(?!category|index).+/,
        contentSelectors: ["main"],
      },
    }),
  ],

  redirects: {
    '/demo': {
      status: 302,
      destination: 'https://mythicgme.app',
    },
    '/privacy-policy': '/privacy',
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt"],
    routing: {
      prefixDefaultLocale: false
    }
  },

  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        mode: "compile"
      }
    }
  },

  adapter: cloudflare({
    imageService: 'compile',
  }),
});
