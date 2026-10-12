---
fullArticleAvailable: true
title: Journal Schema
summary: "Reference for the Journal JSON file format."
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
downloads:
  - label: "Legacy Schema 1 Journal Validator (JSON)"
    href: "/downloads/journal.schema.json"
    format: "JSON"
  - label: "Empty Template"
    href: "/downloads/journal_template.json"
    format: "JSON"
  - label: "Filled Sample"
    href: "/downloads/journal_sample.json"
    format: "JSON"
related:
  - guide-to-the-mythic-journals
  - sharing-adventure-journals
---
## Overview

This page documents the canonical keys for the Mythic Journal export format and how each field is used. If you’re building tools or validating exports, start here. For a practical walkthrough of creating and managing journals, see [A Guide to the Mythic Journals](/resources/guide-to-the-mythic-journals/).

Plain English: You don’t need to know code to use journals. “JSON” is just a structured text file the app reads and writes, and the “schema” below is a rulebook for tools to validate those files. If you’re not building tooling, you can safely skip the details here.

## Downloads

See the Downloads section at the bottom of this page for files. The JSON schema download there is a legacy schema 1 validator that expects PascalCase top-level keys such as `JournalName`. It is not a validator for the camelCase schema 5 files the app exports today. For current key names such as `journalName`, use the schema 5 field reference on this page.

Tip: After downloading the empty template, make a copy and rename it from `journal_template.json` to a meaningful name (for example: `my-adventure-2025.json`). Keep the `.json` extension. The template is a legacy schema 1 file with PascalCase keys, so the Journal's name comes from the `JournalName` field inside the file, not from the file's name. Set `JournalName` before you import. Files the app exports today use camelCase keys such as `journalName`.

## Field reference (canonical export keys)

The app writes the journal's declared top-level fields in camelCase, for example journalName, chaosFactor, scenes, and logEntries. Known older keys, such as the PascalCase JournalName, are still read from old files and converted to their current names. When an imported file comes from a compatible newer schema version, its unknown top-level fields can be written back with their original spelling. This applies only to top-level fields, not to unknown fields inside scenes or log entries.

- `journalName` (string): Your journal/campaign name.
- `chaosFactor` (int 1–9): Current CF used for checks and event odds.
- `scenes` (array of objects): Each scene has:
  - `title` (string): Optional title.
  - `sceneSummary` (string): Brief description.
  - `sceneChaosFactor` (int 1–9, default 5): CF at the scene’s start (snapshot).
  - `sceneAdjustments` (array of objects): Structured adjustment records with `range`, `description`, `result`, `additionalAdjustments`, and `droppedAdjustment`.
  - The app saves a Scene Adjustment roll as its own log entry, with rollType Scene Adjustment and a sceneAdjustment object. It writes an empty sceneAdjustments list on every scene it creates, and that list is not a place for free text.
  - `createdAt` (ISO8601 string): When the scene was created.
