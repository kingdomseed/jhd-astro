---
title: "v1.5.2-v1.5.3 — Markdown & Descriptions"
summary: "Entry descriptions, Markdown in the Adventure Log, smarter Custom Tables, localization updates, storage recovery, and privacy cleanup."
category: "Release Notes"
date: "2025-08-27"
readTime: "6 min read"
isSample: false
keywords: ["release notes", "Mythic GME Apps"]
tags: [
  "release",
  "v1.5.3",
  "v1.5.2",
  "product:apps",
  "custom-tables",
  "markdown",
  "localization",
  "storage",
  "analytics",
  "accessibility",
  "performance"
]
---

Released August 27, 2025.

v1.5.2-v1.5.3 focused on richer table results, more reliable Custom Tables, and
safer desktop storage behavior. It also cleaned up localization, accessibility,
purchase verification, and analytics consent around the app.

## Highlights

- Meaning Tables and Event Focus results can show optional descriptions beneath
  each result.
- Adventure Log entries can render Markdown from Meaning Tables, Event Focus,
  and Lists.
- Custom Tables gained multiline entries, auto-expanding ranges, and stronger
  import/export support.
- Desktop builds got a safer recovery path when the Documents folder is missing
  or unavailable.

## Added

- Optional `description` fields for Meaning Tables and Event Focus entries,
  shown in roll results and the Adventure Log.
- Markdown rendering for table and list results in the Adventure Log.
- German language support across Custom Tables, Settings, editor UI, error
  messages, accessibility labels, and Expanded Features hints.
- Separate `es_ES` and `es_MX` locale options for Spain and Mexico.
- First-run analytics consent on iOS and macOS.

## Changed

- Custom Table editing now supports proper line breaks and multiline text.
- Tables can expand from 1-20 to 1-100 when new entries move beyond the current
  range, with undo support and a "don't auto-expand again" option.
- CSV, PSV, TXT, JSON, and Foundry VTT import/export handling now preserves
  entry descriptions when present.
- Language settings now distinguish official translations from UI-only
  translations.
- Windows, macOS, and Linux now block startup when the Documents folder is
  unavailable and prompt players to choose a folder instead of silently falling
  back.
- Purchase receipt checks are more reliable on iOS and macOS.
- Analytics screen tracking and consent handling were tightened so tracking
  stays behind the analytics setting.

## Fixed

- Meaning Table and Custom Table handling is sturdier around single-value
  ranges, zero-width ranges, recalculation, and invalid table data.
- The copy icon resets properly after subsequent rolls on iPad.
- Custom Table descriptions now persist through the app, storage, and restore
  path.
- "Auto-edit New Scene" now opens the editor more consistently on iPad.
- CSV, PSV, and TXT imports report malformed files more clearly.
- Fate Questions restore more reliably when importing journals from iOS to
  Android or Boox.

## Known Issues

- Some malformed user tables may remain quarantined until the JSON is repaired
  or the table is re-imported.
- Entry descriptions require the newer table schema; older tables may need to be
  updated before descriptions appear.
