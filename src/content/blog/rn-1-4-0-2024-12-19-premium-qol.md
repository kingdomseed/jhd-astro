---
title: "v1.4 — Expanded Features Unlock & Quality-of-Life Updates"
summary: "Expanded Features unlock, Fate and Meaning Table quality-of-life updates, a modern Dice Roller UI, and streamlined settings."
category: "Release Notes"
date: "2024-12-19"
readTime: "6 min read"
isSample: false
keywords: ["release notes", "Mythic GME Apps"]
tags: [
  "pre-release",
  "series:beta-to-first-release",
  "product:apps",
  "v1.4",
  "expanded-features",
  "one-time-unlock",
  "meaning-tables",
  "fate",
  "settings",
  "dice-roller",
  "scenes",
  "bug-fixes"
]
---

Released December 19, 2024.

This post is part of the Beta → First Release series.

This release introduced the mobile Expanded Features unlock, added more official Mythic tables, and cleaned up several core play surfaces before the first public release line settled.

## Highlights

- **Expanded Features unlock**: The one-time mobile unlock made the current Expanded Features available and included new Expanded Features added during the 12-month unlock window.
- **More official Mythic tables**: The first Expanded Features set included additional Meaning Tables and Event Focus tables from Mythic Magazines and Mythic Variations.
- **Fate and Event Focus updates**: Fate Chart and Fate Check moved into one configurable screen, with selectable Event Focus tables.
- **Dice Roller refresh**: The Dice Roller gained a more modern interface, saved formulas, result chips, and JSON import/export/sharing.
- **Settings and files cleanup**: Settings moved into clearer categories, with file-storage controls and iCloud Sync for Apple devices.

## Added

- Mobile Expanded Features unlock:
  - An additional 46 Meaning Tables from Mythic Magazines 1–47
  - An additional 12 Event Focus tables from Mythic Magazines 1–47 and Mythic Variations
- At the time, the next Expanded Features planned under this category included:
  - Custom Oracles/Meaning Tables
  - Custom Event Focus Tables
  - Hybrid Play options
- Adventure Event Focus Table: An event focus table for adventure-oriented games, emphasizing action and character interactions.
- Epic Event Focus Table: An event focus table for epic-scale games, emphasizing dramatic thread developments and grand character actions.
- Event Focus Table: The original event focus table. Rolls on Characters and Threads.
- Horror Event Focus Table: A horror-themed event focus table. MM Compilation 4.
- Major News Event Focus Table: A table for determining the focus of major news events. MM Compilation 6.
- 20% Meaningful Event Focus Table: A meaningful event focus table with a 20% chance of a meaningful event. MM Compilation 2.
- 25% Meaningful Event Focus Table: A meaningful event focus table with a 25% chance of a meaningful event. MM Compilation 2.
- 33% Meaningful Event Focus Table: A meaningful event focus table with a 33% chance of a meaningful event. MM Compilation 2.
- Minor News Event Focus Table: A table for determining the focus of minor news events. MM Compilation 6.
- Mystery Event Focus Table: A mystery-focused event table. Rolls on Characters and Threads. From MM Compilation 1.
- Narrative Nudges Table: A replacement for event focus to make Mythic more narratively focused. MM 43.
- Personal Event Focus Table: An event focus table for personal-scale games, emphasizing individual character interactions and personal threads.
- Prepared Event Focus Table: Use this with your prepared adventures. Rolls on features instead of threads.
- Social Event Focus Table: An event focus table for socially-oriented games, emphasizing dramatic revelations and character interactions.

## Changed

- Meaning table updates:
  - Meaning Table rolls now appear in the Fate log
  - Added slide‑out tab for Meaning Tables in the Fate screen
  - Meaning Table categories updated
  - Removed the word “characters” from the individual buttons in the Characters category
- Fate Chart / Check updates:
  - Fate Chart and Fate Check are now a single screen — toggle between systems in Settings
  - Selectable Event Focus tables with improved functionality
  - Added a free Prepared Adventure Event Focus table option. Selecting this causes Random Event and Event Focus rolls to roll on Features instead of Threads. See Mythic GME 2e rulebook (around p. 158) for details
- Settings updates:
  - Relevant settings now accessible from each screen via a new app bar Settings icon
  - Revamped Settings interface for better accessibility and organization (tabbed view by category)
  - Journal Manager removed and replaced with a new Files tab in Settings. A “My Journal” is created automatically on first launch
  - Added iCloud Sync for Apple devices and file‑storage location selection for all devices
- Menu updates:
  - Slide‑out app menu reorganized — core Mythic GME 2e systems under Core
  - Tools includes Dice Roller (and future Notes)
  - System groups Settings and Support. Support and About Us combined. Expanded Features can be unlocked from Support
- Dice Roller (extensive update):
  - New, modern interface lets you build formulas using dice icons and buttons (not just typing)
  - Last result displayed at the top; history lives in a separate tab
  - Results shown as chips for clarity
  - Saved formulas appear in a slide‑out menu
  - Saved formulas sync with iCloud (if enabled) and are stored as JSON for import/export/sharing
  - A template is available on the website for pre‑building and importing formulas
- Scenes updates:
  - Larger scene summary editor
  - Summary editor supports Markdown (GitHub Flavored Markdown): https://github.github.com/gfm/
  - When navigating away from Scenes with an open scene, the scene now saves

## Bug Fixes
- Resolved multiple exceptions in Dice Roller and keyboard activation
- Discord link updated and set to “Not Expire”
- Fixed race conditions during navigation and view transitions
- Fixed race conditions during file saving and loading
- Addressed storage exceptions and file access issues
- Corrected journal import/export functionality
- Fixed issues with Meaning Tables during widget rebuilds
- Fixed tooltip build issues causing crashes on desktop modes
- Numerous other bug fixes from crash reports
- Rolls on Characters no longer happen for “New NPC”
