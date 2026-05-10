import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Wifi, ShieldAlert } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const LiveMonitoring = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Generate initial dummy data
    const initialData = Array.from({ length: 50 }, (_, i) => ({
      time: i,
      inbound: Math.floor(Math.random() * 500) + 100,
      outbound: Math.floor(Math.random() * 400) + 50,
      threats: Math.random() > 0.8 ? Math.floor(Math.random() * 5) : 0,
    }));
    setData(initialData);

    // Update with real-time mock data
    const interval = setInterval(() => {
      setData(prevData => {
        const newData = [...prevData.slice(1)];
        const lastTime = newData[newData.length - 1].time;
        newData.push({
          time: lastTime + 1,
          inbound: Math.floor(Math.random() * 500) + 100,
          outbound: Math.floor(Math.random() * 400) + 50,
          threats: Math.random() > 0.85 ? Math.floor(Math.random() * 5) : 0,
        });
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 text-glow">Live Monitoring</h2>
          <p className="text-slate-400">Real-time network traffic analysis and active session monitor</p>
        </div>
        <div className="flex items-center gap-3 bg-dark-800 border border-cyan-500/30 px-4 py-2 rounded-lg">
          <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse shadow-[0_0_10px_#00ff66]"></div>
          <span className="text-sm font-mono text-slate-300">LIVE FEED</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        {[
          { label: 'Current Inbound', value: '452 Mbps', icon: Activity, color: 'text-cyan-500' },
          { label: 'Current Outbound', value: '184 Mbps', icon: Wifi, color: 'text-purple-500' },
          { label: 'Active Sessions', value: '1,024', icon: Activity, color: 'text-blue-500' },
          { label: 'Threats Blocked', value: '12', icon: ShieldAlert, color: 'text-neon-red' },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-4 flex items-center justify-between"
          >
            <div>
              <p className="text-slate-400 text-xs font-mono mb-1">{stat.label}</p>
              <h4 className={`text-2xl font-bold ${stat.color} text-glow`}>{stat.value}</h4>
            </div>
            <stat.icon className={`w-8 h-8 ${stat.color} opacity-50`} />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="xl:col-span-2 glass-panel p-6 h-[400px]"
        >
          <h3 className="text-lg font-bold text-slate-200 mb-4 font-mono">Network Activity Timeline</h3>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorInbound" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#00f0ff" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorOutbound" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9d00ff" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#9d00ff" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="time" hide />
              <YAxis stroke="#475569" fontSize={12} tickFormatter={(val) => `${val} Pkt`} />
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#12121a', borderColor: '#2e303a', borderRadius: '8px' }}
                itemStyle={{ color: '#e2e8f0' }}
              />
              <Area type="monotone" dataKey="inbound" stroke="#00f0ff" fillOpacity={1} fill="url(#colorInbound)" />
              <Area type="monotone" dataKey="outbound" stroke="#9d00ff" fillOpacity={1} fill="url(#colorOutbound)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-panel p-6 flex flex-col"
        >
          <h3 className="text-lg font-bold text-slate-200 mb-4 font-mono">Threat Pulse</h3>
          <div className="flex-1 flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-2 border-cyan-500/20 rounded-full animate-[ping_3s_ease-out_infinite]"></div>
              <div className="absolute w-48 h-48 border border-purple-500/10 rounded-full animate-[ping_4s_ease-out_infinite]"></div>
              <div className="absolute w-64 h-64 border border-blue-500/5 rounded-full animate-[ping_5s_ease-out_infinite]"></div>
            </div>
            
            <div className="z-10 bg-dark-900 border-2 border-cyan-500 rounded-full w-20 h-20 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.3)]">
              <Activity className="w-10 h-10 text-cyan-500" />
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-slate-400 text-sm">Real-time Anomaly Detection</p>
            <p className="text-neon-green font-mono font-bold mt-1 text-glow">STATUS: NOMINAL</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LiveMonitoring;
