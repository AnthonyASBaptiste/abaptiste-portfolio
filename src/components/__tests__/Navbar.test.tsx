import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar component', () => {
  it('renders branding and primary navigation links', () => {
    render(<Navbar />);

    expect(screen.getByText('Anthony Baptiste')).toBeInTheDocument();
    expect(screen.getByText('Sr. Software Engineer & AI Architect')).toBeInTheDocument();

    const blogLink = screen.getByRole('link', { name: /Engineering Notes/i });
    expect(blogLink).toHaveAttribute('href', '/blog');

    const cvLink = screen.getByRole('link', { name: /CV \/ Resume/i });
    expect(cvLink).toHaveAttribute('href', '/cv');

    const builderLab = screen.getByRole('link', { name: /BUILDER LAB: builtbyanthony\.tech/i });
    expect(builderLab).toHaveAttribute('href', 'https://builtbyanthony.tech');
    expect(builderLab).toHaveAttribute('target', '_blank');
  });
});
