'use client'

import { Code, Database, Zap, Search, Filter, Bell, Shield, Globe } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">About HackathonHub</h1>
            <p className="text-xl text-primary-50">
              Your gateway to discovering and tracking hackathons worldwide in real-time
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              HackathonHub was created to solve a simple problem: finding relevant hackathons shouldn't be hard. 
              We aggregate hackathon data from multiple sources in real-time, providing developers, designers, 
              and innovators with a single platform to discover opportunities that match their interests and skills.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Whether you're a beginner looking for your first hackathon or an experienced participant seeking 
              high-stakes competitions, HackathonHub helps you find the perfect event with powerful filtering 
              and real-time updates.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
              How It Works
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-primary-100 dark:bg-primary-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Multi-Source Scraping
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our advanced scraping engine continuously monitors major hackathon platforms including 
                  Devpost, Major League Hacking (MLH), and other popular sources to gather comprehensive 
                  event data.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-primary-100 dark:bg-primary-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Real-Time Updates
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Using WebSocket technology, we provide instant updates when new hackathons are discovered 
                  or existing ones are modified. Stay ahead with the latest information without refreshing.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-primary-100 dark:bg-primary-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Smart Search
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our intelligent search system lets you find hackathons by name, location, description, 
                  or any other criteria. Results update instantly as you type for a seamless experience.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-primary-100 dark:bg-primary-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Filter className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Advanced Filtering
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Filter by mode (online/offline/hybrid), category (AI, blockchain, healthcare, etc.), 
                  skill level, and prize amounts to find exactly what you're looking for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
            Technology Stack
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Code className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Frontend</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Next.js 14, React, TypeScript, Tailwind CSS, Framer Motion
                </p>
              </div>
              
              <div className="text-center">
                <Database className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Backend</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Next.js API Routes, Cheerio for scraping, Node.js
                </p>
              </div>
              
              <div className="text-center">
                <Globe className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Real-Time</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Socket.IO for WebSocket connections and live updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
              Our Methodology
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                  <span className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                  Data Collection
                </h3>
                <p className="text-gray-600 dark:text-gray-400 ml-10">
                  We use ethical web scraping techniques to collect hackathon data from public sources. 
                  Our scrapers run every 5 minutes to ensure data freshness and accuracy.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                  <span className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                  Data Processing
                </h3>
                <p className="text-gray-600 dark:text-gray-400 ml-10">
                  Raw data is cleaned, normalized, and enriched with additional metadata. We deduplicate 
                  entries and validate all URLs and dates to ensure quality.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                  <span className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                  Real-Time Distribution
                </h3>
                <p className="text-gray-600 dark:text-gray-400 ml-10">
                  Updates are instantly pushed to all connected clients via WebSocket connections, 
                  ensuring everyone sees the latest hackathons as soon as they're discovered.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                  <span className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                  Continuous Improvement
                </h3>
                <p className="text-gray-600 dark:text-gray-400 ml-10">
                  We constantly monitor and improve our scraping algorithms, add new sources, and enhance 
                  filtering capabilities based on user feedback and emerging trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <Bell className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Real-Time Notifications
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Get instant updates when new hackathons matching your interests are discovered
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Data Verification
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  All hackathon data is verified and validated to ensure accuracy and reliability
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Global Coverage
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Discover hackathons from around the world, both online and in-person events
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Lightning Fast
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Optimized performance ensures instant search results and smooth browsing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Next Hackathon?
          </h2>
          <p className="text-primary-50 mb-8 text-lg">
            Start exploring thousands of hackathons from around the world
          </p>
          <a
            href="/"
            className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Browse Hackathons
          </a>
        </div>
      </section>
    </div>
  )
}
