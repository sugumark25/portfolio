import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Award,
  ArrowRight,
  Terminal,
  Activity
} from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl glass-panel border border-cyan-500/40 rounded-3xl p-6 sm:p-8 md:p-10 z-10 shadow-2xl shadow-cyan-950/60 my-auto max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-full transition-colors z-20"
            aria-label="Close project modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="space-y-3 mb-6 pb-6 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-mono">
                {project.number}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                Detailed Technical Specs
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-tight">
              {project.title}
            </h2>
            <p className="text-sm font-semibold text-cyan-400 font-mono">
              {project.subtitle}
            </p>
          </div>

          <div className="space-y-8 text-slate-300 text-sm">
            {/* Overview */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white font-heading flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Project Overview</span>
              </h3>
              <p className="text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                {project.overview}
              </p>
            </div>

            {/* Performance Metrics if available (e.g. Metastatic Detection) */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white font-heading flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>Verified Clinical & Model Performance Metrics</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="p-3 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-500/30 text-center"
                    >
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                        {metric.label}
                      </div>
                      <div className="text-xl font-extrabold text-emerald-300 font-mono">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Pipeline Flow Diagram (e.g., IoT Sandbox) */}
            {project.architecture && (
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white font-heading flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span>System Architecture & Data Pipeline</span>
                </h3>
                <p className="text-xs text-slate-400 italic">
                  {project.architecture.description}
                </p>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/30 overflow-x-auto">
                  <div className="flex flex-wrap items-center gap-2 min-w-max">
                    {project.architecture.nodes.map((node, idx) => (
                      <React.Fragment key={node}>
                        <div className="px-3 py-2 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-200 text-xs font-mono font-semibold flex items-center gap-1.5 shadow-sm">
                          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{node}</span>
                        </div>
                        {idx < project.architecture!.nodes.length - 1 && (
                          <ArrowRight className="w-4 h-4 text-cyan-500 shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Objectives */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white font-heading flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>Primary Objective & Engineering Goals</span>
              </h3>
              <p className="text-slate-300 font-medium mb-2">{project.objective.main}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.objective.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-start space-x-2 text-xs text-slate-300 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white font-heading">Key Technical Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {project.keyFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 text-xs flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack Categorized */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white font-heading">Technology Stack</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.techStack.map((group) => (
                  <div key={group.category} className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-2">
                    <div className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                      {group.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-800 border border-slate-700 text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub Action */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between flex-wrap gap-4">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center space-x-2.5"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Code on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 text-xs font-mono transition-colors"
              >
                Close Modal
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
