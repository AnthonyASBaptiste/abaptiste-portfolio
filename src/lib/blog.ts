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
    slug: 'fleet-deployment-pitfalls-nemoclaw-multi-agent-linux',
    title: 'Hardening the Fleet: The Battle-Tested Pitfalls & Gotchas of Multi-Agent Linux Sandboxes',
    excerpt:
      'Taking The Claw Deck from a single test container to a full 3-agent autonomous fleet (Hortense, Gwen, and Makeda) with Discord, Tailscale MagicDNS HTTPS, and live read-write Obsidian/Google Drive sync. Here are the 8 real-world pitfalls, proxy drops, POSIX ACL collisions, and Docker gotchas you only discover in the trenches.',
    date: '2026-08-25',
    readTime: '9 min read',
    tags: ['AI Agents', 'NemoClaw', 'Docker', 'Tailscale', 'Discord', 'Linux', 'Security'],
    content: `
# Hardening the Fleet: The Battle-Tested Pitfalls & Gotchas of Multi-Agent Linux Sandboxes

Spawning a single "Hello World" AI agent in a container is easy. Building a persistent, multi-agent autonomous engineering fleet that shares host knowledge bases, communicates over Discord, serves encrypted web UIs over Tailscale, and executes code in hardware-accelerated sandboxes without stepping on each other is a completely different beast.

Over the last 48 hours, I transformed **The Claw Deck** from a proof-of-concept into a 3-agent production roster on Fedora Linux:
- **Hortense 🦞** (*Hermes* + Nemotron 3 Super 120B): System Architecture, Knowledge Graph, and Obsidian Vault master.
- **Gwen 🧭** (*OpenClaw* + MiniMax M3): Web Intelligence, Deep Research, and Live Internet Scout.
- **Makeda 👑** (*Hermes Developer* + Nemotron 3 Super): Code Sentinel, Security Auditor, and Repository Refactorer.

Getting them all running smoothly, concurrently, and securely required navigating an obstacle course of undocumented quirks, Linux kernel sandboxing rules, and container networking gotchas. 

Here are the **8 battle-tested pitfalls and gotchas** we hit—and how to fix every single one.

---

## 1. The OpenClaw Plugin Integrity & Registry Trap

When building the custom OpenClaw container for **Gwen**, the build failed halfway through with a cryptic SHA-512 tarball integrity mismatch:
\`\`\`text
[stage-24 45/60] RUN --network=none ...
verify_openclaw_plugin_integrity() failed for @openclaw/tavily
\`\`\`

### The Gotcha:
OpenClaw 2026.7.1 bakes a deterministic, offline-verifiable archive of reviewed plugins into its base image. It bundles \`@openclaw/brave-plugin@2026.7.1\` by default. When the onboarding wizard prompted for a search provider and we selected Tavily, the build looked for a pre-cached Tavily tarball archive that didn't exist in the offline slice, triggering an immediate integrity abort.

### The Fix:
Stick to bundled first-party plugins (like **Brave Search** or **None**) during base image assembly, and handle third-party egress providers through the host OpenShell gateway proxy rather than modifying the core container build.

---

## 2. The Silent Proxy Drop: Why Discord Bots Return 403 Forbidden

With Gwen and Hortense onboarded with valid Discord bot tokens and Server IDs, their internal logs started throwing:
\`\`\`text
aiohttp.client_exceptions.ClientHttpProxyError: 403 Forbidden
Cannot connect to host discord.com:443 ssl:default [Forbidden]
\`\`\`

### The Gotcha:
NemoClaw sandboxes run behind a local Layer-7 Open Policy Agent (OPA) supervisor proxy (\`10.200.0.1:3128\`). By default, **all outbound network egress is denied**. Registering a Discord bot token in the agent's environment configuration does *not* automatically modify the active firewall policy. The container's HTTP calls to \`gateway.discord.gg:443\` and \`discord.com:443\` were hitting the OPA boundary and getting rejected with HTTP 403.

### The Fix:
You must explicitly compile and apply the \`discord\` network policy preset to the sandbox:
\`\`\`bash
nemoclaw hortense policy add discord --yes
nemoclaw gwen policy add discord --yes
nemoclaw makeda policy add discord --yes
\`\`\`
This opens precise REST and WebSocket routes for Discord without exposing the rest of your local network.

---

## 3. The "Ghost Eyes" Reaction: Discord Mention Mode

Once Gwen connected to Discord, typing a message in \`#gwen\` caused her to react with the 👀 emoji—but she never generated a response.

The gateway logs revealed the secret:
\`\`\`json
{"module": "discord-auto-reply", "channelId": "1541279344406695956", "reason": "no-mention", "message": "discord: skipping guild message"}
\`\`\`

### The Gotcha:
By default, OpenClaw enforces \`DISCORD_REQUIRE_MENTION=1\` in shared servers to prevent spam. The bot acknowledges incoming messages with 👀, but deliberately skips LLM inference unless it is explicitly tagged with a literal Discord mention (\`<@BOT_ID>\`). If you simply type *"Hey Gwen"* without clicking the blue autocomplete tag, the event is dropped.

### The Fix:
Either explicitly tag \`@Gwen\` in the channel, or set \`DISCORD_REQUIRE_MENTION=0\` in the channel plan for dedicated private rooms.

---

## 4. The Double Mode Flag Crash: \`:rw:ro\`

To allow Hortense and Makeda to edit notes and code, we passed \`:rw\` in the \`--host-mount\` flag:
\`\`\`bash
--host-mount "/home/anthony/Documents/Obsidian Vault:/sandbox/vault:rw"
\`\`\`

The container creation crashed instantly:
\`\`\`text
Docker responded with status code 500: invalid volume specification: 
'/home/anthony/Documents/Obsidian Vault:/sandbox/vault:rw:ro'
\`\`\`

### The Gotcha:
NemoClaw's CLI parser expects \`--host-mount <HOST_PATH>:<CONTAINER_PATH>\`. Internally, NemoClaw's safety model automatically appends its own \`:ro\` flag. Passing \`:rw\` at the end meant Docker received two conflicting volume mode arguments (\`:rw:ro\`), creating invalid Docker syntax.

### The Fix:
Always pass clean container paths without trailing mode flags:
\`\`\`bash
--host-mount "/home/anthony/Documents/Obsidian Vault:/sandbox/vault" \
--host-mount "/home/anthony/Projects:/sandbox/projects"
\`\`\`

---

## 5. The Host-Mount Permissions Barrier: Landlock & POSIX ACLs

Even after remounting the container volumes as read-write, the agents ran into a classic Linux permissions wall:
\`\`\`text
touch: cannot touch '/sandbox/vault/test.md': Permission denied
\`\`\`

### The Gotcha:
NemoClaw containers run as an unprivileged, non-root user named \`sandbox\` (UID \`998\`, GID \`999\`). The host user on Fedora is \`anthony\` (UID \`1000\`, GID \`1000\`). Because host directories like \`~/Documents/Obsidian Vault\` and \`~/Projects\` had standard \`755\` (\`rwxr-xr-x\`) permissions, UID 998 fell into the "others" group—giving the agents full read access, but blocking writes.

### The Fix: Recursive POSIX ACLs
Instead of insecurely \`chmod 777\`-ing your entire home directory, use Linux POSIX Access Control Lists (ACLs) to grant UID \`998\` recursive read-write-execute permissions with automatic inheritance for newly created files:

\`\`\`bash
# Grant and inherit read/write/execute for the in-sandbox user (UID 998):
setfacl -R -m u:998:rwx "/home/anthony/Documents/Obsidian Vault"
setfacl -R -d -m u:998:rwx "/home/anthony/Documents/Obsidian Vault"

setfacl -R -m u:998:rwx "/home/anthony/Projects"
setfacl -R -d -m u:998:rwx "/home/anthony/Projects"

setfacl -R -m u:998:rwx "/home/anthony/GoogleDrive"
setfacl -R -d -m u:998:rwx "/home/anthony/GoogleDrive"
\`\`\`

Instantly, all three agents were able to create, edit, update, and manage files directly in the vault and project repos.

---

## 6. The Multi-Hermes API Port Collision (\`8642\` vs \`8643\`)

When spinning up our second Hermes agent (**Makeda**), onboarding crashed at Step 6:
\`\`\`text
Error: listen EADDRINUSE: address already in use 127.0.0.1:8642
\`\`\`

### The Gotcha:
Hermes uses an internal OpenAI-compatible API relay on port \`8642\` by default. When Hortense was started, OpenShell bound host port \`8642\` to Hortense's container. When Makeda tried to spin up, NemoClaw attempted to allocate \`8642\` again and crashed.

### The Fix:
Pass \`NEMOCLAW_HERMES_API_PORT\` to allocate unique internal API ports for concurrent Hermes agents:
\`\`\`bash
# Hortense uses default :8642 (Control UI :8481)
# Makeda uses isolated :8643 (Control UI :8483)
NEMOCLAW_HERMES_API_PORT=8643 nemoclaw onboard \
  --name makeda \
  --agent hermes \
  --control-ui-port 8483 \
  --sandbox-gpu \
  --host-mount "/home/anthony/Documents/Obsidian Vault:/sandbox/vault" \
  --host-mount "/home/anthony/Projects:/sandbox/projects" \
  --fresh
\`\`\`

---

## 7. Understanding Harness Types: Terminal TUI vs. Persistent Daemon

We originally evaluated **LangChain DeepAgents Code (\`dcode\`)** for Makeda. While \`dcode\` is an incredible coding engine, we discovered it had no Discord option during onboarding.

### The Gotcha:
Not all AI agent engines are background chat daemons:
* **Hermes & OpenClaw**: Long-running background daemons with WebSocket gateways, web dashboards, and native chat bridge adapters (Discord, Telegram, Slack).
* **DeepAgents Code (\`dcode\`)**: A dedicated **Terminal TUI / CLI harness** (like Claude Code or Cursor CLI in the terminal), built for interactive shell sessions (\`nemo-deepagents launch\`) rather than asynchronous background messaging.

### The Fix:
To make Makeda accessible from our phones on Discord, we onboarded her under the **Hermes Developer Profile** with code analysis, Git tools, and repo inspection enabled.

---

## 8. Encrypted Mobile Access via Tailscale Serve & MagicDNS

The final goal was being able to monitor and control the fleet from an iPhone or MacBook anywhere in the world without exposing unauthenticated raw ports to the public internet.

### The Solution:
Instead of setting up reverse proxies, port forwarding on home routers, or paying for static IPs, we used **Tailscale Serve** on Fedora:

\`\`\`bash
# 1. Grant user permission to manage Tailscale Serve:
sudo tailscale set --operator=$USER

# 2. Expose the agent web dashboards over Tailscale HTTPS with automatic Let's Encrypt certificates:
tailscale serve --bg --https=8481 http://127.0.0.1:8481
tailscale serve --bg --https=8482 http://127.0.0.1:8482
tailscale serve --bg --https=8483 http://127.0.0.1:8483
\`\`\`

Now, any device on our private Tailnet can open:
* **Hortense (Architecture)**: \`https://itony-razer.taila176a1.ts.net:8481\`
* **Gwen (Research)**: \`https://itony-razer.taila176a1.ts.net:8482\`
* **Makeda (Code Audit)**: \`https://itony-razer.taila176a1.ts.net:8483\`

Zero open firewall ports, genuine TLS certificates with zero browser warnings, and fully end-to-end encrypted.

---

## The Verdict: A True Command Deck

Building a resilient multi-agent workspace isn't just about writing prompts—it's about systems engineering, container isolation, kernel security boundaries, and network topology.

With Hortense, Gwen, and Makeda now live in their respective Discord channels and synced to Obsidian and Google Drive, **The Claw Deck** is fully operational.
    `,
  },
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
