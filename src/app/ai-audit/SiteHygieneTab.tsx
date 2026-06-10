"use client"

import {
  AlertTriangle,
  CheckCircle,
  Code,
  HelpCircle,
  Info,
  Loader,
  XCircle,
} from 'lucide-react';
import { HygieneAnalysis, HygieneCheck } from './analysis';

interface SiteHygieneTabProps {
  hygiene: HygieneAnalysis;
  hasUrl: boolean;
}

export default function SiteHygieneTab({ hygiene, hasUrl }: SiteHygieneTabProps) {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-start">
        <Info className="flex-shrink-0 text-blue-500 mr-3 mt-1" size={20} />
        <div>
          <h3 className="text-sm font-bold text-blue-900 mb-1 font-display">Site Hygiene</h3>
          <p className="text-sm text-blue-800 leading-relaxed">
            The plumbing checks that AI crawlers and search engines rely on before they even start reading your content. Most of these are quick yes/no signals: is your page indexable, do shares render properly, can crawlers find your sitemap.
          </p>
        </div>
      </div>

      {(() => {
        const hyg: HygieneAnalysis | undefined = hygiene;
        if (!hyg) return null;

        const statusConfig = {
          pass: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' },
          warn: { icon: AlertTriangle, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
          fail: { icon: XCircle, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' },
          unknown: { icon: HelpCircle, color: 'text-gray-500', bg: 'bg-gray-50', border: 'border-gray-200' },
        };

        const renderCheck = (check: HygieneCheck, i: number) => {
          const cfg = statusConfig[check.status];
          const StatusIcon = cfg.icon;
          return (
            <div key={i} className={`p-4 rounded-lg border ${cfg.bg} ${cfg.border}`}>
              <div className="flex items-start mb-2">
                <StatusIcon className={`flex-shrink-0 ${cfg.color} mr-3 mt-0.5`} size={18} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm font-semibold text-brand-navy">{check.name}</h4>
                    <span className={`text-xs font-medium uppercase ${cfg.color}`}>{check.status}</span>
                  </div>
                  <p className="text-xs font-mono text-gray-700 break-all mb-2">{check.detail}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{check.why}</p>
                  {check.fix && (check.status === 'fail' || check.status === 'warn') && (
                    <details className="mt-2">
                      <summary className="cursor-pointer text-xs font-semibold text-brand-cyan hover:text-brand-blue inline-flex items-center">
                        <Code size={11} className="mr-1" />
                        Show fix
                      </summary>
                      <pre className="mt-2 bg-gray-900 text-green-400 p-3 rounded text-xs font-mono overflow-x-auto whitespace-pre">{check.fix}</pre>
                      <p className="text-xs text-gray-500 mt-1 italic">Add to your page&apos;s <code className="bg-gray-100 px-1 rounded">&lt;head&gt;</code>. Replace placeholder values with real content.</p>
                    </details>
                  )}
                </div>
              </div>
            </div>
          );
        };

        return (
          <>
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-brand-navy font-display">On-page checks</h3>
              {hyg.htmlChecks.map(renderCheck)}
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-brand-navy font-display">External file checks</h3>
              {hyg.fetchChecks === null ? (
                <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center text-sm text-gray-500">
                  {hasUrl ? (
                    <><Loader size={16} className="animate-spin mr-2" />Checking sitemap.xml and llms.txt&hellip;</>
                  ) : (
                    <>External file checks need a URL audit. Switch to URL mode and re-run to check sitemap + llms.txt.</>
                  )}
                </div>
              ) : (
                hyg.fetchChecks.map(renderCheck)
              )}
            </div>
          </>
        );
      })()}
    </div>
  );
}
