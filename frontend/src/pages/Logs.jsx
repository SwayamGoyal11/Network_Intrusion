import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Download, Filter } from 'lucide-react';

const mockLogs = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  timestamp: new Date(Date.now() - i * 60000).toISOString(),
  level: ['INFO', 'WARN', 'ERROR', 'CRITICAL'][Math.floor(Math.random() * 4)],
  message: `System model executed prediction for flow ID ${Math.floor(Math.random() * 10000)}`,
  source: ['API', 'Model', 'System', 'Network'][Math.floor(Math.random() * 4)],
}));

const Logs = () => {
  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 text-glow">Logs & Alerts</h2>
          <p className="text-slate-400">System event logs and terminal output</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-dark-800 border border-white/10 rounded hover:border-cyan-500/50 transition-colors text-slate-300">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-dark-800 border border-white/10 rounded hover:border-cyan-500/50 transition-colors text-slate-300">
            <Download className="w-4 h-4" /> Export
          </button>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-6 flex-1 flex flex-col font-mono text-sm"
      >
        <div className="flex items-center gap-2 mb-4 text-cyan-500 border-b border-white/5 pb-4">
          <Terminal className="w-5 h-5" />
          <span className="font-bold">SYSTEM TERMINAL</span>
        </div>
        
        <div className="flex-1 overflow-y-auto space-y-2 bg-dark-900/50 p-4 rounded border border-white/5">
          {mockLogs.map((log) => (
            <div key={log.id} className="flex gap-4 hover:bg-white/5 p-1 rounded transition-colors">
              <span className="text-slate-500 shrink-0">{log.timestamp.replace('T', ' ').substring(0, 19)}</span>
              <span className={`shrink-0 w-20 ${
                log.level === 'INFO' ? 'text-blue-400' :
                log.level === 'WARN' ? 'text-yellow-400' :
                log.level === 'ERROR' ? 'text-orange-400' : 'text-neon-red font-bold animate-pulse text-glow-red'
              }`}>
                [{log.level}]
              </span>
              <span className="text-purple-400 shrink-0 w-20">[{log.source}]</span>
              <span className="text-slate-300">{log.message}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 mt-4 text-slate-500 animate-pulse">
            <span>_</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Logs;
