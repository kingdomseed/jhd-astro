import type { CollectionEntry } from "astro:content";

type BlogEntry = CollectionEntry<"blog">;
type ResourceEntry = CollectionEntry<"resources">;

export type V2BlogCategoryName = BlogEntry["data"]["category"];
export type V2ResourceCategoryName = ResourceEntry["data"]["category"];

export const slugifyCategory = (value: string) =>
  value.toLowerCase().replace(/\s+/g, "-");

export const v2BlogCategoryMeta: Record<
  V2BlogCategoryName,
  { description: string; icon: string }
> = {
  "Release Notes": {
    description: "Version notes, app changes, and what players can expect next.",
    icon: "fa-solid fa-newspaper",
  },
  "Behind the Scenes": {
    description: "Design process, tradeoffs, and the work behind the table.",
    icon: "fa-solid fa-pen-nib",
  },
  Guides: {
    description: "Practical walkthroughs for Mythic workflows and app systems.",
    icon: "fa-solid fa-compass",
  },
  Community: {
    description: "Player feedback, roadmap signals, and shared table stories.",
    icon: "fa-solid fa-people-group",
  },
  Announcement: {
    description: "Important product and publishing updates.",
    icon: "fa-solid fa-bullhorn",
  },
};

export const v2ResourceCategoryMeta: Record<
  V2ResourceCategoryName,
  {
    label: string;
    shortLabel: string;
    title: string;
    summary: string;
    icon: string;
    anchor: string;
  }
> = {
  "start-here": {
    label: "Start Here",
    shortLabel: "Start",
    title: "Open the table without losing momentum.",
    summary:
      "Install the apps, set up your first journal, and learn the core Mythic rhythm.",
    icon: "fa-solid fa-compass",
    anchor: "#start-here",
  },
  "adventure-journals": {
    label: "Adventure Journals",
    shortLabel: "Journals",
    title: "Keep the story legible between sessions.",
    summary:
      "Capture scenes, protect exports, and recover quickly when something feels off.",
    icon: "fa-solid fa-book-journal-whills",
    anchor: "#adventure-journals",
  },
  "dice-roller": {
    label: "Dice Roller",
    shortLabel: "Dice",
    title: "Turn dice syntax into repeatable tools.",
    summary:
      "Save formulas, import collections, and shape rolls around the system at your table.",
    icon: "fa-solid fa-dice-d20",
    anchor: "#dice-roller",
  },
  "custom-tables": {
    label: "Custom Tables",
    shortLabel: "Tables",
    title: "Build your own oracle shelves.",
    summary:
      "Create, organize, link, import, and export tables for improvising on the fly.",
    icon: "fa-solid fa-table-list",
    anchor: "#custom-tables",
  },
  advanced: {
    label: "Schemas & Deep Dives",
    shortLabel: "Schemas",
    title: "Reference shapes for exports and integrations.",
    summary:
      "JSON structures, registry notes, and implementation details for deeper tooling.",
    icon: "fa-solid fa-code-branch",
    anchor: "#schemas",
  },
};
