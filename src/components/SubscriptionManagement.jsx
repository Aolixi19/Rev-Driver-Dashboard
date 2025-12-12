// SubscriptionManagement.jsx - Updated
import React from 'react';
import Sidebar from '../types/Sidebar.jsx';
import {
  Search,
  ChevronDown,
  MoreVertical,
  SlidersHorizontal,
  Download,
  Users,
  DollarSign,
  TrendingUp,
  CreditCard,
} from 'lucide-react';

// --- Data ---
const subscriptionData = [
  { driver: 'John Smith', email: 'john.smith@example.com', plan: 'Premium', amount: '$299/mo', nextBilling: '2024-04-15', paymentMethod: 'Visa -- 4242', status: 'Active' },
  { driver: 'Sarah Johnson', email: 'sarah.j@example.com', plan: 'Basic', amount: '$149/mo', nextBilling: '2024-04-20 (Manual renewal)', paymentMethod: 'MasterCard -- 8888', status: 'Pending' },
  { driver: 'Mike Wilson', email: 'mike.w@example.com', plan: 'Premium', amount: '$399/mo', nextBilling: '2024-04-30 (Auto-renew enabled)', paymentMethod: 'Visa -- 1234', status: 'Active' },
  { driver: 'Emily Brown', email: 'emily.b@example.com', plan: 'Standard', amount: '$199/mo', nextBilling: 'N/A (Manual renewal)', paymentMethod: 'Visa -- 5678', status: 'Inactive' },
  { driver: 'David Lee', email: 'david.l@example.com', plan: 'Premium', amount: '$299/mo', nextBilling: '2024-04-20 (Auto-renew enabled)', paymentMethod: 'Amex -- 9999', status: 'Active' },
];

const metrics = [
  { title: 'Active Subscriptions', value: '1,247', change: '+8% from last month', icon: Users, color: 'text-blue-400' },
  { title: 'Monthly Revenue', value: '$248,930', change: '+12% from last month', icon: DollarSign, color: 'text-green-400' },
  { title: 'Avg. Plan Value', value: '$199', change: '+5% from last month', icon: TrendingUp, color: 'text-indigo-400' },
  { title: 'Renewal Rate', value: '94%', change: '+2% from last month', icon: CreditCard, color: 'text-sky-400' },
];

const getStatusClasses = (status) => {
  switch (status) {
    case 'Active': return 'text-green-400 bg-green-900/50';
    case 'Pending': return 'text-yellow-400 bg-yellow-900/50';
    case 'Inactive': return 'text-red-400 bg-red-900/50';
    default: return 'text-gray-400 bg-gray-800';
  }
};

// --- Metric Card Component ---
const MetricCard = ({ metric }) => {
  const Icon = metric.icon;
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-between h-full">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-gray-400 text-base font-medium">{metric.title}</h3>
        <Icon className={`w-6 h-6 ${metric.color}`} />
      </div>
      <div className="mt-auto">
        <p className="text-3xl font-bold text-white">{metric.value}</p>
        <p className="text-sm text-green-400 mt-1">{metric.change}</p>
      </div>
    </div>
  );
};

// --- Subscription Row Component ---
const SubscriptionRow = ({ sub }) => {
  const statusClasses = getStatusClasses(sub.status);
  return (
    <div className="flex items-center text-lg border-t border-gray-800 py-5 px-6 hover:bg-gray-800/50 transition-colors">
      <div className="w-[20%] min-w-[200px]">
        <p className="text-white font-medium">{sub.driver}</p>
        <p className="text-gray-400 text-sm">{sub.email}</p>
      </div>
      <div className="w-[15%] min-w-[120px] text-gray-300 font-medium">{sub.plan}</div>
      <div className="w-[10%] min-w-[100px] text-white font-medium">{sub.amount}</div>
      <div className="w-[20%] min-w-[180px] text-gray-300">{sub.nextBilling}</div>
      <div className="w-[15%] min-w-[150px] text-gray-300">{sub.paymentMethod}</div>
      <div className="w-[10%] min-w-[80px]">
        <span className={`px-4 py-2 rounded-full text-sm font-medium ${statusClasses}`}>
          {sub.status}
        </span>
      </div>
      <div className="w-[10%] min-w-[50px] flex justify-end">
        <button className="text-gray-500 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
          <MoreVertical className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

// --- Main Component ---
const SubscriptionManagement = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Fixed Sidebar */}
      <div className="fixed h-full">
        <Sidebar />
      </div>

      <main className="flex-1 ml-64 p-10 overflow-auto">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold">Subscription Management</h1>
          <p className="text-lg text-gray-400 mt-2">
            Track and manage driver subscription plans and billing
          </p>
        </header>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} />
          ))}
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 p-5 bg-gray-800 rounded-lg gap-4">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />
            <input
              type="text"
              placeholder="Search by driver name or email..."
              className="w-full pl-16 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg text-lg transition-colors">
              All Statuses <ChevronDown className="w-5 h-5 ml-2" />
            </button>
            <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg text-lg transition-colors">
              All Plans <ChevronDown className="w-5 h-5 ml-2" />
            </button>
            <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg text-lg transition-colors">
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              More Filters
            </button>
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-lg transition-colors">
              <Download className="w-5 h-5 mr-2" />
              Export
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Table Header */}
          <div className="flex text-lg font-semibold uppercase text-gray-400 tracking-wider bg-gray-800 py-4 px-6 sticky top-0 border-b border-gray-700">
            <div className="w-[20%] min-w-[200px]">Driver</div>
            <div className="w-[15%] min-w-[120px]">Plan</div>
            <div className="w-[10%] min-w-[100px]">Amount</div>
            <div className="w-[20%] min-w-[180px]">Next Billing</div>
            <div className="w-[15%] min-w-[150px]">Payment Method</div>
            <div className="w-[10%] min-w-[80px]">Status</div>
            <div className="w-[10%] min-w-[50px] text-right">Actions</div>
          </div>
          <div>
            {subscriptionData.map((sub, index) => (
              <SubscriptionRow key={index} sub={sub} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubscriptionManagement;
