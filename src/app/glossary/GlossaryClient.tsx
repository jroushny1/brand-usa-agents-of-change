'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ChevronDown, ChevronUp, BookOpen, HelpCircle, Lightbulb } from 'lucide-react'
import AccessCheck from '@/components/AccessCheck'

const terms = [
  {
    name: "Operator Agent",
    description: "AI software that automates browser-based tasks by 'using the mouse for you'—performing actions like lead generation, web scraping, or data extraction. Examples include ChatGPT's browsing capability, Browse.ai, and Manus.im."
  },
  {
    name: "Researcher Agent",
    description: "AI that performs deep analysis and competitive research, capable of synthesizing information from multiple sources. Can analyze dozens of competitors, perform market research, or create comprehensive reports."
  },
  {
    name: "Builder Agent",
    description: "AI that creates digital products from text prompts—websites, applications, or tools. Examples include Lovable.ai for website creation and Claude Artifacts for building interactive applications."
  },
  {
    name: "Automator Agent",
    description: "AI that connects different applications and automates workflows across multiple platforms. Can orchestrate complex multi-step processes. Examples include N8N, Agent.ai, and Google Gemini Gems."
  },
  {
    name: "CRIT Framework",
    description: "Context, Role, Interview, Task—a framework for creating effective AI prompts. Emphasizes providing detailed, spoken context rather than simple typed commands. Developed by Janette Roush specifically for destination marketing professionals to ensure AI systems have sufficient industry context."
  },
  {
    name: "Model Context Protocol (MCP)",
    description: "A technical protocol designed to solve AI's trustworthiness problem by acting as a 'source of truth.' Allows AI systems to reliably connect with real-time, verified data from authoritative sources, replacing hallucinated information with accurate data. Critical for applications like accessible travel planning or venue capacity lookups."
  },
  {
    name: "AI Hallucination",
    description: "When AI systems generate plausible-sounding but factually incorrect or fabricated information. A core challenge for tourism applications where accuracy is critical. Solved by connecting AI to verified data sources using protocols like MCP."
  },
  {
    name: "Custom GPT",
    description: "A customized version of ChatGPT configured with specific instructions, knowledge, and capabilities for a particular use case. Used by DMOs for tasks like meeting follow-up, lead research, or content generation."
  },
  {
    name: "Claude Artifacts",
    description: "A feature in Anthropic's Claude that generates reusable, interactive applications from text prompts. Functions as a 'reusable prompt' similar to Custom GPTs. Used for building tools like packing assistants, calculators, or data visualizations."
  },
  {
    name: "Agentic AI",
    description: "AI systems that can autonomously plan and execute multi-step tasks to achieve a goal. Goes beyond simple chatbot responses to take actions, make decisions, and complete complex workflows with minimal human intervention."
  },
  {
    name: "Source of Truth",
    description: "A verified, authoritative database or system that AI agents can query to retrieve accurate information. Essential for preventing hallucinations in tourism applications. Examples include venue capacity databases, accessibility infrastructure data, or DMO-maintained attraction information."
  }
]

