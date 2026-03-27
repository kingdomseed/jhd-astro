import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://jasonholtdigital.com',

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

  adapter: cloudflare(),
});