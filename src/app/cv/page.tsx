import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  ArrowLeft, 
  Download, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Terminal, 
  Mail, 
  MapPin, 
  Globe 
} from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Curriculum Vitae | Anthony A.S. Baptiste, MSc',
  description:
    'Senior Software Engineer & AI Architect with 12+ years experience architecting high-throughput distributed systems, healthcare applications, and multi-agent pipelines.',
};

export default function CVPage() {
  const experiences = [
    {
      period: '2025 — PRESENT',
      role: 'Senior Software Engineer / Engineering Lead',
      company: 'Medial Health LLC',
      location: 'Remote / US & Caribbean',
      summary:
        'Directing full-stack architecture, clinical intake pipelines, and hybrid AI document automation for high-compliance digital health platforms.',
      achievements: [
        'Lead architectural decisions and full-stack engineering initiatives supporting clinical intake, patient onboarding, and clinical workflow automation using React, TypeScript, and NestJS.',
        'Architected and deployed production AI document extraction pipelines (FastAPI/Ollama) with deterministic fallback between local sovereign models and cloud APIs.',
        'Establish engineering standards, conduct peer code reviews, mentor software engineers, and drive cloud deployments on GCP and Docker with strict security standards.',
      ],
      tech: ['TypeScript', 'React', 'NestJS', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'GCP'],
    },
    {
      period: '2022 — 2025',
      role: 'Senior Software Engineer / Technical Lead',
      company: 'Yello Media Group Ltd.',
      location: 'Caribbean Regional',
      summary:
        'Directed engineering delivery for high-traffic regional digital directories, Python-based data extraction/ETL microservices, and legacy modernization.',
      achievements: [
        'Architected high-throughput Python ETL services and automated reporting pipelines serving millions of monthly queries across regional commercial databases.',
        'Spearheaded Docker and Kubernetes container orchestration, increasing operational platform resilience and zero-downtime deployment capabilities.',
        'Led legacy modernization of enterprise C# backends into modular REST API boundaries, mentoring junior developers in TDD and CI/CD pipelines.',
      ],
      tech: ['Python', 'C#', 'Docker', 'Kubernetes', 'React', 'Azure', 'ETL Pipelines', 'REST APIs'],
    },
    {
      period: '2020 — 2022',
      role: 'Senior Applications Developer',
      company: 'Telecommunications Services of Trinidad and Tobago (TSTT)',
      location: 'Trinidad & Tobago',
      summary:
        'Architected and delivered a multi-tenant SaaS procurement platform for the Government of Trinidad and Tobago.',
      achievements: [
        'Designed high-security backend REST APIs, compliance tracking modules, and tamper-resistant audit log infrastructure meeting strict telecom governance standards.',
        'Mentored an engineering squad of 4 junior developers on database optimization, secure authentication, and release management.',
        'Engineered enterprise tender evaluation modules processing government contract workflows.',
      ],
      tech: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Multi-tenant SaaS', 'Linux'],
    },
    {
      period: '2018 — 2020',
      role: 'IT Analyst / Programmer',
      company: 'Judiciary of the Republic of Trinidad and Tobago',
      location: 'Trinidad & Tobago',
      summary:
        'Engineered court management software and inter-agency API integrations for national judicial operations.',
      achievements: [
        'Developed API-driven enterprise integrations supporting digital court case management and inter-agency data exchange.',
        'Refactored legacy Java enterprise applications, eliminating performance bottlenecks and improving system uptime.',
        'Trained and onboarded technical trainees and provided production support for mission-critical court registries.',
      ],
      tech: ['Java', 'Spring Boot', 'JHipster', 'MySQL', 'REST APIs', 'Linux'],
    },
    {
      period: '2012 — 2018',
      role: 'Business Systems Analyst – BI & Enterprise Integration',
      company: 'Petroleum Company of Trinidad and Tobago (Petrotrin)',
      location: 'Trinidad & Tobago',
      summary:
        'Delivered enterprise business intelligence, data warehouses, and operational analytics solutions supporting executive decision-making.',
      achievements: [
        'Engineered cross-departmental data integration solutions, modernizing legacy reporting tools and reducing operational overhead.',
        'Built executive decision dashboards and automated operational telemetry pipelines.',
      ],
      tech: ['Oracle SQL', 'C#', 'SharePoint', 'Power BI', 'Enterprise Integration'],
    },
  ];

  const skillGroups = [
    {
      category: 'Languages & Core Runtimes',
      items: ['TypeScript', 'Node.js (NestJS, Express)', 'Python', 'Go', 'PHP (Laravel)', 'C#', 'SQL'],
    },
    {
      category: 'AI & Agent Systems',
      items: ['Multi-Agent Orchestration', 'LLM-as-a-Judge', 'RAG Pipelines', 'Local Ollama / Sovereign Models', 'FastAPI', 'Vector Search'],
    },
    {
      category: 'Frontend & Architecture',
      items: ['React 19', 'Next.js 16', 'Vue 3', 'Tailwind CSS v4', 'Microservices', 'Distributed Systems Design'],
    },
    {
      category: 'Cloud & Infrastructure',
      items: ['Google Cloud Platform (GCP)', 'Microsoft Azure', 'Docker', 'Kubernetes', 'CI/CD (GitHub Actions)', 'Linux / Debian / Fedora'],
    },
    {
      category: 'Databases & Storage',
      items: ['PostgreSQL (Neon, RDS)', 'MongoDB', 'MySQL', 'BigQuery ML', 'Vertex AI', 'AWS S3 / Cloudflare R2'],
    },
  ];

  const education = [
    {
      degree: 'MSc in Computer Science',
      institution: 'Queen Mary, University of London',
      year: '2016',
    },
    {
      degree: 'BSc in Information Technology',
      institution: 'University of the West Indies, St. Augustine',
      year: '2011',
    },
  ];

  const certifications = [
    { name: 'IBM AI Engineering Professional Certificate', issuer: 'IBM', year: '2025' },
    { name: 'Google Project Management Professional Certificate', issuer: 'Google', year: '2025' },
    { name: 'Microsoft Certified Python Developer', issuer: 'Microsoft', year: '2025' },
    { name: 'Business Certificate in Digital Marketing & Strategy', issuer: 'Arthur Lok Jack GSB', year: '2018' },
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans bg-blueprint-grid selection:bg-[#00f0ff] selection:text-slate-950">
      
      {/* Top Status & Telemetry Ribbon */}
      <div className="border-b border-[#1e293b] bg-[#07090e]/90 backdrop-blur px-6 py-2.5 text-xs font-mono-code flex items-center justify-between text-slate-400 print:hidden">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-[#00f0ff] hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> RETURN // PORTFOLIO
          </Link>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="text-slate-300">DOCUMENT // EXECUTIVE_CV.PDF</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/Anthony_Baptiste_CV.pdf"
            download="Anthony_Baptiste_CV_SeniorSoftwareEngineer.pdf"
            className="px-3 py-1 rounded bg-[#00f0ff] text-slate-950 font-bold hover:bg-cyan-300 transition-all flex items-center gap-1.5 text-xs shadow-md shadow-[#00f0ff]/20"
          >
            <Download className="w-3.5 h-3.5" /> DOWNLOAD PDF
          </a>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16 space-y-12">
        
        {/* CV Header Block */}
        <header className="p-8 bg-[#0e131f] border border-[#1e293b] rounded-2xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#00f0ff]/10 to-transparent pointer-events-none"></div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-6 border-b border-[#1e293b]">
            <div>
              <div className="text-xs font-mono-code text-[#00f0ff] tracking-widest uppercase mb-2 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" /> OFFICIAL CURRICULUM VITAE
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-none mb-3">
                Anthony A.S. Baptiste, MSc
              </h1>
              <p className="text-sm md:text-base font-mono-code text-[#f59e0b]">
                Senior Software Engineer & AI Architect
              </p>
            </div>

            <div className="flex flex-col gap-2 font-mono-code text-xs text-slate-300">
              <span className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#00f0ff]" /> Trinidad & Tobago (Remote Available)
              </span>
              <a href="mailto:anthony.baptiste@outlook.com" className="flex items-center gap-2 hover:text-[#00f0ff] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#00f0ff]" /> anthony.baptiste@outlook.com
              </a>
              <a href="https://anthonybaptiste.dev" className="flex items-center gap-2 hover:text-[#00f0ff] transition-colors">
                <Globe className="w-3.5 h-3.5 text-[#00f0ff]" /> anthonybaptiste.dev
              </a>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://github.com/AnthonyASBaptiste"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#00f0ff] transition-colors flex items-center gap-1"
                >
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
                <span>•</span>
                <a
                  href="https://www.linkedin.com/in/anthonybaptiste/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#00f0ff] transition-colors flex items-center gap-1"
                >
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="pt-6">
            <h2 className="text-xs font-mono-code text-[#00f0ff] uppercase tracking-widest mb-3">
              EXECUTIVE_SUMMARY // 12+ YEARS
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
              Engineering Leader and Senior Software Engineer with <strong>12+ years of production experience</strong> architecting 
              secure, high-throughput web systems, distributed microservices, and AI-driven automation pipelines. Proven track record leading 
              cross-functional engineering squads, eliminating legacy technical debt, and establishing deterministic CI/CD release engineering. 
              Specialized in TypeScript/NestJS, Python, React/Next.js, PHP/Laravel, and cloud infrastructure across GCP and Azure, with deep expertise 
              translating enterprise healthcare and government requirements into verifiable, scalable production software.
            </p>
          </div>
        </header>

        {/* Professional Experience Section */}
        <section className="space-y-6">
          <div className="border-b border-[#1e293b] pb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#00f0ff]" />
              <h2 className="text-2xl font-display font-bold text-white tracking-tight">
                Professional Experience
              </h2>
            </div>
            <span className="text-xs font-mono-code text-slate-500 hidden sm:inline">
              [ENTERPRISE ROLES & PRODUCTION LEADERSHIP]
            </span>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 bg-[#0e131f] border border-[#1e293b] rounded-2xl space-y-4 hover:border-[#00f0ff]/40 transition-all duration-300 relative group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-[#1e293b]/60 pb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-mono-code text-[#f59e0b]">
                      {exp.company} <span className="text-slate-500">• {exp.location}</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#07090e] border border-[#1e293b] text-xs font-mono-code text-[#00f0ff] self-start">
                    {exp.period}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  {exp.summary}
                </p>

                <ul className="space-y-2 text-xs md:text-sm text-slate-300 font-sans">
                  {exp.achievements.map((ach, achIdx) => (
                    <li key={achIdx} className="flex items-start gap-2.5">
                      <span className="text-[#00f0ff] font-mono-code mt-0.5">▸</span>
                      <span className="leading-relaxed">{ach}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[#1e293b]/60 flex flex-wrap gap-1.5 font-mono-code text-xs">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded bg-[#07090e] text-slate-400 border border-[#1e293b] text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Competencies Matrix */}
        <section className="space-y-6">
          <div className="border-b border-[#1e293b] pb-4 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#00f0ff]" />
            <h2 className="text-2xl font-display font-bold text-white tracking-tight">
              Core Competencies & Technical Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillGroups.map((group, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#0e131f]/60 border border-[#1e293b] rounded-xl space-y-3"
              >
                <h3 className="text-xs font-mono-code uppercase tracking-wider text-[#00f0ff]">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5 font-mono-code text-xs">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded bg-[#07090e] text-slate-300 border border-[#1e293b] text-[11px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Education */}
          <div className="space-y-4">
            <div className="border-b border-[#1e293b] pb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#00f0ff]" />
              <h3 className="text-xl font-display font-bold text-white">
                Education
              </h3>
            </div>
            <div className="space-y-4 font-mono-code text-xs">
              {education.map((edu, idx) => (
                <div key={idx} className="p-4 bg-[#0e131f] border border-[#1e293b] rounded-xl space-y-1">
                  <div className="flex justify-between items-center text-white font-bold font-display text-sm">
                    <span>{edu.degree}</span>
                    <span className="text-[#00f0ff] font-mono-code text-xs">{edu.year}</span>
                  </div>
                  <div className="text-slate-400">{edu.institution}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <div className="border-b border-[#1e293b] pb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#f59e0b]" />
              <h3 className="text-xl font-display font-bold text-white">
                Certifications
              </h3>
            </div>
            <div className="space-y-3 font-mono-code text-xs">
              {certifications.map((cert, idx) => (
                <div key={idx} className="p-3.5 bg-[#0e131f] border border-[#1e293b] rounded-xl flex items-center justify-between">
                  <div>
                    <div className="text-slate-200 font-sans font-medium text-xs">{cert.name}</div>
                    <div className="text-slate-500 text-[11px]">{cert.issuer}</div>
                  </div>
                  <span className="text-[#f59e0b] text-[11px]">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* Footer Actions */}
        <footer className="pt-8 border-t border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-xs text-slate-500">
          <Link href="/" className="text-[#00f0ff] hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> RETURN TO PORTFOLIO HOMEPAGE
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="/Anthony_Baptiste_CV.pdf"
              download="Anthony_Baptiste_CV_SeniorSoftwareEngineer.pdf"
              className="text-white hover:text-[#00f0ff] transition-colors flex items-center gap-1 font-bold"
            >
              <Download className="w-3.5 h-3.5" /> DOWNLOAD OFFICIAL PDF
            </a>
          </div>
        </footer>

      </main>
    </div>
  );
}
