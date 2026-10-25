import React from 'react';
import { GraduationCap, Award, MapPin, Compass, CheckCircle2, User } from 'lucide-react';
import { profileData } from '../data/portfolioData.js';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 text-xs font-mono tracking-wider uppercase mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile &amp; Background</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A grounded overview of my academic foundation, technical ethos, and aspirations as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            <p>
              I'm a Computer Science and Design undergraduate at <strong className="text-slate-900 dark:text-white font-medium">Canara Engineering College, Mangalore</strong>, graduating in 2027. I enjoy building practical software applications that combine clean interfaces, reliable backend systems, and useful functionality.
            </p>
            <p>
              My interests span full-stack development, cloud infrastructure, DevOps automation, and AI-powered solutions. Through academic and personal projects, I'm developing my ability to design, build, debug, and deploy complete applications.
            </p>
            <p>
              As a fresher looking for internship opportunities, I focus on building verifiable code: writing structured REST APIs, testing binary classification workflows, configuring containerized environments with Docker, and applying clean UI principles that put users first.
            </p>

            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  Reliable software architectures over superficial complexity
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  Disciplined git workflows, documentation &amp; testing
                </span>
              </div>
            </div>
          </div>

          {/* Profile Quick-Facts Card */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white pb-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span>Quick Snapshot</span>
              <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-0.5 rounded-full">
                Fresher / 2027
              </span>
            </h3>

            <dl className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 items-center">
                <dt className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                  <GraduationCap className="w-4 h-4 text-indigo-500" />
                  <span>Degree</span>
                </dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2 text-slate-800 dark:text-slate-200 font-medium">
                  {profileData.degree}
                </dd>
              </div>

              <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 items-center">
                <dt className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>College</span>
                </dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2 text-slate-800 dark:text-slate-200 font-medium">
                  {profileData.institution}, {profileData.location}
                </dd>
              </div>

              <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 items-center">
                <dt className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>CGPA</span>
                </dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2 text-slate-800 dark:text-slate-200 font-medium flex items-center gap-2">
                  <span className="text-base font-bold text-indigo-600 dark:text-indigo-400">{profileData.cgpa}</span>
                  <span className="text-xs text-slate-400">(Consistent academic standing)</span>
                </dd>
              </div>

              <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 items-center">
                <dt className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                  <Compass className="w-4 h-4 text-sky-500" />
                  <span>Graduation</span>
                </dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2 text-slate-800 dark:text-slate-200 font-medium">
                  {profileData.graduationDate}
                </dd>
              </div>

              <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 items-start">
                <dt className="text-slate-500 dark:text-slate-400 font-medium">
                  Target Roles
                </dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2 text-slate-800 dark:text-slate-200 text-xs sm:text-sm">
                  Software Engineering Intern, Full-Stack Developer, Junior Cloud &amp; DevOps Engineer
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
