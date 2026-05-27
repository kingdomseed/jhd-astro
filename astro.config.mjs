import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import oramaSearch from "./src/integrations/orama-search.mjs";

export default defineConfig({
  site: 'https://jasonholtdigital.com',

  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        const redirectOrErrorPaths = new Set([
          '/404/',
          '/contact/',
          '/pt/404/',
          '/pt/contact/',
        ]);
        return !pathname.startsWith('/v2/') && !redirectOrErrorPaths.has(pathname);
      },
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
      resources_pt: {
        pathMatcher: /^\/pt\/resources\/.+/,
        contentSelectors: ["main"],
      },
      blog_pt: {
        pathMatcher: /^\/pt\/blog\/(?!index).+/,
        contentSelectors: ["main"],
      },
    }),
  ],

  redirects: {
    '/privacy-policy': '/privacy',
    '/contact': '/support#contact-panel',
    '/pt/contact': '/pt/support#contact-panel',
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
