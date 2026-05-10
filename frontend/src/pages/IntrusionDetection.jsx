import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Play, ShieldAlert, CheckCircle, AlertTriangle, FileText, Server, Shield, Activity } from 'lucide-react';

const IntrusionDetection = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    setAnalyzing(true);
    setResult(null);
    // Simulate API call to ML backend
    setTimeout(() => {
      setAnalyzing(false);
      // Mock result
      const isAttack = Math.random() > 0.5;
      setResult({
        status: isAttack ? 'Intrusion Detected' : 'Normal Traffic',
        type: isAttack ? 'DDoS / Syn Flood' : 'N/A',
        confidence: isAttack ? 98.5 : 99.2,
        severity: isAttack ? 'Critical' : 'Safe',
        color: isAttack ? 'text-neon-red' : 'text-neon-green',
        bg: isAttack ? 'bg-neon-red/10 border-neon-red/30' : 'bg-neon-green/10 border-neon-green/30'
      });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 text-glow">Intrusion Detection</h2>
          <p className="text-slate-400">Run manual or batch predictions using trained ML models</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Form */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-200 flex items-center gap-2">
                <Server className="w-5 h-5 text-cyan-500" />
                Network Traffic Features
              </h3>
              <button className="text-sm text-cyan-500 hover:text-cyan-400 transition-colors">Load Example Data</button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {[
                'duration', 'protocol_type', 'service', 'flag', 'src_bytes', 
                'dst_bytes', 'land', 'wrong_fragment', 'urgent', 'hot', 
                'num_failed_logins', 'logged_in'
              ].map((feature, idx) => (
                <div key={idx} className="space-y-1">
                  <label className="text-xs text-slate-400 font-mono">{feature}</label>
                  <input 
                    type="text" 
                    placeholder="0.0"
                    className="w-full bg-dark-900/50 border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-cyan-500/50 focus:outline-none transition-colors"
                  />
                </div>
              ))}
            </div>
            
            <div className="flex justify-end gap-4 border-t border-white/5 pt-4">
              <button 
                onClick={handleAnalyze}
                disabled={analyzing}
                className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-lg font-medium transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {analyzing ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Play className="w-5 h-5 fill-current" />
                )}
                {analyzing ? 'Analyzing...' : 'Analyze Traffic'}
              </button>
            </div>
          </motion.div>

          {/* Batch Upload */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-6 border-dashed border-2 hover:border-cyan-500/50 transition-colors cursor-pointer group"
          >
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-16 h-16 rounded-full bg-dark-900/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                <Upload className="w-8 h-8 text-cyan-500" />
              </div>
              <h4 className="text-lg font-medium text-white mb-2">Batch Analysis via CSV/PCAP</h4>
              <p className="text-sm text-slate-400 mb-4">Upload a dataset to run predictions on multiple records</p>
              <div className="flex items-center gap-2 text-xs font-mono bg-dark-900 px-3 py-1 rounded text-slate-500">
                <FileText className="w-3 h-3" /> max file size 50MB
              </div>
            </div>
          </motion.div>
        </div>

        {/* Results Panel */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`glass-panel p-6 h-full flex flex-col ${result ? result.bg : ''} transition-colors duration-500`}
          >
            <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5" />
              Prediction Result
            </h3>

            {!result && !analyzing && (
              <div className="flex-1 flex flex-col items-center justify-center text-slate-500">
                <Shield className="w-16 h-16 mb-4 opacity-20" />
                <p>Awaiting analysis...</p>
              </div>
            )}

            {analyzing && (
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="relative w-24 h-24 mb-6">
                  <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Activity className="w-8 h-8 text-cyan-500 animate-pulse" />
                  </div>
                </div>
                <p className="text-cyan-400 font-mono animate-pulse text-glow">PROCESSING DATA...</p>
              </div>
            )}

            {result && !analyzing && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-1 flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className={`w-24 h-24 rounded-full flex items-center justify-center border-4 ${result.bg} shadow-[0_0_30px_rgba(0,0,0,0.5)]`}>
                  {result.severity === 'Critical' ? (
                    <AlertTriangle className={`w-12 h-12 ${result.color} drop-shadow-[0_0_8px_currentColor]`} />
                  ) : (
                    <CheckCircle className={`w-12 h-12 ${result.color} drop-shadow-[0_0_8px_currentColor]`} />
                  )}
                </div>
                
                <div>
                  <h2 className={`text-2xl font-bold mb-2 ${result.color} drop-shadow-[0_0_8px_currentColor]`}>
                    {result.status}
                  </h2>
                  {result.severity === 'Critical' && (
                    <div className="text-xl text-white font-mono bg-dark-900/50 px-4 py-2 rounded-lg border border-neon-red/30 mb-4 inline-block">
                      Type: {result.type}
                    </div>
                  )}
                </div>

                <div className="w-full space-y-2 mt-auto pt-6 border-t border-white/10 text-left">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Model Confidence</span>
                    <span className={`font-mono font-bold ${result.color}`}>{result.confidence}%</span>
                  </div>
                  <div className="w-full bg-dark-900 rounded-full h-2 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${result.confidence}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full ${result.severity === 'Critical' ? 'bg-neon-red shadow-[0_0_10px_#ff0055]' : 'bg-neon-green shadow-[0_0_10px_#00ff66]'}`}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IntrusionDetection;
