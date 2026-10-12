---
title: "Troubleshooting"
summary: "Fix common issues and learn what to include when reporting a bug."
category: "adventure-journals"
order: 2
icon: "fa-slab fa-regular fa-life-ring"
duration: "Quick checklist"
updated: "2026-10-09"
tags: ["troubleshooting", "support"]
keywords:
  - Troubleshooting
  - Support
  - Help
---

## I need a backup of my Journal

The app does not back up a Journal during an ordinary save. To keep your own backup, open the Journal, go to **Settings**, then **Files**, and select **Export journal as JSON**.

The app keeps a backup copy when it moves your Journals to another storage location or into or out of iCloud, and when a restore replaces a Journal in the iOS, Android, Windows, macOS, or Linux app; if a Journal saved in iCloud has conflicting versions, the app may also try to copy the other versions to separate backup files when it saves that Journal. A restore in the web demo keeps no copy.

## The Restore from Backup list is empty

That is normal. The app keeps backup copies from a storage move or a restore, not from an ordinary save; the exception is a Journal saved in iCloud that has conflicting versions, where saving can make the app try to copy the other versions to separate backup files. When copies are listed, check the date on a copy before you restore it.

In folder storage, the app can delete backup copies older than 7 days when the device is low on memory. It does not delete the copies it keeps when a restore replaces a Journal. The app does not delete backup copies kept in iCloud.

## Restoring a Journal

**Restore from Backup** and **Restore from File** are in each Journal's **More options** menu, in **Settings**, **Files**. Both replace the Journal after you confirm. In the iOS, Android, Windows, macOS, and Linux apps, the app keeps a backup copy of the Journal it replaces. Restore from Backup is not in the web demo. Restore from File is, and there it keeps no copy of the Journal it replaces.

## I created a Journal and an older one is gone

If you create a Journal with a name that is already in use, tick the box, and confirm, the new empty Journal replaces the existing one. The old Journal's contents are deleted, and the app makes no backup copy of them. This does not remove backup copies the app made earlier. Upper and lower case do not make a name different.

## Messages about Journals

- **Update required: update Mythic GME to open this Journal.** A newer version of the app saved this Journal. Update the app.
- **You cannot delete your only Journal. Create another Journal first.** The app always keeps one Journal. Create another Journal, then delete this one.
- **The Journal could not be imported.** When an import fails, the app shows this message or a more specific one, such as **Select a .json Journal file.** or **This file is not valid JSON.** The file must be a `.json` file, must be valid JSON, and must hold a Journal.
- **Unable to Import Journal**. The sheet lists what the file lacks under **Problems found**.

## Storage Access Needed

A full screen with this title means the app's storage is not ready. Select **Choose Storage Folder**, or select **Use App Documents** to use the app's own folder.

A notice about a folder you chose earlier means the app could not open that folder and switched to its own default folder. The app stays on the default folder, even after a restart, until you change it. **Reconnect previous folder** switches back only if the app can open that folder. Until then, what you play is saved in the default folder. Select **Reconnect previous folder**, **Choose folder**, or **Use app default**.

## A Journal named "(Conflicted copy ...)" appeared

This happens in folder storage. If a Journal's file changes outside the app while you have unsaved changes, the app opens the version from the file and saves your own changes as a separate Journal. Its name is the Journal's name followed by "(Conflicted copy", the device name, and the date and time. Look for it in the list of Journals.

## iCloud sync

**Use iCloud Sync** is on iPhone and iPad and on some Mac versions of the app. It is not in the web demo. The app marks it as experimental.

- When sync is on, the section shows **iCloud Status:** and a **Force Sync** button.
- If the status shows a problem, select the help icon beside the switch. If iCloud is not available, **Set up iCloud sync** opens with the steps to turn on iCloud Drive. If sync failed, **iCloud Sync Error** opens and suggests what to do: if **Use iCloud Sync** is off, turn it on again; if it is on, use **Force Sync** to reload the list of Journals from iCloud.
- Turning **Use iCloud Sync** on or off copies your Journals to the other location. The app asks you to confirm first and tells you what is copied and what is replaced. After the switch is complete, the app may remove an original that it copied if the original has not changed since. A Journal in iCloud that cannot be read may be skipped.
- If the destination has a Journal with the same file name, the app backs that one up and then replaces it.
- While sync is on, **Change Location** and **Reset Location** are disabled.

## Reset Location

**Reset Location** moves every Journal back to the app's own folder. If your Journals are in another folder, the app asks you to confirm first. If they are already in the app's own folder, nothing moves and the app does not ask.

## Linux

File dialogs need xdg-desktop-portal and a portal backend. When the file window cannot open, import, export, and Restore from File show "The app could not open the file window. Install xdg-desktop-portal and a portal backend, then try again."

## The web demo

In the web demo, Journals are saved in the browser on that device. The demo cannot choose folders or use cloud sync. Clearing site data or using another browser may remove the Journals. Export JSON to keep them.

## Undo

Undo restores the last thing you deleted: an Adventure Log entry, a Scene, a custom Meaning Table, a custom Event Focus table, a built-in table you edited, or a list you cleared. The app remembers the last 20. Opening another Journal clears this history. A cleared Custom List cannot be restored if the list itself no longer exists.

- In the iOS and Android apps, shake the device. When the app asks, select **Undo**.
- On a Mac, press Cmd+Z.
- On Windows or Linux, press Ctrl+Z.

## Report a bug

Open **Support**. Under **Contact Support** you can select **Email Support**, **Visit Support Website**, or **Join Our Discord Community**.

Include the version line from the Support screen. It gives the version and the build number. The copy icon beside it copies the build number only.
