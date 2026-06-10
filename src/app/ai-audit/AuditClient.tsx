"use client"

import React, { useState, useEffect } from 'react';
import {
  Code,
  FileText,
  Eye,
  Database,
  Activity,
  AlertTriangle,
  CheckCircle,
  Cpu,
  Image as ImageIcon,
  Type,
  Globe,
  Loader,
  Info,
  ShieldCheck,
  Zap,
  ArrowLeft,
  Layers,
  AlertOctagon,
  List,
  Layout,
  ExternalLink,
  FlaskConical,
  Bot,
  XCircle,
  HelpCircle,
  Clock,
  Calendar,
  BookOpen,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  DiscoveredEntity,
  FreshnessAnalysis,
  PageAnalysis,
  RobotsAnalysis,
  analyzeRobotsContent,
  buildSameAsJsonSnippet,
  daysSince,
  deduplicateEntities,
  fetchHygieneChecks,
  fetchRobotsTxt,
  generateMarkdownReport,
  getDisplayPlatform,
  getSuggestedSameAs,
  normalizeUrl,
  parseContent,
} from './analysis';
import { DEMO_HTML } from './demo-html';
import ContentPatternsTab from './ContentPatternsTab';
import SummaryTab from './SummaryTab';
import SchemaCoverageTab from './SchemaCoverageTab';
import SiteHygieneTab from './SiteHygieneTab';

function jsonLdTypeLabel(data: unknown): string {
  if (data && typeof data === 'object' && !Array.isArray(data)) {
    const t = (data as Record<string, unknown>)['@type'];
    if (typeof t === 'string' && t) return t;
    if (Array.isArray(t) && t.length > 0) return t.join('');
  }
  return 'Unknown';
}

