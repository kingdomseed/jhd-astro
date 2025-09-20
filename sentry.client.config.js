import * as Sentry from "@sentry/astro";

// Static site: send real errors only. No PII, no tracing, minimal breadcrumbs.
if (import.meta.env.MODE === "production") {
  Sentry.init({
    dsn: "https://966a37fbe37ba643582507479b666ed7@o4508302394654720.ingest.us.sentry.io/4510053536432128",
    environment: "production",
    sendDefaultPii: false,
    sampleRate: 1.0,
    tracesSampleRate: 0,
    enableLogs: false,
    integrations: [],
    maxBreadcrumbs: 20,
    normalizeDepth: 3,
    // Keep console breadcrumbs lean; drop debug/info/log
    beforeBreadcrumb(breadcrumb) {
      if (breadcrumb.category === "console" && ["debug", "log", "info"].includes(breadcrumb.level ?? "")) {
        return null;
      }
      return breadcrumb;
    },
    // Filter extension noise and common benign errors
    denyUrls: [/^chrome-extension:\/\//, /^moz-extension:\/\//, /^safari-web-extension:\/\//],
    allowUrls: [/^https?:\/\/(www\.)?jasonholtdigital\.com/i, /^\/(?!\/)/],
    ignoreErrors: [
      "ResizeObserver loop limit exceeded",
      "ResizeObserver loop completed with undelivered notifications",
      "AbortError",
      "NetworkError when attempting to fetch resource",
      "ChunkLoadError",
      "Loading chunk",
      "Non-Error promise rejection captured",
    ],
    beforeSend(event) {
      try {
        const frames = event?.exception?.values?.[0]?.stacktrace?.frames ?? [];
        if (frames.some((f) => (f?.filename ?? "").match(/^(chrome|moz|safari-web-extension):\/\//))) {
          return null;
        }
      } catch {}
      return event;
    },
  });
}
