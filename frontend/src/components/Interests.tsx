import React from 'react';
import { Compass, Layout, Cloud, Cpu, BrainCircuit, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/portfolioData.js';

const getInterestIcon = (iconName: string) => {
  switch (iconName) {
    case 'Layout':
      return <Layout className="w-6 h-6 text-indigo-500" />;
    case 'Cloud':
      return <Cloud className="w-6 h-6 text-sky-500" />;
    case 'Cpu':
      return <Cpu className="w-6 h-6 text-emerald-500" />;
    case 'BrainCircuit':
      return <BrainCircuit className="w-6 h-6 text-purple-500" />;
    case 'ShieldCheck':
      return <ShieldCheck className="w-6 h-6 text-rose-500" />;
    default:
      return <Compass className="w-6 h-6 text-slate-500" />;
  }
};

export const Interests: React.FC = () => {
  return (
    <section className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 text-xs font-mono tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Future Directions</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            What I'm Interested In
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Key domains where I am actively investing study, experimentation, and project effort to build long-term engineering depth.
          </p>
        </div>

        {/* Interests Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {profileData.interests.map((interest, idx) => (
            <div
              key={interest.title}
              className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-800/80 hover:shadow-md transition-all group ${
                idx === 0 ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {getInterestIcon(interest.iconName)}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {interest.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {interest.description}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-1.5 text-xs font-mono text-indigo-600 dark:text-indigo-400">
                <span>Domain of focus #{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
