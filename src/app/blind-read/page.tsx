'use client';

// AppLayout is now provided globally via ConditionalLayout
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BlindReadPage() {
    const [inputText, setInputText] = useState('');
    const [blindReadEnabled, setBlindReadEnabled] = useState(false);
    const [anonymizedText, setAnonymizedText] = useState('');

    // Comprehensive name mapping for Blind Read Mode
    const nameMapping: Record<string, string> = {
        // Political Parties (add more as needed)
        'BJP': 'Party A',
        'Bharatiya Janata Party': 'Party A',
        'Congress': 'Party B',
        'Indian National Congress': 'Party B',
        'INC': 'Party B',
        'AAP': 'Party C',
        'Aam Aadmi Party': 'Party C',
        'TMC': 'Party D',
        'Trinamool Congress': 'Party D',
        'DMK': 'Party E',
        'Dravida Munnetra Kazhagam': 'Party E',
        'AIADMK': 'Party F',
        'Shiv Sena': 'Party G',
        'NCP': 'Party H',
        'Nationalist Congress Party': 'Party H',
        'CPI': 'Party I',
        'CPM': 'Party J',
        'Communist Party': 'Party I',

        // Common leader references (generic examples - add actual names as needed)
        'Prime Minister': 'Leader A',
        'PM': 'Leader A',
        'Chief Minister': 'Leader B',
        'CM': 'Leader B',
        'President': 'Leader C',
        'Opposition Leader': 'Leader D',
    };

    const anonymizeText = (text: string): string => {
        let result = text;

        // Sort by length (longest first) to avoid partial replacements
        const sortedKeys = Object.keys(nameMapping).sort((a, b) => b.length - a.length);

        sortedKeys.forEach(name => {
            const placeholder = nameMapping[name];
            // Case-insensitive global replace
            const regex = new RegExp(name, 'gi');
            result = result.replace(regex, placeholder);
        });

        return result;
    };

    const handleEnableBlindRead = () => {
        if (!inputText.trim()) return;

        setBlindReadEnabled(true);
        const anonymized = anonymizeText(inputText);
        setAnonymizedText(anonymized);
    };

    const handleCopyText = () => {
        navigator.clipboard.writeText(anonymizedText);
        // Could add a toast notification here
    };

    const handleReset = () => {
        setBlindReadEnabled(false);
        setAnonymizedText('');
        setInputText('');
    };

    const sampleText = `The Prime Minister announced that the BJP supports One Nation One Election. The Congress party has raised concerns about its impact on federalism. The Chief Minister of the state said that regional parties like TMC and DMK need to be consulted.`;

    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-dark-900 dark:to-dark-800 py-12">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="text-5xl mb-4">🕶️</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-dark-50">
                            Blind Reading Mode
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Remove bias by anonymizing political party and leader names in any text
                        </p>
                    </div>

                    {/* Info Box */}
                    <div className="mb-8 max-w-4xl mx-auto">
                        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                            <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-2">How it works:</h3>
                            <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Paste or type any article, news snippet, or text about ONOE</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Click "Enable Blind Read" to anonymize party and leader names</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Read the content without knowing which parties or leaders are mentioned</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Focus on the arguments and facts, not your existing opinions about specific parties</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {!inputText.trim() ? (
                        /* Input Mode */
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8 border border-slate-100 dark:border-dark-700">
                                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-dark-50">
                                    Paste Your Text
                                </h2>

                                <textarea
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder="Paste an article, news snippet, or any text about ONOE here..."
                                    rows={12}
                                    className="w-full px-4 py-3 border border-slate-300 dark:border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-dark-700 dark:text-dark-50 resize-none mb-4"
                                />

                                <div className="flex items-center justify-between">
                                    <button
                                        onClick={() => setInputText(sampleText)}
                                        className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                                    >
                                        Load Sample Text
                                    </button>

                                    <button
                                        onClick={handleEnableBlindRead}
                                        disabled={!inputText.trim()}
                                        className={`px-6 py-3 rounded-lg font-medium transition-all ${inputText.trim()
                                                ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800'
                                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            }`}
                                    >
                                        Enable Blind Read 🕶️
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ) : blindReadEnabled ? (
                        /* Blind Read Only View */
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl shadow-lg p-6 border border-purple-200 dark:border-purple-800">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-bold text-purple-900 dark:text-purple-100">
                                        Blind Read Version
                                    </h2>
                                    <span className="px-3 py-1 bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                                        Anonymized
                                    </span>
                                </div>
                                <div className="prose dark:prose-invert max-w-none">
                                    <p className="text-purple-900 dark:text-purple-100 whitespace-pre-wrap leading-relaxed">
                                        {anonymizedText}
                                    </p>
                                </div>
                                <div className="mt-6 flex justify-end space-x-3">
                                    <button
                                        onClick={handleCopyText}
                                        className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-all"
                                    >
                                        Copy
                                    </button>
                                    <button
                                        onClick={() => setBlindReadEnabled(false)}
                                        className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
                                    >
                                        Disable Blind Read
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-center">
                                <button
                                    onClick={handleReset}
                                    className="px-6 py-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
                                >
                                    Try Another Text
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        /* Original Only View */
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6 border border-slate-100 dark:border-dark-700">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-bold text-gray-800 dark:text-dark-50">
                                        Original Text
                                    </h2>
                                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                                        With Names
                                    </span>
                                </div>
                                <div className="prose dark:prose-invert max-w-none">
                                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
                                        {inputText}
                                    </p>
                                </div>
                                <div className="mt-6 flex justify-end">
                                    <button
                                        onClick={handleEnableBlindRead}
                                        className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-all"
                                    >
                                        Enable Blind Read
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-center">
                                <button
                                    onClick={handleReset}
                                    className="px-6 py-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
                                >
                                    Try Another Text
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </>
    );
}
