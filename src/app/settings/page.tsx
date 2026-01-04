'use client';

// AppLayout is now provided globally via ConditionalLayout
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SettingsPage() {
    const [settings, setSettings] = useState({
        language: 'English',
        audioAutoPlay: true,
        audioVoice: 'Female',
        blindReadDefault: false,
        theme: 'Light',
        notifications: true
    });

    const handleSettingChange = (key: string, value: any) => {
        setSettings({ ...settings, [key]: value });
    };

  return (
    <>
            <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-dark-900 dark:to-dark-800 py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-dark-50">
                            Settings & Preferences
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Customize your Electify India experience
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Language Settings */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6 border border-slate-100 dark:border-dark-700"
                        >
                            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-dark-50">
                                Language Preferences
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Content Language
                                    </label>
                                    <select
                                        value={settings.language}
                                        onChange={(e) => handleSettingChange('language', e.target.value)}
                                        className="w-full px-4 py-2 border border-slate-300 dark:border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-dark-700 dark:text-dark-50"
                                    >
                                        <option value="English">English</option>
                                        <option value="Hindi">हिंदी (Hindi)</option>
                                        <option value="Urdu">اردو (Urdu)</option>
                                    </select>
                                </div>
                            </div>
                        </motion.div>

                        {/* Audio Settings */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6 border border-slate-100 dark:border-dark-700"
                        >
                            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-dark-50">
                                Audio Settings
                            </h2>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-gray-800 dark:text-dark-50">Auto-play Audio</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Automatically play audio explanations</p>
                                    </div>
                                    <button
                                        onClick={() => handleSettingChange('audioAutoPlay', !settings.audioAutoPlay)}
                                        className={`relative inline-flex h-8 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${settings.audioAutoPlay ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                                            }`}
                                    >
                                        <span
                                            className={`inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${settings.audioAutoPlay ? 'translate-x-6' : 'translate-x-0'
                                                }`}
                                        />
                                    </button>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Voice Preference
                                    </label>
                                    <select
                                        value={settings.audioVoice}
                                        onChange={(e) => handleSettingChange('audioVoice', e.target.value)}
                                        className="w-full px-4 py-2 border border-slate-300 dark:border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-dark-700 dark:text-dark-50"
                                    >
                                        <option value="Female">Female Voice</option>
                                        <option value="Male">Male Voice</option>
                                    </select>
                                </div>
                            </div>
                        </motion.div>

                        {/* Blind Read Settings */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6 border border-slate-100 dark:border-dark-700"
                        >
                            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-dark-50">
                                Blind Reading Mode
                            </h2>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-gray-800 dark:text-dark-50">Enable by Default</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Automatically anonymize party/leader names in all content</p>
                                </div>
                                <button
                                    onClick={() => handleSettingChange('blindReadDefault', !settings.blindReadDefault)}
                                    className={`relative inline-flex h-8 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${settings.blindReadDefault ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${settings.blindReadDefault ? 'translate-x-6' : 'translate-x-0'
                                            }`}
                                    />
                                </button>
                            </div>
                        </motion.div>

                        {/* Appearance Settings */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6 border border-slate-100 dark:border-dark-700"
                        >
                            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-dark-50">
                                Appearance
                            </h2>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Theme
                                </label>
                                <select
                                    value={settings.theme}
                                    onChange={(e) => handleSettingChange('theme', e.target.value)}
                                    className="w-full px-4 py-2 border border-slate-300 dark:border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-dark-700 dark:text-dark-50"
                                >
                                    <option value="Light">Light</option>
                                    <option value="Dark">Dark</option>
                                    <option value="System">System Default</option>
                                </select>
                            </div>
                        </motion.div>

                        {/* Notifications */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6 border border-slate-100 dark:border-dark-700"
                        >
                            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-dark-50">
                                Notifications
                            </h2>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-gray-800 dark:text-dark-50">Enable Notifications</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Receive updates about new content and features</p>
                                </div>
                                <button
                                    onClick={() => handleSettingChange('notifications', !settings.notifications)}
                                    className={`relative inline-flex h-8 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${settings.notifications ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${settings.notifications ? 'translate-x-6' : 'translate-x-0'
                                            }`}
                                    />
                                </button>
                            </div>
                        </motion.div>

                        {/* Save Button */}
                        <div className="flex justify-end">
                            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transition-all shadow-md hover:shadow-lg">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  );
}
