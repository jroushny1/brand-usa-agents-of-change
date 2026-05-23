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
  HelpCircle,
  Clock,
  Calendar,
  BookOpen,
  Quote,
  Link2,
  HelpCircle as Question
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

// --- Content Freshness audit ---
interface DateSignal {
  source: string;
  type: 'published' | 'modified';
  value: string;
  parsed: Date | null;
  schemaType?: string;
}

interface FreshnessAnalysis {
  dates: DateSignal[];
  mostRecentModified: DateSignal | null;
  earliestPublished: DateSignal | null;
  hasModified: boolean;
  hasPublished: boolean;
  modifiedEqualsPublished: boolean;
}

function parseDate(s: string): Date | null {
  if (!s) return null;
  const d = new Date(s);
  return isNaN(d.getTime()) ? null : d;
}

function extractDates(doc: Document, jsonLdArray: any[]): FreshnessAnalysis {
  const dates: DateSignal[] = [];

  // 1. JSON-LD dates (walk recursively for nested @graph etc.)
  const walkForDates = (obj: any) => {
    if (!obj || typeof obj !== 'object') return;
    if (Array.isArray(obj)) {
      obj.forEach(walkForDates);
      return;
    }
    const type = obj['@type'];
    const typeName = Array.isArray(type) ? type.join('/') : type;

    const dateFields: Array<{ key: string; type: 'published' | 'modified' }> = [
      { key: 'datePublished', type: 'published' },
      { key: 'dateCreated', type: 'published' },
      { key: 'dateModified', type: 'modified' },
      { key: 'dateUpdated', type: 'modified' },
    ];
    dateFields.forEach(({ key, type: dateType }) => {
      const value = obj[key];
      if (typeof value === 'string' && value.length > 0) {
        dates.push({
          source: `JSON-LD ${typeName || 'object'}.${key}`,
          type: dateType,
          value,
          parsed: parseDate(value),
          schemaType: typeName,
        });
      }
    });
    Object.values(obj).forEach(walkForDates);
  };
  jsonLdArray.forEach(walkForDates);

  // 2. Meta tags
  const metaSelectors: Array<{ selector: string; label: string; type: 'published' | 'modified' }> = [
    { selector: 'meta[property="article:published_time"]', label: 'meta property="article:published_time"', type: 'published' },
    { selector: 'meta[property="article:modified_time"]', label: 'meta property="article:modified_time"', type: 'modified' },
    { selector: 'meta[property="og:updated_time"]', label: 'meta property="og:updated_time"', type: 'modified' },
    { selector: 'meta[name="pubdate"]', label: 'meta name="pubdate"', type: 'published' },
    { selector: 'meta[name="lastmod"]', label: 'meta name="lastmod"', type: 'modified' },
    { selector: 'meta[name="date"]', label: 'meta name="date"', type: 'published' },
    { selector: 'meta[name="last-modified"]', label: 'meta name="last-modified"', type: 'modified' },
  ];
  metaSelectors.forEach(({ selector, label, type }) => {
    const el = doc.querySelector(selector);
    const value = el?.getAttribute('content');
    if (value) {
      dates.push({ source: label, type, value, parsed: parseDate(value) });
    }
  });

  // 3. <time datetime="..."> elements (cap to avoid noise)
  const timeElements = Array.from(doc.querySelectorAll('time[datetime]')).slice(0, 5);
  timeElements.forEach((el) => {
    const value = el.getAttribute('datetime');
    if (value) {
      dates.push({
        source: `<time datetime>`,
        type: 'modified',
        value,
        parsed: parseDate(value),
      });
    }
  });

  const modifiedDates = dates.filter((d) => d.type === 'modified' && d.parsed);
  const publishedDates = dates.filter((d) => d.type === 'published' && d.parsed);

  const mostRecentModified = modifiedDates.length > 0
    ? modifiedDates.reduce((a, b) => (a.parsed!.getTime() > b.parsed!.getTime() ? a : b))
    : null;
  const earliestPublished = publishedDates.length > 0
    ? publishedDates.reduce((a, b) => (a.parsed!.getTime() < b.parsed!.getTime() ? a : b))
    : null;

  const modifiedEqualsPublished = !!(
    mostRecentModified?.parsed &&
    earliestPublished?.parsed &&
    Math.abs(mostRecentModified.parsed.getTime() - earliestPublished.parsed.getTime()) < 60000
  );

  return {
    dates,
    mostRecentModified,
    earliestPublished,
    hasModified: modifiedDates.length > 0,
    hasPublished: publishedDates.length > 0,
    modifiedEqualsPublished,
  };
}

