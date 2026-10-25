import React, { useState } from 'react';
import { Terminal, Copy, Check, Server, Shield, Cpu } from 'lucide-react';

export const TerminalWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'stack' | 'status'>('profile');
  const [copied, setCopied] = useState(false);

  const copySnippet = () => {
    const textToCopy = `// Aquid Ali Dhandu | CS & Design '27
const engineer = {
  name: "Aquid Ali Dhandu",
  role: "Full-Stack & Aspiring Cloud Engineer",
  institution: "Canara Engineering College",
  cgpa: 8.3,
  interests: ["Full-Stack", "Cloud & DevOps", "Systems Security", "AI"],
  status: "Seeking Internships"
};`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-xl shadow-slate-200/50 dark:shadow-black/40 overflow-hidden backdrop-blur-sm transition-all duration-300">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700/60">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-indigo-500" />
            aquid@workspace: ~
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
              activeTab === 'profile'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm font-medium'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            profile.json
          </button>
          <button
            onClick={() => setActiveTab('stack')}
            className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
              activeTab === 'stack'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm font-medium'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            stack.ts
          </button>
          <button
            onClick={() => setActiveTab('status')}
            className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
              activeTab === 'status'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm font-medium'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            runtime.sh
          </button>

          <button
            onClick={copySnippet}
            aria-label="Copy terminal snippet"
            title="Copy snippet"
            className="p-1 ml-1 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors rounded"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[220px]">
        {activeTab === 'profile' && (
          <div className="space-y-1 text-slate-700 dark:text-slate-300">
            <div className="text-slate-400 dark:text-slate-500 italic">// Candidate identity & focus</div>
            <p>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">const</span> candidate = &#123;
            </p>
            <p className="pl-4">
              <span className="text-sky-600 dark:text-sky-400">name</span>: <span className="text-emerald-600 dark:text-emerald-400">"Aquid Ali Dhandu"</span>,
            </p>
            <p className="pl-4">
              <span className="text-sky-600 dark:text-sky-400">education</span>: <span className="text-emerald-600 dark:text-emerald-400">"B.E. Computer Science & Design"</span>,
            </p>
            <p className="pl-4">
              <span className="text-sky-600 dark:text-sky-400">institution</span>: <span className="text-emerald-600 dark:text-emerald-400">"Canara Engineering College"</span>,
            </p>
            <p className="pl-4">
              <span className="text-sky-600 dark:text-sky-400">graduation</span>: <span className="text-emerald-600 dark:text-emerald-400">"June 2027"</span>,
            </p>
            <p className="pl-4">
              <span className="text-sky-600 dark:text-sky-400">cgpa</span>: <span className="text-amber-600 dark:text-amber-400">8.3</span>,
            </p>
            <p className="pl-4">
              <span className="text-sky-600 dark:text-sky-400">status</span>: <span className="text-emerald-600 dark:text-emerald-400">"Seeking Engineering Internships"</span>
            </p>
            <p>&#125;;</p>
          </div>
        )}

        {activeTab === 'stack' && (
          <div className="space-y-1.5 text-slate-700 dark:text-slate-300">
            <div className="text-slate-400 dark:text-slate-500 italic">// Core Engineering Capabilities</div>
            <div className="flex items-center gap-2">
              <Server className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0" />
              <span className="text-slate-500 dark:text-slate-400">Full-Stack:</span>
              <span className="text-indigo-600 dark:text-indigo-300">React, Node.js, Express, Flask, Tailwind</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
              <span className="text-slate-500 dark:text-slate-400">Languages:</span>
              <span className="text-sky-600 dark:text-sky-300">Python, Java, JavaScript, TypeScript</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
              <span className="text-slate-500 dark:text-slate-400">Cloud/DevOps:</span>
              <span className="text-emerald-600 dark:text-emerald-300">Docker, Kubernetes, AWS basics, CI/CD</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">#</span>
              <span className="text-slate-500 dark:text-slate-400">Databases:</span>
              <span className="text-amber-600 dark:text-amber-300">MongoDB, Mongoose, MySQL</span>
            </div>
          </div>
        )}

        {activeTab === 'status' && (
          <div className="space-y-2 text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500 font-bold">$</span>
              <span className="text-slate-800 dark:text-slate-200">docker ps --format "table &#123;&#123;.Names&#125;&#125;\t&#123;&#123;.Status&#125;&#125;"</span>
            </div>
            <div className="pl-4 text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <div>detran-scanner-api &nbsp;&nbsp;&nbsp;&nbsp;Up 14 hours (healthy)</div>
              <div>pharmacy-cloud-db &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Up 2 days (healthy)</div>
              <div>portfolio-gateway &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Up 7 days (port 3000-&gt;80)</div>
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">Ready for immediate interview & project discussions</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
