import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { profileData } from '../data/portfolioData.js';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 text-xs font-mono tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Education
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Formal engineering degree integrating computer science foundations with human-centered software and design systems.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-3xl">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/30 text-left">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-900 shadow-sm" />

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-800 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>2023 – June 2027 (Expected)</span>
                </span>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 rounded-full w-fit">
                  <Award className="w-4 h-4" />
                  <span>CGPA: {profileData.cgpa}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {profileData.degree}
              </h3>

              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 mt-1 mb-4">
                <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0" />
                <span>
                  {profileData.institution}, {profileData.location}
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Studying core computing principles alongside design-centric systems engineering. Developing strong theoretical competence in algorithm design, database normalization, system architectures, network protocols, and secure coding practices.
              </p>

              {/* Core Coursework Areas */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Core Academic Areas</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures & Algorithms',
                    'Object-Oriented Design',
                    'Database Management Systems',
                    'Operating Systems',
                    'Computer Networks',
                    'Software Engineering & Testing',
                  ].map((subject) => (
                    <span
                      key={subject}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
