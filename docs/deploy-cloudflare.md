# Deploying to Cloudflare

This project uses the Cloudflare adapter. Builds are static and prerendered; images are optimized at build time.

## Adapter notes

- You may see an info log about a `SESSION` KV binding. This site does not use sessions; it can be safely ignored.
- If you later add sessions, create a KV namespace and bind it in `wrangler.jsonc` with `binding: "SESSION"`.
- Sharp is not supported at runtime; we already compile images during the build.

## wrangler.jsonc

`assets.directory` should point to `dist/`. `compatibility_date` should be current.

## Deploy steps (typical)

1) Build: `npm run build`
2) Use Cloudflare Pages or Workers (Assets binding) according to your setup.
3) Verify static routes and `/rss.xml` are served correctly.

