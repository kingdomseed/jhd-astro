# Mobile Demo Preview Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Prototype a real phone-framed Flutter preview on the Astro apps page and add a homepage demo CTA that fits the current design system.

**Architecture:** Keep the existing embedded Flutter asset bundle under `public/demo/`, mount it into a dedicated mobile-preview component on `/apps`, and keep homepage demo discovery in the Hero rather than the Billboard. Preserve `AppSection` as much as possible while creating a new visual component boundary for the mobile preview.

**Tech Stack:** Astro 6, static hoisted client-side TypeScript, existing neo-brutalist CSS layers, embedded Flutter web assets under `public/demo/`.

---

### Task 1: Record the spike decisions in code-facing docs

**Files:**
- Create: `docs/plans/2026-03-30-mobile-demo-preview-design.md`
- Create: `docs/plans/2026-03-30-mobile-demo-preview-implementation.md`

**Step 1: Save the approved design**

Write the design summary, constraints, and premortem into the design doc.

**Step 2: Save the implementation plan**

Write this execution plan into the plan doc.

---

### Task 2: Add a homepage demo CTA that respects the current billboard

**Files:**
- Modify: `src/components/home/Hero.astro`
- Modify: `public/styles/components/hero.css`

**Step 1: Add the new CTA in Hero**

Add a `Play the Demo` action linking to `https://mythicgme.app` with `target="_blank"` and `rel="noopener noreferrer"`.

**Step 2: Reuse existing button patterns**

Style the CTA using the established button system instead of inventing a one-off pattern.

**Step 3: Keep hierarchy readable**

Ensure `Learn More` remains primary and the demo CTA reads as an immediate trial path, not a competing homepage conversion funnel.

---

### Task 3: Create a dedicated mobile demo preview component

**Files:**
- Create: `src/components/apps/MobileDemoPreview.astro`
- Modify: `public/styles/components/apps.css`

**Step 1: Build the phone-shell component**

Create a dedicated component that renders:
- a phone frame
- a poster state before activation
- a host element for the embedded Flutter app
- preview controls

**Step 2: Add click-to-activate behavior**

When the user clicks `Try live preview`, load the embedded Flutter runtime from `/demo/flutter_bootstrap.js` and mount it into the local host element.

**Step 3: Add reset behavior**

Add a reset action that clears the active view and returns to the poster state without requiring a full page reload if feasible.

**Step 4: Keep selectors local**

Use component-scoped classes and `data-*` selectors so the behavior does not leak into other carousels or sections.

---

### Task 4: Wire the mobile preview into the apps page cleanly

**Files:**
- Modify: `src/components/apps/AppSection.astro`
- Modify: `src/components/pages/AppsPage.astro`

**Step 1: Introduce a visual override seam**

Add a slot or equivalent visual override path in `AppSection.astro` so the mobile section can supply a custom visual component.

**Step 2: Replace the mobile screenshot visual only**

Use the new `MobileDemoPreview.astro` component for the mobile app section while leaving the desktop section on the current screenshot treatment.

**Step 3: Preserve the design system**

Keep the existing content hierarchy, spacing rhythm, and two-column layout intact.

---

### Task 5: Decide the short-term `/demo` role during the spike

**Files:**
- Optional Modify: `src/pages/demo.astro`

**Step 1: Keep `/demo` functional while testing**

During the spike, continue using `/demo` asset paths for the embedded runtime.

**Step 2: Defer final routing choice**

After visual review, decide whether `/demo` stays as a site-hosted demo page or becomes a redirect to `https://mythicgme.app`.

---

### Task 6: Run the design spike and verify it live

**Files:**
- No code files specific; run commands and capture visual feedback

**Step 1: Start the Astro dev server**

Run: `npm run dev`

**Step 2: Open the local site in Chrome**

Check the homepage Hero/Billboard relationship and the `/apps` mobile preview.

**Step 3: Verify these behaviors**

- homepage CTA is clear and not visually noisy
- billboard still reads as visual proof, not a cluttered nav block
- apps-page phone shell looks on-brand
- preview activates and renders inside the frame
- full-demo CTA opens `https://mythicgme.app`

---

### Task 7: Quality gates for the Astro spike

**Files:**
- All touched files above

**Step 1: Run validation**

Run: `npx astro check && npm run build && npm test`

Expected: pass with no newly introduced errors.

**Step 2: Manual QA**

Check desktop and mobile viewports for layout, focus, and console errors.

---

### Task 8: Capture follow-up decisions

**Files:**
- Update: `docs/plans/2026-03-30-mobile-demo-preview-design.md`

**Step 1: Note what worked and what didn’t**

Document whether the phone preview should ship, be simplified, or be limited to a later iteration.

**Step 2: Record the `/demo` decision**

Document whether the Astro-hosted `/demo` route remains or redirects to `https://mythicgme.app`.

---

Plan complete and saved to `docs/plans/2026-03-30-mobile-demo-preview-implementation.md`.

Two execution options:

**1. Subagent-Driven (this session)** - I dispatch fresh subagent per task, review between tasks, fast iteration

**2. Parallel Session (separate)** - Open new session with executing-plans, batch execution with checkpoints

Since you asked to do the live design testing now, I’m continuing with the subagent-driven path in this session.
