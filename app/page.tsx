'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Page() {
  useEffect(() => {
    const loadTally = () => {
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        script.onload = () => {
          // @ts-ignore
          if (window.Tally) {
            // @ts-ignore
            window.Tally.loadEmbeds();
          }
        };
        document.body.appendChild(script);
      }
    };

    loadTally();
  }, []);

  return (
    <div className={`flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white ${inter.className}`}>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        
        .floating {
          animation: float 3s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-shadow {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .card-shadow-hover {
          transition: all 0.3s ease;
        }

        .card-shadow-hover:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transform: translateY(-2px);
        }
      `}</style>

      {/* Navigation */}
      <header className="flex items-center justify-between py-6 px-6 md:px-12">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Digest
        </Link>
        <nav className="flex items-center gap-4">
          <Button 
            variant="ghost"
            className="text-gray-600 hover:text-gray-900"
            onClick={() => {
              document.getElementById('how-it-works')?.scrollIntoView({ 
                behavior: 'smooth'
              });
            }}
          >
            How it works
          </Button>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6"
            onClick={() => {
              document.getElementById('early-access-form')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
              });
            }}
          >
            Get Started Free
          </Button>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6 fade-in">
              📚 Save everything, read what matters
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight fade-in delay-1">
              Your bookmarks,<br />
              <span className="gradient-text">finally organized</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto fade-in delay-2">
              Text any link to Digest. Get instant summaries, smart categories, and audio versions for your commute. No more tab hoarding.
            </p>
            <div className="fade-in delay-3">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg font-medium"
                onClick={() => {
                  document.getElementById('early-access-form')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                  });
                }}
              >
                Start Free Trial →
              </Button>
              <p className="text-sm text-gray-500 mt-3">No credit card required</p>
            </div>
          </div>
        </section>

        {/* Visual Demo Section */}
        <section className="py-16 px-6 md:px-12" id="how-it-works">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                As simple as sending a text
              </h2>
              <p className="text-xl text-gray-600">
                Save from any app, on any device
              </p>
            </div>

            {/* Three Step Process */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Step 1 */}
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Text any URL</h3>
                <p className="text-gray-600">
                  Found something interesting? Just text the link to your Digest number
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. We organize it</h3>
                <p className="text-gray-600">
                  AI automatically categorizes, summarizes, and extracts key insights
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Listen anywhere</h3>
                <p className="text-gray-600">
                  Get audio summaries for your commute, workout, or whenever you want
                </p>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
              <div className="max-w-md mx-auto">
                <div className="bg-white rounded-2xl card-shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-500">Messages</span>
                    <span className="text-sm text-gray-400">now</span>
                  </div>
                  
                  {/* Message thread */}
                  <div className="space-y-3">
                    <div className="flex justify-end">
                      <div className="bg-blue-600 text-white rounded-2xl rounded-br-sm px-4 py-2 max-w-xs">
                        <p className="text-sm">https://techcrunch.com/2024/ai-tools-productivity</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 max-w-xs">
                        <p className="text-sm text-green-600 font-medium mb-1">✓ Saved to Tech</p>
                        <p className="text-sm text-gray-700">
                          <strong>Summary:</strong> New AI tools are revolutionizing workplace productivity by automating routine tasks...
                        </p>
                        <p className="text-xs text-gray-500 mt-2">🎧 Audio ready (3 min)</p>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-blue-600 text-white rounded-2xl rounded-br-sm px-4 py-2 max-w-xs">
                        <p className="text-sm">https://twitter.com/naval/status/...</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 max-w-xs">
                        <p className="text-sm text-green-600 font-medium mb-1">✓ Saved to Wisdom</p>
                        <p className="text-sm text-gray-700">
                          <strong>Thread:</strong> Naval on building wealth through leverage and compound interest...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Built for how you actually save content
              </h2>
              <p className="text-xl text-gray-600">
                Stop losing great content in endless bookmark folders
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 card-shadow-hover">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant save</h3>
                <p className="text-gray-600">
                  Works from any app - Twitter, Reddit, Safari, Chrome. Just copy and text.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 card-shadow-hover">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart categories</h3>
                <p className="text-gray-600">
                  AI automatically organizes your saves into topics you care about.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 card-shadow-hover">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Audio summaries</h3>
                <p className="text-gray-600">
                  Turn reading time into listening time. Perfect for commutes.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 card-shadow-hover">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Key insights</h3>
                <p className="text-gray-600">
                  Extract the important parts so you never miss what matters.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 card-shadow-hover">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow through</h3>
                <p className="text-gray-600">
                  Gentle reminders help you actually consume what you save.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 card-shadow-hover">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Clean dashboard</h3>
                <p className="text-gray-600">
                  See everything you&apos;ve saved in one beautiful, organized place.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Categories Showcase */}
        <section className="py-16 px-6 md:px-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Organize your saved content automatically
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI automatically categorizes your saved articles, videos, and resources. 
                Browse by topic and get AI-generated summaries with audio playback.
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl card-shadow overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="450" viewBox="0 0 1000 450" className="w-full h-auto">
                  {/* Main Content Area */}
                  <rect x="0" y="0" width="1000" height="450" rx="12" fill="white"/>
                  
                  {/* Title */}
                  <text x="30" y="40" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#2d3748">Your Content Categories</text>
                  <text x="30" y="65" fontFamily="Arial, sans-serif" fontSize="16" fill="#718096">Explore your saved content organized by topic with AI-generated summaries</text>
                  
                  {/* Bitcoin Card */}
                  <rect x="30" y="90" width="460" height="220" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
                  <rect x="50" y="110" width="32" height="32" rx="8" fill="#f7931a"/>
                  <text x="62" y="132" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="white">₿</text>
                  <text x="95" y="132" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#2d3748">Bitcoin</text>
                  
                  {/* Bitcoin Metadata */}
                  <text x="50" y="165" fontFamily="Arial, sans-serif" fontSize="10" fill="#a0aec0">ARTICLES</text>
                  <text x="50" y="180" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#4a5568">6</text>
                  <text x="140" y="165" fontFamily="Arial, sans-serif" fontSize="10" fill="#a0aec0">TIME PERIOD</text>
                  <text x="140" y="180" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#4a5568">3 weeks</text>
                  <text x="250" y="165" fontFamily="Arial, sans-serif" fontSize="10" fill="#a0aec0">LISTEN TIME</text>
                  <text x="250" y="180" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#4a5568">12 min</text>
                  
                  {/* Bitcoin Summary */}
                  <text x="50" y="205" fontFamily="Arial, sans-serif" fontSize="13" fill="#718096">Recent developments in Bitcoin include regulatory updates from major</text>
                  <text x="50" y="220" fontFamily="Arial, sans-serif" fontSize="13" fill="#718096">economies, institutional adoption trends, and technical analysis of price</text>
                  <text x="50" y="235" fontFamily="Arial, sans-serif" fontSize="13" fill="#718096">movements. Key topics cover ETF approvals and mining sustainability.</text>
                  
                  {/* Bitcoin Buttons */}
                  <rect x="50" y="250" width="160" height="32" rx="6" fill="#667eea"/>
                  <text x="130" y="269" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">Listen (12 min)</text>
                  <rect x="230" y="250" width="140" height="32" rx="6" fill="#f7fafc" stroke="#e2e8f0" strokeWidth="1"/>
                  <text x="300" y="269" fontFamily="Arial, sans-serif" fontSize="12" fill="#4a5568" textAnchor="middle">Read Summary</text>
                  
                  {/* MCP Server Card */}
                  <rect x="510" y="90" width="460" height="220" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
                  <rect x="530" y="110" width="32" height="32" rx="8" fill="#10b981"/>
                  <text x="540" y="132" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="white">⚡</text>
                  <text x="575" y="132" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#2d3748">MCP Server Development</text>
                  
                  {/* MCP Metadata */}
                  <text x="530" y="165" fontFamily="Arial, sans-serif" fontSize="10" fill="#a0aec0">ARTICLES</text>
                  <text x="530" y="180" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#4a5568">3</text>
                  <text x="620" y="165" fontFamily="Arial, sans-serif" fontSize="10" fill="#a0aec0">TIME PERIOD</text>
                  <text x="620" y="180" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#4a5568">Aug 1-12</text>
                  <text x="730" y="165" fontFamily="Arial, sans-serif" fontSize="10" fill="#a0aec0">LISTEN TIME</text>
                  <text x="730" y="180" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#4a5568">14 min</text>
                  
                  {/* MCP Summary */}
                  <text x="530" y="205" fontFamily="Arial, sans-serif" fontSize="13" fill="#718096">Comprehensive guide to building MCP (Model Context Protocol) servers,</text>
                  <text x="530" y="220" fontFamily="Arial, sans-serif" fontSize="13" fill="#718096">covering architecture patterns, implementation best practices, and</text>
                  <text x="530" y="235" fontFamily="Arial, sans-serif" fontSize="13" fill="#718096">integration strategies. Topics include server setup and debugging.</text>
                  
                  {/* MCP Buttons */}
                  <rect x="530" y="250" width="160" height="32" rx="6" fill="#667eea"/>
                  <text x="610" y="269" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">Listen (14 min)</text>
                  <rect x="710" y="250" width="140" height="32" rx="6" fill="#f7fafc" stroke="#e2e8f0" strokeWidth="1"/>
                  <text x="780" y="269" fontFamily="Arial, sans-serif" fontSize="12" fill="#4a5568" textAnchor="middle">Read Summary</text>
                  
                  {/* Stats Bar */}
                  <rect x="30" y="330" width="940" height="60" rx="8" fill="#f7fafc"/>
                  <text x="140" y="355" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#667eea">9</text>
                  <text x="125" y="375" fontFamily="Arial, sans-serif" fontSize="14" fill="#718096">Total Articles</text>
                  
                  <text x="350" y="355" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#667eea">26</text>
                  <text x="330" y="375" fontFamily="Arial, sans-serif" fontSize="14" fill="#718096">Minutes of Audio</text>
                  
                  <text x="580" y="355" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#667eea">2</text>
                  <text x="555" y="375" fontFamily="Arial, sans-serif" fontSize="14" fill="#718096">Active Categories</text>
                  
                  <text x="800" y="355" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#667eea">3</text>
                  <text x="785" y="375" fontFamily="Arial, sans-serif" fontSize="14" fill="#718096">Weeks of Content</text>
                </svg>
              </div>
              
              <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Auto-categorization</h3>
                  <p className="text-gray-600 text-sm">Content automatically sorted by topic and theme</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI Summaries</h3>
                  <p className="text-gray-600 text-sm">Get the key insights without reading full articles</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9 9a3 3 0 000 6h6V9H9z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Audio Playback</h3>
                  <p className="text-gray-600 text-sm">Listen to summaries during commutes or workouts</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial/Problem Section */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Join thousands who finally read what they save
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">73%</div>
                  <p className="text-gray-600">of bookmarks are never opened again</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">2.5hrs</div>
                  <p className="text-gray-600">saved per week with audio summaries</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">10x</div>
                  <p className="text-gray-600">more content actually consumed</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 italic mb-6">
                &ldquo;I used to have 500+ tabs open. Now I just text links to Digest and actually learn from them during my commute.&rdquo;
              </p>
              <p className="text-sm text-gray-500">— Sarah K., Product Manager</p>
            </div>
          </div>
        </section>

        {/* CTA Section with Form */}
        <section id="early-access-form" className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start your free trial today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              No credit card required. Cancel anytime.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-2xl font-bold text-gray-900">$10/month</span>
                <span className="text-gray-500">after 14-day free trial</span>
              </div>
              <div className="max-w-[400px] mx-auto">
                <iframe 
                  data-tally-src="https://tally.so/embed/wM756p?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height="230" 
                  frameBorder="0" 
                  title="Sign Up for Early Access"
                ></iframe>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              ✓ Unlimited saves &nbsp;&nbsp; ✓ All audio summaries &nbsp;&nbsp; ✓ Smart categories
            </p>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 md:px-12 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2024 Digest, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              Terms
            </a>
            <a href="mailto:hello@digest.app" className="text-gray-400 hover:text-gray-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}