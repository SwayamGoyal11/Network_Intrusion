import React, { useState, useEffect } from 'react';
import { Bell, Search, User } from 'lucide-react';

const TopNav = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="h-20 glass-panel border-t-0 border-x-0 rounded-none flex items-center justify-between px-8 z-20 sticky top-0">
      <div className="flex items-center gap-6">
        <h2 className="text-xl font-bold text-slate-200 tracking-wide">
          AI Network Intrusion Detection System
        </h2>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
          <input
            type="text"
            placeholder="Search IPs, Threats..."
            className="bg-dark-900/50 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:shadow-[0_0_10px_rgba(0,240,255,0.1)] transition-all w-64"
          />
        </div>

        <div className="flex items-center gap-4 border-l border-white/10 pl-6">
          <div className="font-mono text-cyan-500 text-sm tracking-widest text-glow">
            {time.toLocaleTimeString('en-US', { hour12: false })}
          </div>
          
          <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-neon-red rounded-full shadow-[0_0_8px_#ff0055]"></span>
          </button>

          <button className="flex items-center gap-2 p-1 pr-3 rounded-full border border-white/10 hover:border-cyan-500/30 transition-all bg-dark-900/50">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-600 to-purple-600 flex items-center justify-center p-[2px]">
              <div className="w-full h-full bg-dark-900 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-slate-300" />
              </div>
            </div>
            <span className="text-sm font-medium text-slate-300">Admin</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
