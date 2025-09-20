/**
 * Format a Date into a short, locale-aware string (e.g., "Sep 12, 2025").
 * Keeps date rendering consistent across pages.
 */
export function formatDate(value: Date, locale = 'en-US'): string {
  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(value);
}
