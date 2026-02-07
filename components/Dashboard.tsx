
import React from 'react';
import StatsCard from './StatsCard';
import { MonthlySalesChart, CategoryDistributionChart } from './Charts';
import SalesTable from './SalesTable';
import { KpiStats, Transaction, SalesData, CategoryData } from '../types';

const Dashboard: React.FC = () => {
  // Mock Data
  const kpiStats: KpiStats = {
    totalRevenue: 1452900,
    totalOrders: 18450,
    avgPerformance: 94.2,
    lastOptimized: '10m ago'
  };

  const salesTrend: SalesData[] = [
    { month: 'Jan', revenue: 45000, orders: 1200 },
    { month: 'Feb', revenue: 52000, orders: 1450 },
    { month: 'Mar', revenue: 48000, orders: 1300 },
    { month: 'Apr', revenue: 61000, orders: 1800 },
    { month: 'May', revenue: 59000, orders: 1650 },
    { month: 'Jun', revenue: 72000, orders: 2100 },
    { month: 'Jul', revenue: 85000, orders: 2400 },
  ];

  const categories: CategoryData[] = [
    { name: 'Electronics', value: 400 },
    { name: 'Software', value: 300 },
    { name: 'Services', value: 300 },
    { name: 'Consulting', value: 200 },
  ];

  const recentTransactions: Transaction[] = [
    { id: 'INV-1024', customer: 'Global Tech Solutions', date: '2023-10-24', amount: 12450.00, status: 'Completed', category: 'Software' },
    { id: 'INV-1025', customer: 'Acme Corp', date: '2023-10-23', amount: 8900.50, status: 'Pending', category: 'Hardware' },
    { id: 'INV-1026', customer: 'Vertex Systems', date: '2023-10-22', amount: 3500.00, status: 'Processing', category: 'Consulting' },
    { id: 'INV-1027', customer: 'Nexus Industrial', date: '2023-10-21', amount: 45000.00, status: 'Completed', category: 'Hardware' },
    { id: 'INV-1028', customer: 'Stellar Logistics', date: '2023-10-20', amount: 1200.00, status: 'Cancelled', category: 'Service' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Top Section: Title & System Status */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Chandra's Sales Performance Portal</h3>
          <p className="text-slate-500 mt-1">Real-time data synchronization from Amazon RDS instance.</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-center gap-4 max-w-xl shadow-sm">
          <div className="flex items-center justify-center flex-shrink-0">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <p className="text-sm font-bold text-emerald-800">System Status: Active</p>
            <p className="text-[11px] text-emerald-600 font-medium uppercase tracking-tight">
              Secure OData connection established with Amazon RDS instance.
            </p>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard 
          title="Total Net Revenue" 
          value={`$${(kpiStats.totalRevenue / 1000000).toFixed(2)}M`} 
          trend="+12.5%" 
          trendUp={true} 
          icon="fa-money-bill-trend-up"
          color="blue"
          subValue="Consolidated from 14 regions"
        />
        <StatsCard 
          title="Total Orders" 
          value={kpiStats.totalOrders.toLocaleString()} 
          trend="+5.2%" 
          trendUp={true} 
          icon="fa-cart-shopping"
          color="indigo"
          subValue="RAP Entity: Z_I_SalesOrder"
        />
        <StatsCard 
          title="Average Performance" 
          value={`${kpiStats.avgPerformance}%`} 
          trend="-0.4%" 
          trendUp={false} 
          icon="fa-bolt-lightning"
          color="slate"
          subValue={`SQL Trace: Optimized ${kpiStats.lastOptimized}`}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-lg font-bold text-slate-800">Monthly Sales Trend</h4>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Revenue
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium ml-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-300"></span> Orders
              </span>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <MonthlySalesChart data={salesTrend} />
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-lg font-bold text-slate-800">Category-wise Distribution</h4>
            <select className="text-xs font-semibold bg-slate-50 border border-slate-200 rounded-md px-2 py-1 outline-none text-slate-600 cursor-pointer hover:bg-slate-100">
              <option>Last 30 Days</option>
              <option>Q3 2023</option>
              <option>Full Year</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <CategoryDistributionChart data={categories} />
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
          <h4 className="text-lg font-bold text-slate-800">Recent Transactions</h4>
          <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2">
            View All Reports <i className="fa-solid fa-chevron-right text-[10px]"></i>
          </button>
        </div>
        <SalesTable transactions={recentTransactions} />
      </div>
    </div>
  );
};

export default Dashboard;