function daysSince(d: Date | null): number | null {
  if (!d) return null;
  return Math.floor((Date.now() - d.getTime()) / (1000 * 60 * 60 * 24));
}

// --- GEO Content Patterns (Princeton paper: Aggarwal et al. 2023) ---
interface ContentPatterns {
  wordCount: number;
  externalAuthorityLinks: number;
  statistics: number;
  quotations: number;
  questionHeadings: number;
  totalHeadings: number;
  citationsPer1000: number;
  statisticsPer1000: number;
  quotationsPer1000: number;
  questionHeadingPercent: number;
}

const AUTHORITY_DOMAIN_PATTERNS: RegExp[] = [
  /\.gov(\/|$)/i,
  /\.edu(\/|$)/i,
  /wikipedia\.org/i,
  /wikidata\.org/i,
  /nytimes\.com|wsj\.com|reuters\.com|apnews\.com|bloomberg\.com|economist\.com|forbes\.com|theguardian\.com|bbc\.(com|co\.uk)|ft\.com|axios\.com/i,
  /harvardbusinessreview\.com|hbr\.org|sloanreview\.mit\.edu|knowledge\.wharton\.upenn\.edu/i,
  /nih\.gov|cdc\.gov|who\.int|un\.org/i,
];

const QUESTION_WORDS = new Set(['how', 'why', 'what', 'when', 'where', 'who', 'is', 'are', 'should', 'can', 'will', 'does', 'do', 'which']);

function isAuthorityLink(url: string, pageOrigin: string): boolean {
  try {
    const u = new URL(url, pageOrigin || 'https://example.com');
    if (pageOrigin && u.origin === pageOrigin) return false;
    if (u.protocol !== 'https:' && u.protocol !== 'http:') return false;
    return AUTHORITY_DOMAIN_PATTERNS.some((p) => p.test(u.hostname));
  } catch {
    return false;
  }
}

function isQuestionHeading(text: string): boolean {
  const t = text.trim().toLowerCase();
  if (!t) return false;
  if (t.endsWith('?')) return true;
  const firstWord = t.split(/\s+/)[0]?.replace(/[^a-z]/g, '');
  return firstWord ? QUESTION_WORDS.has(firstWord) : false;
}

function countStatistics(text: string): number {
  // Numbers paired with units / common stat markers
  const re = /\d+(?:[.,]\d+)?\s*(?:%|percent|million|billion|trillion|thousand|years?|days?|months?|weeks?|hours?|minutes?|seconds?|km|kilometers?|miles?|kg|lbs?|tons?|GB|MB|TB|x|times|fold|degrees?|\$|€|£|¥)\b/gi;
  return (text.match(re) || []).length;
}

