// TripMonitoring.jsx - Updated
import React from 'react';
import {
  Search,
  ChevronDown,
  MoreVertical,
  SlidersHorizontal,
  Download,
  Car,
  DollarSign,
  TrendingUp,
} from 'lucide-react';
import Sidebar from '../types/Sidebar.jsx';

// --- Metrics Data ---
const metrics = [
  { title: 'Total Trips Today', value: '1,847', change: '+16% from yesterday', icon: Car, color: 'text-blue-400' },
  { title: 'Active Trips', value: '234', change: 'Real-time', icon: Car, color: 'text-indigo-400' },
  { title: "Today's Revenue", value: '$45,200', change: '+18% from yesterday', icon: DollarSign, color: 'text-green-400' },
  { title: 'Avg. Trip Value', value: '$24.50', change: '+8% from yesterday', icon: TrendingUp, color: 'text-sky-400' },
];

// --- Trip Data ---
const tripData = [
  { id: 'TRP-2024-001', time: '2024-03-15 08:30', driver: 'John Smith', passenger: 'Alice Cooper', passengerRating: 5.0, route: '123 Main St, Downtown -> 456 Oak Ave, Midtown', details: '8.5 mi · 22 min', fare: '$32.80', status: 'Completed' },
  { id: 'TRP-2024-002', time: '2024-03-15 08:45', driver: 'Mike Wilson', passenger: 'Bob Johnson', passengerRating: 3.2, route: '789 Elm St, Westside -> 221 Pine Rd, Eastside', details: '12.3 mi · Est. 35 min', fare: '$32.00', status: 'Ongoing' },
  { id: 'TRP-2024-003', time: '2024-03-15 09:40', driver: 'Sarah Johnson', passenger: 'Carol White', passengerRating: 4.0, route: '555 Market St, Central -> 880 Broadway, North', details: '5.2 mi · 18 min', fare: '$18.75', status: 'Completed' },
  { id: 'TRP-2024-004', time: '2024-03-15 10:40', driver: 'David Lee', passenger: 'Daniel Brown', passengerRating: 5.0, route: '988 Park Ave, South -> 11 Lake St, Harbor', details: '15.7 mi · 42 min', fare: '$48.75', status: 'Completed' },
  { id: 'TRP-2024-005', time: '2024-03-15 11:30', driver: 'Emily Brown', passenger: 'Emma Davis', passengerRating: 3.8, route: '223 River Rd, Valley -> 444 Hill St, Heights', details: '9.8 mi · Est. 28 min', fare: '$31.85', status: 'Ongoing' },
];

// --- Helper Functions ---
const getStatusClasses = (status) => {
  switch (status) {
    case 'Completed': return 'text-green-400 bg-green-900/50';
    case 'Ongoing': return 'text-yellow-400 bg-yellow-900/50';
    case 'Cancelled': return 'text-red-400 bg-red-900/50';
    default: return 'text-gray-400 bg-gray-800';
  }
};

// --- Metric Card ---
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
        <p className={`text-sm mt-1 ${metric.change.includes('+') ? 'text-green-400' : 'text-gray-500'}`}>{metric.change}</p>
      </div>
    </div>
  );
};

// --- Trip Row ---
const TripRow = ({ trip }) => {
  const statusClasses = getStatusClasses(trip.status);
  return (
    <div className="flex items-center text-lg border-t border-gray-800 py-5 px-6 hover:bg-gray-800/50 transition-colors">
      <div className="w-[10%] min-w-[120px]">
        <p className="text-white font-medium">{trip.id}</p>
        <p className="text-gray-400 text-sm">{trip.time}</p>
      </div>
      <div className="w-[10%] min-w-[100px] text-gray-300 font-medium">{trip.driver}</div>
      <div className="w-[15%] min-w-[150px] text-gray-300">
        <p className="text-white font-medium">{trip.passenger}</p>
        <p className="text-gray-500 text-sm">⭐ {trip.passengerRating}</p>
      </div>
      <div className="w-[25%] min-w-[250px] text-gray-300">
        <p>{trip.route.split(' -> ')[0]}</p>
        <p className="text-gray-500 text-sm">{trip.route.split(' -> ')[1]}</p>
      </div>
      <div className="w-[15%] min-w-[150px] text-gray-300">
        <p className="text-white font-medium">{trip.details}</p>
        <p className="text-gray-500 text-sm">{trip.fare}</p>
      </div>
      <div className="w-[15%] min-w-[100px]">
        <span className={`px-4 py-2 rounded-full text-sm font-medium ${statusClasses}`}>{trip.status}</span>
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
const TripMonitoring = () => {
  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Fixed Sidebar */}
      <div className="fixed h-full">
        <Sidebar />
      </div>

      <main className="flex-1 ml-64 p-10 text-white overflow-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold">Trip Monitoring</h1>
          <p className="text-lg text-gray-400 mt-2">Real-time tracking and management of all trips</p>
        </header>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => <MetricCard key={index} metric={metric} />)}
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 p-5 bg-gray-800 rounded-lg gap-4">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />
            <input
              type="text"
              placeholder="Search by trip ID, driver, or passenger..."
              className="w-full pl-16 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg text-lg transition-colors">
              All Statuses <ChevronDown className="w-5 h-5 ml-2" />
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

        {/* Trips Table */}
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Table Header */}
          <div className="flex text-lg font-semibold uppercase text-gray-400 tracking-wider bg-gray-800 py-4 px-6 sticky top-0 border-b border-gray-700">
            <div className="w-[10%] min-w-[120px]">Trip ID</div>
            <div className="w-[10%] min-w-[100px]">Driver</div>
            <div className="w-[15%] min-w-[150px]">Passenger</div>
            <div className="w-[25%] min-w-[250px]">Route</div>
            <div className="w-[15%] min-w-[150px]">Details</div>
            <div className="w-[15%] min-w-[100px]">Status</div>
            <div className="w-[10%] min-w-[50px] text-right">Actions</div>
          </div>
          <div>
            {tripData.map((trip, index) => <TripRow key={index} trip={trip} />)}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TripMonitoring;
