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
