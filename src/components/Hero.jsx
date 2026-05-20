import React from 'react';

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full pt-12 md:pt-0">
      
      {/* Left Column: Text & Skills */}
      <div className="space-y-6 max-w-2xl flex-1">
        
        {/* Live Status Pill */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 backdrop-blur-md mb-2 shadow-lg">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-medium tracking-wide">
            Status: Engineering quant models & walking Charlie
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-tight">
          Bridging <span className="text-blue-400">Bioinformatics</span> <br /> & Software.
        </h1>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
          Medical Sciences student specializing in Bioinformatics. Blending a strong operational background with full-stack development to build clinical data platforms and quantitative algorithms.
        </p>

        {/* Explicit Skills Array */}
        <div className="pt-2 border-t border-white/5 mt-6">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 mt-6">Core Competencies</p>
          <div className="flex flex-wrap gap-2.5">
            {['Python & Java', 'Biochemistry Protocols', 'Data Analysis', 'Object-Oriented Programming', 'Equipment Troubleshooting', 'Algorithm Validation'].map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-4 pt-6">
          <a href="#trajectory" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            Explore Experience
          </a>
        </div>
      </div>

      {/* Right Column: Floating Profile Avatar */}
      <div className="w-56 h-56 md:w-72 md:h-72 shrink-0 relative group">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
        
        <div className="relative w-full h-full rounded-full border border-white/20 bg-[#0f172a]/50 overflow-hidden shadow-2xl backdrop-blur-xl">
          <img 
            src="/profile.jpg" 
            alt="Aaron Su" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div class="flex h-full w-full items-center justify-center text-slate-500 text-xs text-center p-6">[ Drag profile.jpg into public ]</div>';
            }}
          />
        </div>
      </div>

    </div>
  );
}