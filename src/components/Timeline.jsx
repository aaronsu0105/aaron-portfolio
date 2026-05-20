import React from 'react';
import timelineData from '../timeline.json';

export default function Timeline() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white">Experience & Trajectory</h2>
        <p className="text-slate-400 mt-1">Operational leadership, software deployment, and academic milestones.</p>
      </div>

      <div className="relative pl-4 md:pl-8 py-6">
        {/* Translucent vertical line connecting the events */}
        <div className="absolute left-[11px] md:left-[27px] top-0 bottom-0 w-[2px] bg-white/10 rounded-full"></div>
        
        <div className="space-y-12">
          {timelineData.map((event) => (
            <div key={event.id} className="relative pl-8 md:pl-12 group">
              
              {/* The glowing dot on the timeline */}
              <div className={`absolute left-0 top-1.5 w-6 h-6 -ml-[6.5px] rounded-full border-4 border-[#0f172a] ${event.glowColor} transition-transform duration-300 group-hover:scale-125`}></div>
              
              {/* The event details */}
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-500 tracking-wider uppercase mb-1">
                  {event.date}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-slate-400 leading-relaxed max-w-2xl">
                  {event.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}