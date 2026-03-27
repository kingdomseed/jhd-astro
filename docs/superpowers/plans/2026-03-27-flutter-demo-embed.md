# Flutter Web Demo Embed — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Embed the Mythic GME Mobile web demo at `/demo` on jasonholtdigital.com using Flutter's embedded mode (multi-view), not an iframe.

**Architecture:** The Flutter web app (mythicgme2e, web-dev branch) gets a compile-time `IS_EMBEDDED` flag that switches between `runApp()` (standalone, for mythicgme.app) and `runWidget()` with multi-view (embedded, for jasonholtdigital.com/demo/). The built output is copied to `public/demo/` in the Astro site. A standalone `/demo` page loads the Flutter engine and renders it into a full-viewport div.

**Tech Stack:** Flutter web (WASM/JS), Astro 6, `--dart-define` compile-time flags

---

## Overview

Two codebases are involved:

| Codebase | Branch | Change |
|----------|--------|--------|
| mythicgme2e | web-dev | Add `IS_EMBEDDED` flag to `main.dart` — conditional `runWidget` vs `runApp` |
| jhd-astro | main | Add `/demo` page, copy Flutter build output to `public/demo/` |

The `IS_EMBEDDED` flag defaults to `false`, so existing mythicgme.app builds are unaffected. The embedded build is a separate `flutter build web` invocation with `--dart-define=IS_EMBEDDED=true --base-href=/demo/`.

---

## Task 1: Add IS_EMBEDDED flag to mythicgme2e (Dart side)

**Codebase:** mythicgme2e (worktree at `/Users/jholt/development/jhd-business/mythicgme2e-web-dev`)

- [ ] **Step 1: Read the current main.dart**

Read `lib/main.dart` to find the existing `main()` function and `runApp()` call. Note any setup that happens before `runApp()` (dependency injection, Sentry init, etc.) — that setup must run regardless of the embedded flag.

- [ ] **Step 2: Add the IS_EMBEDDED conditional**

Modify `main()` to check the compile-time flag. All existing setup code stays the same. Only the final `runApp()` call changes:

```dart
void main() async {
  // ... existing setup (WidgetsFlutterBinding, Sentry, providers, etc.) ...

  const isEmbedded = bool.fromEnvironment('IS_EMBEDDED');

  if (isEmbedded) {
    runWidget(
      MultiViewApp(
        viewBuilder: (BuildContext context) => const MyApp(),
      ),
    );
  } else {
    runApp(const MyApp()); // existing call, unchanged
  }
}
```

If `MultiViewApp` doesn't exist as a built-in widget in this Flutter version, create a minimal implementation:

```dart
class MultiViewApp extends StatefulWidget {
  const MultiViewApp({super.key, required this.viewBuilder});
  final Widget Function(BuildContext context) viewBuilder;

  @override
  State<MultiViewApp> createState() => _MultiViewAppState();
}

class _MultiViewAppState extends State<MultiViewApp> with WidgetsBindingObserver {
  final Map<Object, Widget> _views = {};

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _updateViews();
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeMetrics() {
    _updateViews();
  }

  void _updateViews() {
    final newViews = <Object, Widget>{};
    for (final view in WidgetsBinding.instance.platformDispatcher.views) {
      newViews[view.viewId] = View(
        view: view,
        child: Builder(builder: widget.viewBuilder),
      );
    }
    setState(() {
      _views.clear();
      _views.addAll(newViews);
    });
  }

  @override
  Widget build(BuildContext context) {
    return _views.isEmpty
        ? const SizedBox.shrink()
        : ViewCollection(views: _views.values.toList());
  }
}
```

- [ ] **Step 3: Verify standalone build (no flag)**

```bash
cd /Users/jholt/development/jhd-business/mythicgme2e-web-dev
flutter build web
```

Expected: Builds successfully. Behaves identically to before — `IS_EMBEDDED` defaults to `false`, `runApp()` is called.

- [ ] **Step 4: Verify embedded build (with flag)**

```bash
flutter build web --dart-define=IS_EMBEDDED=true --base-href=/demo/
```