export default function AuditClient() {
  const [activeTab, setActiveTab] = useState('summary');
  const [inputMode, setInputMode] = useState('html');
  const [inputText, setInputText] = useState('');
  const [urlInput, setUrlInput] = useState('');

  const [analysis, setAnalysis] = useState<PageAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [robotsAnalysis, setRobotsAnalysis] = useState<RobotsAnalysis | null>(null);
  const [crawlerCheckUrl, setCrawlerCheckUrl] = useState('');
  const [isCheckingRobots, setIsCheckingRobots] = useState(false);
  const [richResultsUrl, setRichResultsUrl] = useState('');
  const [manualRobotsTxt, setManualRobotsTxt] = useState('');
  const [reportCopied, setReportCopied] = useState(false);

  useEffect(() => {
    if (inputMode !== 'url') {
        if (!inputText) {
            setAnalysis(null);
            return;
        }
        const result = parseContent(inputText);
        setAnalysis(result);
    }
  }, [inputText, inputMode]);

  const loadDemo = () => {
    setInputMode('html');
    setInputText(DEMO_HTML);
    setFetchError(null);
    setActiveTab('summary');
  };

  const handleManualRobotsSubmit = () => {
    if (!manualRobotsTxt.trim()) return;
    const url = normalizeUrl(crawlerCheckUrl) || '(manual paste)';
    setRobotsAnalysis(analyzeRobotsContent(manualRobotsTxt, url));
  };

  const handleCrawlerCheck = async () => {
    const normalized = normalizeUrl(crawlerCheckUrl);
    if (!normalized) return;
    setIsCheckingRobots(true);
    setRobotsAnalysis(null);
    const result = await fetchRobotsTxt(normalized);
    setRobotsAnalysis(result);
    setIsCheckingRobots(false);
  };

  // Auto-sync the crawler / rich-results URL fields when a content audit succeeds
  useEffect(() => {
    if (analysis?.url) {
      setCrawlerCheckUrl((prev) => prev || analysis.url);
      setRichResultsUrl((prev) => prev || analysis.url);
    }
  }, [analysis?.url]);

  const handleUrlFetch = async () => {
    if (!urlInput) return;

    setIsLoading(true);
    setFetchError(null);
    setAnalysis(null);
    setRobotsAnalysis(null);
    setActiveTab('summary'); // Default to Summary view

    try {
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(urlInput)}`);
        const data = await response.json();

        if (data.contents) {
            setInputText(data.contents);
            const result = parseContent(data.contents, urlInput);
            setAnalysis(result);

            // Fetch robots.txt in parallel (don't block on it)
            fetchRobotsTxt(urlInput).then(setRobotsAnalysis);
            // Fetch hygiene checks (sitemap, llms.txt) in parallel
            fetchHygieneChecks(urlInput).then((fetchChecks) => {
              setAnalysis((prev) => prev ? { ...prev, hygiene: { ...prev.hygiene, fetchChecks } } : prev);
            });
        } else {
            throw new Error("Could not retrieve content. The site might block proxies.");
        }
    } catch {
        setFetchError("Failed to fetch. Some sites block automated tools. Try pasting HTML source.");
    } finally {
        setIsLoading(false);
    }
  };

  const handleCopyReport = async () => {
    if (!analysis) return;
    try {
      const md = generateMarkdownReport(analysis, robotsAnalysis);
      await navigator.clipboard.writeText(md);
      setReportCopied(true);
      setTimeout(() => setReportCopied(false), 2500);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  const TabButton = ({ id, icon: Icon, label }: { id: string; icon: LucideIcon; label: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors duration-200 whitespace-nowrap ${
        activeTab === id
          ? 'border-brand-cyan text-brand-cyan font-medium'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="flex flex-col h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center z-10">
        <div className="flex items-center space-x-3">
          <Link
            href="/"
            className="flex items-center text-brand-navy hover:text-brand-cyan transition-colors mr-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" aria-hidden="true" />
            Back to Home
          </Link>
          <div className="bg-brand-cyan p-2 rounded-lg text-white">
            <Cpu size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-brand-navy font-display">AI Vision Simulator</h1>
            <p className="text-xs text-gray-500">See what ChatGPT, Claude, and Perplexity see on your site</p>
          </div>
        </div>
        <button
          onClick={loadDemo}
          className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md transition-colors"
        >
          Load Sample DMO Site
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel */}
        <div className="w-1/3 min-w-[300px] border-r bg-white flex flex-col z-0 shadow-lg">
          <div className="p-4 border-b bg-gray-50">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Source Input</h2>
            <div className="flex p-1 bg-gray-200 rounded-lg">
                <button
                    onClick={() => { setInputMode('url'); setFetchError(null); }}
                    className={`flex-1 flex items-center justify-center py-1.5 text-xs font-medium rounded-md transition-all ${inputMode === 'url' ? 'bg-white text-brand-cyan shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    <Globe size={14} className="mr-1" /> URL
                </button>
                <button
                    onClick={() => { setInputMode('html'); setFetchError(null); }}
                    className={`flex-1 flex items-center justify-center py-1.5 text-xs font-medium rounded-md transition-all ${inputMode === 'html' ? 'bg-white text-brand-cyan shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    <Code size={14} className="mr-1" /> HTML
                </button>
                <button
                    onClick={() => { setInputMode('text'); setFetchError(null); }}
                    className={`flex-1 flex items-center justify-center py-1.5 text-xs font-medium rounded-md transition-all ${inputMode === 'text' ? 'bg-white text-brand-cyan shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    <Type size={14} className="mr-1" /> Text
                </button>
            </div>

            <details className="mt-3 group">
              <summary className="cursor-pointer text-xs text-brand-cyan hover:text-brand-blue font-medium">
                When do I use URL vs. HTML?
              </summary>
              <div className="mt-3 text-xs text-gray-700 leading-relaxed space-y-2 pl-1">
                <p><strong className="text-gray-900">URL</strong> is the easy path. Type your address and I&apos;ll fetch your page and run every check on it.</p>
                <p><strong className="text-gray-900">HTML</strong> is for when my fetch can&apos;t reach your site. That happens with Cloudflare protection, login walls, or sites with strict bot rules. Open your site in your browser, right-click and choose <em>View Page Source</em>, copy all of it, and paste it here. The same checks work.</p>
                <p><strong className="text-gray-900">Two tabs always need a URL</strong> no matter which mode you&apos;re in: AI Crawlers (reads your <code className="bg-gray-100 px-1 rounded">robots.txt</code> file) and Google&apos;s Rich Results Test (Google tests your live page on its own servers). Both have their own URL field inside the tab, so they work even when the main fetch fails.</p>
              </div>
            </details>
          </div>

          <div className="flex-1 flex flex-col relative">
            {inputMode === 'url' ? (
                <div className="p-6 flex flex-col space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
                        <input
                            type="url"
                            placeholder="https://example.com"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan outline-none"
                            value={urlInput}
                            onChange={(e) => setUrlInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleUrlFetch()}
                        />
                    </div>
                    <button
                        onClick={handleUrlFetch}
                        disabled={isLoading || !urlInput}
                        className={`w-full py-3 rounded-lg font-medium text-white flex items-center justify-center ${isLoading || !urlInput ? 'bg-brand-cyan/50 cursor-not-allowed' : 'bg-brand-cyan hover:bg-brand-blue'}`}
                    >
                        {isLoading ? <Loader className="animate-spin mr-2" size={18} /> : null}
                        {isLoading ? 'Fetching...' : 'Analyze Website'}
                    </button>
                </div>
            ) : (
                <textarea
                    className="flex-1 p-4 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-cyan border-none"
                    placeholder={inputMode === 'html' ? "Paste your website's HTML source code here..." : "Paste your article text here..."}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
            )}

            {/* Error Overlay */}
            {fetchError && (
                <div className="absolute inset-0 bg-white/90 flex items-center justify-center p-6 text-center z-10 backdrop-blur-sm">
                    <div className="max-w-xs">
                        <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-red-600">
                            <AlertTriangle size={24} />
                        </div>
                        <h3 className="text-gray-900 font-bold mb-1">Couldn&apos;t reach your site</h3>
                        <p className="text-sm text-gray-600 mb-4">{fetchError}</p>
                        <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                          This usually means Cloudflare, a login wall, or strict bot rules are blocking my fetch. Workaround: open your site, View Page Source, copy the HTML, paste it into the HTML tab.
                        </p>
                        <button
                            onClick={() => setFetchError(null)}
                            className="text-sm text-brand-cyan hover:text-brand-blue font-medium underline"
                        >
                            Try again or switch to HTML
                        </button>
                    </div>
                </div>
            )}
          </div>
        </div>

        {/* Right Panel: Output */}
        <div className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
          {/* Tabs */}
          <div className="bg-white border-b flex overflow-x-auto">
            <TabButton id="summary" icon={TrendingUp} label="Summary" />
            <TabButton id="audit" icon={Layers} label="Entity Graph" />
            <TabButton id="knowledge" icon={Database} label="Schema" />
            <TabButton id="crawlers" icon={Bot} label="AI Crawlers" />
            <TabButton id="freshness" icon={Clock} label="Freshness" />
            <TabButton id="patterns" icon={BookOpen} label="Content Patterns" />
            <TabButton id="coverage" icon={List} label="Schema Coverage" />
            <TabButton id="hygiene" icon={ShieldCheck} label="Site Hygiene" />
            <TabButton id="structure" icon={Layout} label="Structure" />
            <TabButton id="stream" icon={Activity} label="Token Stream" />
            <TabButton id="rag" icon={FileText} label="RAG Context" />
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-6">
            {isLoading ? (
                <div className="flex flex-col items-center justify-center h-full text-brand-cyan">
                    <Loader size={48} className="animate-spin mb-4" />
                    <p className="text-lg font-medium">Analyzing Website...</p>
                </div>
            ) : !analysis ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <Eye size={48} className="mb-4 opacity-50" />
                <p className="text-lg">Waiting for content...</p>
                <p className="text-sm">Enter a URL to begin analysis.</p>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto space-y-6">

                {/* TAB: SUMMARY (default view) */}
                {activeTab === 'summary' && (
                  <SummaryTab
                    analysis={analysis}
                    robotsAnalysis={robotsAnalysis}
                    reportCopied={reportCopied}
                    onCopyReport={handleCopyReport}
                    onSelectTab={setActiveTab}
                  />
                )}

                {/* TAB 1: ENTITY GRAPH */}
                {activeTab === 'audit' && (
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-start">
                      <Info className="flex-shrink-0 text-blue-500 mr-3 mt-1" size={20} />
                      <div>
                        <h3 className="text-sm font-bold text-blue-900 mb-1 font-display">Entity Graph</h3>
                        <p className="text-sm text-blue-800 leading-relaxed">
                          When AI mentions your organization in an answer, it needs to know exactly who you are. <code className="bg-blue-100 px-1 rounded">sameAs</code> links in your structured data point to your authoritative profiles &mdash; Wikipedia, LinkedIn, Wikidata, Crunchbase. With them, AI cites you with confidence. Without them, AI has to guess whether you&apos;re the right Brand USA or someone else with a similar name.
                        </p>
                      </div>
                    </div>

                    {(() => {
                      const rawEntities: DiscoveredEntity[] = analysis.entities || [];
                      const groupedEntities = deduplicateEntities(rawEntities);
                      const totalDeclarations = rawEntities.length;
                      const uniqueCount = groupedEntities.length;
                      const totalSameAs = groupedEntities.reduce((sum, e) => sum + e.sameAs.length, 0);
                      const authoritativeCount = groupedEntities.reduce((sum, e) => sum + e.sameAs.filter((s) => s.isAuthoritative).length, 0);
                      const strength = authoritativeCount >= 3 ? 'strong' : authoritativeCount >= 1 ? 'medium' : 'weak';
                      const strengthConfig = {
                        strong: { label: 'Strong', color: 'text-green-700', bg: 'bg-green-50', border: 'border-green-200', desc: 'Multiple authoritative sources resolve your entities. AI cites you with confidence.' },
                        medium: { label: 'Medium', color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200', desc: 'Some authoritative anchors exist. Adding Wikipedia, Wikidata, or LinkedIn to the rest of your entities would close the gap.' },
                        weak: { label: 'Weak', color: 'text-red-700', bg: 'bg-red-50', border: 'border-red-200', desc: 'Few or no authoritative anchors. AI cannot confidently tell whether your organization is the right Brand USA or someone else with a similar name. Adding sameAs links should be a priority.' },
                      }[strength];

                      return (
                        <>
                          <div className={`p-6 rounded-lg border-2 ${strengthConfig.bg} ${strengthConfig.border}`}>
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <h3 className="text-lg font-bold text-brand-navy font-display">Entity Confidence</h3>
                                <p className="text-sm text-gray-600">
                                  {uniqueCount} unique {uniqueCount === 1 ? 'entity' : 'entities'}
                                  {totalDeclarations !== uniqueCount && <span className="text-gray-400"> ({totalDeclarations} total declarations &mdash; some entities are declared more than once)</span>},
                                  {' '}{totalSameAs} sameAs link{totalSameAs === 1 ? '' : 's'}, {authoritativeCount} authoritative.
                                </p>
                              </div>
                              <div className={`px-3 py-1 rounded-full text-sm font-bold ${strengthConfig.color} ${strengthConfig.bg} border ${strengthConfig.border}`}>
                                {strengthConfig.label}
                              </div>
                            </div>
                            <p className={`text-sm leading-relaxed ${strengthConfig.color}`}>
                              {strengthConfig.desc}
                            </p>
                          </div>

                          {groupedEntities.length === 0 ? (
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                              <AlertOctagon className="mx-auto text-amber-500 mb-3" size={32} />
                              <h4 className="text-base font-semibold text-brand-navy mb-2">No entities found in structured data</h4>
                              <p className="text-sm text-gray-600 max-w-md mx-auto">
                                The page has no Organization, Person, LocalBusiness, or TouristAttraction schema with identifiable entities. Add at minimum an Organization block with <code className="bg-gray-100 px-1 rounded text-xs">@type</code>, <code className="bg-gray-100 px-1 rounded text-xs">name</code>, and a <code className="bg-gray-100 px-1 rounded text-xs">sameAs</code> array linking to Wikipedia, LinkedIn, and your other canonical profiles.
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              {groupedEntities.map((entity, i) => {
                                const suggestions = getSuggestedSameAs(entity);
                                return (
                                  <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                                    <div className="flex items-start justify-between mb-3">
                                      <div>
                                        <h4 className="text-base font-semibold text-brand-navy">{entity.name}</h4>
                                        <p className="text-xs text-gray-500 font-mono">{entity.type}</p>
                                        {entity.count > 1 && (
                                          <p className="text-xs text-gray-400 mt-0.5 italic">Declared {entity.count} times on this page</p>
                                        )}
                                      </div>
                                      <span className={`text-xs px-2 py-1 rounded font-medium whitespace-nowrap ${entity.sameAs.length === 0 ? 'bg-red-100 text-red-700' : entity.sameAs.some((s) => s.isAuthoritative) ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                                        {entity.sameAs.length} sameAs
                                      </span>
                                    </div>
                                    {entity.sameAs.length === 0 ? (
                                      <p className="text-sm text-gray-500 italic mb-3">No sameAs links &mdash; AI has nothing to anchor this entity to.</p>
                                    ) : (
                                      <div className="flex flex-wrap gap-2 mb-3">
                                        {entity.sameAs.map((link, j) => (
                                          <a
                                            key={j}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={link.url}
                                            className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-medium border transition-colors ${link.isAuthoritative ? 'bg-green-50 border-green-200 text-green-800 hover:bg-green-100' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'}`}
                                          >
                                            {link.isAuthoritative && <CheckCircle size={12} className="mr-1" />}
                                            {getDisplayPlatform(link)}
                                            <ExternalLink size={10} className="ml-1 opacity-60" />
                                          </a>
                                        ))}
                                      </div>
                                    )}

                                    {suggestions.length > 0 && (
                                      <details className="mt-2 group">
                                        <summary className="cursor-pointer text-xs font-semibold text-brand-cyan hover:text-brand-blue inline-flex items-center">
                                          <Zap size={12} className="mr-1" />
                                          Suggested sameAs to add ({suggestions.length})
                                        </summary>
                                        <div className="mt-3 space-y-2">
                                          {suggestions.map((s, k) => (
                                            <div key={k} className="flex items-start text-xs bg-gray-50 rounded p-2 border border-gray-100">
                                              <div className="flex-1 min-w-0">
                                                <div className="font-semibold text-brand-navy">{s.platform}</div>
                                                <div className="font-mono text-gray-600 break-all">{s.example}</div>
                                                <div className="text-gray-500 mt-0.5">{s.note}</div>
                                              </div>
                                            </div>
                                          ))}
                                          <details className="mt-2">
                                            <summary className="cursor-pointer text-xs text-gray-600 hover:text-brand-navy">Show JSON-LD snippet to paste into your schema</summary>
                                            <pre className="mt-2 bg-gray-900 text-green-400 p-3 rounded text-xs font-mono overflow-x-auto whitespace-pre-wrap">{buildSameAsJsonSnippet(entity, suggestions)}</pre>
                                            <p className="text-xs text-gray-500 mt-2 italic">
                                              Replace the placeholder URLs with your actual profiles before pasting. The Wikidata Q-number and Wikipedia slug need to be looked up &mdash; don&apos;t use the guesses verbatim.
                                            </p>
                                          </details>
                                        </div>
                                      </details>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </>
                      );
                    })()}


                    {/* Image Audit */}
                    {analysis.images.length > 0 && (
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-brand-navy font-display flex items-center">
                                <ImageIcon size={20} className="mr-2" />
                                Image Audit
                            </h3>
                            <div className="flex items-center space-x-3">
                                <span className="text-sm text-gray-500">{analysis.images.length} images found</span>
                                {(() => {
                                    const missing = analysis.images.filter((img) => !img.hasAlt).length;
                                    return missing > 0 ? (
                                        <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">{missing} missing alt text</span>
                                    ) : (
                                        <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700">All have alt text</span>
                                    );
                                })()}
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">Alt text is how AI &ldquo;sees&rdquo; your images. Missing alt text means AI travel planners skip these visuals entirely.</p>
                        <div className="space-y-2">
                            {analysis.images.map((img, i) => (
                                <div key={i} className={`flex items-start p-3 rounded border text-sm ${img.hasAlt ? 'bg-gray-50 border-gray-100' : 'bg-red-50 border-red-100'}`}>
                                    <div className={`mr-3 mt-0.5 flex-shrink-0 ${img.hasAlt ? 'text-green-600' : 'text-red-500'}`}>
                                        {img.hasAlt ? <CheckCircle size={16} /> : <AlertTriangle size={16} />}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-mono text-xs text-gray-400 truncate">{img.src}</p>
                                        <p className={`font-medium ${img.hasAlt ? 'text-gray-800' : 'text-red-700'}`}>
                                            {img.alt}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    )}
                  </div>
                )}

                {/* TAB 2: SCHEMA */}
                {activeTab === 'knowledge' && (
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-start">
                        <Info className="flex-shrink-0 text-blue-500 mr-3 mt-1" size={20} />
                        <div>
                            <h3 className="text-sm font-bold text-blue-900 mb-1 font-display">Structured Data</h3>
                            <p className="text-sm text-blue-800 leading-relaxed">
                                Structured data is the invisible code that tells AI exactly what&apos;s on your page. With it, AI knows that &ldquo;June 27&rdquo; is an event date and not a publish date, that &ldquo;Brand USA&rdquo; is the organization and not the campaign name. Without it, AI has to guess.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-brand-cyan">
                      <div className="flex items-start mb-4">
                        <FlaskConical className="flex-shrink-0 text-brand-cyan mr-3 mt-1" size={24} />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-brand-navy mb-2 font-display">Validate with Google&apos;s Rich Results Test</h3>
                          <p className="text-sm text-gray-700 leading-relaxed mb-2">
                            Google has its own tool that checks whether your structured data qualifies for AI Overview, AI Mode, and rich snippets in search. It catches errors I can&apos;t see from raw JSON alone, like a required field that&apos;s technically present but empty.
                          </p>
                          <p className="text-xs text-gray-500 leading-relaxed">
                            Opens in a new tab. Google tests your live URL directly on its own servers, so paste won&apos;t help here. Always needs a URL.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          type="url"
                          value={richResultsUrl}
                          onChange={(e) => setRichResultsUrl(e.target.value)}
                          placeholder="https://www.yourdmo.com"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                        />
                        <a
                          href={normalizeUrl(richResultsUrl) ? `https://search.google.com/test/rich-results?url=${encodeURIComponent(normalizeUrl(richResultsUrl)!)}` : '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => { if (!normalizeUrl(richResultsUrl)) e.preventDefault(); }}
                          className={`inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${normalizeUrl(richResultsUrl) ? 'bg-brand-cyan text-white hover:bg-brand-blue' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                        >
                          Test in Google
                          <ExternalLink className="ml-2" size={16} />
                        </a>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-brand-navy font-display">JSON-LD Objects</h3>
                            <span className="px-2 py-1 rounded text-xs font-bold uppercase bg-gray-100 text-gray-600">
                                {analysis.jsonLd.length} Found
                            </span>
                        </div>

                        {analysis.jsonLd.length > 0 ? (
                            analysis.jsonLd.map((data, i) => (
                                <div key={i} className="mb-4 last:mb-0">
                                    <div className="text-xs font-mono text-gray-500 mb-1">Type: {jsonLdTypeLabel(data)}</div>
                                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs font-mono">
                                        {JSON.stringify(data, null, 2)}
                                    </pre>
                                </div>
                            ))
                        ) : (
                            <div className="text-center p-8 text-gray-400">No Schema Markup Found</div>
                        )}
                    </div>
                  </div>
                )}

                {/* TAB: AI CRAWLERS */}
                {activeTab === 'crawlers' && (
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-start">
                      <Info className="flex-shrink-0 text-blue-500 mr-3 mt-1" size={20} />
                      <div>
                        <h3 className="text-sm font-bold text-blue-900 mb-1 font-display">AI Crawler Policy</h3>
                        <p className="text-sm text-blue-800 leading-relaxed">
                          <code className="bg-blue-100 px-1 rounded">robots.txt</code> is the file at your domain where you tell AI bots whether they can read your site. Two kinds visit: <strong>training bots</strong> like GPTBot and ClaudeBot use your content to train future AI models. <strong>Retrieval bots</strong> like ChatGPT-User and PerplexityBot fetch your site live when a user asks an AI a question about you. If you block retrieval bots, you don&apos;t show up in live AI answers.
                        </p>
                      </div>
                    </div>

                    {/* URL input form — works independently of the main content audit */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-brand-cyan">
                      <h3 className="text-lg font-semibold text-brand-navy mb-2 font-display">Check a site&apos;s robots.txt</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Enter any live URL. We&apos;ll fetch <code className="bg-gray-100 px-1 rounded text-xs">/robots.txt</code> from that domain and parse it for AI crawler rules. Works independently of any HTML you pasted in the sidebar.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          type="url"
                          value={crawlerCheckUrl}
                          onChange={(e) => setCrawlerCheckUrl(e.target.value)}
                          onKeyDown={(e) => { if (e.key === 'Enter' && !isCheckingRobots) handleCrawlerCheck(); }}
                          placeholder="https://www.yourdmo.com"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                          disabled={isCheckingRobots}
                        />
                        <button
                          onClick={handleCrawlerCheck}
                          disabled={!normalizeUrl(crawlerCheckUrl) || isCheckingRobots}
                          className="inline-flex items-center justify-center px-4 py-2 bg-brand-cyan text-white text-sm font-semibold rounded-lg hover:bg-brand-blue transition-colors disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
                        >
                          {isCheckingRobots ? (
                            <><Loader size={16} className="animate-spin mr-2" />Checking...</>
                          ) : (
                            <>Check robots.txt</>
                          )}
                        </button>
                      </div>
                    </div>

                    {!robotsAnalysis && !isCheckingRobots && (
                      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center text-sm text-gray-500">
                        Enter a URL above and we&apos;ll show which AI crawlers can read the site.
                      </div>
                    )}

                    {robotsAnalysis && (
                      <>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-brand-navy font-display">Bot-by-bot status</h3>
                            {robotsAnalysis.url && robotsAnalysis.url !== '(manual paste)' && (
                              <a
                                href={robotsAnalysis.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-brand-cyan hover:text-brand-blue inline-flex items-center"
                              >
                                View raw robots.txt
                                <ExternalLink className="ml-1" size={12} />
                              </a>
                            )}
                          </div>

                          {robotsAnalysis.error && (
                            <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded text-sm text-amber-900">
                              <p>{robotsAnalysis.error}</p>
                              {robotsAnalysis.url && robotsAnalysis.url !== '(manual paste)' && (
                                <a
                                  href={robotsAnalysis.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center mt-2 text-brand-cyan hover:text-brand-blue text-xs font-medium"
                                >
                                  Open {robotsAnalysis.url} in a new tab
                                  <ExternalLink className="ml-1" size={12} />
                                </a>
                              )}
                            </div>
                          )}

                          <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                              <thead>
                                <tr className="text-left text-xs font-semibold text-gray-500 uppercase border-b border-gray-200">
                                  <th className="py-2 pr-4">Bot</th>
                                  <th className="py-2 pr-4">Vendor</th>
                                  <th className="py-2 pr-4">Type</th>
                                  <th className="py-2 pr-4">Status</th>
                                  <th className="py-2">What it does</th>
                                </tr>
                              </thead>
                              <tbody>
                                {robotsAnalysis.bots.map((bot) => {
                                  const statusConfig = {
                                    allowed: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50', label: 'Allowed (explicit)' },
                                    blocked: { icon: XCircle, color: 'text-red-600', bg: 'bg-red-50', label: 'Blocked (explicit)' },
                                    partial: { icon: AlertTriangle, color: 'text-amber-600', bg: 'bg-amber-50', label: 'Partial restrictions' },
                                    'blocked-by-wildcard': { icon: XCircle, color: 'text-red-600', bg: 'bg-red-50', label: 'Blocked (via *)' },
                                    'not-mentioned': { icon: HelpCircle, color: 'text-gray-400', bg: 'bg-gray-50', label: 'Not mentioned (allowed)' },
                                  }[bot.status];
                                  const StatusIcon = statusConfig.icon;
                                  const typeColor = bot.type === 'training' ? 'bg-purple-100 text-purple-700' : bot.type === 'retrieval' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700';
                                  return (
                                    <tr key={bot.name} className="border-b border-gray-100">
                                      <td className="py-3 pr-4 font-mono text-xs text-brand-navy">{bot.name}</td>
                                      <td className="py-3 pr-4 text-gray-600">{bot.vendor}</td>
                                      <td className="py-3 pr-4">
                                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${typeColor}`}>
                                          {bot.type}
                                        </span>
                                      </td>
                                      <td className="py-3 pr-4">
                                        <div className={`inline-flex items-center px-2 py-1 rounded ${statusConfig.bg}`}>
                                          <StatusIcon size={14} className={`${statusConfig.color} mr-1.5`} />
                                          <span className={`text-xs font-medium ${statusConfig.color}`}>{statusConfig.label}</span>
                                        </div>
                                      </td>
                                      <td className="py-3 text-gray-600 text-xs">{bot.purpose}</td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {robotsAnalysis.found && robotsAnalysis.raw && (
                          <details className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <summary className="cursor-pointer text-sm font-semibold text-brand-navy">Raw robots.txt</summary>
                            <pre className="mt-3 bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs font-mono whitespace-pre-wrap">
                              {robotsAnalysis.raw}
                            </pre>
                          </details>
                        )}

                        {!robotsAnalysis.found && (
                          <details className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <summary className="cursor-pointer text-sm font-semibold text-brand-navy">Paste robots.txt manually</summary>
                            <p className="mt-3 text-xs text-gray-600 mb-2">
                              If the fetch failed (some sites block our proxy), open the robots.txt URL in your browser, copy its contents, and paste here.
                            </p>
                            <textarea
                              value={manualRobotsTxt}
                              onChange={(e) => setManualRobotsTxt(e.target.value)}
                              placeholder="User-agent: *&#10;Allow: /&#10;&#10;User-agent: GPTBot&#10;Allow: /"
                              className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg text-xs font-mono focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                            />
                            <button
                              onClick={handleManualRobotsSubmit}
                              disabled={!manualRobotsTxt.trim()}
                              className="mt-2 px-4 py-2 bg-brand-cyan text-white text-sm font-semibold rounded-lg hover:bg-brand-blue transition-colors disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
                            >
                              Analyze pasted robots.txt
                            </button>
                          </details>
                        )}
                      </>
                    )}
                  </div>
                )}

                {/* TAB: FRESHNESS */}
                {activeTab === 'freshness' && (
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-start">
                      <Info className="flex-shrink-0 text-blue-500 mr-3 mt-1" size={20} />
                      <div>
                        <h3 className="text-sm font-bold text-blue-900 mb-1 font-display">Content Freshness</h3>
                        <p className="text-sm text-blue-800 leading-relaxed">
                          AI engines cite recent content more often than old content. The freshness signal lives in <code className="bg-blue-100 px-1 rounded">dateModified</code> on your structured data, <code className="bg-blue-100 px-1 rounded">article:modified_time</code> in meta tags, and <code className="bg-blue-100 px-1 rounded">&lt;time&gt;</code> elements on the page. Most content management systems set these wrong or never set them at all. Fixing them is some of the easiest work you can do to show up more in AI answers.
                        </p>
                      </div>
                    </div>

                    {(() => {
                      const freshness: FreshnessAnalysis = analysis.freshness || { dates: [], mostRecentModified: null, earliestPublished: null, hasModified: false, hasPublished: false, modifiedEqualsPublished: false };
                      const modDays = daysSince(freshness.mostRecentModified?.parsed || null);
                      const pubDays = daysSince(freshness.earliestPublished?.parsed || null);

                      const getFreshnessConfig = (days: number | null) => {
                        if (days === null) return { label: 'Unknown', color: 'text-gray-600', bg: 'bg-gray-50', border: 'border-gray-200' };
                        if (days <= 30) return { label: 'Fresh', color: 'text-green-700', bg: 'bg-green-50', border: 'border-green-200' };
                        if (days <= 180) return { label: 'Aging', color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200' };
                        return { label: 'Stale', color: 'text-red-700', bg: 'bg-red-50', border: 'border-red-200' };
                      };

                      const modCfg = getFreshnessConfig(modDays);

                      const formatDays = (d: number | null) => {
                        if (d === null) return 'unknown';
                        if (d === 0) return 'today';
                        if (d === 1) return 'yesterday';
                        if (d < 30) return `${d} days ago`;
                        if (d < 365) return `${Math.round(d / 30)} months ago`;
                        return `${(d / 365).toFixed(1)} years ago`;
                      };

                      return (
                        <>
                          <div className={`p-6 rounded-lg border-2 ${modCfg.bg} ${modCfg.border}`}>
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <h3 className="text-lg font-bold text-brand-navy font-display">Last Modified</h3>
                                <p className="text-sm text-gray-600">
                                  {freshness.mostRecentModified
                                    ? `${formatDays(modDays)} (${freshness.mostRecentModified.value})`
                                    : 'No dateModified, article:modified_time, or <time> element found.'}
                                </p>
                              </div>
                              <div className={`px-3 py-1 rounded-full text-sm font-bold ${modCfg.color} ${modCfg.bg} border ${modCfg.border}`}>
                                {modCfg.label}
                              </div>
                            </div>
                            {freshness.modifiedEqualsPublished && (
                              <div className="mt-3 p-3 bg-amber-100 border border-amber-300 rounded text-sm text-amber-900">
                                <AlertTriangle className="inline-block mr-2 -mt-0.5" size={14} />
                                <strong>Modified date equals published date.</strong> This usually means the CMS auto-sets <code className="bg-amber-200 px-1 rounded text-xs">dateModified</code> at creation and never updates it &mdash; the freshness signal is broken.
                              </div>
                            )}
                            {!freshness.hasModified && freshness.hasPublished && (
                              <div className="mt-3 p-3 bg-amber-100 border border-amber-300 rounded text-sm text-amber-900">
                                <AlertTriangle className="inline-block mr-2 -mt-0.5" size={14} />
                                Page has <code className="bg-amber-200 px-1 rounded text-xs">datePublished</code> but no <code className="bg-amber-200 px-1 rounded text-xs">dateModified</code>. AI engines treat absence as &quot;never updated.&quot;
                              </div>
                            )}
                            {!freshness.hasModified && !freshness.hasPublished && (
                              <div className="mt-3 p-3 bg-red-100 border border-red-300 rounded text-sm text-red-900">
                                <AlertOctagon className="inline-block mr-2 -mt-0.5" size={14} />
                                <strong>No date signals at all.</strong> AI engines cannot evaluate this page&apos;s freshness. Add <code className="bg-red-200 px-1 rounded text-xs">datePublished</code> and <code className="bg-red-200 px-1 rounded text-xs">dateModified</code> to your Article / WebPage / Event schema.
                              </div>
                            )}
                          </div>

                          {freshness.earliestPublished && (
                            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="text-sm font-semibold text-brand-navy">First Published</h4>
                                  <p className="text-sm text-gray-600">{formatDays(pubDays)} &mdash; {freshness.earliestPublished.value}</p>
                                </div>
                                <Calendar className="text-gray-400" size={20} />
                              </div>
                            </div>
                          )}

                          {freshness.dates.length > 0 && (
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                              <h3 className="text-lg font-semibold text-brand-navy mb-4 font-display">All date signals found</h3>
                              <div className="overflow-x-auto">
                                <table className="min-w-full text-sm">
                                  <thead>
                                    <tr className="text-left text-xs font-semibold text-gray-500 uppercase border-b border-gray-200">
                                      <th className="py-2 pr-4">Source</th>
                                      <th className="py-2 pr-4">Type</th>
                                      <th className="py-2 pr-4">Value</th>
                                      <th className="py-2">When</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {freshness.dates.map((d, i) => {
                                      const days = daysSince(d.parsed);
                                      const typeColor = d.type === 'modified' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700';
                                      return (
                                        <tr key={i} className="border-b border-gray-100">
                                          <td className="py-2 pr-4 font-mono text-xs text-gray-700">{d.source}</td>
                                          <td className="py-2 pr-4">
                                            <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${typeColor}`}>
                                              {d.type}
                                            </span>
                                          </td>
                                          <td className="py-2 pr-4 font-mono text-xs text-gray-600">{d.value}</td>
                                          <td className="py-2 text-xs text-gray-600">{days === null ? 'unparseable' : formatDays(days)}</td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          )}
                        </>
                      );
                    })()}
                  </div>
                )}

                {/* TAB: CONTENT PATTERNS (GEO) */}
                {activeTab === 'patterns' && (
                  <ContentPatternsTab contentPatterns={analysis.contentPatterns} />
                )}

                {/* TAB: SCHEMA COVERAGE */}
                {activeTab === 'coverage' && (
                  <SchemaCoverageTab schemaCoverage={analysis.schemaCoverage} />
                )}

                {/* TAB: SITE HYGIENE */}
                {activeTab === 'hygiene' && (
                  <SiteHygieneTab hygiene={analysis.hygiene} hasUrl={!!analysis.url} />
                )}

                {/* TAB 3: STRUCTURE */}
                {activeTab === 'structure' && (
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-lg font-semibold mb-4 text-brand-navy font-display">Header Outline</h3>
                        <div className="space-y-2">
                            {analysis.headers.length > 0 ? (
                                analysis.headers.map((h, i) => (
                                    <div key={i} className={`flex items-center p-2 rounded ${h.tag === 'H1' ? 'bg-blue-50 border-l-4 border-blue-500' : 'bg-gray-50 border-l-4 border-gray-300'} ml-${(parseInt(h.tag[1]) - 1) * 4}`}>
                                        <span className="text-xs font-bold uppercase w-12 text-gray-500">{h.tag}</span>
                                        <span className="font-medium text-gray-800">{h.text}</span>
                                    </div>
                                ))
                            ) : (
                                <div className="text-yellow-600 p-4">No header tags found.</div>
                            )}
                        </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: TOKEN STREAM */}
                {activeTab === 'stream' && (
                  <div className="space-y-6">

                     {/* FRAMEWORK ALERT */}
                     {analysis.framework && (
                        <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 flex items-center justify-between">
                            <div className="flex items-center">
                                <Layers className="text-indigo-600 mr-3" size={20} />
                                <div>
                                    <h4 className="text-sm font-bold text-indigo-900 font-display">Smart Mode: {analysis.framework}</h4>
                                    <p className="text-xs text-indigo-700">
                                        Framework scripts excluded from noise calculation.
                                    </p>
                                </div>
                            </div>
                        </div>
                     )}

                     <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-lg font-bold text-brand-navy mb-4 flex items-center font-display">
                            <ShieldCheck className="mr-2 text-green-600" size={20} />
                            Signal-to-Noise Scorecard
                        </h3>

                        <div className="flex items-center justify-between mb-6">
                            <div className="w-1/3">
                                <div className="text-sm text-gray-500 mb-1">Noise Ratio</div>
                                <div className={`text-4xl font-extrabold ${analysis.noiseRatio > 40 ? 'text-red-500' : analysis.noiseRatio > 15 ? 'text-yellow-600' : 'text-green-600'}`}>
                                    {analysis.noiseRatio}%
                                </div>
                            </div>
                            <div className="w-2/3 pl-6 border-l">
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                                        <span className="font-medium">0% - 15%:</span>
                                        <span className="ml-2 text-gray-600">Excellent (High Signal)</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                                        <span className="font-medium">15% - 40%:</span>
                                        <span className="ml-2 text-gray-600">Okay (Typical Overhead)</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                                        <span className="font-medium">40%+:</span>
                                        <span className="ml-2 text-gray-600">Noisy (Confusing for AI)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t">
                             <div>
                                <div className="text-xs text-gray-500 uppercase">Total Tokens</div>
                                <div className="text-xl font-semibold text-gray-800">{analysis.tokenCount.toLocaleString()}</div>
                             </div>
                             <div>
                                <div className="text-xs text-gray-500 uppercase">Est. AI Cost</div>
                                <div className="text-xl font-semibold text-gray-800">${((analysis.tokenCount / 1000) * 0.03).toFixed(4)}</div>
                             </div>
                        </div>
                     </div>

                     <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-lg font-semibold mb-3 font-display">Token Visualization</h3>
                        <div className="font-mono text-sm leading-relaxed bg-gray-50 p-4 rounded border text-gray-700 break-words max-h-96 overflow-y-auto">
                            {analysis.ragText.split(' ').map((word: string, i: number) => (
                                <span key={i} className={`inline-block mr-1 px-1 rounded ${i % 2 === 0 ? 'bg-blue-50 text-blue-900' : 'bg-green-50 text-green-900'}`}>
                                    {word}
                                </span>
                            ))}
                        </div>
                     </div>
                  </div>
                )}

                {/* TAB 5: RAG CONTEXT */}
                {activeTab === 'rag' && (
                  <div className="space-y-6">
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 max-w-3xl">
                        <h3 className="text-lg font-semibold mb-4 text-brand-navy border-b pb-2 font-display">
                            Clean Context Preview
                        </h3>
                        {analysis.ragText ? (
                            <div className="prose prose-sm max-w-none text-gray-800 whitespace-pre-line font-serif leading-relaxed">
                                {analysis.ragText}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                {analysis.isLikelyCSR ? (
                                    <>
                                        <AlertOctagon size={48} className="text-orange-500 mb-4" />
                                        <h4 className="text-lg font-bold text-gray-900 font-display">Hidden Content (CSR)</h4>
                                        <p className="text-sm text-gray-600 max-w-md mt-2">
                                            Your content is hidden inside JavaScript. Basic AI crawlers cannot see this.
                                        </p>
                                    </>
                                ) : (
                                    <p className="text-gray-500">No text content found.</p>
                                )}
                            </div>
                        )}
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
