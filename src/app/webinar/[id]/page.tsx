'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Download, Clock, BookOpen } from 'lucide-react'
import HLSPlayer from './hls-player'

// This would come from your database
const webinarData = {
  'intro-ai-agents': {
    id: 'intro-ai-agents',
    title: 'Introduction to AI Agents',
    description: 'Learn how AI agents can transform your DMO operations with practical examples and implementation strategies. This comprehensive introduction covers the four types of AI agents (Operator, Researcher, Builder, and Automator), demonstrates real-world tools, and explores the future of agentic AI in destination marketing.',
    duration: '38 min',
    muxPlaybackId: '3TPl1Jgmg01b9BdEXU4WVtJbz4DSetOA7TsyHGvjxJQs',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'AI agents are goal-oriented software that can plan and execute multi-step tasks. They can be categorized into four main "buckets": Operators (who "use the mouse for you"), Researchers (who perform deep analysis), Builders (who create digital products from text), and Automators (who connect different apps).',
      'Practical, accessible tools already exist for non-technical users to leverage AI agents, such as using Lovable.ai to build a website from a prompt or using Agent.ai to create a workflow that analyzes LinkedIn profiles for sales intelligence.',
      'Agents still suffer from hallucinations (e.g., fabricating a business in a research task). The solution is connecting them to a "source of truth"—a verified database—using technologies like Model Context Protocol (MCP), which allows AI to pull real-time, accurate data for tasks like planning accessible travel routes or finding venue capacities.',
      'The future of work will involve employees acting as "strategic directors" of AI agent "swarms." For example, a DMO manager could deploy multiple agents to track local sentiment, draft stakeholder emails, and customize economic impact reports, freeing humans to focus on relationships and strategy.',
      'When using free AI tools, especially from foreign companies (like Manus.im), remember the adage: "If something\'s free, we are the product." Be cautious about inputting confidential or proprietary work information.'
    ],
    topics: [
      'AI Agents',
      'Agentic AI',
      'Brand USA',
      'AI in Tourism',
      'Destination Marketing Organization (DMO)',
      'Operator Agents',
      'Researcher Agents',
      'Builder Agents',
      'Automator Agents',
      'Workflow Automation',
      'AI Hallucinations',
      'Model Context Protocol (MCP)',
      'Source of Truth (for AI)',
      'Lead Generation',
      'Sales Intelligence',
      'Web Scraping',
      'No-Code AI Tools',
      'Future of Work',
      'Data Privacy',
      'Pika.art',
      'Browse.ai',
      'Lovable.ai',
      'Claude Artifacts',
      'N8N',
      'Agent.ai',
      'Google Gemini Gems',
      'Custom GPTs'
    ],
    targetAudience: {
      primary: 'Destination Marketing Organization (DMO) professionals',
      secondary: 'Tourism, travel, and hospitality industry leaders, Marketing and sales professionals (especially B2B), Business strategists and innovation officers, Non-technical professionals seeking to use AI for practical tasks',
      tertiary: 'Meeting and event planners'
    },
    learningOutcomes: [
      'Define what an AI agent is and distinguish it from a standard chatbot.',
      'Categorize the four main types of AI agents (Operator, Researcher, Builder, Automator) and their functions.',
      'Identify specific, real-world tools to perform agentic tasks like lead generation (ChatGPT), web scraping (Browse.ai), website creation (Lovable.ai), and workflow automation (Agent.ai).',
      'Understand the current limitations of AI agents, such as hallucination, and the importance of using a "source of truth" like a Model Context Protocol (MCP) database.',
      'Envision the near-future of work where employees will manage "swarms" of AI agents to automate complex tasks, shifting the human role toward strategy and oversight.'
    ],
    relatedResources: [
      { name: 'Pika.art', description: 'Attention-getting graphics generator', url: 'https://pika.art' },
      { name: 'Manus.im', description: 'Operator agent for creative generation', url: 'https://manus.im' },
      { name: 'Browse.ai', description: 'Operator agent for web scraping', url: 'https://browse.ai' },
      { name: 'Lovable', description: 'Builder agent for website creation', url: 'https://lovable.dev' },
      { name: 'Claude (by Anthropic)', description: 'Builder agent with Artifacts feature', url: 'https://claude.ai' },
      { name: 'N8N', description: 'Automator agent for AI-powered workflows', url: 'https://n8n.io' },
      { name: 'Agent.ai', description: 'Automator agent for building sales intelligence agents', url: 'https://agent.ai' },
      { name: 'Ethan Mollick', description: 'Expert on Claude Artifacts examples', url: 'https://www.linkedin.com/in/emollick/' },
      { name: 'HubSpot', description: 'CRM platform, origin of Agent.ai co-founder', url: 'https://www.hubspot.com' }
    ],
    chapters: [
      { time: 0, title: 'Introduction & Brand USA\'s AI Agenda' },
      { time: 46, title: 'What is an AI Agent? (Software that can understand and achieve a goal)' },
      { time: 70, title: 'The Four Buckets of AI Agents' },
      { time: 94, title: 'Bucket 1: Operator Agents' },
      { time: 118, title: 'Example: Using ChatGPT for DMO lead generation' },
      { time: 158, title: 'Warning: AI agents still hallucinate' },
      { time: 199, title: 'Example: Using Manus.im for creative generation' },
      { time: 266, title: 'Example: Using Browse.ai for web scraping' },
      { time: 337, title: 'Bucket 2: Researcher Agents' },
      { time: 365, title: 'Example: Deep research for a competitive analysis (30 NTOs)' },
      { time: 408, title: 'Bucket 3: Builder Agents' },
      { time: 416, title: 'Example: Building a registration website with Lovable' },
      { time: 464, title: 'Example: Building mini-apps with Claude Artifacts' },
      { time: 504, title: 'Bucket 4: Automator Agents' },
      { time: 511, title: 'Example: N8N for AI-powered workflows' },
      { time: 540, title: 'Demo: Building a sales intelligence agent with Agent.ai' },
      { time: 644, title: 'Example: Automating daily briefs with Google Gemini Gems' },
      { time: 707, title: 'The Future of Work: "Swarms" of Agents' },
      { time: 764, title: 'Empowering humans to do "the people part of the job"' },
      { time: 797, title: 'The Core Problem: Agents Need a "Source of Truth"' },
      { time: 811, title: 'The Core Solution: Model Context Protocol (MCP)' },
      { time: 844, title: 'MCP Application: Accessibility (Curb Cut Database)' },
      { time: 866, title: 'MCP Application: DMOs (Venue Capacity Database)' },
      { time: 910, title: 'Brand USA\'s AI Mantras for Learning' },
    ],
  },
  'ai-101': {
    id: 'ai-101',
    title: 'AI 101',
    description: 'Foundation concepts of AI for tourism professionals. This comprehensive introduction covers how Large Language Models work, practical prompting strategies, campaign strategy development, AI governance and security, and hands-on ChatGPT setup. Perfect for beginners looking to understand AI fundamentals and start using AI tools professionally.',
    duration: '45 min',
    muxPlaybackId: 'ue02eduy5uif9Do00iXI6jG02u02O600tu00FauvIOLX2Ayg8',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'AI is a creative partner, not a fact database. Large Language Models (LLMs) are math-based algorithms that predict the next word; they are not "checking Wikipedia." This means they will "hallucinate" (make things up) and users are responsible for fact-checking.',
      'The best AI prompting is a step-by-step process. Instead of asking for a final product at once (like "write a 6-page paper"), you should break the task into components: ask for thesis statements, then an outline, and then refine each section.',
      '"Priming the prompt" is key to getting factual results. To avoid hallucinations in complex tasks like campaign strategy, you must provide your own "source of truth"—upload your own research (from Google, Perplexity, or documents) into tools like Google NotebookLM or ChatGPT for the AI to analyze.',
      'AI governance is non-negotiable for professional use. Organizations must create AI guidelines, starting with using paid accounts to turn off model training ("Improve the model for everyone"). This prevents proprietary, confidential, or PII (Personally Identifiable Information) from being absorbed into future models, which is a major security and privacy (GDPR) risk.',
      'Start using AI now, even imperfectly. The best way for non-technical users to learn is through daily, practical experimentation (a "bottom-up" approach). Don\'t wait for a "perfect use case"; use it for small tasks like rephrasing emails or writing Excel formulas to build the skills needed to tackle bigger problems.'
    ],
    topics: [
      'Generative AI',
      'Large Language Models (LLMs)',
      'ChatGPT',
      'Prompt Engineering',
      'AI Hallucinations',
      'AI Governance',
      'Data Privacy',
      'Data Security',
      'Personally Identifiable Information (PII)',
      'GDPR',
      'AI Bias',
      'AI Sustainability',
      'Source of Truth',
      'Priming the Prompt',
      'Custom GPTs',
      'ChatGPT Projects',
      'Google NotebookLM',
      'Perplexity.ai',
      'Pika.art',
      'Destination Marketing Organization (DMO)',
      'AI in Tourism',
      'AI Use Cases'
    ],
    targetAudience: {
      primary: 'Destination Marketing Organization (DMO) professionals',
      secondary: 'Tourism, travel, and hospitality industry employees, Marketing and communications professionals, Non-technical users new to Generative AI',
      tertiary: 'Managers and leaders looking to implement AI tools and guidelines'
    },
    learningOutcomes: [
      'Define what a Large Language Model (LLM) is and how it uses context to predict the next word, rather than pulling from a database of facts.',
      'Apply a step-by-step prompting process to break down complex creative tasks, such as developing a campaign strategy or writing a paper.',
      'Utilize "sources of truth" (like Google, Perplexity, and uploaded documents in NotebookLM) to "prime the prompt" and ground AI responses in factual data.',
      'Configure a ChatGPT account for professional use, including disabling model training (data controls) and creating Custom GPTs for specific knowledge bases (like an expense policy).',
      'Identify and mitigate the core risks of AI in the workplace, including hallucinations, data security, PII/privacy violations, and baked-in bias.'
    ],
    relatedResources: [
      { name: 'Pika.art', description: 'Tool for creating AI-generated video clips', url: 'https://pika.art' },
      { name: 'ChatGPT (by OpenAI)', description: 'The primary LLM interface discussed', url: 'https://chat.openai.com' },
      { name: 'Google Gemini', description: 'Google\'s LLM, including NotebookLM', url: 'https://gemini.google.com' },
      { name: 'Claude (by Anthropic)', description: 'An alternative LLM', url: 'https://claude.ai' },
      { name: 'Microsoft Copilot', description: 'Microsoft\'s AI assistant', url: 'https://copilot.microsoft.com' },
      { name: 'Perplexity.ai', description: 'An AI-native search engine for research', url: 'https://www.perplexity.ai' },
      { name: 'Google NotebookLM', description: 'A Google tool for uploading and analyzing source documents', url: 'https://notebooklm.google.com' }
    ],
    chapters: [
      { time: 0, title: 'Introduction: Generative AI 101' },
      { time: 91, title: 'What is ChatGPT? (It\'s an interface for an LLM)' },
      { time: 150, title: 'How LLMs work: Predicting the next word (not facts)' },
      { time: 219, title: 'AI is not a database of facts (it hallucinates)' },
      { time: 242, title: 'Getting past the "fear of the blank prompt"' },
      { time: 285, title: 'Use Case: Working with data (Excel formulas)' },
      { time: 344, title: 'Interactive Prompt: "Minnesota\'s winter weather"' },
      { time: 450, title: '"How to cheat": Breaking down a task step-by-step (Iliad example)' },
      { time: 580, title: '"It is not cheating to use AI" at work' },
      { time: 639, title: 'Case Study: Creating a campaign strategy using AI' },
      { time: 687, title: 'Priming the prompt with a "source of truth"' },
      { time: 735, title: 'Using Google and Perplexity.ai for research' },
      { time: 797, title: 'Using Google\'s NotebookLM to analyze sources' },
      { time: 1004, title: 'The "human in the loop" (Writing the strategic positioning)' },
      { time: 1043, title: 'Watch-outs & Governance (Security, Safety, Integrity)' },
      { time: 1110, title: 'Data Security: Use paid versions & turn off model training' },
      { time: 1231, title: 'Data Privacy: Do not upload PII (GDPR / EU AI Act)' },
      { time: 1354, title: 'Risk: Hallucinations (Personal bio example)' },
      { time: 1450, title: 'Risk: Bias (Human bias in training data)' },
      { time: 1524, title: 'Risk: Sustainability (Energy and water use)' },
      { time: 1677, title: 'How-to: Setting up ChatGPT (Customize instructions)' },
      { time: 1798, title: 'How-to: Data Controls (Turn off "Improve the model for everyone")' },
      { time: 1821, title: 'How-to: Model Selector (GPT-4o vs. Reasoning models)' },
      { time: 1935, title: 'How-to: Custom GPTs (App store analogy)' },
      { time: 2027, title: 'Custom GPT Example: Travel & Expense Policy (and how it failed)' },
      { time: 2145, title: 'How-to: ChatGPT Projects (vs. Custom GPTs)' },
      { time: 2274, title: 'Next Steps: Top-down (Guidelines) & Bottom-up (Daily use)' },
      { time: 2326, title: 'Guidelines: How to handle proprietary data' },
      { time: 2450, title: 'The Bottom-up Approach: "You just have to do it"' },
    ],
  },
  'ai-tool-playground': {
    id: 'ai-tool-playground',
    title: 'AI Tool Playground',
    description: 'Hands-on exploration of AI tools specifically curated for destination marketing teams. This comprehensive tour covers the complete AI tool stack: frontier models (ChatGPT, Claude, Gemini), research tools (NotebookLM), image generation (Midjourney), video editing (Descript, Runway, Pika), no-code "vibe coding" platforms (Lovable.dev, Agent.ai, N8N), and presentation tools (Beautiful.ai, Napkin.ai).',
    duration: '44 min',
    muxPlaybackId: 'H6B01F00lAc4PGT8Ick32jTwVa7LVA8Y5yqTq8xyD6DzA',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'Start with a "Frontier Model" as your base. Instead of chasing dozens of small tools, professionals should get a paid subscription to a core model like ChatGPT, Claude, or Gemini. ChatGPT is the best all-rounder, while Claude is a superior writer and "thought partner."',
      'Specialized tools excel at specific tasks. For factual, "grounded in truth" research, use Google\'s NotebookLM to upload sources and query them. For video editing, Descript allows you to edit by modifying the text transcript. For presentations, Beautiful.ai streamlines design and ensures brand consistency.',
      '"Vibe coding" tools are making everyone a developer. Tools like Lovable.dev (for front-end websites/apps) and Agent.ai (for back-end agentic workflows) allow non-technical users to build functional tools using plain-language prompts.',
      'Security is a non-negotiable for business. Always use paid AI accounts (like ChatGPT Team) to ensure you can turn off model training. Free tools use your data as their product, which is a major security risk for proprietary information.',
      'AI rewards expertise and has a learning curve. AI is not a magic wand. A non-artist will get mediocre images, and a non-coder will struggle with Lovable.dev at first. The human expert\'s role is to learn the tool and then guide, fact-check, and refine the AI\'s output.'
    ],
    topics: [
      'AI Tool Stack',
      'Frontier Models',
      'ChatGPT (OpenAI)',
      'Claude (Anthropic)',
      'Gemini (Google)',
      'Microsoft Copilot',
      'Google NotebookLM',
      'AI Image Generation',
      'Midjourney',
      'AI Video Generation',
      'AI Video Editing',
      'Descript',
      'Runway',
      'Pika Art (Pika.art)',
      'No-Code AI / "Vibe Coding"',
      'AI Agents',
      'Lovable.dev',
      'Agent.ai',
      'N8N',
      'AI Presentation Software',
      'Beautiful.ai',
      'AI Data Visualization',
      'Napkin.ai',
      'AI Governance & Security',
      'Data Privacy',
      'Model Training',
      'AI Copyright',
      'AI Agent Swarms',
      'AI Meeting Recorders (Otter.ai, Granola, Plaud)'
    ],
    targetAudience: {
      primary: 'Destination Marketing Organization (DMO) professionals',
      secondary: 'Tourism, travel, and hospitality industry teams, Marketing and communications professionals, Sales and business development teams, Non-technical professionals looking for a practical "AI tool stack"',
      tertiary: 'Leaders evaluating AI tools for their organization'
    },
    learningOutcomes: [
      'Differentiate between the primary frontier models (ChatGPT, Claude, Gemini) and select the best one for their needs.',
      'Identify specific, task-oriented AI tools for research (NotebookLM), image generation (Midjourney), video editing (Descript), and presentation design (Beautiful.ai).',
      'Understand the concept of "no-code" AI agent builders like Agent.ai and Lovable.dev.',
      'Explain the critical security difference between paid and free AI tools, specifically the importance of "turning off model training."',
      'Recognize the privacy implications of modern AI meeting recorders (Granola, Plaud.ai) that may not provide visible disclosure.'
    ],
    relatedResources: [
      { name: 'ChatGPT (OpenAI)', description: 'Best all-around frontier model', url: 'https://chat.openai.com' },
      { name: 'Claude (Anthropic)', description: 'Superior writer and thought partner', url: 'https://claude.ai' },
      { name: 'Gemini (Google)', description: 'Integrated option for Google Workspace', url: 'https://gemini.google.com' },
      { name: 'Microsoft Copilot', description: 'More secure option for Microsoft users', url: 'https://copilot.microsoft.com' },
      { name: 'Google NotebookLM', description: 'Research tool for grounded, factual analysis', url: 'https://notebooklm.google.com' },
      { name: 'Pika (Pika.art)', description: 'Simple animated video/GIF generation', url: 'https://pika.art' },
      { name: 'Midjourney', description: 'Advanced AI image generation', url: 'https://www.midjourney.com' },
      { name: 'Descript', description: 'Text-based video and audio editing', url: 'https://www.descript.com' },
      { name: 'Runway', description: 'AI video generation and editing', url: 'https://runwayml.com' },
      { name: 'Lovable.dev', description: 'No-code front-end website/app builder', url: 'https://lovable.dev' },
      { name: 'Agent.ai', description: 'Build AI agents with workflows', url: 'https://agent.ai' },
      { name: 'N8N', description: 'Visual workflow automation builder', url: 'https://n8n.io' },
      { name: 'Beautiful.ai', description: 'AI-powered presentation software', url: 'https://www.beautiful.ai' },
      { name: 'Napkin.ai', description: 'Context-aware data visualization', url: 'https://www.napkin.ai' },
      { name: 'Supabase', description: 'Database backend mentioned with Lovable', url: 'https://supabase.com' },
      { name: 'Jasper', description: 'AI copywriting tool mentioned in Q&A', url: 'https://www.jasper.ai' }
    ],
    chapters: [
      { time: 0, title: 'Welcome to the AI Tool Playground' },
      { time: 46, title: 'Janette\'s AI Agenda at Brand USA' },
      { time: 82, title: 'What are Frontier Models? (The "basis" of AI tools)' },
      { time: 119, title: 'ChatGPT: The best all-around tool for DMOs' },
      { time: 160, title: 'Microsoft Copilot: Less powerful, but more secure' },
      { time: 179, title: 'Claude: A "terrific thought partner" and better writer' },
      { time: 232, title: 'Gemini: A strong, integrated option for Google Workspace users' },
      { time: 277, title: 'Google NotebookLM: For "grounded in truth" research based on your uploaded sources' },
      { time: 433, title: 'AI Image Generation (DALL-E in ChatGPT)' },
      { time: 532, title: 'Midjourney: How to learn prompting by studying others' },
      { time: 567, title: 'AI Copyright (An evolving legal space)' },
      { time: 649, title: 'AI Video Editing: Descript (Edit video like a text doc)' },
      { time: 732, title: 'Use Case: Repurposing webinar content for TikTok' },
      { time: 796, title: 'AI Video Generation: Runway & Pika.art' },
      { time: 843, title: '"Vibe Coding" Tools (No-Code)' },
      { time: 850, title: 'Lovable.dev: Build a front-end app/website from a prompt' },
      { time: 936, title: 'Agent.ai: Build your own AI agents (e.g., LinkedIn sales assistant)' },
      { time: 1035, title: 'N8N: Visual workflow builder for automation' },
      { time: 1059, title: 'AI Presentation Tools: Beautiful.ai' },
      { time: 1201, title: 'AI Visualization Tools: Napkin.ai (Context-aware visualizations)' },
      { time: 1283, title: 'Key Takeaway: "It is not cheating to use AI"' },
      { time: 1324, title: 'Q&A: AI Security (Paid vs. Free) & Turning off model training' },
      { time: 1375, title: 'Q&A: PII, data contracts, and "AI in the shadows"' },
      { time: 1405, title: 'Q&A: Agent.ai is model-agnostic' },
      { time: 1423, title: 'Q&A: The future of AI Agent "Swarms"' },
      { time: 1501, title: 'Q&A: Privacy risks of meeting recorders (Granola, Plaud.ai)' },
    ],
  },
  'ai-dmo-leadership': {
    id: 'ai-dmo-leadership',
    title: 'AI for DMO Leadership',
    description: 'Strategic guidance for tourism leaders on AI adoption, governance, and organizational transformation. This comprehensive leadership guide covers scaling AI by department, creating AI governance frameworks, managing three critical risk areas (Data Security, Data Privacy, Content Integrity), developing organizational AI guidelines, handling vendor partnerships, and implementing both top-down and bottom-up adoption strategies.',
    duration: '41 min',
    muxPlaybackId: 'NQACe9aTXRuntXd4r7eHWsXVDFVhaUUwyotE8RF5SQE',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'Scale AI by Department: Move from ad-hoc individual use to organizational workflows by focusing on specific departments (like HR), identifying use cases for their core responsibilities (like performance reviews), and creating department-specific AI tools (like Custom GPTs).',
      'Governance is Non-Negotiable: Leaders must address "AI anxiety" by creating clear AI guidelines. This presentation focuses on three core risk areas: Data Security (systems), Data Privacy (people), and Content Integrity (IP).',
      'Use Paid Tools & Turn Off Training: The most critical step for Data Security is providing paid, enterprise-grade tools (like ChatGPT Team or Microsoft Copilot). These tools offer SOC 2 compliance and, most importantly, allow you to turn off model training, which prevents your proprietary data from being absorbed by the AI model.',
      'NEVER Put PII in an LLM: For Data Privacy, the simplest rule is to never input Personally Identifiable Information (PII) into a large language model. Doing so, especially for EU citizens, violates the EU AI Act and GDPR because the data can never be permanently deleted from the model.',
      '"Human in the Loop" is Non-Negotiable: AI is a tool, not a final authority. Organizations are responsible for all AI-generated output. This requires a "human in the loop" to fact-check, edit, and ensure all content aligns with brand standards and truthfulness, as AI models "have no relationship to truth."'
    ],
    topics: [
      'AI Governance',
      'AI Guidelines',
      'AI Risk Management',
      'Data Security',
      'Data Privacy',
      'Content Integrity',
      'Intellectual Property (IP)',
      'Personally Identifiable Information (PII)',
      'GDPR / EU AI Act',
      'Model Training (turning it off)',
      'SOC 2 Compliance',
      'Shadow AI / BYO AI',
      'AI Adoption',
      'AI Workflows',
      'Standard Operating Procedures (SOPs)',
      'AI Use Cases',
      'Destination Marketing Organization (DMO)',
      'AI for HR',
      'Custom GPTs',
      'ChatGPT Team',
      'AI Agents',
      'Red Teaming (AI)',
      'Vendor Management',
      'AI Mantras',
      'Human in the Loop'
    ],
    targetAudience: {
      primary: 'DMO (Destination Marketing Organization) leaders, executives, and managers',
      secondary: 'HR, IT, and Legal professionals, Innovation and AI officers, Tourism and hospitality industry leaders',
      tertiary: 'Anyone responsible for creating or implementing an organizational AI policy'
    },
    learningOutcomes: [
      'Develop a strategy for scaling AI use across their organization by department.',
      'Identify the three primary risk areas of AI governance: Data Security, Data Privacy, and Content Integrity.',
      'Understand the critical importance of using paid, secure AI tools (like ChatGPT Team) to turn off model training and protect company data.',
      'Explain why inputting PII into an LLM is a major legal and privacy violation (GDPR / EU AI Act).',
      'Create a framework for their own AI guidelines, covering vision, ethics, confidentiality, and vendor management.',
      'Recognize the risks of "Shadow AI" (BYO AI) and the counter-risks of banning AI entirely.'
    ],
    relatedResources: [
      { name: 'Pika (Pika.art)', description: 'Tool for creating animated images', url: 'https://pika.art' },
      { name: 'ChatGPT Team (OpenAI)', description: 'Paid/secure enterprise AI tool', url: 'https://openai.com/chatgpt/team' },
      { name: 'Claude Team (Anthropic)', description: 'Paid/secure enterprise AI tool', url: 'https://www.anthropic.com/claude' },
      { name: 'Gemini for Google Workspace', description: 'Google\'s enterprise AI tool', url: 'https://workspace.google.com/solutions/ai/' },
      { name: 'Microsoft Copilot', description: 'Microsoft\'s enterprise AI tool', url: 'https://copilot.microsoft.com' },
      { name: 'AI Opener for Destinations', description: 'Program by Group NAO and Miles Partnership', url: 'https://www.aiopenerfordestinations.com' },
      { name: 'Roxanne Steinhoff', description: 'AI governance framework creator', url: 'https://www.linkedin.com/search/results/all/?keywords=roxanne%20steinhoff' },
      { name: 'IAPP', description: 'International Association of Privacy Professionals (AIGP Certification)', url: 'https://iapp.org' },
      { name: 'Hard Fork Podcast', description: 'New York Times AI podcast', url: 'https://www.nytimes.com/column/hard-fork' },
      { name: 'Marketing AI Institute', description: 'Podcast and AI marketing resources', url: 'https://www.marketingaiinstitute.com' },
      { name: 'Ethan Mollick', description: 'Wharton Professor and AI thought leader', url: 'https://www.linkedin.com/in/emollick/' },
      { name: 'Connor Grennan', description: 'NYU AI leader and thought leader', url: 'https://www.linkedin.com/in/connorgrennan/' },
      { name: 'Allie K. Miller', description: 'AI courses and thought leader', url: 'https://www.linkedin.com/in/alliekmiller/' },
      { name: 'Descript', description: 'AI video editing tool', url: 'https://www.descript.com' },
      { name: 'Mindtrip', description: 'AI itinerary builder used by Brand USA', url: 'https://www.mindtrip.com' },
      { name: 'Brand USA AI Policy', description: 'Public AI guidelines document', url: 'https://thebrandusa.app.box.com/s/bbsg85jl4w1rbgolcyg2kwjzy7he9g64' }
    ],
    chapters: [
      { time: 0, title: 'Introduction & Welcome' },
      { time: 56, title: 'AI in the Tourism Industry: Three Focus Areas' },
      { time: 103, title: 'How to scale AI work at your DMO (by department/org chart)' },
      { time: 202, title: 'Create regular, department-specific AI meetings' },
      { time: 242, title: 'Collect SOPs (Standard Operating Procedures) to prepare for agentic AI' },
      { time: 270, title: 'Introduction to AI Governance & employee "AI Anxiety"' },
      { time: 300, title: 'The 3 Risk Areas: Data Security, Data Privacy, Content Integrity' },
      { time: 314, title: 'Risk 1: Data Security (Provide paid tools: ChatGPT Team, Copilot, etc.)' },
      { time: 365, title: 'Crucial Step: Turn off "training on your data"' },
      { time: 393, title: 'Risk 2: Data Privacy (Do NOT put PII into an LLM)' },
      { time: 473, title: 'Risk 3: Content Integrity (Protecting Intellectual Property)' },
      { time: 513, title: 'Use Case: Uploading research as a "source of truth"' },
      { time: 570, title: 'Contracts: Get addendums from vendors for AI use' },
      { time: 604, title: 'The problem of "BYO AI" (Shadow AI)' },
      { time: 619, title: 'Risks of BYO AI: Security, Privacy, Operational, Reputational' },
      { time: 711, title: 'Banning AI creates its own risks (use goes underground)' },
      { time: 723, title: 'How to create AI Guidelines (Roxanne Steinhoff framework)' },
      { time: 808, title: 'Brand USA\'s AI Guidelines: Vision & Transparency' },
      { time: 838, title: 'Brand USA\'s Guidelines: "Human in the loop" (Boston "autocorrect" example)' },
      { time: 880, title: 'AI cannot "fact check" itself' },
      { time: 902, title: 'Red Teaming: The need to constantly check your chatbots' },
      { time: 963, title: 'Governance Layer 2: External Partnerships (Vendors/Agencies)' },
      { time: 1021, title: 'Governance Layer 3: Tool Vetting (Procurement process)' },
      { time: 1074, title: 'AI Mantras (Start small, think big; top-down & bottom-up)' },
      { time: 1274, title: '"It is not cheating" to use AI at work' },
      { time: 1340, title: 'Q&A: How many tools? (Start with one paid tool, like ChatGPT)' },
      { time: 1378, title: 'Q&A: Favorite resources (Hard Fork, Marketing AI Institute, Ethan Mollick)' },
      { time: 1445, title: 'Q&A: Who owns AI policy? (It\'s a blend: COO, IT, Legal, HR)' },
      { time: 1512, title: 'Q&A: AI Certifications (IAPP, Allie K. Miller, Connor Grennan)' },
      { time: 1552, title: 'Q&A: AI for DMO websites (Mindtrip)' },
    ],
  },
  'custom-gpts': {
    id: 'custom-gpts',
    title: 'Custom GPTs: Your New AI Colleague!',
    description: 'Discover how to create and deploy custom GPT assistants that revolutionize your tourism marketing workflows. This comprehensive guide covers building Custom GPTs from scratch, troubleshooting hallucinations, practical use cases for DMOs (expense policies, press releases, meeting follow-up, coaching), and the critical differences between Custom GPTs and Projects.',
    duration: '34 min',
    muxPlaybackId: 'aYcGzhmJnP8jdz2o92EPP00JgmRWd2jLNcChaUgytgG8',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'A Custom GPT is a reusable prompt that bundles specific instructions, "Knowledge" (like uploaded PDF files), and capabilities (like web browsing) to create a specialized AI assistant that can be used repeatedly.',
      'AI models are non-deterministic and can hallucinate even when given specific files. To get factual results, you must write very strict instructions (e.g., "never rely on outside knowledge") and upload your own "source of truth" documents for the AI to query.',
      'Custom GPTs are ideal for organizational quality control and consistency. They can be built by Subject Matter Experts (SMEs) to perform specific, repeatable tasks like drafting press releases in a company style or acting as a "coach" to give feedback on sales call transcripts.',
      'Paid AI accounts are essential for business use. Free accounts use your data to train future models, which is a major security risk. Paid accounts (like ChatGPT Team) allow you to turn off model training and access crucial features like Custom GPTs.',
      'The primary practical difference between a Custom GPT and a ChatGPT Project is sharing. Custom GPTs can be shared across an organization, while Projects are for personal organization and cannot be shared.'
    ],
    topics: [
      'Custom GPTs',
      'ChatGPT',
      'Prompt Engineering',
      'AI Hallucinations',
      'AI Governance',
      'Knowledge Base (AI)',
      'AI Use Cases',
      'Data Privacy',
      'Model Training',
      'Source of Truth',
      'AI in Tourism',
      'Destination Marketing Organization (DMO)',
      'Sales Enablement',
      'AI Meeting Notetakers',
      'ChatGPT Projects',
      'GPT-5 / GPT-4o',
      'Edge Cases (AI)',
      'Simpleview',
      'Pika.art'
    ],
    targetAudience: {
      primary: 'Destination Marketing Organization (DMO) professionals',
      secondary: 'Travel and tourism industry teams, Marketing and communications managers, Sales and business development teams, Operations and HR professionals',
      tertiary: 'Professionals seeking practical, repeatable AI workflows'
    },
    learningOutcomes: [
      'Define what a Custom GPT is and identify its core components (Instructions, Knowledge, Capabilities).',
      'Build a new Custom GPT from scratch, including uploading knowledge files and writing instructions to control its behavior.',
      'Understand why AI models hallucinate (they are "non-deterministic") and apply troubleshooting techniques (like writing stricter prompts) to ensure factual accuracy.',
      'Identify multiple high-value business use cases for Custom GPTs, such as querying internal policies, drafting press releases, summarizing meeting transcripts, and coaching staff.',
      'Differentiate between a shareable Custom GPT (for team use) and a personal ChatGPT Project (for organizing chats).',
      'Recognize the critical security and privacy reasons for using paid AI accounts and turning off model training.'
    ],
    relatedResources: [
      { name: 'Pika.art', description: 'Tool for creating AI-generated video clips', url: 'https://pika.art' },
      { name: 'ChatGPT (by OpenAI)', description: 'The primary LLM interface discussed', url: 'https://chat.openai.com' },
      { name: 'Otter.ai', description: 'Meeting notetaker and transcription tool', url: 'https://otter.ai' },
      { name: 'Fireflies.ai', description: 'Meeting notetaker and transcription tool', url: 'https://fireflies.ai' },
      { name: 'Simpleview', description: 'CRM platform mentioned for DMO use', url: 'https://www.simpleviewinc.com' },
      { name: 'ChatGPT Team', description: 'Business plan with Custom GPT sharing capabilities', url: 'https://openai.com/chatgpt/team' }
    ],
    chapters: [
      { time: 10, title: 'What is a Custom GPT?' },
      { time: 24, title: 'Use Case 1: Brand USA Travel & Expense Policy' },
      { time: 98, title: 'Key Feature: Conversational follow-up' },
      { time: 120, title: 'Why use Custom GPTs? (Save time, ensure consistency, control quality)' },
      { time: 160, title: 'How to edit a Custom GPT' },
      { time: 171, title: 'Backend Part 1: Instructions (The main prompt)' },
      { time: 191, title: 'Backend Part 2: Knowledge (Uploading files as a "source of truth")' },
      { time: 209, title: 'Critical Risk: AI Hallucinations (Non-deterministic)' },
      { time: 235, title: 'Example of failure: The "Chicago" per diem edge case' },
      { time: 265, title: 'The fix: Writing a stricter, more robust prompt' },
      { time: 310, title: 'Backend Part 3: Model Selection (GPT-5 vs. 4o)' },
      { time: 341, title: 'Backend Part 4: Capabilities (Web browsing, DALL-E, etc.)' },
      { time: 373, title: 'How to create a new Custom GPT from scratch' },
      { time: 389, title: 'The "GPT Store"' },
      { time: 431, title: 'Use Case 2: Press Release Drafter' },
      { time: 458, title: 'Pro-tip: Use ChatGPT to help write your instructions' },
      { time: 531, title: 'Key Insight: Subject Matter Experts (SMEs) must build and validate GPTs' },
      { time: 555, title: 'How to build: Sharing Options (Team, Public, etc.)' },
      { time: 585, title: 'Use Case 3: Meeting Notetakers & Sales Workflows' },
      { time: 611, title: 'Warning: Get consent before recording meetings' },
      { time: 655, title: 'Idea: "CRM" GPT (for Simpleview)' },
      { time: 688, title: 'Idea: "Coach" GPT (for junior staff)' },
      { time: 752, title: 'More ideas: Policy Summarizer, Content Repurposer, Crisis Simulator, Onboarding' },
      { time: 794, title: 'Q&A: Recording meetings at trade shows (Otter, Fireflies)' },
      { time: 844, title: 'Crucial Info: Paid accounts are required to turn off model training' },
      { time: 871, title: 'Custom GPT vs. ChatGPT Project (Sharing is the key difference)' },
    ],
  },
  'ai-convention-sales': {
    id: 'ai-convention-sales',
    title: 'AI for Convention Sales',
    description: 'Master Custom GPTs for meeting follow-up and lead research, then discover vibe coding to build AI-powered tools for business events.',
    duration: '42 min',
    muxPlaybackId: '5xZnY5oJP5nlS5wQsEGv00U00gsf201r00aF00Y902ug26K9o',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'AI Enhances Sales Capacity, Not Replaces Jobs: AI tools act as "assistants" to automate repetitive tasks, freeing up sales teams to focus on relationship building and strategy',
      'Custom GPTs Enable Team-Wide Consistency & Quality: Create reusable prompts with specific instructions for consistent, high-quality output across your team',
      '"Vibe Coding" Rapidly Turns Ideas into Prototypes: Use plain English to generate functional applications, like Visit Orlando\'s "MapCon" tool',
      'AI Agents Automate Complex Research: Use AI agents for sophisticated lead and competitive research, saving days of manual work',
      'Workflow Mapping is Key to AI Integration: Identify specific pain points in your existing workflow where AI can add immediate value'
    ],
    topics: [
      'AI for Sales',
      'Convention Sales',
      'Business Events',
      'Destination Marketing Organizations (DMOs)',
      'Custom GPTs',
      'AI Workflow Automation',
      'Prompt Engineering',
      'Vibe Coding',
      'Rapid Prototyping',
      'Low-Code/No-Code',
      'AI Agents',
      'Lead Research',
      'Competitive Analysis',
      'CRM Integration',
      'Meeting Follow-up',
      'Sales Operations',
      'AI Implementation Strategy',
      'Agent.ai',
      'Replit',
      'MapCon Tool'
    ],
    targetAudience: {
      primary: 'Sales and marketing professionals at Destination Marketing Organizations (DMOs), Convention and Visitors Bureaus (CVBs), and other convention sales teams',
      secondary: 'Sales operations managers, marketing technologists, and business leaders in the tourism and hospitality industry looking for practical AI use cases',
      tertiary: 'Anyone interested in building simple, practical AI tools (Custom GPTs, Vibe Coding) for team-specific workflows'
    },
    learningOutcomes: [
      'Identify at least three key areas in a convention sales workflow where AI can be integrated (e.g., CRM administration, reporting, meeting follow-up)',
      'Define what a Custom GPT is and list its main benefits for a team (saves time, ensures consistency, controls quality)',
      'Describe the basic steps to create a Custom GPT, including writing instructions (the prompt) and uploading knowledge files',
      'Explain the concept of "Vibe Coding" and how it enables non-developers to build functional application prototypes',
      'Recognize how AI agents can be used to automate complex lead generation and competitive analysis tasks'
    ],
    relatedResources: [
      { name: 'ChatGPT', description: 'Platform for creating and using Custom GPTs', url: 'https://chat.openai.com' },
      { name: 'Agent.ai', description: 'Platform for building AI agents for lead research', url: 'https://agent.ai' },
      { name: 'Replit', description: 'Vibe Coding platform for building applications', url: 'https://replit.com' }
    ],
    chapters: [
      { time: 13, title: 'The Role of AI in US Promotion of Business Events' },
      { time: 72, title: 'What is a Custom GPT?' },
      { time: 104, title: 'Example: Custom GPT for Travel & Expense Policy' },
      { time: 161, title: 'Why Use Custom GPTs? (Saves Time, Ensures Consistency, Controls Quality)' },
      { time: 218, title: 'How to Create a New Custom GPT (Builder Interface)' },
      { time: 313, title: 'Using ChatGPT to Write the "Instructions" (Prompt) for Your Custom GPT' },
      { time: 395, title: 'Adding "Knowledge" (Files) to a Custom GPT' },
      { time: 469, title: 'Previewing and Testing Your Custom GPT' },
      { time: 521, title: 'Sharing Options for Custom GPTs (Private, Link, Team)' },
      { time: 598, title: 'Example Workflow: Custom GPTs for Meeting Follow-up' },
      { time: 941, title: 'Using AI for Competitive Analysis ("Deep Research")' },
      { time: 1089, title: 'Using AI Agents for Lead Research' },
      { time: 1106, title: 'Demo: Using Agent.ai to Research a LinkedIn Profile' },
      { time: 1477, title: 'Planner/Delegate Experience Enhancement' },
      { time: 1494, title: 'Introduction to Vibe Coding' },
      { time: 1537, title: 'What is Vibe Coding? (Concept & Workflow)' },
      { time: 1658, title: 'The Importance of the Prompt in Vibe Coding' },
      { time: 1695, title: 'Vibe Coding in Action: The Manual "MapCon" Problem' },
      { time: 1808, title: 'Vibe Coding Demo: Building the "MapCon" Tool Prototype' },
      { time: 2368, title: 'Vibe Coding Backend Tool (Replit Demo)' },
      { time: 2478, title: 'AI is an Opportunity to Expand Capacity, Not Replace Jobs' },
      { time: 2635, title: 'Incorporating AI into Your Sales Workflow (Identifying Use Cases)' },
    ],
  },
  'crit-framework': {
    id: 'crit-framework',
    title: 'AI Prompting Using the CRIT Framework',
    description: 'This video introduces the CRIT (Context, Role, Interview, Task) framework for creating effective AI prompts, emphasizing that providing detailed, spoken context leads to much better results than simple typed commands. It then provides two in-depth demonstrations: first, using the CRIT method to plan a detailed one-hour workshop, and second, brainstorming a low-budget marketing activation by uploading a PDF for the AI to use as a source of truth.',
    duration: '12 min',
    muxPlaybackId: 'OC72C8icortMHMBjS87615i9PRYu3C2dGt7XA22JlWU',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'The CRIT framework (Context, Role, Interview, Task) is a structured method for providing comprehensive details to an AI, which leads to significantly more useful and interesting responses',
      'Context is key: The quality of an AI\'s output is directly proportional to the quality and quantity of the background information, constraints, and "source of truth" (like a PDF) you provide',
      'Use voice-to-text to "talk" to the AI: Dictation tools allow you to provide much richer, more natural, and detailed context than you would normally type',
      'Instructing the AI to "interview" you by asking clarifying questions is a powerful technique to ensure it gathers all the necessary details before generating a solution',
      'Generative AI is a powerful brainstorming and workflow partner that can be used for complex, practical tasks like planning an entire workshop or developing a multi-part marketing activation'
    ],
    topics: [
      'AI Prompting',
      'Prompt Engineering',
      'CRIT Framework',
      'Generative AI',
      'AI for Business',
      'AI for Marketing',
      'Contextual AI',
      'AI Brainstorming',
      'AI Productivity',
      'Workshop Planning',
      'Marketing Activation',
      'Voice-to-Text',
      'AI Dictation',
      'ChatGPT',
      'Claude',
      'Monologue',
      'Wispr Flow'
    ],
    targetAudience: {
      primary: 'Professionals, marketers, and corporate trainers who want to move beyond basic AI queries and learn a structured system for getting practical, high-quality, and creative results from generative AI tools for complex business tasks',
      secondary: 'Business professionals seeking to improve their AI prompting skills',
      tertiary: 'Anyone interested in advanced AI communication techniques'
    },
    learningOutcomes: [
      'Understand and apply the four parts of the CRIT framework (Context, Role, Interview, Task) to their own prompts',
      'Articulate why providing deep context and a "source of truth" (like a PDF) is essential for high-quality AI output',
      'Use voice dictation as a tool to create more detailed and effective AI prompts quickly',
      'Structure a prompt that encourages the AI to ask clarifying questions to refine its understanding',
      'Brainstorm and plan complex, multi-step projects (like a workshop or marketing campaign) in collaboration with an AI'
    ],
    relatedResources: [
      { name: 'ChatGPT', description: 'AI model used for demonstrations', url: 'https://chat.openai.com' },
      { name: 'Claude', description: 'AI model mentioned in examples', url: 'https://claude.ai' },
      { name: 'Monologue', description: 'Local voice-to-text transcription software', url: 'https://monologue.app' },
      { name: 'Wispr Flow', description: 'Voice-to-text dictation tool', url: 'https://www.wispr.ai' },
      { name: 'Zapier', description: 'Integration tool mentioned in workflow example', url: 'https://zapier.com' },
      { name: 'MindTrip', description: 'Itinerary planning tool mentioned', url: 'https://www.mindtrip.com' }
    ],
    chapters: [
      { time: 3, title: 'Introduction to the CRIT (Context, Role, Interview, Task) Framework' },
      { time: 26, title: 'The benefit of using voice-to-text for detailed prompting' },
      { time: 62, title: 'The core principle: "We should talk to AI" to provide rich context' },
      { time: 119, title: 'Example 1 - Context: Describing the setup for a one-hour workshop' },
      { time: 222, title: 'Example 1 - Role: Assigning the AI the expert role of "Chief AI Officer"' },
      { time: 237, title: 'Example 1 - Interview: Prompting the AI to ask clarifying questions' },
      { time: 274, title: 'Example 1 - Task: Defining the specific goal (create a workshop outline)' },
      { time: 338, title: 'The AI begins its "interview" process, asking the first question' },
      { time: 490, title: 'Example 2 - Context: Uploading a PDF as a "source of truth" for brainstorming' },
      { time: 556, title: 'Example 2 - Role: Assigning the AI the role of "Marketing Director"' },
      { time: 615, title: 'The AI generates ideas grounded in the provided PDF' },
      { time: 779, title: 'Final summary: "Brainstorming with AI: Context is Key"' },
    ],
  },
  'clueless-packing-app': {
    id: 'clueless-packing-app',
    title: 'Building a "Clueless"-Inspired AI Packing App Using Claude Artifacts',
    description: 'Using Anthropic\'s Claude, the team used the "artifacts" feature—described as a reusable prompt similar to a custom GPT—to build a "Business Trip Packing Assistant." The app\'s design was inspired by the iconic virtual closet from the movie Clueless. Learn how the tool was developed entirely with natural language prompts (like "make it more sparkly"), resulting in a "sparkly, interactive app" that any employee can now use to plan their clothing for business trips.',
    duration: '1 min',
    muxPlaybackId: 'O7pzzrithO55xsLb6p02GCgtmGyXTO1C7rSztJDl0002Bo',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    isShortForm: true, // Flag for vertical player layout
    chapters: [], // No chapters for short-form content
  },
  'model-context-protocol': {
    id: 'model-context-protocol',
    title: 'Model Context Protocol',
    description: 'This presentation introduces the Model Context Protocol (MCP) as a technical breakthrough designed to solve AI\'s trustworthiness problem in travel planning by acting as a "source of truth." Janette explains how this technology allows personal AIs to reliably connect with real-time data, demonstrates practical applications for tourism, and outlines the strategic shift for destination marketing organizations.',
    duration: '27 min',
    muxPlaybackId: 'V1DanWAF02sOwwIFov4BXNaTzwT3Kn41TnUWdcyNZfZk',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'Travelers are increasingly using AI for planning (62% have tried it), but low trust is a major barrier, with only 6% "fully trusting" AI solutions due to hallucinations and outdated data',
      'Model Context Protocol (MCP) is a new "AI-native" technology that acts as a "source of truth," allowing personal AIs (like ChatGPT) to plug into verified, real-time data from trusted sources',
      'MCP functions like a universal connector or "app store" for AI, enabling it to use external tools and databases (e.g., Booking.com, venue finders, accessibility data) without complex, custom-coded APIs',
      'This technology represents a fundamental strategic shift for Destination Marketing Organizations (DMOs), moving their role from primarily managing websites to becoming "stewards of data" that publish their content as trusted MCP servers',
      'DMOs have a critical, time-sensitive opportunity to lead an "Open Ecosystem" of verified tourism data, rather than ceding control to "Closed Ecosystems" run by third-party platforms that will charge for access'
    ],
    topics: [
      'Model Context Protocol (MCP)',
      'AI in Travel & Tourism',
      'Generative AI',
      'Large Language Models (LLMs)',
      'AI Trust & Hallucinations',
      'Destination Marketing Organization (DMO)',
      'Data Stewardship',
      'APIs vs. MCPs',
      'Apps in ChatGPT',
      'Claude',
      'Anthropic',
      'Open Ecosystem (Data)',
      'Closed Ecosystem (Data)',
      'AI Agents',
      'Travel Planning',
      'B2B Marketing'
    ],
    targetAudience: {
      primary: 'Destination Marketing Organization (DMO) executives and strategists',
      secondary: 'Travel and tourism industry leaders, marketing and technology professionals in the hospitality sector',
      tertiary: 'B2B event and meeting planners, developers interested in AI and travel technology'
    },
    learningOutcomes: [
      'Define Model Context Protocol (MCP) and explain its function as a "source of truth" for AI',
      'Understand the key differences between a traditional API and an "AI-native" MCP',
      'Identify the limitations of using standard LLMs for travel planning and how MCPs solve for trust and accuracy',
      'Analyze the strategic implications of MCPs for the tourism industry, particularly for DMOs',
      'Recognize real-world applications of MCP, such as ChatGPT "Apps" (Expedia, Booking.com) and B2B data tools'
    ],
    relatedResources: [
      { name: 'Booking.com Travel Predictions', description: 'Global AI Sentiment Report and travel trend insights', url: 'https://www.booking.com' },
      { name: 'Anthropic', description: 'Creators of Claude and Model Context Protocol', url: 'https://www.anthropic.com' },
      { name: 'Claude', description: 'AI chatbot with MCP server capabilities', url: 'https://claude.ai' },
      { name: 'Wrike', description: 'Project management software used in demo', url: 'https://www.wrike.com' },
      { name: 'Morten Rand-Hendriksen', description: 'LinkedIn tutorials on MCP technology', url: 'https://www.linkedin.com/learning/instructors/morten-rand-hendriksen' }
    ],
    chapters: [
      { time: 8, title: 'The central problem: 91% excited by AI, only 6% trust it' },
      { time: 39, title: 'The need for a "source of truth" beyond the base LLM' },
      { time: 103, title: 'The solution: Model Context Protocol (MCP) is introduced' },
      { time: 128, title: 'Definition of "Context": Resources (data) and Tools (actions)' },
      { time: 154, title: 'Diagram: "Before MCP" vs "After MCP" (unified protocol)' },
      { time: 180, title: 'Analogy: MCP as a "USB-C connector" for AI' },
      { time: 235, title: 'Technical comparison: APIs vs. MCPs (AI-Native and self-describing)' },
      { time: 398, title: '"Apps in ChatGPT" - First mainstream example of MCPs' },
      { time: 478, title: 'Tourism-specific Apps: Expedia and Booking.com' },
      { time: 588, title: 'Application Example: Accessibility (wheelchair-accessible routes)' },
      { time: 672, title: 'Application Example: B2B (trusted database of meeting venues)' },
      { time: 758, title: 'Application Example: Consumer (best-value Broadway tickets)' },
      { time: 905, title: 'Strategic Implications: How MCP redefines the DMO\'s role' },
      { time: 1004, title: 'The new role for DMOs: "Stewards of data and stewards of stories"' },
      { time: 1062, title: 'Two futures: "Open Ecosystem (Led by DMOs)" vs "Closed Ecosystem (Led by Platforms)"' },
      { time: 1154, title: 'Actionable next steps for DMOs and partners' },
      { time: 1250, title: 'How to access/create MCP servers (technical demo with Claude & Wrike)' },
    ],
  },
}

