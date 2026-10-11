import { describe, it, expect } from 'vitest';
import sitemap from '../sitemap';

describe('sitemap route generator', () => {
  it('generates a valid sitemap with expected site structure and priority ratings', () => {
    const entries = sitemap();
    expect(Array.isArray(entries)).toBe(true);
    expect(entries.length).toBeGreaterThanOrEqual(10);

    const urls = entries.map((entry) => entry.url);

    // Root and primary pages
    expect(urls).toContain('https://anthonybaptiste.dev');
    expect(urls).toContain('https://anthonybaptiste.dev/cv');
    expect(urls).toContain('https://anthonybaptiste.dev/blog');
    expect(urls).toContain('https://anthonybaptiste.dev/projects/research-navigator');
    expect(urls).toContain('https://anthonybaptiste.dev/projects/herald');

    for (const entry of entries) {
      expect(entry.url.startsWith('https://anthonybaptiste.dev')).toBe(true);
      expect(entry.lastModified).toBeInstanceOf(Date);
      expect(typeof entry.priority).toBe('number');
      expect(entry.priority).toBeGreaterThanOrEqual(0);
      expect(entry.priority).toBeLessThanOrEqual(1);
    }
  });
});
