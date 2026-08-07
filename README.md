# 🕸️ abaptiste-portfolio (v2026)

An authoritative, AI-optimized portfolio and digital CV designed to establish a Senior Software Engineer & AI Architect persona. Built using Next.js 15, React 19, and Tailwind CSS v4.

---

## 🎨 Design System: The Architectural Monolith

This portfolio deliberately avoids generic SaaS templates. Its design choices reflect industrial precision and high-end technical publishing:

- **Typography:** `Space Grotesk` (Geometric display headlines) + `JetBrains Mono` (Monospaced structural telemetry).
- **Color Palette:** Obsidian Slate (`#07090e`) surface, Blueprint Grid accents (`#1e293b`), and Telemetry Cyan (`#00f0ff`) / Architectural Gold (`#f59e0b`) signals.
- **Layout:** Asymmetric dual-pane interface with a sticky Telemetry HUD on the left and a prioritized Systems Catalog on the right.

---

## 🌐 Generative Engine Optimization (GEO)

This codebase is optimized for AI search engine crawlers (ChatGPT, Claude, Perplexity, Gemini) to maximize citations:

- **Robots Configuration (`robots.ts`):** Explicitly grants index access to `GPTBot`, `Claude-Web`, `PerplexityBot`, and `Googlebot`.
- **JSON-LD Schema (`JsonLd.tsx`):** Standardizes `Person`, `SoftwareApplication`, and `Dataset` structured schemas.
- **Sitemap Generation (`sitemap.ts`):** Dynamic sitemap crawler for search discovery.

---

## 🎯 Systems Catalog (7 Featured Projects)

### 01 // Research Navigator

- **Category:** AI Multi-Agent Validation Engine
- **Showcase Page:** `/projects/research-navigator`
- **Architecture:** Vue 3 (Frontend) + Go (High-Performance Proxy Runtime) + Python (asynchronous Multi-Agent Engine featuring Tavily search, a Brutal Gatekeeper, and an LLM-as-a-Judge auditor).

### 02 // MyBriefcase Legal Suite

- **Category:** Legal Tech / Document Pipeline
- **Architecture:** Next.js 16 + React 19 + AWS S3 + `pdf-lib`. Automated PDF court bundle compiler with automated cover pages, indexer, drag-and-drop file reordering, and presigned S3 uploads.

### 03 // Bookman Enterprise Data Mesh

- **Category:** GCP PDE Showcase / Multi-DB Search
- **Architecture:** Dataflow ETL + GCP BigQuery ML + Vertex AI Vector Search. Aggregates legacy customer service databases (Bookman, Salesman, Adman) for natural language semantic query lookups.

### 04 // Enterprise RevOps Platform

- **Category:** B2B SaaS / Revenue Operations
- **Architecture:** Next.js 15 + Prisma + Neon Serverless PostgreSQL. Integrates lead seeding, SendGrid campaign logs, and active deal pipelines.

### 05 // Newsletter Herald

- **Category:** Liturgical Newsletter Distribution Pipeline
- **Showcase Page:** `/projects/herald`
- **Architecture:** Next.js 15 + FastAPI + Neon Serverless Postgres + Cloudflare R2 + Groq (Llama 3.1) / local Ollama. Automated parish bulletin processing system with an interactive console for admins, newsletter archive for readers, Google Contacts directory sync, and manual metadata validation overrides.

### 06 // PulseApp (Yello Promises)

- **Category:** HR Tech / Peer Recognition
- **Architecture:** Next.js + Azure Blob Storage + Redux Toolkit. Real-time points allocation and activity feed.

### 07 // Legal Document Sorter

- **Category:** Desktop Automation / File Pipeline
- **Architecture:** Python Watchdog + SQLite + PyPDF + python-docx. Desktop file classifier and sync watchdog with multi-destination Cloud replication.

---

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Generate a production build:

```bash
npm run build
```
