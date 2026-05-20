import React from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import PortfolioRing from './components/PortfolioRing';
import Projects from './components/Projects';
import Sidequests from './components/Sidequests';
import Photography from './components/Photography';

export default function App() {
  return (
    // The Master Canvas: Deep dark base to make the colors pop
    <div className="relative min-h-screen bg-slate-950 text-slate-300 font-sans antialiased selection:bg-blue-500/30 overflow-hidden">

      {/* The Mesh Gradient: These blurred color orbs sit perfectly still in the background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/30 blur-[120px] rounded-full"></div>
        <div className="absolute top-[30%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[60vw] h-[60vw] bg-purple-900/20 blur-[120px] rounded-full"></div>
      </div>

      {/* The Content: Floating above the mesh */}
      <div className="relative z-10">
        <nav className="fixed top-0 w-full bg-slate-950/50 backdrop-blur-md border-b border-white/5 z-50">
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <span className="font-bold text-lg tracking-tight text-white">Aaron Su</span>
            <div className="space-x-6 text-sm font-medium text-slate-400">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#trajectory" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            </div>
          </div>
        </nav>

        {/* space-y-32 creates massive, breathable gaps between your sections */}
        <main className="max-w-4xl mx-auto px-6 space-y-32 pt-32 pb-32">
          
          <section id="about" className="min-h-[80vh] flex flex-col justify-center">
            <Hero />
          </section>

          <section id="trajectory">
            <Timeline />
          </section>

          <section id="portfolio">
            <PortfolioRing />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="sidequests" className="space-y-32">
            <Sidequests />
            <Photography />
          </section>

        </main>
      </div>
    </div>
  );
}