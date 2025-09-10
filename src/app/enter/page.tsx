'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Lock, ArrowRight } from 'lucide-react'

export default function EnterPage() {
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(false)
    setLoading(true)
    
    // Check if code is correct (case insensitive)
    if (code.toLowerCase() === 'AmericaTheBeautiful') {
      // Set cookie and redirect
      document.cookie = `partner_access=AmericaTheBeautiful; path=/; max-age=${60 * 60 * 24 * 30}` // 30 days
      window.location.href = '/'
    } else {
      setError(true)
      setLoading(false)
      // Clear the input for retry
      setTimeout(() => setError(false), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-blue to-brand-navy flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Image
            src="/brandusa-logo.png"
            alt="Brand USA"
            width={180}
            height={60}
            className="mx-auto mb-4 brightness-0 invert"
          />
          <h1 className="text-3xl font-bold text-white mb-2">
            Agents of Change
          </h1>
          <p className="text-blue-100">
            AI Learning Platform for Tourism Leaders
          </p>
        </div>

        {/* Access Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-full mb-4">
              <Lock className="h-8 w-8 text-brand-blue" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Password Required for Access
            </h2>
            <p className="text-gray-600">
              Enter your access code to continue to the learning platform
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
                Access Code
              </label>
              <input
                id="code"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter your partner code"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition ${
                  error ? 'border-red-500' : 'border-gray-300'
                }`}
                required
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">
                  That's not the right code. Try again! 💪
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !code}
              className="w-full bg-brand-blue text-white py-3 px-4 rounded-lg font-semibold hover:bg-brand-navy transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <span>Checking...</span>
              ) : (
                <>
                  Access Platform
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600">
              Don't have an access code?{' '}
              <a href="mailto:jroush@thebrandusa.com" className="text-brand-blue hover:underline">
                Contact Brand USA
              </a>
            </p>
          </div>
        </div>

        {/* Encouraging message */}
        <p className="text-center text-blue-100 mt-8 text-sm">
          🚀 Ready to transform tourism with AI? You got this!
        </p>
      </div>
    </div>
  )
}
