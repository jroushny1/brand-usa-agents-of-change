"use client"

import {
  AlertTriangle,
  BarChart,
  HelpCircle as Question,
  Info,
  Link2,
  Quote,
} from 'lucide-react';
import { ContentPatterns } from './analysis';

interface ContentPatternsTabProps {
  contentPatterns: ContentPatterns;
}

export default function ContentPatternsTab({ contentPatterns }: ContentPatternsTabProps) {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-start">
        <Info className="flex-shrink-0 text-blue-500 mr-3 mt-1" size={20} />
        <div>
          <h3 className="text-sm font-bold text-blue-900 mb-1 font-display">Content Patterns</h3>
          <p className="text-sm text-blue-800 leading-relaxed">
            This measures what your page links out to &mdash; not whether your page appears anywhere. <strong>Direct quotes</strong>, <strong>real statistics</strong>, and <strong>links to credible sources</strong> are the patterns the 2024 Princeton GEO study (<a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">Aggarwal et al.</a>) associated with getting cited. Newer peer-reviewed work is more skeptical: a NeurIPS 2025 benchmark (<a href="https://arxiv.org/abs/2506.11097" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">Puerto et al.</a>) tested the same tactics across six domains and found significant gains in 3 of 54 cases, and a 2026 study (<a href="https://arxiv.org/abs/2602.12187" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">Kim et al.</a>) found that rewriting body text can actually lower your odds of being retrieved at all. Treat the counts below as a craft check, not a ranking lever.
          </p>
        </div>
      </div>

      {(() => {
        const cp: ContentPatterns | undefined = contentPatterns;
        if (!cp || cp.wordCount === 0) {
          return (
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 flex items-start">
              <AlertTriangle className="flex-shrink-0 text-amber-500 mr-3 mt-1" size={20} />
              <div>
                <h3 className="text-sm font-bold text-amber-900 mb-1 font-display">No content to measure</h3>
                <p className="text-sm text-amber-800 leading-relaxed">The page has no extractable body text. This usually means the site is client-side-rendered and our fetch couldn&apos;t get the hydrated content. Try View Page Source in your browser and paste the rendered HTML.</p>
              </div>
            </div>
          );
        }

        const score = (value: number, strong: number, medium: number) => {
          if (value >= strong) return { label: 'Strong', color: 'text-green-700', bg: 'bg-green-50', border: 'border-green-200' };
          if (value >= medium) return { label: 'Medium', color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200' };
          return { label: 'Weak', color: 'text-red-700', bg: 'bg-red-50', border: 'border-red-200' };
        };

        const checks = [
          { icon: Link2, name: 'Authority citations', count: cp.externalAuthorityLinks, per1000: cp.citationsPer1000, score: score(cp.citationsPer1000, 5, 2), unit: 'per 1000 words', why: 'Links to Wikipedia, .gov, .edu, established news, and academic sources. One of three patterns flagged by the Princeton GEO study; later benchmarks found the effect inconsistent across domains.' },
          { icon: BarChart, name: 'Statistics', count: cp.statistics, per1000: cp.statisticsPer1000, score: score(cp.statisticsPer1000, 10, 5), unit: 'per 1000 words', why: 'Numbers paired with units (%, $, years, miles, GB, etc.). Concrete figures make a page more quotable, though measured lift varies by domain.' },
          { icon: Quote, name: 'Direct quotations', count: cp.quotations, per1000: cp.quotationsPer1000, score: score(cp.quotationsPer1000, 3, 1), unit: 'per 1000 words', why: 'Quoted text of 15+ characters. Suggests primary-source content — the kind of material AI answers tend to lift verbatim.' },
          { icon: Question, name: 'Question-format headings', count: cp.questionHeadings, per1000: cp.questionHeadingPercent, score: score(cp.questionHeadingPercent, 30, 10), unit: '% of all headings', why: 'Headings phrased as questions (How / Why / What / Should / etc., or ending in "?"). AI tools surface FAQ-style content disproportionately.' },
        ];

        return (
          <>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-between text-sm">
              <span className="text-gray-600">Body word count (after noise removal):</span>
              <span className="font-mono font-semibold text-brand-navy">{cp.wordCount.toLocaleString()}</span>
            </div>

            {checks.map((check, i) => {
              const Icon = check.icon;
              return (
                <div key={i} className={`p-6 rounded-lg border-2 ${check.score.bg} ${check.score.border}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start flex-1">
                      <Icon className={`flex-shrink-0 ${check.score.color} mr-3 mt-1`} size={20} />
                      <div className="flex-1">
                        <h4 className="text-base font-bold text-brand-navy font-display">{check.name}</h4>
                        <div className="mt-1 text-sm text-gray-700">
                          <span className="font-mono font-semibold">{check.count}</span> total
                          <span className="text-gray-500"> &middot; </span>
                          <span className="font-mono font-semibold">{check.per1000.toFixed(1)}</span> {check.unit}
                        </div>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-bold ${check.score.color} ${check.score.bg} border ${check.score.border} whitespace-nowrap`}>
                      {check.score.label}
                    </div>
                  </div>
                  <p className={`text-xs leading-relaxed ${check.score.color}`}>{check.why}</p>
                </div>
              );
            })}

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-xs text-gray-600 leading-relaxed">
              <strong>About these labels:</strong> Strong / Medium / Weak are rough guesses based on common ranges, not thresholds any study established. Aim for &ldquo;enough of each&rdquo; &mdash; your interview quotes, your real stats, your real source links. Made-up content to game the audit backfires; AI engines get sharper at spotting it every quarter. And know the ceiling: <a href="https://doi.org/10.1080/13683500.2026.2654066" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">Najafi &amp; Costa (2026)</a> in <em>Current Issues in Tourism</em> found AI travel recommendations concentrate on already-prominent destinations regardless of how individual pages are written. Content tactics won&apos;t overcome that alone &mdash; which is why the entity, schema, and crawler tabs matter more.
            </div>
          </>
        );
      })()}
    </div>
  );
}
