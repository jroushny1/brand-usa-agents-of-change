'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export default function LoginPage() {
  return (
    <>
      <header className="border-b border-gray-200 bg-white">
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
          </div>
        </div>
      </header>

      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-brand-navy mb-4">Coming Soon</h1>
          <p className="text-gray-600 mb-8">
            Login functionality will be available soon. For now, enjoy our free webinar content!
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-navy transition"
          >
            Browse Webinars
          </Link>
        </div>
      </main>
    </>
  )
}
