---
fullArticleAvailable: true
title: "A Guide to the Mythic Journals"
summary: "What a Journal holds, and how to create, import, and export Journals."
category: "adventure-journals"
order: 0
icon: "fa-slab fa-regular fa-book-open"
duration: "6 min read"
updated: "2025-09-21"
tags: ["journals", "getting-started", "import", "export"]
keywords:
  - Journals
  - Getting started
  - Import
  - Export
  - Mythic
downloads:
  - label: "Empty Template"
    href: "/downloads/journal_template.json"
    format: "JSON"
  - label: "Filled Sample"
    href: "/downloads/journal_sample.json"
    format: "JSON"
  - label: "JSON Schema"
    href: "/downloads/journal.schema.json"
    format: "JSON"
related:
  - writing-and-organizing-scenes
  - sharing-adventure-journals
  - saving-and-managing-dice-formulas
---

# What is an adventure journal
A Journal is the app's saved record of one adventure or campaign: a single place where you record what happened, why it happened, and what changed. In the app it’s stored as JSON; you can export it as JSON (for round‑trip) or Markdown (for reading and sharing alongside your notes). Markdown export is for reading only. It leaves out Custom Lists, Thread Progress Tracks, and Keyed Scenes, and the app cannot import it.

## What it contains (at a glance)

- Chaos Factor timeline: the dial (1–9) at key moments. The app saves the Journal's current Chaos Factor on each new scene. Editing an earlier scene does not change the Journal's Chaos Factor, and only your latest scene sets it.
- Scenes: short titles + summaries that mark the beats of play
- Adventure Log: Fate questions (odds, roll, outcome) and Meaning Table results. To add your own interpretation, tap the add button in the Adventure Log header, write it in the Add Narrative sheet, and tap Add to Log.
- Adventure Lists: Characters, Threads, and Features you reference and update between scenes
- Bookkeeping: end‑of‑scene adjustments (CF up/down) and any list changes

## Use it outside the app

The app stores your journal as JSON. For reading and sharing outside the app, export it to Markdown and paste that into your notes tool (Apple Notes, Obsidian, Notion, Google Docs). For round‑trip editing/importing back into the app, use the JSON export. Keep one file per campaign.

- Before session
  - Create/open your journal document
  - Set Journal Name and current Chaos Factor
  - Seed a few Threads and Characters you expect to see
- During play (each scene)
  - Scene header: number, title, and CF at scene start
  - Expectation: Expected, Altered, or Interrupt (from the Scene Check)
  - Fate questions: write the question, pick odds, record roll + outcome, add a one‑line interpretation
  - Random Events: record Event Focus + Meaning words and what they mean in context; note any ties (Character/Thread/Feature)
  - Notes: a few sentences of what happened (don’t write a novel unless you want to)
- Between scenes (bookkeeping)
  - Adjust CF: down if you were in control; up if things spun out
  - Update Lists: add/remove/promote Characters/Threads/Features as the story shifts

> Tip
> Export Markdown to keep a readable campaign log in your notes app, and use JSON exports/imports when you need round‑trip fidelity with the app. Consistency beats complexity.

## A simple scene template (copy/paste)

```markdown
### Scene N: Title (CF: X at start)

- Expectation: Expected | Altered | Interrupt
- Fate Question: … (Odds: Likely/50–50/… → Roll: 43 → Outcome: Yes) — Interpretation: …
- Random Event (if any): Focus: … • Meaning: Action=…, Subject=… — Interpretation: …
- Notes: 2–4 sentences about what actually happened

End‑of‑scene bookkeeping
- CF adjustment: −1 | +1 (reason)
- Lists changes: +Character …, +Thread …, −Feature …
```

## File organization & backups

- One file per campaign or adventure
- Names you can scan: `my-adventure-2025-09.md` or `journal-elderspire.md`
- Backups: Saving a Journal does not make a separate backup of it, so go to Settings, then Files, and use Export journal as JSON to keep your own copy. The app also tries to keep a backup copy when it moves your Journals to another storage location or into or out of iCloud, and, in the iOS, Android, Windows, macOS, and Linux apps, when a restore replaces a Journal. A restore in the web app keeps no copy. Exception: when a successful iCloud save finds unresolved conflicting versions of a Journal, the app tries to copy those versions into backups before marking them resolved. An ordinary save with no conflict makes no backup.
- Exports: use app → Settings → Files to export JSON (round‑trip) or Markdown (shareable)

