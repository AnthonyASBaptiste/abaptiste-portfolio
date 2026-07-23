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
