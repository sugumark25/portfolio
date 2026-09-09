import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  Cpu,
  Code2,
  Brain,
  Database,
  Server,
  Layers,
  Terminal as TerminalIcon,
  ShieldAlert
} from 'lucide-react';
import { GithubIcon } from './Icons';


const roles = [
  'Software Developer',
  'Java & Spring Boot Engineer',
  'AI & IoT Developer'
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState<'java' | 'ai' | 'iot'>('java');

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Soft Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Headline & Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 w-fit backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-300 font-mono">
                Available for Software Engineering Roles & Internships
              </span>
            </div>

            {/* Main Greeting */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Sugumar K</span>
              </h1>

              {/* Dynamic Typing Title */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono text-cyan-300 flex items-center">
                  <span className="text-slate-500 mr-2">&gt;</span>
                  {displayText}
                  <span className="animate-pulse ml-1 text-cyan-400">|</span>
                </span>
              </div>
            </div>

            {/* Introduction Quote */}
            <blockquote className="relative p-4 sm:p-5 rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-300 text-sm sm:text-base leading-relaxed backdrop-blur-md shadow-inner">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-600 rounded-l-2xl" />
              Computer Science & IoT engineering student specializing in robust <strong className="text-white font-semibold">Java</strong> backend architectures, scalable <strong className="text-cyan-300 font-semibold">Spring Boot</strong> microservices, and edge <strong className="text-purple-300 font-semibold">AI/IoT</strong> solutions.
            </blockquote>

            {/* Key Stack Quick Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" /> Java / Spring Boot
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-mono bg-blue-950/60 border border-blue-500/30 text-blue-300 flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-blue-400" /> AI / Deep Learning
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-mono bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" /> Edge IoT / ESP32
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center space-x-2"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 text-slate-200 hover:text-white font-medium text-sm transition-all flex items-center space-x-2 backdrop-blur-md"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <a
                href="https://github.com/sugumark25"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 font-medium text-sm transition-all flex items-center space-x-2 backdrop-blur-md"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Futuristic Code Visual & Interactive Node Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Developer Code Terminal Glass Window */}
            <div className="relative rounded-2xl glass-panel border border-cyan-500/30 p-1 shadow-2xl shadow-cyan-950/60 overflow-hidden">
              {/* Terminal Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#080d1a] border-b border-slate-800/80 rounded-t-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                    <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" /> SugumarEngine.java
                  </span>
                </div>

                {/* Tab Switchers */}
                <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                  <button
                    onClick={() => setActiveTab('java')}
                    className={`px-2 py-0.5 text-[10px] font-mono rounded ${
                      activeTab === 'java' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400'
                    }`}
                  >
                    Backend
                  </button>
                  <button
                    onClick={() => setActiveTab('ai')}
                    className={`px-2 py-0.5 text-[10px] font-mono rounded ${
                      activeTab === 'ai' ? 'bg-blue-500/20 text-blue-300 font-bold' : 'text-slate-400'
                    }`}
                  >
                    AI/ML
                  </button>
                  <button
                    onClick={() => setActiveTab('iot')}
                    className={`px-2 py-0.5 text-[10px] font-mono rounded ${
                      activeTab === 'iot' ? 'bg-purple-500/20 text-purple-300 font-bold' : 'text-slate-400'
                    }`}
                  >
                    IoT
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-5 bg-[#060a12]/90 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed min-h-[280px]">
                {activeTab === 'java' && (
                  <pre className="space-y-1">
                    <span className="text-purple-400">@RestController</span>
                    <br />
                    <span className="text-purple-400">@RequestMapping</span>(
                    <span className="text-emerald-400">"/api/v1/developer"</span>)
                    <br />
                    <span className="text-blue-400">public class</span>{' '}
                    <span className="text-yellow-300">SugumarService</span> {'{'}
                    <br />
                    <br />
                    {'  '}
                    <span className="text-purple-400">@Autowired</span>
                    <br />
                    {'  '}
                    <span className="text-blue-400">private</span> SkillRepository skills;
                    <br />
                    <br />
                    {'  '}
                    <span className="text-purple-400">@GetMapping</span>(
                    <span className="text-emerald-400">"/profile"</span>)
                    <br />
                    {'  '}
                    <span className="text-blue-400">public</span> ResponseEntity&lt;DeveloperDTO&gt; getProfile() {'{'}
                    <br />
                    {'    '}
                    <span className="text-cyan-400">return</span> ResponseEntity.ok(
                    <br />
                    {'      '}
                    <span className="text-yellow-300">DeveloperDTO</span>.builder()
                    <br />
                    {'        '}.name(<span className="text-emerald-400">"Sugumar K"</span>)
                    <br />
                    {'        '}.degree(<span className="text-emerald-400">"B.E. CSE (IoT)"</span>)
                    <br />
                    {'        '}.coreLanguage(<span className="text-emerald-400">"Java"</span>)
                    <br />
                    {'        '}.framework(<span className="text-emerald-400">"Spring Boot"</span>)
                    <br />
                    {'        '}.status(<span className="text-emerald-400">"READY_TO_BUILD"</span>)
                    <br />
                    {'        '}.build()
                    <br />
                    {'    '});
                    <br />
                    {'  }'}
                    <br />
                    {'}'}
                  </pre>
                )}

                {activeTab === 'ai' && (
                  <pre className="space-y-1">
                    <span className="text-slate-500"># PyTorch & ResNet-34 Metastatic Pipeline</span>
                    <br />
                    <span className="text-blue-400">import</span> torch
                    <br />
                    <span className="text-blue-400">import</span> torchvision.models <span className="text-blue-400">as</span> models
                    <br />
                    <br />
                    <span className="text-blue-400">class</span> <span className="text-yellow-300">MetastaticClassifier</span>(torch.nn.Module):
                    <br />
                    {'  '}<span className="text-blue-400">def</span> <span className="text-purple-400">__init__</span>(self):
                    <br />
                    {'    '}super().__init__()
                    <br />
                    {'    '}self.resnet = models.resnet34(pretrained=<span className="text-purple-400">True</span>)
                    <br />
                    {'    '}self.resnet.fc = torch.nn.Linear(512, 2)
                    <br />
                    <br />
                    {'  '}<span className="text-blue-400">def</span> <span className="text-purple-400">evaluate_accuracy</span>(self):
                    <br />
                    {'    '}<span className="text-cyan-400">return</span> {'{'}
                    <br />
                    {'      '}<span className="text-emerald-400">"Accuracy"</span>: <span className="text-cyan-300">0.923</span>,
                    <br />
                    {'      '}<span className="text-emerald-400">"ROC_AUC"</span>: <span className="text-cyan-300">0.963</span>,
                    <br />
                    {'      '}<span className="text-emerald-400">"F1_Score"</span>: <span className="text-cyan-300">0.934</span>
                    <br />
                    {'    }'}
                  </pre>
                )}

                {activeTab === 'iot' && (
                  <pre className="space-y-1">
                    <span className="text-slate-500">// ESP32 TinyML Anomaly Sensor Node</span>
                    <br />
                    <span className="text-purple-400">#include</span> <span className="text-emerald-400">&lt;WiFi.h&gt;</span>
                    <br />
                    <span className="text-purple-400">#include</span> <span className="text-emerald-400">&lt;PubSubClient.h&gt;</span>
                    <br />
                    <span className="text-purple-400">#include</span> <span className="text-emerald-400">&lt;TensorFlowLite.h&gt;</span>
                    <br />
                    <br />
                    <span className="text-blue-400">void</span> <span className="text-yellow-300">processEdgeTraffic</span>() {'{'}
                    <br />
                    {'  '}float zScore = calculateZScore(flowRate);
                    <br />
                    {'  '}<span className="text-purple-400">if</span> (zScore &gt; <span className="text-cyan-300">2.5</span>) {'{'}
                    <br />
                    {'    '}bool anomaly = tfliteEngine.predict(packetFeatures);
                    <br />
                    {'    '}<span className="text-purple-400">if</span> (anomaly) mqtt.publish(<span className="text-emerald-400">"iot/alert"</span>, <span className="text-emerald-400">"THREAT_DETECTED"</span>);
                    <br />
                    {'  }'}
                    <br />
                    {'}'}
                  </pre>
                )}
              </div>

              {/* Floating Technology Badges */}
              <div className="p-3 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2 text-[11px] text-slate-300">
                <div className="flex items-center space-x-1 text-cyan-400">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Java 17</span>
                </div>
                <div className="flex items-center space-x-1 text-emerald-400">
                  <Server className="w-3.5 h-3.5" />
                  <span>Spring Boot</span>
                </div>
                <div className="flex items-center space-x-1 text-blue-400">
                  <Brain className="w-3.5 h-3.5" />
                  <span>PyTorch</span>
                </div>
                <div className="flex items-center space-x-1 text-purple-400">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>ESP32</span>
                </div>
                <div className="flex items-center space-x-1 text-amber-400">
                  <Database className="w-3.5 h-3.5" />
                  <span>MySQL</span>
                </div>
              </div>
            </div>

            {/* Ambient Floating Badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 px-4 py-2 rounded-xl bg-[#0d1627]/90 border border-cyan-500/40 shadow-xl backdrop-blur-md hidden sm:flex items-center space-x-2"
            >
              <ShieldAlert className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">IoT Edge Security</div>
                <div className="text-xs font-bold text-white">TinyML Sandbox</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="absolute -top-6 -right-4 px-4 py-2 rounded-xl bg-[#0d1627]/90 border border-purple-500/40 shadow-xl backdrop-blur-md hidden sm:flex items-center space-x-2"
            >
              <Layers className="w-5 h-5 text-purple-400" />
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Document AI</div>
                <div className="text-xs font-bold text-white">LangGraph Multi-Agent</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
