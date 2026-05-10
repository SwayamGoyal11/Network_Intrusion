import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ShieldAlert, Activity, Wifi, CheckCircle, AlertTriangle } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const statsData = [
  { title: 'Total Packets Analyzed', value: '1.24M', icon: Activity, color: 'text-blue-500', bg: 'bg-blue-500/10', glow: 'shadow-[0_0_15px_rgba(0,85,255,0.2)]' },
  { title: 'Threats Detected', value: '8,432', icon: ShieldAlert, color: 'text-neon-red', bg: 'bg-neon-red/10', glow: 'shadow-[0_0_15px_rgba(255,0,85,0.2)]' },
  { title: 'Active Connections', value: '14,205', icon: Wifi, color: 'text-cyan-500', bg: 'bg-cyan-500/10', glow: 'shadow-[0_0_15px_rgba(0,240,255,0.2)]' },
  { title: 'Safe Traffic', value: '98.4%', icon: CheckCircle, color: 'text-neon-green', bg: 'bg-neon-green/10', glow: 'shadow-[0_0_15px_rgba(0,255,102,0.2)]' },
  { title: 'Detection Accuracy', value: '99.8%', icon: Shield, color: 'text-purple-500', bg: 'bg-purple-500/10', glow: 'shadow-[0_0_15px_rgba(157,0,255,0.2)]' },
  { title: 'Critical Alerts', value: '12', icon: AlertTriangle, color: 'text-orange-500', bg: 'bg-orange-500/10', glow: 'shadow-[0_0_15px_rgba(249,115,22,0.2)]' }
];

const miniChartData = Array.from({ length: 20 }, () => ({ value: Math.random() * 100 }));

const recentAlerts = [
  { id: 1, time: '10:42:05', src: '192.168.1.105', dst: '10.0.0.5', proto: 'TCP', type: 'DDoS', severity: 'Critical' },
  { id: 2, time: '10:41:12', src: '172.16.0.50', dst: '10.0.0.12', proto: 'UDP', type: 'Port Scan', severity: 'Medium' },
  { id: 3, time: '10:38:45', src: '192.168.1.200', dst: '10.0.0.8', proto: 'TCP', type: 'Brute Force', severity: 'High' },
  { id: 4, time: '10:35:20', src: '10.0.0.15', dst: '8.8.8.8', proto: 'ICMP', type: 'Ping Sweep', severity: 'Low' },
];

const getSeverityColor = (severity) => {
  switch(severity) {
    case 'Low': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
    case 'Medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    case 'High': return 'text-orange-400 bg-orange-400/10 border-orange-400/20 shadow-[0_0_10px_rgba(249,115,22,0.2)]';
    case 'Critical': return 'text-neon-red bg-neon-red/10 border-neon-red/20 shadow-[0_0_10px_rgba(255,0,85,0.3)] animate-pulse';
    default: return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
  }
};

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statsData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`glass-panel-interactive p-6 relative overflow-hidden group ${stat.glow}`}
            >
              <div className="flex items-center justify-between z-10 relative">
                <div>
                  <p className="text-slate-400 text-sm font-medium mb-1">{stat.title}</p>
                  <h3 className={`text-3xl font-bold ${stat.color}`}>{stat.value}</h3>
                </div>
                <div className={`p-3 rounded-lg ${stat.bg}`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-12 opacity-30 group-hover:opacity-50 transition-opacity">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={miniChartData}>
                    <Area type="monotone" dataKey="value" stroke="none" fill="currentColor" className={stat.color} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="glass-panel p-6"
        >
          <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-neon-red" />
            Recent Alerts
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-400 uppercase bg-dark-900/50 border-b border-white/5">
                <tr>
                  <th className="px-4 py-3 rounded-tl-lg">Time</th>
                  <th className="px-4 py-3">Source IP</th>
                  <th className="px-4 py-3">Dest IP</th>
                  <th className="px-4 py-3">Threat</th>
                  <th className="px-4 py-3 rounded-tr-lg">Severity</th>
                </tr>
              </thead>
              <tbody>
                {recentAlerts.map((alert) => (
                  <tr key={alert.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-mono text-slate-300">{alert.time}</td>
                    <td className="px-4 py-3 font-mono text-cyan-400">{alert.src}</td>
                    <td className="px-4 py-3 font-mono text-cyan-400">{alert.dst}</td>
                    <td className="px-4 py-3 text-slate-200">{alert.type}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded border text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="glass-panel p-6 flex flex-col items-center justify-center min-h-[300px]"
        >
          {/* Placeholder for a map or advanced visualization */}
          <div className="relative w-full h-full flex flex-col items-center justify-center">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-dark-900/0 to-transparent"></div>
             <Shield className="w-24 h-24 text-cyan-500/20 animate-pulse mb-4" />
             <h3 className="text-lg text-slate-300 font-medium z-10 text-glow">System Active & Monitoring</h3>
             <p className="text-sm text-slate-500 z-10 mt-2">Connecting to AI backend models...</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
