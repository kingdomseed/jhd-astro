---
fullArticleAvailable: true
title: "Sharing Adventure Journals"
summary: "How to export a Journal as JSON or Markdown, and how to import a Journal file."
category: "adventure-journals"
order: 1
icon: "fa-slab fa-regular fa-share-nodes"
duration: "7 min read"
updated: "2026-10-09"
tags: ["journals", "sharing", "export", "import"]
keywords:
  - Share journals
  - Export
  - Import
  - JSON
related:
  - guide-to-the-mythic-journals
  - writing-and-organizing-scenes
---

You can save a Journal as a file, send that file to someone, and bring a Journal file into the app. All of it is in **Settings**, on the **Files** tab, under **Export Journal** and **Import Journal**.

## Export a Journal

Export works on the Journal you have open.

- **Export journal as JSON** saves the whole Journal. It is the only export the app can read back. The app keeps backup copies from a storage move or a restore, not from an ordinary save; the exception is a Journal saved in iCloud that has conflicting versions, where saving can make the app try to copy the other versions to separate backup files.
- **Export journal as Markdown** saves a copy for reading. It has the Chaos Factor, your scenes, your Characters, Threads, and Features with their notes, and every Log Entry. It leaves out Custom Lists, Thread Progress Tracks, and Keyed Scenes. A Markdown file cannot be imported.

The file is named after the Journal. On iOS and Android the share sheet opens. On Windows, macOS, and Linux a save dialog opens.

## Import a Journal

1. Select **Import journal from file** and pick a `.json` file.
2. **Review Journal Import** opens. It shows the Journal's details and, when there are any, **Problems found** and **Notes**.
3. Select **Import Journal**. The imported Journal becomes the open Journal.

The Journal's name comes from inside the file, not from the file's name.

### If the name is already in use

The sheet shows **Journal Name Conflict** with two choices.

- **Rename imported journal** is selected first. The app suggests the same name with "copy" added. Select **Rename and Import**.
- **Overwrite existing journal** replaces the Journal already in the app. Tick **I understand this will overwrite the existing journal**, then select **Overwrite and Import**. The app keeps no copy of the Journal it replaces, so export that Journal first if you might want it back.

### If the file cannot be imported

- **Unable to Import Journal** means a single Journal file lacks something the app needs: a Journal name, a Chaos Factor from 1 to 9, or the scenes, characters, threads, or features list. The sheet names what is missing. Older files that use campaignName do not need the features list. A list that is present but empty or null gives a warning instead of this error; a value that is not a list is an error. A file containing several Journals is imported another way, without this sheet.
- **Update required: update Mythic GME to open this Journal.** means a newer version of the app saved the file. Update the app, then import again.

A file in the app's older format still imports. The app converts it.

### A file that holds several Journals

A file that holds a list of Journals is imported at once, with no review. If a name is in use, the app adds a number to the imported Journal's name, such as " (1)", so a list never overwrites a Journal. The app reads every entry in the file before it saves any of them. If any entry cannot be read as a Journal, such as one saved in a newer format this version of the app cannot read, nothing from the file is imported, while an entry that is only missing some details can still be imported with default values. If a Journal fails while it is being saved, the app skips it, imports the rest, and tells you how many failed.

## Restore from File is not import

**Restore from File** is in a Journal's **More options** menu. It replaces that Journal with the contents of a `.json` file after you confirm, and keeps the Journal's file name. In the iOS, Android, Windows, macOS, and Linux apps, the app keeps a backup copy of the Journal it replaced. In the web demo, it keeps no copy, so export the Journal first if you might want it back.

## Linux and the web demo

On Linux, import and export need xdg-desktop-portal and a portal backend.

In the web demo, Journals are saved in the browser. Export JSON to back up or move them.
