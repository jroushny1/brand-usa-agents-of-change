'use client'

import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto w-full border-t border-brand-navy pt-10 pb-16">
        <p className="dateline text-brand-cyan mb-6">
          Something went wrong
        </p>
        <h1 className="font-display font-medium text-brand-navy leading-none text-5xl md:text-7xl mb-8">
          An unexpected error occurred
        </h1>
        <p className="max-w-[68ch] text-lg leading-relaxed text-brand-gray-blue mb-10">
          {error.digest ? `Error reference: ${error.digest}` : 'Please try again.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center dateline text-brand-navy border border-brand-navy px-5 py-3 hover:bg-brand-navy hover:text-brand-paper transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center dateline text-brand-navy border border-brand-navy px-5 py-3 hover:border-brand-cyan hover:text-brand-cyan transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
