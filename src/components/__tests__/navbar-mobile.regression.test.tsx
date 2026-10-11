import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';

describe('FINDING-001: Navbar mobile navigation regression test', () => {
  it('toggles the mobile drawer menu when the hamburger button is clicked', () => {
    render(<Navbar />);

    const toggleButton = screen.getByRole('button', { name: /Toggle navigation menu/i });
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

    // Drawer is closed initially
    expect(screen.queryByRole('link', { name: /VIEW CV \/ RESUME/i })).not.toBeInTheDocument();

    // Open mobile menu
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    const mobileCvLink = screen.getByRole('link', { name: /VIEW CV \/ RESUME/i });
    expect(mobileCvLink).toBeInTheDocument();
    expect(mobileCvLink).toHaveAttribute('href', '/cv');

    // Close menu by clicking the link
    fireEvent.click(mobileCvLink);
    expect(screen.queryByRole('link', { name: /VIEW CV \/ RESUME/i })).not.toBeInTheDocument();
  });
});
