import { describe, it, expect } from 'vitest';
import { formatDate } from './format-date';

describe('formatDate', () => {
  it('formats a date in en-US by default', () => {
    const date = new Date('2025-09-12T00:00:00Z');
    expect(formatDate(date)).toBe('Sep 12, 2025');
  });

  it('formats a date in pt-BR locale', () => {
    const date = new Date('2025-01-05T00:00:00Z');
    const result = formatDate(date, 'pt-BR');
    expect(result).toContain('2025');
    expect(result).toContain('5');
  });

  it('handles different months', () => {
    const date = new Date(2024, 0, 15); // Jan 15, 2024 local
    const result = formatDate(date);
    expect(result).toBe('Jan 15, 2024');
  });
});
