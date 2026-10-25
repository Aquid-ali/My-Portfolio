import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '../data/portfolioData.js';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-900">
          {/* Identity & Tagline */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 group">
              <span className="font-bold text-slate-900 dark:text-white text-base">
                {profileData.name}
              </span>
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md">
              Computer Science Undergraduate • Full-Stack Developer • Aspiring Cloud &amp; DevOps Engineer
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs font-medium">
            <a href="#home" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
              Projects
            </a>
            <a href="#education" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Profiles & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profileData.socials.email}`}
              aria-label="Email Aquid Ali"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-slate-300 dark:hover:border-slate-700 transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <span>&copy; {currentYear} Aquid Ali Dhandu. Built with React, Vite &amp; Node.js.</span>
          <span className="font-mono text-[11px]">Canara Engineering College • Mangalore</span>
        </div>
      </div>
    </footer>
  );
};
