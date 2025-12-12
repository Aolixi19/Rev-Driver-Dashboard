// Analytics.jsx
import React from 'react';
import Sidebar from '../types/Sidebar.jsx';
import {
  ChevronDown,
  Star,
  Clock,
  Cpu,
  Smile,
  BarChart,
  DollarSign,
  Users,
} from 'lucide-react';

// --- 1. Data Structures ---

const mainMetrics = [
  { title: 'Total Revenue', value: '$342,430', change: '+15% from last period', icon: DollarSign, color: 'text-green-500' },
  { title: 'Active Drivers', value: '1,847', change: '+8% from last period', icon: Users, color: 'text-green-500' },
  { title: 'Total Trips', value: '34,592', change: '+12% from last period', icon: BarChart, color: 'text-green-500' },
  { title: 'Avg. Rating', value: '4.8', change: '+0.2 from last period', icon: Star, color: 'text-green-500' },
];

const performanceMetrics = [
  { title: 'Avg. Trip Duration', value: '24 min', change: '-1 min from last period', color: 'text-red-500' },
  { title: 'Avg. Trip Distance', value: '8.5 mi', change: '+0.2 mi from last period', color: 'text-green-500' },
  { title: 'Avg. Trip Value', value: '$24.50', change: '+0.25 from last period', color: 'text-green-500' },
  { title: 'Driver Utilization', value: '73%', change: '+5% from last period', color: 'text-green-500' },
  { title: 'Cancellation Rate', value: '3.2%', change: '-1.0% from last period', color: 'text-green-500' },
];

const topDrivers = [
  { name: 'Mike Wilson', revenue: '$31,340' },
  { name: 'John Smith', revenue: '$26,980' },
  { name: 'David Lee', revenue: '$18,600' },
  { name: 'Sarah Johnson', revenue: '$1,320' },
  { name: 'Emily Brown', revenue: '$16,620' },
];

const topCities = [
  { city: 'Downtown', volume: '3,450' },
  { city: 'Midtown', volume: '3,240' },
  { city: 'Westside', volume: '1,950' },
  { city: 'Riverside', volume: '1,420' },
  { city: 'North District', volume: '1,040' },
];

// --- 2. Helper Components ---

const MainMetricCard = ({ metric }) => {
  const MetricIcon = metric.icon;
  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col justify-between h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-400 text-lg font-medium">{metric.title}</h3>
        {MetricIcon && <MetricIcon className={`w-8 h-8 ${metric.color}`} />}
      </div>
      <p className="text-4xl font-bold text-white">{metric.value}</p>
      <p className={`text-lg mt-2 ${metric.change.includes('+') ? 'text-green-400' : 'text-red-400'}`}>{metric.change}</p>
    </div>
  );
};

const PerformanceMetricBox = ({ metric }) => (
  <div className="p-6">
    <h4 className="text-gray-400 text-base">{metric.title}</h4>
    <p className="text-2xl font-bold text-white mt-2">{metric.value}</p>
    <p className={`text-sm mt-1 ${metric.color}`}>{metric.change}</p>
  </div>
);

const ListItem = ({ index, primaryText, secondaryText, value }) => (
  <div className={`flex justify-between items-center py-4 border-b border-gray-700 ${index === 0 ? 'pt-0' : ''}`}>
    <div className="flex items-center space-x-4">
      <span className="text-gray-500 font-bold w-5 text-lg">{index + 1}</span>
      <div>
        <p className="text-white font-medium text-lg">{primaryText}</p>
        <p className="text-gray-400 text-sm">{secondaryText}</p>
      </div>
    </div>
    <span className="text-white font-semibold text-base">{value}</span>
  </div>
);

const SummaryBox = ({ title, value, detail, icon: Icon, color }) => (
  <div className="bg-gray-800 p-6 rounded-2xl flex items-start space-x-6">
    {Icon && <Icon className={`w-8 h-8 ${color}`} />}
    <div>
      <h4 className="text-base font-semibold text-gray-300 mb-1">{title}</h4>
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="text-gray-400 text-sm mt-1">{detail}</p>
    </div>
  </div>
);

// --- 3. Main Analytics Component ---

const Analytics = () => {
  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar stays fixed and non-scrollable */}
      <div className="w-64 fixed h-screen">
        <Sidebar />
      </div>

      <main className="flex-1 ml-64 p-12 text-white overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold">Analytics Dashboard</h1>
            <p className="text-gray-400 mt-2 text-lg">Comprehensive insights into trip and performance metrics</p>
          </div>
          <div className="flex items-center space-x-4 text-base">
            <button className="flex items-center bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors border border-gray-700">
              Last 30 Days
              <ChevronDown className="w-5 h-5 ml-2" />
            </button>
          </div>
        </header>

        {/* Main Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {mainMetrics.map((metric, index) => (
            <MainMetricCard key={index} metric={metric} />
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="bg-gray-800 p-6 rounded-2xl mb-10">
          <h2 className="text-2xl font-bold mb-5">Performance Metrics</h2>
          <div className="grid grid-cols-5 divide-x divide-gray-700">
            {performanceMetrics.map((metric, index) => (
              <PerformanceMetricBox key={index} metric={metric} />
            ))}
          </div>
        </div>

        {/* Top Drivers & Top Cities */}
        <div className="grid grid-cols-2 gap-8 mb-10">
          <div className="bg-gray-800 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-5">Top Performing Drivers</h2>
            <div className="space-y-2">
              {topDrivers.map((driver, index) => (
                <ListItem
                  key={index}
                  index={index}
                  primaryText={driver.name}
                  secondaryText="4.8 avg rating"
                  value={driver.revenue}
                />
              ))}
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-5">Top Cities by Volume</h2>
            <div className="space-y-2">
              {topCities.map((city, index) => (
                <ListItem
                  key={index}
                  index={index}
                  primaryText={city.city}
                  secondaryText="2,400 trips"
                  value={city.volume}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Summary Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <SummaryBox
            title="Peak Hours"
            value="9 PM - 7 PM"
            detail="Highest demand period with 3,500 trips typically."
            icon={Clock}
            color="text-yellow-500"
          />
          <SummaryBox
            title="Fleet Efficiency"
            value="73%"
            detail="Vehicle utilization rate across the fleet."
            icon={Cpu}
            color="text-purple-500"
          />
          <SummaryBox
            title="Customer Satisfaction"
            value="4.8 / 5.0"
            detail="Average rating from 45,600 drivers."
            icon={Smile}
            color="text-sky-500"
          />
        </div>
      </main>
    </div>
  );
};

export default Analytics;
