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
  Clock,
  Scissors
} from 'lucide-react';
import Link from 'next/link';

// --- Constants for heading specificity check ---
const GENERIC_HEADINGS = new Set([
  'overview', 'introduction', 'summary', 'conclusion', 'details',
  'benefits', 'features', 'resources', 'more', 'faq', 'about',
  'contact', 'info', 'information', 'background', 'results',
  'discussion', 'methods', 'methodology', 'approach', 'solution',
  'problem', 'challenges', 'next steps', 'updates', 'news',
  'services', 'products', 'pricing', 'team', 'history', 'mission',
  'vision', 'values', 'goals', 'strategy', 'process', 'tools'
]);

// --- Dangling reference patterns ---
const DANGLING_PATTERNS = [
  /^this\s/i, /^these\s/i, /^that\s/i, /^those\s/i,
  /^it\s/i, /^its\s/i,
  /^as mentioned/i, /^as noted/i, /^as discussed/i,
  /^as we saw/i, /^as described/i, /^as outlined/i,
  /^building on/i, /^continuing from/i,
  /^the above/i, /^the following/i
];

function checkGenericHeading(heading: string): boolean {
  const normalized = heading.trim().toLowerCase();
  if (!normalized) return false;
  if (GENERIC_HEADINGS.has(normalized)) return true;
  const words = normalized.split(/\s+/);
  if (words.length === 1 && normalized.length > 0) return true;
  return false;
}

function checkDanglingReference(text: string): boolean {
  if (!text || text.length < 10) return false;
  const firstSentence = text.split(/[.!?]/)[0].trim();
  return DANGLING_PATTERNS.some(p => p.test(firstSentence));
}

// --- Section extraction via DOM tree walk ---
interface ContentSection {
  heading: string;
  tag: string;
  text: string;
  tokenCount: number;
  isGeneric: boolean;
  hasDangling: boolean;
}

function extractSections(root: Element): ContentSection[] {
  const sections: ContentSection[] = [];
  let currentHeading = '';
  let currentTag = 'NONE';
  let currentTexts: string[] = [];

  function finalizeSection() {
    const text = currentTexts.join(' ').replace(/\s+/g, ' ').trim();
    if (text.length > 0 || (currentHeading && currentTag !== 'NONE')) {
      sections.push({
        heading: currentHeading || '(Content before first heading)',
        tag: currentTag,
        text,
        tokenCount: Math.ceil(text.length / 4),
        isGeneric: currentHeading ? checkGenericHeading(currentHeading) : false,
        hasDangling: checkDanglingReference(text)
      });
    }
  }

  function walk(node: Node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as Element;
      if (/^H[1-6]$/.test(el.tagName)) {
        finalizeSection();
        currentHeading = el.textContent?.trim() || '';
        currentTag = el.tagName;
        currentTexts = [];
        return;
      }
      // Skip noise elements during walk
      if (['NAV', 'FOOTER', 'HEADER', 'SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME', 'SVG'].includes(el.tagName)) return;
      if (el.classList.contains('ad-banner') || el.classList.contains('cookie-banner')) return;
    }
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent?.trim();
      if (text) currentTexts.push(text);
      return;
    }
    for (const child of Array.from(node.childNodes)) {
      walk(child);
    }
  }

  walk(root);
  finalizeSection();

  return sections;
}