export default function WebinarPage({ params }: { params: { id: string } }) {
  const webinar = webinarData[params.id as keyof typeof webinarData]

  if (!webinar) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Webinar not found</p>
      </div>
    )
  }

  // Map of AI tools mentioned in each webinar for schema.org mentions property
  const webinarMentions: Record<string, any[]> = {
    'intro-ai-agents': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Browse.ai', applicationCategory: 'Web Scraping', url: 'https://browse.ai' },
      { '@type': 'SoftwareApplication', name: 'Manus.im', applicationCategory: 'AI Agent', url: 'https://manus.im' },
      { '@type': 'SoftwareApplication', name: 'Lovable.ai', applicationCategory: 'Website Builder', url: 'https://lovable.ai' },
      { '@type': 'SoftwareApplication', name: 'Claude Artifacts', applicationCategory: 'AI Builder', url: 'https://claude.ai' },
      { '@type': 'SoftwareApplication', name: 'N8N', applicationCategory: 'Workflow Automation', url: 'https://n8n.io' },
      { '@type': 'SoftwareApplication', name: 'Agent.ai', applicationCategory: 'AI Agent Builder', url: 'https://agent.ai' },
      { '@type': 'SoftwareApplication', name: 'Google Gemini', applicationCategory: 'AI Assistant', url: 'https://gemini.google.com' },
    ],
    'custom-gpts': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Custom GPTs', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
    ],
    'ai-convention-sales': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Custom GPTs', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Claude Artifacts', applicationCategory: 'AI Builder', url: 'https://claude.ai' },
    ],
    'crit-framework': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Claude', applicationCategory: 'AI Assistant', url: 'https://claude.ai' },
    ],
    'model-context-protocol': [
      { '@type': 'SoftwareApplication', name: 'Claude', applicationCategory: 'AI Assistant', url: 'https://claude.ai' },
      { '@type': 'SoftwareApplication', name: 'Model Context Protocol', applicationCategory: 'AI Protocol', url: 'https://modelcontextprotocol.io' },
    ],
    'ai-101': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Claude', applicationCategory: 'AI Assistant', url: 'https://claude.ai' },
      { '@type': 'SoftwareApplication', name: 'Google Gemini', applicationCategory: 'AI Assistant', url: 'https://gemini.google.com' },
    ],
    'ai-tool-playground': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Claude', applicationCategory: 'AI Assistant', url: 'https://claude.ai' },
      { '@type': 'SoftwareApplication', name: 'Google Gemini', applicationCategory: 'AI Assistant', url: 'https://gemini.google.com' },
      { '@type': 'SoftwareApplication', name: 'Lovable.ai', applicationCategory: 'Website Builder', url: 'https://lovable.ai' },
    ],
    'ai-dmo-leadership': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Claude', applicationCategory: 'AI Assistant', url: 'https://claude.ai' },
    ],
  }

  // Generate enhanced JSON-LD schema for AI discoverability
  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: webinar.title,
    description: webinar.description,
    duration: webinar.duration,
    thumbnailUrl: `https://image.mux.com/${webinar.muxPlaybackId}/thumbnail.png`,
    contentUrl: `https://stream.mux.com/${webinar.muxPlaybackId}.m3u8`,
    uploadDate: '2024-01-01',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    creator: {
      '@type': 'Person',
      name: webinar.instructor,
      jobTitle: webinar.instructorTitle,
    },
    author: {
      '@type': 'Person',
      name: 'Janette Roush',
      jobTitle: 'Chief AI Officer, SVP Innovation',
      affiliation: {
        '@type': 'Organization',
        name: 'Brand USA'
      },
      knowsAbout: [
        'AI for tourism marketing',
        'Destination marketing AI strategy',
        'Model Context Protocol (MCP)',
        'AI agents for DMOs',
        'Custom GPTs for tourism',
        'CRIT framework for AI prompts',
        'Agentic AI in destination marketing',
        'AI governance in tourism industry',
        'Claude Artifacts for DMO operations',
        'Tourism industry automation'
      ]
    },
    publisher: {
      '@type': 'Organization',
      name: 'Brand USA Agents of Change',
      url: 'https://brand-usa-agents-of-change.vercel.app'
    },
    isPartOf: {
      '@type': 'Course',
      name: 'AI for Destination Marketing Organizations',
      provider: {
        '@type': 'Organization',
        name: 'Brand USA Agents of Change'
      }
    },
    educationalLevel: (webinar as any).level || 'Professional',
    keywords: (webinar as any).topics?.join(', ') || '',
    about: (webinar as any).topics?.map((topic: string) => ({
      '@type': 'Thing',
      name: topic
    })) || [],
    ...(webinar as any).keyTakeaways && {
      teaches: (webinar as any).keyTakeaways
    },
    ...(webinar as any).learningOutcomes && {
      educationalUse: (webinar as any).learningOutcomes
    },
    ...(webinar as any).targetAudience && {
      audience: {
        '@type': 'Audience',
        audienceType: (webinar as any).targetAudience.primary
      }
    },
    ...(webinarMentions[params.id] && {
      mentions: webinarMentions[params.id]
    })
  }

  // BreadcrumbList schema for navigation hierarchy
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://brand-usa-agents-of-change.vercel.app'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Webinars',
        item: 'https://brand-usa-agents-of-change.vercel.app/#webinars'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: webinar.title,
        item: `https://brand-usa-agents-of-change.vercel.app/webinar/${params.id}`
      }
    ]
  }

  return (
    <>
      {/* JSON-LD Structured Data for AI Discoverability - Server-Rendered OUTSIDE client components */}
      <script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      ></script>
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      ></script>

      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center text-gray-600 hover:text-gray-900 mr-6"
              >
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back
              </Link>
              <Image
                src="/brandusa-logo.png"
                alt="Brand USA"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <div className="flex items-center space-x-4">
              {/* Header actions can go here */}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {(webinar as any).isShortForm ? (
          // TikTok-style vertical layout for short-form videos
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-6">
              {/* Vertical Video Player */}
              <div className="w-full max-w-md rounded-xl overflow-hidden shadow-2xl bg-black" style={{ aspectRatio: '9/16' }}>
                <HLSPlayer
                  playbackId={webinar.muxPlaybackId}
                  poster={`https://image.mux.com/${webinar.muxPlaybackId}/thumbnail.png`}
                />
              </div>

              {/* Video Info Below Player */}
              <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h1 className="text-2xl font-bold text-brand-navy mb-2">
                  {webinar.title}
                </h1>
                <p className="text-gray-600 mb-4">{webinar.description}</p>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {webinar.duration}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg">
                      {webinar.instructor.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-3">
                      <div className="font-medium text-gray-900">{webinar.instructor}</div>
                      <div className="text-sm text-gray-500">{webinar.instructorTitle}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources - only show if resources exist */}
              {(webinar as any).resources && (webinar as any).resources.length > 0 && (
                <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-brand-navy mb-4">Resources</h2>
                  <div className="space-y-3">
                    {(webinar as any).resources.map((resource: any, index: number) => (
                      <a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition"
                      >
                        <div className="flex items-center">
                          <Download className="h-5 w-5 text-gray-400 mr-3" />
                          <span className="text-gray-700 font-medium">
                            {resource.name}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Standard horizontal layout for webinars
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Player */}
              <div className="rounded-xl overflow-hidden shadow-lg bg-black aspect-video">
                <HLSPlayer
                  playbackId={webinar.muxPlaybackId}
                  poster={`https://image.mux.com/${webinar.muxPlaybackId}/thumbnail.png`}
                />
              </div>


            {/* Video Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h1 className="text-2xl font-bold text-brand-navy mb-2">
                {webinar.title}
              </h1>
              <p className="text-gray-600 mb-4">{webinar.description}</p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {webinar.duration}
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {webinar.chapters.length} chapters
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg">
                    {webinar.instructor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">{webinar.instructor}</div>
                    <div className="text-sm text-gray-500">{webinar.instructorTitle}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chapters */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-brand-navy mb-4">Chapters</h2>
              <div className="space-y-2">
                {webinar.chapters.map((chapter, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const player = document.querySelector('video') as any
                      if (player) {
                        player.currentTime = chapter.time
                        player.play()
                      }
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition text-left"
                  >
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-500 w-12">
                        {Math.floor(chapter.time / 60)}:{(chapter.time % 60).toString().padStart(2, '0')}
                      </span>
                      <span className="ml-3 text-gray-900">{chapter.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Key Takeaways - only show if exists */}
            {(webinar as any).keyTakeaways && (webinar as any).keyTakeaways.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-brand-navy mb-4">Key Takeaways</h2>
                <ul className="space-y-3">
                  {(webinar as any).keyTakeaways.map((takeaway: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-sky/10 text-brand-sky flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 text-sm">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Learning Outcomes - only show if exists */}
            {(webinar as any).learningOutcomes && (webinar as any).learningOutcomes.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-brand-navy mb-4">What You'll Learn</h2>
                <p className="text-sm text-gray-600 mb-4">After watching this video, you will be able to:</p>
                <ul className="space-y-2">
                  {(webinar as any).learningOutcomes.map((outcome: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Resources - only show if resources exist */}
            {(webinar as any).resources && (webinar as any).resources.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-brand-navy mb-4">Resources</h2>
                <div className="space-y-3">
                  {(webinar as any).resources.map((resource: any, index: number) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition"
                    >
                      <div className="flex items-center">
                        <Download className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-gray-700 font-medium">
                          {resource.name}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Related Resources/Tools - only show if exists */}
            {(webinar as any).relatedResources && (webinar as any).relatedResources.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-brand-navy mb-4">Tools Mentioned</h2>
                <div className="space-y-3">
                  {(webinar as any).relatedResources.map((resource: any, index: number) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition"
                    >
                      <div className="font-medium text-brand-navy mb-1">{resource.name}</div>
                      <div className="text-xs text-gray-600">{resource.description}</div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        )}
      </div>
    </>
  )
}