This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
````
public/
  apple-touch-icon.png
  favicon.ico
  favicon.svg
  file.svg
  globe.svg
  icon-32x32.png
  next.svg
  site.webmanifest
  vercel.svg
  window.svg
src/
  app/
    blog/
      [slug]/
        page.tsx
      page.tsx
    projects/
      herald/
        page.tsx
      research-navigator/
        page.tsx
      page.tsx
    apple-icon.png
    favicon.ico
    globals.css
    icon.png
    icon.svg
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
  components/
    Icons.tsx
    JsonLd.tsx
  lib/
    blog.ts
.gitignore
AGENTS.md
CHANGELOG.md
CLAUDE.md
docker-compose.yml
Dockerfile
eslint.config.mjs
generate_favicons.py
next.config.ts
package.json
postcss.config.mjs
README.md
tsconfig.json
vercel.json
````

# Files

## File: public/favicon.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <style>
    .bg {
      fill: #07090e;
    }
    .accent {
      fill: #10b981;
    }
    .accent-stroke {
      stroke: #10b981;
      stroke-width: 2.2px;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    @media (prefers-color-scheme: light) {
      .bg {
        fill: #f1f5f9;
      }
      .accent {
        fill: #059669;
      }
      .accent-stroke {
        stroke: #059669;
      }
    }
  </style>
  <!-- Background -->
  <rect class="bg" width="32" height="32" rx="6" />

  <!-- 'a' -->
  <circle class="accent-stroke" cx="7.5" cy="17" r="2.5" />
  <line class="accent-stroke" x1="10" y1="13.5" x2="10" y2="19.5" />

  <!-- 'b' -->
  <circle class="accent-stroke" cx="15.5" cy="17" r="2.5" />
  <line class="accent-stroke" x1="13" y1="9" x2="13" y2="19.5" />

  <!-- '>' -->
  <path class="accent-stroke" d="M20.5,13.5 L24,16.5 L20.5,19.5" />

  <!-- '_' -->
  <line class="accent-stroke" x1="26" y1="19.5" x2="29.5" y2="19.5" />
</svg>
````

## File: public/file.svg
````xml
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
````

## File: public/globe.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
````

## File: public/next.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
````

## File: public/site.webmanifest
````
{
  "name": "Anthony Baptiste Portfolio",
  "short_name": "AB Portfolio",
  "icons": [
    {
      "src": "/icon-32x32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    {
      "src": "/apple-touch-icon.png",
      "sizes": "180x180",
      "type": "image/png"
    }
  ],
  "theme_color": "#07090e",
  "background_color": "#07090e",
  "display": "standalone"
}
````

## File: public/vercel.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
````

## File: public/window.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
````

## File: src/app/blog/[slug]/page.tsx
````typescript
import React from 'react';
import Link from 'next/link';
import { getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowLeft, Clock, Calendar, Tag, Terminal } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Anthony Baptiste`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans bg-blueprint-grid selection:bg-[#00f0ff] selection:text-slate-950">
      
      {/* Top Telemetry Ribbon */}
      <div className="border-b border-[#1e293b] bg-[#07090e]/90 backdrop-blur px-6 py-2.5 text-xs font-mono-code flex items-center justify-between text-slate-400">
        <Link href="/blog" className="text-[#00f0ff] hover:underline flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> BACK TO KNOWLEDGE BASE
        </Link>
        <span className="text-slate-500">SYSTEM // TECHNICAL NOTE</span>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-16 space-y-8">
        {/* Article Header */}
        <header className="border-b border-[#1e293b] pb-8 space-y-4">
          <div className="flex items-center gap-4 text-xs font-mono-code text-slate-400">
            <span className="flex items-center gap-1 text-[#00f0ff]">
              <Calendar className="w-3.5 h-3.5" /> {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#f59e0b]">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 pt-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs font-mono-code rounded bg-[#0e131f] text-slate-300 border border-[#1e293b]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Body */}
        <div className="space-y-6 text-slate-300 font-sans text-base leading-relaxed">
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('# ')) {
              return (
                <h1 key={idx} className="text-2xl font-display font-bold text-white mt-8 mb-4 pt-4 border-t border-[#1e293b]">
                  {paragraph.replace('# ', '')}
                </h1>
              );
            }
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={idx} className="text-xl font-display font-bold text-[#00f0ff] mt-6 mb-3">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('- ')) {
              return (
                <ul key={idx} className="space-y-2 font-mono-code text-xs text-slate-300 pl-4 border-l-2 border-[#00f0ff]">
                  {paragraph.split('\n').map((li, liIdx) => (
                    <li key={liIdx}>{li.replace('- ', '▸ ')}</li>
                  ))}
                </ul>
              );
            }
            return <p key={idx}>{paragraph}</p>;
          })}
        </div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-[#1e293b] flex items-center justify-between text-xs font-mono-code text-slate-500">
          <span>AUTHOR: ANTHONY BAPTISTE</span>
          <Link href="/blog" className="text-[#00f0ff] hover:underline">
            RETURN TO ALL ARTICLES →
          </Link>
        </footer>
      </article>
    </div>
  );
}
````

## File: src/app/blog/page.tsx
````typescript
import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { Metadata } from 'next';
import { Terminal, ArrowLeft, Tag, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering & Architecture Notes | Anthony Baptiste',
  description:
    'Machine-readable technical notes on AI Multi-Agent Systems, Go Proxy Runtimes, and GCP Cloud Data Engineering.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans bg-blueprint-grid selection:bg-[#00f0ff] selection:text-slate-950">
      
      {/* Top Telemetry Ribbon */}
      <div className="border-b border-[#1e293b] bg-[#07090e]/90 backdrop-blur px-6 py-2.5 text-xs font-mono-code flex items-center justify-between text-slate-400">
        <Link href="/" className="text-[#00f0ff] hover:underline flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> RETURN // PORTFOLIO
        </Link>
        <span className="text-slate-500">KNOWLEDGE_BASE // GEO OPTIMIZED CITATIONS</span>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {/* Header */}
        <header className="border-b border-[#1e293b] pb-8">
          <span className="text-xs font-mono-code text-[#00f0ff] tracking-widest uppercase block mb-2">
            TECHNICAL ARCHITECTURE & FIELD NOTES
          </span>
          <h1 className="text-4xl font-display font-extrabold text-white tracking-tight mb-4">
            Engineering Insights
          </h1>
          <p className="text-slate-300 text-base font-sans leading-relaxed">
            Verifiable architectural patterns on multi-agent LLM systems, high-performance Go runtimes, and enterprise cloud data pipelines.
          </p>
        </header>

        {/* Blog Post List */}
        <div className="space-y-6">
          {posts.map((post, idx) => (
            <article
              key={post.slug}
              className="p-6 bg-[#0e131f] border border-[#1e293b] rounded-2xl hover:border-[#00f0ff]/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between gap-4 font-mono-code text-xs text-slate-500 mb-3">
                <span className="text-[#00f0ff]">ARTICLE_0{idx + 1} //</span>
                <div className="flex items-center gap-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#f59e0b]" /> {post.readTime}
                  </span>
                </div>
              </div>

              <h2 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-[#00f0ff] transition-colors leading-snug">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#1e293b]/60 pt-4 font-mono-code text-xs">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded bg-[#07090e] text-slate-300 border border-[#1e293b]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#00f0ff] font-bold hover:underline flex items-center gap-1"
                >
                  READ ARTICLE →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
````

## File: src/app/projects/herald/page.tsx
````typescript
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  ArrowLeft, 
  ExternalLink, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Terminal, 
  Database,
  Mail,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Newsletter Herald Case Study | Anthony Baptiste',
  description:
    'Deep dive into Newsletter Herald: An automated parish bulletin processing and mailing list management pipeline integrating Next.js 15, FastAPI, Neon DB, and dual LLM parsing.',
};

export default function HeraldCaseStudy() {
  const serviceRoster = [
    {
      service: 'PDF Extraction & Compression',
      engine: 'PyMuPDF & PDF Compressor',
      function: 'Standardizes and shrinks multi-megabyte church bulletins down to web-optimized sizes for fast loading.',
    },
    {
      service: 'Dual LLM Routing',
      engine: 'Groq (Llama 3.1) & Local Llama 3.1',
      function: 'Intelligently routes requests to Groq Cloud APIs and delegates bulk historical cataloging to local Ollama nodes to prevent API rate limiting.',
    },
    {
      service: 'Validation Audit Logs',
      engine: 'Upload Auditor',
      function: 'Records all manual and batch imports, capturing stack traces and LLM parsing errors to display in the Admin Console.',
    },
    {
      service: 'Google Contacts Sync',
      engine: 'Subscribers Sync Engine',
      function: 'Parses Gmail CSV contact structures, mapping and updating subscriber names, emails, and phone numbers in Postgres.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans bg-blueprint-grid selection:bg-[#00f0ff] selection:text-slate-950">
      
      {/* Telemetry Header Ribbon */}
      <div className="border-b border-[#1e293b] bg-[#07090e]/90 backdrop-blur px-6 py-2.5 text-xs font-mono-code flex items-center justify-between text-slate-400">
        <Link href="/" className="text-[#00f0ff] hover:underline flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> RETURN // PORTFOLIO
        </Link>
        <span className="text-[#00f0ff]">SYSTEM // CASE STUDY: NEWSLETTER_HERALD</span>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        
        {/* Case Study Hero Header */}
        <header className="border-b border-[#1e293b] pb-10 space-y-6">
          <div className="flex items-center gap-3 font-mono-code text-xs">
            <span className="px-3 py-1 rounded bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 font-bold uppercase">
              FEATURED SYSTEM SHOWCASE
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">PRODUCTION WORKLOAD</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-none">
            Newsletter Herald
          </h1>

          <p className="text-slate-300 text-lg font-sans leading-relaxed max-w-3xl">
            An automated newsletter summarization and distribution system designed for parish communities. It parses weekly publications, extracts liturgical calendar details, standardizes naming structures, and schedules email deliveries—supported by an interactive Admin Console with Google Contacts syncing and validation override workflows.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 font-mono-code text-sm">
            <a
              href="https://newsletter-herald.vercel.app/preview"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-[#00f0ff] text-slate-950 font-bold hover:bg-cyan-300 transition-all flex items-center gap-2 shadow-lg shadow-[#00f0ff]/20"
            >
              LAUNCH GUEST PREVIEW <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </header>

        {/* System Architecture Flow Diagram */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#1e293b] pb-4">
            <h2 className="text-xs font-mono-code text-[#00f0ff] uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-4 h-4" /> 01 // SYSTEM TOPOLOGY
            </h2>
            <span className="text-xs font-mono-code text-slate-500">SERVERLESS PIPELINE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono-code text-xs">
            
            {/* Tier 1: Frontend */}
            <div className="p-6 bg-[#0e131f] border border-[#1e293b] rounded-2xl space-y-3">
              <div className="text-[#00f0ff] font-bold">TIER 1 // WEB PANEL</div>
              <h3 className="text-base font-display font-bold text-white">Next.js 15 Client</h3>
              <p className="text-slate-400 font-sans text-xs leading-relaxed">
                Renders a public archive feed, subscriber signup portals, and a locked down Admin Console with validation audit tables, editable metadata modals, and subscriber directory sync.
              </p>
              <div className="pt-2 text-[11px] text-slate-500 border-t border-[#1e293b]">
                Stack: Next.js 15, Clerk Auth, Material UI (MUI)
              </div>
            </div>

            {/* Tier 2: FastAPI Gateway */}
            <div className="p-6 bg-[#0e131f] border border-[#00f0ff]/40 rounded-2xl space-y-3 shadow-lg shadow-[#00f0ff]/5">
              <div className="text-[#f59e0b] font-bold">TIER 2 // API GATEWAY</div>
              <h3 className="text-base font-display font-bold text-white">FastAPI Gateway</h3>
              <p className="text-slate-400 font-sans text-xs leading-relaxed">
                Manages uploads, coordinates prompt generation, interfaces with database schemas, logs ingestion stack traces, and proxies PDF download files directly from secure storage.
              </p>
              <div className="pt-2 text-[11px] text-slate-500 border-t border-[#1e293b]">
                Stack: Python 3.12, FastAPI, SQLAlchemy
              </div>
            </div>

            {/* Tier 3: Storage & DB */}
            <div className="p-6 bg-[#0e131f] border border-[#1e293b] rounded-2xl space-y-3">
              <div className="text-[#00f0ff] font-bold">TIER 3 // ARCHIVE STORAGE</div>
              <h3 className="text-base font-display font-bold text-white">Database & Assets</h3>
              <p className="text-slate-400 font-sans text-xs leading-relaxed">
                Maintains transactional records, delivery outcomes, and subscriber tables on Neon Serverless Postgres. Stores compressed assets and thumbnails in Cloudflare R2 / Google Drive.
              </p>
              <div className="pt-2 text-[11px] text-slate-500 border-t border-[#1e293b]">
                Stack: Neon Postgres, Cloudflare R2, Google Drive API
              </div>
            </div>

          </div>
        </section>

        {/* Validation Pathways & Override HUD */}
        <section className="p-8 bg-[#0e131f] border border-[#1e293b] rounded-2xl space-y-6">
          <div className="border-b border-[#1e293b] pb-4 flex items-center justify-between">
            <h2 className="text-xs font-mono-code text-[#00f0ff] uppercase tracking-widest flex items-center gap-2">
              <Activity className="w-4 h-4" /> 02 // INGESTION GATES & VALIDATION
            </h2>
            <span className="text-xs font-mono-code text-[#f59e0b]">HUMAN IN THE LOOP</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono-code text-xs">
            <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/30 space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-bold">
                <XCircle className="w-4 h-4" /> VALIDATION ERROR
              </div>
              <p className="text-slate-300 font-sans text-xs">
                AI extracts target Sunday date that mismatch next Sunday criteria. File is locked under the "failed_validation" status for audit log review.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <AlertTriangle className="w-4 h-4" /> MANUAL DRAFT REVIEW
              </div>
              <p className="text-slate-300 font-sans text-xs">
                Admin overrides metadata errors using the correction modal, choosing to either "Schedule Email Delivery" or mark as "Archive Only".
              </p>
            </div>

            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4" /> PRODUCTION DELIVERY
              </div>
              <p className="text-slate-300 font-sans text-xs">
                Cron triggers the asynchronous delivery worker. Scheduled newsletters are emailed to active subscribers, creating tracking logs in Postgres.
              </p>
            </div>
          </div>
        </section>

        {/* System Service definitions */}
        <section className="space-y-6">
          <div className="border-b border-[#1e293b] pb-4">
            <h2 className="text-xs font-mono-code text-[#00f0ff] uppercase tracking-widest flex items-center gap-2">
              <Cpu className="w-4 h-4" /> 03 // PIPELINE SERVICE MAP
            </h2>
          </div>

          <div className="overflow-x-auto border border-[#1e293b] rounded-2xl">
            <table className="w-full text-left font-mono-code text-xs">
              <thead className="bg-[#07090e] border-b border-[#1e293b] text-slate-400">
                <tr>
                  <th className="p-4">PIPELINE STAGE</th>
                  <th className="p-4">TECHNOLOGY</th>
                  <th className="p-4">ARCHITECTURE ROLE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e293b] text-slate-300">
                {serviceRoster.map((srv, idx) => (
                  <tr key={idx} className="hover:bg-[#0e131f]/60 transition-colors">
                    <td className="p-4 font-bold text-white">{srv.service}</td>
                    <td className="p-4 text-[#00f0ff]">{srv.engine}</td>
                    <td className="p-4 font-sans text-slate-400 text-xs">{srv.function}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer Navigation */}
        <footer className="pt-8 border-t border-[#1e293b] flex items-center justify-between font-mono-code text-xs">
          <Link href="/" className="text-[#00f0ff] hover:underline flex items-center gap-1">
            ← RETURN TO PORTFOLIO
          </Link>
          <a
            href="https://newsletter-herald.vercel.app/preview"
            target="_blank"
            rel="noreferrer"
            className="text-[#f59e0b] hover:underline flex items-center gap-1"
          >
            VISIT LIVE PREVIEW <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </footer>

      </div>
    </div>
  );
}
````

## File: src/app/globals.css
````css
@import "tailwindcss";

:root {
  --bg-obsidian: #07090e;
  --bg-slate-panel: #0e131f;
  --border-blueprint: #1e293b;
  --border-active: #334155;
  --signal-cyan: #00f0ff;
  --signal-gold: #f59e0b;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
}

body {
  background-color: var(--bg-obsidian);
  color: var(--text-main);
  font-family: var(--font-inter), system-ui, sans-serif;
  overflow-x: hidden;
}

.font-display {
  font-family: var(--font-space-grotesk), sans-serif;
}

.font-mono-code {
  font-family: var(--font-jetbrains-mono), monospace;
}

/* Blueprint Grid Pattern */
.bg-blueprint-grid {
  background-image: 
    linear-gradient(to right, rgba(30, 41, 59, 0.35) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(30, 41, 59, 0.35) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: var(--bg-obsidian);
}
::-webkit-scrollbar-thumb {
  background: var(--border-blueprint);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--signal-cyan);
}
````

## File: src/app/icon.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <style>
    .bg {
      fill: #07090e;
    }
    .accent {
      fill: #10b981;
    }
    .accent-stroke {
      stroke: #10b981;
      stroke-width: 2.2px;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    @media (prefers-color-scheme: light) {
      .bg {
        fill: #f1f5f9;
      }
      .accent {
        fill: #059669;
      }
      .accent-stroke {
        stroke: #059669;
      }
    }
  </style>
  <!-- Background -->
  <rect class="bg" width="32" height="32" rx="6" />

  <!-- 'a' -->
  <circle class="accent-stroke" cx="7.5" cy="17" r="2.5" />
  <line class="accent-stroke" x1="10" y1="13.5" x2="10" y2="19.5" />

  <!-- 'b' -->
  <circle class="accent-stroke" cx="15.5" cy="17" r="2.5" />
  <line class="accent-stroke" x1="13" y1="9" x2="13" y2="19.5" />

  <!-- '>' -->
  <path class="accent-stroke" d="M20.5,13.5 L24,16.5 L20.5,19.5" />

  <!-- '_' -->
  <line class="accent-stroke" x1="26" y1="19.5" x2="29.5" y2="19.5" />
</svg>
````

## File: src/app/robots.ts
````typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'Claude-Web', 'PerplexityBot', 'Googlebot'],
        allow: '/',
      },
    ],
    sitemap: 'https://anthonybaptiste.dev/sitemap.xml',
  };
}
````

## File: src/app/sitemap.ts
````typescript
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
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
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
````

## File: src/components/Icons.tsx
````typescript
import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const GithubIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Lucide drop-in replacements
export const Github = GithubIcon;
export const Linkedin = LinkedinIcon;
````

## File: src/lib/blog.ts
````typescript
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
````

## File: CHANGELOG.md
````markdown
# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### 0.1.1 (2026-08-07)


### Features

* add favicon assets, AGENTS rules, and vercel build controls [skip vercel] ([5aeebc2](https://github.com/AnthonyASBaptiste/abaptiste-portfolio/commit/5aeebc22b17a8b3c7ec76bd960081bdfca3f5a8d))
* add Newsletter Herald case study and Person schema component ([15211a9](https://github.com/AnthonyASBaptiste/abaptiste-portfolio/commit/15211a904d45fd455889478c18c377c54fbf8dfd))
* add projects catalog page with filtering and search functionality ([fe951b9](https://github.com/AnthonyASBaptiste/abaptiste-portfolio/commit/fe951b9973edaee909959a62d6c58182b0d25277))
* initial commit of abaptiste-portfolio (The Architectural Monolith design system, GEO standards, blog engine, Research Navigator case study) ([5dc5386](https://github.com/AnthonyASBaptiste/abaptiste-portfolio/commit/5dc5386deafad9ebe89eb2a624d9eb78066e3a07))
* update homepage and project dashboard layouts with case study integrations ([efd2375](https://github.com/AnthonyASBaptiste/abaptiste-portfolio/commit/efd2375e31792fc9a50bcc519a93f0463187a7b0))
````

## File: CLAUDE.md
````markdown
@AGENTS.md
````

## File: docker-compose.yml
````yaml
services:
  # Next.js Web App
  web:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: portfolio-web
    ports:
      - "3000:3000"
    environment:
      - PORT=3000

volumes:
  node_modules:
````

## File: Dockerfile
````dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run dev"]
````

## File: eslint.config.mjs
````javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
````

## File: generate_favicons.py
````python
import os
from PIL import Image, ImageDraw

def generate_favicons():
    # Target directory
    target_dir = r"C:\Users\CBCGaming\Documents\Projects\portfolio-2026\src\app"
    public_dir = r"C:\Users\CBCGaming\Documents\Projects\portfolio-2026\public"
    os.makedirs(target_dir, exist_ok=True)
    os.makedirs(public_dir, exist_ok=True)

    # Colors
    bg_color = (7, 9, 14)       # #07090e near black
    neon_green = (16, 185, 129) # #10B981 emerald green
    line_width = 30             # Bold enough to be visible when downscaled

    # 1. Create high-resolution base image (512x512)
    img = Image.new("RGBA", (512, 512), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Draw rounded background card
    # Card padding to look like a rounded app icon
    draw.rounded_rectangle([(24, 24), (488, 488)], radius=96, fill=bg_color)

    # Draw 'a'
    # loop ellipse: (60, 230) to (150, 350)
    # stem line: (150, 210) to (150, 350)
    draw.ellipse([(65, 235), (145, 345)], outline=neon_green, width=line_width)
    draw.line([(150, 210), (150, 350)], fill=neon_green, width=line_width)

    # Draw 'b'
    # loop ellipse: (180, 230) to (270, 350)
    # stem line: (180, 140) to (180, 350)
    draw.ellipse([(185, 235), (265, 345)], outline=neon_green, width=line_width)
    draw.line([(180, 140), (180, 350)], fill=neon_green, width=line_width)

    # Draw '>'
    # arrow top: (300, 210) -> (360, 270)
    # arrow bottom: (360, 270) -> (300, 330)
    draw.line([(300, 210), (360, 270)], fill=neon_green, width=line_width, joint="round")
    draw.line([(360, 270), (300, 330)], fill=neon_green, width=line_width, joint="round")

    # Draw '_'
    # horizontal cursor: (390, 335) to (450, 335)
    draw.line([(390, 335), (450, 335)], fill=neon_green, width=line_width)

    # Save PNG outputs
    # 180x180 for apple-touch-icon
    apple_icon = img.resize((180, 180), Resampling.LANCZOS if hasattr(Image, 'Resampling') else Image.ANTIALIAS)
    apple_icon.save(os.path.join(target_dir, "apple-icon.png"), "PNG")
    apple_icon.save(os.path.join(public_dir, "apple-touch-icon.png"), "PNG")

    # 32x32 for standard icon
    icon_32 = img.resize((32, 32), Resampling.LANCZOS if hasattr(Image, 'Resampling') else Image.ANTIALIAS)
    icon_32.save(os.path.join(target_dir, "icon.png"), "PNG")
    icon_32.save(os.path.join(public_dir, "icon-32x32.png"), "PNG")

    # Save multi-resolution ICO
    ico_sizes = [16, 32, 48]
    ico_imgs = []
    for size in ico_sizes:
        ico_imgs.append(img.resize((size, size), Resampling.LANCZOS if hasattr(Image, 'Resampling') else Image.ANTIALIAS))
    
    # Save as favicon.ico
    ico_imgs[1].save(
        os.path.join(target_dir, "favicon.ico"),
        format="ICO",
        sizes=[(size, size) for size in ico_sizes],
        append_images=ico_imgs
    )
    ico_imgs[1].save(
        os.path.join(public_dir, "favicon.ico"),
        format="ICO",
        sizes=[(size, size) for size in ico_sizes],
        append_images=ico_imgs
    )

    print("Favicons successfully generated!")

if __name__ == "__main__":
    # PIL image resizing compatibility
    try:
        from PIL.Image import Resampling
    except ImportError:
        pass
    generate_favicons()
````

## File: next.config.ts
````typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
````

## File: postcss.config.mjs
````javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
````

## File: vercel.json
````json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "ignoreCommand": "git log -1 --pretty=format:'%s' | grep -iE '\\[skip vercel\\]|\\[skip ci\\]|chore:' && exit 0 || exit 1"
}
````

## File: src/app/projects/page.tsx
````typescript
'use client';


import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ExternalLink, 
  Activity, 
  Search, 
  Star,
  ChevronRight
} from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';

export default function ProjectsCatalog() {
  const [filter, setFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    {
      id: '01',
      title: 'Research Navigator',
      category: 'AI & AGENTS',
      categoryLabel: 'AI Multi-Agent Validation Engine',
      desc: 'An automated validation platform that stress-tests business models against market size, unit economics, and customer acquisition costs. Generates structured risk evaluation dossiers for startup validation.',
      tech: ['Vue 3', 'Go', 'Python', 'WebSockets'],
      demoUrl: '/projects/research-navigator',
      badge: 'FEATURED PROJECT',
      starred: true,
      metrics: 'Adversarial Risk Verification & Dossier Generation',
    },
    {
      id: '02',
      title: 'MyBriefcase Legal Suite',
      category: 'LEGAL TECH',
      categoryLabel: 'Legal Tech / Document Pipeline',
      desc: 'A court-compliant document bundling tool. Aggregates multiple legal PDFs, generates automated cover pages and indices, and uploads compiled briefs to AWS S3.',
      tech: ['Next.js 16', 'React 19', 'AWS S3', 'pdf-lib'],
      demoUrl: '#',
      badge: 'FEATURED PROJECT',
      starred: true,
      metrics: 'PDF Compilation Engine • Presigned URLs',
    },
    {
      id: '03',
      title: 'Bookman Enterprise Data Mesh',
      category: 'ENTERPRISE SAAS',
      categoryLabel: 'Multi-DB Search Engine',
      desc: 'Consolidates customer support records from legacy databases. Transforms SQL tables via Python ETL scripts to run semantic lookups using BigQuery ML and Vertex AI Vector Search.',
      tech: ['Python ETL', 'GCP BigQuery ML', 'Vertex AI Vector Search', 'Next.js'],
      demoUrl: '#',
      badge: 'GCP PDE SHOWCASE',
      starred: false,
      metrics: 'Vector Indexing • SQL Aggregation',
    },
    {
      id: '04',
      title: 'Enterprise RevOps Platform',
      category: 'ENTERPRISE SAAS',
      categoryLabel: 'B2B SaaS / Revenue Operations',
      desc: 'Merged CRM and lead-seeding tool. Tracks sales outreach campaigns, coordinates target lead imports, and manages MRR pipelines.',
      tech: ['Next.js 15', 'Prisma', 'Neon Postgres', 'Tailwind CSS v4'],
      demoUrl: '#',
      badge: 'MERGED SAAS',
      starred: false,
      metrics: 'Neon Database Branching • Clerk SSO',
    },
    {
      id: '05',
      title: 'Newsletter Herald',
      category: 'AI & AGENTS',
      categoryLabel: 'Serverless Data Extraction',
      desc: 'An automated document processing pipeline. Parses incoming PDF and Word newsletters, standardizes metadata, generates multi-stage AI summaries, and dispatches weekly newsletters to a parish subscriber directory.',
      tech: ['Next.js 15', 'FastAPI', 'Neon Postgres', 'Cloudflare R2'],
      demoUrl: 'https://newsletter-herald.vercel.app',
      badge: 'FEATURED PROJECT',
      starred: true,
      metrics: 'Dual LLM Route • R2 Proxy Delivery',
    },
    {
      id: '06',
      title: 'PulseApp (Yello Promises)',
      category: 'ENTERPRISE SAAS',
      categoryLabel: 'HR Tech / Peer Recognition',
      desc: 'A peer-to-peer appreciation feed. Implements points allocation rules and real-time activity updates with Azure Blob file attachments.',
      tech: ['Next.js', 'Azure Storage', 'Redux Toolkit', 'Prisma'],
      demoUrl: '#',
      badge: 'ENTERPRISE HR',
      starred: false,
      metrics: 'Transaction-Safe Points Ledger',
    },
    {
      id: '07',
      title: 'Legal Document Sorter',
      category: 'LEGAL TECH',
      categoryLabel: 'Desktop Automation / File Pipeline',
      desc: 'A local background daemon that monitors download directories, uses regular expressions to classify legal documents by case caption, and automatically synchronizes them to Google Drive and OneDrive folders.',
      tech: ['Python', 'Watchdog', 'SQLite', 'PyPDF', 'python-docx'],
      demoUrl: 'https://github.com/AnthonyASBaptiste/legal-document-sorter',
      badge: 'DESKTOP TOOL',
      starred: false,
      metrics: 'Safe Deletion Ingestion Loop',
    },
  ];

  const categories = ['ALL', 'AI & AGENTS', 'LEGAL TECH', 'ENTERPRISE SAAS'];

  const filteredProjects = projects.filter(proj => {
    const matchesCategory = filter === 'ALL' || proj.category === filter;
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          proj.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans bg-blueprint-grid selection:bg-[#00f0ff] selection:text-slate-950">
      
      {/* Top Status Telemetry Ribbon */}
      <div className="border-b border-[#1e293b] bg-[#07090e]/90 backdrop-blur px-6 py-2.5 text-xs font-mono-code flex items-center justify-between text-slate-400">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-[#00f0ff] hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> RETURN // PORTFOLIO
          </Link>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span>SYSTEMS_CATALOG // TOTAL: {projects.length}</span>
        </div>
        <div className="text-slate-400 hidden md:flex items-center gap-3">
          <span>AI SEARCH OPTIMIZED</span>
          <span className="text-emerald-400">[GEO INDEX ACTIVE]</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Block */}
        <header className="border-b border-[#1e293b] pb-8 mb-12">
          <div className="text-xs font-mono-code text-[#00f0ff] tracking-widest uppercase mb-2">
            REPOSITORY INDEX // SYSTEM_WORKS
          </div>
          <h1 className="text-4xl font-display font-extrabold text-white tracking-tight">
            Full Systems Catalog
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mt-2 font-sans">
            A comprehensive registry of production applications, distributed agent engines, and custom enterprise tools developed for Caribbean and international clients.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Panel: Filters & HUD Control */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="p-6 bg-[#0e131f] border border-[#1e293b] rounded-2xl space-y-6">
              
              {/* Search Box */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono-code uppercase tracking-wider text-slate-500 block">
                  Search Registry
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Keywords or Stack..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#07090e] border border-[#1e293b] rounded-xl px-3 py-2 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#00f0ff] font-mono-code"
                  />
                  <Search className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-2.5" />
                </div>
              </div>

              {/* Category Filter List */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono-code uppercase tracking-wider text-slate-500 block">
                  Filter by Domain
                </label>
                <div className="flex flex-col gap-1.5 font-mono-code text-xs">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl border transition-all flex items-center justify-between group ${
                        filter === cat
                          ? 'bg-[#00f0ff]/10 border-[#00f0ff]/40 text-[#00f0ff]'
                          : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-[#07090e]/40'
                      }`}
                    >
                      <span>{cat}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                        filter === cat ? 'translate-x-0 text-[#00f0ff]' : 'translate-x-[-4px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 text-slate-500'
                      }`} />
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Quick Contacts HUD */}
            <div className="p-6 bg-[#0e131f]/40 border border-[#1e293b] rounded-2xl font-mono-code text-xs space-y-4">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest block">TELEMETRY_HUD // CONTACT</span>
              <div className="space-y-2">
                <a
                  href="https://github.com/AnthonyASBaptiste"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-[#00f0ff] transition-all"
                >
                  <Github className="w-4 h-4 text-[#00f0ff]" /> github.com/AnthonyASBaptiste
                </a>
                <a
                  href="https://www.linkedin.com/in/anthonybaptiste/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-[#00f0ff] transition-all"
                >
                  <Linkedin className="w-4 h-4 text-[#00f0ff]" /> linkedin.com/in/anthonybaptiste
                </a>
              </div>
            </div>
          </aside>

          {/* Right Panel: Projects List Grid */}
          <main className="lg:col-span-9 space-y-6">
            <div className="flex items-center justify-between border-b border-[#1e293b] pb-4">
              <span className="text-xs font-mono-code text-slate-500">
                SHOWING: {filteredProjects.length} OF {projects.length} PROJECTS
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs font-mono-code text-[#00f0ff] hover:underline"
                >
                  [CLEAR SEARCH]
                </button>
              )}
            </div>

            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((proj) => (
                  <div
                    key={proj.id}
                    className={`p-6 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between ${
                      proj.starred
                        ? 'bg-[#0e131f] border-[#00f0ff]/40 hover:border-[#00f0ff] shadow-xl shadow-[#00f0ff]/5'
                        : 'bg-[#0e131f]/40 border-[#1e293b] hover:border-slate-600'
                    }`}
                  >
                    <div>
                      {/* Card Header */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <span className="font-mono-code text-xs text-slate-500">
                          {proj.id} <span className="text-[#00f0ff]">{proj.category}</span>
                        </span>
                        <span
                          className={`px-2 py-0.5 text-[9px] font-mono-code font-bold uppercase tracking-wider rounded border ${
                            proj.starred
                              ? 'bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]/30'
                              : 'bg-slate-900 text-slate-400 border-slate-800'
                          }`}
                        >
                          {proj.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors flex items-center gap-2">
                        {proj.title}
                        {proj.starred && <Star className="w-3.5 h-3.5 fill-[#00f0ff] text-[#00f0ff] flex-shrink-0" />}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 text-xs leading-relaxed mb-6 font-sans">
                        {proj.desc}
                      </p>
                    </div>

                    {/* Bottom Info: Metrics & Tech Stack */}
                    <div className="pt-4 border-t border-[#1e293b]/60 space-y-4">
                      <div className="flex items-center justify-between font-mono-code text-[11px]">
                        <span className="text-slate-400 flex items-center gap-1">
                          <Activity className="w-3.5 h-3.5 text-[#f59e0b] flex-shrink-0" /> {proj.metrics}
                        </span>
                        
                        {proj.demoUrl !== '#' && (
                          <a
                            href={proj.demoUrl}
                            target={proj.demoUrl.startsWith('http') ? '_blank' : '_self'}
                            rel="noreferrer"
                            className="text-[#00f0ff] hover:underline flex items-center gap-0.5"
                          >
                            LINK <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {proj.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-[#07090e] text-slate-400 border border-[#1e293b] text-[10px] font-mono-code"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center border border-dashed border-[#1e293b] rounded-2xl font-mono-code text-xs text-slate-500">
                NO PROJECTS MATCHED THE SEARCH OR FILTER CRITERIA.
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="border-t border-[#1e293b] mt-20 px-6 py-8 text-center font-mono-code text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© 2026 ANTHONY BAPTISTE // ARCHITECTURAL MONOLITH SYSTEM</span>
          <span className="text-[#00f0ff]">GEO SEARCH READY</span>
        </div>
      </footer>
    </div>
  );
}
````

## File: src/app/layout.tsx
````typescript
import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Anthony Baptiste | Senior AI Architect & Software Engineer',
  description:
    'Senior Software Engineer at Medial Health LLC. AI Architect specializing in multi-agent systems, high-performance Go runtimes, and GCP cloud data engineering.',
  manifest: '/site.webmanifest',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable}`}
    >
      <body className="antialiased bg-[#07090e] text-slate-100">{children}</body>
    </html>
  );
}
````

