'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-slate-500"></div>
    </div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark-900 transition-colors duration-200">

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative text-white py-24 min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-slate-700 via-slate-600 to-blue-700">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent z-0"></div>

          <div className="relative container mx-auto px-4 z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="flex flex-col items-start text-left mb-8 max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
                >
                  Understanding One Nation One Election
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl"
                >
                  A neutral, educational platform to help citizens understand the concept and identify misinformation — in simple, accessible language.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/learn"
                    className="inline-block py-4 px-8 rounded-lg bg-white text-slate-800 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Continue →
                  </Link>
                </motion.div>
              </div>

              {/* Hero Image */}
              <div className="relative w-full h-[280px] md:h-[360px] lg:h-[420px]">
                <Image
                  src="/images/student-hero.png"
                  alt="Student learning about ONOE"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-contain md:object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-dark-900 dark:to-dark-800 transition-colors duration-200">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-dark-50">Your Learning Journey</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Follow these three simple steps to understand One Nation One Election
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Step 1 */}
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8 text-center relative transition-colors duration-200"
              >
                <div className="bg-gradient-to-r from-slate-500 to-slate-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="absolute -top-2 -left-2 bg-slate-600 rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                  <span className="text-lg font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-dark-50">Learn About ONOE</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Understand what One Nation One Election means, its constitutional aspects, and historical context in simple language
                </p>
                <Link href="/learn" className="inline-flex items-center text-slate-600 font-medium hover:text-slate-700">
                  Start Learning →
                </Link>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8 text-center relative transition-colors duration-200"
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -left-2 bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                  <span className="text-lg font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-dark-50">Explore Facts</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Distinguish between claims and verified information with our neutral, source-based fact-checking section
                </p>
                <Link href="/fact-check" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                  Check Facts →
                </Link>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8 text-center relative transition-colors duration-200"
              >
                <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="absolute -top-2 -left-2 bg-teal-600 rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                  <span className="text-lg font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-dark-50">Stay Informed</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Access official documents, committee reports, and credible resources to deepen your understanding
                </p>
                <Link href="/resources" className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700">
                  Browse Resources →
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Understanding Matters Section */}
        <section id="why" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-dark-800 dark:to-dark-900 transition-colors duration-200">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-dark-50">Why Understanding Matters</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The challenges citizens face when trying to understand One Nation One Election
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 border border-slate-100 dark:border-dark-700 transition-colors duration-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-slate-100 dark:bg-slate-800 p-3">
                    <svg className="h-6 w-6 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center mb-2 dark:text-dark-50">Information Overload</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                  Too much conflicting information makes it hard to understand the actual concept
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 border border-orange-100 dark:border-dark-700 transition-colors duration-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-orange-100 dark:bg-orange-900/30 p-3">
                    <svg className="h-6 w-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center mb-2 dark:text-dark-50">Misinformation</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                  False claims and rumors spread quickly through social media and messaging apps
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 border border-blue-100 dark:border-dark-700 transition-colors duration-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3">
                    <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center mb-2 dark:text-dark-50">Partisan Bias</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                  Most sources have political leanings, making neutral information hard to find
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 border border-teal-100 dark:border-dark-700 transition-colors duration-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-teal-100 dark:bg-teal-900/30 p-3">
                    <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center mb-2 dark:text-dark-50">Complex Language</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                  Constitutional and legal jargon makes the topic inaccessible to many citizens
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Platform Values Section */}
        <section id="values" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-dark-900 dark:to-dark-800 transition-colors duration-200">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-dark-50">Our Commitment to You</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                What makes Electify India different — neutrality, accessibility, and transparency
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8 border border-slate-100 dark:border-dark-700 transition-colors duration-200"
              >
                <div className="text-4xl mb-4 text-center">🎯</div>
                <h3 className="text-xl font-bold mb-3 text-slate-700 dark:text-dark-50">Neutral & Non-Partisan</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We don't endorse any political party or leader. Our goal is education, not advocacy.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8 border border-blue-100 dark:border-dark-700 transition-colors duration-200"
              >
                <div className="text-4xl mb-4 text-center">♿</div>
                <h3 className="text-xl font-bold mb-3 text-blue-700 dark:text-dark-50">Accessibility First</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Multi-language support, audio explanations, and simple language make content accessible to all.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8 border border-teal-100 dark:border-dark-700 transition-colors duration-200"
              >
                <div className="text-4xl mb-4 text-center">📚</div>
                <h3 className="text-xl font-bold mb-3 text-teal-700 dark:text-dark-50">Source Transparency</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  All information is backed by official documents, constitutional texts, and credible sources.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="py-20 bg-white dark:bg-dark-900 transition-colors duration-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-dark-50">Key Features</h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Tools and resources to help you understand ONOE and identify misinformation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* ONOE Learning Modules */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white to-slate-50 dark:from-dark-800 dark:to-dark-900 rounded-xl shadow-lg p-8 border border-slate-100 dark:border-dark-700 transition-colors duration-200"
              >
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-slate-500 to-slate-600 flex items-center justify-center shadow-md">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-slate-700 dark:text-dark-50">ONOE Learning Modules</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  Progressive, structured content explaining One Nation One Election in simple language
                </p>
                <div className="text-center">
                  <Link href="/learn" className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-slate-500 to-slate-600 text-white font-medium shadow-md hover:shadow-lg transition-all">
                    Start Learning →
                  </Link>
                </div>
              </motion.div>

              {/* Claim vs Fact Checker */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white to-blue-50 dark:from-dark-800 dark:to-dark-900 rounded-xl shadow-lg p-8 border border-blue-100 dark:border-dark-700 transition-colors duration-200"
              >
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-blue-700 dark:text-dark-50">Claim vs Fact Checker</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  Identify misinformation with neutral, source-based fact-checking
                </p>
                <div className="text-center">
                  <Link href="/fact-check" className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-md hover:shadow-lg transition-all">
                    Check Facts →
                  </Link>
                </div>
              </motion.div>

              {/* Blind Reading Mode */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white to-purple-50 dark:from-dark-800 dark:to-dark-900 rounded-xl shadow-lg p-8 border border-purple-100 dark:border-dark-700 transition-colors duration-200"
              >
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center shadow-md">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-purple-700 dark:text-dark-50">Blind Reading Mode 🕶️</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  Mask party and leader names to focus on content without bias
                </p>
                <div className="text-center">
                  <Link href="/fact-check" className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium shadow-md hover:shadow-lg transition-all">
                    Try It →
                  </Link>
                </div>
              </motion.div>

              {/* Multi-language Support */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white to-teal-50 dark:from-dark-800 dark:to-dark-900 rounded-xl shadow-lg p-8 border border-teal-100 dark:border-dark-700 transition-colors duration-200"
              >
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center shadow-md">
                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-teal-700 dark:text-dark-50">Multi-language Support</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  Access content in English, हिंदी, and اردو
                </p>
                <div className="text-center">
                  <Link href="/profile" className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium shadow-md hover:shadow-lg transition-all">
                    Change Language →
                  </Link>
                </div>
              </motion.div>

              {/* Audio Explanations */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white to-orange-50 dark:from-dark-800 dark:to-dark-900 rounded-xl shadow-lg p-8 border border-orange-100 dark:border-dark-700 transition-colors duration-200"
              >
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center shadow-md">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-orange-700 dark:text-dark-50">Audio Explanations</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  Listen to content with built-in audio support
                </p>
                <div className="text-center">
                  <Link href="/learn" className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium shadow-md hover:shadow-lg transition-all">
                    Listen Now →
                  </Link>
                </div>
              </motion.div>

              {/* Progress Tracking */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white to-green-50 dark:from-dark-800 dark:to-dark-900 rounded-xl shadow-lg p-8 border border-green-100 dark:border-dark-700 transition-colors duration-200"
              >
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center shadow-md">
                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-green-700 dark:text-dark-50">Progress Tracking</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  Track your learning journey and save favorite content
                </p>
                <div className="text-center">
                  <Link href="/dashboard" className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-medium shadow-md hover:shadow-lg transition-all">
                    View Progress →
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-700 via-slate-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Learn?</h2>
              <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
                Start your journey to understanding One Nation One Election today
              </p>
              <Link
                href="/learn"
                className="inline-block py-4 px-8 rounded-lg bg-white text-slate-800 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Begin Learning →
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
