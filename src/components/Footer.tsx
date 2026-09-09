import React from 'react';
import { Mail, ArrowUp, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080f] border-t border-slate-800/80 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 p-[1px]">
                <div className="w-full h-full bg-[#080d17] rounded-[7px] flex items-center justify-center font-bold text-xs text-cyan-400 font-heading">
                  SK
                </div>
              </div>
              <span className="text-xl font-extrabold text-white font-heading tracking-tight">
                Sugumar K
              </span>
            </div>

            <p className="text-xs font-mono text-cyan-400 flex items-center justify-center md:justify-start gap-1">
              <Cpu className="w-3.5 h-3.5" /> Software Developer | Java | AI | Machine Learning | IoT
            </p>

            <p className="text-slate-400 text-xs max-w-md">
              Building intelligent software and connected systems. Specializing in Java backend engineering, machine learning pipelines, RAG multi-agent architectures, and edge IoT security.
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/sugumark25"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com/in/sugumark"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="mailto:sugumar.k.dev@gmail.com"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30 transition-all ml-2"
                aria-label="Scroll to Top"
                title="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

            <span className="text-[11px] font-mono text-slate-500">
              Coimbatore, Tamil Nadu, India
            </span>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-slate-500 font-mono flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 Sugumar K. All rights reserved.</span>
          <span>Designed & Built with React, TypeScript & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};
