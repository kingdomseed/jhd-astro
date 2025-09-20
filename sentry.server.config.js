import * as Sentry from "@sentry/astro";

// Static site: no SSR expected; keep server init guarded and minimal.
if (import.meta.env.MODE === "production") {
  Sentry.init({
    dsn: "https://966a37fbe37ba643582507479b666ed7@o4508302394654720.ingest.us.sentry.io/4510053536432128",
    environment: "production",
    sendDefaultPii: false,
    sampleRate: 1.0,
    tracesSampleRate: 0,
    enableLogs: false,
    attachStacktrace: true,
    integrations: [],
    normalizeDepth: 3,
    ignoreErrors: [
      "AbortError",
      "ChunkLoadError",
      "Loading chunk",
    ],
    beforeSend(event) {
      try {
        const frames = event?.exception?.values?.[0]?.stacktrace?.frames ?? [];
        if (frames.some((f) => (f?.filename ?? "").startsWith("chrome-extension://"))) {
          return null;
        }
      } catch {}
      return event;
    },
  });
}