function countQuotations(text: string): number {
  // Quoted phrases of meaningful length (≥15 chars), straight or curly quotes
  const matches = text.match(/[“”"][^“”"]{15,400}?[“”"]/g) || [];
  return matches.length;
}

// --- Schema Type Coverage ---
interface SchemaRecommendation {
  type: string;
  category: 'foundational' | 'dmo' | 'content' | 'discovery';
  priority: 'critical' | 'recommended' | 'nice-to-have';
  description: string;
  whyMatters: string;
}

interface SchemaTypeCoverage {
  presentTypes: { type: string; count: number }[];
  missingRecommended: SchemaRecommendation[];
}

const SCHEMA_LIBRARY: SchemaRecommendation[] = [
  // Foundational
  { type: 'Organization', category: 'foundational', priority: 'critical', description: 'Identifies your org with name, logo, sameAs links', whyMatters: 'Every site needs this. AI uses it to know who you are.' },
  { type: 'WebSite', category: 'foundational', priority: 'critical', description: 'Anchors the site as a whole entity', whyMatters: 'Gives AI a stable home reference for everything else on the domain.' },
  { type: 'BreadcrumbList', category: 'foundational', priority: 'recommended', description: 'Breadcrumb navigation as structured data', whyMatters: 'Helps AI understand page hierarchy and which pages are top-level vs deep.' },
  { type: 'Person', category: 'foundational', priority: 'recommended', description: 'Staff bios, authors, leadership', whyMatters: 'Personal credibility is the foundation of E-E-A-T. Author Person schemas with sameAs anchors get cited far more than anonymous content.' },

  // DMO / Tourism
  { type: 'TouristAttraction', category: 'dmo', priority: 'critical', description: 'Each attraction page (museums, landmarks, parks)', whyMatters: 'Foundational for tourism sites. AI maps queries like "things to do in X" directly to TouristAttraction entries.' },
  { type: 'TouristDestination', category: 'dmo', priority: 'recommended', description: 'City / region / area pages', whyMatters: 'Tells AI this page describes a destination as a whole, with attractions, places, and events nested.' },
  { type: 'Event', category: 'dmo', priority: 'critical', description: 'Festivals, performances, scheduled experiences', whyMatters: 'The only way AI Overview answers "what is happening in [city] this weekend." Without Event schema, your events are invisible to AI.' },
  { type: 'Place', category: 'dmo', priority: 'recommended', description: 'Physical locations with geo coordinates', whyMatters: 'Lets AI place your content on a map. Especially powerful when paired with Wikidata Place IDs in sameAs.' },
  { type: 'LocalBusiness', category: 'dmo', priority: 'recommended', description: 'Hotels, restaurants, shops in your destination', whyMatters: 'If you list local businesses (hotel directory, restaurant guide), LocalBusiness gives AI structured hours, prices, contact info.' },

  // Content
  { type: 'Article', category: 'content', priority: 'recommended', description: 'Editorial content, blog posts, guides', whyMatters: 'Article schema gives AI the headline, author, date, and image. Pages with Article schema get cited 2-3x more often than plain HTML.' },
  { type: 'VideoObject', category: 'content', priority: 'recommended', description: 'Videos with thumbnail, duration, transcript reference', whyMatters: 'AI Mode increasingly surfaces video. VideoObject schema is the difference between your video appearing or being invisible.' },
  { type: 'Course', category: 'content', priority: 'nice-to-have', description: 'Educational programs, training, certifications', whyMatters: 'Useful for organizations with training content. AI can answer "courses about X" queries directly.' },

  // Discovery
  { type: 'FAQPage', category: 'discovery', priority: 'recommended', description: 'Question + answer pairs', whyMatters: 'AI engines pull FAQ schema heavily for direct answers. Google dropped FAQ rich results from search in 2023, but the schema is still a strong AI extraction signal.' },
  { type: 'HowTo', category: 'discovery', priority: 'nice-to-have', description: 'Step-by-step instructions', whyMatters: 'For guides like "how to plan a trip to X" or "how to host a meeting." AI surfaces HowTo in instructional queries.' },
  { type: 'Speakable', category: 'discovery', priority: 'nice-to-have', description: 'Marks which page sections are voice-readable', whyMatters: 'Voice assistants and read-aloud features use this. Still in beta but useful for accessibility-forward sites.' },
];

function extractAllSchemaTypes(jsonLdArray: any[]): Map<string, number> {
  const counts = new Map<string, number>();
  const walk = (obj: any) => {
    if (!obj || typeof obj !== 'object') return;
    if (Array.isArray(obj)) {
      obj.forEach(walk);
      return;
    }
    const type = obj['@type'];
    if (type) {
      const types = Array.isArray(type) ? type : [type];
      types.forEach((t: any) => {
        if (typeof t === 'string') counts.set(t, (counts.get(t) || 0) + 1);
      });
    }
    Object.values(obj).forEach(walk);
  };
  jsonLdArray.forEach(walk);
  return counts;
}

// --- Site Hygiene (canonical, robots, OG, Twitter, hreflang, sitemap, llms.txt) ---
type HygieneStatus = 'pass' | 'warn' | 'fail' | 'unknown';

interface HygieneCheck {
  name: string;
  status: HygieneStatus;
  detail: string;
  why: string;
}

interface HygieneAnalysis {
  htmlChecks: HygieneCheck[];
  fetchChecks: HygieneCheck[] | null;  // null until async fetches complete
}

function extractHtmlHygiene(doc: Document, pageUrl: string): HygieneCheck[] {
  const checks: HygieneCheck[] = [];

  // Canonical
  const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute('href');
  if (!canonical) {
    checks.push({
      name: 'Canonical tag',
      status: 'fail',
      detail: 'Missing',
      why: 'Without a canonical tag, AI crawlers and search engines treat each URL variant as a separate page. This dilutes signal and creates duplicate content problems.',
    });
  } else {
    let canonicalMatches = false;
    try {
      const canonicalUrl = new URL(canonical, pageUrl).toString();
      canonicalMatches = canonicalUrl === pageUrl || canonicalUrl.replace(/\/$/, '') === pageUrl.replace(/\/$/, '');
    } catch { /* ignore */ }
    checks.push({
      name: 'Canonical tag',
      status: canonicalMatches ? 'pass' : 'warn',
      detail: canonicalMatches ? canonical : `Present but points elsewhere: ${canonical}`,
      why: canonicalMatches
        ? 'Self-referential canonical — tells AI this is the authoritative URL.'
        : 'Canonical points to a different URL. Intentional if this is a duplicate page; broken if not.',
    });
  }

  // Robots meta
  const robotsMeta = doc.querySelector('meta[name="robots"]')?.getAttribute('content') || '';
  const robotsLower = robotsMeta.toLowerCase();
  if (robotsLower.includes('noindex')) {
    checks.push({
      name: 'Robots meta',
      status: 'fail',
      detail: `noindex set: "${robotsMeta}"`,
      why: 'This page tells search engines and AI crawlers not to index it. If unintentional, your page is invisible to AI Overview, ChatGPT Search, and every other surface that respects this.',
    });
  } else if (robotsLower.includes('nofollow')) {
    checks.push({
      name: 'Robots meta',
      status: 'warn',
      detail: `nofollow set: "${robotsMeta}"`,
      why: 'Links on this page will not pass authority to other pages. Usually fine for paid links or untrusted content, problematic on your own editorial pages.',
    });
  } else {
    checks.push({
      name: 'Robots meta',
      status: 'pass',
      detail: robotsMeta || 'No restrictions (default index, follow)',
      why: 'AI crawlers and search engines can index this page and follow its links.',
    });
  }

  // hreflang
  const hreflangs = Array.from(doc.querySelectorAll('link[rel="alternate"][hreflang]'));
  if (hreflangs.length === 0) {
    checks.push({
      name: 'hreflang tags',
      status: 'unknown',
      detail: 'None present',
      why: 'Only needed for multi-language sites. If your site is English-only, this is fine. If you publish in multiple languages, hreflang tells AI which version to surface for which user.',
    });
  } else {
    const langs = hreflangs.map((l) => l.getAttribute('hreflang')).filter(Boolean).join(', ');
    checks.push({
      name: 'hreflang tags',
      status: 'pass',
      detail: `${hreflangs.length} found: ${langs}`,
      why: 'Multi-language signals to AI are in place.',
    });
  }

  // Open Graph
  const ogTags = ['og:title', 'og:description', 'og:image', 'og:type', 'og:url'];
  const ogPresent = ogTags.filter((tag) => doc.querySelector(`meta[property="${tag}"]`)?.getAttribute('content'));
  const ogMissing = ogTags.filter((tag) => !doc.querySelector(`meta[property="${tag}"]`)?.getAttribute('content'));
  checks.push({
    name: 'Open Graph',
    status: ogMissing.length === 0 ? 'pass' : ogMissing.length <= 2 ? 'warn' : 'fail',
    detail: ogMissing.length === 0
      ? `All 5 core tags present (${ogTags.join(', ')})`
      : `Missing: ${ogMissing.join(', ')}`,
    why: 'OG tags control how your page renders when shared on LinkedIn, Slack, iMessage, etc. AI crawlers also use og:title and og:description as fallback when other signals are weak.',
  });

  // Twitter Card
  const twitterCard = doc.querySelector('meta[name="twitter:card"]')?.getAttribute('content');
  if (!twitterCard) {
    checks.push({
      name: 'Twitter Card',
      status: 'warn',
      detail: 'Missing twitter:card meta',
      why: 'Without this, X/Twitter previews fall back to OG tags or generic rendering. Adding `twitter:card` = `summary_large_image` gives you a proper card preview.',
    });
  } else {
    checks.push({
      name: 'Twitter Card',
      status: 'pass',
      detail: `twitter:card = "${twitterCard}"`,
      why: 'X/Twitter will render proper preview cards when this page is shared.',
    });
  }

  return checks;
}

async function fetchHygieneChecks(pageUrl: string): Promise<HygieneCheck[]> {
  const checks: HygieneCheck[] = [];
  let origin = '';
  try {
    origin = new URL(pageUrl).origin;
  } catch {
    return checks;
  }

  // Sitemap
  try {
    const sitemapUrl = `${origin}/sitemap.xml`;
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(sitemapUrl)}`);
    const data = await response.json();
    if (data.contents && (data.contents.includes('<urlset') || data.contents.includes('<sitemapindex'))) {
      checks.push({
        name: 'sitemap.xml',
        status: 'pass',
        detail: `Reachable at ${sitemapUrl}`,
        why: 'Sitemap tells crawlers what pages exist and when they last changed. AI training crawlers and search engines use it to discover new content faster.',
      });
    } else {
      checks.push({
        name: 'sitemap.xml',
        status: 'fail',
        detail: `Not found at ${sitemapUrl}`,
        why: 'No sitemap means crawlers have to discover pages via internal links only. Slower indexing and missed pages.',
      });
    }
  } catch {
    checks.push({
      name: 'sitemap.xml',
      status: 'unknown',
      detail: 'Could not check (network or CORS issue)',
      why: 'Manual check: try opening /sitemap.xml in your browser.',
    });
  }

  // llms.txt
  for (const filename of ['llms.txt', 'llms-full.txt']) {
    try {
      const url = `${origin}/${filename}`;
      const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
      const data = await response.json();
      if (data.contents && !data.contents.toLowerCase().includes('<html') && data.contents.trim().startsWith('#')) {
        checks.push({
          name: filename,
          status: 'pass',
          detail: `Found at ${url}`,
          why: 'Optional file proposed by Answer.AI (Sept 2024). No major AI vendor has officially committed to reading it yet, but Anthropic ships one on their docs. Low-cost optionality if you have it.',
        });
      } else {
        checks.push({
          name: filename,
          status: 'unknown',
          detail: 'Not found',
          why: 'Optional. The llms.txt standard is a community proposal, not adopted by major AI vendors yet. Skip unless you specifically want to provide curated context for LLMs that DO read it (Anthropic ships one on docs.anthropic.com).',
        });
      }
    } catch {
      checks.push({
        name: filename,
        status: 'unknown',
        detail: 'Could not check',
        why: 'Optional file. Network or CORS issue blocked the check.',
      });
    }
  }

  return checks;
}

function analyzeSchemaCoverage(jsonLdArray: any[]): SchemaTypeCoverage {
  const counts = extractAllSchemaTypes(jsonLdArray);
  const presentTypes = Array.from(counts.entries())
    .map(([type, count]) => ({ type, count }))
    .sort((a, b) => b.count - a.count);
  const missingRecommended = SCHEMA_LIBRARY.filter((rec) => !counts.has(rec.type));
  return { presentTypes, missingRecommended };
}

function extractContentPatterns(doc: Document, ragText: string, pageUrl: string): ContentPatterns {
  const wordCount = ragText.split(/\s+/).filter((w) => w.length > 0).length;
  const pageOrigin = (() => {
    try { return new URL(pageUrl).origin; } catch { return ''; }
  })();

  const allLinks = Array.from(doc.querySelectorAll('a[href]'));
  const externalAuthorityLinks = allLinks.filter((a) => {
    const href = a.getAttribute('href') || '';
    return isAuthorityLink(href, pageOrigin);
  }).length;

  const statistics = countStatistics(ragText);
  const quotations = countQuotations(ragText);

  const headings = Array.from(doc.querySelectorAll('h1, h2, h3'));
  const questionHeadings = headings.filter((h) => isQuestionHeading(h.textContent || '')).length;
  const totalHeadings = headings.length;

  const per1000 = (n: number) => (wordCount > 0 ? (n / wordCount) * 1000 : 0);

  return {
    wordCount,
    externalAuthorityLinks,
    statistics,
    quotations,
    questionHeadings,
    totalHeadings,
    citationsPer1000: per1000(externalAuthorityLinks),
    statisticsPer1000: per1000(statistics),
    quotationsPer1000: per1000(quotations),
    questionHeadingPercent: totalHeadings > 0 ? (questionHeadings / totalHeadings) * 100 : 0,
  };
}

// --- Entity grouping + suggested sameAs ---
interface GroupedEntity {
  name: string;
  type: string;
  count: number;
  sameAs: SameAsLink[];
}

function deduplicateEntities(entities: DiscoveredEntity[]): GroupedEntity[] {
  const groups = new Map<string, GroupedEntity>();
  entities.forEach((e) => {
    const key = `${e.name}|${e.type}`;
    const existing = groups.get(key);
    if (existing) {
      existing.count++;
      e.sameAs.forEach((link) => {
        if (!existing.sameAs.find((s) => s.url === link.url)) {
          existing.sameAs.push(link);
        }
      });
    } else {
      groups.set(key, { name: e.name, type: e.type, count: 1, sameAs: [...e.sameAs] });
    }
  });
  return Array.from(groups.values());
}

interface SuggestedLink {
  platform: string;
  example: string;
  note: string;
}

function getSuggestedSameAs(entity: GroupedEntity): SuggestedLink[] {
  const suggestions: SuggestedLink[] = [];
  const hasPlat = (name: string) => entity.sameAs.some((s) => s.platform === name);
  const slug = entity.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const slugUnder = entity.name.replace(/\s+/g, '_');
  const isPerson = entity.type.includes('Person');
  const isOrg = entity.type.includes('Organization') || entity.type.includes('Corporation') || entity.type.includes('LocalBusiness') || entity.type.includes('NGO');
  const isPlace = entity.type.includes('Place') || entity.type.includes('TouristAttraction') || entity.type.includes('TouristDestination');

  if (!hasPlat('Wikipedia')) {
    suggestions.push({
      platform: 'Wikipedia',
      example: `https://en.wikipedia.org/wiki/${slugUnder}`,
      note: 'Highest-authority anchor. Only add if a Wikipedia page actually exists.',
    });
  }
  if (!hasPlat('Wikidata')) {
    suggestions.push({
      platform: 'Wikidata',
      example: `https://www.wikidata.org/wiki/QXXXXXX`,
      note: `Search wikidata.org for "${entity.name}" to find the real Q-number.`,
    });
  }
  if (!hasPlat('LinkedIn')) {
    suggestions.push({
      platform: 'LinkedIn',
      example: isPerson ? `https://www.linkedin.com/in/${slug}` : `https://www.linkedin.com/company/${slug}`,
      note: isPerson ? 'Person profile.' : 'Organization page.',
    });
  }
  if (isOrg && !hasPlat('Crunchbase')) {
    suggestions.push({
      platform: 'Crunchbase',
      example: `https://www.crunchbase.com/organization/${slug}`,
      note: 'Useful for companies; less critical for DMOs / non-profits.',
    });
  }
  if (!hasPlat('X / Twitter')) {
    suggestions.push({
      platform: 'X / Twitter',
      example: isPerson ? `https://x.com/${slug}` : `https://x.com/${slug}`,
      note: 'Replace the handle with your actual one.',
    });
  }
  if (isOrg && !hasPlat('Instagram')) {
    suggestions.push({
      platform: 'Instagram',
      example: `https://www.instagram.com/${slug}`,
      note: 'Use your actual handle.',
    });
  }
  if (isOrg && !hasPlat('Facebook')) {
    suggestions.push({
      platform: 'Facebook',
      example: `https://www.facebook.com/${slug}`,
      note: 'Use your actual page slug.',
    });
  }
  if (isPlace && !hasPlat('Wikidata')) {
    // Wikidata is especially important for Place entities
    // Already added above if not present
  }
  return suggestions;
}

