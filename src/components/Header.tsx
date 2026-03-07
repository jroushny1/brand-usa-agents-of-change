'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/brandusa-logo.png"
              alt="Brand USA - Destination Marketing Organization for the United States"
              width={100}
              height={33}
              className="h-8 w-auto"
            />
            <span className="ml-4 text-xl font-semibold text-brand-navy font-display">
              Agents of Change
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-base font-medium text-brand-navy hover:text-brand-cyan transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-base font-medium text-brand-navy hover:text-brand-cyan transition-colors">
              About
            </Link>
            <Link href="/notes" className="text-base font-medium text-brand-navy hover:text-brand-cyan transition-colors">
              Field Notes
            </Link>
            <Link href="/glossary" className="text-base font-medium text-brand-navy hover:text-brand-cyan transition-colors">
              Glossary
            </Link>
            <Link href="/library" className="text-base font-medium text-brand-navy hover:text-brand-cyan transition-colors">
              Resources
            </Link>
            <Link href="/ai-audit" className="text-base font-medium text-brand-navy hover:text-brand-cyan transition-colors">
              AI Audit
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-brand-navy hover:text-brand-cyan hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-navy hover:text-brand-cyan hover:bg-gray-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-navy hover:text-brand-cyan hover:bg-gray-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/notes"
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-navy hover:text-brand-cyan hover:bg-gray-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Field Notes
            </Link>
            <Link
              href="/glossary"
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-navy hover:text-brand-cyan hover:bg-gray-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Glossary
            </Link>
            <Link
              href="/library"
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-navy hover:text-brand-cyan hover:bg-gray-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/ai-audit"
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-navy hover:text-brand-cyan hover:bg-gray-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
