import React, { useState } from 'react';
import {
  Code2,
  LayoutTemplate,
  Server,
  Database,
  CloudCog,
  Wrench,
  Binary,
  Layers,
  Sparkles,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData.js';

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code2':
      return <Code2 className="w-5 h-5 text-indigo-500" />;
    case 'LayoutTemplate':
      return <LayoutTemplate className="w-5 h-5 text-sky-500" />;
    case 'Server':
      return <Server className="w-5 h-5 text-emerald-500" />;
    case 'Database':
      return <Database className="w-5 h-5 text-amber-500" />;
    case 'CloudCog':
      return <CloudCog className="w-5 h-5 text-indigo-500" />;
    case 'Wrench':
      return <Wrench className="w-5 h-5 text-purple-500" />;
    case 'Binary':
      return <Binary className="w-5 h-5 text-rose-500" />;
    default:
      return <Layers className="w-5 h-5 text-slate-500" />;
  }
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.categoryKey === selectedCategory);

  return (
    <section id="skills" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 text-xs font-mono tracking-wider uppercase mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Technical Toolbelt</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Technical Skills
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Organized into clear functional domains without artificial percentage bars. Each technology represents practical, discussable project experience.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-1.5 text-xs text-slate-500 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Interview-ready fundamentals</span>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            All Categories ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.categoryKey}
              onClick={() => setSelectedCategory(cat.categoryKey)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === cat.categoryKey
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.categoryKey}
              className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-800/80 transition-all duration-200 group text-left"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:scale-105 transition-transform">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">
                    {category.skills.length} skills
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 mb-4 leading-relaxed">
                {category.description}
              </p>

              {/* Skill Badges */}
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 hover:border-indigo-300 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
