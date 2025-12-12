// src/components/RevDriveDashboard.jsx
import React from 'react';
import Sidebar from '../types/Sidebar.jsx';
import StatCard from '../types/StatCard.jsx';
import { Users, Car, DollarSign, Star, AlertTriangle } from 'lucide-react';

// --- Driver Application Component ---
const DriverApplication = ({ name, email, time, status }) => {
  const statusColor = status === 'Approved' ? 'bg-green-600' : 'bg-yellow-600';

  return (
    <div className="flex items-center justify-between p-5 transition-colors border-b border-gray-700 last:border-b-0 hover:bg-gray-700/50">
      <div className="flex items-center">
        <div className="flex items-center justify-center w-16 h-16 mr-6 text-2xl font-semibold text-white bg-blue-600 rounded-full">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-lg font-medium text-white">{name}</p>
          <p className="text-base text-gray-400">{email}</p>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <p className="mb-2 text-sm text-gray-400">{time}</p>
        <span
          className={`px-5 py-2 text-sm font-semibold rounded-full ${statusColor} text-white`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

// --- Alert Item Component ---
const AlertItem = ({ message, time }) => (
  <div className="flex items-start p-6 transition-colors border-b border-gray-700 last:border-b-0 hover:bg-gray-700/50">
    <AlertTriangle className="w-6 h-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
    <div>
      <p className="text-lg text-white">{message}</p>
      <p className="mt-2 text-sm text-gray-400">{time}</p>
    </div>
  </div>
);

// --- Main Dashboard Component ---
const RevDriveDashboard = () => {
  const stats = [
    { title: 'Total Drivers', value: '2,847', change: '+12%', icon: Users, color: 'text-blue-400' },
    { title: 'Active Vehicles', value: '1,923', change: '+8%', icon: Car, color: 'text-blue-400' },
    { title: 'Revenue', value: '$84,392', change: '+23%', icon: DollarSign, color: 'text-green-400' },
    { title: 'Avg. Rating', value: '4.8', change: '+0.2', icon: Star, color: 'text-blue-400' },
  ];

  const recentDrivers = [
    { name: 'John Smith', email: 'john.smith@example.com', time: '2 hours ago', status: 'Approved' },
    { name: 'Sarah Johnson', email: 'sarah.j@example.com', time: '5 hours ago', status: 'Pending' },
    { name: 'Mike Wilson', email: 'mike.w@example.com', time: '1 day ago', status: 'Approved' },
    { name: 'Emily Brown', email: 'emily.b@example.com', time: '2 days ago', status: 'Pending' },
  ];

  const alerts = [
    { message: '3 drivers pending verification', time: '10 min ago' },
    { message: '2 vehicles require inspection renewal', time: '1 hour ago' },
    { message: '5 subscriptions expiring this week', time: '3 hours ago' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <div className="fixed h-full">
        <Sidebar />
      </div>

      <main className="flex-1 ml-64 p-10 overflow-auto">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-white">Dashboard Overview</h1>
          <p className="mt-2 text-lg text-gray-400">
            Welcome back! Here's what's happening with RevDrive today.
          </p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              label={stat.title}
              value={stat.value}
              icon={stat.icon}
              iconSize={8} // optionally increase icon size inside StatCard
            />
          ))}
        </div>

        {/* Recent Applications & Alerts */}
        <div className="flex gap-8">
          {/* Recent Drivers */}
          <div className="flex-1 p-8 bg-gray-800 shadow-lg rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white">Recent Driver Applications</h2>
              <button className="text-lg font-medium text-blue-400 hover:text-blue-300">
                View All
              </button>
            </div>

            <div className="divide-y divide-gray-700">
              {recentDrivers.map((driver, index) => (
                <DriverApplication key={index} {...driver} />
              ))}
            </div>
          </div>

          {/* Alerts */}
          <div className="w-1/3 p-8 bg-gray-800 shadow-lg rounded-2xl">
            <h2 className="mb-6 text-2xl font-semibold text-white">Alerts</h2>

            <div className="divide-y divide-gray-700">
              {alerts.map((alert, index) => (
                <AlertItem key={index} {...alert} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RevDriveDashboard;