- characters (array): names used when an Event Focus result such as NPC Action calls for a Character. Export is strings, and an empty slot is an empty string. Legacy object forms (`Character` or `character`) are accepted on import. In files with schemaVersion 0–2, a Choose placeholder becomes an empty string; from schema 3 onward, Choose is read as an actual name.
- `threads` (array<string>): Plotlines used for Mythic results like “Close a Thread” or “Move Toward a Thread”. An empty slot is an empty string; legacy object forms use `Thread` or `thread`.
- `features` (array<string>): Locations/objects/concepts that flavor events and context. An empty slot is an empty string; legacy object forms use `Feature` or `feature`.
- `activatedThreadSections` / `activatedCharacterSections` / `activatedFeatureSections` (int, default 1): How many 5‑item sections are active in each list. The app shows 1–5 sections, so up to 25 items per list are visible and used for rolls. The 25-item figure is the display and roll capacity, not a documented import limit. Older files use the PascalCase names, such as `ActivatedThreadSections`.
- `logEntries` (array of objects): Oracle history. Common fields:
  - rollType is a free-form string, not a closed list of values. Examples the current app produces: Fate Chart, Fate Check, Scene Check, Scene Adjustment, Random Event, Event Focus, Meaning Table, Narrative, Keyed Scene, Discovery Fate Question, and General dice roll. A missing rollType is read as Unknown.
  - question (string): the text typed for a Fate question. A Scene Check entry stores the fixed text Scene Check here, and its outcome holds the scene label in the app's language, for example Expected Scene in English.
  - `odds` (string): Odds descriptor (e.g., Likely, 50/50).
  - `chaosFactor` (int): CF at the time of the roll.
  - `rollResult` (int): d100 for Fate Chart; total for Fate Check.
  - `outcome` (string, default Unknown): The result text, for example Yes or Exceptional No for a Fate question. For a Scene Check it holds the scene label in the app's language. The schema does not limit this field to a fixed list of values.
  - `isSceneCheck` (bool): True when the entry is a Scene Check result.
  - `timestamp` (ISO8601 string): When it happened. Omitted when it has no value.
  - Optional: `individualDieResults`, `modifierValue`, `modifiedTotal` (Fate Check details),
    `randomEvent`, `eventFocus`, `sceneAdjustment`, `sceneAdjustmentRoll`.
  - `randomEvent` (object): `eventFocus`, `meanings` (a map of string labels to string values), `meaningDescriptions`, and `linkedResults`, plus the optional ties `characterResult`, `threadResult`, and `featureResult` and an optional `eventFocusRoll`.
  - Other optional log fields are eventFocusRoll, sceneCheckResult, meaningTableName, discoveryExplanation, diceFormula, and diceResults. meaningDescriptions and discoverySubRolls are always written as lists and may be empty. diceSuccessCount, diceFailureCount, diceCriticalSuccessCount, and diceCriticalFailureCount are also optional. Optional log fields are omitted when they have no value.
- listNotes (object): free-form notes per list, in characterNotes, threadNotes, and featureNotes. It is optional in a file you import, and an export omits it when it has no value.
- schemaVersion (int, current = 5): the data schema version, used for migration. Exports also write minReaderVersion (int), and the app refuses a file whose minReaderVersion is higher than 5. An ordinary export writes schemaVersion 5. A file from a compatible newer schema version may keep its higher schemaVersion when written back, while minReaderVersion stays 5.
- Exports also contain customLists, threadProgressTracks, keyedScenes, rev, base, and minReaderVersion. lastCharacterRoll, lastThreadRoll, and lastFeatureRoll appear only when they have a value.

### Notes on alignment with Mythic

- Scene type is derived from the log: a scene has no outcome field. A Scene Check log entry has `isSceneCheck` set to true and stores the scene label in `outcome` and `sceneCheckResult`, in the app's language (for example Expected Scene in English).
- Random Events: Use `randomEvent.eventFocus`, `meanings`, and optional ties (`characterResult`, `threadResult`, `featureResult`).
- Chaos Factor shifts: When CF changes for a scene, set `sceneChaosFactor` on the scene and capture the rationale in a log entry, not in `sceneAdjustments`.
- Lists for inspiration: Adventure Lists drive event connections; expand with the `activated*Sections` fields as needed (up to 25 visible items per list).

## Minimal skeleton

This is a minimal example with the current schema 5 key names. It is not a complete export: a file exported by the app contains more fields. It is also different from the downloadable `journal_template.json`, which is a legacy schema 1 file with PascalCase keys.
```json
{
  "journalName": "My Adventure",
  "chaosFactor": 5,
  "scenes": [],
  "characters": [],
  "threads": [],
  "features": [],
  "logEntries": [],
  "schemaVersion": 5,
  "minReaderVersion": 5
}
```

To import a Journal, the file needs a recognized Journal name key (`journalName`, or `JournalName` in older files) and a Chaos Factor key (`chaosFactor` or `ChaosFactor`). Many other fields have default values in the data format, but the import screen runs its own checks, which can differ from those defaults.
