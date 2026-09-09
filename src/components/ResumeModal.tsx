import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, ExternalLink, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl glass-panel border border-cyan-500/30 rounded-2xl p-6 sm:p-8 z-10 shadow-2xl shadow-cyan-950/50 my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-800">
              <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  Sugumar K — <span className="text-cyan-400">Curriculum Vitae</span>
                </h3>
                <p className="text-sm text-slate-400">Software Developer | CSE (IoT) Specialist</p>
              </div>
            </div>

            {/* Content Highlights */}
            <div className="space-y-6 text-sm text-slate-300 mb-8 max-h-[60vh] overflow-y-auto pr-2">
              {/* Snapshot */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-3">
                <div className="flex items-center space-x-2 text-cyan-400 font-semibold text-base">
                  <GraduationCap className="w-5 h-5" />
                  <span>Academic Profile</span>
                </div>
                <p className="text-slate-300">
                  <strong className="text-white">Sri Krishna College of Technology, Coimbatore</strong> (2023 - 2027)
                  <br />
                  B.E. Computer Science and Engineering (Internet of Things) — <span className="text-cyan-400 font-mono font-bold">CGPA: 7.7</span>
                </p>
              </div>

              {/* Core Skill Summary */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-3">
                <div className="flex items-center space-x-2 text-blue-400 font-semibold text-base">
                  <Award className="w-5 h-5" />
                  <span>Core Expertise</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Java & Spring Boot Backend Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Artificial Intelligence & Deep Learning (ResNet-34)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Generative AI, LangGraph & Qdrant RAG</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>IoT Security, ESP32 & Edge TinyML</span>
                  </div>
                </div>
              </div>

              {/* Experience Summary */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-2">
                <div className="flex items-center space-x-2 text-purple-400 font-semibold text-base">
                  <Briefcase className="w-5 h-5" />
                  <span>Recent Internship</span>
                </div>
                <p className="text-slate-300">
                  <strong className="text-white">Software Development Intern @ Mist Solutions</strong> (May 2025 - June 2025)
                  <br />
                  <span className="text-xs text-slate-400">Developed Admin Authentication, Product & Category modules for Vetri Foods using PHP, MySQL & JS.</span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors text-sm font-medium"
              >
                Close Preview
              </button>
              
              <a
                href="https://github.com/sugumark25"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 hover:border-slate-600 text-white flex items-center justify-center space-x-2 transition-colors text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                <span>GitHub Resume Specs</span>
              </a>

              <a
                href="#contact"
                onClick={() => {
                  onClose();
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Request Detailed PDF Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
