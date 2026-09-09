import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitCommit, GitPullRequest, Code2, Trophy } from 'lucide-react';
import { GithubIcon } from './Icons';


export const GitHubCTA: React.FC = () => {
  // Generate pseudo-random realistic GitHub contribution grid blocks
  const generateGrid = () => {
    const cells = [];
    const intensityLevels = [
      'bg-slate-900 border-slate-800/80',
      'bg-emerald-950/80 border-emerald-800/50',
      'bg-emerald-700/60 border-emerald-600/60',
      'bg-emerald-500 border-emerald-400',
      'bg-cyan-400 border-cyan-300 shadow-sm shadow-cyan-400/50'
    ];

    for (let i = 0; i < 112; i++) {
      const level = Math.floor(Math.random() * (i % 7 === 0 || i % 13 === 0 ? 5 : 3));
      cells.push(intensityLevels[level]);
    }
    return cells;
  };

  const gridCells = generateGrid();

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 overflow-hidden shadow-2xl shadow-cyan-950/50"
        >
          {/* Subtle Background Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative CTA */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <GithubIcon className="w-3.5 h-3.5" />
                <span>OPEN SOURCE CONTRIBUTIONS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
                Explore My Work on <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">GitHub</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Explore my complete repositories, source code implementations, experimental AI pipelines, Spring Boot services, and open-source contributions.
              </p>

              <div className="flex items-center space-x-4 pt-2">
                <a
                  href="https://github.com/sugumark25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all flex items-center space-x-2.5 hover:scale-105"
                >
                  <GithubIcon className="w-5 h-5" />
                  <span>Visit My GitHub Profile</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Profile Metrics */}
              <div className="flex items-center space-x-6 pt-4 text-xs font-mono text-slate-400">
                <div className="flex items-center space-x-1.5">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span>@sugumark25</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <GitCommit className="w-4 h-4 text-emerald-400" />
                  <span>5+ Major Projects</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span>Java / AI / IoT</span>
                </div>
              </div>
            </div>

            {/* Right Visual: Decorative GitHub Activity Grid */}
            <div className="lg:col-span-6 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono border-b border-slate-800 pb-3">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <GitPullRequest className="w-4 h-4 text-emerald-400" /> Contribution Activity Graph
                </span>
                <span className="text-emerald-400 font-bold">Active Developer</span>
              </div>

              {/* Matrix Blocks */}
              <div className="grid grid-cols-16 gap-1.5 overflow-x-auto py-2">
                {gridCells.map((style, idx) => (
                  <div
                    key={idx}
                    className={`w-3.5 h-3.5 rounded-sm border ${style} transition-all duration-300 hover:scale-125`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2">
                <span>Less</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2.5 h-2.5 rounded-sm bg-slate-900 border border-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-950 border border-emerald-800" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-700 border border-emerald-600" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500 border border-emerald-400" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-cyan-400 border border-cyan-300" />
                </div>
                <span>More</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
