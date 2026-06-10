import Link from 'next/link'
import Header from '@/components/Header'
import AccessCheck from '@/components/AccessCheck'
import FieldNoteContent from '@/components/FieldNoteContent'
import { fieldNotes, fieldNoteFaqs } from '@/data/field-notes'
import { FileText, Calendar, Tag } from 'lucide-react'
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
    "url": "https://www.janetteroush.com/notes",
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

        <div className="min-h-screen bg-gray-50">
          {/* Header Section */}
          <section className="bg-white border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-10 w-10 text-brand-cyan" />
                <h1 className="text-4xl md:text-5xl font-bold text-brand-navy font-display">
                  Field Notes
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                A research log of emerging AI concepts, frameworks, and technical insights for destination marketing.
                These are living documents—observations and definitions that evolve as the technology advances.
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
                <span>By Janette Roush</span>
                <span>•</span>
                <span>Updated regularly</span>
                <span>•</span>
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
            </div>
          </section>

          {/* Notes List */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-12">
              {fieldNotes.map((note) => (
                <article
                  key={note.id}
                  className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={note.date}>
                        {new Date(note.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                  </div>

                  {/* Title — links to the note's own page */}
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4 leading-tight">
                    <Link href={`/notes/${note.id}`} className="hover:text-brand-blue transition-colors">
                      {note.title}
                    </Link>
                  </h2>

                  {/* Tags */}
                  <div className="flex items-center gap-2 mb-6 flex-wrap">
                    <Tag className="h-4 w-4 text-gray-400" />
                    {note.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 bg-brand-accent-cream text-brand-navy rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Content */}
                  <FieldNoteContent content={note.content} />
                </article>
              ))}
            </div>
          </section>

          {/* Footer CTA */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-brand-blue text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">
                Subscribe to Field Notes
              </h2>
              <p className="text-blue-100 mb-6">
                New research insights published regularly. Subscribe via RSS to stay updated.
              </p>
              <a
                href="/notes/feed.xml"
                className="inline-flex items-center gap-2 bg-white text-brand-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"/>
                  <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"/>
                </svg>
                Subscribe via RSS
              </a>
            </div>
          </section>
        </div>
      </AccessCheck>
    </>
  )
}
