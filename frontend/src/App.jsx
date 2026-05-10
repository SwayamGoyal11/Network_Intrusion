import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Dashboard from './pages/Dashboard';
import IntrusionDetection from './pages/IntrusionDetection';
import LiveMonitoring from './pages/LiveMonitoring';
import Analytics from './pages/Analytics';
import Performance from './pages/Performance';
import Logs from './pages/Logs';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-dark-900 cyber-grid">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden relative z-10">
          <TopNav />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-transparent p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/detection" element={<IntrusionDetection />} />
              <Route path="/monitoring" element={<LiveMonitoring />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/logs" element={<Logs />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
