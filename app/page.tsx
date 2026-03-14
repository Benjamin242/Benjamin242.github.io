'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import Biography from '@/components/Biography';
import Career from '@/components/Career';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

type Tab = 'biography' | 'career' | 'projects' | 'contact';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('biography');

  const tabs = [
    { id: 'biography' as Tab, label: 'Biography' },
    { id: 'career' as Tab, label: 'Career' },
    { id: 'projects' as Tab, label: 'Projects' },
    // { id: 'contact' as Tab, label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Hero />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-slate-300 dark:border-slate-700">
            <nav className="flex space-x-8 overflow-x-auto" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors
                    ${activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-300'
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          {activeTab === 'biography' && <Biography />}
          {activeTab === 'career' && <Career />}
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'contact' && <Contact />}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-600 dark:text-slate-400">
        <p>bbecze242@gmail.com</p>
      </footer>
    </div>
  );
}
