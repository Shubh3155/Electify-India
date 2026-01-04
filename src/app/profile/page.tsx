'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [userData] = useState({
    name: 'Citizen User',
    email: 'citizen@gmail.com',
    voterStatus: 'Eligible Voter',
    language: 'English',
    modulesCompleted: 4,
    totalModules: 7,
    quizzesAttempted: 6,
    avgScore: 82,
    factChecksUsed: 12,
    blindReadUsed: 5,
    recentActivity: [
      'ONOE: Pros & Challenges',
      'Myth vs Fact Quiz',
      'How Indian Elections Work'
    ],
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          My Profile
        </h2>
        <button className="px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700">
          Edit Profile
        </button>
      </div>

      {/* Personal Info */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg mb-8">
        <div className="px-6 py-4 border-b dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Citizen Information
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Your basic account and voter details.
          </p>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Info label="Name" value={userData.name} />
          <Info label="Email" value={userData.email} />
          <Info label="Voter Status" value={userData.voterStatus} />
          <Info label="Preferred Language" value={userData.language} />
        </div>
      </div>

      {/* Learning Progress */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg mb-8">
        <div className="px-6 py-4 border-b dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Learning Progress
          </h3>
        </div>

        <div className="p-6 space-y-4">
          <Progress label="Modules Completed" value={`${userData.modulesCompleted}/${userData.totalModules}`} />
          <Progress label="Quizzes Attempted" value={userData.quizzesAttempted} />
          <Progress label="Average Quiz Score" value={`${userData.avgScore}%`} />
          <Progress label="Fact Checks Used" value={userData.factChecksUsed} />
          <Progress label="Blind Read Sessions" value={userData.blindReadUsed} />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg mb-8">
        <div className="px-6 py-4 border-b dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recently Viewed
          </h3>
        </div>

        <ul className="p-6 space-y-3">
          {userData.recentActivity.map((item, index) => (
            <li
              key={index}
              className="p-3 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Back */}
      <Link
        href="/dashboard"
        className="text-primary-600 dark:text-primary-400 hover:underline"
      >
        ← Back to Dashboard
      </Link>
    </div>
  );
}

/* Helper Components */
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
      <p className="text-base font-medium text-gray-900 dark:text-white">{value}</p>
    </div>
  );
}

function Progress({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-600 dark:text-gray-300">{label}</span>
      <span className="font-semibold text-gray-900 dark:text-white">{value}</span>
    </div>
  );
}
