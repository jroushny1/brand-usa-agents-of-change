// Pure analysis logic for the AI Vision Simulator audit tool.
// No JSX here — everything is plain TypeScript consumed by AuditClient.tsx
// and the tab components.

// --- AI Bot definitions for robots.txt audit ---
export type BotType = 'training' | 'retrieval' | 'general';

export interface AIBotDef {
  name: string;
  type: BotType;
  vendor: string;
  purpose: string;
}

export const AI_BOTS: AIBotDef[] = [
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

export type BotStatus = 'allowed' | 'blocked' | 'partial' | 'blocked-by-wildcard' | 'not-mentioned';

export interface AgentRule {
  allow: string[];
  disallow: string[];
}

export interface BotResult extends AIBotDef {
  status: BotStatus;
  source: 'specific' | 'wildcard';
  rules: AgentRule;
}

export interface RobotsAnalysis {
  url: string;
  found: boolean;
  raw: string;
  error?: string;
  bots: BotResult[];
}

export function parseRobotsTxt(text: string): Record<string, AgentRule> {
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

// --- Shared narrowing helper for open-ended JSON-LD structures ---
type UnknownRecord = Record<string, unknown>;

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

// --- Entity Graph (sameAs) audit ---
export interface SameAsLink {
  url: string;
  platform: string;
  isAuthoritative: boolean;
}

export interface DiscoveredEntity {
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

export function extractEntities(jsonLdArray: unknown[]): DiscoveredEntity[] {
  const entities: DiscoveredEntity[] = [];

  const walk = (obj: unknown): void => {
    if (!obj || typeof obj !== 'object') return;
    if (Array.isArray(obj)) {
      obj.forEach(walk);
      return;
    }
    if (!isRecord(obj)) return;

    const typeRaw = obj['@type'];
    if (typeRaw) {
      const types: unknown[] = Array.isArray(typeRaw) ? typeRaw : [typeRaw];
      const matchedTypes = types.filter((t): t is string => typeof t === 'string' && ENTITY_TYPES.has(t));

      if (matchedTypes.length > 0) {
        const sameAsRaw = obj.sameAs;
        const sameAsArr: string[] = Array.isArray(sameAsRaw)
          ? sameAsRaw.filter((s): s is string => typeof s === 'string')
          : (typeof sameAsRaw === 'string' ? [sameAsRaw] : []);

        const classified: SameAsLink[] = sameAsArr.map((url) => {
          const match = SAMEAS_PATTERNS.find((p) => p.pattern.test(url));
          return {
            url,
            platform: match?.name || 'Other',
            isAuthoritative: match?.authoritative || false,
          };
        });

        const name = [obj.name, obj.legalName, obj.headline]
          .find((v): v is string => typeof v === 'string' && v.length > 0) || '(unnamed entity)';

        entities.push({
          type: matchedTypes.join(', '),
          name,
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
export interface DateSignal {
  source: string;
  type: 'published' | 'modified';
  value: string;
  parsed: Date | null;
  schemaType?: string;
}

export interface FreshnessAnalysis {
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

export function extractDates(doc: Document, jsonLdArray: unknown[]): FreshnessAnalysis {
  const dates: DateSignal[] = [];

  // 1. JSON-LD dates (walk recursively for nested @graph etc.)
  const walkForDates = (obj: unknown): void => {
    if (!obj || typeof obj !== 'object') return;
    if (Array.isArray(obj)) {
      obj.forEach(walkForDates);
      return;
    }
    if (!isRecord(obj)) return;
    const type = obj['@type'];
    const typeName = Array.isArray(type) ? type.join('/') : (typeof type === 'string' ? type : undefined);

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

export function daysSince(d: Date | null): number | null {
  if (!d) return null;
  return Math.floor((Date.now() - d.getTime()) / (1000 * 60 * 60 * 24));
}

// --- GEO Content Patterns (Princeton paper: Aggarwal et al. 2023) ---
export interface ContentPatterns {
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
export interface SchemaRecommendation {
  type: string;
  category: 'foundational' | 'dmo' | 'content' | 'discovery';
  priority: 'critical' | 'recommended' | 'nice-to-have';
  description: string;
  whyMatters: string;
  starter: string;  // copy-paste JSON-LD starter
}

export interface SchemaTypeCoverage {
  presentTypes: { type: string; count: number }[];
  missingRecommended: SchemaRecommendation[];
}

const SCHEMA_LIBRARY: SchemaRecommendation[] = [
  // Foundational
  { type: 'Organization', category: 'foundational', priority: 'critical', description: 'Identifies your org with name, logo, sameAs links', whyMatters: 'Every site needs this. AI uses it to know who you are.', starter: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Organization",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/logo.png",
  "sameAs": [
    "https://en.wikipedia.org/wiki/Your_Organization",
    "https://www.wikidata.org/wiki/QXXXXXX",
    "https://www.linkedin.com/company/your-org"
  ]
}` },
  { type: 'WebSite', category: 'foundational', priority: 'critical', description: 'Anchors the site as a whole entity', whyMatters: 'Gives AI a stable home reference for everything else on the domain.', starter: `{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Your Site Name",
  "url": "https://yourdomain.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://yourdomain.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}` },
  { type: 'BreadcrumbList', category: 'foundational', priority: 'recommended', description: 'Breadcrumb navigation as structured data', whyMatters: 'Helps AI understand page hierarchy and which pages are top-level vs deep.', starter: `{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourdomain.com"},
    {"@type": "ListItem", "position": 2, "name": "Category", "item": "https://yourdomain.com/category"},
    {"@type": "ListItem", "position": 3, "name": "Current Page"}
  ]
}` },
  { type: 'Person', category: 'foundational', priority: 'recommended', description: 'Staff bios, authors, leadership', whyMatters: 'Personal credibility is the foundation of E-E-A-T. Author Person schemas with sameAs anchors get cited far more than anonymous content.', starter: `{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Person Name",
  "jobTitle": "Their Title",
  "url": "https://yourdomain.com/about",
  "sameAs": [
    "https://www.linkedin.com/in/handle",
    "https://en.wikipedia.org/wiki/Their_Name"
  ]
}` },

  // DMO / Tourism
  { type: 'TouristAttraction', category: 'dmo', priority: 'critical', description: 'Each attraction page (museums, landmarks, parks)', whyMatters: 'Foundational for tourism sites. AI maps queries like "things to do in X" directly to TouristAttraction entries.', starter: `{
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Attraction Name",
  "description": "Brief description of the attraction",
  "image": "https://yourdomain.com/attraction.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "City",
    "addressRegion": "State",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 0,
    "longitude": 0
  }
}` },
  { type: 'TouristDestination', category: 'dmo', priority: 'recommended', description: 'City / region / area pages', whyMatters: 'Tells AI this page describes a destination as a whole, with attractions, places, and events nested.', starter: `{
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  "name": "Destination Name",
  "description": "What makes this destination distinctive",
  "url": "https://yourdomain.com/destination",
  "includesAttraction": [
    {"@type": "TouristAttraction", "name": "Featured Attraction 1"},
    {"@type": "TouristAttraction", "name": "Featured Attraction 2"}
  ]
}` },
  { type: 'Event', category: 'dmo', priority: 'critical', description: 'Festivals, performances, scheduled experiences', whyMatters: 'The only way AI Overview answers "what is happening in [city] this weekend." Without Event schema, your events are invisible to AI.', starter: `{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Event Name",
  "startDate": "2026-06-15T19:00",
  "endDate": "2026-06-15T22:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Venue Name",
    "address": "Venue Address"
  },
  "image": "https://yourdomain.com/event.jpg",
  "description": "Brief event description",
  "organizer": {
    "@type": "Organization",
    "name": "Organizer Name",
    "url": "https://yourdomain.com"
  }
}` },
  { type: 'Place', category: 'dmo', priority: 'recommended', description: 'Physical locations with geo coordinates', whyMatters: 'Lets AI place your content on a map. Especially powerful when paired with Wikidata Place IDs in sameAs.', starter: `{
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "Place Name",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 0,
    "longitude": 0
  },
  "sameAs": [
    "https://en.wikipedia.org/wiki/Place_Name",
    "https://www.wikidata.org/wiki/QXXXXXX"
  ]
}` },
  { type: 'LocalBusiness', category: 'dmo', priority: 'recommended', description: 'Hotels, restaurants, shops in your destination', whyMatters: 'If you list local businesses (hotel directory, restaurant guide), LocalBusiness gives AI structured hours, prices, contact info.', starter: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Business Name",
  "image": "https://yourdomain.com/photo.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "City",
    "addressRegion": "ST",
    "postalCode": "00000"
  },
  "telephone": "+1-555-555-5555",
  "openingHours": "Mo-Fr 09:00-17:00",
  "priceRange": "$$"
}` },

  // Content
  { type: 'Article', category: 'content', priority: 'recommended', description: 'Editorial content, blog posts, guides', whyMatters: 'Article schema gives AI the headline, author, date, and image. Pages with Article schema get cited 2-3x more often than plain HTML.', starter: `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "image": "https://yourdomain.com/image.jpg",
  "datePublished": "2026-05-23T08:00:00+00:00",
  "dateModified": "2026-05-23T08:00:00+00:00",
  "author": {
    "@type": "Person",
    "name": "Author Name",
    "url": "https://yourdomain.com/about/author"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Publisher Name",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yourdomain.com/logo.png"
    }
  }
}` },
  { type: 'VideoObject', category: 'content', priority: 'recommended', description: 'Videos with thumbnail, duration, transcript reference', whyMatters: 'AI Mode increasingly surfaces video. VideoObject schema is the difference between your video appearing or being invisible.', starter: `{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Video Title",
  "description": "Brief description",
  "thumbnailUrl": "https://yourdomain.com/thumbnail.jpg",
  "uploadDate": "2026-05-23",
  "duration": "PT5M30S",
  "contentUrl": "https://yourdomain.com/video.mp4"
}` },
  { type: 'Course', category: 'content', priority: 'nice-to-have', description: 'Educational programs, training, certifications', whyMatters: 'Useful for organizations with training content. AI can answer "courses about X" queries directly.', starter: `{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Course Name",
  "description": "What students will learn",
  "provider": {
    "@type": "Organization",
    "name": "Provider Name",
    "url": "https://yourdomain.com"
  }
}` },

  // Discovery
  { type: 'FAQPage', category: 'discovery', priority: 'recommended', description: 'Question + answer pairs', whyMatters: 'AI engines pull FAQ schema heavily for direct answers. Google dropped FAQ rich results from search in 2023, but the schema is still a strong AI extraction signal.', starter: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the question?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The answer text."
      }
    },
    {
      "@type": "Question",
      "name": "Another question?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Another answer."
      }
    }
  ]
}` },
  { type: 'HowTo', category: 'discovery', priority: 'nice-to-have', description: 'Step-by-step instructions', whyMatters: 'For guides like "how to plan a trip to X" or "how to host a meeting." AI surfaces HowTo in instructional queries.', starter: `{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to do something",
  "description": "Brief overview",
  "step": [
    {"@type": "HowToStep", "name": "Step 1", "text": "First step instruction"},
    {"@type": "HowToStep", "name": "Step 2", "text": "Second step instruction"}
  ]
}` },
  { type: 'Speakable', category: 'discovery', priority: 'nice-to-have', description: 'Marks which page sections are voice-readable', whyMatters: 'Voice assistants and read-aloud features use this. Still in beta but useful for accessibility-forward sites.', starter: `{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".summary", ".speakable"]
  }
}` },
];

export function extractAllSchemaTypes(jsonLdArray: unknown[]): Map<string, number> {
  const counts = new Map<string, number>();
  const walk = (obj: unknown): void => {
    if (!obj || typeof obj !== 'object') return;
    if (Array.isArray(obj)) {
      obj.forEach(walk);
      return;
    }
    if (!isRecord(obj)) return;
    const type = obj['@type'];
    if (type) {
      const types: unknown[] = Array.isArray(type) ? type : [type];
      types.forEach((t) => {
        if (typeof t === 'string') counts.set(t, (counts.get(t) || 0) + 1);
      });
    }
    Object.values(obj).forEach(walk);
  };
  jsonLdArray.forEach(walk);
  return counts;
}

// --- Site Hygiene (canonical, robots, OG, Twitter, hreflang, sitemap, llms.txt) ---
export type HygieneStatus = 'pass' | 'warn' | 'fail' | 'unknown';

export interface HygieneCheck {
  name: string;
  status: HygieneStatus;
  detail: string;
  why: string;
  fix?: string;  // HTML snippet or file content to add
}

export interface HygieneAnalysis {
  htmlChecks: HygieneCheck[];
  fetchChecks: HygieneCheck[] | null;  // null until async fetches complete
}

export function extractHtmlHygiene(doc: Document, pageUrl: string): HygieneCheck[] {
  const checks: HygieneCheck[] = [];

  // Canonical
  const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute('href');
  if (!canonical) {
    checks.push({
      name: 'Canonical tag',
      status: 'fail',
      detail: 'Missing',
      why: 'Without a canonical tag, AI crawlers and search engines treat each URL variant as a separate page. This dilutes signal and creates duplicate content problems.',
      fix: `<link rel="canonical" href="${pageUrl || 'https://yourdomain.com/this-page'}">`,
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
  const ogMissing = ogTags.filter((tag) => !doc.querySelector(`meta[property="${tag}"]`)?.getAttribute('content'));
  checks.push({
    name: 'Open Graph',
    status: ogMissing.length === 0 ? 'pass' : ogMissing.length <= 2 ? 'warn' : 'fail',
    detail: ogMissing.length === 0
      ? `All 5 core tags present (${ogTags.join(', ')})`
      : `Missing: ${ogMissing.join(', ')}`,
    why: 'OG tags control how your page renders when shared on LinkedIn, Slack, iMessage, etc. AI crawlers also use og:title and og:description as fallback when other signals are weak.',
    fix: ogMissing.length === 0 ? undefined : ogMissing.map((tag) => {
      const placeholders: Record<string, string> = {
        'og:title': 'Your Page Title',
        'og:description': 'A 1-2 sentence description of this page',
        'og:image': 'https://yourdomain.com/share-image.jpg',
        'og:type': 'website',
        'og:url': pageUrl || 'https://yourdomain.com/this-page',
      };
      return `<meta property="${tag}" content="${placeholders[tag]}">`;
    }).join('\n'),
  });

  // Twitter Card
  const twitterCard = doc.querySelector('meta[name="twitter:card"]')?.getAttribute('content');
  if (!twitterCard) {
    checks.push({
      name: 'Twitter Card',
      status: 'warn',
      detail: 'Missing twitter:card meta',
      why: 'Without this, X/Twitter previews fall back to OG tags or generic rendering. Adding `twitter:card` = `summary_large_image` gives you a proper card preview.',
      fix: `<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:title" content="Your Page Title">\n<meta name="twitter:description" content="A 1-2 sentence description">\n<meta name="twitter:image" content="https://yourdomain.com/share-image.jpg">`,
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

export async function fetchHygieneChecks(pageUrl: string): Promise<HygieneCheck[]> {
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

// --- Page analysis result shape (returned by parseContent) ---
export interface HeaderInfo {
  tag: string;
  text: string | null;
}

export interface ImageInfo {
  src: string | null;
  alt: string;
  hasAlt: boolean;
}

export interface PageMeta {
  title: string | null | undefined;
  description: string | null | undefined;
}

export interface PageAnalysis {
  tokenCount: number;
  charCount: number;
  usefulCharCount: number;
  noiseRatio: number;
  headers: HeaderInfo[];
  ragText: string;
  images: ImageInfo[];
  meta: PageMeta;
  jsonLd: unknown[];
  entities: DiscoveredEntity[];
  freshness: FreshnessAnalysis;
  contentPatterns: ContentPatterns;
  schemaCoverage: SchemaTypeCoverage;
  hygiene: HygieneAnalysis;
  rawHtml: string;
  url: string;
  framework: string | null;
  isLikelyCSR: boolean;
}

// --- Markdown report generator ---
export function generateMarkdownReport(analysis: PageAnalysis, robotsAnalysis: RobotsAnalysis | null): string {
  const url = analysis.url || '(HTML paste)';
  const auditDate = new Date().toISOString().split('T')[0];
  const lines: string[] = [];

  lines.push(`# AI Audit Report: ${url}`);
  lines.push('');
  lines.push(`**Audited:** ${auditDate}`);
  lines.push(`**Tool:** janetteroush.com/ai-audit`);
  lines.push('');

  // Compute summary statuses
  type Status = 'Strong' | 'Needs work' | 'Critical' | 'Unknown';

  const entities: DiscoveredEntity[] = analysis.entities || [];
  const grouped = deduplicateEntities(entities);
  const authCount = grouped.reduce((sum, e) => sum + e.sameAs.filter((s) => s.isAuthoritative).length, 0);
  const entityStatus: Status = authCount >= 3 ? 'Strong' : authCount >= 1 ? 'Needs work' : 'Critical';

  const sc: SchemaTypeCoverage | undefined = analysis.schemaCoverage;
  const presentCount = sc?.presentTypes.length || 0;
  const criticalMissing = (sc?.missingRecommended || []).filter((r) => r.priority === 'critical').length;
  const schemaStatus: Status = presentCount === 0 ? 'Critical' : criticalMissing >= 3 ? 'Needs work' : presentCount >= 3 ? 'Strong' : 'Needs work';

  let crawlerStatus: Status = 'Unknown';
  let crawlerFinding = 'URL audit needed to check robots.txt';
  if (robotsAnalysis) {
    const retrievalBlocked = robotsAnalysis.bots.filter((b) => b.type === 'retrieval' && (b.status === 'blocked' || b.status === 'blocked-by-wildcard')).length;
    const totalBlocked = robotsAnalysis.bots.filter((b) => b.status === 'blocked' || b.status === 'blocked-by-wildcard').length;
    if (retrievalBlocked > 0) {
      crawlerStatus = 'Critical';
      crawlerFinding = `${retrievalBlocked} retrieval bot(s) blocked — invisible in live AI answers`;
    } else if (totalBlocked > 0) {
      crawlerStatus = 'Needs work';
      crawlerFinding = `${totalBlocked} training bot(s) blocked`;
    } else {
      crawlerStatus = 'Strong';
      crawlerFinding = 'All AI crawlers allowed';
    }
  }

  const fresh: FreshnessAnalysis | undefined = analysis.freshness;
  let freshStatus: Status = 'Unknown';
  let freshFinding = 'No date signals on the page';
  if (fresh) {
    const modDays = daysSince(fresh.mostRecentModified?.parsed || null);
    if (modDays === null) {
      freshStatus = 'Critical';
      freshFinding = 'No dateModified found';
    } else if (modDays <= 30) {
      freshStatus = 'Strong';
      freshFinding = `Last modified ${modDays === 0 ? 'today' : modDays + ' days ago'}`;
    } else if (modDays <= 180) {
      freshStatus = 'Needs work';
      freshFinding = `Last modified ${Math.round(modDays / 30)} months ago`;
    } else {
      freshStatus = 'Critical';
      freshFinding = `Last modified ${(modDays / 365).toFixed(1)} years ago`;
    }
  }

  const cp: ContentPatterns | undefined = analysis.contentPatterns;
  let patternStatus: Status = 'Unknown';
  let patternFinding = 'No body content';
  if (cp && cp.wordCount > 0) {
    const strongCount = [
      cp.citationsPer1000 >= 5,
      cp.statisticsPer1000 >= 10,
      cp.quotationsPer1000 >= 3,
      cp.questionHeadingPercent >= 30,
    ].filter(Boolean).length;
    patternStatus = strongCount >= 3 ? 'Strong' : strongCount >= 1 ? 'Needs work' : 'Critical';
    patternFinding = `${strongCount} of 4 patterns at strong density`;
  }

  const hyg: HygieneAnalysis | undefined = analysis.hygiene;
  let hygieneStatus: Status = 'Unknown';
  let hygieneFinding = 'No hygiene data';
  if (hyg) {
    const allChecks = [...hyg.htmlChecks, ...(hyg.fetchChecks || [])];
    const failCount = allChecks.filter((c) => c.status === 'fail').length;
    const warnCount = allChecks.filter((c) => c.status === 'warn').length;
    const passCount = allChecks.filter((c) => c.status === 'pass').length;
    if (failCount > 0) {
      hygieneStatus = 'Critical';
      hygieneFinding = `${failCount} check(s) failed (${passCount} pass, ${warnCount} warn)`;
    } else if (warnCount > 1) {
      hygieneStatus = 'Needs work';
      hygieneFinding = `${warnCount} warnings (${passCount} pass)`;
    } else {
      hygieneStatus = 'Strong';
      hygieneFinding = `${passCount} checks pass${warnCount > 0 ? `, ${warnCount} warn` : ''}`;
    }
  }

  // Summary table
  lines.push('## Summary');
  lines.push('');
  lines.push('| Category | Status | Finding |');
  lines.push('|---|---|---|');
  lines.push(`| Entity Graph | ${entityStatus} | ${grouped.length === 0 ? 'No entities found in structured data' : `${authCount} authoritative sameAs across ${grouped.length} ${grouped.length === 1 ? 'entity' : 'entities'}`} |`);
  lines.push(`| Schema Coverage | ${schemaStatus} | ${presentCount === 0 ? 'No structured data on this page' : `${presentCount} types present${criticalMissing > 0 ? `, ${criticalMissing} critical missing` : ''}`} |`);
  lines.push(`| AI Crawler Policy | ${crawlerStatus} | ${crawlerFinding} |`);
  lines.push(`| Freshness | ${freshStatus} | ${freshFinding} |`);
  lines.push(`| Content Patterns | ${patternStatus} | ${patternFinding} |`);
  lines.push(`| Site Hygiene | ${hygieneStatus} | ${hygieneFinding} |`);
  lines.push('');

  // Top priorities
  lines.push('## Top priorities');
  lines.push('');
  const priorities: string[] = [];
  if (entityStatus === 'Critical') priorities.push('Add Wikipedia, Wikidata, and LinkedIn URLs to a `sameAs` array on your Organization schema. Without these, AI engines cannot confidently identify your organization.');
  if (schemaStatus === 'Critical') priorities.push('Add structured data (JSON-LD) to your page, starting with `Organization` and `WebSite` schemas. AI engines extract facts from this layer.');
  if (crawlerStatus === 'Critical') priorities.push('Unblock AI retrieval bots in your `robots.txt`. With them blocked, your site is invisible in live AI answers from ChatGPT Search, Perplexity, and Claude.');
  if (freshStatus === 'Critical') priorities.push('Add `dateModified` to your structured data. AI engines weight content freshness; without this field, your page reads as ageless or stale.');
  if (patternStatus === 'Critical') priorities.push('Add direct quotes, statistics, and links to authoritative sources (Wikipedia, .gov, .edu, established news). Princeton GEO research found these patterns lift AI citation by 30-41%.');
  if (hygieneStatus === 'Critical') priorities.push('Fix the hygiene checks marked "fail" — likely missing canonical, noindex set, or missing Open Graph tags. See Site Hygiene tab for specifics.');
  if (priorities.length === 0) {
    lines.push('No critical issues. See the detail sections below for warnings and nice-to-have improvements.');
  } else {
    priorities.forEach((p, i) => lines.push(`${i + 1}. ${p}`));
  }
  lines.push('');

  // Detail sections
  if (sc) {
    lines.push('## Schema Coverage detail');
    lines.push('');
    if (sc.presentTypes.length > 0) {
      lines.push('**Present types:**');
      sc.presentTypes.forEach((t) => lines.push(`- \`${t.type}\`${t.count > 1 ? ` ×${t.count}` : ''}`));
      lines.push('');
    }
    const missingCritical = sc.missingRecommended.filter((r) => r.priority === 'critical');
    if (missingCritical.length > 0) {
      lines.push('**Critical types missing:**');
      missingCritical.forEach((r) => lines.push(`- \`${r.type}\` — ${r.description}`));
      lines.push('');
    }
  }

  if (robotsAnalysis) {
    lines.push('## AI Crawler detail');
    lines.push('');
    const blocked = robotsAnalysis.bots.filter((b) => b.status === 'blocked' || b.status === 'blocked-by-wildcard');
    if (blocked.length > 0) {
      lines.push('**Blocked bots:**');
      blocked.forEach((b) => lines.push(`- \`${b.name}\` (${b.vendor}, ${b.type}) — ${b.purpose}`));
      lines.push('');
    } else {
      lines.push('No AI crawlers are blocked in your robots.txt.');
      lines.push('');
    }
  }

  if (hyg) {
    const allHygiene = [...hyg.htmlChecks, ...(hyg.fetchChecks || [])];
    const failedHyg = allHygiene.filter((c) => c.status === 'fail');
    if (failedHyg.length > 0) {
      lines.push('## Site Hygiene failures');
      lines.push('');
      failedHyg.forEach((c) => lines.push(`- **${c.name}:** ${c.detail}`));
      lines.push('');
    }
  }

  lines.push('---');
  lines.push('');
  lines.push(`*Generated by the AI audit tool at janetteroush.com/ai-audit.*`);

  return lines.join('\n');
}

export function analyzeSchemaCoverage(jsonLdArray: unknown[]): SchemaTypeCoverage {
  const counts = extractAllSchemaTypes(jsonLdArray);
  const presentTypes = Array.from(counts.entries())
    .map(([type, count]) => ({ type, count }))
    .sort((a, b) => b.count - a.count);
  const missingRecommended = SCHEMA_LIBRARY.filter((rec) => !counts.has(rec.type));
  return { presentTypes, missingRecommended };
}

export function extractContentPatterns(doc: Document, ragText: string, pageUrl: string): ContentPatterns {
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
export interface GroupedEntity {
  name: string;
  type: string;
  count: number;
  sameAs: SameAsLink[];
}

export function deduplicateEntities(entities: DiscoveredEntity[]): GroupedEntity[] {
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

export interface SuggestedLink {
  platform: string;
  example: string;
  note: string;
}

export function getSuggestedSameAs(entity: GroupedEntity): SuggestedLink[] {
  const suggestions: SuggestedLink[] = [];
  const hasPlat = (name: string) => entity.sameAs.some((s) => s.platform === name);
  const slug = entity.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const slugUnder = entity.name.replace(/\s+/g, '_');
  const isPerson = entity.type.includes('Person');
  const isOrg = entity.type.includes('Organization') || entity.type.includes('Corporation') || entity.type.includes('LocalBusiness') || entity.type.includes('NGO');

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
  return suggestions;
}

export function getDisplayPlatform(link: SameAsLink): string {
  if (link.platform !== 'Other') return link.platform;
  try {
    return new URL(link.url).hostname.replace(/^www\./, '');
  } catch {
    return 'Other';
  }
}

export function buildSameAsJsonSnippet(entity: GroupedEntity, suggestions: SuggestedLink[]): string {
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

export function evaluateBot(bot: AIBotDef, agentRules: Record<string, AgentRule>): BotResult {
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

// --- URL helpers + robots.txt fetching ---
export function normalizeUrl(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  try {
    const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
    return new URL(withProtocol).toString();
  } catch {
    return null;
  }
}

export function analyzeRobotsContent(content: string, sourceUrl: string): RobotsAnalysis {
  const agentRules = parseRobotsTxt(content);
  const bots = AI_BOTS.map((bot) => evaluateBot(bot, agentRules));
  return { url: sourceUrl, found: true, raw: content, bots };
}

export async function fetchRobotsTxt(pageUrl: string): Promise<RobotsAnalysis> {
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
  } catch {
    return {
      url: robotsUrl,
      found: false,
      raw: '',
      error: `Could not fetch ${robotsUrl || 'robots.txt'} through the proxy (network error or CORS). Try opening it directly in a new tab, or paste the contents below.`,
      bots: AI_BOTS.map((bot) => ({ ...bot, status: 'not-mentioned', source: 'wildcard', rules: { allow: [], disallow: [] } })),
    };
  }
}

// --- Full-page content analysis (runs in the browser via DOMParser) ---
export function parseContent(content: string, sourceUrl = ''): PageAnalysis | null {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');

    // --- SMART DETECTION: Frameworks ---
    let detectedFramework: string | null = null;
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
    const cleanRawText = (rawText || "").replace(/\s+/g, ' ').trim();
    const charCount = cleanRawText.length;
    const tokenCount = Math.ceil(charCount / 4);

    // 2. Headers
    const headerTags: HeaderInfo[] = Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
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
        } catch { /* ignore invalid selectors */ }
    });

    const coreContent = ragClone.body ? ragClone.body.innerHTML : "";
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
    const imgAnalysis: ImageInfo[] = Array.from(doc.querySelectorAll('img')).map(img => {
        const alt = img.getAttribute('alt');
        return {
            src: img.getAttribute('src'),
            alt: alt || "MISSING ALT TEXT",
            hasAlt: alt !== null && alt.trim().length > 0
        };
    });

    // 5. Schema Extraction
    const jsonLd: unknown[] = Array.from(schemas).map(s => {
        try { return JSON.parse(s.textContent || '') as unknown; } catch { return "Invalid JSON-LD"; }
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
}
