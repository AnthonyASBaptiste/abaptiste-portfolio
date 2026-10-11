import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://anthonybaptiste.dev';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/cv`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects/research-navigator`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/projects/herald`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/fleet-deployment-pitfalls-nemoclaw-multi-agent-linux`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/spawning-the-claw-deck-hortense-nemoclaw`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/tamriel-on-fedora-eso-linux-journey`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cold-turkey-windows-to-linux`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/building-multi-agent-ai-pipelines`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/dockerized-agent-architecture`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
