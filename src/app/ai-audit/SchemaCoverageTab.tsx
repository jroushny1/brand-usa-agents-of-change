"use client"

import {
  CheckCircle,
  Code,
  Info,
} from 'lucide-react';
import { SchemaRecommendation, SchemaTypeCoverage } from './analysis';

interface SchemaCoverageTabProps {
  schemaCoverage: SchemaTypeCoverage;
}

export default function SchemaCoverageTab({ schemaCoverage }: SchemaCoverageTabProps) {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-start">
        <Info className="flex-shrink-0 text-blue-500 mr-3 mt-1" size={20} />
        <div>
          <h3 className="text-sm font-bold text-blue-900 mb-1 font-display">Schema Type Coverage</h3>
          <p className="text-sm text-blue-800 leading-relaxed">
            The Schema tab shows the raw JSON-LD on your page. This one shows the bigger picture: which schema types you have, which ones you should consider adding, and why each matters for AI discovery. DMO-specific schemas (TouristAttraction, Event, Place) get top billing &mdash; they answer the queries travelers actually ask AI.
          </p>
        </div>
      </div>

      {(() => {
        const sc: SchemaTypeCoverage | undefined = schemaCoverage;
        if (!sc) {
          return <div className="text-sm text-gray-500">No schema coverage data.</div>;
        }

        const categoryConfig = {
          foundational: { label: 'Foundational', color: 'text-brand-navy', bg: 'bg-gray-50', border: 'border-gray-200' },
          dmo: { label: 'DMO / Tourism', color: 'text-brand-blue', bg: 'bg-blue-50', border: 'border-blue-200' },
          content: { label: 'Content', color: 'text-purple-700', bg: 'bg-purple-50', border: 'border-purple-200' },
          discovery: { label: 'AI Discovery', color: 'text-green-700', bg: 'bg-green-50', border: 'border-green-200' },
        };

        const priorityBadge = {
          critical: { label: 'Critical', class: 'bg-red-100 text-red-700' },
          recommended: { label: 'Recommended', class: 'bg-amber-100 text-amber-700' },
          'nice-to-have': { label: 'Nice to have', class: 'bg-gray-100 text-gray-600' },
        };

        const groupedMissing: { [key: string]: SchemaRecommendation[] } = {};
        sc.missingRecommended.forEach((rec) => {
          if (!groupedMissing[rec.category]) groupedMissing[rec.category] = [];
          groupedMissing[rec.category].push(rec);
        });

        return (
          <>
            {/* What you have */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-brand-navy font-display">What you have</h3>
                <span className="text-xs text-gray-500">{sc.presentTypes.length} unique types</span>
              </div>
              {sc.presentTypes.length === 0 ? (
                <p className="text-sm text-gray-500 italic">No structured data detected on this page.</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {sc.presentTypes.map((t, i) => (
                    <span key={i} className="inline-flex items-center px-3 py-1.5 rounded bg-green-50 border border-green-200 text-xs font-medium text-green-800">
                      <CheckCircle size={12} className="mr-1.5" />
                      {t.type}
                      {t.count > 1 && <span className="ml-1.5 text-green-600 font-mono">&times;{t.count}</span>}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Worth adding */}
            {sc.missingRecommended.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-brand-navy font-display">Worth adding</h3>
                {(['foundational', 'dmo', 'content', 'discovery'] as const).map((cat) => {
                  const recs = groupedMissing[cat];
                  if (!recs || recs.length === 0) return null;
                  const cfg = categoryConfig[cat];
                  return (
                    <div key={cat} className={`p-5 rounded-lg border ${cfg.bg} ${cfg.border}`}>
                      <h4 className={`text-sm font-bold mb-3 font-display ${cfg.color}`}>{cfg.label}</h4>
                      <div className="space-y-3">
                        {recs.map((rec, i) => {
                          const badge = priorityBadge[rec.priority];
                          return (
                            <div key={i} className="bg-white p-3 rounded border border-gray-200">
                              <div className="flex items-start justify-between mb-1">
                                <code className="text-sm font-mono font-semibold text-brand-navy">{rec.type}</code>
                                <span className={`text-xs px-2 py-0.5 rounded font-medium whitespace-nowrap ${badge.class}`}>
                                  {badge.label}
                                </span>
                              </div>
                              <p className="text-xs text-gray-600 mb-2">{rec.description}</p>
                              <p className="text-xs text-gray-700 leading-relaxed mb-2">{rec.whyMatters}</p>
                              <details>
                                <summary className="cursor-pointer text-xs font-semibold text-brand-cyan hover:text-brand-blue inline-flex items-center">
                                  <Code size={11} className="mr-1" />
                                  Show starter JSON-LD
                                </summary>
                                <pre className="mt-2 bg-gray-900 text-green-400 p-3 rounded text-xs font-mono overflow-x-auto whitespace-pre">{`<script type="application/ld+json">\n${rec.starter}\n</script>`}</pre>
                                <p className="text-xs text-gray-500 mt-1 italic">Drop into your page&apos;s <code className="bg-gray-100 px-1 rounded">&lt;head&gt;</code>. Replace placeholder values with real content.</p>
                              </details>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-xs text-gray-600 leading-relaxed">
              <strong>About the recommendations:</strong> &ldquo;Worth adding&rdquo; assumes the schema type would apply to your content. If you don&apos;t have events, you don&apos;t need Event schema. The DMO-specific recommendations are most useful if your site is a destination, CVB, or tourism platform. Foundational types (Organization, WebSite) belong on every site.
            </div>
          </>
        );
      })()}
    </div>
  );
}
