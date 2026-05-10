import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts';
import { BarChart2, PieChart as PieChartIcon, TrendingUp } from 'lucide-react';

const attackTypeData = [
  { name: 'DDoS', value: 4000 },
  { name: 'Port Scan', value: 3000 },
  { name: 'Brute Force', value: 2000 },
  { name: 'Web Attack', value: 1500 },
  { name: 'Botnet', value: 800 },
  { name: 'Infiltration', value: 200 },
];

const protocolData = [
  { name: 'TCP', value: 65, color: '#00f0ff' },
  { name: 'UDP', value: 25, color: '#9d00ff' },
  { name: 'ICMP', value: 10, color: '#ff0055' },
];

const threatTrendData = [
  { day: 'Mon', high: 24, medium: 55, low: 120 },
  { day: 'Tue', high: 18, medium: 48, low: 150 },
  { day: 'Wed', high: 45, medium: 80, low: 200 },
  { day: 'Thu', high: 30, medium: 65, low: 180 },
  { day: 'Fri', high: 60, medium: 95, low: 250 },
  { day: 'Sat', high: 15, medium: 40, low: 100 },
  { day: 'Sun', high: 10, medium: 35, low: 90 },
];

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 text-glow">Attack Analytics</h2>
        <p className="text-slate-400">Deep dive into threat distribution, trends, and network protocols</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-6 h-[400px]"
        >
          <div className="flex items-center gap-2 mb-6">
            <BarChart2 className="w-5 h-5 text-cyan-500" />
            <h3 className="text-lg font-bold text-slate-200">Attack Type Distribution</h3>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={attackTypeData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={true} vertical={false} />
              <XAxis type="number" stroke="#475569" fontSize={12} />
              <YAxis dataKey="name" type="category" stroke="#475569" fontSize={12} width={80} />
              <RechartsTooltip 
                cursor={{ fill: '#1e293b', opacity: 0.4 }}
                contentStyle={{ backgroundColor: '#12121a', borderColor: '#2e303a', borderRadius: '8px' }}
              />
              <Bar dataKey="value" fill="#00f0ff" radius={[0, 4, 4, 0]}>
                {attackTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#00f0ff' : '#00c3ff'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-panel p-6 h-[400px]"
        >
          <div className="flex items-center gap-2 mb-6">
            <PieChartIcon className="w-5 h-5 text-purple-500" />
            <h3 className="text-lg font-bold text-slate-200">Traffic Protocol Analysis</h3>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={protocolData}
                cx="50%"
                cy="45%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {protocolData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <RechartsTooltip 
                contentStyle={{ backgroundColor: '#12121a', borderColor: '#2e303a', borderRadius: '8px' }}
                itemStyle={{ color: '#e2e8f0' }}
              />
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 glass-panel p-6 h-[400px]"
        >
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-neon-red" />
            <h3 className="text-lg font-bold text-slate-200">Threat Trends Over Time</h3>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={threatTrendData} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="day" stroke="#475569" fontSize={12} />
              <YAxis stroke="#475569" fontSize={12} />
              <RechartsTooltip 
                contentStyle={{ backgroundColor: '#12121a', borderColor: '#2e303a', borderRadius: '8px' }}
              />
              <Legend verticalAlign="top" height={36} />
              <Line type="monotone" dataKey="high" name="High Severity" stroke="#ff0055" strokeWidth={3} dot={{ r: 4, fill: '#ff0055' }} activeDot={{ r: 6, strokeWidth: 0 }} />
              <Line type="monotone" dataKey="medium" name="Medium Severity" stroke="#facc15" strokeWidth={2} dot={{ r: 3, fill: '#facc15' }} />
              <Line type="monotone" dataKey="low" name="Low Severity" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3, fill: '#3b82f6' }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;
