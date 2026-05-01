export const v2AssetPath = (path: string) =>
  `/v2/assets/${path.replace(/^\/+/, "")}`;

export const v2NavLinks = [
  {
    href: "/v2/",
    label: "Home",
    icon: "fa-solid fa-house",
  },
  {
    href: "/v2/resources/",
    label: "Resources",
    icon: "fa-solid fa-book-open",
  },
  {
    href: "/v2/blog/",
    label: "Blog",
    icon: "fa-solid fa-newspaper",
  },
  {
    href: "/v2/support/",
    label: "Support",
    icon: "fa-solid fa-life-ring",
  },
] as const;

export const v2StoreLinks = [
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
] as const;

export const v2SupportUrl = "/v2/support/";
export const v2ContactUrl = "/v2/support/#contact-panel";
export const v2AppsAnchorUrl = "/v2/#apps";
export const v2MobileAppAnchorUrl = "/v2/#mobile-title";
export const v2DesktopAppAnchorUrl = "/v2/#desktop-title";
export const v2ReleaseNotesUrl = "/v2/blog/category/release-notes/";
export const v2DiscordUrl = "https://discord.gg/PEDHrhzcnk";
