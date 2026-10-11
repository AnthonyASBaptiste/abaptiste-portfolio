import React from 'react';
import Link from 'next/link';
import { PersonJsonLd } from '@/components/JsonLd';
import Navbar from '@/components/Navbar';
import { getAllPosts, formatDate } from '@/lib/blog';
import { 
  Terminal, 
  ExternalLink, 
  Activity, 
  Briefcase, 
  FileText, 
  Download, 
  ArrowRight, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';

export default function Home() {
  const posts = getAllPosts();

  const professionalRoles = [
    {
      period: '2025 — PRESENT',
      role: 'Senior Software Engineer / Engineering Lead',
      company: 'Medial Health LLC',
      location: 'Remote (US & Caribbean)',
      highlight: 'Clinical Intake Architecture & Hybrid Local/Cloud AI Pipelines',
      description:
        'Leading architectural decisions and full-stack engineering for digital health platforms. Architected hybrid FastAPI/Ollama document intake engines with local sovereign model fallback and cloud routing, driving compliant GCP/Docker infrastructure.',
      tech: ['TypeScript', 'React', 'NestJS', 'Python', 'FastAPI', 'GCP', 'Docker', 'PostgreSQL'],
    },
    {
      period: '2022 — 2025',
      role: 'Senior Software Engineer / Technical Lead',
      company: 'Yello Media Group Ltd.',
      location: 'Caribbean Regional',
      highlight: 'High-Throughput Data Pipelines & Legacy Modernization',
      description:
        'Directed engineering delivery for regional commercial platforms. Architected Python ETL microservices serving millions of queries, orchestrated Docker/Kubernetes container deployments, and modernized legacy C# services into modular REST APIs.',
      tech: ['Python', 'C#', 'Docker', 'Kubernetes', 'Azure', 'React', 'ETL Pipelines', 'REST APIs'],
    },
    {
      period: '2020 — 2022',
      role: 'Senior Applications Developer',
      company: 'Telecommunications Services of Trinidad & Tobago (TSTT)',
      location: 'Trinidad & Tobago',
      highlight: 'Multi-Tenant Government Procurement SaaS',
      description:
        'Architected and led technical implementation of a secure multi-tenant SaaS procurement platform for the Government of Trinidad and Tobago. Built tamper-resistant audit logs and compliant tender evaluation pipelines.',
      tech: ['PHP', 'Laravel', 'MySQL', 'SaaS Architecture', 'RBAC', 'Linux'],
    },
    {
      period: '2018 — 2020',
      role: 'IT Analyst / Programmer',
      company: 'Judiciary of the Republic of Trinidad and Tobago',
      location: 'Trinidad & Tobago',
      highlight: 'Digital Court Management & Judicial API Integrations',
      description:
        'Developed API-driven enterprise integrations supporting digital court operations and inter-agency data exchange. Modernized legacy Java systems to maximize uptime and transaction integrity.',
      tech: ['Java', 'Spring Boot', 'JHipster', 'MySQL', 'REST APIs'],
    },
    {
      period: '2012 — 2018',
      role: 'Business Systems Analyst – BI & Enterprise Integration',
      company: 'Petroleum Company of Trinidad and Tobago (Petrotrin)',
      location: 'Trinidad & Tobago',
      highlight: 'Enterprise BI Dashboards & Data Warehouse Integrations',
      description:
        'Delivered enterprise business intelligence, operational data warehouses, and automated cross-departmental telemetry pipelines supporting executive decision-making in oil & gas.',
      tech: ['Oracle SQL', 'C#', 'Power BI', 'SharePoint', 'Enterprise Integration'],
    },
  ];

  const selectedProjects = [
    {
      id: '01',
      title: 'Research Navigator',
      category: 'AI Multi-Agent Architectural Engine',
      categoryBadge: 'FLAGSHIP AI SYSTEM',
      desc: 'An automated business validation engine that stress-tests startup assumptions against empirical market data, unit economics, and risk matrices. Combines a Vue 3 frontend, high-performance Go proxy runtime, and Python LLM-as-a-Judge audit engine.',
      tech: ['Go Proxy', 'Python LLM Brain', 'Vue 3', 'WebSockets', 'LLM-as-a-Judge'],
      demoUrl: '/projects/research-navigator',
      caseStudy: true,
      metrics: 'Adversarial Risk Verification • Dossier Generation',
    },
    {
      id: '02',
      title: 'Enterprise Clinical Intake & Hybrid AI Pipeline',
      category: 'Healthcare Technology / Production SaaS',
      categoryBadge: 'MEDIAL HEALTH',
      desc: 'Enterprise patient intake and clinical workflow automation platform. Integrates custom document parsing pipelines with hybrid local/cloud AI fallback routing (Ollama to cloud APIs) ensuring high-compliance healthcare data isolation.',
      tech: ['React', 'TypeScript', 'NestJS', 'FastAPI', 'GCP', 'PostgreSQL'],
      demoUrl: '#',
      caseStudy: false,
      metrics: 'Zero-Egress Local LLM Fallback • HIPAA-Grade Workflows',
    },
    {
      id: '03',
      title: 'Government Multi-Tenant Procurement SaaS',
      category: 'Enterprise Telecom & Public Sector',
      categoryBadge: 'GOVERNMENT OF T&T',
      desc: 'National-scale procurement and tender management platform engineered for strict public auditability. Features multi-tenant isolation, cryptographic audit logging, and automated compliance review pipelines.',
      tech: ['PHP', 'Laravel', 'MySQL', 'Multi-Tenant Architecture', 'RBAC Security'],
      demoUrl: '#',
      caseStudy: false,
      metrics: 'Tamper-Resistant Audit Logs • Multi-Tenant Isolation',
    },
    {
      id: '04',
      title: 'Newsletter Herald',
      category: 'Serverless Data Intelligence Pipeline',
      categoryBadge: 'AI PRODUCTION PIPELINE',
      desc: 'An automated document processing and distribution engine. Extracts unstructured text from church bulletins and reports, executes multi-stage AI summarization, and manages an automated subscriber distribution directory.',
      tech: ['Next.js 15', 'FastAPI', 'Neon Postgres', 'Cloudflare R2', 'Groq Llama 3.1'],
      demoUrl: '/projects/herald',
      caseStudy: true,
      metrics: 'Dual LLM Route • Serverless Document Ingestion',
    },
    {
      id: '05',
      title: 'MyBriefcase Legal Suite',
      category: 'Legal Tech / Document Assembly Pipeline',
      categoryBadge: 'LEGAL AUTOMATION',
      desc: 'A court-compliant document bundling and assembly tool. Compiles multiple legal PDFs with automated cover pages, pagination, and dynamic indexes, generating cryptographically verified briefs with presigned S3 delivery.',
      tech: ['Next.js 16', 'React 19', 'AWS S3', 'pdf-lib', 'Tailwind CSS'],
      demoUrl: '#',
      caseStudy: false,
      metrics: 'Automated Table of Contents • Presigned S3 Encryption',
    },
  ];

  const competencies = [
    {
      title: 'Distributed Systems & Backend',
      skills: ['Go', 'Python', 'TypeScript / Node.js (NestJS)', 'REST & GraphQL APIs', 'Microservices Architecture', 'PostgreSQL / Neon'],
    },
    {
      title: 'AI Engineering & Orchestration',
      skills: ['Multi-Agent Systems', 'LLM-as-a-Judge', 'RAG Pipelines', 'Hybrid Sovereign Fallbacks (Ollama/Groq)', 'Vector Search (BigQuery/Vertex)'],
    },
    {
      title: 'Cloud Infrastructure & DevOps',
      skills: ['Google Cloud Platform (GCP)', 'Microsoft Azure', 'Docker', 'Kubernetes', 'CI/CD GitHub Actions', 'Linux (Fedora/Debian)'],
    },
    {
      title: 'Enterprise Architecture & Platform',
      skills: ['Multi-Tenant SaaS', 'RBAC & API Security', 'Payment Pipelines (Stripe)', 'High-Compliance Workflows', 'Performance Optimization'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans bg-blueprint-grid selection:bg-[#00f0ff] selection:text-slate-950">
      <PersonJsonLd />
      <Navbar />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Pane: Sticky Profile & Telemetry HUD (5 cols) */}
        <aside className="lg:col-span-5 space-y-8 lg:sticky lg:top-24 lg:h-fit">
          
          {/* Main Identity Box */}
          <div className="p-8 bg-[#0e131f] border border-[#1e293b] rounded-2xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00f0ff]/10 to-transparent pointer-events-none"></div>
            
            <div className="text-xs font-mono-code text-[#00f0ff] tracking-widest uppercase mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4" /> PROFESSIONAL PROFILE // 2026
            </div>

            <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-none mb-3">
              Anthony A.S. Baptiste
            </h1>

            <p className="text-sm font-mono-code text-[#f59e0b] mb-4">
              Senior Software Engineer & AI Architect
            </p>

            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
              12+ years of production experience architecting high-throughput distributed systems, healthcare platforms, and multi-agent AI pipelines. Bringing battle-tested engineering rigor to emerging AI systems.
            </p>

            {/* Quick Metrics */}
            <div className="border-t border-[#1e293b] pt-5 space-y-3 font-mono-code text-xs">
              <div className="flex justify-between items-center text-slate-400">
                <span>EXPERIENCE</span>
                <span className="text-slate-200 font-bold">12+ Years (Since 2012)</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>CURRENT ROLE</span>
                <span className="text-[#00f0ff]">Sr. SWE @ Medial Health</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>EDUCATION</span>
                <span className="text-slate-200">MSc Comp Sci (Queen Mary London)</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>CORE STACK</span>
                <span className="text-slate-200">TypeScript • Python • Go • React</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>LOCATION</span>
                <span className="text-slate-200">Trinidad & Tobago (Remote Ready)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-6 border-t border-[#1e293b] flex flex-col gap-3">
              <Link
                href="/cv"
                className="w-full py-3.5 rounded-xl bg-[#00f0ff] text-slate-950 font-display font-bold text-center text-sm hover:bg-cyan-300 transition-all shadow-lg shadow-[#00f0ff]/20 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" /> VIEW COMPLETE CV / RESUME →
              </Link>
              <a
                href="/Anthony_Baptiste_CV.pdf"
                download="Anthony_Baptiste_CV_SeniorSoftwareEngineer.pdf"
                className="w-full py-2.5 rounded-xl bg-[#07090e] border border-[#1e293b] text-slate-300 font-mono-code text-xs text-center hover:border-[#00f0ff]/50 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-[#00f0ff]" /> DOWNLOAD CV (PDF)
              </a>
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href="https://github.com/AnthonyASBaptiste"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 rounded-xl bg-[#07090e] border border-[#1e293b] text-slate-300 font-mono-code text-xs text-center hover:border-[#00f0ff]/50 transition-all flex items-center justify-center gap-2"
                >
                  <Github className="w-3.5 h-3.5 text-[#00f0ff]" /> GITHUB
                </a>
                <a
                  href="https://www.linkedin.com/in/anthonybaptiste/"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 rounded-xl bg-[#07090e] border border-[#1e293b] text-slate-300 font-mono-code text-xs text-center hover:border-[#00f0ff]/50 transition-all flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#00f0ff]" /> LINKEDIN
                </a>
              </div>
            </div>
          </div>

          {/* Builder Lab Cross-Link Card */}
          <div className="p-6 bg-gradient-to-br from-[#0e131f] to-[#07090e] border border-[#00f0ff]/30 rounded-2xl space-y-3 relative overflow-hidden group">
            <div className="text-[10px] font-mono-code text-[#00f0ff] uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" /> COMPANION PROPERTY
            </div>
            <h3 className="text-lg font-display font-bold text-white group-hover:text-[#00f0ff] transition-colors">
              builtbyanthony.tech
            </h3>
            <p className="text-slate-400 text-xs font-sans leading-relaxed">
              Looking for raw build logs, Hacktoberfest projects, AI agent experiments, and open-source tooling? Explore the Builder Laboratory.
            </p>
            <a
              href="https://builtbyanthony.tech"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[#00f0ff] hover:underline pt-1"
            >
              EXPLORE BUILDER LABORATORY <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </aside>

        {/* Right Pane: Narrative, Experience, Selected Work & Blog (7 cols) */}
        <main className="lg:col-span-7 space-y-16">
          
          {/* Hero & Professional Summary Block */}
          <section className="space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono-code text-[#00f0ff] uppercase tracking-widest block">
                ENGINEERING LEADERSHIP // ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
                Engineering production software and verifiable AI architectures.
              </h2>
            </div>

            <p className="text-slate-300 text-base font-sans leading-relaxed">
              I am a <strong>Senior Software Engineer and AI Architect</strong> with over a decade of hands-on experience designing 
              distributed backend services, full-stack cloud platforms, and autonomous multi-agent pipelines. My background bridges high-compliance 
              healthcare workflows, national government procurement systems, telecom data engines, and modern LLM application development.
            </p>

            <div className="p-5 bg-[#0e131f]/70 border border-[#1e293b] rounded-xl flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#00f0ff] flex-shrink-0 mt-0.5" />
              <div className="text-xs font-sans text-slate-300 leading-relaxed">
                <strong className="text-white">AI as an Engineering Evolution:</strong> Rather than viewing AI as a prompt layer, I apply 
                rigorous software engineering principles—asynchronous proxies, independent judge models, deterministic fallbacks, and sandbox isolation—to 
                build agentic systems that run predictably in production.
              </div>
            </div>
          </section>

          {/* SECTION 1: Professional Experience Timeline */}
          <section id="experience" className="space-y-8 scroll-mt-24">
            <div className="border-b border-[#1e293b] pb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#00f0ff]" />
                <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                  Professional Experience
                </h3>
              </div>
              <Link
                href="/cv"
                className="text-xs font-mono-code text-[#00f0ff] hover:underline flex items-center gap-1"
              >
                FULL RESUME →
              </Link>
            </div>

            <div className="space-y-6">
              {professionalRoles.map((role, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#0e131f] border border-[#1e293b] rounded-2xl hover:border-[#00f0ff]/40 transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <h4 className="text-lg font-display font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                        {role.role}
                      </h4>
                      <div className="text-xs font-mono-code text-[#f59e0b]">
                        {role.company} <span className="text-slate-500">• {role.location}</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded bg-[#07090e] border border-[#1e293b] text-xs font-mono-code text-[#00f0ff] self-start">
                      {role.period}
                    </span>
                  </div>

                  <div className="text-xs font-mono-code text-slate-400 mb-3 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#00f0ff]" /> {role.highlight}
                  </div>

                  <p className="text-slate-300 text-sm font-sans leading-relaxed mb-4">
                    {role.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 font-mono-code text-xs pt-3 border-t border-[#1e293b]/60">
                    {role.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-[#07090e] text-slate-400 border border-[#1e293b] text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2: Core Engineering Competencies */}
          <section id="skills" className="space-y-6 scroll-mt-24">
            <div className="border-b border-[#1e293b] pb-4 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-[#00f0ff]" />
              <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                Engineering & Architecture Matrix
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {competencies.map((comp, idx) => (
                <div key={idx} className="p-5 bg-[#0e131f]/60 border border-[#1e293b] rounded-xl space-y-3">
                  <h4 className="text-xs font-mono-code uppercase tracking-wider text-[#00f0ff]">
                    {comp.title}
                  </h4>
                  <ul className="space-y-1.5 text-xs font-sans text-slate-300">
                    {comp.skills.map((s, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2">
                        <span className="text-[#00f0ff] font-mono-code text-[10px]">▸</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: Selected Work Catalog */}
          <section id="projects" className="space-y-8 scroll-mt-24">
            <div className="border-b border-[#1e293b] pb-4 flex items-end justify-between">
              <div>
                <span className="text-xs font-mono-code text-[#00f0ff] uppercase tracking-widest block mb-1">
                  SELECTED_SYSTEMS // PRODUCTION & CASE STUDIES
                </span>
                <h3 className="text-3xl font-display font-bold text-white tracking-tight">
                  Featured Engineering Work
                </h3>
              </div>
              <a
                href="https://builtbyanthony.tech"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono-code text-[#00f0ff] hover:underline hidden sm:flex items-center gap-1"
              >
                ALL EXPERIMENTS (builtbyanthony.tech) →
              </a>
            </div>

            <div className="space-y-6">
              {selectedProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-6 sm:p-7 rounded-2xl border border-[#1e293b] bg-[#0e131f] hover:border-[#00f0ff]/50 transition-all duration-300 relative group shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono-code text-xs font-bold text-slate-500 group-hover:text-[#00f0ff] transition-colors">
                        {proj.id}
                      </span>
                      <span className="text-xs font-mono-code text-[#00f0ff]">
                        {proj.category}
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 text-[10px] font-mono-code font-bold uppercase tracking-wider rounded border bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]/30">
                      {proj.categoryBadge}
                    </span>
                  </div>

                  <h4 className="text-xl font-display font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors flex items-center gap-2">
                    {proj.title}
                    {proj.caseStudy && (
                      <Link href={proj.demoUrl} className="text-slate-500 hover:text-white">
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                  </h4>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                    {proj.desc}
                  </p>

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

                  {proj.caseStudy && (
                    <div className="mt-4 pt-3 border-t border-[#1e293b]/40 flex justify-end">
                      <Link
                        href={proj.demoUrl}
                        className="text-xs font-mono-code text-[#00f0ff] hover:underline flex items-center gap-1"
                      >
                        EXPLORE DETAILED ARCHITECTURAL CASE STUDY →
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Builder Lab Invitation Banner */}
            <div className="p-6 bg-[#0e131f]/40 border border-dashed border-[#1e293b] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-mono-code text-[#00f0ff] uppercase tracking-wider block">
                  EXPLORE THE EXPERIMENTAL LAB
                </span>
                <p className="text-sm font-sans text-slate-300">
                  Looking for hackathons, agent sandboxes, or weekend build logs?
                </p>
              </div>
              <a
                href="https://builtbyanthony.tech"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#07090e] border border-[#00f0ff]/40 text-[#00f0ff] font-mono-code text-xs hover:bg-[#00f0ff]/10 transition-all flex items-center gap-2 flex-shrink-0"
              >
                <span>builtbyanthony.tech</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </section>

          {/* SECTION 4: Technical Writing / Engineering Notes */}
          <section id="writing" className="space-y-6 scroll-mt-24">
            <div className="border-b border-[#1e293b] pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono-code text-[#00f0ff] uppercase tracking-widest block mb-1">
                  KNOWLEDGE_BASE // TECHNICAL WRITING
                </span>
                <h3 className="text-2xl font-display font-bold text-white">
                  Engineering Architecture Notes
                </h3>
              </div>
              <Link
                href="/blog"
                className="text-xs font-mono-code text-[#00f0ff] hover:underline flex items-center gap-1"
              >
                ALL ARTICLES ({posts.length}) →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="p-5 bg-[#0e131f]/40 border border-[#1e293b] rounded-xl hover:border-[#00f0ff]/40 transition-all block group"
                >
                  <span className="text-[11px] font-mono-code text-slate-500 block mb-2">{formatDate(post.date)}</span>
                  <h4 className="text-sm font-display font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed font-sans">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>

        </main>
      </div>

      {/* Structural Footer */}
      <footer className="border-t border-[#1e293b] mt-20 px-6 py-8 text-center font-mono-code text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span>© 2026 ANTHONY BAPTISTE</span>
            <span>•</span>
            <Link href="/cv" className="text-slate-400 hover:text-[#00f0ff]">
              CURRICULUM VITAE
            </Link>
            <span>•</span>
            <a href="https://builtbyanthony.tech" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#00f0ff]">
              BUILTBYANTHONY.TECH
            </a>
          </div>
          <span className="text-[#00f0ff]">GEO AI CITATION READY (GPTBot / Claude / Perplexity)</span>
        </div>
      </footer>
    </div>
  );
}
