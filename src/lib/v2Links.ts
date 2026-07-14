export const v2AssetPath = (path: string) =>
  `/v2/assets/${path.replace(/^\/+/, "")}`;

export { v2StoreLinks } from "./v2Products";

export const v2NavLinks = [
  {
    href: "/v2/",
    label: "Home",
    icon: "fa-solid fa-house",
  },
  {
    href: "/v2/apps/",
    label: "Apps",
    icon: "fa-solid fa-layer-group",
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

export const v2SupportUrl = "/v2/support/";
export const v2ContactUrl = "/v2/support/#contact-panel";
export const v2AppsHomeAnchorUrl = "/v2/#apps";
export const v2AppsUrl = "/v2/apps/";
export const v2MobileAppUrl = "/v2/apps/#mobile-app";
export const v2DesktopAppUrl = "/v2/apps/#desktop-app";
export const v2AppResourcesUrl = "/v2/apps/#app-resources";
export const v2ReleaseNotesUrl = "/v2/blog/category/release-notes/";
export const v2DiscordUrl = "https://discord.gg/PEDHrhzcnk";