## File: src/components/JsonLd.tsx
````typescript
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
      'https://github.com/AnthonyASBaptiste',
      'https://www.linkedin.com/in/anthonybaptiste/',
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
````

## File: .gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# AI Agent Maps
GRAPH.md
````

## File: AGENTS.md
````markdown
# Agent Development Rules & Branching Policy

## 🌿 Branching Rules
- **Default Branch**: `develop`. All AI agent PRs (Jules, Antigravity, etc.) MUST target `develop`.
- **Production Branch**: `main`. Reserved strictly for tagged releases.
- **Branch Naming**: `ab-<type>-<short-description>` (e.g., `ab-feat-nav`, `ab-fix-footer`, `ab-chore-cleanup`).

## ⚡ Vercel Build Optimization
- Include `[skip vercel]` in commit messages for minor PRs, chores, and docs updates to prevent consuming Vercel free tier build minutes.

## 📖 Next.js 16 Rules
This project uses Next.js 16 (Turbopack). Read `node_modules/next/dist/docs/` before writing custom server code.
````

## File: src/app/projects/research-navigator/page.tsx
````typescript
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, ExternalLink, Cpu, ShieldCheck, Activity, Layers, CheckCircle2, AlertTriangle, XCircle, Terminal } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Research Navigator Case Study | Anthony Baptiste',
  description:
    'Deep dive into Research Navigator: An Active Validation Coach for startups using a multi-agent orchestration engine, Go proxy runtime, and Python LLM-as-a-Judge auditor.',
};

