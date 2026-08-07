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
