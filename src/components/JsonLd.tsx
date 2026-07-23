import React from 'react';

export function PersonJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Anthony Baptiste',
    jobTitle: 'Senior Software Engineer & AI Architect',
    worksFor: {
      '@type': 'Organization',
      name: 'Medial Health LLC',
    },
    url: 'https://anthonybaptiste.dev',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Trinidad & Tobago / Caribbean',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Multi-Agent Architectures',
      'Google Cloud Platform (GCP)',
      'Enterprise Software Architecture',
      'Go (Golang)',
      'Next.js & React',
      'Python AI Systems',
      'Revenue Operations (RevOps)',
    ],
    sameAs: [
      'https://github.com/CBCGaming',
      'https://discover.research-navigator.ai',
    ],
    description:
      'Senior Software Engineer at Medial Health LLC and AI Architect specializing in high-performance multi-agent systems, regional Caribbean intelligence, and enterprise cloud solutions.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
