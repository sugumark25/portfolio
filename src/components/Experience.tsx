import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { experienceData } from '../data/skills';


export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>06. INDUSTRY EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Work Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Internships</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-4" />
        </div>

        {/* Animated Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-2xl shadow-cyan-950/40"
          >
            {/* Left Glowing Accent Line */}
            <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 rounded-l-3xl" />

            <div className="space-y-6">
              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 mb-2 inline-block">
                    {experienceData.duration}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    {experienceData.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-cyan-400 font-bold text-base mt-1">
                    <Building2 className="w-4 h-4" />
                    <span>{experienceData.company}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-right">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Project Delivered</div>
                  <div className="text-base font-bold text-white font-heading text-cyan-300">
                    {experienceData.project}
                  </div>
                </div>
              </div>

              {/* Responsibilities List */}
              <div className="space-y-3">
                <h4 className="text-sm font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  Key Responsibilities & Contributions:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {experienceData.responsibilities.map((resp, i) => (
                    <div
                      key={i}
                      className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Badges for Internship */}
              <div className="pt-4 border-t border-slate-800 flex items-center space-x-2 flex-wrap gap-2 text-xs font-mono">
                <span className="text-slate-400 mr-2">Technologies Used:</span>
                {['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Admin Authentication', 'Product/Category Management'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
