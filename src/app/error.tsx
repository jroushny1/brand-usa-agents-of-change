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
    <div className="min-h-screen bg-brand-navy flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <p className="text-xs tracking-widest text-brand-cyan uppercase mb-4 font-semibold">
          Something went wrong
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
          An unexpected error occurred
        </h1>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          {error.digest ? `Error reference: ${error.digest}` : 'Please try again.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center bg-brand-cyan text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-white transition"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
