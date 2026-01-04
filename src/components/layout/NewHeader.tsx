'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageToggle from '../ui/LanguageToggle';
import ThemeToggle from '../ui/ThemeToggle';
import { useState } from 'react';

// ✅ Centralized nav links for reuse (aligned with existing homepage section IDs)
const navLinks = [
  { href: '#home', label: 'Home', type: 'section' },
  { href: '#how-it-works', label: 'How It Works', type: 'section' },
  { href: '#why', label: 'Why', type: 'section' },
  { href: '#values', label: 'Values', type: 'section' },
  { href: '#features', label: 'Features', type: 'section' },
];

export default function NewHeader() {
  const { t } = useTranslation('common', { useSuspense: false });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="sticky top-0 w-full z-50 bg-white dark:bg-dark-900 shadow-md dark:shadow-dark-card transition-colors duration-200 border-b border-transparent dark:border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" scroll={false} className="flex items-center">
              <img src="/images/logo.png" alt="Electify India Logo" className="h-14 w-auto" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="flex space-x-8">
            {navLinks.map((link) =>
              link.type === 'section' ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-500 px-3 py-2 text-sm font-medium"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-500 px-3 py-2 text-sm font-medium"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex md:items-center space-x-4">
            <ThemeToggle />
            <LanguageToggle />
            <div className="flex items-center space-x-3">
              <Link
                href="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-green-700 dark:hover:bg-green-600"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-600 dark:text-green-400 bg-white dark:bg-dark-700 border-green-600 dark:border-green-500 hover:bg-green-50 dark:hover:bg-dark-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Sign&nbsp;Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                link.type === 'section' ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-500 hover:bg-gray-50 dark:hover:bg-dark-800"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    scroll={false}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-500 hover:bg-gray-50 dark:hover:bg-dark-800"
                  >
                    {link.label}
                  </Link>
                )
              ))}

              <div className="flex items-center space-x-4 px-3 py-2">
                <ThemeToggle />
                <LanguageToggle />
              </div>
              <div className="flex flex-col space-y-2 px-3 py-2">
                <Link
                  href="/login"
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-green-700 dark:hover:bg-green-600"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-600 dark:text-green-400 bg-white dark:bg-dark-700 border-green-600 dark:border-green-500 hover:bg-green-50 dark:hover:bg-dark-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Sign&nbsp;Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
