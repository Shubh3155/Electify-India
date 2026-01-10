'use client';

// AppLayout is provided globally via ConditionalLayout
import { useState } from 'react';
import { motion } from 'framer-motion';
import BlindFeed from '../../../blind-read/BlindFeed';

export default function BlindReadPage() {
  const [mode, setMode] = useState<'paste' | 'news'>('news');

  // Paste mode state
  const [inputText, setInputText] = useState('');
  const [blindReadEnabled, setBlindReadEnabled] = useState(false);
  const [anonymizedText, setAnonymizedText] = useState('');

  // Simple mapping for paste mode
  const nameMapping: Record<string, string> = {
    BJP: 'Party A',
    'Bharatiya Janata Party': 'Party A',
    Congress: 'Party B',
    'Indian National Congress': 'Party B',
    INC: 'Party B',
    AAP: 'Party C',
    'Aam Aadmi Party': 'Party C',
    TMC: 'Party D',
    'Trinamool Congress': 'Party D',
    DMK: 'Party E',
    'Prime Minister': 'Leader A',
    PM: 'Leader A',
    'Chief Minister': 'Leader B',
    CM: 'Leader B',
  };

  const anonymizeText = (text: string) => {
    let result = text;
    const keys = Object.keys(nameMapping).sort((a, b) => b.length - a.length);

    keys.forEach((key) => {
      const regex = new RegExp(key, 'gi');
      result = result.replace(regex, nameMapping[key]);
    });

    return result;
  };

  const handleEnableBlindRead = () => {
    if (!inputText.trim()) return;
    setBlindReadEnabled(true);
    setAnonymizedText(anonymizeText(inputText));
  };

  const handleReset = () => {
    setInputText('');
    setBlindReadEnabled(false);
    setAnonymizedText('');
  };

  const sampleText = `The Prime Minister announced that the BJP supports One Nation One Election.
The Congress party raised concerns. The Chief Minister said regional parties like TMC and DMK must be consulted.`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-dark-900 dark:to-dark-800 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🕶️</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blind Reading Mode
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Remove political bias by hiding identities before judging content
          </p>
        </div>

        {/* Mode Switch */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setMode('news')}
            className={`px-5 py-2 rounded-lg ${
              mode === 'news'
                ? 'bg-purple-600 text-white'
                : 'bg-slate-200 dark:bg-slate-700'
            }`}
          >
            Live News
          </button>
          <button
            onClick={() => setMode('paste')}
            className={`px-5 py-2 rounded-lg ${
              mode === 'paste'
                ? 'bg-purple-600 text-white'
                : 'bg-slate-200 dark:bg-slate-700'
            }`}
          >
            Paste Text
          </button>
        </div>

        {/* ========== LIVE NEWS MODE ========== */}
        {mode === 'news' && (
          <div className="mt-6">
            <BlindFeed />
          </div>
        )}

        {/* ========== PASTE MODE ========== */}
        {mode === 'paste' && (
          !blindReadEnabled ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Paste Your Text</h2>

                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Paste any political article here..."
                  rows={10}
                  className="w-full px-4 py-3 border rounded-lg mb-4"
                />

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setInputText(sampleText)}
                    className="text-sm text-purple-600 hover:underline"
                  >
                    Load Sample Text
                  </button>

                  <button
                    onClick={handleEnableBlindRead}
                    disabled={!inputText.trim()}
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg"
                  >
                    Enable Blind Read
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              <div className="bg-white dark:bg-dark-800 rounded-xl p-6">
                <h3 className="font-bold mb-2">Original Text</h3>
                <p className="whitespace-pre-wrap">{inputText}</p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                <h3 className="font-bold mb-2">Blind Read Version</h3>
                <p className="whitespace-pre-wrap">{anonymizedText}</p>
              </div>

              <div className="lg:col-span-2 flex justify-center">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-slate-200 dark:bg-slate-700 rounded-lg"
                >
                  Try Another Text
                </button>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}

