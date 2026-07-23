export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export const samplePosts: BlogPost[] = [
  {
    slug: 'building-multi-agent-ai-pipelines',
    title: 'Architecting Multi-Agent AI Pipelines with Go, Vue 3, and Python',
    excerpt:
      'How we built Research Navigator using a high-performance Go proxy runtime, a Vue 3 Traffic Light UI, and an asynchronous Python LLM-as-a-Judge audit engine.',
    date: '2026-07-15',
    readTime: '6 min read',
    tags: ['AI Architecture', 'Go', 'Python', 'Vue 3'],
    content: `
# Architecting Multi-Agent AI Pipelines with Go, Vue 3, and Python

In production AI engineering, static single-prompt LLM wrappers fall apart quickly. To solve complex validation workflows for startups and enterprise systems, multi-agent orchestration engines are essential.

## Key Architectural Patterns

1. **The High-Performance Proxy (Go)**: Handling WebSocket streams, auth boundaries, and traffic routing to keep latencies minimal.
2. **The Agent Brain (Python)**: Utilizing "LLM-as-a-Judge" audit logic and a "Brutal Gatekeeper" pass/fail filter.
3. **The User Dashboard (Vue 3 / Next.js)**: A real-time "Traffic Light" status interface giving founders immediate visual feedback.

By separating the execution runtime from the agent prompt engine, we achieve enterprise reliability while retaining rapid prompt iteration speed.
    `,
  },
  {
    slug: 'dockerized-agent-architecture',
    title: 'Resolving Channel Failures in Containerized AI Agent Deployments',
    excerpt:
      'A deep dive into isolating agent runtimes using Docker, mapping internal gateway ports, and ensuring robust failover over private Tailscale networks.',
    date: '2026-07-02',
    readTime: '4 min read',
    tags: ['Docker', 'DevOps', 'Tailscale', 'OpenClaw'],
    content: `
# Resolving Channel Failures in Containerized AI Agent Deployments

When running local multi-container AI agents (such as OpenClaw instances for Hortense and Gwen), Docker network isolation can cause subtle proxy mismatches if internal container ports collide with host-exposed ports.

## Lessons Learned

- **Port Mapping Consistency**: Always align the internal gateway configuration with the container-exposed port.
- **Private Mesh Networking**: Utilizing \`tailscale serve\` to proxy web interfaces over HTTPS eliminates open firewall exposures.
- **Ollama Host Binding**: Ensuring the Ollama daemon listens on \`0.0.0.0\` or \`host.docker.internal\` allows containerized agents to query local GPU models cleanly.
    `,
  },
];

export function getAllPosts(): BlogPost[] {
  return samplePosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return samplePosts.find((p) => p.slug === slug);
}
