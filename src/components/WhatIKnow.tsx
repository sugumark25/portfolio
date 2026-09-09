import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal,
  Binary,
  Server,
  Brain,
  Sparkles,
  Radio,
  CheckCircle2,
  Cpu
} from 'lucide-react';

import { knowledgeSectionsData } from '../data/skills';

const iconMap: Record<string, React.ElementType> = {
  Terminal,
  Binary,
  ServerCognitive: Server,
  BrainCircuit: Brain,
  Sparkles,
  Radio
};

export const WhatIKnow: React.FC = () => {
  const [selectedId, setSelectedId] = useState(knowledgeSectionsData[0].id);

  const activeSection = knowledgeSectionsData.find((s) => s.id === selectedId) || knowledgeSectionsData[0];

  return (
    <section className="py-20 relative bg-slate-950/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>04. CORE DOMAINS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Work With</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2">
            In-depth breakdown of my engineering focus, software design paradigms, problem-solving methodologies, and specialized tech stacks.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-4" />
        </div>

        {/* Tab Selection Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {knowledgeSectionsData.map((section) => {
            const Icon = iconMap[section.iconName] || Terminal;
            const isSelected = section.id === selectedId;

            return (
              <button
                key={section.id}
                onClick={() => setSelectedId(section.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'bg-gradient-to-br from-cyan-950/90 to-blue-950/90 border-cyan-500/50 shadow-lg shadow-cyan-500/10 text-white scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className={`p-2.5 rounded-xl w-fit ${isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold font-heading line-clamp-2">
                  {section.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Display Card for Active Domain */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-xl"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                {React.createElement(iconMap[activeSection.iconName] || Terminal, { className: 'w-6 h-6' })}
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white font-heading">
                  {activeSection.title}
                </h3>
                <p className="text-sm text-cyan-300 font-mono mt-0.5">
                  Core Engineering Capabilities
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              {activeSection.summary}
            </p>

            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-4">
              Detailed Topics & Methodologies:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {activeSection.details.map((detail) => (
                <div
                  key={detail}
                  className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
