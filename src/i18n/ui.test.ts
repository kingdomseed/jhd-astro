import { describe, it, expect } from 'vitest';
import { ui, defaultLang, languages } from './ui';

describe('ui translations', () => {
  it('exports English and Portuguese languages', () => {
    expect(languages).toHaveProperty('en');
    expect(languages).toHaveProperty('pt');
  });

  it('default language is English', () => {
    expect(defaultLang).toBe('en');
  });

  it('all Portuguese keys exist in English', () => {
    const enKeys = Object.keys(ui.en);
    const ptKeys = Object.keys(ui.pt);
    for (const key of ptKeys) {
      expect(enKeys, `Missing EN key: ${key}`).toContain(key);
    }
  });

  it('all English keys exist in Portuguese', () => {
    const enKeys = Object.keys(ui.en);
    const ptKeys = Object.keys(ui.pt);
    for (const key of enKeys) {
      expect(ptKeys, `Missing PT key: ${key}`).toContain(key);
    }
  });

  it('no translation values are empty strings', () => {
    for (const [key, value] of Object.entries(ui.en)) {
      expect(value, `EN "${key}" is empty`).not.toBe('');
    }
    for (const [key, value] of Object.entries(ui.pt)) {
      expect(value, `PT "${key}" is empty`).not.toBe('');
    }
  });
});
