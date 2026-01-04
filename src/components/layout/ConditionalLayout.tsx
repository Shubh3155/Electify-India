'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import HeaderWrapper from './HeaderWrapper';
import AppLayout from '@/components/layout/AppLayout';

interface ConditionalLayoutProps {
    children: ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
    const pathname = usePathname();

    // Show header only on landing page and login/signup pages
    const showHeader = pathname === '/' || pathname === '/login' || pathname === '/signup';

    return (
        <>
            {showHeader ? (
                <div className="min-h-screen flex flex-col bg-white dark:bg-dark-900 text-charcoal-500 dark:text-dark-50 transition-colors duration-200">
                    <div className="flex-shrink-0">
                        <HeaderWrapper />
                    </div>
                    {children}
                </div>
            ) : (
                <AppLayout>
                    {children}
                </AppLayout>
            )}
        </>
    );
}
