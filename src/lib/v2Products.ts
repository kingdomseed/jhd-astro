export type V2StoreLink = {
  href: string;
  label: string;
  icon: string;
  className: string;
  meta: string;
};

export type V2Screenshot = {
  src: string;
  alt: string;
  label: string;
};

export type V2AppVariant = {
  id: "mobile" | "desktop";
  title: string;
  label: string;
  shortLabel: string;
  visual: "phone" | "desktop";
  whoItsFor: string;
  summary: string;
  features: string[];
  officialContent: string[];
  note: string;
  bestFor: string[];
  storeLinks: V2StoreLink[];
  screenshots: V2Screenshot[];
};

export const v2StoreLinks: V2StoreLink[] = [
  {
    href: "https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147",
    label: "Apple App Store",
    icon: "fa-brands fa-apple",
    className: "apple",
    meta: "iOS",
  },
  {
    href: "https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e",
    label: "Google Play",
    icon: "fa-brands fa-google-play",
    className: "google",
    meta: "Android",
  },
  {
    href: "https://www.amazon.ca/Jason-Holt-Digital-LLC-Mythic/dp/B0DJBPF9L9",
    label: "Amazon Appstore",
    icon: "fa-brands fa-amazon",
    className: "amazon",
    meta: "Fire",
  },
  {
    href: "https://apps.microsoft.com/detail/9n39b8hj3cdg",
    label: "Microsoft Store",
    icon: "fa-brands fa-windows",
    className: "microsoft",
    meta: "Win",
  },
  {
    href: "https://jasonholtdigital.itch.io/mythic-gme-digital",
    label: "itch.io",
    icon: "fa-brands fa-itch-io",
    className: "itch",
    meta: "Desktop",
  },
];

const [appleStore, googleStore, amazonStore, microsoftStore, itchStore] =
  v2StoreLinks;

export const v2MythicMobile: V2AppVariant = {
  id: "mobile",
  title: "Mythic GME Mobile",
  label: "Mobile app",
  shortLabel: "Mobile",
  visual: "phone",
  whoItsFor: "Solo role-players who want less lookup and more story wherever they play.",
  summary:
    "The mobile app keeps the core Mythic flow close at hand, with Fate Questions, Meaning Tables, Journals, Custom Tables, and dice built for play wherever you are.",
  features: [
    "Answer Fate Questions with the Fate Chart or a streamlined Fate Check",
    "Write your Fate Question first, then roll",
    "Track Characters, Threads, Features, and Scenes",
    "Keep an Adventure Log with markdown and spell check",
    "Create, import, link, and export Custom Tables",
    "Save the dice formulas you use most",
    "Use screen reader, color-blind, and left-hand modes",
  ],
  officialContent: [
    "Start with the 50 core Mythic GME 2e tables: 48 Meaning Tables and 2 Event Focus tables",
    "Expand to 160+ tables with Expanded Features, including Variations and Mythic Magazine issues 1-61",
    "Use Random Event and Prepared Adventure Event Focus tables",
    "New official content comes with major releases",
  ],
  note:
    "Paid unlocks are permanent, not subscriptions. Anything you unlock stays unlocked, including new paid features added within 12 months of purchase.",
  bestFor: [
    "One-handed solo sessions",
    "Fast Fate Questions during play",
    "Portable Journals and Custom Tables",
  ],
  storeLinks: [appleStore, googleStore, amazonStore],
  screenshots: [
    {
      src: "/v2/assets/mobile-1.png",
      alt: "Mythic GME Mobile Fate Chart view",
      label: "Fate Chart",
    },
    {
      src: "/v2/assets/mobile-5.png",
      alt: "Mythic GME Mobile Adventure Log view",
      label: "Adventure Log",
    },
    {
      src: "/v2/assets/mobile-7.png",
      alt: "Mythic GME Mobile Custom Tables view",
      label: "Custom Tables",
    },
  ],
};

export const v2MythicDesktop: V2AppVariant = {
  id: "desktop",
  title: "Mythic GME Digital",
  label: "Desktop app",
  shortLabel: "Desktop",
  visual: "desktop",
  whoItsFor: "Windows, macOS, and Linux players who want more room for longer Mythic sessions.",
  summary:
    "The desktop edition gives longer sessions more room, with Panels, Help Center guidance, visible tools, and all-in purchase clarity.",
  features: [
    "Use all Mythic GME Mobile features and systems on desktop",
    "Arrange Panels to fit the way you play",
    "Undo many actions with Cmd/Ctrl+Z",
    "Search the in-app Help Center when you need guidance",
    "Keep multiple tools visible during extended sessions",
    "Get everything included up front, with no subscriptions",
  ],
  officialContent: [
    "Official Mythic content for desktop play",
    "Tables and features unlocked up front",
    "No subscriptions",
  ],
  note:
    "The Mac App Store version is a mobile plus desktop bundle and uses paid unlocks for additional content and features.",
  bestFor: [
    "Longer Mythic sessions",
    "Panel-based play setups",
    "Players who want everything included up front",
  ],
  storeLinks: [itchStore, microsoftStore],
  screenshots: [
    {
      src: "/v2/assets/desktop-1.png",
      alt: "Mythic GME Digital desktop layout",
      label: "Desktop layout",
    },
    {
      src: "/v2/assets/desktop-6.png",
      alt: "Mythic GME Digital desktop panel layout",
      label: "Panels",
    },
    {
      src: "/v2/assets/desktop-7.png",
      alt: "Mythic GME Digital desktop journal and oracle layout",
      label: "Long Sessions",
    },
  ],
};

export const v2MythicVariants = [v2MythicMobile, v2MythicDesktop];

export const v2MythicProduct = {
  title: "Mythic GME Apps",
  eyebrow: "Official Mythic GME 2e Apps",
  summary:
    "Official Mythic GME 2e apps for keeping the tools of play close at hand across mobile and desktop.",
  sharedContent: [
    "Official Fate Chart and Meaning Tables",
    "Characters, Threads, Features, Scenes, dice, and Journals",
    "Custom Tables that travel with your play",
  ],
  bookLinks: [
    {
      title: "Mythic GME 2e",
      body: "The complete solo RPG system that started it all.",
      href:
        "https://www.drivethrurpg.com/product/422929/Mythic-Game-Master-Emulator-Second-Edition",
    },
    {
      title: "Adventure Crafter",
      body: "A Mythic book for creating adventures with prompts, turning points, and twists.",
      href: "https://www.drivethrurpg.com/product/261479/The-Adventure-Crafter",
    },
  ],
  sourceLinks: [
    {
      title: "icloud_storage_plus",
      body:
        "Flutter plugin for iCloud document storage with coordinated file access.",
      href: "https://github.com/kingdomseed/icloud_storage_plus",
    },
    {
      title: "mythic_dice_parser",
      body: "Dart library for parsing dice notation that powers the app roller.",
      href: "https://github.com/kingdomseed/mythic-dice-parser",
    },
  ],
};
