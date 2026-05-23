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
  BarChart,
  ExternalLink,
  FlaskConical,
  Bot,
  XCircle,
  HelpCircle
} from 'lucide-react';
import Link from 'next/link';

// --- AI Bot definitions for robots.txt audit ---
type BotType = 'training' | 'retrieval' | 'general';

interface AIBotDef {
  name: string;
  type: BotType;
  vendor: string;
  purpose: string;
}

const AI_BOTS: AIBotDef[] = [
  // OpenAI
  { name: 'GPTBot', type: 'training', vendor: 'OpenAI', purpose: 'Trains GPT models on your content.' },
  { name: 'OAI-SearchBot', type: 'retrieval', vendor: 'OpenAI', purpose: 'Indexes content for ChatGPT Search live results.' },
  { name: 'ChatGPT-User', type: 'retrieval', vendor: 'OpenAI', purpose: 'On-demand fetch when a user asks ChatGPT about a URL.' },
  // Anthropic (three-bot split — most sites still have one stale rule)
  { name: 'ClaudeBot', type: 'training', vendor: 'Anthropic', purpose: 'Trains Claude models on your content.' },
  { name: 'Claude-SearchBot', type: 'retrieval', vendor: 'Anthropic', purpose: 'Indexing for Claude search features.' },
  { name: 'Claude-User', type: 'retrieval', vendor: 'Anthropic', purpose: 'On-demand fetch when a Claude user asks about a URL.' },
  { name: 'anthropic-ai', type: 'training', vendor: 'Anthropic', purpose: 'Legacy Anthropic crawler.' },
  // Perplexity
  { name: 'PerplexityBot', type: 'retrieval', vendor: 'Perplexity', purpose: 'Indexes content for Perplexity citations.' },
  // Google
  { name: 'Google-Extended', type: 'training', vendor: 'Google', purpose: 'Opt-out for Gemini / Vertex AI training.' },
  { name: 'Googlebot', type: 'general', vendor: 'Google', purpose: 'Main Google Search crawler (also powers AI Overview).' },
  // Other major training crawlers
  { name: 'CCBot', type: 'training', vendor: 'Common Crawl', purpose: 'Common Crawl dataset, used to train many AI models.' },
  { name: 'Bytespider', type: 'training', vendor: 'ByteDance', purpose: 'TikTok / Doubao training crawler.' },
  { name: 'Applebot-Extended', type: 'training', vendor: 'Apple', purpose: 'Opt-out for Apple Intelligence training.' },
  { name: 'Meta-ExternalAgent', type: 'training', vendor: 'Meta', purpose: 'Meta AI / Llama training.' },
];

type BotStatus = 'allowed' | 'blocked' | 'partial' | 'blocked-by-wildcard' | 'not-mentioned';

interface AgentRule {
  allow: string[];
  disallow: string[];
}

interface BotResult extends AIBotDef {
  status: BotStatus;
  source: 'specific' | 'wildcard';
  rules: AgentRule;
}

interface RobotsAnalysis {
  url: string;
  found: boolean;
  raw: string;
  error?: string;
  bots: BotResult[];
}

function parseRobotsTxt(text: string): Record<string, AgentRule> {
  const agentRules: Record<string, AgentRule> = {};
  let currentAgents: string[] = [];
  let lastWasRule = false;

  text.split(/\r?\n/).forEach((rawLine) => {
    const line = rawLine.split('#')[0].trim();
    if (!line) return;

    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) return;

    const field = line.substring(0, colonIdx).trim().toLowerCase();
    const value = line.substring(colonIdx + 1).trim();

    if (field === 'user-agent') {
      if (lastWasRule) {
        currentAgents = [];
        lastWasRule = false;
      }
      currentAgents.push(value);
      if (!agentRules[value]) agentRules[value] = { allow: [], disallow: [] };
    } else if (field === 'allow' || field === 'disallow') {
      currentAgents.forEach((agent) => {
        if (!agentRules[agent]) agentRules[agent] = { allow: [], disallow: [] };
        agentRules[agent][field as 'allow' | 'disallow'].push(value);
      });
      lastWasRule = true;
    }
  });

  return agentRules;
}

