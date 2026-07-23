import React from 'react';
import Link from 'next/link';
import { PersonJsonLd } from '@/components/JsonLd';
import { getAllPosts } from '@/lib/blog';
import { Terminal, Cpu, Database, ShieldCheck, ArrowUpRight, Star, ExternalLink, Activity, Layers } from 'lucide-react';

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
      desc: 'An automated document processing pipeline. Parses incoming PDF and Word newsletters sent via email and extracts text summaries using serverless Cloud Run APIs.',
      tech: ['FastAPI', 'Claude API', 'Cloud Run', 'Python'],
      demoUrl: '#',
      badge: 'AUTOMATION PIPELINE',
      starred: false,
      metrics: 'Asynchronous Ingestion Endpoints',
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
              <a
                href="#projects"
                className="w-full py-3.5 rounded-xl bg-[#00f0ff] text-slate-950 font-display font-bold text-center text-sm hover:bg-cyan-300 transition-all shadow-lg shadow-[#00f0ff]/20"
              >
                VIEW CASE STUDIES →
              </a>
              <Link
                href="/blog"
                className="w-full py-3 rounded-xl bg-[#07090e] border border-[#1e293b] text-slate-300 font-mono-code text-xs text-center hover:border-[#00f0ff]/50 transition-all flex items-center justify-center gap-2"
              >
                <Activity className="w-3.5 h-3.5 text-[#00f0ff]" /> EXPLORE TECHNICAL BLOG
              </Link>
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
                      {proj.id} //
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