## No programming required

- If words like “JSON” or “schema” sound technical—don’t worry. You do not need to learn programming to use journals.
- JSON is simply a structured text file. The app creates, opens, and exports it for you. Think of it like a neatly formatted document the app understands.
- A “schema” is just a rulebook that helps tools check “does this file look right?”. It’s optional and aimed at power users or third‑party tools. You can ignore it.

## Manage journals in the app

- Create, import, and export journals from the Settings → Files section.
- Each journal is self-contained: it maintains its own Chaos Factor, Scenes, Adventure Lists (Characters/Threads/Features), List Notes, and Log Entries.
- Use multiple journals to keep different campaigns/sessions separate; switching journals does not mix their lists or logs.

## How it maps to Mythic

- Journal: Your campaign/session container. Holds the Chaos Factor, Scenes, Adventure Lists (Characters/Threads/Features), and the game Log. A Journal also holds your Custom Lists, Thread Progress Tracks, and Keyed Scenes.
- Chaos Factor (CF): Core Mythic dial (1–9) controlling unpredictability. Updated over time (typically scene-to-scene) and affects Scene Checks and oracles.
- Scenes: Narrative segments. Scene type (Expected/Altered/Interrupt) is captured as a Log Entry from a Scene Check, not stored on the scene itself.
- Adventure Lists: Characters, Threads, and Features. Threads and Characters are the two Lists in the core Mythic rules, and Features is the third List the rules add for playing a prepared adventure.
  - Characters: NPCs, factions, personas that can appear in events.
  - Threads: Plotlines/objectives that can be advanced/closed or referenced by events.
  - Features: Places, objects, or concepts that color events and context.
- Log Entries: Time-ordered record of oracles and checks: Fate Chart/Check answers, Scene Checks, Random Events (Event Focus + Meanings), etc.

## Basic workflow

1) For ordinary play you don't need the template. Go to Settings, then Files, tap Create New Journal, and type a name. If the name is already in use, the app does not replace that Journal unless you separately confirm the overwrite. If you confirm, it creates an empty Journal with that name and the existing Journal's contents are replaced. As you play, you add Scenes and Lists in the app, and the app records your rolls in the Adventure Log.
2) The app saves the Journal's current Chaos Factor on each new scene. Editing an earlier scene does not change the Journal's Chaos Factor, and only your latest scene sets it. Fate rolls, Scene Checks, and Random Events are saved to the Adventure Log automatically, so you don't need to record them yourself.
3) Optional manual JSON editing: the empty template linked above, `journal_template.json`, uses the legacy import format with PascalCase keys. The app can import it, but it is not a sample of the app's current export, which uses different key names. Make a copy and rename it to something meaningful (for example: `my-adventure-2025.json`).
   - Keep the `.json` extension—this helps the app and your system recognize the file.
   - Tip: Add a date or campaign name to avoid overwriting old backups.
   - Fill in `JournalName` and keep `ChaosFactor` in 1–9. The import requires both.
   - If you add Scenes by hand, set each Scene's `SceneChaosFactor` yourself.
4) Export your current journal from Settings → Files: JSON for a machine-readable copy, Markdown for sharing/readability.

## Tips

- Each journal typically represents a single adventure.
- Each journal file includes its own Lists, Scenes, and log data. 
- On iOS and Android, exporting opens the share sheet so you can send the file where you like. On Windows, macOS, and Linux it opens a save dialog instead.
- Journals can be exported as Markdown for use in other apps

### Reassurance for non‑tech folks

- When you import a file that holds one Journal, the app shows a review sheet first and lists any problems under Problems found. A file that holds a list of Journals is imported at once with no review, and a Journal whose name is already in use gets a number added to its name.
- Overwrite existing journal is a choice you make on import. It replaces the Journal already in the app, and this import keeps no copy of it, so export that Journal first if you might want it back.
- You never need to edit JSON by hand—use the app to create and export.
- If you do peek inside a JSON file, it’s just readable text. Close it without saving if you’re unsure.