Expected: Builds successfully. The app uses `runWidget()` with `MultiViewApp`.

- [ ] **Step 5: Commit to web-dev branch**

```bash
git add lib/main.dart
git commit -m "feat: add IS_EMBEDDED compile-time flag for multi-view embedded mode

When built with --dart-define=IS_EMBEDDED=true, the app uses
runWidget + MultiViewApp for Flutter's embedded mode (rendering
into a host element on another page). Default is false — runApp
behavior unchanged for mythicgme.app standalone deployment."
```

---

## Task 2: Build the embedded Flutter web output

**Codebase:** mythicgme2e (web-dev worktree)

- [ ] **Step 1: Build with embedded flag**

```bash
cd /Users/jholt/development/jhd-business/mythicgme2e-web-dev
flutter build web --release --dart-define=IS_EMBEDDED=true --base-href=/demo/
```

- [ ] **Step 2: Copy build output to Astro site**

```bash
# Remove any previous demo build
rm -rf /Users/jholt/development/jhd-business/jhd-astro/public/demo

# Copy the fresh build
cp -r build/web /Users/jholt/development/jhd-business/jhd-astro/public/demo
```

- [ ] **Step 3: Remove files the Astro site doesn't need**

The Flutter build includes its own `index.html`, `manifest.json`, `robots.txt`, and splash screen assets. Remove them — the Astro demo page replaces them:

```bash
cd /Users/jholt/development/jhd-business/jhd-astro/public/demo
rm -f index.html manifest.json robots.txt
rm -rf splash
```

Keep: `flutter_bootstrap.js`, `main.dart.js` (or `main.dart.wasm`), `assets/`, `canvaskit/`, `icons/`, `flutter_service_worker.js`

- [ ] **Step 4: Verify the assets are served**

```bash
ls /Users/jholt/development/jhd-business/jhd-astro/public/demo/flutter_bootstrap.js
```

Expected: File exists.

---

## Task 3: Create the /demo page in Astro

**Codebase:** jhd-astro

**Files:**
- Create: `src/pages/demo.astro`

- [ ] **Step 1: Create the demo page**

This is a standalone page — no BaseLayout. Flutter takes the full viewport. A minimal top bar provides brand context and a "Back to site" link.

Create `src/pages/demo.astro`:

```astro
---
// Standalone page for the embedded Flutter web demo.
// No BaseLayout — Flutter manages its own viewport, scrolling, and navigation.
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>Try Mythic GME Mobile — Web Demo | Jason Holt Digital</title>
    <meta name="description" content="Play the official Mythic GME Mobile web demo. Explore Fate Chart, meaning tables, scenes, and adventure lists right in your browser." />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html, body { height: 100%; overflow: hidden; background: #1e1a28; }
      .demo-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 1rem;
        background: #1e1a28;
        color: rgba(255,255,255,0.9);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        font-size: 0.85rem;
        border-bottom: 1px solid rgba(255,255,255,0.1);
        flex-shrink: 0;
      }
      .demo-bar a {
        color: rgba(255,255,255,0.7);
        text-decoration: none;
      }
      .demo-bar a:hover { color: #fff; }
      .demo-bar__title {
        font-weight: 600;
        letter-spacing: 0.01em;
      }
      .demo-bar__links {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      #flutter-host {
        flex: 1;
        width: 100%;
        overflow: hidden;
      }
      body {
        display: flex;
        flex-direction: column;
      }
    </style>
  </head>
  <body>
    <div class="demo-bar">
      <span class="demo-bar__title">Mythic GME Mobile — Web Demo</span>
      <div class="demo-bar__links">
        <a href="/apps">Get the App</a>
        <a href="/">&larr; Back to site</a>
      </div>
    </div>
    <div id="flutter-host"></div>

    <script is:inline src="/demo/flutter_bootstrap.js"></script>
    <script is:inline>
      // Wait for the Flutter loader to be available, then initialize in embedded mode
      if (window._flutter) {
        window._flutter.loader.load({
          serviceWorkerSettings: { serviceWorkerVersion: null },
          onEntrypointLoaded: async function(engineInitializer) {
            const engine = await engineInitializer.initializeEngine({
              multiViewEnabled: true,
              assetBase: '/demo/',
            });
            const app = await engine.runApp();
            app.addView({
              hostElement: document.getElementById('flutter-host'),
            });
          }
        });
      }
    </script>
  </body>
</html>
```

