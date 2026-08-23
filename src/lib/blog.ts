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
    title: 'Going Cold Turkey: Why I Finally Wiped Windows on My Main Machine',
    excerpt:
      'After years of bouncing off Ubuntu, Mint, and Debian at the first sign of trouble, I changed my strategy. From a headless HP homeserver with CasaOS to wiping Windows 11 on my Razer Blade 14 (RTX 4070)—here is my honest Day 1 reality check.',
    date: '2026-08-23',
    readTime: '6 min read',
    tags: ['Linux', 'Fedora', 'Hardware', 'Gaming', 'DevOps'],
    content: `
# Going Cold Turkey: Why I Finally Wiped Windows on My Main Machine

If you look at my operating system history, you'll see a familiar pattern. Over the years, I have tried switching to Linux more times than I care to admit. Ubuntu, Linux Mint, CentOS, Debian—I tried them all. 

Every single attempt ended the exact same way. I would hit the first real friction point—a broken audio driver, an anti-cheat error, a weird display scaling glitch—and within ten minutes, I'd reboot back into the comfortable safety net of Windows. Dual-booting wasn't a bridge; it was an escape hatch that guaranteed I never built real muscle memory.

## The Breaking Point: Windows Fatigue

So why try again now? Because over the last year, using Windows began feeling like renting an operating system from an aggressive marketing agency.

The tipping point wasn't any single bug; it was the relentless friction of the modern Windows experience:
- **Forced AI Everywhere**: Uninvited Copilot widgets, Recall controversies, and AI buttons shoved into every default app without consent.
- **Developer Tooling & Daemon Friction**: Essential background tools for my AI agents (like \`signal-cli\` and custom CLI bridges) and Electron apps constantly failed or required convoluted workarounds for basic socket bindings and permission management.
- **Aggressive Telemetry & Bloat**: Constant background data harvesting, recommended apps in the Start Menu, and background services fighting for system resources.
- **General OS Headaches**: Sudden forced updates interrupting deep work, fragmented control panels, and the creeping feeling that your multi-thousand-dollar laptop belongs to Microsoft rather than you.

I wanted my machine back. Clean, quiet, deterministic, and fully under my control.

## Step 1: The Headless Stepping Stone

Before touching my main laptop, I started small with an old HP laptop that was collecting dust in a drawer. The hardware was beat up and the screen was malfunctioning, making it practically useless as a portable laptop—but perfect for a dedicated home server.

I installed Debian, and to make managing containers and storage effortless without a working monitor, I layered CasaOS on top. Running it headless over the local network gave me a low-stakes environment to get comfortable with Linux services, networking, and terminal workflows without the fear of breaking my daily driver.

That experiment proved something important: when I didn't have an instant retreat button, I actually enjoyed solving the puzzle.

## Step 2: Burning the Boats on the Razer Blade 14

With that momentum, I took the plunge on my primary machine: a Razer Blade 14 (AMD Ryzen + NVIDIA GeForce RTX 4070). No dual boot. No separate partitions. Just a complete wipe of Windows 11 and a fresh install of Fedora Linux 44 (KDE Plasma).

Day 1 was an immediate crash course in real-world Linux troubleshooting:

- **Package Manager Whiplash**: Muscle memory is a stubborn thing. Having tinkered with Debian on the home server, I instinctively tried downloading .deb files and running \`apt\`. On Fedora, discovering \`dnf\`, native RPMs, and understanding how standalone archives live in \`/opt\` was my first mental shift.
- **The Silent Speaker Puzzle**: Software audio worked immediately out of the box—PipeWire volume meters bounced to life—yet the laptop speakers remained completely silent. Unmuting ALSA fixed the headphone jack, but the internal speakers required sending raw HDA initialization verbs to the Realtek ALC298 smart amplifier chip on boot via a custom systemd service.
- **Unlocking the RTX 4070**: The default open-source \`nouveau\` driver doesn't support the clock speeds or Vulkan features needed for high-end rendering. Setting up RPM Fusion and building the \`akmod-nvidia\` kernel modules brought the dedicated GPU up to full speed.
- **The Agentic Dev Environment**: Within an hour of stabilizing hardware, I had my complete developer stack running: GitHub CLI with automatic SSH keys, Node 22, Go, Python with pipx, and Repomix to generate codebase architecture maps for my AI coding agents.

## The Real Test: Gaming and Daily Life

I'm not going to make a dramatic declaration that I'll never touch Windows again. I've been down that road before, and I know how easy it is to declare victory too early.

This machine was built to be my primary gaming rig as well as my daily engineering workstation. Now that the drivers, audio amplifiers, and developer tools are in place, the real experiment begins: seeing how Fedora handles my actual gaming library via Steam Proton and Heroic, and finding out if a 100% Linux environment can truly fit all my real-world use cases.
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
