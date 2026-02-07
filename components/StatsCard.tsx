
import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: string;
  color: 'blue' | 'indigo' | 'slate';
  subValue: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, trend, trendUp, icon, color, subValue }) => {
  const colorClasses = {
    blue: 'bg-blue-600 shadow-blue-600/20 text-blue-600',
    indigo: 'bg-indigo-600 shadow-indigo-600/20 text-indigo-600',
    slate: 'bg-slate-800 shadow-slate-800/20 text-slate-800',
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-opacity-10 ${color === 'blue' ? 'bg-blue-600 text-blue-600' : color === 'indigo' ? 'bg-indigo-600 text-indigo-600' : 'bg-slate-800 text-slate-800'}`}>
          <i className={`fa-solid ${icon} text-xl group-hover:scale-110 transition-transform`}></i>
        </div>
        <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${trendUp ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'}`}>
          <i className={`fa-solid ${trendUp ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
          {trend}
        </div>
      </div>
      <div>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">{title}</p>
        <h4 className="text-3xl font-extrabold text-slate-900 mb-2">{value}</h4>
        <p className="text-slate-400 text-xs font-medium flex items-center gap-1.5">
          <i className="fa-solid fa-circle-info text-[10px]"></i>
          {subValue}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
