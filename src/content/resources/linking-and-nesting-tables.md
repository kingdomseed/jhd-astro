---
fullArticleAvailable: true
title: "Linking & Nesting Tables"
summary: "A link makes one roll lead to another."
category: "custom-tables"
order: 3
icon: "fa-slab fa-regular fa-link"
duration: "11 min read"
updated: "2026-10-09"
tags: ["custom-tables", "linking", "advanced"]
keywords:
  - Linking tables
  - Nesting tables
  - entryRollOn
  - tableRollOn
related:
  - custom-table-schema
  - importing-and-exporting-custom-tables
---

A link makes one roll lead to another. When a table with a link is rolled, the app can roll the linked table or list as well.

## Two kinds of link

- **Entry Links** belong to one entry. The app follows them when that entry is the result.
- **Linked Tables** belong to the whole table. When the table is rolled, the app follows the Meaning Tables in them, unless the table uses weights.

## Link one entry

On an entry, **Add links** opens **Select Entry Links**. It has two tabs.

- **Tables** lists Meaning Tables and Event Focus tables.
- **Adventure Lists** lists Characters, Threads, Features, and each Custom List in the open Journal, by name.

The Adventure Lists tab also lists PC NPCs and PC Threads. A link to one of them rolls on the matching Custom List in the open Journal. If the Journal has no such list, the link is skipped. If the list exists but is empty, the link still rolls it and shows the result Choose.

On a phone, the creation wizard keeps every link you tick for one entry. The table editor keeps them all.

## Link a whole table

**Linked Tables** is on the **Controls** tab of the table editor. **Select tables** opens **Select Paired Tables**, which offers Meaning Tables to add. It also lists any Event Focus tables that are already linked, so you can remove them, but it does not offer other Event Focus tables.

- Pick Meaning Tables. A linked Event Focus table is skipped when the table is rolled.
- When a Meaning Table is rolled, the app does not roll these links if the table uses weights, which means any entry has a weight above 1.
- On a phone, the creation wizard cannot set these links. Set them after the table is created.

## What happens when you roll

- The app follows the links of the entry that came up. It rolls a linked Meaning Table and then follows that table's own links. It rolls a linked Event Focus table once. It rolls a linked list once.
- When a table is set to roll twice, the app follows the links of the first result only.
- The app also rolls once on each Meaning Table in **Linked Tables**, unless the rolled table uses weights.
- A chain can go 10 levels below the table you rolled. Past that, the result reads "Max Depth Exceeded".
- If a link's target cannot be found, the app skips it and shows no message.

## Links in a Random Event

In a Random Event, the app rolls each Meaning Table linked to the Event Focus table. It also follows the links of the Event Focus entry that came up, which can roll Meaning Tables or lists. A link from an Event Focus entry to another Event Focus table rolls that table and shows its result with the Random Event.

## Links in a file

In a CSV file, put entry links in an `entryRollOn` column and separate several targets with semicolons. In JSON, entry links are the `entryRollOn` array on an entry, and table links are the `tableRollOn` array on the table.

A link stores a table's id or a list's name. A link to a Custom List is matched by the list's name.
