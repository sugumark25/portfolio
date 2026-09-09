import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Brain,
  Radio,
  FolderCode,
  CheckCircle,
  Sparkles,
  Terminal,
  Layers,
  Cpu
} from 'lucide-react';

export const About: React.FC = () => {
  const statsCards = [
    {
      title: 'Primary Language',
      value: 'Java',
      icon: Code,
      color: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/40',
      textColor: 'text-cyan-400'
    },
    {
      title: 'Backend Focus',
      value: 'Spring Boot',
      icon: Server,
      color: 'from-blue-500/20 to-indigo-500/20',
      borderColor: 'border-blue-500/40',
      textColor: 'text-blue-400'
    },
    {
      title: 'AI Focus',
      value: 'ML, DL & GenAI',
      icon: Brain,
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/40',
      textColor: 'text-purple-400'
    },
    {
      title: 'Specialization',
      value: 'Internet of Things',
      icon: Radio,
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'border-emerald-500/40',
      textColor: 'text-emerald-400'
    },
    {
      title: 'Projects',
      value: '5+ Featured',
      icon: FolderCode,
      color: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'border-amber-500/40',
      textColor: 'text-amber-400'
    }
  ];

  const focusPoints = [
    'Data Structures & Algorithms',
    'Java & Spring Boot Backend',
    'REST APIs & Database Design',
    'AI & Deep Learning Systems',
    'RAG & Multi-Agent Intelligence',
    'Edge IoT & TinyML Architecture'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Intelligent Software</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Connected Systems</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-4" />
        </div>

        {/* Animated Statistics Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
          {statsCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-5 rounded-2xl bg-gradient-to-br ${card.color} border ${card.borderColor} backdrop-blur-md flex flex-col items-start justify-between shadow-lg hover:scale-105 transition-transform duration-300`}
              >
                <div className={`p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 ${card.textColor} mb-3`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    {card.title}
                  </div>
                  <div className="text-lg font-bold text-white font-heading">
                    {card.value}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Detailed Paragraph Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base"
          >
            <p>
              I am a Computer Science and Engineering student specializing in <strong className="text-cyan-300">Internet of Things (IoT)</strong> at Sri Krishna College of Technology. I combine computer science fundamentals with modern software stacks to build scalable applications and intelligent connected systems.
            </p>

            <p>
              My primary focus centers on <strong className="text-cyan-400 font-semibold">Java</strong> and <strong className="text-white font-semibold">Spring Boot</strong> for backend development, alongside specialized exploration in <strong className="text-purple-300">Deep Learning, RAG, and Edge IoT intelligence</strong>.
            </p>

            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 text-xs sm:text-sm text-cyan-200">
              <span className="font-semibold text-cyan-400 block mb-1">Portfolio Highlights:</span>
              Built real-time IoT network anomaly detection (TinyML), metastatic tissue classification models (ResNet-34), multi-agent document intelligence systems (LangGraph & Qdrant), and production-grade Spring Boot APIs.
            </div>
          </motion.div>

          {/* Continuous Skill Improvement List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-5"
          >
            <div className="flex items-center space-x-3 pb-3 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-heading">Continuously Refining</h3>
                <p className="text-xs text-slate-400">Core Engineering Focus Areas</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {focusPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-colors text-xs text-slate-200"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-cyan-400" /> Full Lifecycle
              </span>
              <span className="flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-purple-400" /> AI + IoT Focus
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
