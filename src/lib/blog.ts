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
    slug: 'cold-turkey-windows-to-linux',
    title: 'Going Cold Turkey: Wiping Windows and Taming Modern Linux on a Gaming Laptop',
    excerpt:
      'No dual-boot, no safety net. What happened when I wiped Windows 11 on a Razer Blade 14 (RTX 4070) for Fedora Linux—from package manager whiplash to ALC298 speaker verbs and agentic dev setups.',
    date: '2026-08-23',
    readTime: '5 min read',
    tags: ['Linux', 'Fedora', 'DevOps', 'Hardware', 'AI Engineering'],
    content: `
# Going Cold Turkey: Wiping Windows and Taming Modern Linux on a Gaming Laptop

Most transitions from Windows to Linux fail at the same failure point: the dual-boot safety net. When an audio driver acts up or a game doesn't launch instantly, it takes ten seconds to reboot back into the comfort of Windows.

To break that reflex, I went cold turkey. One drive, one OS: Fedora Linux 44 KDE on a Razer Blade 14 (AMD Ryzen + NVIDIA GeForce RTX 4070). Here is the field report from Day 1.

## 1. Package Management Whiplash: Where is APT?

Coming from Debian-centric tutorials and Windows installers, the first instinct is to double-click a .deb or reach for apt. On Fedora, native packages are RPMs managed by dnf.

Understanding that modern Linux binaries can be cleanly extracted or sandboxed (via flatpaks, tarballs in /opt, or isolated python virtual environments with pipx) instantly cleared up the mental friction.

## 2. Waking the Silicon: Discrete GPU & Speaker Verbs

Modern gaming laptops feature complex hybrid graphics and proprietary audio amplifiers. Two hurdles had to be solved immediately:

- **RTX 4070 Graphics**: The default open-source nouveau driver is incapable of re-clocking modern Ada Lovelace GPUs. Enabling RPM Fusion and building the official akmod-nvidia module gave full access to Vulkan, CUDA, and Steam Proton.
- **Realtek ALC298 Amplifier**: While software volume bars bounced happily in PipeWire, the laptop speakers remained completely silent. The cause? Razer's proprietary smart amp requires raw HDA initialization verbs sent to /dev/snd/hwC2D0 on boot. Automating this via a systemd unit restored crystal-clear speaker and headphone audio.

## 3. The Agentic Engineering Workspace

With hardware stabilized, setting up an AI-first development environment was effortless:

- **GitHub & Identity**: Seamless SSH key negotiation and token provisioning via the gh CLI.
- **Universal Multi-Language Tooling**: Native Node.js 22, Go compiler, Python 3 with pipx, and ctags symbol indexing.
- **Agent Codebase Graphing**: Integrating Repomix to generate structured architecture maps so AI pair programmers navigate complex multi-repo topologies in milliseconds.

## The Verdict

Going 100% Linux without a fallback is intimidating for the first two hours. But once the hardware is dialed in and the toolchain is automated, the speed, transparency, and developer ergonomics make returning to Windows unthinkable.
    `,
  },
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
