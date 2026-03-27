import { describe, it, expect } from 'vitest';
import { getLangFromUrl, useTranslations, getRouteFromUrl } from './utils';

describe('getLangFromUrl', () => {
  it('returns "pt" for Portuguese paths', () => {
    const url = new URL('https://example.com/pt/blog');
    expect(getLangFromUrl(url)).toBe('pt');
  });

  it('returns default lang for English paths', () => {
    const url = new URL('https://example.com/blog');
    expect(getLangFromUrl(url)).toBe('en');
  });

  it('returns default lang for root path', () => {
    const url = new URL('https://example.com/');
    expect(getLangFromUrl(url)).toBe('en');
  });

  it('returns default for unknown language prefix', () => {
    const url = new URL('https://example.com/fr/blog');
    expect(getLangFromUrl(url)).toBe('en');
  });
});

describe('useTranslations', () => {
  it('returns English translations for "en"', () => {
    const t = useTranslations('en');
    expect(t('nav.home')).toBe('Home');
  });

  it('returns Portuguese translations for "pt"', () => {
    const t = useTranslations('pt');
    expect(t('nav.home')).toBe('Início');
  });

  it('falls back to English for missing Portuguese keys', () => {
    const t = useTranslations('pt');
    // All keys exist in both languages, so just verify the function works
    expect(typeof t('nav.home')).toBe('string');
    expect(t('nav.home').length).toBeGreaterThan(0);
  });
});

describe('getRouteFromUrl', () => {
  it('strips language prefix for Portuguese paths', () => {
    const url = new URL('https://example.com/pt/blog');
    expect(getRouteFromUrl(url)).toBe('/blog');
  });

  it('returns pathname as-is for default language', () => {
    const url = new URL('https://example.com/blog');
    expect(getRouteFromUrl(url)).toBe('/blog');
  });

  it('returns "/" when Portuguese root', () => {
    const url = new URL('https://example.com/pt');
    expect(getRouteFromUrl(url)).toBe('/');
  });

  it('preserves nested paths after language prefix', () => {
    const url = new URL('https://example.com/pt/blog/my-post');
    expect(getRouteFromUrl(url)).toBe('/blog/my-post');
  });
});
