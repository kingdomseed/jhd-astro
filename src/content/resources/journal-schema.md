---
title: Journal Schema
summary: Field-by-field reference for the Mythic Journal JSON format with a minimal example and local downloads.
category: advanced
order: 1
icon: fa-slab fa-regular fa-link
duration: Reference
updated: 2025-02-01
tags: ["schema", "journals", "reference", "download"]
keywords:
  - Journal schema
  - JSON
  - Download
  - Mythic journal
---
## Overview

This page documents the canonical keys for the Mythic Journal export format and how each field is used. If you’re building tools or validating exports, start here. For a practical walkthrough of creating and managing journals, see [A Guide to the Mythic Journals](/resources/guide-to-the-mythic-journals/).

Plain English: You don’t need to know code to use journals. “JSON” is just a structured text file the app reads and writes, and the “schema” below is a rulebook for tools to validate those files. If you’re not building tooling, you can safely skip the details here.

## Downloads

- Journal Schema (JSON): [Download](/downloads/journal.schema.json)
- Empty Template: [Download](/downloads/journal_template.json)
- Filled Sample: [Download](/downloads/journal_sample.json)

Tip: After downloading the empty template, make a copy and rename it from `journal_template.json` to a meaningful name (for example: `my-adventure-2025.json`). Keep the `.json` extension.

## Field reference (canonical export keys)
- `JournalName` (string): Your journal/campaign name.
- `ChaosFactor` (int 1–9): Current CF used for checks and event odds.
- `Scenes` (array of objects): Each scene has:
  - `Title` (string): Optional title.
  - `SceneSummary` (string): Brief description.
  - `SceneChaosFactor` (int 1–9): CF at the scene’s start (snapshot).
  - `SceneAdjustments` (array): Results from Mythic Scene Adjustment rolls; each item has `result`, `range` [min,max], `description` (and optional nested adjustments).
  - `CreatedAt` (ISO8601 string): When the scene was created.
- `Characters` (array<string>): Names used for event ties (e.g., NPC Action, Introduce NPC). Export is strings; legacy object forms are accepted on import.
- `Threads` (array<string>): Plotlines used for Mythic results like “Close a Thread” or “Move Toward a Thread”.
- `Features` (array<string>): Locations/objects/concepts that flavor events and context.
- `ActivatedThreadSections` / `ActivatedCharacterSections` / `ActivatedFeatureSections` (int 1–5): How many 5‑item sections are active in each list (max 25 items per list).
- `LogEntries` (array of objects): Oracle history. Common fields:
  - `rollType` ("Fate Chart" | "Fate Check" | "Scene Check" | "Random Event" | etc.)
  - `question` (string): The Mythic question (not used for Scene Check).
  - `odds` (string): Odds descriptor (e.g., Likely, 50/50).
  - `chaosFactor` (int): CF at the time of the roll.
  - `rollResult` (int): d100 for Fate Chart; total for Fate Check.
  - `outcome` (string): Yes/No/Exceptional Yes/Exceptional No, or scene outcome for Scene Check.
  - `isSceneCheck` (bool): True when the entry is a Scene Check result.
  - `timestamp` (ISO8601 string): When it happened.
  - Optional: `individualDieResults`, `modifierValue`, `modifiedTotal` (Fate Check details),
    `randomEvent` (Event Focus + meanings and ties), `eventFocus`, `sceneAdjustment`, `sceneAdjustmentRoll`, `meaningDescriptions`.
- `ListNotes` (object, optional): Free‑form notes per list: `CharacterNotes`, `ThreadNotes`, `FeatureNotes`.
- `SchemaVersion` (int, current = 1): Data schema version for migration.

### Notes on alignment with Mythic

- Scene type is derived from the log: Record “Expected/Altered/Interrupt Scene” via a `Scene Check` log entry’s `outcome` rather than on the scene object.
- Random Events: Use `randomEvent.eventFocus`, `meanings`, and optional ties (`characterResult`, `threadResult`, `featureResult`).
- Chaos Factor shifts: When CF changes for a scene, set `SceneChaosFactor` on the scene and capture rationale in `SceneAdjustments` or a log entry.
- Lists for inspiration: Adventure Lists drive event connections; expand with `Activated*Sections` as needed (max 25 items per list).

## Minimal skeleton
```json
{
  "JournalName": "My Adventure",
  "ChaosFactor": 5,
  "Scenes": [],
  "Characters": [],
  "Threads": [],
  "Features": [],
  "ActivatedThreadSections": 1,
  "ActivatedCharacterSections": 1,
  "ActivatedFeatureSections": 1,
  "LogEntries": [],
  "SchemaVersion": 1
}
```
