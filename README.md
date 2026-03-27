# Jason Holt Digital — Official Mythic GME 2e Apps

[![Astro](https://img.shields.io/badge/Built%20with-Astro-BC52EE.svg)](https://astro.build)
[![License](https://img.shields.io/badge/License-Open%20Source-blue.svg)](LICENSE)

> GM-less play at your fingertips. Official, licensed Mythic GME 2e companion apps for mobile and desktop.

## About

Jason Holt Digital creates premium companion applications for tabletop RPG systems. Our flagship product is the **official licensed Mythic GME 2e app suite**, bringing oracle-style solo RPG gameplay to iOS, Android, Windows, macOS, and Linux platforms.

### What is Mythic GME 2e?

Mythic Game Master Emulator 2nd Edition is a revolutionary oracle system that enables solo and GM-less tabletop RPG experiences. Our apps digitize this powerful system, making it accessible and intuitive for modern gamers.

## 🎯 Products

- **Mythic GME Mobile** — iOS & Android companion app
- **Mythic GME Desktop** — Cross-platform desktop application
- Full feature parity across all platforms
- Official licensing from Word Mill Games

## ✨ Features

- **Intuitive Oracle System** — Digital implementation of Mythic GME 2e mechanics
- **Cross-Platform Sync** — Seamless experience across all devices
- **Community Integration** — Connect with fellow solo RPG enthusiasts
- **Regular Updates** — Continuous improvements and new features
- **Accessibility First** — Designed for players of all abilities

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/kingdomseed/jhd-astro.git
cd jhd-astro

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` — Start local development server
- `npm run build` — Build for production (outputs to `dist/`)
- `npm run preview` — Preview production build locally

## 🏗️ Architecture

This is a static Astro 5 website built with component-driven architecture:

- **Framework**: Astro v5.13.3
- **Styling**: Global CSS with component-specific classes
- **JavaScript**: TypeScript with minimal vanilla JS for interactive elements
- **Deployment**: Static site generation (SSG)

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.astro    # Main navigation with download CTA
│   ├── Hero.astro      # Landing page hero section
│   ├── Billboard.astro # App screenshot showcase
│   ├── CoreBenefits.astro
│   ├── CommunitySupport.astro
│   ├── Partners.astro
│   ├── PopularResources.astro
│   ├── MakersNote.astro
│   └── Footer.astro
├── pages/
│   └── index.astro     # Main landing page
├── scripts/            # TypeScript modules for interactivity
│   ├── header-dropdown.ts
│   ├── header-mobile.ts
│   └── header-sticky.ts
public/
├── global.css          # Site-wide styles
├── billboard.png       # Hero app screenshot
└── favicon.ico         # Site favicon
```

## 📚 Documentation

- Project docs index: [docs/README.md](docs/README.md)

## 🎨 Design System

- **Primary Brand Colors**: Custom gradient schemes
- **Typography**: Modern web fonts via CDN
- **Icons**: Font Awesome Pro integration
- **Responsive**: Mobile-first design approach
- **Accessibility**: ARIA labels and semantic HTML

## 📱 Download Links

- **iOS App Store**: [Download for iPhone/iPad](https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147)
- **Google Play Store**: [Download for Android](https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e)
- **Amazon Appstore**: [Download for Fire devices](https://www.amazon.ca/Jason-Holt-Digital-LLC-Mythic/dp/B0DJBPF9L9)
- **Microsoft Store**: [Download for Windows](https://apps.microsoft.com/detail/9n39b8hj3cdg)
- **itch.io**: [Download for Desktop](https://jasonholtdigital.itch.io/mythic-gme-digital)

## 🤝 Community & Support

- **Discord Community**: Join fellow solo RPG enthusiasts
- **Documentation**: Comprehensive guides and tutorials
- **Official Partnership**: Licensed by Word Mill Games
- **Regular Updates**: Active development and community feedback

## 🛠️ Technical Stack

- **Astro 6** — Static site generator
- **TypeScript** — Type-safe development
- **Font Awesome Pro** — Icon library (CDN)
- **Vitest** — Unit testing

## 📄 License

This website is open source. The Mythic GME 2e system and apps are officially licensed products.

## 🔗 Links

- **Website**: [jasonholtdigital.com](https://jasonholtdigital.com)
- **Word Mill Games**: Official Mythic GME publisher
- **Community Discord**: [Join our community](#)

## 👤 About the Developer

**Jason Holt** is an independent software developer specializing in tabletop RPG companion applications. With a focus on accessibility, user experience, and faithful digital adaptations of beloved game systems.

---

**Made with ❤️ for the solo RPG community**
