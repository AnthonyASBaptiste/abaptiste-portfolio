import React from 'react';
import { Terminal } from 'lucide-react';

interface MarkdownArticleProps {
  content: string;
}

function renderInlineText(text: string): React.ReactNode {
  // Simple token parser for **bold**, `code`, and *italic*
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(
        <strong key={match.index} className="font-semibold text-white">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(
        <code
          key={match.index}
          className="px-1.5 py-0.5 rounded bg-[#030712] border border-[#1e293b] text-[#00f0ff] font-mono-code text-xs"
        >
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith('*') && token.endsWith('*')) {
      parts.push(
        <em key={match.index} className="italic text-slate-200">
          {token.slice(1, -1)}
        </em>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export function MarkdownArticle({ content }: MarkdownArticleProps) {
  // Normalize and split by double newlines or fenced code block boundaries
  const blocks: string[] = [];
  const lines = content.trim().split('\n');
  let currentBlock: string[] = [];
  let inCodeBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        currentBlock.push(line);
        blocks.push(currentBlock.join('\n'));
        currentBlock = [];
        inCodeBlock = false;
        continue;
      } else {
        if (currentBlock.length > 0) {
          blocks.push(currentBlock.join('\n'));
          currentBlock = [];
        }
        inCodeBlock = true;
        currentBlock.push(line);
        continue;
      }
    }

    if (inCodeBlock) {
      currentBlock.push(line);
      continue;
    }

    if (line.trim() === '') {
      if (currentBlock.length > 0) {
        blocks.push(currentBlock.join('\n'));
        currentBlock = [];
      }
    } else {
      currentBlock.push(line);
    }
  }

  if (currentBlock.length > 0) {
    blocks.push(currentBlock.join('\n'));
  }

  return (
    <div className="space-y-6 text-slate-300 font-sans text-base leading-relaxed">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();

        // Fenced code blocks
        if (trimmed.startsWith('```')) {
          const firstLineEnd = trimmed.indexOf('\n');
          const header = firstLineEnd !== -1 ? trimmed.slice(0, firstLineEnd) : trimmed;
          const lang = header.replace(/^```/, '').trim() || 'terminal';
          const codeLines = firstLineEnd !== -1 ? trimmed.slice(firstLineEnd + 1).replace(/```$/, '').trim() : '';

          return (
            <div
              key={idx}
              className="my-6 rounded-xl border border-[#1e293b] bg-[#030712] overflow-hidden shadow-xl"
            >
              <div className="px-4 py-2 border-b border-[#1e293b]/60 bg-[#0e131f]/50 flex items-center justify-between text-xs font-mono-code text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Terminal className="w-3.5 h-3.5 text-[#00f0ff]" />
                  {lang}
                </span>
                <span className="text-[10px] text-[#00f0ff] uppercase tracking-wider font-bold">
                  OUTPUT // LOG
                </span>
              </div>
              <pre className="p-4 font-mono-code text-xs text-cyan-200 overflow-x-auto leading-relaxed">
                <code>{codeLines}</code>
              </pre>
            </div>
          );
        }

        // Horizontal rules
        if (trimmed === '---') {
          return <hr key={idx} className="my-8 border-t border-[#1e293b]" />;
        }

        // Heading 1
        if (trimmed.startsWith('# ')) {
          return (
            <h1
              key={idx}
              className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-10 mb-4 pt-4 border-t border-[#1e293b]"
            >
              {renderInlineText(trimmed.replace(/^#\s+/, ''))}
            </h1>
          );
        }

        // Heading 2
        if (trimmed.startsWith('## ')) {
          return (
            <h2
              key={idx}
              className="text-xl sm:text-2xl font-display font-bold text-[#00f0ff] mt-8 mb-3"
            >
              {renderInlineText(trimmed.replace(/^##\s+/, ''))}
            </h2>
          );
        }

        // Heading 3
        if (trimmed.startsWith('### ')) {
          return (
            <h3
              key={idx}
              className="text-lg font-display font-bold text-amber-400 mt-6 mb-2 tracking-tight"
            >
              {renderInlineText(trimmed.replace(/^###\s+/, ''))}
            </h3>
          );
        }

        // Unordered lists
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const items = trimmed.split('\n').filter((l) => l.trim().startsWith('- ') || l.trim().startsWith('* '));
          return (
            <ul key={idx} className="space-y-2 font-mono-code text-xs text-slate-300 pl-4 border-l-2 border-[#00f0ff]/60 my-4">
              {items.map((item, itemIdx) => (
                <li key={itemIdx} className="leading-relaxed">
                  <span className="text-[#00f0ff] mr-2">▸</span>
                  {renderInlineText(item.replace(/^[-*]\s+/, ''))}
                </li>
              ))}
            </ul>
          );
        }

        // Ordered lists
        if (/^\d+\.\s+/.test(trimmed)) {
          const items = trimmed.split('\n').filter((l) => /^\d+\.\s+/.test(l.trim()));
          return (
            <ol key={idx} className="space-y-2 font-sans text-sm text-slate-300 pl-4 border-l-2 border-[#f59e0b]/60 my-4 list-decimal list-inside">
              {items.map((item, itemIdx) => (
                <li key={itemIdx} className="leading-relaxed">
                  {renderInlineText(item.replace(/^\d+\.\s+/, ''))}
                </li>
              ))}
            </ol>
          );
        }

        // Standard paragraph
        return (
          <p key={idx} className="leading-relaxed font-sans text-slate-300">
            {renderInlineText(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
