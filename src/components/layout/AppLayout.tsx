'use client';

import { ReactNode } from 'react';
import Sidebar from '@/components/layout/Sidebar';

interface AppLayoutProps {
    children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
            {/* Left Sidebar (fixed) */}
            <Sidebar />

            {/* Main Content Area offset by fixed sidebar width */}
            <main className="ml-[280px] min-h-screen overflow-y-auto">
                <div className="min-h-full">
                    {children}
                </div>
            </main>
        </div>
    );
}
