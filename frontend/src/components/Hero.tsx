import React from 'react';
import { ArrowDown, FileDown, Github, Linkedin, Mail, Sparkles, Upload } from 'lucide-react';
import { profileData } from '../data/portfolioData.js';
import { TerminalWidget } from './TerminalWidget.js';

interface HeroProps {
  onOpenResumeModal?: () => void;
  resumeVersion?: number;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, resumeVersion }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-500/10 via-sky-500/10 to-transparent blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative & Action Points */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Open to Internships &amp; Opportunities</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500">
                thoughtful digital experiences
              </span>
              , from web applications to cloud-powered systems.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              I'm <strong className="font-semibold text-slate-900 dark:text-white">{profileData.name}</strong>, a Computer Science and Design undergraduate at Canara Engineering College graduating in 2027. Passionate about full-stack development, cloud technologies, DevOps, and building practical software solutions.
            </p>

            {/* CTA Buttons & Resume Download */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 shadow-md shadow-indigo-500/25 transition-all hover:translate-y-[-1px]"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-300 shadow-sm transition-all hover:translate-y-[-1px]"
              >
                <span>Get In Touch</span>
                <Mail className="w-4 h-4" />
              </a>

              <div className="inline-flex items-center rounded-xl bg-slate-100/80 dark:bg-slate-800/80 p-1 border border-slate-200 dark:border-slate-700/80">
                <a
                  href={`/resume.pdf?v=${resumeVersion || 1}`}
                  download="Aquid_Ali_Dhandu_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-medium text-xs sm:text-sm text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-700 transition-all shadow-none hover:shadow-sm"
                  title="Download Aquid's verified resume PDF"
                >
                  <FileDown className="w-4 h-4 text-indigo-500" />
                  <span>Download Resume</span>
                </a>

                {onOpenResumeModal && (
                  <button
                    type="button"
                    onClick={onOpenResumeModal}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 hover:bg-white dark:hover:bg-slate-700 transition-all shadow-none hover:shadow-sm"
                    title="Upload or update resume PDF"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload</span>
                  </button>
                )}
              </div>
            </div>

            {/* Social Links & Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800/80">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">Profiles:</span>
              <div className="flex items-center gap-3">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aquid Ali on GitHub"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-xs font-mono">GitHub</span>
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aquid Ali on LinkedIn"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-xs font-mono">LinkedIn</span>
                </a>
              </div>

              <div className="ml-auto hidden sm:flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>CGPA 8.3 | Mangalore, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Code & Architecture Terminal Visual */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <TerminalWidget />
          </div>
        </div>
      </div>
    </section>
  );
};
