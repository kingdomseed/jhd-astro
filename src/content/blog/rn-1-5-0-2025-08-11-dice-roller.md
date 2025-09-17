---
title: "Release Notes — v1.5"
summary: "Highlights"
category: "Release Notes"
date: "2025-08-11"
readTime: "2 min read"
isSample: false
tags: ["release", "v1.5", "product:apps", "dice-roller", "custom-tables", "accessibility", "localization", "stability"]
---

**Overview**
v1.5 is our biggest update yet. This release focuses on smarter Random Events, a fully unlocked Custom Tables & Oracle Builder (for Itch builds), a rebuilt dice roller, major accessibility upgrades, and stability across desktop platforms.

## Highlights
- **Random Events reworked:** No default auto-roll on Meaning Tables. Choose tables manually via the slide-out panel for tighter narrative control.
- **Ask a Question:** Add a short prompt before a Fate roll to anchor results in story context.
- **Dice Roller 2.0:** Rewritten engine with complex formulas, parentheses, rerolls, exploding dice, drag-to-reorder layout, and import/export of saved formulas.
- **Custom Tables & Oracle Builder:** Create, edit, link, and organize Meaning Tables, Event Focus, and Scene Adjustments. Import/export *CSV, JSON, PSV, TXT, Foundry VTT*; 3,000+ icons included (from FontAwesome!).
- **Search / Like / Filter Meaning Tables:** Realtime search, favorites, and tag filters for faster lookups.
- **User Tables folder (included):** Drop properly formatted *JSON* into `user_tables/` and it loads on next app launch. Import also available in-app.
- **Tablet/Desktop layout:** Draggable panels and split views on key screens for better multi-pane workflows.
- **Accessibility & UI:** Improved semantics, keyboard navigation, screen reader support, larger text scaling, and higher-contrast options.
- **New UI languages:** Interface localized in *German, Italian, French, and Spanish*. (Official tables ship in English and Brazilian Portuguese; you can import/share tables in any supported language.)
- **Stability:** Significant fixes across Windows, macOS, and Linux for smoother performance and more reliable file handling.
## Fixes & Improvements
- **Dice Roller:** Resolved parser edge cases; eliminated loops/memory leaks; clarified UI; stabilized saved formulas; correct crit counts (Fudge/D66/%).
- **Meaning Tables & Random Events:** Proper log ordering and full descriptions; instant search/tag-filter updates; multi-table pairing supported when linked.
- **Journals & Storage:** Safer saves/loads; clearer file locations; more reliable sync on supported platforms.
- **Scenes & Lists:** Autosave when navigating; Markdown notes for lists; optional “never roll *Choose* if the list has entries.”
- **Platform fixes:** Improved Windows file-path handling; better Linux build behavior; reworked iCloud sync path for Apple ecosystem builds (App Store only).
## Notes for Itch.io builds
- **No IAP on Itch.io:** All features are included and unlocked.
- **macOS:** iCloud Sync is not available on the Itch build; you can select any custom save location (including an iCloud Drive folder).
- **Minimum macOS hardware:** Apple Silicon M1 with 8 GB RAM recommended; Intel macOS 10.15+ supported (untested).
- **Linux baseline:** Updates coming to the Linux build soon
- **macOS and Linux**: These builds are pending release for version 1.5. Stay tuned!
If you have feedback or run into issues, reach out here or via the Mythic Discord. Enjoy the update!
