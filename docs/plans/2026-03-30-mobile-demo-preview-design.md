# Mobile Demo Preview Design

**Date:** 2026-03-30

## Goal

Add an interactive Mythic GME Mobile preview to the Astro apps page by replacing the current mobile screenshot treatment with a phone-framed embedded Flutter surface, while adding a clear homepage path to the full demo on `https://mythicgme.app`.

## Approved Direction

- Keep the existing Flutter embedded-mode work in `mythicgme2e`.
- Reuse the existing Astro design system and current page hierarchy.
- Do not turn the homepage billboard carousel into a button-heavy CTA block.
- Replace the mobile app visual on `/apps` with a dedicated phone preview component.
- Keep desktop demo discovery as a full-demo handoff to `https://mythicgme.app`.

## Current Structure Findings

- `src/components/home/Hero.astro` is the homepage decision point and already owns the primary CTA set.
- `src/components/home/Billboard.astro` is a proof/visual surface, not a navigation surface.
- `src/components/apps/AppSection.astro` currently mixes layout, screenshot rendering, carousel behavior, swipe handling, and lightbox behavior.
- `src/pages/demo.astro` plus `public/demo/` already provide same-origin Flutter embedded assets using `multiViewEnabled: true` and `app.addView({ hostElement })`.

## Architecture

### Homepage

- Add a clear `Play the Demo` CTA to the Hero.
- Keep the billboard primarily visual.
- If the demo CTA needs secondary reinforcement later, place it adjacent to the billboard, not inside the billboard carousel controls.

### Apps Page

- Keep the overall two-column app-section layout.
- Replace the current mobile screenshot carousel with a dedicated mobile preview visual component.
- The preview component should:
  - render a phone shell using the existing neo-brutalist design language
  - show a poster/cover state before activation
  - mount the embedded Flutter app into the phone screen after explicit user activation
  - provide `Try live preview`, `Open full demo`, and `Reset` controls

### Demo Routing

- For this spike, reuse the existing `public/demo/` asset bundle as the embedded runtime source.
- The canonical full demo remains `https://mythicgme.app`.
- After the spike, `src/pages/demo.astro` can either remain as an alternate demo landing page or become a redirect to `https://mythicgme.app`.

## Component Boundaries

- `AppSection.astro` should evolve toward a layout shell.
- The new phone preview must live in a dedicated component instead of expanding `AppSection`'s existing carousel logic.
- Any Flutter preview boot logic should stay local to the preview component or a tiny helper module.
- Shared site styling belongs in `public/styles/components/*.css`, not inline where avoidable.

## Premortem

1. The live preview could overload the apps page and hurt perceived performance.
Detection: slow initial render or janky interaction on `/apps`.
Cheap test: keep the preview click-to-activate and verify the page loads cleanly before activation.

2. The phone preview could visually fight the existing neo-brutalist system.
Detection: the frame looks skeuomorphic or off-brand next to the rest of the page.
Cheap test: compare the preview against the homepage hero/billboard and the current app cards in the browser.

3. The embedded Flutter surface could behave badly in a constrained mobile frame.
Detection: blank preview, clipped dialogs, or broken scrolling.
Cheap test: mount the existing embedded build in the new host and verify first render, tap input, and reset behavior.

## Spike Outcome We Want

- Homepage has a clear demo path without corrupting the billboard role.
- `/apps` makes the mobile product feel alive, not just documented.
- The implementation reuses the existing Flutter embed work and Astro design system instead of starting over.
