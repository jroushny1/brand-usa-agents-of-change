"use client"

import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Bot,
  Check,
  CheckCircle,
  Clock,
  Copy,
  HelpCircle,
  Info,
  Layers,
  List,
  ShieldCheck,
  XCircle,
} from 'lucide-react';
import {
  ContentPatterns,
  DiscoveredEntity,
  FreshnessAnalysis,
  HygieneAnalysis,
  PageAnalysis,
  RobotsAnalysis,
  SchemaTypeCoverage,
  daysSince,
  deduplicateEntities,
} from './analysis';

interface SummaryTabProps {
  analysis: PageAnalysis;
  robotsAnalysis: RobotsAnalysis | null;
  reportCopied: boolean;
  onCopyReport: () => void;
  onSelectTab: (id: string) => void;
}

export default function SummaryTab({ analysis, robotsAnalysis, reportCopied, onCopyReport, onSelectTab }: SummaryTabProps) {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-start justify-between gap-4">
        <div className="flex items-start flex-1">
          <Info className="flex-shrink-0 text-blue-500 mr-3 mt-1" size={20} />
          <div>
            <h3 className="text-sm font-bold text-blue-900 mb-1 font-display">AI Readiness Summary</h3>
            <p className="text-sm text-blue-800 leading-relaxed">
              A quick read on how AI engines like ChatGPT, Claude, Perplexity, and Google AI Overview see your page. Each card shows one category &mdash; click through to the detail tab to see exactly what&apos;s going on.
            </p>
          </div>
        </div>
        <button
          onClick={onCopyReport}
          className="flex-shrink-0 inline-flex items-center px-3 py-2 bg-white border border-brand-cyan text-brand-cyan text-xs font-semibold rounded-lg hover:bg-brand-cyan hover:text-white transition-colors whitespace-nowrap"
        >
          {reportCopied ? (
            <><Check size={14} className="mr-1.5" />Copied!</>
          ) : (
            <><Copy size={14} className="mr-1.5" />Copy report</>
          )}
        </button>
      </div>

      {(() => {
        type SummaryStatus = 'pass' | 'warn' | 'fail' | 'unknown';

        // 1. Entity Graph
        const entities: DiscoveredEntity[] = analysis.entities || [];
        const grouped = deduplicateEntities(entities);
        const authCount = grouped.reduce((sum, e) => sum + e.sameAs.filter((s) => s.isAuthoritative).length, 0);
        const entityStatus: SummaryStatus = authCount >= 3 ? 'pass' : authCount >= 1 ? 'warn' : 'fail';
        const entityHeadline = grouped.length === 0
          ? 'No entities found in structured data'
          : `${authCount} authoritative sameAs across ${grouped.length} ${grouped.length === 1 ? 'entity' : 'entities'}`;

        // 2. Schema Coverage
        const sc: SchemaTypeCoverage | undefined = analysis.schemaCoverage;
        const presentCount = sc?.presentTypes.length || 0;
        const criticalMissing = (sc?.missingRecommended || []).filter((r) => r.priority === 'critical').length;
        const schemaStatus: SummaryStatus = presentCount === 0 ? 'fail' : criticalMissing >= 3 ? 'warn' : presentCount >= 3 ? 'pass' : 'warn';
        const schemaHeadline = presentCount === 0
          ? 'No structured data on this page'
          : `${presentCount} schema types present${criticalMissing > 0 ? `, ${criticalMissing} critical types missing` : ''}`;

        // 3. AI Crawlers
        let crawlerStatus: SummaryStatus = 'unknown';
        let crawlerHeadline = 'Run a URL audit to check robots.txt';
        if (robotsAnalysis) {
          const retrievalBlocked = robotsAnalysis.bots.filter((b) => b.type === 'retrieval' && (b.status === 'blocked' || b.status === 'blocked-by-wildcard')).length;
          const totalBlocked = robotsAnalysis.bots.filter((b) => b.status === 'blocked' || b.status === 'blocked-by-wildcard').length;
          if (retrievalBlocked > 0) {
            crawlerStatus = 'fail';
            crawlerHeadline = `${retrievalBlocked} retrieval ${retrievalBlocked === 1 ? 'bot is' : 'bots are'} blocked — invisible in live AI answers`;
          } else if (totalBlocked > 0) {
            crawlerStatus = 'warn';
            crawlerHeadline = `${totalBlocked} training ${totalBlocked === 1 ? 'bot is' : 'bots are'} blocked (intentional opt-out is fine)`;
          } else {
            crawlerStatus = 'pass';
            crawlerHeadline = 'All AI crawlers allowed';
          }
        }

        // 4. Freshness
        const fresh: FreshnessAnalysis | undefined = analysis.freshness;
        let freshStatus: SummaryStatus = 'unknown';
        let freshHeadline = 'No date signals on the page';
        if (fresh) {
          const modDays = daysSince(fresh.mostRecentModified?.parsed || null);
          if (modDays === null) {
            freshStatus = 'fail';
            freshHeadline = 'No dateModified found — AI cannot evaluate freshness';
          } else if (modDays <= 30) {
            freshStatus = 'pass';
            freshHeadline = `Last modified ${modDays === 0 ? 'today' : modDays + ' days ago'}`;
          } else if (modDays <= 180) {
            freshStatus = 'warn';
            freshHeadline = `Last modified ${Math.round(modDays / 30)} months ago`;
          } else {
            freshStatus = 'fail';
            freshHeadline = `Last modified ${(modDays / 365).toFixed(1)} years ago`;
          }
        }

        // 5. Content Patterns
        const cp: ContentPatterns | undefined = analysis.contentPatterns;
        let patternStatus: SummaryStatus = 'unknown';
        let patternHeadline = 'No body content to analyze';
        if (cp && cp.wordCount > 0) {
          const strongCount = [
            cp.citationsPer1000 >= 5,
            cp.statisticsPer1000 >= 10,
            cp.quotationsPer1000 >= 3,
            cp.questionHeadingPercent >= 30,
          ].filter(Boolean).length;
          patternStatus = strongCount >= 3 ? 'pass' : strongCount >= 1 ? 'warn' : 'fail';
          patternHeadline = `${strongCount} of 4 patterns at "strong" density`;
        }

        // 6. Site Hygiene
        const hyg: HygieneAnalysis | undefined = analysis.hygiene;
        let hygieneStatus: SummaryStatus = 'unknown';
        let hygieneHeadline = 'No hygiene data';
        if (hyg) {
          const allChecks = [...hyg.htmlChecks, ...(hyg.fetchChecks || [])];
          const failCount = allChecks.filter((c) => c.status === 'fail').length;
          const warnCount = allChecks.filter((c) => c.status === 'warn').length;
          const passCount = allChecks.filter((c) => c.status === 'pass').length;
          if (failCount > 0) {
            hygieneStatus = 'fail';
            hygieneHeadline = `${failCount} ${failCount === 1 ? 'check failed' : 'checks failed'} (${passCount} pass, ${warnCount} warn)`;
          } else if (warnCount > 1) {
            hygieneStatus = 'warn';
            hygieneHeadline = `${warnCount} warnings (${passCount} pass)`;
          } else {
            hygieneStatus = 'pass';
            hygieneHeadline = `${passCount} checks pass${warnCount > 0 ? `, ${warnCount} warn` : ''}`;
          }
        }

        const statusConfig = {
          pass: { icon: CheckCircle, color: 'text-green-700', bg: 'bg-green-50', border: 'border-green-200', label: 'Strong' },
          warn: { icon: AlertTriangle, color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200', label: 'Needs work' },
          fail: { icon: XCircle, color: 'text-red-700', bg: 'bg-red-50', border: 'border-red-200', label: 'Critical' },
          unknown: { icon: HelpCircle, color: 'text-gray-500', bg: 'bg-gray-50', border: 'border-gray-200', label: 'Unknown' },
        };

        const cards = [
          { id: 'audit', name: 'Entity Graph', icon: Layers, status: entityStatus, headline: entityHeadline, why: 'How AI knows who you are' },
          { id: 'coverage', name: 'Schema Coverage', icon: List, status: schemaStatus, headline: schemaHeadline, why: 'What structured data your page provides' },
          { id: 'crawlers', name: 'AI Crawler Policy', icon: Bot, status: crawlerStatus, headline: crawlerHeadline, why: 'Whether AI bots can read your site' },
          { id: 'freshness', name: 'Freshness', icon: Clock, status: freshStatus, headline: freshHeadline, why: 'How recently your page was updated' },
          { id: 'patterns', name: 'Content Patterns', icon: BookOpen, status: patternStatus, headline: patternHeadline, why: 'Quotes, stats, citations, question headings' },
          { id: 'hygiene', name: 'Site Hygiene', icon: ShieldCheck, status: hygieneStatus, headline: hygieneHeadline, why: 'Canonical, OG, robots, sitemap, llms.txt' },
        ];

        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card) => {
              const cfg = statusConfig[card.status];
              const StatusIcon = cfg.icon;
              const CardIcon = card.icon;
              return (
                <button
                  key={card.id}
                  onClick={() => onSelectTab(card.id)}
                  className={`text-left p-5 rounded-lg border-2 ${cfg.bg} ${cfg.border} hover:shadow-md transition-shadow`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <CardIcon className={`flex-shrink-0 ${cfg.color} mr-2`} size={18} />
                      <h4 className="text-base font-bold text-brand-navy font-display">{card.name}</h4>
                    </div>
                    <div className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${cfg.color} ${cfg.bg} border ${cfg.border}`}>
                      <StatusIcon size={12} className="mr-1" />
                      {cfg.label}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2 leading-relaxed">{card.headline}</p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                    <span className="text-xs text-gray-500">{card.why}</span>
                    <span className={`inline-flex items-center text-xs font-medium ${cfg.color}`}>
                      See details
                      <ArrowRight size={12} className="ml-1" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        );
      })()}

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-xs text-gray-600 leading-relaxed">
        <strong>About these labels:</strong> Strong / Needs work / Critical are based on the underlying check thresholds in each tab. The audit tool intentionally avoids a single composite &ldquo;AI readiness score&rdquo; &mdash; those numbers look precise but the underlying signal weights are guesses. Read each category on its own merits.
      </div>
    </div>
  );
}
