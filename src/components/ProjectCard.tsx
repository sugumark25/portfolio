import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Cpu, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative glass-panel rounded-3xl border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div>
        {/* Top Bar: Number & GitHub Link */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-4xl sm:text-5xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:scale-105 transition-transform">
            {project.number}
          </span>

          <div className="flex items-center space-x-2">
            {project.metrics && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                {project.metrics[0].value} {project.metrics[0].label}
              </span>
            )}
            {project.architecture && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 flex items-center gap-1 hidden sm:flex">
                <Cpu className="w-3.5 h-3.5" /> TinyML Edge
              </span>
            )}
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-2 mb-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading group-hover:text-cyan-300 transition-colors leading-tight">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
            {project.subtitle}
          </p>
        </div>

        {/* Overview */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.overview}
        </p>

        {/* Key Feature Bullets (First 3) */}
        <div className="space-y-1.5 mb-6">
          {project.keyFeatures.slice(0, 3).map((feature) => (
            <div key={feature} className="flex items-center space-x-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {project.techStack.flatMap((ts) => ts.items).slice(0, 7).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900/90 border border-slate-800 text-slate-300 group-hover:border-cyan-500/30 group-hover:text-cyan-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 gap-3">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-medium text-xs flex items-center space-x-2 transition-all hover:scale-105 group-hover:border-cyan-500/40"
        >
          <GithubIcon className="w-4 h-4 text-cyan-400" />
          <span>View Source Code</span>
        </a>

        <button
          onClick={() => onSelect(project)}
          className="px-5 py-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 hover:bg-cyan-500/25 text-cyan-300 font-bold text-xs flex items-center space-x-2 transition-all hover:scale-105 shadow-sm"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
