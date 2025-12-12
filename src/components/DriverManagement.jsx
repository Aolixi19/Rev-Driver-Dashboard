// DriverManagement.jsx

import React from 'react';
import Sidebar from '../types/Sidebar.jsx';
import {
  Search,
  ChevronDown,
  Star,
  MoreVertical,
  SlidersHorizontal,
  Download,
} from 'lucide-react';

// --- Data Structure ---
const drivers = [
  {
    id: 'DL-12345',
    name: 'John Smith',
    initial: 'J',
    contact: 'john.smith@example.com',
    phone: '+1 234-567-8900',
    vehicle: 'Toyota Camry',
    joined: '2024-01-15',
    rating: 4.8,
    trips: 342,
    earnings: '$12,450',
    status: 'Approved',
  },
  {
    id: 'DL-67890',
    name: 'Sarah Johnson',
    initial: 'S',
    contact: 'sarah.j@example.com',
    phone: '+1 234-567-8901',
    vehicle: 'Honda Accord',
    joined: '2024-03-20',
    rating: 'N/A',
    trips: 0,
    earnings: '$0',
    status: 'Pending',
  },
  {
    id: 'DL-12323',
    name: 'Mike Wilson',
    initial: 'M',
    contact: 'mike.w@example.com',
    phone: '+1 234-567-8902',
    vehicle: 'Tesla Model 3',
    joined: '2023-11-10',
    rating: 4.9,
    trips: 567,
    earnings: '$21,340',
    status: 'Approved',
  },
  {
    id: 'DL-44556',
    name: 'Emily Brown',
    initial: 'E',
    contact: 'emily.b@example.com',
    phone: '+1 234-567-8903',
    vehicle: 'Nissan Altima',
    joined: '2024-09-05',
    rating: 4.2,
    trips: 189,
    earnings: '$7,890',
    status: 'Suspended',
  },
  {
    id: 'DL-78899',
    name: 'David Lee',
    initial: 'D',
    contact: 'david.l@example.com',
    phone: '+1 234-567-8904',
    vehicle: 'Hyundai Sonata',
    joined: '2023-12-20',
    rating: 4.7,
    trips: 423,
    earnings: '$15,670',
    status: 'Approved',
  },
];

// --- Helper Functions ---
const getStatusClasses = (status) => {
  switch (status) {
    case 'Approved':
      return 'text-green-400 bg-green-900/50';
    case 'Pending':
      return 'text-yellow-400 bg-yellow-900/50';
    case 'Suspended':
      return 'text-red-400 bg-red-900/50';
    default:
      return 'text-gray-400 bg-gray-800';
  }
};

// --- Driver Row Component ---
const DriverRow = ({ driver }) => {
  const statusClasses = getStatusClasses(driver.status);

  const initialBg = {
    J: 'bg-blue-600',
    S: 'bg-indigo-600',
    M: 'bg-teal-600',
    E: 'bg-red-600',
    D: 'bg-purple-600',
  }[driver.initial] || 'bg-gray-600';

  return (
    <div className="flex items-center text-lg border-t border-gray-800 py-5 px-6 hover:bg-gray-800/50 transition-colors">
      <div className="w-[20%] min-w-[180px] flex items-center space-x-4">
        <div className={`h-12 w-12 rounded-full ${initialBg} flex items-center justify-center text-white font-semibold text-xl`}>
          {driver.initial}
        </div>
        <div>
          <p className="font-medium text-white text-lg">{driver.name}</p>
          <p className="text-sm text-gray-400">{driver.id}</p>
        </div>
      </div>

      <div className="w-[20%] min-w-[200px] text-gray-300 text-lg">
        <p>{driver.contact}</p>
        <p className="text-sm text-gray-500">{driver.phone}</p>
      </div>

      <div className="w-[15%] min-w-[150px] text-gray-300 text-lg">
        <p>{driver.vehicle}</p>
        <p className="text-sm text-gray-500">Joined {driver.joined}</p>
      </div>

      <div className="w-[20%] min-w-[180px] text-gray-300 flex items-center text-lg">
        {driver.rating !== 'N/A' && (
          <Star className="w-6 h-6 mr-2 text-yellow-500 fill-yellow-500" />
        )}
        <p className="font-medium text-white text-lg">{driver.rating}</p>
        <p className="ml-4 text-sm text-gray-500">
          {driver.trips} trips · {driver.earnings}
        </p>
      </div>

      <div className="w-[15%] min-w-[100px]">
        <span className={`px-4 py-2 rounded-full text-sm font-medium ${statusClasses}`}>
          {driver.status}
        </span>
      </div>

      <div className="w-[10%] min-w-[50px] flex justify-end">
        <button className="p-2 text-gray-500 transition-colors rounded-full hover:text-white hover:bg-gray-800">
          <MoreVertical className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

// --- Main Component ---
const DriverManagement = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Fixed Sidebar */}
      <div className="fixed h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-10 overflow-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold">Driver Management</h1>
          <p className="mt-2 text-lg text-gray-400">
            Manage driver registrations, approvals, and performance
          </p>
        </header>

        {/* Search & Actions */}
        <div className="flex items-center justify-between p-5 mb-8 bg-gray-800 rounded-lg">
          <div className="relative w-full max-w-lg mr-4">
            <Search className="absolute w-6 h-6 text-gray-500 transform -translate-y-1/2 left-4 top-1/2" />
            <input
              type="text"
              placeholder="Search by name, email, or license..."
              className="w-full py-3 pl-14 pr-4 text-white placeholder-gray-500 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
          </div>

          <div className="flex space-x-4">
            <button className="flex items-center px-6 py-3 font-medium text-white transition-colors bg-gray-700 rounded-lg hover:bg-gray-600 text-lg">
              All Statuses
              <ChevronDown className="w-5 h-5 ml-2" />
            </button>

            <button className="flex items-center px-6 py-3 font-medium text-white transition-colors bg-gray-700 rounded-lg hover:bg-gray-600 text-lg">
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              More Filters
            </button>

            <button className="flex items-center px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 text-lg">
              <Download className="w-5 h-5 mr-2" />
              Export
            </button>
          </div>
        </div>

        {/* Driver Table */}
        <div className="overflow-hidden bg-gray-800 shadow-2xl rounded-2xl">
          <div className="sticky top-0 flex px-6 py-4 font-semibold tracking-wider text-gray-400 uppercase bg-gray-800 border-b border-gray-700 text-lg">
            <div className="w-[20%] min-w-[180px]">Driver</div>
            <div className="w-[20%] min-w-[200px]">Contact</div>
            <div className="w-[15%] min-w-[150px]">Vehicle</div>
            <div className="w-[20%] min-w-[180px]">Performance</div>
            <div className="w-[15%] min-w-[100px]">Status</div>
            <div className="w-[10%] min-w-[50px] text-right">Actions</div>
          </div>

          <div>
            {drivers.map((driver) => (
              <DriverRow key={driver.id} driver={driver} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DriverManagement;