- [ ] **Step 2: Add demo to sitemap exclusion**

Update `astro.config.mjs` to exclude `/demo` from the auto-generated sitemap:

```javascript
integrations: [
  sitemap({
    filter: (page) => !page.includes('/demo'),
  }),
  // ... other integrations
],
```

- [ ] **Step 3: Add "Try the Demo" CTA to the apps page**

In `src/components/pages/AppsPage.astro`, add a prominent CTA linking to `/demo`. Place it in the hero area or as a banner above the app sections.

```astro
<a href="/demo" class="btn btn--primary">
  Try the Web Demo
</a>
```

The exact placement and styling should match the existing design system.

- [ ] **Step 4: Verify build**

```bash
npx astro check && npm run build
```

Expected: PASS. The `/demo` route is generated. Flutter assets served from `public/demo/`.

- [ ] **Step 5: Test locally**

```bash
npm run preview
```

Navigate to `http://localhost:4321/demo` — the Flutter app should load in the viewport below the demo bar.

Verify:
- [ ] Demo bar shows with "Back to site" link
- [ ] Flutter app loads and renders (splash screen → app)
- [ ] Touch/scroll works on mobile
- [ ] Keyboard input works (text fields, shortcuts)
- [ ] "Back to site" link navigates back to the main site
- [ ] The main site (all other pages) is unaffected

- [ ] **Step 6: Commit**

```bash
git add src/pages/demo.astro public/demo/ astro.config.mjs src/components/pages/AppsPage.astro
git commit -m "feat: add embedded Flutter web demo at /demo

Standalone page using Flutter's multi-view embedded mode.
Flutter build output served from public/demo/.
Demo bar with branding and back-to-site link.
Excluded from sitemap."
```

---

## Task 4: Gitignore and rebuild workflow

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Decide on gitignore strategy**

The Flutter build output in `public/demo/` is large (10-30MB of JS/WASM/assets). Two options:

**Option A: Commit the build output** — simple, no CI needed, works immediately on Cloudflare. But bloats the repo.

**Option B: Gitignore and build in CI** — cleaner repo, but requires CI to run `flutter build web` before `astro build`. Cloudflare Pages would need Flutter SDK in the build environment.

For now, **Option A** is pragmatic — commit the build output. The demo doesn't change often. When it does, rebuild and recommit. Add a note to CLAUDE.md about the rebuild process.

- [ ] **Step 2: Document the rebuild process**

Add to CLAUDE.md or AGENTS.md:

```markdown
## Demo Rebuild

The `/demo` page embeds a Flutter web build from the mythicgme2e repo.
To update it:

1. cd /path/to/mythicgme2e (web-dev branch)
2. flutter build web --release --dart-define=IS_EMBEDDED=true --base-href=/demo/
3. rm -rf /path/to/jhd-astro/public/demo
4. cp -r build/web /path/to/jhd-astro/public/demo
5. rm public/demo/index.html public/demo/manifest.json public/demo/robots.txt
6. Commit and push jhd-astro
```

- [ ] **Step 3: Commit**

```bash
git add .gitignore CLAUDE.md
git commit -m "docs: add demo rebuild instructions"
```

---

## Summary

| Task | Codebase | Description |
|------|----------|-------------|
| 1 | mythicgme2e (web-dev) | Add IS_EMBEDDED flag — conditional runWidget vs runApp |
| 2 | mythicgme2e → jhd-astro | Build embedded output, copy to public/demo/ |
| 3 | jhd-astro | Create /demo page, exclude from sitemap, add CTA |
| 4 | jhd-astro | Gitignore strategy, rebuild docs |
