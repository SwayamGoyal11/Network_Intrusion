import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, Activity, Search, BarChart2, Cpu, Settings, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Dashboard', path: '/', icon: Shield },
  { name: 'Live Monitoring', path: '/monitoring', icon: Activity },
  { name: 'Intrusion Detection', path: '/detection', icon: Search },
  { name: 'Attack Analytics', path: '/analytics', icon: BarChart2 },
  { name: 'ML Performance', path: '/performance', icon: Cpu },
  { name: 'Logs & Alerts', path: '/logs', icon: AlertTriangle },
  { name: 'Settings', path: '/settings', icon: Settings },
];

const Sidebar = () => {
  return (
    <div className="w-64 glass-panel border-r-0 rounded-none h-full flex flex-col z-20">
      <div className="p-6 flex items-center gap-3 border-b border-white/5">
        <div className="relative">
          <Shield className="w-8 h-8 text-cyan-500" />
          <div className="absolute inset-0 bg-cyan-500 blur-[10px] opacity-50"></div>
        </div>
        <h1 className="text-xl font-bold text-white tracking-wider text-glow">NIDS<span className="text-cyan-500">.AI</span></h1>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-3 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 relative overflow-hidden group ${
                  isActive ? 'bg-cyan-500/10 text-cyan-500' : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute left-0 top-0 w-1 h-full bg-cyan-500 shadow-[0_0_10px_#00f0ff]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-500' : 'group-hover:text-cyan-400'} transition-colors`} />
                  <span className="font-medium text-sm">{item.name}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>

      <div className="p-4 border-t border-white/5">
        <div className="bg-dark-900/50 rounded-lg p-4 border border-cyan-500/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse shadow-[0_0_8px_#00ff66]"></div>
            <span className="text-xs text-slate-300 font-mono">SYSTEM ONLINE</span>
          </div>
          <div className="text-xs text-slate-500 font-mono">Protected by AI Models</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
