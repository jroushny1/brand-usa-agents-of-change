'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ChevronDown, ChevronUp, BookOpen, HelpCircle, Lightbulb } from 'lucide-react'
import AccessCheck from '@/components/AccessCheck'
import { terms, faqs, unexpectedQuestions } from '@/data/glossary'

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
