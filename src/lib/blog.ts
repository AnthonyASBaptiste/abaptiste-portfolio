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
    slug: 'spawning-the-claw-deck-hortense-nemoclaw',
    title: 'Spawning The Claw Deck: Running Autonomous AI Agents on Fedora Linux',
    excerpt:
      'Building a multi-agent headquarters on Linux. Setting up our first sandbox agent Hortense with Hermes and MiniMax M3 via NVIDIA NIM, debugging Docker permissions and OpenShell gateway version drift, and creating The Claw Deck command center in Discord.',
    date: '2026-08-25',
    readTime: '7 min read',
    tags: ['AI Agents', 'NemoClaw', 'OpenShell', 'Discord', 'DevOps', 'Fedora'],
    content: `
# Spawning The Claw Deck: Running Autonomous AI Agents on Fedora Linux

One of the primary reasons I walked away from Windows was developer friction. Running background AI agent daemons, custom CLI bridges, and long-running Docker containers on Windows was an endless battle against sleep timers, socket mapping bugs, and memory bloat.

On Fedora Linux, the goal was simple: turn this Razer Blade 14 into an autonomous mission control where multiple AI agents can live, execute code in secure sandboxes, and collaborate in real-time.

Welcome to **The Claw Deck**.

---

## 1. The Architecture: NemoClaw, OpenShell & Hermes

Instead of letting an agent run wild with raw, unrestricted terminal access on the host system, we use **NemoClaw** and **NVIDIA OpenShell**.

This architecture isolates each agent in its own lightweight container with granular egress firewall policies:
- **Sandbox Isolation**: The agent gets its own virtual filesystem, package managers, and environment.
- **Network Presets**: Egress traffic is strictly controlled through policy presets (e.g. \`github\`, \`npm\`, \`pypi\`, \`public-reference\`, and \`discord\`), preventing unauthorized network calls or accidental data exfiltration.
- **Inference Engine**: We chose **MiniMax M3** hosted on **NVIDIA NIM** for Hortense. MiniMax M3 gives us long-context retention and strong tool-calling reliability inside the Hermes agent runtime.

---

## 2. Real-World Onboarding Hurdles (And How We Fixed Them)

Setting up bleeding-edge multi-agent infrastructure on a fresh Linux install rarely happens in a single click. Here were the two critical hurdles we hit and resolved:

### Hurdle 1: The Non-Root Docker Socket Permission Trap
When NemoClaw started provisioning the container sandbox for Hortense, the onboarding wizard abruptly crashed with an unhelpful gRPC HTTP/2 stream reset:
\`\`\`text
tonic::transport::Error(Transport, hyper::Error(Http2, Reset(StreamId(3), PROTOCOL_ERROR)))
\`\`\`
Digging into the daemon logs revealed the root cause: Docker was running, but our user account hadn't been added to the \`docker\` group. OpenShell was getting an immediate \`permission denied /var/run/docker.sock\` and dropping the gRPC pipe.

**The Fix**:
\`\`\`bash
sudo usermod -aG docker $USER
sudo systemctl restart docker
newgrp docker
\`\`\`

### Hurdle 2: The Gateway Version Drift Conflict
After resolving Docker permissions, running \`nemoclaw onboard --resume\` hit a version mismatch error:
\`\`\`text
Refusing the system OpenShell gateway service: /usr/bin/openshell-gateway is 0.0.111, 
outside the maximum 0.0.101 supported by this NemoClaw release.
\`\`\`
A system-level RPM package had installed a newer build of \`openshell-gateway\` (0.0.111) in \`/usr/bin/\`, while NemoClaw expected its pinned 0.0.101 binary in \`~/.local/bin/\`.

**The Fix**: Removing the system-level RPM allowed NemoClaw to use its bundled, compatible binaries cleanly:
\`\`\`bash
sudo dnf remove openshell openshell-gateway -y
systemctl --user restart nemoclaw-openshell-gateway.service
nemoclaw onboard --resume
\`\`\`

---

## 3. The Claw Deck: Centralized Discord Mission Control

With the sandbox and inference route active, we connected Hortense to Discord.

Instead of managing separate CLI windows for every agent, we created a private Discord server called **The Claw Deck**.

### Why Discord is the Ideal Agent HQ:
- **Dedicated Channels per Agent**: \`#hortense\` for general coding and analysis, \`#gwen\` for research navigation, and \`#war-room\` for multi-agent collaboration.
- **Syntax Highlighting & Threads**: Native code blocks in Go, Python, and TypeScript, with isolated task threads that keep channels clean.
- **Mobile Access**: Ability to assign tasks, check status, or trigger workflows from a phone on the go.
- **Team Identity**: We even designed a custom server emblem—5 cybernetic mechanical lobster claws meeting in a team huddle with glowing NVIDIA green circuitry.

---

## 4. What's Next for the Fleet

Hortense is officially online, listening on Discord, and executing tasks inside her OpenShell sandbox.

Next up on The Claw Deck:
1. Spawning **Gwen**, our dedicated web navigation and research agent.
2. Building an automated **CodeAudit** reviewer that hooks directly into GitHub pull requests.
3. Enabling local GPU inference using our laptop's RTX 4070 for zero-latency, offline tasks.

Linux has transformed this machine from a simple laptop into an autonomous AI workshop.
    `,
  },
  {
    slug: 'tamriel-on-fedora-eso-linux-journey',
    title: 'Tamriel on Fedora: Conquering the 100GB Linux Gaming Hurdle',
    excerpt:
      'The ultimate test of wiping Windows was whether my favorite MMO—The Elder Scrolls Online—would actually run. From 2023 installer timeouts and host_ieversionfail registry traps to unlocking a 240Hz screen: here is how we got ESO running at full speed on Fedora 44 with an RTX 4070.',
    date: '2026-08-24',
    readTime: '6 min read',
    tags: ['Linux', 'Gaming', 'Fedora', 'Wayland', 'NVIDIA', 'Proton'],
    content: `
# Tamriel on Fedora: Conquering the 100GB Linux Gaming Hurdle

When I decided to go cold turkey and wipe Windows on my primary Razer Blade 14 (AMD Ryzen + NVIDIA GeForce RTX 4070), I made a promise to myself: **this laptop still had to be my gaming rig**.

The true test wasn't compiling Go code or running Docker containers. The ultimate test was **The Elder Scrolls Online (ESO)**—a massive ~100GB MMO with a notoriously quirky launcher, anti-cheat hooks, and complex graphics pipelines.

Here is the exact technical journey of how we overcame every installer trap, fixed Wayland display flickering, and got ESO running at a silky-smooth 240 FPS on Fedora Linux 44.

---

## 1. The Epic Games & Installer Stub Trap

I own ESO on the Epic Games Store and used **Heroic Games Launcher** to install it. 

When you install ESO from Epic Games, it doesn't download the game files—it only downloads a small 80MB stub (\`zosEGSStarter.exe\` and an installer \`setup.exe\`). When you click Play, the starter executable attempts to run \`setup.exe\` to unpack the Bethesda launcher.

Under Proton/Wine, this immediately broke:
\`\`\`text
The patcher isn't installed! Installing the patcher...
Patcher Installer path: ...\\TheElderScrollsOnline\\setup.exe
ERROR: Patcher installation failed! Exiting...
\`\`\`

### The "Timeout Waiting for Window to Load" Error
When we manually triggered \`setup.exe\` inside the Wine prefix via Heroic's *Run EXE on Prefix* tool, the installer timed out after 30 seconds:
\`\`\`text
ERROR - Timeout waiting for window to load
\`\`\`
The \`setup.exe\` packaged by Epic is a legacy build from 2023. Its embedded web browser component tries to contact retired Zenimax CDN endpoints that no longer respond.

### The "host_ieversionfail" Registry Trap
Next, we downloaded the standalone \`Install_ESO.exe\` directly from Zenimax. Running it threw a new error: \`host_ieversionfail\`.
Under the hood, Zenimax's installer checks the Windows Registry for the installed Internet Explorer version. Wine emulates IE by default and reported version \`9.11.9600.18376\`. The installer parsed the leading \`9\`, assumed IE9 (< IE11), and refused to start.

### The Solution: Direct CDN Extraction
Rather than fighting legacy installer wrappers, we discovered Zenimax hosts the official, standalone unbundled launcher archive:
1. We downloaded \`Launcher_6.2.44.zip\` directly from Zenimax's CDN.
2. Extracted the full \`Launcher/\` directory directly into \`~/Games/Heroic/TheElderScrollsOnline/Launcher/\` and the Wine prefix.
3. When clicking Play in Heroic, \`zosEGSStarter.exe\` immediately detected the up-to-date Chromium/CEF launcher, authenticated our Epic Games account, and began downloading the full 100GB game!

---

## 2. Fixing Wayland Flickering & Pacing

Once the game installed and launched, we hit our next hurdle: intense screen flickering and brightness strobing.

On modern Linux desktops running **KDE Plasma on Wayland with NVIDIA drivers**, this happens for two reasons:
1. **Exclusive Fullscreen**: ESO defaulted to \`FULLSCREEN 1\` (Exclusive Fullscreen), which conflicts with Wayland's compositor page-flipping.
2. **HDR & DLSS Strobing**: Without explicit sync and NVAPI configured, uninitialized HDR metadata causes brightness pulsing.

**The Fix in \`UserSettings.txt\`**:
We modified the game configuration file located in the prefix's \`Documents/Elder Scrolls Online/live/UserSettings.txt\`:
\`\`\`ini
SET FULLSCREEN "2"            # Borderless Windowed Mode (Native Wayland smoothness)
SET PreferMaximizedWindow "1"
SET HDR_ENABLED "0"           # Disables HDR strobing
\`\`\`
Instantly, all flickering vanished, and the game rendered crisp and tear-free.

---

## 3. Unlocking the 240Hz Display Cap

The Razer Blade 14 features a gorgeous 2560x1600 @ 240Hz display. However, initial gameplay felt slightly choppy despite high frame rates.

A deep dive into \`UserSettings.txt\` revealed why: ESO has a hardcoded engine frame-rate limiter set to 100 FPS by default:
\`\`\`ini
SET MinFrameTime.2 "0.01000000"  # 1 / 100 = 100 FPS cap
\`\`\`
Displaying 100 FPS on a 240Hz screen creates uneven frame pacing (micro-judder). 

We unlocked the engine up to our monitor's native 240Hz:
\`\`\`ini
SET MinFrameTime.2 "0.00416667"  # 1 / 240 = 240 FPS
\`\`\`
Paired with **Feral GameMode** (\`gamemode\`) and our **Amazon Luna Wireless Controller** connected over Bluetooth (which Linux mapped automatically as a low-latency XInput gamepad), the experience became butter-smooth.

---

## The Verdict

Standing in Tamriel on a fresh Fedora installation with 240 FPS, zero screen tearing, responsive controller input, and rich audio is a defining moment for this migration.

Linux gaming in 2026 isn't a compromise—with the right understanding of Proton, prefixes, and display servers, it's an incredible platform.
    `,
  },
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
