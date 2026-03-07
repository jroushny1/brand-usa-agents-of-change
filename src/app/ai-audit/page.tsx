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
  BarChart
} from 'lucide-react';
import Link from 'next/link';

export default function AIAuditPage() {
  const [activeTab, setActiveTab] = useState('audit');
  const [inputMode, setInputMode] = useState('html');
  const [inputText, setInputText] = useState('');
  const [urlInput, setUrlInput] = useState('');

  const [analysis, setAnalysis] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

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

        // --- SEMANTIC HEALTH CHECK (The "Gold" Test) ---
        let semanticPoints = 0;
        let totalSemanticChecks = 0;
        const auditLog: Array<{ pass: boolean; msg: string }> = [];

        // Check 1: Landmarks
        const hasMain = doc.querySelector('main');
        const hasNav = doc.querySelector('nav');
        const hasHeader = doc.querySelector('header');
        const hasFooter = doc.querySelector('footer');
        const landmarkCount = [hasMain, hasNav, hasHeader, hasFooter].filter(Boolean).length;

        if (landmarkCount >= 3) {
            semanticPoints += 20;
            auditLog.push({ pass: true, msg: "Excellent use of Landmarks (<main>, <nav>, etc.)" });
        } else if (landmarkCount > 0) {
            semanticPoints += 10;
            auditLog.push({ pass: true, msg: "Some Landmarks found, but could be better." });
        } else {
            auditLog.push({ pass: false, msg: "Missing Landmarks (AI struggles to find the main content)." });
        }
        totalSemanticChecks += 20;

        // Check 2: Heading Hierarchy
        const h1 = doc.querySelectorAll('h1').length;
        if (h1 === 1) {
            semanticPoints += 20;
            auditLog.push({ pass: true, msg: "Perfect Heading Structure (One H1)." });
        } else if (h1 > 1) {
            semanticPoints += 10;
            auditLog.push({ pass: false, msg: "Multiple H1 tags found (Confusing for AI)." });
        } else {
            auditLog.push({ pass: false, msg: "No H1 tag found." });
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
            auditLog.push({ pass: true, msg: "Navigation links are correctly structured in Lists." });
        } else if (listRatio > 0.3) {
            semanticPoints += 10;
            auditLog.push({ pass: false, msg: "Some nav links are missing List structure (<ul><li>)." });
        } else {
            if (navLinks.length > 0) {
                auditLog.push({ pass: false, msg: "Navigation links found floating in Divs (Div Soup)." });
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
            auditLog.push({ pass: true, msg: "Images have Alt Text (High Accessibility)." });
        } else {
            semanticPoints += Math.round(altRatio * 20);
            auditLog.push({ pass: false, msg: `${images.length - imagesWithAlt.length} images missing Alt Text.` });
        }
        totalSemanticChecks += 20;

        // Check 5: Schema
        const schemas = doc.querySelectorAll('script[type="application/ld+json"]');
        if (schemas.length > 0) {
            semanticPoints += 20;
            auditLog.push({ pass: true, msg: "Schema.org Structured Data detected." });
        } else {
            auditLog.push({ pass: false, msg: "No Structured Data (Knowledge Graph) found." });
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
            auditLog
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

                {/* TAB 1: SEMANTIC AUDIT (NEW) */}
                {activeTab === 'audit' && (
                  <div className="space-y-6">
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
                                    <div className={`mr-3 mt-0.5 ${item.pass ? 'text-green-600' : 'text-red-600'}`}>
                                        {item.pass ? <CheckCircle size={18} /> : <AlertTriangle size={18} />}
                                    </div>
                                    <div>
                                        <p className={`text-sm font-medium ${item.pass ? 'text-green-900' : 'text-red-900'}`}>
                                            {item.msg}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* What This Means — plain-English interpretation */}
                    <div className={`p-5 rounded-lg border ${analysis.semanticScore >= 80 ? 'bg-green-50 border-green-200' : analysis.semanticScore >= 50 ? 'bg-yellow-50 border-yellow-200' : 'bg-red-50 border-red-200'}`}>
                        <h4 className="text-sm font-bold text-gray-900 mb-2 font-display flex items-center">
                            <Zap size={16} className="mr-2" />
                            What This Means for AI Discovery
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            {analysis.semanticScore >= 80
                                ? "This site is well-structured for AI. Travel planners like ChatGPT and Perplexity can easily identify the main content, understand the page hierarchy, and extract useful facts. Structured data gives AI systems high-confidence answers about this destination."
                                : analysis.semanticScore >= 50
                                ? "An AI travel planner can extract some useful content from this site, but key signals are missing. Without clear landmarks or structured data, AI systems have to guess which content matters \u2014 and they often guess wrong. The fixes above would make a measurable difference in how often this destination surfaces in AI-generated travel plans."
                                : "An AI travel planner would struggle with this site. The core content \u2014 events, attractions, hours, recommendations \u2014 is buried in unstructured markup that AI systems have difficulty parsing. When a traveler asks an AI to plan a trip here, the AI is likely pulling from third-party sources instead of this official site."
                            }
                        </p>
                    </div>

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
