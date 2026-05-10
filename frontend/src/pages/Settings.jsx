import React from 'react';
import { motion } from 'framer-motion';
import { Save, Server, Shield, Database } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 text-glow">System Settings</h2>
        <p className="text-slate-400">Configure backend connections, ML models, and alerting thresholds</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-6"
      >
        <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
          <Server className="w-5 h-5 text-cyan-500" />
          Backend API Integration
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">FastAPI / Flask Endpoint URL</label>
            <input type="text" defaultValue="http://localhost:8000/api/v1/predict" className="w-full bg-dark-900/50 border border-white/10 rounded px-4 py-2 text-white focus:border-cyan-500/50 focus:outline-none transition-colors" />
            <p className="text-xs text-slate-500 mt-1">This should point to the backend serving the Colab ML models.</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">API Key (Optional)</label>
            <input type="password" placeholder="••••••••••••••••" className="w-full bg-dark-900/50 border border-white/10 rounded px-4 py-2 text-white focus:border-cyan-500/50 focus:outline-none transition-colors" />
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-panel p-6"
      >
        <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
          <Database className="w-5 h-5 text-purple-500" />
          Model Configuration
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Active Detection Model</label>
            <select className="w-full bg-dark-900/50 border border-white/10 rounded px-4 py-2 text-white focus:border-purple-500/50 focus:outline-none transition-colors appearance-none">
              <option>Random Forest (Default)</option>
              <option>XGBoost</option>
              <option>Deep Neural Network (Keras)</option>
              <option>Support Vector Machine</option>
            </select>
          </div>
          <div className="flex items-center justify-between p-4 bg-dark-900/50 rounded border border-white/5">
            <div>
              <h4 className="text-sm font-medium text-white">Feature Scaling</h4>
              <p className="text-xs text-slate-500">Apply StandardScaler / MinMaxScaler before prediction</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-dark-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
            </label>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-panel p-6"
      >
        <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
          <Shield className="w-5 h-5 text-neon-green" />
          Alerting Thresholds
        </h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-1">
              <label className="block text-sm font-medium text-slate-400">Confidence Threshold</label>
              <span className="text-sm text-cyan-500">85%</span>
            </div>
            <input type="range" min="50" max="100" defaultValue="85" className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
            <p className="text-xs text-slate-500 mt-1">Alerts will only trigger if model confidence exceeds this value.</p>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-end gap-4">
        <button className="px-6 py-2 rounded-lg font-medium text-slate-300 hover:text-white transition-colors">
          Cancel
        </button>
        <button className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-lg font-medium transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]">
          <Save className="w-4 h-4" /> Save Configuration
        </button>
      </div>
    </div>
  );
};

export default Settings;
