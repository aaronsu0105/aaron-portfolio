import React from 'react';
import projectsData from '../projects.json';

export default function Projects() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white">Featured Builds</h2>
        <p className="text-slate-400 mt-1">High-impact engineering projects and quantitative experiments.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <div key={project.id} className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <a href={project.link} className="inline-block text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
              View Live Demo →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}