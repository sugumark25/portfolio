import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Code2, Zap } from 'lucide-react';
import { developmentApproachData, currentlyLearningData } from '../data/skills';


const iconMap: Record<string, React.ElementType> = {
  Search,
  Compass,
  Code: Code2,
  Zap
};

export const DevelopmentApproach: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>07. ENGINEERING PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            How I <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Build</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            My systematic engineering methodology for turning complex technical requirements into production-ready software systems.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-4" />
        </div>

        {/* 4 Animated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {developmentApproachData.map((step, idx) => {
            const Icon = iconMap[step.iconName] || Search;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between"
              >
                {/* Step Number Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg shadow-cyan-500/10`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-extrabold font-mono text-slate-600">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white font-heading">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Currently Exploring Section */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/30 text-center relative overflow-hidden">
          <div className="flex flex-col items-center mb-6">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-purple-500/10 border border-purple-500/30 text-purple-300 mb-2">
              Continuous Upskilling
            </span>
            <h3 className="text-2xl font-bold text-white font-heading">
              Currently <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Exploring & Refining</span>
            </h3>
          </div>

          {/* Animated Tech Badges */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {currentlyLearningData.map((item, idx) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono font-medium text-slate-200 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors shadow-sm"
              >
                ⚡ {item}
              </motion.span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