// --- Entity Graph (sameAs) audit ---
interface SameAsLink {
  url: string;
  platform: string;
  isAuthoritative: boolean;
}

interface DiscoveredEntity {
  type: string;
  name: string;
  sameAs: SameAsLink[];
}

const SAMEAS_PATTERNS: Array<{ name: string; pattern: RegExp; authoritative: boolean }> = [
  { name: 'Wikipedia', pattern: /wikipedia\.org/i, authoritative: true },
  { name: 'Wikidata', pattern: /wikidata\.org/i, authoritative: true },
  { name: 'LinkedIn', pattern: /linkedin\.com/i, authoritative: true },
  { name: 'Crunchbase', pattern: /crunchbase\.com/i, authoritative: true },
  { name: 'ORCID', pattern: /orcid\.org/i, authoritative: true },
  { name: '.gov / official', pattern: /\.gov(\/|$)/i, authoritative: true },
  { name: 'GitHub', pattern: /github\.com/i, authoritative: false },
  { name: 'X / Twitter', pattern: /(twitter|x)\.com/i, authoritative: false },
  { name: 'Instagram', pattern: /instagram\.com/i, authoritative: false },
  { name: 'Facebook', pattern: /facebook\.com/i, authoritative: false },
  { name: 'YouTube', pattern: /youtube\.com/i, authoritative: false },
  { name: 'TikTok', pattern: /tiktok\.com/i, authoritative: false },
  { name: 'TripAdvisor', pattern: /tripadvisor\.com/i, authoritative: false },
];

const ENTITY_TYPES = new Set([
  'Person', 'Organization', 'LocalBusiness', 'Corporation', 'NGO',
  'GovernmentOrganization', 'TouristAttraction', 'TouristDestination',
  'Place', 'EducationalOrganization', 'NewsMediaOrganization',
]);

function extractEntities(jsonLdArray: any[]): DiscoveredEntity[] {
  const entities: DiscoveredEntity[] = [];

  const walk = (obj: any) => {
    if (!obj || typeof obj !== 'object') return;
    if (Array.isArray(obj)) {
      obj.forEach(walk);
      return;
    }

    const typeRaw = obj['@type'];
    if (typeRaw) {
      const types: string[] = Array.isArray(typeRaw) ? typeRaw : [typeRaw];
      const matchedTypes = types.filter((t) => typeof t === 'string' && ENTITY_TYPES.has(t));

      if (matchedTypes.length > 0) {
        const sameAsRaw = obj.sameAs;
        const sameAsArr: string[] = Array.isArray(sameAsRaw)
          ? sameAsRaw.filter((s: any) => typeof s === 'string')
          : (typeof sameAsRaw === 'string' ? [sameAsRaw] : []);

        const classified: SameAsLink[] = sameAsArr.map((url) => {
          const match = SAMEAS_PATTERNS.find((p) => p.pattern.test(url));
          return {
            url,
            platform: match?.name || 'Other',
            isAuthoritative: match?.authoritative || false,
          };
        });

        entities.push({
          type: matchedTypes.join(', '),
          name: obj.name || obj.legalName || obj.headline || '(unnamed entity)',
          sameAs: classified,
        });
      }
    }

    Object.values(obj).forEach(walk);
  };

  jsonLdArray.forEach(walk);
  return entities;
}

function evaluateBot(bot: AIBotDef, agentRules: Record<string, AgentRule>): BotResult {
  const wildcardEntry = Object.entries(agentRules).find(([name]) => name === '*');
  const wildcardRules: AgentRule = wildcardEntry ? wildcardEntry[1] : { allow: [], disallow: [] };

  const specificEntry = Object.entries(agentRules).find(
    ([name]) => name.toLowerCase() === bot.name.toLowerCase()
  );

  if (specificEntry) {
    const rules = specificEntry[1];
    if (rules.disallow.some((p) => p === '/' || p === '')) {
      // Disallow: / blocks everything; empty Disallow: actually means "allow everything" per spec
      const hasFullBlock = rules.disallow.includes('/');
      if (hasFullBlock) {
        return { ...bot, status: 'blocked', source: 'specific', rules };
      }
    }
    if (rules.disallow.length > 0 && !rules.disallow.every((p) => p === '')) {
      return { ...bot, status: 'partial', source: 'specific', rules };
    }
    return { ...bot, status: 'allowed', source: 'specific', rules };
  }

  // Bot not specifically mentioned — falls under wildcard rules
  if (wildcardRules.disallow.includes('/')) {
    return { ...bot, status: 'blocked-by-wildcard', source: 'wildcard', rules: wildcardRules };
  }
  return { ...bot, status: 'not-mentioned', source: 'wildcard', rules: wildcardRules };
}

