import React, { useState } from 'react';
import { ExternalLink, Code, Layers, Info, Check } from 'lucide-react';
import { featuredProjects } from '../data/portfolioData.js';
import type { Project } from '../types/index.js';
import { ProjectMockup } from './ProjectMockup.js';
import { ProjectModal } from './ProjectModal.js';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 text-xs font-mono tracking-wider uppercase mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Projects &amp; Systems
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A selection of authentic software engineering projects demonstrating security heuristics, full-stack architecture, machine learning, and administrative workflows.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden text-left group"
            >
              {/* Card Illustration / Mockup Header */}
              <div className="p-4 bg-slate-100 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
                <ProjectMockup type={project.visualType} />
                <div className="text-[11px] font-mono text-slate-400 text-center mt-2">
                  Interactive CSS representation of system runtime
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  {/* Badge & Title */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50">
                      {project.badge}
                    </span>
                    {project.liveDemoUrl && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Live Demo
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem & Solution Snippet */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800/80 text-xs space-y-1.5">
                    <div>
                      <strong className="text-slate-800 dark:text-slate-200">The Problem: </strong>
                      <span className="text-slate-600 dark:text-slate-400">{project.problem}</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mt-4">
                    <div className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2 font-mono">
                      Key Capabilities:
                    </div>
                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                      {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      {/* Live Demo Link (only rendered if destination is valid) */}
                      {project.liveDemoUrl ? (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-[11px] font-mono text-slate-400 px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800">
                          Demo on verification
                        </span>
                      )}

                      {/* View Source Code Button (only rendered when destination is confirmed) */}
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
                        >
                          <Code className="w-3.5 h-3.5" />
                          <span>Source</span>
                        </a>
                      ) : (
                        <span
                          className="text-[11px] font-mono text-slate-400 px-2 py-1 rounded cursor-help"
                          title="Source code is maintained privately in academic/personal repositories and can be shown in interview walkthroughs."
                        >
                          Repo on request
                        </span>
                      )}
                    </div>

                    {/* View Details / Architecture Modal trigger */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:underline"
                    >
                      <span>Architecture &amp; Details</span>
                      <Info className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
