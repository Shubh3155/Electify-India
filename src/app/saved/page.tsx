'use client';

// AppLayout is now provided globally via ConditionalLayout
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Mock saved items - in production, this would come from user state/database
const mockSavedItems = [
    {
        id: 1,
        title: "What is One Nation One Election?",
        type: "Learning Module",
        savedDate: "2024-12-28",
        url: "/learn"
    },
    {
        id: 2,
        title: "ONOE will save ₹1 lakh crore annually",
        type: "Fact Check",
        savedDate: "2024-12-27",
        url: "/fact-check"
    },
    {
        id: 3,
        title: "Constitutional & Legal Aspects",
        type: "Learning Module",
        savedDate: "2024-12-26",
        url: "/learn"
    },
    {
        id: 4,
        title: "Law Commission Report No. 170 (1999)",
        type: "Resource",
        savedDate: "2024-12-25",
        url: "/resources"
    }
];

export default function SavedPage() {
    const [savedItems, setSavedItems] = useState(mockSavedItems);
    const [filter, setFilter] = useState<string>('All');

    const categories = ['All', 'Learning Module', 'Fact Check', 'Resource'];

    const filteredItems = filter === 'All'
        ? savedItems
        : savedItems.filter(item => item.type === filter);

    const handleRemove = (id: number) => {
        setSavedItems(savedItems.filter(item => item.id !== id));
    };

  return (
    <>
            <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-dark-900 dark:to-dark-800 py-12">
                <div className="container mx-auto px-4 max-w-5xl">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-dark-50">
                            Saved Articles
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Your bookmarked content for quick access
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="mb-8">
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setFilter(category)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all ${filter === category
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-700 hover:border-blue-400'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Saved Items List */}
                    {filteredItems.length > 0 ? (
                        <div className="space-y-4">
                            {filteredItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6 border border-slate-100 dark:border-dark-700"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <Link href={item.url} className="group">
                                                <h3 className="text-xl font-bold text-gray-800 dark:text-dark-50 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    {item.title}
                                                </h3>
                                            </Link>
                                            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded">
                                                    {item.type}
                                                </span>
                                                <span>Saved on {new Date(item.savedDate).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleRemove(item.id)}
                                            className="ml-4 p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                                            aria-label="Remove from saved"
                                        >
                                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        /* Empty State */
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">📚</div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-dark-50 mb-2">
                                No saved items
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                {filter === 'All'
                                    ? "Start saving articles to access them quickly later"
                                    : `No saved items in "${filter}" category`
                                }
                            </p>
                            <Link
                                href="/learn"
                                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
                            >
                                Explore Content
                            </Link>
                        </div>
                    )}
                </div>
            </div>
    </>
  );
}