export default function AIAuditPage() {
  const [activeTab, setActiveTab] = useState('audit');
  const [inputMode, setInputMode] = useState('html');
  const [inputText, setInputText] = useState('');
  const [urlInput, setUrlInput] = useState('');

  const [analysis, setAnalysis] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [robotsAnalysis, setRobotsAnalysis] = useState<RobotsAnalysis | null>(null);
  const [crawlerCheckUrl, setCrawlerCheckUrl] = useState('');
  const [isCheckingRobots, setIsCheckingRobots] = useState(false);
  const [richResultsUrl, setRichResultsUrl] = useState('');
  const [manualRobotsTxt, setManualRobotsTxt] = useState('');

  // Sample HTML for demo — realistic European DMO homepage
  const demoHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Visit Coastal Algarve - Sun, Sea & Culture in Southern Portugal</title>
    <meta name="description" content="Plan your trip to the Algarve. Explore golden beaches, historic villages, world-class golf, and fresh seafood along Portugal's stunning southern coast.">
</head>
<body>
    <div class="top-bar">
        <a href="/">Home</a>
        <a href="/things-to-do">Things to Do</a>
        <a href="/beaches">Beaches</a>
        <a href="/events">Events</a>
        <a href="/plan-your-trip">Plan Your Trip</a>
        <a href="/about">About</a>
    </div>
    <div class="hero-banner">
        <h1>Discover the Algarve</h1>
        <p>Where golden cliffs meet the Atlantic</p>
        <img src="hero-algarve.jpg" />
        <img src="beach-sunset.jpg" />
    </div>
    <div class="content-area">
        <h2>Things to Do</h2>
        <div class="card">
            <img src="kayak-caves.jpg" alt="Sea kayaking through the Benagil caves" />
            <h3>Benagil Cave Tours</h3>
            <p>Paddle through the iconic sea cave with its natural skylight. Tours depart daily from Benagil Beach, April through October.</p>
        </div>
        <div class="card">
            <img src="golf.jpg" />
            <h3>World-Class Golf</h3>
            <p>The Algarve hosts over 40 golf courses, including 5 ranked in Europe's top 100. Green fees from \u20ac50 in low season.</p>
        </div>
        <div class="card">
            <img src="old-town.jpg" alt="Cobblestone streets in the historic center of Faro" />
            <h3>Historic Faro Old Town</h3>
            <p>Walk the medieval walls, visit the 13th-century cathedral, and explore the charming Cidade Velha district.</p>
        </div>
        <div class="card">
            <img src="seafood-platter.jpg" />
            <h3>Fresh Seafood & Local Wine</h3>
            <p>From cataplana stew to grilled sardines, the Algarve's culinary scene is built on fresh Atlantic catch and regional wines.</p>
        </div>
        <h2>Upcoming Events</h2>
        <p>Festival Med Loul\u00e9 \u2014 June 27\u201330, 2026. World music, art, and gastronomy in the streets of Loul\u00e9.</p>
        <p>Algarve Nature Week \u2014 October 5\u201312, 2026. Birdwatching, hiking, and eco-tourism experiences across the region.</p>
        <h2>Plan Your Trip</h2>
        <p>Faro Airport (FAO) connects to over 60 European cities. Peak season: June\u2013September. Best value: March\u2013May and October.</p>
        <p>Average hotel rate: \u20ac120/night (4-star). Budget options from \u20ac45/night.</p>
    </div>
    <div class="cookie-banner">We use cookies to improve your experience. <a href="/privacy">Learn more</a></div>
    <div class="footer-links">
        <p>\u00a9 2026 Visit Coastal Algarve. All rights reserved.</p>
        <a href="/privacy">Privacy Policy</a> | <a href="/contact">Contact Us</a>
    </div>
</body>
</html>`;

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
    setInputText(demoHTML);
    setFetchError(null);
    setActiveTab('audit');
  };

  const parseContent = (content: string, sourceUrl = '') => {
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');

        // --- SMART DETECTION: Frameworks ---
        let detectedFramework = null;
        if (doc.getElementById('__NEXT_DATA__') || content.includes('self.__next_f') || content.includes('_next/static')) {
            detectedFramework = 'Next.js';
        }
        else if (doc.getElementById('___gatsby')) { detectedFramework = 'Gatsby'; }
        else if (doc.getElementById('__nuxt')) { detectedFramework = 'Nuxt.js'; }

        // Schema detection (used downstream by JSON-LD extraction)
        const schemas = doc.querySelectorAll('script[type="application/ld+json"]');


        // --- SCORING CLEANUP (Framework Aware) ---
        const scoringClone = doc.cloneNode(true) as Document;

        // Remove Framework Scripts for Fairness
        const techTags = scoringClone.querySelectorAll('script, style, noscript, template, svg');
        techTags.forEach(el => el.remove());

        // 1. Raw Text Extraction
        const rawText = scoringClone.body ? scoringClone.body.textContent : "";
        const cleanRawText = rawText.replace(/\s+/g, ' ').trim();
        const charCount = cleanRawText.length;
        const tokenCount = Math.ceil(charCount / 4);

        // 2. Headers
        const headerTags = Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
            tag: h.tagName,
            text: h.textContent
        }));

        // 3. RAG/Content Extraction
        const ragClone = doc.cloneNode(true) as Document;

        // Aggressive cleanup for RAG - Removing interface elements
        // NOTE: We do NOT remove generic 'div's here, only specific semantic noise
        const irrelevantTags = ['nav', 'footer', 'header', 'script', 'style', 'noscript', 'iframe', 'svg', 'aside', 'form'];
        irrelevantTags.forEach(tag => {
            const elements = ragClone.querySelectorAll(tag);
            elements.forEach(el => el.remove());
        });

        // CAREFUL: Do not use partial matches for short strings like 'ad' or 'menu' as they match 'gradient' and 'menu-item'
        // Only use exact class matches or safe partials
        const safeNoisySelectors = [
            '.ad-banner', '.banner', '.cookie-banner', '.popup',
            '.sidebar', '.widget', '.social-share', '.newsletter-signup',
            '[class*="ad-box"]', '[class*="advertisement"]'
        ];

        safeNoisySelectors.forEach(sel => {
            try {
                const elements = ragClone.querySelectorAll(sel);
                elements.forEach(el => {
                    if (el.textContent && el.textContent.length < 500) el.remove();
                });
            } catch(e) { /* ignore invalid selectors */ }
        });

        let coreContent = ragClone.body ? ragClone.body.innerHTML : "";
        const tmp = document.createElement('DIV');
        tmp.innerHTML = coreContent;
        // Prefer textContent to avoid innerText layout dependency issues in non-rendered DOM
        const ragText = tmp.textContent || "";
        const ragTextClean = ragText.replace(/\s+/g, ' ').trim();
        const usefulCharCount = ragTextClean.length;

        // Calculate Noise Ratio
        let noiseRatio = 0;
        if (charCount > 0) {
            noiseRatio = Math.round((1 - (usefulCharCount / charCount)) * 100);
        }
        noiseRatio = Math.max(0, Math.min(100, noiseRatio));

        const isLikelyCSR = content.length > 5000 && charCount < 500;

        // 4. Image Analysis
        const imgAnalysis = Array.from(doc.querySelectorAll('img')).map(img => {
            const alt = img.getAttribute('alt');
            return {
                src: img.getAttribute('src'),
                alt: alt || "MISSING ALT TEXT",
                hasAlt: alt !== null && alt.trim().length > 0
            };
        });

        // 5. Schema Extraction
        const jsonLd = Array.from(schemas).map(s => {
            try { return JSON.parse(s.textContent || ''); } catch (e) { return "Invalid JSON-LD"; }
        });

        // 6. Entity Graph (sameAs) Extraction
        const entities = extractEntities(jsonLd.filter((x) => typeof x === 'object'));

        // 7. Meta Extraction
        const metaTitle = doc.querySelector('title')?.textContent;
        const metaDesc = doc.querySelector('meta[name="description"]')?.getAttribute('content');

        return {
            tokenCount,
            charCount,
            usefulCharCount,
            noiseRatio,
            headers: headerTags,
            ragText: ragTextClean,
            images: imgAnalysis,
            meta: { title: metaTitle, description: metaDesc },
            jsonLd,
            entities,
            rawHtml: content,
            url: sourceUrl,
            framework: detectedFramework,
            isLikelyCSR,
        };
    } catch (error) {
        console.error(error);
        return null;
    }
  };

  const normalizeUrl = (input: string): string | null => {
    const trimmed = input.trim();
    if (!trimmed) return null;
    try {
      const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
      return new URL(withProtocol).toString();
    } catch {
      return null;
    }
  };

  const analyzeRobotsContent = (content: string, sourceUrl: string): RobotsAnalysis => {
    const agentRules = parseRobotsTxt(content);
    const bots = AI_BOTS.map((bot) => evaluateBot(bot, agentRules));
    return { url: sourceUrl, found: true, raw: content, bots };
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

  const fetchRobotsTxt = async (pageUrl: string): Promise<RobotsAnalysis> => {
    let robotsUrl = '';
    try {
      const origin = new URL(pageUrl).origin;
      robotsUrl = `${origin}/robots.txt`;
      const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(robotsUrl)}`);
      const data = await response.json();

      if (!data.contents || data.contents.toLowerCase().includes('<html')) {
        return {
          url: robotsUrl,
          found: false,
          raw: '',
          error: `No robots.txt found at ${robotsUrl}. Without a robots.txt, all crawlers — AI and otherwise — default to allowed.`,
          bots: AI_BOTS.map((bot) => ({ ...bot, status: 'not-mentioned', source: 'wildcard', rules: { allow: [], disallow: [] } })),
        };
      }

      return analyzeRobotsContent(data.contents, robotsUrl);
    } catch (err) {
      return {
        url: robotsUrl,
        found: false,
        raw: '',
        error: `Could not fetch ${robotsUrl || 'robots.txt'} through the proxy (network error or CORS). Try opening it directly in a new tab, or paste the contents below.`,
        bots: AI_BOTS.map((bot) => ({ ...bot, status: 'not-mentioned', source: 'wildcard', rules: { allow: [], disallow: [] } })),
      };
    }
  };

  const handleUrlFetch = async () => {
    if (!urlInput) return;

    setIsLoading(true);
    setFetchError(null);
    setAnalysis(null);
    setRobotsAnalysis(null);
    setActiveTab('audit'); // Default to Audit view

    try {
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(urlInput)}`);
        const data = await response.json();

        if (data.contents) {
            setInputText(data.contents);
            const result = parseContent(data.contents, urlInput);
            setAnalysis(result);

            // Fetch robots.txt in parallel (don't block on it)
            fetchRobotsTxt(urlInput).then(setRobotsAnalysis);
        } else {
            throw new Error("Could not retrieve content. The site might block proxies.");
        }
    } catch (err) {
        setFetchError("Failed to fetch. Some sites block automated tools. Try pasting HTML source.");
    } finally {
        setIsLoading(false);
    }
  };

  const TabButton = ({ id, icon: Icon, label }: { id: string; icon: any; label: string }) => (
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
            <p className="text-xs text-gray-500">See your content through the eyes of an LLM</p>
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
                        <h3 className="text-gray-900 font-bold mb-1">Fetch Failed</h3>
                        <p className="text-sm text-gray-600 mb-4">{fetchError}</p>
                        <button
                            onClick={() => setFetchError(null)}
                            className="text-sm text-brand-cyan hover:text-brand-blue font-medium underline"
                        >
                            Try again or switch to HTML Input
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
            <TabButton id="audit" icon={Layers} label="Entity Graph" />
            <TabButton id="knowledge" icon={Database} label="Schema" />
            <TabButton id="crawlers" icon={Bot} label="AI Crawlers" />
            <TabButton id="structure" icon={Layout} label="Structure" />
            <TabButton id="stream" icon={Activity} label="Token Stream" />
            <TabButton id="rag" icon={FileText} label="RAG Context" />
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-6">
            {!analysis && !isLoading ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <Eye size={48} className="mb-4 opacity-50" />
                <p className="text-lg">Waiting for content...</p>
                <p className="text-sm">Enter a URL to begin analysis.</p>
              </div>
            ) : isLoading ? (
                <div className="flex flex-col items-center justify-center h-full text-brand-cyan">
                    <Loader size={48} className="animate-spin mb-4" />
                    <p className="text-lg font-medium">Analyzing Website...</p>
                </div>
            ) : (
              <div className="max-w-4xl mx-auto space-y-6">

                {/* TAB 1: ENTITY GRAPH */}
                {activeTab === 'audit' && (
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-start">
                      <Info className="flex-shrink-0 text-blue-500 mr-3 mt-1" size={20} />
                      <div>
                        <h3 className="text-sm font-bold text-blue-900 mb-1 font-display">Entity Graph</h3>
                        <p className="text-sm text-blue-800 leading-relaxed">
                          AI engines disambiguate names through <code className="bg-blue-100 px-1 rounded">sameAs</code> links in structured data &mdash; Wikipedia, Wikidata, LinkedIn, Crunchbase, ORCID. Without these, your organization or people are ambiguous in the knowledge graph and AI engines have nothing to anchor citations to. This is the strongest defensible E-E-A-T signal.
                        </p>
                      </div>
                    </div>

                    {(() => {
                      const entities: DiscoveredEntity[] = analysis.entities || [];
                      const totalSameAs = entities.reduce((sum: number, e: DiscoveredEntity) => sum + e.sameAs.length, 0);
                      const authoritativeCount = entities.reduce((sum: number, e: DiscoveredEntity) => sum + e.sameAs.filter((s) => s.isAuthoritative).length, 0);
                      const strength = authoritativeCount >= 3 ? 'strong' : authoritativeCount >= 1 ? 'medium' : 'weak';
                      const strengthConfig = {
                        strong: { label: 'Strong', color: 'text-green-700', bg: 'bg-green-50', border: 'border-green-200', desc: 'Multiple authoritative sources resolve your entities. AI engines have high confidence when citing you.' },
                        medium: { label: 'Medium', color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200', desc: 'Some authoritative anchors exist. Adding Wikipedia, Wikidata, or LinkedIn would strengthen entity disambiguation.' },
                        weak: { label: 'Weak', color: 'text-red-700', bg: 'bg-red-50', border: 'border-red-200', desc: 'No or few authoritative anchors. AI engines struggle to confidently identify your organization or people. Adding sameAs links to Wikipedia, LinkedIn, or official entity sources should be a priority.' },
                      }[strength];

                      return (
                        <>
                          <div className={`p-6 rounded-lg border-2 ${strengthConfig.bg} ${strengthConfig.border}`}>
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <h3 className="text-lg font-bold text-brand-navy font-display">Entity Confidence</h3>
                                <p className="text-sm text-gray-600">Across {entities.length} {entities.length === 1 ? 'entity' : 'entities'}, {totalSameAs} total sameAs link{totalSameAs === 1 ? '' : 's'}, {authoritativeCount} authoritative.</p>
                              </div>
                              <div className={`px-3 py-1 rounded-full text-sm font-bold ${strengthConfig.color} ${strengthConfig.bg} border ${strengthConfig.border}`}>
                                {strengthConfig.label}
                              </div>
                            </div>
                            <p className={`text-sm leading-relaxed ${strengthConfig.color}`}>
                              {strengthConfig.desc}
                            </p>
                          </div>

                          {entities.length === 0 ? (
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                              <AlertOctagon className="mx-auto text-amber-500 mb-3" size={32} />
                              <h4 className="text-base font-semibold text-brand-navy mb-2">No entities found in structured data</h4>
                              <p className="text-sm text-gray-600 max-w-md mx-auto">
                                The page has no Organization, Person, LocalBusiness, or TouristAttraction schema with identifiable entities. Add at minimum an Organization block with <code className="bg-gray-100 px-1 rounded text-xs">@type</code>, <code className="bg-gray-100 px-1 rounded text-xs">name</code>, and a <code className="bg-gray-100 px-1 rounded text-xs">sameAs</code> array linking to Wikipedia, LinkedIn, and your other canonical profiles.
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              {entities.map((entity, i) => (
                                <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                                  <div className="flex items-start justify-between mb-3">
                                    <div>
                                      <h4 className="text-base font-semibold text-brand-navy">{entity.name}</h4>
                                      <p className="text-xs text-gray-500 font-mono">{entity.type}</p>
                                    </div>
                                    <span className={`text-xs px-2 py-1 rounded font-medium ${entity.sameAs.length === 0 ? 'bg-red-100 text-red-700' : entity.sameAs.some((s) => s.isAuthoritative) ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                                      {entity.sameAs.length} sameAs
                                    </span>
                                  </div>
                                  {entity.sameAs.length === 0 ? (
                                    <p className="text-sm text-gray-500 italic">No sameAs links &mdash; entity has no anchor in the knowledge graph.</p>
                                  ) : (
                                    <div className="flex flex-wrap gap-2">
                                      {entity.sameAs.map((link, j) => (
                                        <a
                                          key={j}
                                          href={link.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-medium border transition-colors ${link.isAuthoritative ? 'bg-green-50 border-green-200 text-green-800 hover:bg-green-100' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'}`}
                                        >
                                          {link.isAuthoritative && <CheckCircle size={12} className="mr-1" />}
                                          {link.platform}
                                          <ExternalLink size={10} className="ml-1 opacity-60" />
                                        </a>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
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
                                    const missing = analysis.images.filter((img: any) => !img.hasAlt).length;
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
                            {analysis.images.map((img: any, i: number) => (
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
                            <h3 className="text-sm font-bold text-blue-900 mb-1 font-display">Knowledge Layer</h3>
                            <p className="text-sm text-blue-800 leading-relaxed">
                                Structured Data (Schema.org) confirms facts like <strong>Events and Authors</strong> with 100% confidence.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-brand-cyan">
                      <div className="flex items-start mb-4">
                        <FlaskConical className="flex-shrink-0 text-brand-cyan mr-3 mt-1" size={24} />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-brand-navy mb-2 font-display">Validate with Google&apos;s Rich Results Test</h3>
                          <p className="text-sm text-gray-700 leading-relaxed mb-2">
                            Google&apos;s Rich Results Test confirms whether your structured data qualifies for rich snippets, AI Overview, and AI Mode extraction. It validates required fields and surfaces errors the audit above can&apos;t catch from raw JSON alone.
                          </p>
                          <p className="text-xs text-gray-500 leading-relaxed">
                            Opens in a new tab on Google&apos;s servers. Tests the live URL — independent of any HTML you pasted above.
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
                            analysis.jsonLd.map((data: any, i: number) => (
                                <div key={i} className="mb-4 last:mb-0">
                                    <div className="text-xs font-mono text-gray-500 mb-1">Type: {data['@type'] || 'Unknown'}</div>
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
                          Your <code className="bg-blue-100 px-1 rounded">robots.txt</code> tells AI bots whether they can read your site. <strong>Training bots</strong> (GPTBot, ClaudeBot, Google-Extended) learn from your content. <strong>Retrieval bots</strong> (ChatGPT-User, Claude-User, PerplexityBot) fetch live when a user asks the AI about you. Blocking retrieval bots means zero chance of being cited in live AI answers.
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

                {/* TAB 3: STRUCTURE */}
                {activeTab === 'structure' && (
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-lg font-semibold mb-4 text-brand-navy font-display">Header Outline</h3>
                        <div className="space-y-2">
                            {analysis.headers.length > 0 ? (
                                analysis.headers.map((h: any, i: number) => (
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
