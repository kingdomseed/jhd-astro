---
title: "Linux Packaging Changes — Flatpak Going Forward"
summary: "Flatpak becomes primary; AppImage discontinued; DEB/RPM discontinued"
category: "Announcement"
date: "2025-08-22"
readTime: "4 min read"
isSample: false
tags: [
  "announcement",
  "product:digital",
  "linux",
  "flatpak",
  "steam",
  "steamdeck",
  "appimage",
  "deb",
  "rpm",
  "packaging",
  "sticky"
]
keywords: ["announcement", "Flatpak", "Linux", "packaging", "Steam", "Steam Deck", "AppImage", "DEB", "RPM"]
---

> Quick update on Linux support for Mythic GME Digital.

## TL;DR
- **AppImage:** Discontinued.
- **DEB/RPM:** Discontinued.
- **Flatpak:** Primary way to install on Linux going forward.

## What’s changing
- **AppImage is dropped.** Recent builds have been unreliable. v1.4.7 will remain available as a legacy option for a while, but new updates won’t target AppImage.
- **DEB and RPM are dropped.** These formats often break across distro versions and take extra time to maintain.
- **Flatpak is the focus.** It runs on Ubuntu/Debian, Fedora/openSUSE/RHEL, Arch, and SteamOS with fewer dependency issues.

## Steam
When the game lands on Steam, it’ll ship as a **native Linux build**. Steam will run it in their Linux runtime so it works cleanly on SteamOS/Deck.

## If you’re new to Flatpak
Some distros already include Flatpak. On others (like Ubuntu), there’s a simple one‑time setup. I’ll keep clear install steps on the game page.

### Flatpak Install Guide (Linux)
Follow the steps for your distro, then install the `.flatpak` file (e.g., `mythicgmedigital.flatpak`).

#### Ubuntu 22.04 / 24.04 / Debian 12 / 11
```bash
sudo apt update 
sudo apt install -y flatpak 
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

#### Arch Linux / Manjaro / EndeavourOS
```bash
sudo pacman -S --noconfirm flatpak 
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

#### openSUSE Leap / Tumbleweed
```bash
sudo zypper install -y flatpak 
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

#### Fedora 40 / 41 / 42
```bash
sudo dnf install -y flatpak 
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

#### RHEL 9 / CentOS Stream 9 / Rocky 9 / AlmaLinux 9
```bash
sudo dnf install -y flatpak 
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

### Install the `.flatpak` file (all distros)
Assumes you downloaded `mythicgmedigital.flatpak` to your current folder. The filename may differ.
```bash
# Install for your user (recommended)
flatpak install --user ./mythicgmedigital.flatpak
# Flatpak will fetch the required runtime from Flathub if needed.
```

### Run the app
```bash
# Option A: from your desktop menu (after install)
# Option B: from the terminal
# Find the app ID (replace "mythic" with part of the app's name if needed)
flatpak list --app | grep -i mythic
# Then run it (replace <APP_ID> with the exact ID shown above)
flatpak run <APP_ID>
```

### Update / Uninstall (optional)
```bash
# Update all Flatpak apps and runtimes
flatpak update
# Uninstall the app (replace <APP_ID> as above)
flatpak uninstall <APP_ID>
# Remove unused runtimes
flatpak uninstall --unused
```

### Quick checks (troubleshooting)
```bash
# Confirm Flatpak is installed
flatpak --version
# Confirm Flathub is added
flatpak remotes
```

### Reference links
- Flatpak setup per distro: https://flatpak.org/setup/
- Installing applications: https://docs.flatpak.org/en/latest/using-flatpak.html#installing-applications
- Flathub (app catalog): https://flathub.org/
- Arch Wiki — Flatpak: https://wiki.archlinux.org/title/Flatpak
- openSUSE — Flatpak portal: https://en.opensuse.org/Portal:Flatpak
- Fedora — Flatpak setup: https://flathub.org/setup/Fedora
- Linux Mint — Flatpak setup: https://flathub.org/setup/Linux%20Mint

## I want your input
If you rely on `.deb` or `.rpm`, please reply with:
- Your distro + version
- Which format you use
- Why Flatpak wouldn’t work for you

This shift should reduce weird breakages and let updates roll out faster. Thanks for all the Linux testing and feedback — keep it coming!
