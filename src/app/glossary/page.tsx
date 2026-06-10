import type { Metadata } from 'next'
import GlossaryClient from './GlossaryClient'
import { terms, faqs, unexpectedQuestions } from '@/data/glossary'

export const metadata: Metadata = {
  title: 'AI for Tourism Glossary',
  description: 'Authoritative definitions of AI terminology for destination marketing professionals — AI agents, MCP, CRIT framework, Custom GPTs, and more, with FAQs from real webinar Q&As.',
  alternates: { canonical: 'https://janetteroush.com/glossary' },
  openGraph: {
    title: 'AI for Tourism Glossary',
    description: 'Authoritative definitions of AI terminology for destination marketing professionals.',
  },
}

export default function GlossaryPage() {
  // DefinedTermSet Schema
  const definedTermSetSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "AI for Tourism Glossary",
    "description": "Authoritative definitions of AI terminology for destination marketing organizations",
    "publisher": {
      "@type": "Organization",
      "name": "Brand USA Agents of Change"
    },
    "hasDefinedTerm": terms.map(term => ({
      "@type": "DefinedTerm",
      "name": term.name,
      "description": term.description
    }))
  }

  // FAQPage Schema - includes both common FAQs and unexpected questions for comprehensive AI discoverability
  const allQuestions = [...faqs, ...unexpectedQuestions]
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allQuestions.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      {/* JSON-LD Structured Data - Server-Rendered */}
      <script
        id="defined-term-set-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      ></script>
      <script
        id="faq-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      ></script>

      <GlossaryClient />
    </>
  )
}