const faqs = [
  {
    question: "What is the CRIT framework for AI prompts?",
    answer: "CRIT stands for Context, Role, Interview, Task. It's a framework developed by Janette Roush for creating effective AI prompts that emphasizes providing detailed, spoken context rather than simple typed commands. The framework ensures AI systems have sufficient industry-specific context to produce strategic outputs for destination marketing professionals."
  },
  {
    question: "What is Model Context Protocol (MCP) and why does it matter for tourism?",
    answer: "Model Context Protocol (MCP) is a technical breakthrough designed to solve AI's trustworthiness problem in travel planning by acting as a 'source of truth.' It allows personal AIs to reliably connect with real-time, verified data from destination marketing organizations—such as accessible travel routes, venue capacities, or attraction details—replacing hallucinated information with authoritative data. This is critical for tourism applications where accuracy directly impacts visitor experience and safety."
  },
  {
    question: "What are the four types of AI agents for destination marketing?",
    answer: "The four types are: (1) Operator Agents—automate browser tasks like lead generation or web scraping; (2) Researcher Agents—perform deep analysis and competitive research; (3) Builder Agents—create digital products like websites or applications from text prompts; (4) Automator Agents—connect different apps and orchestrate multi-step workflows. Each type serves different DMO operational needs."
  },
  {
    question: "How can DMOs prevent AI hallucinations in their tourism applications?",
    answer: "The primary solution is connecting AI systems to a 'source of truth'—a verified, authoritative database maintained by the DMO. Technologies like Model Context Protocol (MCP) enable AI to query these verified data sources in real-time, ensuring responses are based on accurate, current information rather than potentially fabricated details. Examples include databases of venue capacities, accessibility features, or attraction operating hours."
  },
  {
    question: "What is the difference between Custom GPTs and Claude Artifacts?",
    answer: "Custom GPTs are customized versions of ChatGPT configured with specific instructions and knowledge for particular use cases—like meeting follow-up or lead research. Claude Artifacts generates reusable, interactive applications from text prompts—like calculators, data visualizations, or tools. Both allow non-technical users to create AI-powered solutions, but Custom GPTs focus on conversational workflows while Artifacts creates standalone applications."
  }
]

// Questions you didn't know to ask (long-tail queries from actual webinar Q&As)
const unexpectedQuestions = [
  {
    question: "Can my competitor see what I upload to ChatGPT?",
    answer: "No—and even with model training on, it doesn't work the way people fear. AI tools aren't Wikipedia. Your query doesn't enter a searchable database. Instead, words in a particular order are added to a training corpus of billions of words to calculate the percentage likelihood of word sequences. You can't ask ChatGPT 'What did Janette prompt about her company in October 2024?' That's not how it works. That said, enterprise plans (ChatGPT Team, ChatGPT Enterprise) have model training off by default, and you can disable it in Settings → Data Controls on free accounts."
  },
  {
    question: "Why did ChatGPT make up a fake LinkedIn profile when I asked for leads?",
    answer: "Because LLMs predict plausible-sounding text—they don't verify facts. In a live demo, ChatGPT was asked to find 20 corporate meeting planners at Fortune 500 pharma companies with LinkedIn URLs. It returned convincing results, but when the links were clicked, many led to completely different people or didn't exist. The AI hallucinated names like 'Alicia Grant at Eli Lilly' with fake URLs. This is why operator agents must be connected to verified data sources using Model Context Protocol (MCP), Connectors, or APIs."
  },
  {
    question: "What's the difference between a Custom GPT and a ChatGPT Project?",
    answer: "Projects organize YOUR conversations; Custom GPTs are tools for your TEAM. A Project is a folder where you can group related chats—like all conversations about a specific campaign. A Custom GPT is a configured assistant with specific instructions and knowledge that can be shared with colleagues. If you're building something just for yourself to organize work, use a Project. If you're building something your team should use, create a Custom GPT."
  },
  {
    question: "Why does Claude sometimes refuse to continue even when I'm paying for it?",
    answer: "Claude has aggressive rate limits—even on paid plans. As Janette puts it: 'Claude is a real jerk about rate limits.' The tool will frequently run out of credits mid-conversation and tell you to wait, even with a paid subscription. This is a known limitation. Workarounds include breaking tasks into smaller chunks, switching to ChatGPT for high-volume work, or using Claude's API directly with higher limits."
  },
  {
    question: "Should I type or talk to AI?",
    answer: "Talk. Voice is becoming the primary way to interact with AI because typing takes too long and limits the detail you provide. Using voice-to-text tools like Monologue (from Every.to), Wispr, or Wispr Flow allows you to provide much richer, more natural context than you would ever type. The CRIT framework specifically recommends 'talking' your prompts because the quality of AI output is directly proportional to the context you provide—and people naturally give more detail when speaking."
  },
  {
    question: "What if ChatGPT writes a bio for me that's completely made up?",
    answer: "In a real example, ChatGPT was asked to write a conference bio and returned impressive text claiming awards and accomplishments that never happened. The AI doesn't know what's true—it predicts what sounds plausible. Always fact-check AI-generated biographical content, and consider 'priming the prompt' by uploading your actual resume or LinkedIn profile as a source of truth."
  },
  {
    question: "What's the difference between 'agentic AI' and 'AI agents'?",
    answer: "Nothing. They mean the exact same thing. As Janette explains: 'Agentic sounds fancier than just agent, but it means the same exact thing. Somebody was trying to make a regular word sound fancier.' Both refer to AI systems that can autonomously plan and execute multi-step tasks to achieve a goal."
  },
  {
    question: "Who owns AI policy at a DMO—IT, Legal, or Marketing?",
    answer: "It's a blend. AI governance doesn't fit neatly into one department. Typically it involves: the COO or operations lead (overall accountability), IT (security and systems), Legal (compliance and contracts), and HR (employee guidelines and training). The key is having clear ownership of the three core questions: What are we protecting? What are we providing to employees? What are we expecting from them?"
  }
]

