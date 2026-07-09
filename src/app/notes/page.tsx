import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AccessCheck from '@/components/AccessCheck'
import { fieldNotes, fieldNoteFaqs, noteExcerpt } from '@/data/field-notes'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Field Notes',
  description: 'Research notes, insights, and evolving definitions from the AI Lab. A living knowledge base for tourism innovation.',
  openGraph: {
    title: 'Field Notes | Agents of Change',
    description: 'Research notes, insights, and evolving definitions from the AI Lab. A living knowledge base for tourism innovation.',
  },
}


export default function FieldNotesPage() {
  // TechArticle Schema for research notes
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "AI Research Field Notes",
    "description": "Research notes and insights on AI for destination marketing",
    "url": "https://janetteroush.com/notes",
    "author": {
      "@type": "Person",
      "name": "Janette Roush",
      "jobTitle": "Chief AI Officer"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Brand USA Agents of Change"
    },
    "blogPost": fieldNotes.map(note => ({
      "@type": "TechArticle",
      "headline": note.title,
      "datePublished": note.date,
      "author": {
        "@type": "Person",
        "name": "Janette Roush"
      },
      "keywords": note.tags.join(", "),
      "articleBody": note.content
    }))
  }

  // FAQPage schema - key to AI discoverability (like StackList)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": fieldNoteFaqs,
  }

  return (
    <>
      <script
        id="tech-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
      ></script>
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      ></script>

      <AccessCheck>
        <Header />

        {/* Header Section — editorial journal masthead */}
        <section className="border-b border-brand-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-12">
            <div className="dateline text-brand-slate flex flex-wrap items-center gap-x-4 gap-y-1 mb-6">
              <span>By Janette Roush</span>
              <span aria-hidden="true">·</span>
              <span>Updated regularly</span>
              <span aria-hidden="true">·</span>
              <a
                href="/notes/feed.xml"
                className="text-brand-cyan hover:underline inline-flex items-center gap-1"
              >
                <span>RSS</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"/>
                  <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"/>
                </svg>
              </a>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-brand-navy leading-tight">
              Field Notes
            </h1>
            <p className="mt-6 text-xl text-brand-gray-blue leading-relaxed max-w-3xl">
              A research log of emerging AI concepts, frameworks, and technical insights for destination marketing.
              These are living documents—observations and definitions that evolve as the technology advances.
            </p>
          </div>
        </section>

        {/* Notes List — rule-separated journal index */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div>
            {fieldNotes.map((note) => (
              <article
                key={note.id}
                className="grid grid-cols-1 md:grid-cols-[9rem_1fr] gap-2 md:gap-8 py-8 border-b border-brand-sand"
              >
                <time dateTime={note.date} className="dateline text-brand-slate pt-1.5">
                  {new Date(note.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <div>
                  {/* Title — links to the note's own page */}
                  <h2 className="font-display text-2xl md:text-3xl text-brand-navy leading-tight">
                    <Link href={`/notes/${note.id}`} className="hover:text-brand-cyan transition-colors">
                      {note.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-lg text-brand-gray-blue leading-relaxed">
                    {noteExcerpt(note.content)}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 dateline text-brand-cyan">
                    {note.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Subscribe — ink band */}
        <section className="bg-brand-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="font-display text-3xl md:text-4xl text-brand-paper leading-tight mb-4">
              Subscribe to Field Notes
            </h2>
            <p className="text-lg text-brand-paper/80 leading-relaxed mb-8 max-w-xl">
              New research insights published regularly. Subscribe via RSS to stay updated.
            </p>
            <a
              href="/notes/feed.xml"
              className="inline-flex items-center gap-2 dateline text-brand-paper border border-brand-paper px-5 py-3 hover:bg-brand-paper hover:text-brand-navy transition-colors"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"/>
                <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"/>
              </svg>
              Subscribe via RSS
            </a>
          </div>
        </section>

        <Footer />
      </AccessCheck>
    </>
  )
}
