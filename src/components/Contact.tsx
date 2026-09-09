import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  AlertCircle,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = 'sugumark1206@gmail.com';

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid email format required';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Message content is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>08. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Something Together</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2 leading-relaxed">
            I am interested in opportunities where I can apply my software development skills, learn from experienced engineers, solve challenging problems, and contribute to meaningful products.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Details & Quick Links */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex items-center justify-between group hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Direct Email</div>
                  <a href={`mailto:${emailAddress}`} className="text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors font-mono">
                    {emailAddress}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
                title="Copy Email Address"
              >
                {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* GitHub Card */}
            <a
              href="https://github.com/sugumark25"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-3xl border border-slate-800 flex items-center space-x-4 group hover:border-cyan-500/40 transition-colors block"
            >
              <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">GitHub Repository</div>
                <div className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors font-mono">
                  github.com/sugumark25
                </div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/sugumar-k-33854a290"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-3xl border border-slate-800 flex items-center space-x-4 group hover:border-blue-500/40 transition-colors block"
            >
              <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">LinkedIn Profile</div>
                <div className="text-base font-bold text-white group-hover:text-blue-400 transition-colors font-mono">
                  linkedin.com/in/sugumark
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex items-center space-x-4">
              <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Location</div>
                <div className="text-base font-bold text-white font-heading">
                  Tamil Nadu, India
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 relative"
            >
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, <strong className="text-cyan-300">{formData.name}</strong>. Your message regarding "<span className="italic">{formData.subject}</span>" has been registered.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 text-xs font-mono text-cyan-300 hover:bg-slate-700 transition-colors mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors ${
                          errors.name ? 'border-red-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-red-400 font-mono mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors ${
                          errors.email ? 'border-red-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-400 font-mono mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                      Subject <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Software Development Opportunity / Project Inquiry"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors ${
                        errors.subject ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.subject && (
                      <span className="text-[11px] text-red-400 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Sugumar, I reviewed your Java, Spring Boot & AI/IoT projects and would like to discuss..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-400 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
