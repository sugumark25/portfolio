import { useState } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { WhatIKnow } from './components/WhatIKnow';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { DevelopmentApproach } from './components/DevelopmentApproach';
import { GitHubCTA } from './components/GitHubCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';


export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#080c14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Interactive Particle Network & IoT Node Canvas Background */}
      <AnimatedBackground />

      {/* Main Layout Content Layer */}
      <div className="relative z-10">
        <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />
        
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <WhatIKnow />
          <Projects />
          <Experience />
          <DevelopmentApproach />
          <GitHubCTA />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Resume Viewer / Downloader Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
