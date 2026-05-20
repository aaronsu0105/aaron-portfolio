import React from 'react';
import sidequestsData from '../sidequests.json';

export default function Sidequests() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white">Active Sidequests</h2>
        <p className="text-slate-400 mt-1">Exploratory work, evaluations, and local ventures.</p>
      </div>

      <div className="space-y-6">
        {sidequestsData.map((quest) => (
          <div key={quest.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-bold text-white mb-2">{quest.title}</h3>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              {quest.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {quest.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className={`border text-xs px-3 py-1 rounded-full ${tag.colorClass}`}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}