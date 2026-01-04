'use client';

// AppLayout is now provided globally via ConditionalLayout
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <>
            <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-dark-900 dark:to-dark-800 py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-dark-50">
                            About Electify India
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Understanding our mission, values, and commitment to neutrality
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8 border border-slate-100 dark:border-dark-700"
                        >
                            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-dark-50">
                                Our Mission
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Electify India is a government-neutral, educational platform dedicated to helping Indian citizens understand One Nation One Election (ONOE) and identify misinformation. We believe that informed citizens are the foundation of a healthy democracy.
                            </p>
                        </motion.div>

                        {/* Non-Partisan Disclaimer */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-amber-50 dark:bg-amber-900/20 rounded-xl shadow-lg p-8 border border-amber-200 dark:border-amber-800"
                        >
                            <div className="flex items-start">
                                <svg className="h-8 w-8 text-amber-600 dark:text-amber-400 mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <h2 className="text-2xl font-bold mb-4 text-amber-900 dark:text-amber-100">
                                        Non-Partisan Disclaimer
                                    </h2>
                                    <p className="text-amber-800 dark:text-amber-200 leading-relaxed mb-4">
                                        <strong>Electify India does not endorse any political party, leader, or position on ONOE.</strong> Our goal is education, not advocacy. We present multiple perspectives on this complex topic while maintaining strict neutrality.
                                    </p>
                                    <p className="text-amber-800 dark:text-amber-200 leading-relaxed">
                                        All content is fact-based, sourced from official documents, constitutional texts, and credible academic research. We do not take sides in political debates.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Core Values */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8 border border-slate-100 dark:border-dark-700"
                        >
                            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-dark-50">
                                Our Core Values
                            </h2>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-2 mr-4 flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 dark:text-dark-50 mb-1">Neutrality</h3>
                                        <p className="text-gray-600 dark:text-gray-300">We maintain strict political neutrality in all content and analysis.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-teal-100 dark:bg-teal-900/30 rounded-full p-2 mr-4 flex-shrink-0">
                                        <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 dark:text-dark-50 mb-1">Accessibility</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Multi-language support, audio explanations, and simple language make content accessible to all.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-2 mr-4 flex-shrink-0">
                                        <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 dark:text-dark-50 mb-1">Source Transparency</h3>
                                        <p className="text-gray-600 dark:text-gray-300">All information is backed by official documents and credible sources, clearly cited.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2 mr-4 flex-shrink-0">
                                        <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 dark:text-dark-50 mb-1">Community-Driven</h3>
                                        <p className="text-gray-600 dark:text-gray-300">We welcome feedback and suggestions to improve our content and platform.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Methodology */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8 border border-slate-100 dark:border-dark-700"
                        >
                            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-dark-50">
                                Our Methodology
                            </h2>
                            <div className="space-y-3 text-gray-700 dark:text-gray-300">
                                <p className="flex items-start">
                                    <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>We cross-reference all claims with official government documents and Election Commission data</span>
                                </p>
                                <p className="flex items-start">
                                    <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>We consult Law Commission reports and constitutional expert analyses</span>
                                </p>
                                <p className="flex items-start">
                                    <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>We present multiple perspectives when experts disagree, without taking sides</span>
                                </p>
                                <p className="flex items-start">
                                    <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>We avoid advocacy language and focus on factual, verifiable information</span>
                                </p>
                            </div>
                        </motion.div>

                        {/* Contact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8 border border-slate-100 dark:border-dark-700"
                        >
                            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-dark-50">
                                Contact & Feedback
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                We welcome your feedback, suggestions, and questions. If you notice any errors or have suggestions for improvement, please reach out to us.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="mailto:feedback@electifyindia.org"
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
                                >
                                    Send Feedback
                                </a>
                                <a
                                    href="/chatbot"
                                    className="px-6 py-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
                                >
                                    Ask a Question
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
    </>
  );
}
