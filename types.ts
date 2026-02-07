
export type TransactionStatus = 'Completed' | 'Pending' | 'Processing' | 'Cancelled';

export interface Transaction {
  id: string;
  customer: string;
  date: string;
  amount: number;
  status: TransactionStatus;
  category: string;
}

export interface SalesData {
  month: string;
  revenue: number;
  orders: number;
}

export interface CategoryData {
  name: string;
  value: number;
}

export interface KpiStats {
  totalRevenue: number;
  totalOrders: number;
  avgPerformance: number;
  lastOptimized: string;
}
