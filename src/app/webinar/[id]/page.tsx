'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Download, Clock, BookOpen } from 'lucide-react'
import HLSPlayer from './hls-player'
import AccessCheck from '@/components/AccessCheck'

// This would come from your database
const webinarData = {
  'intro-ai-agents': {
    id: 'intro-ai-agents',
    title: 'Introduction to AI Agents',
    description: 'Learn how AI agents can transform your DMO operations with practical examples and implementation strategies.',
    duration: '38 min',
    muxPlaybackId: '3TPl1Jgmg01b9BdEXU4WVtJbz4DSetOA7TsyHGvjxJQs',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    chapters: [
      { time: 0, title: 'Introduction to AI Agents' },
      { time: 13, title: 'Janette\'s AI Agenda at Brand USA' },
      { time: 79, title: 'What is an AI Agent?' },
      { time: 119, title: 'The Four Jobs of Today\'s AI Agents' },
      { time: 154, title: 'Operator Agents: Taking Control of Your Tasks' },
      { time: 718, title: 'Researcher Agents: Deep Dives into Information' },
      { time: 875, title: 'Builder Agents: Creating Digital Products from Text' },
      { time: 1115, title: 'Automator Agents: Connecting Apps and Eliminating Repetitive Steps' },
      { time: 1677, title: 'How Will Agents Evolve? A Look at 2027 and 2030' },
      { time: 1913, title: 'The Future of AI: Personal AI and the Model Context Protocol (MCP)' },
      { time: 2164, title: 'Our AI Mantras' },
      { time: 2274, title: 'Conclusion' },
    ],
    resources: [
      { name: 'AI Agents Playbook', url: '/resources/ai-agents-playbook.pdf' },
      { name: 'Implementation Checklist', url: '/resources/implementation-checklist.pdf' },
      { name: 'Prompt Templates', url: '/resources/prompt-templates.pdf' },
    ],
  },
  'ai-101': {
    id: 'ai-101',
    title: 'AI 101',
    description: 'Foundation concepts of AI for tourism professionals. Start here to build your AI knowledge base.',
    duration: '45 min',
    muxPlaybackId: 'ue02eduy5uif9Do00iXI6jG02u02O600tu00FauvIOLX2Ayg8',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    chapters: [
      { time: 0, title: 'Introduction: Generative AI 101' },
      { time: 24, title: 'Today\'s Agenda' },
      { time: 94, title: 'What is ChatGPT?' },
      { time: 218, title: 'Prompting Basics' },
      { time: 345, title: 'Interactive AI Break' },
      { time: 457, title: 'How to Cheat with AI: A Practical Example' },
      { time: 655, title: 'Prompting in Action: Creating a Campaign Strategy' },
      { time: 1061, title: 'Watch-outs and Governance' },
      { time: 1754, title: 'Practical Account Setup for ChatGPT' },
      { time: 2041, title: 'Using Custom GPTs' },
      { time: 2387, title: 'Next Steps for Your Organization' },
      { time: 2678, title: 'Conclusion & Thank You' },
    ],
    resources: [
      { name: 'AI Fundamentals Guide', url: '/resources/ai-fundamentals.pdf' },
      { name: 'Glossary of AI Terms', url: '/resources/ai-glossary.pdf' },
      { name: 'Further Reading List', url: '/resources/reading-list.pdf' },
    ],
  },
  'ai-tool-playground': {
    id: 'ai-tool-playground',
    title: 'AI Tool Playground',
    description: 'Hands-on exploration of AI tools specifically curated for destination marketing teams.',
    duration: '44 min',
    muxPlaybackId: 'H6B01F00lAc4PGT8Ick32jTwVa7LVA8Y5yqTq8xyD6DzA',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    chapters: [
      { time: 0, title: 'Welcome to the AI Tool Playground' },
      { time: 46, title: 'Janette\'s AI Agenda' },
      { time: 123, title: 'Frontier Models: The Basis of AI Tools' },
      { time: 141, title: 'Tool 1: ChatGPT (OpenAI)' },
      { time: 286, title: 'Tool 2: Claude (Anthropic)' },
      { time: 396, title: 'Tool 3: Gemini & NotebookLM (Google)' },
      { time: 662, title: 'Image Generation Tools' },
      { time: 806, title: 'Tool 4: Midjourney' },
      { time: 1073, title: 'Video Generation & Editing' },
      { time: 1077, title: 'Tool 5: Descript' },
      { time: 1261, title: 'Tool 6: Runway' },
      { time: 1366, title: 'Tool 7: Pika' },
      { time: 1375, title: 'Vibe-Coding Tools' },
      { time: 1380, title: 'Tool 8: Lovable' },
      { time: 1542, title: 'Tool 9: Agent.ai & n8n' },
      { time: 1736, title: 'Meeting & Presentation Tools' },
      { time: 1739, title: 'Tool 10: Beautiful.ai' },
      { time: 1857, title: 'Tool 11: Napkin' },
      { time: 2022, title: 'Summary and Live Q&A' },
    ],
    resources: [
      { name: 'Tool Comparison Chart', url: '/resources/tool-comparison.pdf' },
      { name: 'Quick Start Guides', url: '/resources/quick-start-guides.pdf' },
      { name: 'DMO Tool Templates', url: '/resources/dmo-templates.pdf' },
    ],
  },
  'ai-dmo-leadership': {
    id: 'ai-dmo-leadership',
    title: 'AI for DMO Leadership',
    description: 'Strategic guidance for tourism leaders on AI adoption, governance, and organizational transformation.',
    duration: '41 min',
    muxPlaybackId: 'NQACe9aTXRuntXd4r7eHWsXVDFVhaUUwyotE8RF5SQE',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    chapters: [
      { time: 0, title: 'Introduction & Welcome' },
      { time: 56, title: 'AI in the Tourism Industry: Three Focus Areas' },
      { time: 103, title: 'Scaling AI at Your DMO' },
      { time: 158, title: 'Building AI Workflows & Team Adoption' },
      { time: 298, title: 'The Importance of SOPs and Process Mapping' },
      { time: 363, title: 'AI Governance: Addressing Employee Concerns' },
      { time: 412, title: 'AI Risk Areas: Security, Privacy, and Content Integrity' },
      { time: 438, title: 'Best Practices for Data Security & Privacy' },
      { time: 672, title: 'Intellectual Property and AI Use' },
      { time: 950, title: 'Shadow AI & BYO AI: Risks and Recommendations' },
      { time: 1139, title: 'Developing AI Guidelines for Your Organization' },
      { time: 1288, title: 'Brand USA\'s AI Guidelines Example' },
      { time: 1328, title: 'Maintaining Human Oversight & Responsibility' },
      { time: 1477, title: 'Red Teaming and Ongoing AI Model Evaluation' },
      { time: 1556, title: 'Vendor Partnerships & Tool Vetting' },
      { time: 1723, title: 'AI Mantras & Leadership Focus' },
      { time: 1793, title: 'Encouraging AI Adoption: Start Small, Think Big' },
      { time: 1823, title: 'Top-Down and Bottom-Up AI Adoption' },
      { time: 2047, title: 'Q&A: Tools, Resources, and Training' },
      { time: 2376, title: 'Closing Thoughts & Future Topics' },
    ],
    resources: [
      { name: 'AI Implementation Roadmap', url: '/resources/ai-implementation-roadmap.pdf' },
      { name: 'Vendor & Tool Vetting Checklist', url: '/resources/vendor-tool-vetting-checklist.pdf' },
      { name: 'AI Governance Framework Template', url: '/resources/ai-governance-framework-template.pdf' },
    ],
  },
  'custom-gpts': {
    id: 'custom-gpts',
    title: 'Custom GPTs: Your New AI Colleague!',
    description: 'Discover how to create and deploy custom GPT assistants that revolutionize your tourism marketing workflows.',
    duration: '34 min',
    muxPlaybackId: 'aYcGzhmJnP8jdz2o92EPP00JgmRWd2jLNcChaUgytgG8',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    chapters: [
      { time: 13, title: 'What is a Custom GPT?' },
      { time: 25, title: 'Use Case 1: Travel & Expense Policy Assistant' },
      { time: 157, title: 'Why Use Reusable Prompts?' },
      { time: 219, title: 'How to Edit a GPT: A Look at the Backend' },
      { time: 251, title: 'The "Instructions": Your Forever Prompt' },
      { time: 269, title: 'The "Knowledge": Grounding Your GPT in Facts' },
      { time: 348, title: 'Troubleshooting: When Your GPT Makes a Mistake' },
      { time: 525, title: 'Choosing the Right AI Model' },
      { time: 604, title: 'Selecting Capabilities (Web Search, Image Generation, etc.)' },
      { time: 649, title: 'How to Create a New Custom GPT From Scratch' },
      { time: 767, title: 'Building a GPT to Write Press Releases' },
      { time: 910, title: 'Previewing & Testing Your Custom GPT' },
      { time: 1015, title: 'How to Share & Publish Your GPT' },
      { time: 1071, title: 'Use Case 2: Automating Meeting Follow-Up' },
      { time: 1243, title: 'Creating a "CRM GPT" to Extract Meeting Details' },
      { time: 1341, title: 'Creating a "Coaching GPT" for Staff Training' },
      { time: 1471, title: 'More Ideas for Custom GPTs' },
      { time: 1744, title: 'Live Q&A and Conclusion' },
    ],
    resources: [
      { name: 'Custom GPT Creation Guide', url: '/resources/custom-gpt-guide.pdf' },
      { name: 'GPT Prompt Templates', url: '/resources/gpt-prompt-templates.pdf' },
      { name: 'Implementation Worksheet', url: '/resources/gpt-implementation-worksheet.pdf' },
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
    chapters: [
      { time: 0, title: 'Introduction & The Role of AI in Business Events' },
      { time: 72, title: 'Understanding Custom GPTs: Introduction, Example & Benefits' },
      { time: 218, title: 'Building Custom GPTs: A Step-by-Step Guide' },
      { time: 598, title: 'Practical AI Applications: Meeting Follow-up, Competitive Analysis & Lead Research' },
      { time: 1477, title: 'Introduction to Vibe Coding: Concept, Future & Prompting' },
      { time: 1695, title: 'Vibe Coding in Action: Demos (Visit Orlando MapCon & Replit)' },
      { time: 2478, title: 'AI Integration, Workflow & Conclusion' },
    ],
    resources: [
      { name: 'Convention Sales AI Guide', url: '/resources/convention-sales-guide.pdf' },
      { name: 'Implementation Templates', url: '/resources/convention-sales-templates.pdf' },
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
    chapters: [
      { time: 0, title: 'The CRIT Framework for AI Prompting' },
      { time: 60, title: 'Example 1: Prompting for a Workshop Plan' },
      { time: 330, title: 'How the AI Interviews You for Better Results' },
      { time: 490, title: 'Example 2: Brainstorming a Marketing Plan with a PDF' },
      { time: 707, title: 'Conclusion: Why Context is Key for AI' },
    ],
    resources: [
      { name: 'CRIT Framework Guide', url: '/resources/crit-framework-guide.pdf' },
      { name: 'Prompt Templates', url: '/resources/crit-prompt-templates.pdf' },
    ],
  },
  'clueless-packing-app': {
    id: 'clueless-packing-app',
    title: 'Building a "Clueless"-Inspired AI Packing App Using Claude Artifacts',
    description: 'Using Anthropic\'s Claude, the team used the "artifacts" feature—described as a reusable prompt similar to a custom GPT—to build a "Business Trip Packing Assistant." The app\'s design was inspired by the iconic virtual closet from the movie Clueless. Learn how the tool was developed entirely with natural language prompts (like "make it more sparkly"), resulting in a "sparkly, interactive app" that any employee can now use to plan their clothing for business trips.',
    duration: '5 min',
    muxPlaybackId: 'O7pzzrithO55xsLb6p02GCgtmGyXTO1C7rSztJDl0002Bo',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    chapters: [
      { time: 0, title: 'Building a Business Trip Packing Assistant with Claude' },
    ],
    resources: [
      { name: 'Claude Artifacts Guide', url: '/resources/claude-artifacts-guide.pdf' },
      { name: 'Prompt Examples', url: '/resources/claude-prompt-examples.pdf' },
    ],
  },
}

export default function WebinarPage({ params }: { params: { id: string } }) {
  const webinar = webinarData[params.id as keyof typeof webinarData]

  if (!webinar) {
    return (
      <AccessCheck>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl text-gray-600">Webinar not found</p>
        </div>
      </AccessCheck>
    )
  }

  return (
    <>
      <AccessCheck>
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Resources */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-brand-navy mb-4">Resources</h2>
              <div className="space-y-3">
                {webinar.resources.map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg border border-gray-200 bg-gray-50"
                  >
                    <div className="flex items-center">
                      <Download className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-gray-700 font-medium">
                        {resource.name}
                      </span>
                    </div>
                    <span className="text-xs text-blue-600 font-medium">Coming Soon</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </AccessCheck>
    </>
  )
}