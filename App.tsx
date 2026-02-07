
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar Navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold text-slate-800 uppercase tracking-wider text-sm">
              {activeTab}
            </h2>
            <div className="hidden md:flex items-center bg-slate-100 rounded-lg px-3 py-1.5 border border-slate-200">
              <i className="fa-solid fa-magnifying-glass text-slate-400 mr-2 text-xs"></i>
              <input 
                type="text" 
                placeholder="Search RAP Entity..." 
                className="bg-transparent border-none outline-none text-sm w-64 placeholder:text-slate-400"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative text-slate-500 hover:text-slate-800 transition-colors">
              <i className="fa-regular fa-bell text-lg"></i>
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span>
            </button>
            <div className="flex items-center gap-3 border-l pl-6 border-slate-200">
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-900 leading-tight">Admin User</p>
                <p className="text-xs text-slate-500">SAP RAP Developer</p>
              </div>
              <img 
                src="https://picsum.photos/seed/admin/40/40" 
                alt="Profile" 
                className="w-10 h-10 rounded-full border border-slate-200"
              />
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {activeTab === 'Dashboard' && <Dashboard />}
          {activeTab !== 'Dashboard' && (
            <div className="flex flex-col items-center justify-center h-full text-slate-400">
              <i className="fa-solid fa-screwdriver-wrench text-4xl mb-4"></i>
              <p className="text-lg font-medium">Under Development</p>
              <p className="text-sm">The {activeTab} module is being optimized with SQL Trace.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
