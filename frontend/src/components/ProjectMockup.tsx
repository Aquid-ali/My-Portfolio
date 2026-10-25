import React from 'react';
import { ShieldAlert, Activity, CheckCircle, BarChart3, Users, AlertTriangle } from 'lucide-react';

interface ProjectMockupProps {
  type: 'security' | 'inventory' | 'ml' | 'employee';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  if (type === 'security') {
    return (
      <div className="w-full h-48 bg-slate-950 rounded-xl p-4 font-mono text-xs text-slate-300 flex flex-col justify-between border border-slate-800 shadow-inner overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
        {/* Mock Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-400 animate-pulse" />
            <span className="text-white font-semibold">DETRAN Engine v2.4</span>
          </div>
          <span className="text-[10px] text-amber-400 bg-amber-950/60 border border-amber-800/80 px-2 py-0.5 rounded">
            Scanning Binary
          </span>
        </div>

        {/* Scanner Metric Rows */}
        <div className="space-y-2 py-1 text-[11px]">
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Target File:</span>
            <span className="text-slate-200">payload_suspicious.dll</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Shannon Entropy:</span>
            <span className="text-rose-400 font-bold">7.88 / 8.0 (Packed/Encrypted)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">YARA Signatures:</span>
            <span className="text-amber-400">Ransom_Wannacry_Variant matched</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">ClamAV Daemon:</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Live Verified
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="pt-2 border-t border-slate-800/80">
          <div className="flex justify-between text-[10px] text-slate-400 mb-1">
            <span>Threat Evaluation</span>
            <span className="text-rose-400">High Risk (89/100)</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-amber-500 to-rose-500 w-[89%]" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'inventory') {
    return (
      <div className="w-full h-48 bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-300 flex flex-col justify-between border border-slate-800 shadow-inner overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-indigo-400" />
            <span className="text-white font-semibold">PharmaStock Central</span>
          </div>
          <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded">
            Batch Sync Active
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 my-1 text-[11px]">
          <div className="bg-slate-800/80 p-2 rounded border border-slate-700/60">
            <span className="text-slate-400 block text-[10px]">Active SKU Batches</span>
            <span className="text-white text-base font-bold">1,420</span>
          </div>
          <div className="bg-slate-800/80 p-2 rounded border border-slate-700/60">
            <span className="text-slate-400 block text-[10px]">Expiring &lt; 30 Days</span>
            <span className="text-amber-400 text-base font-bold">14 Batches</span>
          </div>
        </div>

        <div className="flex items-center justify-between bg-amber-950/30 border border-amber-900/50 p-2 rounded text-[10px] text-amber-200">
          <div className="flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span>Amoxicillin 500mg — Reorder alert triggered</span>
          </div>
          <span className="font-bold">Restock</span>
        </div>
      </div>
    );
  }

  if (type === 'ml') {
    return (
      <div className="w-full h-48 bg-slate-950 rounded-xl p-4 font-mono text-xs text-slate-300 flex flex-col justify-between border border-slate-800 shadow-inner overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-sky-400" />
            <span className="text-white font-semibold">Churn Analytics Core</span>
          </div>
          <span className="text-[10px] text-sky-400 bg-sky-950/60 border border-sky-800/80 px-2 py-0.5 rounded">
            ROC-AUC: 0.884
          </span>
        </div>

        <div className="space-y-1.5 py-1 text-[11px]">
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Class Algorithm:</span>
            <span className="text-slate-200">RandomForestClassifier</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Top Feature Weight:</span>
            <span className="text-sky-300">Contract Duration (0.34)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Cross-Validation:</span>
            <span className="text-emerald-400">5-Fold Stratified (F1: 0.82)</span>
          </div>
        </div>

        <div className="bg-slate-900 p-2 rounded border border-slate-800 flex items-center justify-between text-[11px]">
          <span className="text-slate-400">Cohort Churn Risk:</span>
          <span className="text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded">
            14.2% (Low Retention Alert)
          </span>
        </div>
      </div>
    );
  }

  // Employee Management
  return (
    <div className="w-full h-48 bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-300 flex flex-col justify-between border border-slate-800 shadow-inner overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-emerald-400" />
          <span className="text-white font-semibold">Staff Directory API</span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded">
          REST / JWT Protected
        </span>
      </div>

      <div className="space-y-1 py-1 text-[10px] divide-y divide-slate-800/60">
        <div className="flex justify-between items-center pt-1">
          <span className="text-white font-medium">A. Sharma</span>
          <span className="text-slate-400">Lead Cloud Architect</span>
          <span className="text-emerald-400 font-semibold">Active</span>
        </div>
        <div className="flex justify-between items-center pt-1">
          <span className="text-white font-medium">P. Rao</span>
          <span className="text-slate-400">Full-Stack Engineer</span>
          <span className="text-emerald-400 font-semibold">Active</span>
        </div>
        <div className="flex justify-between items-center pt-1">
          <span className="text-white font-medium">V. Hegde</span>
          <span className="text-slate-400">DevOps Specialist</span>
          <span className="text-amber-400 font-semibold">On Leave</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800">
        <span>CRUD Operations: GET / POST / PUT / DELETE</span>
        <span className="text-emerald-400 font-mono">200 OK</span>
      </div>
    </div>
  );
};