function getDisplayPlatform(link: SameAsLink): string {
  if (link.platform !== 'Other') return link.platform;
  try {
    return new URL(link.url).hostname.replace(/^www\./, '');
  } catch {
    return 'Other';
  }
}

function buildSameAsJsonSnippet(entity: GroupedEntity, suggestions: SuggestedLink[]): string {
  const existingUrls = entity.sameAs.map((s) => s.url);
  const suggestionUrls = suggestions.map((s) => s.example);
  const allUrls = [...existingUrls, ...suggestionUrls];
  const firstType = entity.type.split(',')[0].trim();
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': firstType,
    name: entity.name,
    sameAs: allUrls,
  }, null, 2);
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

        // 7. Content Freshness Extraction
        const freshness = extractDates(doc, jsonLd.filter((x) => typeof x === 'object'));

        // 8. GEO Content Patterns
        const contentPatterns = extractContentPatterns(doc, ragTextClean, sourceUrl);

        // 9. Schema Type Coverage
        const schemaCoverage = analyzeSchemaCoverage(jsonLd.filter((x) => typeof x === 'object'));

        // 10. Site Hygiene (HTML-derivable checks; fetch-based ones run async)
        const hygiene: HygieneAnalysis = {
          htmlChecks: extractHtmlHygiene(doc, sourceUrl),
          fetchChecks: null,
        };

        // 11. Meta Extraction
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
            freshness,
            contentPatterns,
            schemaCoverage,
            hygiene,
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
            // Fetch hygiene checks (sitemap, llms.txt) in parallel
            fetchHygieneChecks(urlInput).then((fetchChecks) => {
              setAnalysis((prev: any) => prev ? { ...prev, hygiene: { ...prev.hygiene, fetchChecks } } : prev);
            });
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
                                Page has <code className="bg-amber-200 px-1 rounded text-xs">datePublished</code> but no <code className="bg-amber-200 px-1 rounded text-xs">dateModified</code>. AI engines treat absence as "never updated."
                              </div>
                            )}
                            {!freshness.hasModified && !freshness.hasPublished && (
                              <div className="mt-3 p-3 bg-red-100 border border-red-300 rounded text-sm text-red-900">
                                <AlertOctagon className="inline-block mr-2 -mt-0.5" size={14} />
                                <strong>No date signals at all.</strong> AI engines cannot evaluate this page's freshness. Add <code className="bg-red-200 px-1 rounded text-xs">datePublished</code> and <code className="bg-red-200 px-1 rounded text-xs">dateModified</code> to your Article / WebPage / Event schema.
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
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-start">
                      <Info className="flex-shrink-0 text-blue-500 mr-3 mt-1" size={20} />
                      <div>
                        <h3 className="text-sm font-bold text-blue-900 mb-1 font-display">Content Patterns</h3>
                        <p className="text-sm text-blue-800 leading-relaxed">
                          Researchers at Princeton studied what makes AI engines like ChatGPT and Perplexity cite a web page. Three patterns helped most: <strong>direct quotes (+41%)</strong>, <strong>statistics (+32%)</strong>, and <strong>links to authoritative sources like Wikipedia, .gov, and established news (+30%)</strong>. Question-format headings also performed well. The numbers below show where your page stands.
                        </p>
                      </div>
                    </div>

                    {(() => {
                      const cp: ContentPatterns | undefined = analysis.contentPatterns;
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
                        { icon: Link2, name: 'Authority citations', count: cp.externalAuthorityLinks, per1000: cp.citationsPer1000, score: score(cp.citationsPer1000, 5, 2), unit: 'per 1000 words', why: 'Links to Wikipedia, .gov, .edu, established news, and academic sources. Princeton paper: +30% lift on cited content.' },
                        { icon: BarChart, name: 'Statistics', count: cp.statistics, per1000: cp.statisticsPer1000, score: score(cp.statisticsPer1000, 10, 5), unit: 'per 1000 words', why: 'Numbers paired with units (%, $, years, miles, GB, etc.). Princeton paper: +32% lift on stat-dense content.' },
                        { icon: Quote, name: 'Direct quotations', count: cp.quotations, per1000: cp.quotationsPer1000, score: score(cp.quotationsPer1000, 3, 1), unit: 'per 1000 words', why: 'Quoted text of 15+ characters. Suggests primary-source content. Princeton paper: +41% lift on quotation-rich content.' },
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
                            <strong>About these labels:</strong> Strong / Medium / Weak are rough guesses based on common ranges. The Princeton study measured what helped, leaving exact targets open. Aim for &ldquo;enough of each&rdquo; &mdash; your interview quotes, your real stats, your real source links &mdash; and the lift compounds. Made-up content to game the audit backfires; AI engines get sharper at spotting it every quarter.
                          </div>
                        </>
                      );
                    })()}
                  </div>
                )}

                {/* TAB: SCHEMA COVERAGE */}
                {activeTab === 'coverage' && (
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
                      const sc: SchemaTypeCoverage | undefined = analysis.schemaCoverage;
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
                                            <p className="text-xs text-gray-700 leading-relaxed">{rec.whyMatters}</p>
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
                )}

                {/* TAB: SITE HYGIENE */}
                {activeTab === 'hygiene' && (
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
                      const hyg: HygieneAnalysis | undefined = analysis.hygiene;
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
                                {analysis.url ? (
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
