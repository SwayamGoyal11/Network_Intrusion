import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, CheckCircle, Target, Activity } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const rocData = [
  { fpr: 0, tpr: 0 },
  { fpr: 5, tpr: 45 },
  { fpr: 10, tpr: 75 },
  { fpr: 15, tpr: 88 },
  { fpr: 20, tpr: 94 },
  { fpr: 30, tpr: 98 },
  { fpr: 100, tpr: 100 },
];

const Performance = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 text-glow">ML Performance</h2>
        <p className="text-slate-400">Metrics and evaluation of the active intrusion detection models</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {[
          { label: 'Accuracy', value: '99.85%', icon: Target, color: 'text-cyan-500' },
          { label: 'Precision', value: '99.12%', icon: CheckCircle, color: 'text-purple-500' },
          { label: 'Recall', value: '98.94%', icon: Activity, color: 'text-neon-green' },
          { label: 'F1-Score', value: '99.03%', icon: Cpu, color: 'text-blue-500' },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-6 flex items-center justify-between"
          >
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">{stat.label}</p>
              <h4 className={`text-3xl font-bold ${stat.color}`}>{stat.value}</h4>
            </div>
            <div className={`p-3 rounded-lg bg-dark-900/50 border border-white/5`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-panel p-6 h-[400px]"
        >
          <h3 className="text-lg font-bold text-slate-200 mb-6">ROC Curve</h3>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={rocData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorTpr" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.5}/>
                  <stop offset="95%" stopColor="#00f0ff" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="fpr" type="number" domain={[0, 100]} stroke="#475569" label={{ value: 'False Positive Rate (%)', position: 'insideBottom', offset: -10, fill: '#94a3b8' }} />
              <YAxis stroke="#475569" label={{ value: 'True Positive Rate (%)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} />
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <Tooltip contentStyle={{ backgroundColor: '#12121a', borderColor: '#2e303a', borderRadius: '8px' }} />
              <Area type="monotone" dataKey="tpr" stroke="#00f0ff" strokeWidth={3} fillOpacity={1} fill="url(#colorTpr)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-panel p-6 h-[400px] flex flex-col"
        >
          <h3 className="text-lg font-bold text-slate-200 mb-6">Feature Importance</h3>
          <div className="flex-1 overflow-y-auto pr-2 space-y-4">
            {[
              { name: 'src_bytes', value: 100 },
              { name: 'dst_bytes', value: 85 },
              { name: 'logged_in', value: 72 },
              { name: 'count', value: 65 },
              { name: 'srv_count', value: 58 },
              { name: 'same_srv_rate', value: 45 },
              { name: 'diff_srv_rate', value: 38 },
            ].map((feature, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300 font-mono">{feature.name}</span>
                  <span className="text-cyan-500 font-mono">{feature.value}%</span>
                </div>
                <div className="w-full bg-dark-900 rounded-full h-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${feature.value}%` }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                    className="bg-cyan-500 h-2 rounded-full shadow-[0_0_10px_#00f0ff]"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Performance;
