
import React from 'react';
import { Transaction, TransactionStatus } from '../types';

const StatusBadge: React.FC<{ status: TransactionStatus }> = ({ status }) => {
  const styles = {
    Completed: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    Pending: 'bg-amber-50 text-amber-700 border-amber-100',
    Processing: 'bg-blue-50 text-blue-700 border-blue-100',
    Cancelled: 'bg-rose-50 text-rose-700 border-rose-100',
  };

  return (
    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${styles[status]}`}>
      {status}
    </span>
  );
};

const SalesTable: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-slate-50/50">
            <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Transaction ID</th>
            <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Customer Entity</th>
            <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Date</th>
            <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Amount</th>
            <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Category</th>
            <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {transactions.map((t) => (
            <tr key={t.id} className="hover:bg-slate-50/80 transition-colors group">
              <td className="px-8 py-5 text-sm font-mono font-semibold text-blue-600">{t.id}</td>
              <td className="px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                    {t.customer.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-sm font-semibold text-slate-900">{t.customer}</span>
                </div>
              </td>
              <td className="px-8 py-5 text-sm text-slate-500 font-medium">{t.date}</td>
              <td className="px-8 py-5 text-sm font-bold text-slate-900">${t.amount.toLocaleString()}</td>
              <td className="px-8 py-5">
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">{t.category}</span>
              </td>
              <td className="px-8 py-5">
                <StatusBadge status={t.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
