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