export default function AIAuditPage() {
  const [activeTab, setActiveTab] = useState('audit');
  const [inputMode, setInputMode] = useState('html');
  const [inputText, setInputText] = useState('');
  const [urlInput, setUrlInput] = useState('');

  const [analysis, setAnalysis] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Sample HTML for demo — exercises both passing and failing checks
  const demoHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>The Future of Artificial Intelligence - TechDaily</title>
    <meta name="description" content="An in-depth look at how neural networks are reshaping industries.">
    <meta property="article:published_time" content="2025-01-15T08:00:00Z">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Future of AI",
      "author": { "@type": "Person", "name": "Sarah Connor" },
      "datePublished": "2025-01-15",
      "dateModified": "2025-06-20"
    }
    </script>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/news">News</a></li>
        </ul>
    </nav>
    <main>
        <article>
            <h1>The Future of Artificial Intelligence</h1>
            <img src="robot.jpg" alt="A humanoid robot shaking hands with a human engineer" />
            <p><strong>Artificial Intelligence (AI)</strong> is evolving rapidly. Large Language Models (LLMs) are changing how we process information across every industry.</p>
            <h2>Benefits</h2>
            <p>There are many benefits to using AI in business today. Companies report significant gains in productivity, content creation, and data analysis.</p>
            <h2>How Retrieval-Augmented Generation Changes AI Search</h2>
            <p>This builds on what we discussed earlier. RAG systems work by breaking your content into chunks, storing them as vector embeddings, and retrieving the most relevant pieces when a user asks a question.</p>
            <h2>Key Challenges Facing AI Adoption in 2025</h2>
            <ul>
                <li>Compute Costs and Infrastructure</li>
                <li>Data Privacy and Regulatory Compliance</li>
                <li>Content Integrity and Hallucination</li>
            </ul>
            <div class="ad-banner"><span>Buy our new AI Coffee Maker! Only $99.99</span></div>
            <p>Contact us for more info.</p>
        </article>
    </main>
    <footer><p>&copy; 2025 TechDaily.</p></footer>
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

        // --- SEMANTIC HEALTH CHECK (The "Gold" Test) ---
        let semanticPoints = 0;
        let totalSemanticChecks = 0;
        const auditLog: Array<{ pass: boolean; msg: string; why: string }> = [];

        // Check 1: Landmarks
        const hasMain = doc.querySelector('main');
        const hasNav = doc.querySelector('nav');
        const hasHeader = doc.querySelector('header');
        const hasFooter = doc.querySelector('footer');
        const landmarkCount = [hasMain, hasNav, hasHeader, hasFooter].filter(Boolean).length;

        if (landmarkCount >= 3) {
            semanticPoints += 20;
            auditLog.push({ pass: true, msg: "Excellent use of Landmarks (<main>, <nav>, etc.)", why: "Landmarks tell AI where your real content lives. Without <main>, an AI scraper has to guess which text on the page matters and which is navigation, ads, or boilerplate." });
        } else if (landmarkCount > 0) {
            semanticPoints += 10;
            auditLog.push({ pass: true, msg: "Some Landmarks found, but could be better.", why: "Landmarks tell AI where your real content lives. Without <main>, an AI scraper has to guess which text on the page matters and which is navigation, ads, or boilerplate." });
        } else {
            auditLog.push({ pass: false, msg: "Missing Landmarks (AI struggles to find the main content).", why: "Landmarks tell AI where your real content lives. Without <main>, an AI scraper has to guess which text on the page matters and which is navigation, ads, or boilerplate." });
        }
        totalSemanticChecks += 20;

        // Check 2: Heading Hierarchy
        const h1 = doc.querySelectorAll('h1').length;
        if (h1 === 1) {
            semanticPoints += 20;
            auditLog.push({ pass: true, msg: "Perfect Heading Structure (One H1).", why: "A single H1 tells AI the definitive topic of the page. Multiple H1s create ambiguity about what the page is really about, weakening how AI indexes and retrieves it." });
        } else if (h1 > 1) {
            semanticPoints += 10;
            auditLog.push({ pass: false, msg: "Multiple H1 tags found (Confusing for AI).", why: "A single H1 tells AI the definitive topic of the page. Multiple H1s create ambiguity about what the page is really about, weakening how AI indexes and retrieves it." });
        } else {
            auditLog.push({ pass: false, msg: "No H1 tag found.", why: "A single H1 tells AI the definitive topic of the page. Without one, AI has no clear signal about the primary topic of your content." });
        }
        totalSemanticChecks += 20;

        // Check 3: List Usage for Links
        const navLinks = doc.querySelectorAll('nav a, header a, footer a');
        let linksInLists = 0;
        navLinks.forEach(a => {
            if (a.closest('li')) linksInLists++;
        });
        const listRatio = navLinks.length > 0 ? linksInLists / navLinks.length : 1;

        if (listRatio > 0.8) {
            semanticPoints += 20;
            auditLog.push({ pass: true, msg: "Navigation links are correctly structured in Lists.", why: "When links are in <ul><li> tags, AI recognizes them as navigation and filters them out. Links floating in <div> tags look like content, adding noise to what AI reads." });
        } else if (listRatio > 0.3) {
            semanticPoints += 10;
            auditLog.push({ pass: false, msg: "Some nav links are missing List structure (<ul><li>).", why: "When links are in <ul><li> tags, AI recognizes them as navigation and filters them out. Links floating in <div> tags look like content, adding noise to what AI reads." });
        } else {
            if (navLinks.length > 0) {
                auditLog.push({ pass: false, msg: "Navigation links found floating in Divs (Div Soup).", why: "When links are in <ul><li> tags, AI recognizes them as navigation and filters them out. Links floating in <div> tags look like content, adding noise to what AI reads." });
            } else {
                semanticPoints += 20;
            }
        }
        totalSemanticChecks += 20;

        // Check 4: Accessibility/Aria
        const images = Array.from(doc.querySelectorAll('img'));
        const imagesWithAlt = images.filter(img => {
            const alt = img.getAttribute('alt');
            return alt !== null && alt.trim() !== "";
        });
        const altRatio = images.length > 0 ? imagesWithAlt.length / images.length : 1;

        if (altRatio > 0.9) {
            semanticPoints += 20;
            auditLog.push({ pass: true, msg: "Images have Alt Text (High Accessibility).", why: "Alt text is the only way AI understands images. Without it, every image is invisible to language models and won't appear in AI-generated descriptions of your page." });
        } else {
            semanticPoints += Math.round(altRatio * 20);
            auditLog.push({ pass: false, msg: `${images.length - imagesWithAlt.length} images missing Alt Text.`, why: "Alt text is the only way AI understands images. Without it, every image is invisible to language models and won't appear in AI-generated descriptions of your page." });
        }
        totalSemanticChecks += 20;

        // Check 5: Schema
        const schemas = doc.querySelectorAll('script[type="application/ld+json"]');
        if (schemas.length > 0) {
            semanticPoints += 20;
            auditLog.push({ pass: true, msg: "Schema.org Structured Data detected.", why: "Structured data gives AI verified facts (authors, dates, events) it can trust completely, rather than having to extract and guess from your prose." });
        } else {
            auditLog.push({ pass: false, msg: "No Structured Data (Knowledge Graph) found.", why: "Structured data gives AI verified facts (authors, dates, events) it can trust completely, rather than having to extract and guess from your prose." });
        }
        totalSemanticChecks += 20;

        const semanticScore = Math.round((semanticPoints / totalSemanticChecks) * 100);


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

        // 6. Meta Extraction
        const metaTitle = doc.querySelector('title')?.textContent;
        const metaDesc = doc.querySelector('meta[name="description"]')?.getAttribute('content');

        // --- SECTION-LEVEL ANALYSIS ---
        const contentRoot = doc.querySelector('main article') || doc.querySelector('main') || doc.body;
        const sections = contentRoot ? extractSections(contentRoot) : [];

        // --- FRESHNESS SIGNALS ---
        const freshnessSignals: { dates: Array<{type: string, value: string}>, hasFreshness: boolean } = { dates: [], hasFreshness: false };

        jsonLd.forEach((schema: any) => {
            if (typeof schema === 'object' && schema !== null) {
                if (schema.datePublished) freshnessSignals.dates.push({ type: 'datePublished (Schema.org)', value: schema.datePublished });
                if (schema.dateModified) freshnessSignals.dates.push({ type: 'dateModified (Schema.org)', value: schema.dateModified });
                if (schema.dateCreated) freshnessSignals.dates.push({ type: 'dateCreated (Schema.org)', value: schema.dateCreated });
            }
        });

        const timeElements = doc.querySelectorAll('time[datetime]');
        timeElements.forEach(t => {
            const dt = t.getAttribute('datetime');
            if (dt) freshnessSignals.dates.push({ type: '<time> element', value: dt });
        });

        const ogPublished = doc.querySelector('meta[property="article:published_time"]');
        const ogModified = doc.querySelector('meta[property="article:modified_time"]');
        if (ogPublished) freshnessSignals.dates.push({ type: 'article:published_time (Open Graph)', value: ogPublished.getAttribute('content') || '' });
        if (ogModified) freshnessSignals.dates.push({ type: 'article:modified_time (Open Graph)', value: ogModified.getAttribute('content') || '' });

        freshnessSignals.hasFreshness = freshnessSignals.dates.length > 0;

        // --- CHUNK READINESS SCORE ---
        let chunkPoints = 0;
        const chunkLog: Array<{ pass: boolean; msg: string; why: string }> = [];
        const headedSections = sections.filter(s => s.tag !== 'NONE');

        // Check 6: Section Token Length
        if (headedSections.length === 0) {
            chunkLog.push({ pass: false, msg: "No heading-based sections found to evaluate.", why: "AI retrieval systems split your content at heading boundaries. Without headings, your content gets cut at arbitrary points, often breaking ideas mid-sentence." });
        } else {
            const longSections = headedSections.filter(s => s.tokenCount > 800);
            if (longSections.length === 0) {
                chunkPoints += 25;
                chunkLog.push({ pass: true, msg: `All ${headedSections.length} sections are under 800 tokens — good chunk size.`, why: "AI retrieval systems split pages into chunks. Sections over ~800 tokens get cut at unpredictable points, breaking ideas mid-thought. Compact sections survive chunking intact." });
            } else {
                const ratio = 1 - (longSections.length / headedSections.length);
                chunkPoints += Math.round(ratio * 25);
                chunkLog.push({ pass: false, msg: `${longSections.length} of ${headedSections.length} sections exceed 800 tokens.`, why: "AI retrieval systems split pages into chunks. Sections over ~800 tokens get cut at unpredictable points, breaking ideas mid-thought. Consider splitting long sections with sub-headings." });
            }
        }

        // Check 7: Heading Specificity
        if (headedSections.length === 0) {
            chunkLog.push({ pass: false, msg: "No headings to evaluate for specificity.", why: "AI systems prepend headings to chunks before creating embeddings. Specific, descriptive headings help AI match your content to the right user queries." });
        } else {
            const genericSections = headedSections.filter(s => s.isGeneric);
            if (genericSections.length === 0) {
                chunkPoints += 25;
                chunkLog.push({ pass: true, msg: "All headings are descriptive and specific.", why: "AI systems prepend headings to chunks before creating embeddings. Specific headings like 'How RAG Changes AI Search' create strong, targeted embeddings that match user queries well." });
            } else {
                const ratio = 1 - (genericSections.length / headedSections.length);
                chunkPoints += Math.round(ratio * 25);
                const examples = genericSections.slice(0, 2).map(s => `"${s.heading}"`).join(', ');
                chunkLog.push({ pass: false, msg: `${genericSections.length} headings are generic: ${examples}.`, why: "AI systems prepend headings to chunks before creating embeddings. A heading like 'Benefits' produces a weak, ambiguous embedding. Try 'Key Benefits of Semantic Markup for AI Retrieval' instead." });
            }
        }

        // Check 8: Freshness Signals
        const hasDateModified = freshnessSignals.dates.some(d => d.type.includes('dateModified') || d.type.includes('modified_time'));
        if (hasDateModified) {
            chunkPoints += 25;
            chunkLog.push({ pass: true, msg: "Machine-readable dateModified found — AI knows your content is current.", why: "AI retrieval systems use timestamps to rank and filter results. dateModified is especially valuable: it tells AI your content is actively maintained, not abandoned." });
        } else if (freshnessSignals.hasFreshness) {
            chunkPoints += 15;
            chunkLog.push({ pass: true, msg: "Some date signals found, but no dateModified.", why: "AI retrieval systems use timestamps to rank and filter results. You have publish dates, but adding dateModified tells AI your content is actively maintained and up-to-date." });
        } else {
            chunkLog.push({ pass: false, msg: "No machine-readable dates found.", why: "AI retrieval systems use timestamps to rank and filter results. Without dates in Schema.org, <time> tags, or Open Graph meta, AI cannot tell if your content is current or years outdated." });
        }

        // Check 9: Self-Containment
        if (headedSections.length === 0) {
            chunkLog.push({ pass: false, msg: "No sections to check for self-containment.", why: "When AI retrieves a chunk, it appears without surrounding context. Each section should open with enough context to make sense on its own." });
        } else {
            const danglingSections = headedSections.filter(s => s.hasDangling);
            if (danglingSections.length === 0) {
                chunkPoints += 25;
                chunkLog.push({ pass: true, msg: "All sections are self-contained — no dangling references.", why: "When AI retrieves a chunk, it appears without the rest of your page. Sections that stand alone (no 'This approach...' or 'As mentioned above...') make sense when retrieved independently." });
            } else {
                const ratio = 1 - (danglingSections.length / headedSections.length);
                chunkPoints += Math.round(ratio * 25);
                const examples = danglingSections.slice(0, 2).map(s => `"${s.heading}"`).join(', ');
                chunkLog.push({ pass: false, msg: `${danglingSections.length} sections start with dangling references: ${examples}.`, why: "When AI retrieves a chunk, it appears without the rest of your page. If a section opens with 'This approach...' or 'As mentioned above...', the retrieved chunk won't make sense on its own." });
            }
        }

        const chunkScore = headedSections.length > 0 ? Math.round(chunkPoints) : 0;

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
            rawHtml: content,
            url: sourceUrl,
            framework: detectedFramework,
            isLikelyCSR,
            semanticScore,
            auditLog,
            sections,
            freshnessSignals,
            chunkScore,
            chunkLog
        };
    } catch (error) {
        console.error(error);
        return null;
    }
  };

  const handleUrlFetch = async () => {
    if (!urlInput) return;

    setIsLoading(true);
    setFetchError(null);
    setAnalysis(null);
    setActiveTab('audit'); // Default to Audit view

    try {
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(urlInput)}`);
        const data = await response.json();

        if (data.contents) {
            setInputText(data.contents);
            const result = parseContent(data.contents, urlInput);
            setAnalysis(result);
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
          Load Demo Content
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
            <TabButton id="audit" icon={ShieldCheck} label="Semantic Audit" />
            <TabButton id="knowledge" icon={Database} label="Schema" />
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

                {/* TAB 1: SEMANTIC AUDIT */}
                {activeTab === 'audit' && (
                  <div className="space-y-6">

                    {/* Educational intro */}
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start">
                        <Info className="flex-shrink-0 text-blue-500 mr-3 mt-0.5" size={18} />
                        <div>
                            <h4 className="text-sm font-bold text-blue-900 mb-1 font-display">How AI Reads Your Page</h4>
                            <p className="text-xs text-blue-800 leading-relaxed">
                                AI systems don&apos;t see your website like humans do. They parse HTML structure to find content, extract text, split it into chunks, and store those chunks for retrieval. These checks evaluate whether your markup and content are optimized for that process.
                            </p>
                        </div>
                    </div>

                    {/* Semantic Health Score */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-brand-navy font-display">Semantic Health Score</h3>
                                <p className="text-sm text-gray-500">Does an AI truly understand your site&apos;s layout?</p>
                            </div>
                            <div className={`text-4xl font-extrabold ${analysis.semanticScore >= 80 ? 'text-green-600' : analysis.semanticScore >= 50 ? 'text-yellow-500' : 'text-red-500'}`}>
                                {analysis.semanticScore}/100
                            </div>
                        </div>

                        <div className="space-y-3">
                            {analysis.auditLog.map((item: any, i: number) => (
                                <div key={i} className={`flex items-start p-3 rounded border ${item.pass ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                                    <div className={`mr-3 mt-0.5 flex-shrink-0 ${item.pass ? 'text-green-600' : 'text-red-600'}`}>
                                        {item.pass ? <CheckCircle size={18} /> : <AlertTriangle size={18} />}
                                    </div>
                                    <div>
                                        <p className={`text-sm font-medium ${item.pass ? 'text-green-900' : 'text-red-900'}`}>
                                            {item.msg}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.why}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chunk Readiness Score */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                            <div>
                                <h3 className="text-xl font-bold text-brand-navy font-display flex items-center">
                                    <Scissors className="mr-2 text-brand-cyan" size={22} />
                                    Chunk Readiness Score
                                </h3>
                                <p className="text-sm text-gray-500">Will your content survive AI chunking intact?</p>
                            </div>
                            <div className={`text-4xl font-extrabold ${analysis.chunkScore >= 75 ? 'text-green-600' : analysis.chunkScore >= 40 ? 'text-yellow-500' : 'text-red-500'}`}>
                                {analysis.chunkScore}/100
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 mb-6">
                            Beyond structure, AI systems break your content into retrievable chunks. These checks evaluate whether your content will survive that chunking process with meaning intact.
                        </p>

                        <div className="space-y-3">
                            {analysis.chunkLog.map((item: any, i: number) => (
                                <div key={i} className={`flex items-start p-3 rounded border ${item.pass ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                                    <div className={`mr-3 mt-0.5 flex-shrink-0 ${item.pass ? 'text-green-600' : 'text-red-600'}`}>
                                        {item.pass ? <CheckCircle size={18} /> : <AlertTriangle size={18} />}
                                    </div>
                                    <div>
                                        <p className={`text-sm font-medium ${item.pass ? 'text-green-900' : 'text-red-900'}`}>
                                            {item.msg}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.why}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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
                                Structured Data (Schema.org) confirms facts like <strong>Events and Authors</strong> with 100% confidence. This is the highest-fidelity data source for AI — no extraction or guessing required.
                            </p>
                        </div>
                    </div>

                    {/* Freshness Signals */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-brand-navy font-display flex items-center">
                                <Clock className="mr-2 text-brand-cyan" size={20} />
                                Freshness Signals
                            </h3>
                            <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${analysis.freshnessSignals.hasFreshness ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {analysis.freshnessSignals.dates.length} Found
                            </span>
                        </div>

                        <p className="text-xs text-gray-500 mb-4">
                            AI retrieval systems use timestamps to decide if content is current. Without machine-readable dates, your content competes without a &quot;freshness&quot; advantage.
                        </p>

                        {analysis.freshnessSignals.dates.length > 0 ? (
                            <div className="space-y-2">
                                {analysis.freshnessSignals.dates.map((d: any, i: number) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded border">
                                        <div>
                                            <span className="text-xs font-mono text-gray-500">{d.type}</span>
                                        </div>
                                        <span className="text-sm font-semibold text-gray-800 font-mono">{d.value}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center p-6 text-gray-400 bg-gray-50 rounded border border-dashed border-gray-300">
                                <Clock size={24} className="mx-auto mb-2 opacity-50" />
                                <p className="text-sm">No machine-readable dates found.</p>
                                <p className="text-xs mt-1">Add <code className="bg-gray-200 px-1 rounded">datePublished</code> and <code className="bg-gray-200 px-1 rounded">dateModified</code> to your Schema.org markup.</p>
                            </div>
                        )}
                    </div>

                    {/* JSON-LD Objects */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-brand-navy font-display">JSON-LD Objects</h3>
                            <span className="px-2 py-1 rounded text-xs font-bold uppercase bg-gray-100 text-gray-600">
                                {analysis.jsonLd.length} Found
                            </span>
                        </div>

                        <p className="text-xs text-gray-500 mb-4">
                            JSON-LD is the preferred format for embedding structured data. Each object below represents a &quot;fact card&quot; that AI can read with 100% confidence — no parsing or guessing needed.
                        </p>

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

                {/* TAB 3: STRUCTURE */}
                {activeTab === 'structure' && (
                  <div className="space-y-6">

                    {/* Educational intro */}
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start">
                        <Info className="flex-shrink-0 text-blue-500 mr-3 mt-0.5" size={18} />
                        <div>
                            <h4 className="text-sm font-bold text-blue-900 mb-1 font-display">Sections as Retrieval Units</h4>
                            <p className="text-xs text-blue-800 leading-relaxed">
                                AI retrieval systems (RAG) break your content into chunks, typically at heading boundaries. Each chunk becomes an independent unit that can be retrieved and shown to an AI without any surrounding context. This view shows how your content would likely be split.
                            </p>
                        </div>
                    </div>

                    {/* Header Outline */}
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

                    {/* Section-by-Section Analysis */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-lg font-semibold mb-2 text-brand-navy font-display flex items-center">
                            <Scissors className="mr-2 text-brand-cyan" size={20} />
                            Section-by-Section Chunk Analysis
                        </h3>
                        <p className="text-xs text-gray-500 mb-4">
                            Each card below represents one chunk as an AI retrieval system would see it. Flags indicate potential problems when this chunk is retrieved on its own.
                        </p>

                        {analysis.sections.length > 0 ? (
                            <div className="space-y-3">
                                {analysis.sections.map((section: ContentSection, i: number) => (
                                    <div key={i} className={`border rounded-lg p-4 ${section.isGeneric || section.hasDangling || section.tokenCount > 800 ? 'border-yellow-300 bg-yellow-50/30' : 'border-gray-200'}`}>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center min-w-0">
                                                {section.tag !== 'NONE' && (
                                                    <span className="text-xs font-bold uppercase w-10 text-gray-400 flex-shrink-0">{section.tag}</span>
                                                )}
                                                <span className="font-medium text-gray-800 truncate">{section.heading}</span>
                                            </div>
                                            <span className={`text-sm font-mono flex-shrink-0 ml-3 ${section.tokenCount > 800 ? 'text-red-600 font-bold' : section.tokenCount > 500 ? 'text-yellow-600' : 'text-gray-500'}`}>
                                                {section.tokenCount} tokens
                                            </span>
                                        </div>

                                        {/* Flags */}
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            {section.tokenCount > 800 && (
                                                <span className="text-xs text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                                                    Long section — may be split unpredictably
                                                </span>
                                            )}
                                            {section.isGeneric && (
                                                <span className="text-xs text-yellow-700 bg-yellow-50 border border-yellow-200 px-2 py-0.5 rounded">
                                                    Generic heading — weak embedding signal
                                                </span>
                                            )}
                                            {section.hasDangling && (
                                                <span className="text-xs text-orange-700 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">
                                                    Dangling reference — won&apos;t stand alone
                                                </span>
                                            )}
                                        </div>

                                        {/* Text preview */}
                                        {section.text && (
                                            <p className="text-xs text-gray-400 truncate">{section.text.substring(0, 180)}{section.text.length > 180 ? '...' : ''}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center p-8 text-gray-400">
                                <p>No content sections detected.</p>
                            </div>
                        )}
                    </div>
                  </div>
                )}

                {/* TAB 4: TOKEN STREAM */}
                {activeTab === 'stream' && (
                  <div className="space-y-6">

                     {/* Educational intro */}
                     <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start">
                        <Info className="flex-shrink-0 text-blue-500 mr-3 mt-0.5" size={18} />
                        <div>
                            <h4 className="text-sm font-bold text-blue-900 mb-1 font-display">What Are Tokens?</h4>
                            <p className="text-xs text-blue-800 leading-relaxed">
                                AI models don&apos;t read words — they read <strong>tokens</strong>, which are roughly 4 characters or 3/4 of a word. Every token costs money to process. The &quot;noise ratio&quot; measures how much of your page&apos;s token budget is wasted on navigation, ads, and boilerplate instead of your actual content.
                            </p>
                        </div>
                     </div>

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
                                <div className="text-xs text-gray-400 mt-1">~{Math.ceil(analysis.charCount / 4)} characters &divide; 4</div>
                             </div>
                             <div>
                                <div className="text-xs text-gray-500 uppercase">Est. AI Cost</div>
                                <div className="text-xl font-semibold text-gray-800">${((analysis.tokenCount / 1000) * 0.03).toFixed(4)}</div>
                                <div className="text-xs text-gray-400 mt-1">At $0.03 / 1K tokens (GPT-4 rate)</div>
                             </div>
                        </div>
                     </div>

                     <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-lg font-semibold mb-2 font-display">Token Visualization</h3>
                        <p className="text-xs text-gray-500 mb-3">
                            Each highlighted word below approximates one or more tokens. This is the cleaned text that an AI actually processes after stripping navigation, ads, and boilerplate.
                        </p>
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

                    {/* Educational intro */}
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start">
                        <Info className="flex-shrink-0 text-blue-500 mr-3 mt-0.5" size={18} />
                        <div>
                            <h4 className="text-sm font-bold text-blue-900 mb-1 font-display">What Is RAG?</h4>
                            <p className="text-xs text-blue-800 leading-relaxed">
                                <strong>Retrieval-Augmented Generation (RAG)</strong> is how AI search engines like Perplexity, ChatGPT search, and Google AI Overviews work. They scrape your page, strip away everything except the core text, split it into chunks, and store those chunks for retrieval. This preview shows the &quot;clean text&quot; that survives that stripping process.
                            </p>
                        </div>
                    </div>

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
                                            Your content is hidden inside JavaScript. Basic AI crawlers cannot see this. This is called Client-Side Rendering (CSR) — the HTML sent from the server is mostly empty, and JavaScript fills in the content after the page loads. Most AI crawlers don&apos;t execute JavaScript.
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
