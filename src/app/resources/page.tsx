'use client';

// AppLayout is now provided globally via ConditionalLayout
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const resources = [
  {
    id: 1,
    category: "Official Documents",
    items: [
      {
        title: "Constitution of India",
        description: "Articles 83 and 172 regarding the term of Parliament and State Legislatures",
        type: "PDF",
        source: "Ministry of Law and Justice"
      },
      {
        title: "Election Commission of India Reports",
        description: "Official data on election expenditure and logistics",
        type: "Website",
        source: "Election Commission of India"
      },
      {
        title: "Law Commission Report No. 170 (1999)",
        description: "Reform of the Electoral Laws - First report on simultaneous elections",
        type: "PDF",
        source: "Law Commission of India"
      },
      {
        title: "Law Commission Report No. 255 (2015)",
        description: "Electoral Reforms - Updated examination of simultaneous elections",
        type: "PDF",
        source: "Law Commission of India"
      }
    ]
  },
  {
    id: 2,
    category: "Committee Reports",
    items: [
      {
        title: "NITI Aayog Working Paper",
        description: "Analysis of Simultaneous Elections: Constitutional and Legal Perspectives",
        type: "PDF",
        source: "NITI Aayog"
      },
      {
        title: "Parliamentary Standing Committee Reports",
        description: "Various committee discussions on electoral reforms",
        type: "PDF",
        source: "Parliament of India"
      }
    ]
  },
  {
    id: 3,
    category: "Historical Context",
    items: [
      {
        title: "Election Results 1951-1967",
        description: "Historical data from when India had simultaneous elections",
        type: "Data",
        source: "Election Commission of India"
      },
      {
        title: "Electoral History of India",
        description: "Comprehensive timeline of electoral reforms and changes",
        type: "Article",
        source: "Election Commission Archives"
      }
    ]
  },
  {
    id: 4,
    category: "Expert Analysis",
    items: [
      {
        title: "Constitutional Expert Opinions",
        description: "Collection of analyses from constitutional law experts on ONOE feasibility",
        type: "Articles",
        source: "Various Academic Institutions"
      },
      {
        title: "Economic Impact Studies",
        description: "Independent analyses of potential cost savings and economic implications",
        type: "Research Papers",
        source: "Economic Research Institutions"
      },
      {
        title: "Federal Structure Analysis",
        description: "Studies examining the impact on India's federal system",
        type: "Research Papers",
        source: "Political Science Departments"
      }
    ]
  },
  {
    id: 5,
    category: "International Comparisons",
    items: [
      {
        title: "Electoral Systems Worldwide",
        description: "How other federal democracies conduct elections",
        type: "Comparative Study",
        source: "International IDEA"
      },
      {
        title: "Best Practices in Electoral Management",
        description: "Global perspectives on election timing and coordination",
        type: "Report",
        source: "International Election Organizations"
      }
    ]
  }
];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredResources = selectedCategory
    ? resources.filter(r => r.category === selectedCategory)
    : resources;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-dark-900 dark:to-dark-800 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-dark-50">
              Official Resources
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Access official documents, committee reports, and credible sources to deepen your understanding of ONOE
            </p>
          </div>

          {/* Category Filter */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedCategory === null
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-700 hover:border-teal-400'
                  }`}
              >
                All Resources
              </button>
              {resources.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedCategory === category.category
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-700 hover:border-teal-400'
                    }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>

          {/* Resources List */}
          <div className="max-w-5xl mx-auto space-y-8">
            {filteredResources.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8 border border-slate-100 dark:border-dark-700"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-dark-50 flex items-center">
                  <span className="bg-teal-100 dark:bg-teal-900/30 rounded-full w-8 h-8 flex items-center justify-center text-teal-700 dark:text-teal-300 font-bold mr-3">
                    {category.id}
                  </span>
                  {category.category}
                </h2>

                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      whileHover={{ x: 5 }}
                      className="border-l-4 border-teal-500 pl-6 py-3 bg-slate-50 dark:bg-dark-700 rounded-r-lg"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-800 dark:text-dark-50 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                            {item.description}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                            <span className="inline-flex items-center px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded">
                              {item.type}
                            </span>
                            <span className="flex items-center">
                              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                              {item.source}
                            </span>
                          </div>
                        </div>
                        <button className="ml-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium">
                          Access →
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-amber-600 dark:text-amber-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100 mb-2">
                    About These Resources
                  </h3>
                  <p className="text-sm text-amber-800 dark:text-amber-200 mb-2">
                    All resources listed here are from official government sources, constitutional documents, or credible academic institutions. We do not host these documents but provide information on where to access them.
                  </p>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Note:</strong> Some resources may require visiting official government websites. We recommend verifying the authenticity of any document you access.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Use Resources */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-4">
                How to Use These Resources
              </h3>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Start with Official Documents:</strong> Begin with constitutional texts and Election Commission reports for foundational understanding</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Read Committee Reports:</strong> Law Commission and NITI Aayog reports provide detailed analysis and recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Compare Perspectives:</strong> Read expert analyses from different viewpoints to form a balanced understanding</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Verify Sources:</strong> Always check that documents come from official government or credible academic sources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}