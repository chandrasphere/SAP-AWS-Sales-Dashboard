
import React from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'Dashboard', icon: 'fa-gauge-high' },
    { id: 'Sales Reports', icon: 'fa-chart-line' },
    { id: 'Inventory', icon: 'fa-boxes-stacked' },
    { id: 'Performance', icon: 'fa-bolt' },
    { id: 'System Settings', icon: 'fa-gears' },
  ];

  return (
    <aside className="w-72 bg-[#001e3c] text-white flex flex-col flex-shrink-0 shadow-2xl z-20">
      {/* Brand Logo */}
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
          <i className="fa-solid fa-cube text-xl text-white"></i>
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight">NIET <span className="text-blue-400 font-light">ENTERPRISE</span></h1>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">Side-by-Side Analytics</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 group ${
              activeTab === item.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                : 'text-slate-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <i className={`fa-solid ${item.icon} text-lg w-6 transition-transform group-hover:scale-110`}></i>
            <span className="font-medium">{item.id}</span>
          </button>
        ))}
      </nav>

      {/* Footer / Status */}
      <div className="p-6 border-t border-slate-700/50">
        <div className="bg-slate-800/50 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400 uppercase font-bold tracking-tighter">RDS Connection</span>
            <span className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span>
          </div>
          <p className="text-[11px] text-slate-300 font-mono">us-east-1.amazon-rds.com</p>
          <div className="mt-3 w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
            <div className="bg-blue-400 w-3/4 h-full"></div>
          </div>
          <p className="text-[10px] text-slate-500 mt-2 font-medium italic">Optimized with ABAP SQL Trace</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
