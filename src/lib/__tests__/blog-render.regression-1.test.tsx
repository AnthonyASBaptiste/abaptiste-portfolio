// Regression: ISSUE-001 — Blog content markdown parser and date formatting
// Found by /qa on 2026-10-11
// Report: .gstack/qa-reports/qa-report-abaptiste-portfolio-2026-10-11.md
// Value: protects=blog markdown parser renders subheadings and code blocks; fails_when=raw markdown or ISO timestamps leak to UI; why_new=existing blog.test.ts only tested data fetching; seam=none

import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { formatDate } from '@/lib/blog';
import { MarkdownArticle } from '@/components/MarkdownArticle';

describe('formatDate utility', () => {
  it('cleans ISO timestamp into a clean YYYY-MM-DD date string', () => {
    expect(formatDate('2026-08-25T00:00:00.000Z')).toBe('2026-08-25');
    expect(formatDate('2026-08-25')).toBe('2026-08-25');
  });
});

describe('MarkdownArticle component', () => {
  it('correctly parses H3 subheadings without raw hashes', () => {
    const content = '### The Gotcha:\n\nThis is the explanation.';
    render(<MarkdownArticle content={content} />);

    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toHaveTextContent('The Gotcha:');
    expect(heading.textContent).not.toContain('###');
  });

  it('correctly parses fenced code blocks into preformatted code blocks', () => {
    const content = '```bash\nnemoclaw hortense policy add discord --yes\n```';
    render(<MarkdownArticle content={content} />);

    const codeBlock = screen.getByText(/nemoclaw hortense policy add discord --yes/);
    expect(codeBlock.closest('pre')).not.toBeNull();
  });

  it('correctly parses horizontal rules and lists', () => {
    const content = '---\n\n- First point\n- Second point';
    const { container } = render(<MarkdownArticle content={content} />);

    expect(container.querySelector('hr')).not.toBeNull();
    expect(screen.getByText(/First point/)).toBeInTheDocument();
  });
});