export default function ResearchNavigatorCaseStudy() {
  const agentRoster = [
    {
      role: 'Input Validator',
      tech: 'Validation Engine',
      function: 'Evaluates baseline assumptions against structural validation rubrics.',
    },
    {
      role: 'Research Coordinator',
      tech: 'Orchestration Service',
      function: 'Determines key testing parameters and structures automated evaluation stages.',
    },
    {
      role: 'Market Indexer',
      tech: 'Data Ingestion Service',
      function: 'Gathers competitive signals and pricing references from online data sets.',
    },
    {
      role: 'Evaluation Auditor',
      tech: 'Analysis Engine',
      function: 'Reviews and scores accumulated metrics to output a final validation brief.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans bg-blueprint-grid selection:bg-[#00f0ff] selection:text-slate-950">
      
      {/* Telemetry Header Ribbon */}
      <div className="border-b border-[#1e293b] bg-[#07090e]/90 backdrop-blur px-6 py-2.5 text-xs font-mono-code flex items-center justify-between text-slate-400">
        <Link href="/" className="text-[#00f0ff] hover:underline flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> RETURN // PORTFOLIO
        </Link>
        <span className="text-[#00f0ff]">SYSTEM // CASE STUDY: RESEARCH_NAVIGATOR</span>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        
        {/* Case Study Hero Header */}
        <header className="border-b border-[#1e293b] pb-10 space-y-6">
          <div className="flex items-center gap-3 font-mono-code text-xs">
            <span className="px-3 py-1 rounded bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 font-bold uppercase">
              FEATURED SYSTEM SHOWCASE
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">DEMO DAY SPRINT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-none">
            Research Navigator
          </h1>

          <p className="text-slate-300 text-lg font-sans leading-relaxed max-w-3xl">
            An automated validation platform that stress-tests business models against market size, unit economics, and customer acquisition costs. It shifts startup validation from static outlines to automated, gate-driven research loops that generate structured evaluation dossiers.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 font-mono-code text-sm">
            <a
              href="https://discover.research-navigator.ai"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-[#00f0ff] text-slate-950 font-bold hover:bg-cyan-300 transition-all flex items-center gap-2 shadow-lg shadow-[#00f0ff]/20"
            >
              LAUNCH LIVE SYSTEM <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </header>

        {/* System Architecture Flow Diagram */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#1e293b] pb-4">
            <h2 className="text-xs font-mono-code text-[#00f0ff] uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-4 h-4" /> 01 // SYSTEM TOPOLOGY
            </h2>
            <span className="text-xs font-mono-code text-slate-500">HYBRID DEPLOYMENT</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono-code text-xs">
            
            {/* Tier 1: Frontend */}
            <div className="p-6 bg-[#0e131f] border border-[#1e293b] rounded-2xl space-y-3">
              <div className="text-[#00f0ff] font-bold">TIER 1 // FRONTEND PANEL</div>
              <h3 className="text-base font-display font-bold text-white">Client Dashboard</h3>
              <p className="text-slate-400 font-sans text-xs leading-relaxed">
                Renders interactive metrics status indicators. Manages validation scores, active user feedback, and dossier export formats.
              </p>
              <div className="pt-2 text-[11px] text-slate-500 border-t border-[#1e293b]">
                Stack: Vue 3, Pinia, Tailwind CSS
              </div>
            </div>

            {/* Tier 2: Go Proxy */}
            <div className="p-6 bg-[#0e131f] border border-[#00f0ff]/40 rounded-2xl space-y-3 shadow-lg shadow-[#00f0ff]/5">
              <div className="text-[#f59e0b] font-bold">TIER 2 // WEBSOCKET ROUTER</div>
              <h3 className="text-base font-display font-bold text-white">API Connection Hub</h3>
              <p className="text-slate-400 font-sans text-xs leading-relaxed">
                Coordinates data streaming, user validation, and message routing. Provides low-latency connections to the backend processing services.
              </p>
              <div className="pt-2 text-[11px] text-slate-500 border-t border-[#1e293b]">
                Stack: Go (Golang), WebSockets, Gin
              </div>
            </div>

            {/* Tier 3: Python AI Brain */}
            <div className="p-6 bg-[#0e131f] border border-[#1e293b] rounded-2xl space-y-3">
              <div className="text-[#00f0ff] font-bold">TIER 3 // AGENT ENGINE</div>
              <h3 className="text-base font-display font-bold text-white">Analysis Service</h3>
              <p className="text-slate-400 font-sans text-xs leading-relaxed">
                Orchestrates automated evaluation cycles. Runs indexing tasks, evaluates business metrics, and builds structured evaluation dossiers.
              </p>
              <div className="pt-2 text-[11px] text-slate-500 border-t border-[#1e293b]">
                Stack: Python, FastAPI
              </div>
            </div>

          </div>
        </section>

        {/* Traffic Light UI Interactive Concept Showcase */}
        <section className="p-8 bg-[#0e131f] border border-[#1e293b] rounded-2xl space-y-6">
          <div className="border-b border-[#1e293b] pb-4 flex items-center justify-between">
            <h2 className="text-xs font-mono-code text-[#00f0ff] uppercase tracking-widest flex items-center gap-2">
              <Activity className="w-4 h-4" /> 02 // VALIDATION STATUS PATHWAY
            </h2>
            <span className="text-xs font-mono-code text-[#f59e0b]">QUALIFICATION GATES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono-code text-xs">
            <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/30 space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-bold">
                <XCircle className="w-4 h-4" /> RED // STAGE BLOCKED
              </div>
              <p className="text-slate-300 font-sans text-xs">
                System pauses execution due to unbacked or missing market metrics. The workflow restarts once target evidence is provided.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <AlertTriangle className="w-4 h-4" /> YELLOW // ACTIVE AUDIT
              </div>
              <p className="text-slate-300 font-sans text-xs">
                Targeted information collection. System coordinates data scans and queries relevant data sets.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4" /> GREEN // VERIFIED
              </div>
              <p className="text-slate-300 font-sans text-xs">
                Milestone approved. Evaluation engine marks verified data points and records primary source citations.
              </p>
            </div>
          </div>
        </section>

        {/* Multi-Agent Roster Table */}
        <section className="space-y-6">
          <div className="border-b border-[#1e293b] pb-4">
            <h2 className="text-xs font-mono-code text-[#00f0ff] uppercase tracking-widest flex items-center gap-2">
              <Cpu className="w-4 h-4" /> 03 // AGENT SERVICE DEFINITIONS
            </h2>
          </div>

          <div className="overflow-x-auto border border-[#1e293b] rounded-2xl">
            <table className="w-full text-left font-mono-code text-xs">
              <thead className="bg-[#07090e] border-b border-[#1e293b] text-slate-400">
                <tr>
                  <th className="p-4">AGENT DEFINITION</th>
                  <th className="p-4">ENGINE</th>
                  <th className="p-4">OPERATIONAL TASK</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e293b] text-slate-300">
                {agentRoster.map((ag, idx) => (
                  <tr key={idx} className="hover:bg-[#0e131f]/60 transition-colors">
                    <td className="p-4 font-bold text-white">{ag.role}</td>
                    <td className="p-4 text-[#00f0ff]">{ag.tech}</td>
                    <td className="p-4 font-sans text-slate-400 text-xs">{ag.function}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer Navigation */}
        <footer className="pt-8 border-t border-[#1e293b] flex items-center justify-between font-mono-code text-xs">
          <Link href="/" className="text-[#00f0ff] hover:underline flex items-center gap-1">
            ← RETURN TO PORTFOLIO
          </Link>
          <a
            href="https://discover.research-navigator.ai"
            target="_blank"
            rel="noreferrer"
            className="text-[#f59e0b] hover:underline flex items-center gap-1"
          >
            VISIT DISCOVER.RESEARCH-NAVIGATOR.AI <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </footer>

      </div>
    </div>
  );
}
````

## File: package.json
````json
{
  "name": "portfolio-2026",
  "version": "0.1.1",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "release": "standard-version",
    "release:patch": "standard-version --release-as patch",
    "release:minor": "standard-version --release-as minor",
    "release:major": "standard-version --release-as major",
    "release:revert": "git tag -d v$(node -p \"require('./package.json').version\") && git reset --hard HEAD~1"
  },
  "dependencies": {
    "@portabletext/react": "^6.2.0",
    "framer-motion": "^12.42.2",
    "lucide-react": "^1.26.0",
    "next": "16.2.11",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.11",
    "tailwindcss": "^4",
    "typescript": "^5",
    "standard-version": "^9.5.0"
  }
}
````

## File: README.md
````markdown
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
````

## File: src/app/page.tsx
````typescript
import React from 'react';
import Link from 'next/link';
import { PersonJsonLd } from '@/components/JsonLd';
import { getAllPosts } from '@/lib/blog';
import { Terminal, Star, ExternalLink, Activity, Layers } from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';

export default function Home() {
  const posts = getAllPosts();

  const projects = [
    {
      id: '01',
      title: 'Research Navigator',
      category: 'AI Multi-Agent Validation Engine',
      desc: 'An automated validation platform that stress-tests business models against market size, unit economics, and customer acquisition costs. Generates structured risk evaluation dossiers for startup validation.',
      tech: ['Vue 3', 'Go', 'Python', 'WebSockets'],
      demoUrl: '/projects/research-navigator',
      badge: 'FEATURED PROJECT',
      starred: true,
      metrics: 'Adversarial Risk Verification & Dossier Generation',
    },
    {
      id: '02',
      title: 'MyBriefcase Legal Suite',
      category: 'Legal Tech / Document Pipeline',
      desc: 'A court-compliant document bundling tool. Aggregates multiple legal PDFs, generates automated cover pages and indices, and uploads compiled briefs to AWS S3.',
      tech: ['Next.js 16', 'React 19', 'AWS S3', 'pdf-lib'],
      demoUrl: '#',
      badge: 'FEATURED PROJECT',
      starred: true,
      metrics: 'PDF Compilation Engine • Presigned URLs',
    },
    {
      id: '03',
      title: 'Bookman Enterprise Data Mesh',
      category: 'Multi-DB Search Engine',
      desc: 'Consolidates customer support records from legacy databases. Transforms SQL tables via Python ETL scripts to run semantic lookups using BigQuery ML and Vertex AI Vector Search.',
      tech: ['Python ETL', 'GCP BigQuery ML', 'Vertex AI Vector Search', 'Next.js'],
      demoUrl: '#',
      badge: 'GCP PDE SHOWCASE',
      starred: false,
      metrics: 'Vector Indexing • SQL Aggregation',
    },
    {
      id: '04',
      title: 'Enterprise RevOps Platform',
      category: 'B2B SaaS / Revenue Operations',
      desc: 'Merged CRM and lead-seeding tool. Tracks sales outreach campaigns, coordinates target lead imports, and manages MRR pipelines.',
      tech: ['Next.js 15', 'Prisma', 'Neon Postgres', 'Tailwind CSS v4'],
      demoUrl: '#',
      badge: 'MERGED SAAS',
      starred: false,
      metrics: 'Neon Database Branching • Clerk SSO',
    },
    {
      id: '05',
      title: 'Newsletter Herald',
      category: 'Serverless Data Extraction',
      desc: 'An automated document processing pipeline. Parses incoming PDF and Word newsletters, standardizes metadata, generates multi-stage AI summaries, and dispatches weekly newsletters to a parish subscriber directory.',
      tech: ['Next.js 15', 'FastAPI', 'Neon Postgres', 'Cloudflare R2'],
      demoUrl: 'https://newsletter-herald.vercel.app',
      badge: 'FEATURED PROJECT',
      starred: true,
      metrics: 'Dual LLM Route • R2 Proxy Delivery',
    },
    {
      id: '06',
      title: 'PulseApp (Yello Promises)',
      category: 'HR Tech / Peer Recognition',
      desc: 'A peer-to-peer appreciation feed. Implements points allocation rules and real-time activity updates with Azure Blob file attachments.',
      tech: ['Next.js', 'Azure Storage', 'Redux Toolkit', 'Prisma'],
      demoUrl: '#',
      badge: 'ENTERPRISE HR',
      starred: false,
      metrics: 'Transaction-Safe Points Ledger',
    },
    {
      id: '07',
      title: 'Legal Document Sorter',
      category: 'Desktop Automation / File Pipeline',
      desc: 'A local background daemon that monitors download directories, uses regular expressions to classify legal documents by case caption, and automatically synchronizes them to Google Drive and OneDrive folders.',
      tech: ['Python', 'Watchdog', 'SQLite', 'PyPDF', 'python-docx'],
      demoUrl: 'https://github.com/AnthonyASBaptiste/legal-document-sorter',
      badge: 'DESKTOP TOOL',
      starred: false,
      metrics: 'Safe Deletion Ingestion Loop',
    },
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans bg-blueprint-grid selection:bg-[#00f0ff] selection:text-slate-950">
      <PersonJsonLd />

      {/* Top Status Telemetry Ribbon */}
      <div className="border-b border-[#1e293b] bg-[#07090e]/90 backdrop-blur px-6 py-2.5 text-xs font-mono-code flex items-center justify-between text-slate-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-[#00f0ff]">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping"></span>
            SYSTEM // ACTIVE
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span>LOCATION: TRINIDAD & TOBAGO</span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="hidden md:inline">ROLE: SENIOR SOFTWARE ENGINEER @ MEDIAL HEALTH</span>
        </div>
        <div className="text-slate-400 flex items-center gap-3">
          <span>AI SEARCH OPTIMIZED</span>
          <span className="text-emerald-400">[GPTBot/Claude/Perplexity ALLOWED]</span>
        </div>
      </div>

      {/* Main Structural Layout */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Pane: Monolithic Profile & Blueprint Telemetry (5 cols) */}
        <aside className="lg:col-span-5 space-y-8 lg:sticky lg:top-12 lg:h-fit">
          <div className="p-8 bg-[#0e131f] border border-[#1e293b] rounded-2xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00f0ff]/10 to-transparent pointer-events-none"></div>
            
            <div className="text-xs font-mono-code text-[#00f0ff] tracking-widest uppercase mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4" /> IDENTITY // v2026.7
            </div>

            <h1 className="text-4xl font-display font-extrabold text-white tracking-tight leading-none mb-4">
              Anthony A.S Baptiste
            </h1>

            <p className="text-sm font-mono-code text-[#f59e0b] mb-6">
              Senior Software Engineer & AI Architect
            </p>

            <p className="text-slate-300 text-sm leading-relaxed mb-8 font-sans">
              Specializing in distributed data systems, multi-agent pipelines, and cloud database architecture. Designing clean, verifiable software solutions for Caribbean and international enterprise contexts.
            </p>

            {/* Architecture Metrics HUD */}
            <div className="border-t border-[#1e293b] pt-6 space-y-4 font-mono-code text-xs">
              <div className="flex justify-between items-center text-slate-400">
                <span>HEADQUARTERS</span>
                <span className="text-slate-200">Trinidad & Tobago</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>DESIGN PARADIGM</span>
                <span className="text-[#00f0ff]">Independent Auditor / Judge Models</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>PRIMARY STACK</span>
                <span className="text-slate-200">Go • Vue 3 • Next.js 15 • Python</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>CLOUD CERTIFICATION</span>
                <span className="text-[#f59e0b]">Google Cloud PDE Candidate</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-[#1e293b] flex flex-col gap-3">
              <Link
                href="/projects"
                className="w-full py-3.5 rounded-xl bg-[#00f0ff] text-slate-950 font-display font-bold text-center text-sm hover:bg-cyan-300 transition-all shadow-lg shadow-[#00f0ff]/20"
              >
                VIEW CASE STUDIES →
              </Link>
              <Link
                href="/blog"
                className="w-full py-3 rounded-xl bg-[#07090e] border border-[#1e293b] text-slate-300 font-mono-code text-xs text-center hover:border-[#00f0ff]/50 transition-all flex items-center justify-center gap-2"
              >
                <Activity className="w-3.5 h-3.5 text-[#00f0ff]" /> EXPLORE TECHNICAL BLOG
              </Link>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/AnthonyASBaptiste"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 rounded-xl bg-[#07090e] border border-[#1e293b] text-slate-300 font-mono-code text-xs text-center hover:border-[#00f0ff]/50 transition-all flex items-center justify-center gap-2"
                >
                  <Github className="w-3.5 h-3.5 text-[#00f0ff]" /> GITHUB
                </a>
                <a
                  href="https://www.linkedin.com/in/anthonybaptiste/"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 rounded-xl bg-[#07090e] border border-[#1e293b] text-slate-300 font-mono-code text-xs text-center hover:border-[#00f0ff]/50 transition-all flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#00f0ff]" /> LINKEDIN
                </a>
              </div>
            </div>
          </div>

          {/* Competency Card */}
          <div className="p-6 bg-[#0e131f]/60 border border-[#1e293b] rounded-2xl space-y-4">
            <h3 className="text-xs font-mono-code uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#00f0ff]" /> TECHNICAL FOCUS
            </h3>
            <ul className="space-y-3 text-xs font-mono-code text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-[#00f0ff]">▸</span>
                <span><strong>Multi-Agent Orchestration:</strong> Independent verification loops and web scrapers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00f0ff]">▸</span>
                <span><strong>High-Performance Runtimes:</strong> Asynchronous Go WebSocket proxies and connection hubs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00f0ff]">▸</span>
                <span><strong>Serverless Data Systems:</strong> BigQuery ML, Vertex AI Vector Search, and Neon Postgres.</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* Right Pane: Systems Index & Featured Projects (7 cols) */}
        <main className="lg:col-span-7 space-y-12">
          
          {/* Section Header */}
          <div id="projects" className="border-b border-[#1e293b] pb-6 flex items-end justify-between">
            <div>
              <span className="text-xs font-mono-code text-[#00f0ff] uppercase tracking-widest block mb-1">
                SYSTEMS_CATALOG // 2026
              </span>
              <h2 className="text-3xl font-display font-bold text-white tracking-tight">
                Architectural Portfolio
              </h2>
            </div>
            <span className="text-xs font-mono-code text-slate-500 hidden sm:inline">
              [PRIORITIZED BY IMPACT]
            </span>
          </div>

          {/* Projects Monolithic List */}
          <div className="space-y-6">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className={`p-6 rounded-2xl border transition-all duration-300 relative group ${
                  proj.starred
                    ? 'bg-[#0e131f] border-[#00f0ff]/40 hover:border-[#00f0ff] shadow-xl shadow-[#00f0ff]/5'
                    : 'bg-[#0e131f]/40 border-[#1e293b] hover:border-slate-600'
                }`}
              >
                {/* Header Info */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-code text-xs font-bold text-slate-500 group-hover:text-[#00f0ff] transition-colors">
                      {proj.id}
                    </span>
                    <span className="text-xs font-mono-code text-[#00f0ff] flex items-center gap-1">
                      {proj.starred && <Star className="w-3.5 h-3.5 fill-[#00f0ff] text-[#00f0ff]" />}
                      {proj.category}
                    </span>
                  </div>
                  <span
                    className={`px-2.5 py-0.5 text-[10px] font-mono-code font-bold uppercase tracking-wider rounded border ${
                      proj.starred
                        ? 'bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]/30'
                        : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    {proj.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors flex items-center gap-2">
                  {proj.title}
                  {proj.demoUrl !== '#' && (
                    <a href={proj.demoUrl} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                  {proj.desc}
                </p>

                {/* Metrics & Tech Stack */}
                <div className="pt-4 border-t border-[#1e293b]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono-code text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#f59e0b]" /> {proj.metrics}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-[#07090e] text-slate-400 border border-[#1e293b] text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Articles Section */}
          <div className="pt-8 border-t border-[#1e293b] space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono-code text-[#00f0ff] uppercase tracking-widest block mb-1">
                  KNOWLEDGE_BASE // GEO OPTIMIZED
                </span>
                <h3 className="text-2xl font-display font-bold text-white">
                  Technical Architecture Notes
                </h3>
              </div>
              <Link
                href="/blog"
                className="text-xs font-mono-code text-[#00f0ff] hover:underline flex items-center gap-1"
              >
                SEE ALL ARTICLES →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="p-5 bg-[#0e131f]/40 border border-[#1e293b] rounded-xl hover:border-[#00f0ff]/40 transition-all block"
                >
                  <span className="text-[11px] font-mono-code text-slate-500 block mb-2">{post.date}</span>
                  <h4 className="text-sm font-display font-bold text-white mb-2 hover:text-[#00f0ff] transition-colors leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed font-sans">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>

        </main>
      </div>

      {/* Structural Footer */}
      <footer className="border-t border-[#1e293b] mt-20 px-6 py-8 text-center font-mono-code text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© 2026 ANTHONY BAPTISTE // ARCHITECTURAL MONOLITH SYSTEM</span>
          <span className="text-[#00f0ff]">GEO SEARCH CITATION READY (GPTBot / Claude / Perplexity)</span>
        </div>
      </footer>
    </div>
  );
}
````
