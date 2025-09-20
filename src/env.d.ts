/// <reference types="astro/client" />
// This file ensures TypeScript recognizes Astro client-side types
// and ambient module declarations like `astro:env/client`.

// Minimal module declaration to satisfy editors if needed
declare module 'astro:env/client' {
  export const PUBLIC_FORMSPARK_FORM_ID: string | undefined;
  export const PUBLIC_TURNSTILE_SITE_KEY: string | undefined;
}
