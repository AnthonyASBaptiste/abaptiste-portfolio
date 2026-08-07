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
