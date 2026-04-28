export const extractLegalArticle = (source: string, sourceName: string) => {
  const match = source.match(
    /<article class="legal-article">[\s\S]*?<\/article>/,
  );

  if (!match) {
    throw new Error(`Could not extract legal article from ${sourceName}`);
  }

  return match[0]
    .replace('class="legal-article"', 'class="v2-prose v2-legal__article"')
    .replaceAll('href="/privacy"', 'href="/v2/privacy/"')
    .replaceAll('href="/terms"', 'href="/v2/terms/"');
};
