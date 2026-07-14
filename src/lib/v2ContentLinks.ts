const v2RoutablePrefixes = [
  "about",
  "apps",
  "blog",
  "privacy",
  "resources",
  "support",
  "terms",
];

const v2InternalHrefPattern = new RegExp(
  `href="\\/(${v2RoutablePrefixes.join("|")})(?=\\/|#|")`,
  "g",
);

export const rewriteV2InternalLinks = (html: string) =>
  html.replace(v2InternalHrefPattern, 'href="/v2/$1');
