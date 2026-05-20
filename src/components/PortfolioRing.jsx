import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import portfolioData from '../portfolio.json';

export default function PortfolioRing() {
  // We still calculate the total behind the scenes to get perfect percentages
  const totalValue = portfolioData.reduce((sum, item) => sum + item.value, 0);

  // --- The Custom Hover Tooltip (Now Percentage-Based) ---
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const percentage = ((data.value / totalValue) * 100).toFixed(1);
      
      return (
        <div className="bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 p-3 rounded-2xl shadow-2xl flex items-center gap-3 transform transition-all">
          <div className="w-8 h-8 rounded-full bg-slate-900/80 flex items-center justify-center border border-white/10 overflow-hidden relative shadow-inner shrink-0">
            <div className="w-3 h-3 rounded-full absolute z-0" style={{ backgroundColor: data.color }}></div>
            {data.domain && (
              <img 
                src={`https://www.google.com/s2/favicons?domain=${data.domain}&sz=128`} 
                alt={data.name}
                className="w-5 h-5 object-contain relative z-10 rounded-sm"
                onError={(e) => e.target.style.display = 'none'} 
              />
            )}
          </div>
          
          <div className="flex flex-col">
            <span className="text-white font-semibold text-sm leading-tight">{data.name}</span>
            <span className="text-slate-400 font-medium text-xs mt-0.5">
              {percentage}% of Portfolio
            </span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white">Portfolio Breakdown</h2>
        <p className="text-slate-400 mt-1">Real-time asset allocation strategy.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl min-h-[400px]">
        
        {/* The Ring Container */}
        <div className="w-full md:w-1/2 h-[350px] relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Holdings</span>
            <span className="text-3xl font-bold text-white">100%</span>
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={portfolioData}
                cx="50%"
                cy="50%"
                innerRadius={110}
                outerRadius={150}
                paddingAngle={3}
                dataKey="value"
                stroke="none"
              >
                {portfolioData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} className="outline-none hover:opacity-80 transition-opacity duration-300" />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} cursor={false} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* The List Container */}
        <div className="w-full md:w-1/2 space-y-3">
          {portfolioData.map((item, index) => {
            const percentage = ((item.value / totalValue) * 100).toFixed(1);

            return (
              <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-900/50 flex items-center justify-center border border-white/10 overflow-hidden relative shadow-inner shrink-0">
                    <div className="w-3 h-3 rounded-full absolute z-0" style={{ backgroundColor: item.color }}></div>
                    {item.domain && (
                      <img 
                        src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=128`} 
                        alt={item.name}
                        className="w-5 h-5 object-contain relative z-10 rounded-sm"
                        onError={(e) => e.target.style.display = 'none'} 
                      />
                    )}
                  </div>
                  <span className="font-semibold text-slate-200">{item.name}</span>
                </div>
                
                {/* Changed to only display the bold percentage value */}
                <div className="text-right flex items-center h-full">
                  <span className="font-bold text-white text-lg">{percentage}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}