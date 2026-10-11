import React from 'react';
import Link from 'next/link';
import { Terminal, ExternalLink, FileText, Briefcase, BookOpen, Layers } from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#1e293b] bg-[#07090e]/90 backdrop-blur-md">
      {/* Top Status & Cross-Site Telemetry Ribbon */}
      <div className="border-b border-[#1e293b]/60 px-6 py-1.5 text-[11px] font-mono-code flex items-center justify-between text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[#00f0ff]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse"></span>
            SYSTEM // ACTIVE
          </span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span className="hidden sm:inline text-slate-300">TRINIDAD & TOBAGO (REMOTE)</span>
          <span className="hidden md:inline text-slate-700">|</span>
          <span className="hidden md:inline text-slate-400">SENIOR SOFTWARE ENGINEER @ MEDIAL HEALTH</span>
        </div>

        {/* Builder Laboratory Cross-Link Banner */}
        <div className="flex items-center gap-3">
          <a
            href="https://builtbyanthony.tech"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 hover:bg-[#00f0ff]/20 transition-all font-bold group"
          >
            <span>BUILDER LAB: builtbyanthony.tech</span>
            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-[#0e131f] border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff] group-hover:border-[#00f0ff] transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <span className="font-display font-extrabold text-white text-base tracking-tight block group-hover:text-[#00f0ff] transition-colors">
              Anthony Baptiste
            </span>
            <span className="font-mono-code text-[10px] text-[#f59e0b] block -mt-0.5">
              Sr. Software Engineer & AI Architect
            </span>
          </div>
        </Link>

        {/* Navigation Routes */}
        <nav className="hidden md:flex items-center gap-6 font-mono-code text-xs text-slate-300">
          <Link href="/#experience" className="hover:text-[#00f0ff] transition-colors flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-[#00f0ff]" /> Experience
          </Link>
          <Link href="/#projects" className="hover:text-[#00f0ff] transition-colors flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#00f0ff]" /> Selected Work
          </Link>
          <Link href="/blog" className="hover:text-[#00f0ff] transition-colors flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#00f0ff]" /> Engineering Notes
          </Link>
          <Link href="/cv" className="hover:text-[#00f0ff] transition-colors flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-[#00f0ff]" /> CV / Resume
          </Link>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <Link
            href="/cv"
            className="px-3.5 py-1.5 rounded-xl bg-[#00f0ff] text-slate-950 font-display font-bold text-xs hover:bg-cyan-300 transition-all shadow-md shadow-[#00f0ff]/20 flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" /> VIEW CV
          </Link>
          <div className="flex items-center gap-1.5 border-l border-[#1e293b] pl-3">
            <a
              href="https://github.com/AnthonyASBaptiste"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg bg-[#0e131f] border border-[#1e293b] text-slate-400 hover:text-white hover:border-[#00f0ff]/50 transition-all"
              title="GitHub Profile"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/anthonybaptiste/"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg bg-[#0e131f] border border-[#1e293b] text-slate-400 hover:text-white hover:border-[#00f0ff]/50 transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
