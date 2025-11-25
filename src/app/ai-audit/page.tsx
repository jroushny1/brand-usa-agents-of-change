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
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

export default function AIAuditPage() {
  // Changed default tab to 'knowledge' (Schema) as requested
  const [activeTab, setActiveTab] = useState('knowledge');
  const [inputMode, setInputMode] = useState('html'); // 'html', 'text', or 'url'
  const [inputText, setInputText] = useState('');
  const [urlInput, setUrlInput] = useState('');

  const [analysis, setAnalysis] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Sample HTML for demo
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
      "author": { "@type": "Person", "name": "Sarah Connor" }
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
            </ul>
            <div class="ad-banner"><span>Buy our new AI Coffee Maker! Only $99.99</span></div>
            <p>Contact us for more info.</p>
        </article>
    </main>
    <footer><p>&copy; 2024 TechDaily.</p></footer>
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
    setActiveTab('knowledge');
  };

  const parseContent = (content: string, sourceUrl = '') => {
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');

        // 1. Raw Text Extraction (Total Characters)
        const rawText = doc.body ? doc.body.textContent : content;
        const cleanRawText = rawText.replace(/\s+/g, ' ').trim();
        const charCount = cleanRawText.length;
        const tokenCount = Math.ceil(charCount / 4);

        // 2. Extract Headers
        const headers = Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
            tag: h.tagName,
            text: h.textContent
        }));

        // 3. RAG/Content Extraction (Cleaning the Noise)
        const clone = doc.cloneNode(true) as Document;
        const irrelevantTags = ['nav', 'footer', 'script', 'style', 'noscript', 'iframe', 'svg'];
        irrelevantTags.forEach(tag => {
            const elements = clone.querySelectorAll(tag);
            elements.forEach(el => el.remove());
        });
        const noisyClasses = ['ad', 'banner', 'menu', 'sidebar', 'cookie', 'popup', 'nav', 'social', 'widget'];
        noisyClasses.forEach(cls => {
            const elements = clone.querySelectorAll(`[class*="${cls}"]`);
            elements.forEach(el => el.remove());
        });

        let coreContent = clone.body ? clone.body.innerHTML : content;
        const tmp = document.createElement('DIV');
        tmp.innerHTML = coreContent;
        const ragText = tmp.textContent || tmp.innerText || "";
        const ragTextClean = ragText.replace(/\s+/g, ' ').trim();
        const usefulCharCount = ragTextClean.length;

        // Calculate Noise Ratio (Clamped 0-100)
        // If useful > raw (rare, but possible with some encoding), noise is 0.
        let noiseRatio = 0;
        if (charCount > 0) {
            noiseRatio = Math.round((1 - (usefulCharCount / charCount)) * 100);
        }
        noiseRatio = Math.max(0, Math.min(100, noiseRatio));

        // 4. Image Analysis
        const images = Array.from(doc.querySelectorAll('img')).map(img => ({
            src: img.getAttribute('src'),
            alt: img.getAttribute('alt') || "MISSING ALT TEXT",
            hasAlt: !!img.getAttribute('alt') && img.getAttribute('alt')!.trim().length > 0
        }));

        // 5. Schema/Meta
        const metaTitle = doc.querySelector('title')?.textContent;
        const metaDesc = doc.querySelector('meta[name="description"]')?.getAttribute('content');
        const jsonLd = Array.from(doc.querySelectorAll('script[type="application/ld+json"]')).map(s => {
            try { return JSON.parse(s.textContent || ''); } catch (e) { return "Invalid JSON-LD"; }
        });

        return {
            tokenCount,
            charCount,
            usefulCharCount,
            noiseRatio,
            headers,
            ragText: ragTextClean,
            images,
            meta: { title: metaTitle, description: metaDesc },
            jsonLd,
            rawHtml: content,
            url: sourceUrl
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
    setActiveTab('knowledge'); // Reset to first tab

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
                        className={`w-full py-3 rounded-lg font-medium text-white flex items-center justify-center ${isLoading || !urlInput ? 'bg-brand-cyan/40 cursor-not-allowed' : 'bg-brand-cyan hover:bg-brand-blue'}`}
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
            <TabButton id="knowledge" icon={Database} label="1. Schema" />
            <TabButton id="structure" icon={Type} label="2. Structure" />
            <TabButton id="images" icon={ImageIcon} label="3. Visuals" />
            <TabButton id="stream" icon={Activity} label="4. Token Stream" />
            <TabButton id="rag" icon={FileText} label="5. RAG Context" />
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

                {/* TAB 1: SCHEMA (Knowledge) */}
                {activeTab === 'knowledge' && (
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-start">
                        <Info className="flex-shrink-0 text-blue-500 mr-3 mt-1" size={20} />
                        <div>
                            <h3 className="text-sm font-bold text-blue-900 mb-1">Why Schema Matters</h3>
                            <p className="text-sm text-blue-800 leading-relaxed">
                                Structured Data (Schema.org) is the language of facts. AI uses this layer to confirm details like <strong>Events, Products, and Authors</strong> with 100% confidence. Without this, the AI is just guessing based on your text.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 font-display">Structured Data (JSON-LD)</h3>
                            <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${analysis.jsonLd.length > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {analysis.jsonLd.length} Objects Found
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
                            <div className="flex flex-col items-center justify-center p-8 bg-gray-50 border border-dashed rounded-lg">
                                <AlertTriangle className="text-yellow-500 mb-2" size={24} />
                                <p className="text-gray-600 font-medium">No Schema Markup Found</p>
                                <p className="text-gray-400 text-sm text-center mt-1">
                                    Your site is missing the &quot;Knowledge Layer&quot; that AI relies on.
                                </p>
                            </div>
                        )}
                    </div>
                  </div>
                )}

                {/* TAB 2: STRUCTURE */}
                {activeTab === 'structure' && (
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 font-display">Semantic Hierarchy</h3>
                        <p className="text-sm text-gray-500 mb-4">AI reads your headers (H1-H6) to understand your article&apos;s outline.</p>
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
                                    No header tags (H1-H6) found.
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 font-display">Meta Tags</h3>
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

                {/* TAB 3: VISUALS */}
                {activeTab === 'images' && (
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center font-display">
                        <ImageIcon className="mr-2 text-purple-500" size={20}/>
                        Image Accessibility (Alt Text)
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">
                        Non-vision AI models are &quot;blind.&quot; They can only &quot;see&quot; your images if you provide descriptive <code>alt</code> text.
                    </p>
                    <div className="space-y-3">
                        {analysis.images.length > 0 ? (
                            analysis.images.map((img: any, i: number) => (
                                <div key={i} className="flex items-start p-3 border rounded-lg bg-gray-50">
                                    <div className="h-12 w-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0 text-gray-400 overflow-hidden relative">
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

                {/* TAB 4: TOKEN STREAM (With Noise Scorecard) */}
                {activeTab === 'stream' && (
                  <div className="space-y-6">
                     <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center font-display">
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
                        <h3 className="text-lg font-semibold mb-3 flex items-center font-display">
                            <Activity className="mr-2 text-brand-cyan" size={20}/>
                            Token Visualization
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            This is how the AI &quot;reads&quot; your page. Each colored block is a token (a chunk of text). If your Noise Ratio is high, you are paying for tokens that don&apos;t help the AI understand your content.
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
                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-100 flex items-start">
                        <Zap className="flex-shrink-0 text-purple-500 mr-3 mt-1" size={20} />
                        <div>
                            <h3 className="text-sm font-bold text-purple-900 mb-1">What is &quot;RAG&quot;?</h3>
                            <p className="text-sm text-purple-800 leading-relaxed">
                                <strong>R</strong>etrieval-<strong>A</strong>ugmented <strong>G</strong>eneration is how bots like ChatGPT or Perplexity read the web. They strip away your design, ads, and navigation to find the &quot;pure&quot; text.
                            </p>
                            <p className="text-sm text-purple-800 mt-2 font-medium">
                                If the box below looks clean (like a newspaper article), your site is AI-Ready. If it contains menu items, &quot;Buy Now&quot; buttons, or code, the AI will get confused.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 max-w-3xl">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 border-b pb-2 font-display">
                            Clean Context Preview
                        </h3>
                        <div className="prose prose-sm max-w-none text-gray-800 whitespace-pre-line font-serif leading-relaxed">
                            {analysis.ragText}
                        </div>
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
