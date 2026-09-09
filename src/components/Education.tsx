import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, BookOpen, Terminal, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/skills';


export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>02. ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Relevant Coursework</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-4" />
        </div>

        {/* Modern Vertical Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-2xl shadow-cyan-950/40"
          >
            {/* Left Accent Node Bar */}
            <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 rounded-l-3xl" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Main Academic Info */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {educationData.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {educationData.duration}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-tight">
                    {educationData.degree}
                  </h3>
                  <h4 className="text-lg font-bold text-cyan-400 mt-1 font-heading">
                    {educationData.specialization}
                  </h4>
                </div>

                <div className="flex items-center space-x-2 text-slate-300 text-sm font-medium">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{educationData.institution}</span>
                </div>

                {/* CGPA Highlight Box */}
                <div className="inline-flex items-center space-x-3 p-3 rounded-2xl bg-gradient-to-r from-cyan-950/80 to-blue-950/80 border border-cyan-500/40 w-fit">
                  <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Academic Grade</div>
                    <div className="text-xl font-extrabold text-white font-mono">
                      CGPA: <span className="text-cyan-400">{educationData.cgpa}</span> / 10
                    </div>
                  </div>
                </div>
              </div>

              {/* Relevant Coursework Matrix */}
              <div className="lg:col-span-5 space-y-3 bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
                <div className="flex items-center space-x-2 text-white font-bold text-sm font-heading pb-2 border-b border-slate-800">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Core Engineering Curriculum</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {educationData.relevantAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center space-x-2 text-xs text-slate-300 bg-slate-800/50 px-2.5 py-1.5 rounded-lg border border-slate-700/60"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
