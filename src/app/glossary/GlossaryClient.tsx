'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react'
import AccessCheck from '@/components/AccessCheck'
import Footer from '@/components/Footer'
import { terms, faqs, unexpectedQuestions } from '@/data/glossary'

export default function GlossaryClient() {
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)
  const [expandedUnexpected, setExpandedUnexpected] = useState<string | null>(null)

  return (
    <AccessCheck>
      <>
        {/* Header */}
        <header className="bg-brand-paper border-b border-brand-sand sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link
                href="/"
                className="flex items-center dateline text-brand-navy hover:text-brand-cyan transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
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

        {/* Page header */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-14 border-b border-brand-navy">
          <div className="dateline text-brand-cyan mb-5">Reference</div>
          <h1 className="font-display font-medium text-brand-navy leading-none text-5xl md:text-6xl">
            AI for Tourism Glossary
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-navy">
            Authoritative definitions of AI terminology for destination marketing professionals
          </p>
        </section>

        {/* Main Content */}
        <main className="min-h-screen py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Glossary Section */}
            <section className="mb-20">
              <div className="dateline text-brand-slate flex items-center gap-4 mb-10">
                <h2 className="dateline">Key Terms</h2>
                <span className="flex-1 h-px bg-brand-sand" aria-hidden="true" />
              </div>

              <div className="border-t border-brand-navy">
                {terms.map((term, index) => (
                  <div key={index} className="border-b border-brand-sand">
                    <button
                      onClick={() => setExpandedTerm(expandedTerm === term.name ? null : term.name)}
                      className="group w-full flex items-center justify-between gap-4 py-5 text-left"
                    >
                      <h3 className="font-display text-2xl text-brand-navy group-hover:text-brand-cyan transition-colors">
                        {term.name}
                      </h3>
                      {expandedTerm === term.name ? (
                        <ChevronUp className="h-5 w-5 text-brand-slate flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-brand-slate flex-shrink-0" />
                      )}
                    </button>
                    {expandedTerm === term.name && (
                      <div className="pb-7">
                        <p className="max-w-2xl leading-relaxed text-brand-navy">{term.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-20">
              <div className="dateline text-brand-slate flex items-center gap-4 mb-10">
                <h2 className="dateline">Frequently Asked Questions</h2>
                <span className="flex-1 h-px bg-brand-sand" aria-hidden="true" />
              </div>

              <div className="border-t border-brand-navy">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-brand-sand">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === faq.question ? null : faq.question)}
                      className="group w-full flex items-center justify-between gap-4 py-5 text-left"
                    >
                      <h3 className="text-xl leading-snug text-brand-navy group-hover:text-brand-cyan transition-colors pr-4">
                        {faq.question}
                      </h3>
                      {expandedFaq === faq.question ? (
                        <ChevronUp className="h-5 w-5 text-brand-slate flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-brand-slate flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq === faq.question && (
                      <div className="pb-7">
                        <p className="max-w-2xl leading-relaxed text-brand-navy">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Questions You Didn't Know to Ask */}
            <section>
              <div className="dateline text-brand-cyan flex items-center gap-4 mb-6">
                <h2 className="dateline">Questions You Didn&apos;t Know to Ask</h2>
                <span className="flex-1 h-px bg-brand-sand" aria-hidden="true" />
              </div>
              <p className="text-brand-slate mb-10 max-w-2xl">
                Real questions from our webinar Q&As—the things people discover only after they start using AI.
              </p>

              <div className="border-t border-brand-navy">
                {unexpectedQuestions.map((q, index) => (
                  <div key={index} className="border-b border-brand-sand">
                    <button
                      onClick={() => setExpandedUnexpected(expandedUnexpected === q.question ? null : q.question)}
                      className="group w-full flex items-center justify-between gap-4 py-5 text-left"
                    >
                      <h3 className="text-xl leading-snug text-brand-navy group-hover:text-brand-cyan transition-colors pr-4">
                        {q.question}
                      </h3>
                      {expandedUnexpected === q.question ? (
                        <ChevronUp className="h-5 w-5 text-brand-cyan flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-brand-cyan flex-shrink-0" />
                      )}
                    </button>
                    {expandedUnexpected === q.question && (
                      <div className="pb-7">
                        <p className="max-w-2xl leading-relaxed text-brand-navy">{q.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </>
    </AccessCheck>
  )
}
