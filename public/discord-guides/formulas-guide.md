# Shorter
Saved Formulas let you build once and roll fast. Type an expression in the Dice Roller (like `2d20kh+5` or `6d6#>=5`), hit Roll, then Save to keep it. Use Manage to rename, reorder, import, or export sets. You can import starter packs (D&D, PF2, Blades, etc.) and share your own via a single JSON file.

# Longer
The Dice Roller is based upon the Dart Dice Parser by Advenutersmith understands clear, readable expressions. A few you’ll use all the time:

- Roll dice: `XdY` (e.g., `1d20`, `2d6`, `1d%`) • Fate dice: `4dF` • D66: `1D66`
- Keep/Drop: `kh/kl` and `-H/-L` (e.g., `3d6-L`, `3d20kh2`)
- Explode/Compound: `!` and `!!` (add `o` for once) (e.g., `4d6!`, `5d10!!o>=8`)
- Reroll: `r` and `ro` (e.g., `4d6r1`, `4d6ro<2`)
- Count successes: `#` (e.g., `6d6#>=5`)
- Math & grouping: `+`, `-`, `*`, parentheses

Workflow
1) Type a formula → Roll → see total and details (kept/dropped, explosions, counts).
2) Tap Save to store the current expression; give it a short name and description.
3) Tap Manage to reorder, rename, delete, import, or export your Saved list.

Import/Export
- Import merges a JSON file into your list. It’s the easiest way to grab system starting points from friends or the website.
- Export writes your current list to JSON for backup/sharing.
- Manual placement (advanced): if you drop a file by hand instead of using Import, the filename must be exactly `saved_formulas.json`.

No programming required
- The file format is just JSON text. You don’t need to edit it by hand.
- If you do want the fields for tools/automation, see the Formula Schema.

Starting points (ready to import)
- D&D 5e, Pathfinder 2e, Blades in the Dark, Shadowrun, Savage Worlds, Year Zero, Vampire V5, PbtA, Fate Core, CoC 7e, Cypher, Warhammer d6, Lancer, Ironsworn/Starforged, DCC, TOR. Grab them from the Resources → Dice Formulas pages.

Deep dives (Resources on the site)
- Getting Started with the Dice Roller — basics and layout
- Dice Formulas & Customization — patterns, tips, and system recipes
- Saving & Managing Dice Formulas — import/export, backups, best practices
- Formula Schema — field names for tooling and integrations

More help and downloads: https://www.jasonholtdigital.com/resources/dice-formulas-and-customization/

Credit: Syntax powered by Adventuresmith’s dart_dice_parser — grammar and docs:
https://pub.dev/packages/dart_dice_parser
