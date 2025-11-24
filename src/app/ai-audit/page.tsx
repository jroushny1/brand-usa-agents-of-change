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
  AlertCircle,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AIAuditPage() {
  const [activeTab, setActiveTab] = useState('stream');
  const [inputMode, setInputMode] = useState('html'); // 'html', 'text', or 'url'
  const [inputText, setInputText] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [analysis, setAnalysis] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Sample HTML for demo purposes
  const demoHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>The Future of Artificial Intelligence - TechDaily</title>
    <meta name="description" content="An in-depth look at how neural networks are reshaping industries.">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Future of AI",
      "author": {
        "@type": "Person",
        "name": "Sarah Connor"
      }
    }
    </script>
</head>
<body>
    <nav>
        <a href="/">Home</a> | <a href="/news">News</a> | <a href="/login">Login</a>
    </nav>
    <main>
        <article>
            <h1>The Future of Artificial Intelligence</h1>
            <img src="robot.jpg" alt="A humanoid robot shaking hands with a human engineer" />
            <p><strong>Artificial Intelligence (AI)</strong> is evolving rapidly. Large Language Models (LLMs) are changing how we process information.</p>

            <h2>Key Challenges</h2>
            <ul>
                <li>Compute Costs</li>
                <li>Data Privacy</li>
                <li>Hallucinations</li>
            </ul>

            <div class="ad-banner">
                <span>Buy our new AI Coffee Maker! Only $99.99</span>
            </div>

            <p>In conclusion, the synergy between humans and machines is inevitable. <a href="/contact">Contact us</a> for more info.</p>
        </article>
    </main>
    <footer>
        <p>&copy; 2024 TechDaily. All rights reserved. <a href="/privacy">Privacy Policy</a></p>
    </footer>