export default function GlossaryClient() {
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)
  const [expandedUnexpected, setExpandedUnexpected] = useState<string | null>(null)

  return (
    <AccessCheck>
      <>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link
                href="/"
                className="flex items-center text-brand-navy hover:text-brand-cyan transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
              <div className="flex items-center">
                <Image
                  src="/brandusa-logo.png"
                  alt="Brand USA"
                  width={100}
                  height={33}
                  className="h-7 w-auto"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-brand-navy via-brand-blue to-brand-cyan py-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
              AI for Tourism Glossary
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Authoritative definitions of AI terminology for destination marketing professionals
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Glossary Section */}
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <BookOpen className="h-8 w-8 text-brand-cyan mr-3" />
                <h2 className="text-3xl font-bold text-brand-navy font-display">Key Terms</h2>
              </div>

              <div className="space-y-4">
                {terms.map((term, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() => setExpandedTerm(expandedTerm === term.name ? null : term.name)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition"
                    >
                      <h3 className="text-xl font-semibold text-brand-navy">{term.name}</h3>
                      {expandedTerm === term.name ? (
                        <ChevronUp className="h-6 w-6 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {expandedTerm === term.name && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-700 leading-relaxed">{term.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-brand-cyan mr-3" />
                <h2 className="text-3xl font-bold text-brand-navy font-display">Frequently Asked Questions</h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === faq.question ? null : faq.question)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition"
                    >
                      <h3 className="text-lg font-semibold text-brand-navy pr-4">{faq.question}</h3>
                      {expandedFaq === faq.question ? (
                        <ChevronUp className="h-6 w-6 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq === faq.question && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Questions You Didn't Know to Ask */}
            <section>
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-amber-500 mr-3" />
                <h2 className="text-3xl font-bold text-brand-navy font-display">Questions You Didn&apos;t Know to Ask</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Real questions from our webinar Q&As—the things people discover only after they start using AI.
              </p>

              <div className="space-y-4">
                {unexpectedQuestions.map((q, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-amber-50 to-white rounded-xl border border-amber-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() => setExpandedUnexpected(expandedUnexpected === q.question ? null : q.question)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-amber-50/50 transition"
                    >
                      <h3 className="text-lg font-semibold text-brand-navy pr-4">{q.question}</h3>
                      {expandedUnexpected === q.question ? (
                        <ChevronUp className="h-6 w-6 text-amber-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-amber-600 flex-shrink-0" />
                      )}
                    </button>
                    {expandedUnexpected === q.question && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-700 leading-relaxed">{q.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </>
    </AccessCheck>
  )
}
