---
title: "A Guide to the Mythic Journals"
summary: "Create, import, and export journals; understand how Chaos Factor, Scenes, Lists, and Log Entries map to Mythic."
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
The adventure journal is your saved game — a single place where you record what happened, why it happened, and what changed. In the app it’s stored as JSON; you can export it as JSON (for round‑trip) or Markdown (for reading and sharing alongside your notes).

## What it contains (at a glance)

- Chaos Factor timeline: the dial (1–9) at key moments; snapshot it at the start of each scene
- Scenes: short titles + summaries that mark the beats of play
- Oracle log: Fate questions (odds, roll, outcome) and Meaning Table results with your interpretation
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
- Backups: the app automatically creates backups; you can also export to your preferred backup location.
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

- Journal: Your campaign/session container. Holds the Chaos Factor, Scenes, Adventure Lists (Characters/Threads/Features), and the game Log.
- Chaos Factor (CF): Core Mythic dial (1–9) controlling unpredictability. Updated over time (typically scene-to-scene) and affects Scene Checks and oracles.
- Scenes: Narrative segments. Scene type (Expected/Altered/Interrupt) is captured as a Log Entry from a Scene Check, not stored on the scene itself.
- Adventure Lists: The three lists used by Mythic for inspiration and events:
  - Characters: NPCs, factions, personas that can appear in events.
  - Threads: Plotlines/objectives that can be advanced/closed or referenced by events.
  - Features: Places, objects, or concepts that color events and context.
- Log Entries: Time-ordered record of oracles and checks: Fate Chart/Check answers, Scene Checks, Random Events (Event Focus + Meanings), etc.

## Basic workflow

1) Start with the empty template linked above. Make a copy and rename it from `journal_template.json` to something meaningful (for example: `my-adventure-2025.json`).
   - Keep the `.json` extension—this helps the app and your system recognize the file.
   - Tip: Add a date or campaign name to avoid overwriting old backups.
2) Fill in `JournalName`, keep `ChaosFactor` in 1–9, and add Scenes/Lists as you play.
3) Add Log Entries as you make Fate Chart/Check rolls, Scene Checks, and Random Events.
4) When a scene begins, snapshot the current CF into `SceneChaosFactor`. Record scene type outcomes (Expected/Altered/Interrupt) via a Scene Check log entry.
5) Export your current journal from Settings → Files (JSON for round‑trip, Markdown for sharing/readability).

## Tips

- Each journal typically represents a single adventure.
- Each journal file includes its own Lists, Scenes, and log data. 
- Sharing own mobile opens a Share sheet that makes it easy to send to your preferred location or share with friends.
- Journals can be exported as Markdown for use in other apps

### Reassurance for non‑tech folks

- You won’t break anything by trying. If a file doesn’t look right, the app will tell you before importing.
- You never need to edit JSON by hand—use the app to create and export.
- If you do peek inside a JSON file, it’s just readable text. Close it without saving if you’re unsure.