</body>
</html>`;

  useEffect(() => {
    if (inputMode !== 'url') {
        if (!inputText) {
            setAnalysis(null);
            return;
        }
        analyzeContent(inputText);
    }
  }, [inputText, inputMode]);

  const loadDemo = () => {
    setInputMode('html');
    setInputText(demoHTML);
    setFetchError(null);
  };

  const handleUrlFetch = async () => {
    if (!urlInput) return;

    setIsLoading(true);
    setFetchError(null);
    setAnalysis(null);

    try {
        // Use allorigins.win as a CORS proxy to fetch external content
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(urlInput)}`);
        const data = await response.json();

        if (data.contents) {
            setInputText(data.contents); // Store the fetched HTML
            analyzeContent(data.contents);
        } else {
            throw new Error("Could not retrieve content. The site might block proxies.");
        }
    } catch (err) {
        setFetchError("Failed to fetch website. Some sites block automated tools. Please copy/paste the source code manually.");
        console.error(err);
    } finally {
        setIsLoading(false);
    }
  };

  const analyzeContent = (content: string) => {
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');

        // 1. Token Estimation (Rough approx: 1 token ~= 4 chars)
        const rawText = doc.body ? doc.body.textContent : content;
        const cleanText = rawText.replace(/\s+/g, ' ').trim();
        const charCount = cleanText.length;
        const tokenCount = Math.ceil(charCount / 4);

        // 2. Extract Structure (Headers)
        const headers = Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
        tag: h.tagName,
        text: h.textContent
        }));

        // 3. RAG/Content Extraction (Heuristic: Remove nav, footer, scripts, styles)
        const clone = doc.cloneNode(true) as Document;
        const irrelevantTags = ['nav', 'footer', 'script', 'style', 'noscript', 'iframe', 'svg'];
        irrelevantTags.forEach(tag => {
        const elements = clone.querySelectorAll(tag);
        elements.forEach(el => el.remove());
        });
        // Remove elements with class names usually associated with ads/nav
        const noisyClasses = ['ad', 'banner', 'menu', 'sidebar', 'cookie', 'popup', 'nav', 'social'];
        noisyClasses.forEach(cls => {
        const elements = clone.querySelectorAll(`[class*="${cls}"]`);
        elements.forEach(el => el.remove());
        });

        let coreContent = clone.body ? clone.body.innerHTML : content;
        // Strip HTML tags for the text view
        const tmp = document.createElement('DIV');
        tmp.innerHTML = coreContent;
        const ragText = tmp.textContent || tmp.innerText || "";
        const ragTextClean = ragText.replace(/\s+/g, ' ').trim();

        // 4. Image Analysis (Alt Text)
        const images = Array.from(doc.querySelectorAll('img')).map(img => ({
        src: img.getAttribute('src'),
        alt: img.getAttribute('alt') || "MISSING ALT TEXT",
        hasAlt: !!img.getAttribute('alt')
        }));

        // 5. Schema/Meta Extraction
        const metaTitle = doc.querySelector('title')?.textContent;
        const metaDesc = doc.querySelector('meta[name="description"]')?.getAttribute('content');
        const jsonLd = Array.from(doc.querySelectorAll('script[type="application/ld+json"]')).map(s => {
        try {
            return JSON.parse(s.textContent || '');
        } catch (e) {
            return "Invalid JSON-LD";
        }
        });

        setAnalysis({
        tokenCount,
        charCount,
        headers,
        ragText: ragTextClean,
        images,
        meta: { title: metaTitle, description: metaDesc },
        jsonLd,
        rawHtml: content
        });
    } catch (error) {
        setFetchError("Error parsing content. Please try pasting the text directly.");
    }
  };

  const TabButton = ({ id, icon: Icon, label }: { id: string, icon: any, label: string }) => (
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
      <header className="bg-white shadow-sm border-b px-6 py-4 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center text-brand-navy hover:text-brand-cyan transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-3">
              <div className="bg-brand-cyan p-2 rounded-lg text-white">
                <Cpu size={24} />
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-gray-900">AI Vision Simulator</h1>
                <p className="text-xs text-gray-500">See your content through the eyes of an LLM</p>
              </div>
            </div>
          </div>
          <button
            onClick={loadDemo}
            className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md transition-colors"
          >
            Load Demo Content
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel: Input */}
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
                        className={`w-full py-3 rounded-lg font-medium text-white flex items-center justify-center ${isLoading || !urlInput ? 'bg-brand-cyan/40 cursor-not-allowed' : 'bg-brand-cyan hover:bg-brand-blue'}`}
                    >
                        {isLoading ? <Loader className="animate-spin mr-2" size={18} /> : null}
                        {isLoading ? 'Fetching...' : 'Analyze Website'}
                    </button>

                    <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800 border border-blue-100">
                        <p className="flex items-start">
                            <AlertCircle size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                                <strong>Note:</strong> We use a public proxy to fetch URLs. Some sites (like Google, Facebook, or those with strict firewalls) may block this. If it fails, please use the <strong>HTML</strong> tab and paste the source code manually.
                            </span>
                        </p>
                    </div>
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

          <div className="p-3 border-t bg-gray-50 text-xs text-gray-500 text-center">
            {inputMode === 'url' ? 'Enter a public URL to analyze' : 'Paste content to generate analysis'}
          </div>
        </div>

        {/* Right Panel: Output */}
        <div className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
          {/* Tabs */}
          <div className="bg-white border-b flex overflow-x-auto">
            <TabButton id="stream" icon={Activity} label="Token Stream" />
            <TabButton id="rag" icon={FileText} label="RAG Context" />
            <TabButton id="structure" icon={Type} label="Structure" />
            <TabButton id="images" icon={ImageIcon} label="Visuals" />
            <TabButton id="knowledge" icon={Database} label="Schema" />
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-6">
            {!analysis && !isLoading ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <Eye size={48} className="mb-4 opacity-50" />
                <p className="text-lg">Waiting for content...</p>
                <p className="text-sm">Enter a URL or paste code to begin.</p>
              </div>
            ) : isLoading ? (
                <div className="flex flex-col items-center justify-center h-full text-brand-cyan">
                    <Loader size={48} className="animate-spin mb-4" />
                    <p className="text-lg font-medium">Analyzing Website...</p>
                    <p className="text-sm text-gray-500">Parsing structure, tokens, and metadata.</p>
                </div>
            ) : (
              <div className="max-w-4xl mx-auto space-y-6">

                {/* 1. Token Stream View */}
                {activeTab === 'stream' && (
                  <div className="space-y-4">
                     <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <div className="text-xs text-gray-500 uppercase">Estimated Tokens</div>
                            <div className="text-2xl font-bold text-brand-cyan">{analysis.tokenCount.toLocaleString()}</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <div className="text-xs text-gray-500 uppercase">Est. Cost (GPT-4 Input)</div>
                            <div className="text-2xl font-bold text-green-600">${((analysis.tokenCount / 1000) * 0.03).toFixed(4)}</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <div className="text-xs text-gray-500 uppercase">Characters</div>
                            <div className="text-2xl font-bold text-gray-700">{analysis.charCount.toLocaleString()}</div>
                        </div>
                     </div>

                     <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-lg font-semibold mb-3 flex items-center font-display">
                            <Activity className="mr-2 text-brand-cyan" size={20}/>
                            How LLMs &quot;Read&quot; This
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            LLMs process text in chunks called tokens. Below is a simulation of the text stream the AI receives after stripping code tags.
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

                {/* 2. RAG View */}
                {activeTab === 'rag' && (
                  <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 max-w-3xl">
                    <h3 className="text-lg font-semibold mb-1 flex items-center text-gray-900 font-display">
                        <FileText className="mr-2 text-indigo-500" size={20}/>
                        The &quot;Clean&quot; Context
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">
                        This is what retrieval systems (RAG) usually feed to an AI chatbot. Notice that navigation, footers, and ads are (mostly) gone.
                    </p>
                    <div className="prose prose-sm max-w-none text-gray-800 whitespace-pre-line">
                        {analysis.ragText}
                    </div>
                  </div>
                )}

                {/* 3. Structure View */}
                {activeTab === 'structure' && (
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 font-display">Semantic Hierarchy</h3>
                        <div className="space-y-2">
                            {analysis.headers.length > 0 ? (
                                analysis.headers.map((h: any, i: number) => (
                                    <div key={i} className={`flex items-center p-2 rounded ${h.tag === 'H1' ? 'bg-blue-50 border-l-4 border-brand-cyan' : 'bg-gray-50 border-l-4 border-gray-300'} ml-${(parseInt(h.tag[1]) - 1) * 4}`}>
                                        <span className="text-xs font-bold uppercase w-12 text-gray-500">{h.tag}</span>
                                        <span className="font-medium text-gray-800">{h.text}</span>
                                    </div>
                                ))
                            ) : (
                                <div className="text-yellow-600 flex items-center p-4 bg-yellow-50 rounded">
                                    <AlertTriangle className="mr-2" size={18} />
                                    No header tags (H1-H6) found. AI relies on these to understand importance.
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 font-display">Meta Data</h3>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="p-3 bg-gray-50 rounded">
                                <span className="text-xs font-bold text-gray-400 uppercase block mb-1">Page Title</span>
                                <div className="text-gray-800 font-medium">{analysis.meta.title || <span className="text-red-400 italic">Missing Title</span>}</div>
                            </div>
                            <div className="p-3 bg-gray-50 rounded">
                                <span className="text-xs font-bold text-gray-400 uppercase block mb-1">Meta Description</span>
                                <div className="text-gray-800">{analysis.meta.description || <span className="text-red-400 italic">Missing Description</span>}</div>
                            </div>
                        </div>
                    </div>
                  </div>
                )}

                {/* 4. Images View */}
                {activeTab === 'images' && (
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center font-display">
                        <ImageIcon className="mr-2 text-purple-500" size={20}/>
                        Image Accessibility (Alt Text)
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">
                        If an AI model isn&apos;t &quot;multimodal&quot; (able to see images), it relies 100% on the text below to know what an image contains.
                    </p>

                    <div className="space-y-3">
                        {analysis.images.length > 0 ? (
                            analysis.images.map((img: any, i: number) => (
                                <div key={i} className="flex items-start p-3 border rounded-lg bg-gray-50">
                                    <div className="h-12 w-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0 text-gray-400 overflow-hidden relative">
                                        {/* Try to show preview if src is absolute, else show icon */}
                                        {img.src && img.src.startsWith('http') ? (
                                            <img src={img.src} className="w-full h-full object-cover opacity-50" alt="" />
                                        ) : (
                                            <ImageIcon size={20} />
                                        )}
                                    </div>
                                    <div className="ml-4 flex-1">
                                        <div className="text-xs font-mono text-gray-400 mb-1 break-all">{img.src}</div>
                                        {img.hasAlt ? (
                                            <div className="flex items-center text-green-700 font-medium bg-green-50 px-2 py-1 rounded w-fit">
                                                <CheckCircle size={14} className="mr-2" />
                                                &quot;{img.alt}&quot;
                                            </div>
                                        ) : (
                                            <div className="flex items-center text-red-600 font-medium bg-red-50 px-2 py-1 rounded w-fit">
                                                <AlertTriangle size={14} className="mr-2" />
                                                Missing Alt Text
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-gray-500 italic p-4 text-center">No images found in the input.</div>
                        )}
                    </div>
                  </div>
                )}

                {/* 5. Knowledge Graph View */}
                {activeTab === 'knowledge' && (
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center font-display">
                        <Database className="mr-2 text-orange-500" size={20}/>
                        Structured Data (JSON-LD)
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">
                        This is the raw data layer. AI uses this to fact-check your content and understand entities (People, Products, etc.).
                    </p>

                    {analysis.jsonLd.length > 0 ? (
                        analysis.jsonLd.map((data: any, i: number) => (
                            <div key={i} className="mb-4">
                                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs font-mono">
                                    {JSON.stringify(data, null, 2)}
                                </pre>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center p-8 bg-gray-50 border border-dashed rounded-lg">
                            <AlertTriangle className="text-yellow-500 mb-2" size={24} />
                            <p className="text-gray-600 font-medium">No Schema Markup Found</p>
                            <p className="text-gray-400 text-sm text-center mt-1">
                                AI agents struggle to trust content without Schema.org markup.
                            </p>
                        </div>
                    )}
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
