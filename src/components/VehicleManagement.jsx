// VehicleManagement.jsx - Updated and Corrected

import React from 'react';
import Sidebar from '../types/Sidebar.jsx';
import {
  Search,
  ChevronDown,
  MoreVertical,
  SlidersHorizontal,
  Download,
} from 'lucide-react';

// --- 1. Data Structure ---
const vehicles = [
  {
    id: 'ABC-1234',
    makeModel: '2022 Toyota Camry',
    driver: 'John Smith',
    mileage: '45,230 mi',
    serviceDate: '2024-02-10',
    inspectionDate: '2024-08-15',
    insuranceDate: '2025-01-20',
    status: 'Active',
  },
  {
    id: 'XYZ-5678',
    makeModel: '2023 Honda Accord',
    driver: 'Sarah Johnson',
    mileage: '12,450 mi',
    serviceDate: '2024-01-15',
    inspectionDate: '2024-06-20',
    insuranceDate: '2024-12-15',
    status: 'Pending',
  },
  {
    id: 'EV-9012',
    makeModel: '2023 Tesla Model 3',
    driver: 'Mike Wilson',
    mileage: '28,900 mi',
    serviceDate: '2024-02-28',
    inspectionDate: '2024-09-10',
    insuranceDate: '2025-03-05',
    status: 'Active',
  },
  {
    id: 'DEF-3456',
    makeModel: '2021 Nissan Altima',
    driver: 'Emily Brown',
    mileage: '57,850 mi',
    serviceDate: '2023-11-05',
    inspectionDate: '2023-12-01',
    insuranceDate: '2024-11-20',
    status: 'Inactive',
  },
  {
    id: 'GH-7890',
    makeModel: '2022 Hyundai Sonata',
    driver: 'David Lee',
    mileage: '38,120 mi',
    serviceDate: '2024-01-20',
    inspectionDate: '2024-07-25',
    insuranceDate: '2025-02-10',
    status: 'Active',
  },
];

// Helper function
const getStatusClasses = (status) => {
  switch (status) {
    case 'Active':
      return 'text-green-400 bg-green-900/50';
    case 'Pending':
      return 'text-yellow-400 bg-yellow-900/50';
    case 'Inactive':
      return 'text-red-400 bg-red-900/50';
    default:
      return 'text-gray-400 bg-gray-800';
  }
};

// Vehicle Row Component
const VehicleRow = ({ vehicle }) => {
  const statusClasses = getStatusClasses(vehicle.status);

  return (
    <div className="flex items-center text-lg border-t border-gray-800 py-5 px-6 hover:bg-gray-800/50 transition-colors">
      
      <div className="w-[18%]">
        <p className="text-white font-medium text-lg">{vehicle.makeModel}</p>
        <p className="text-gray-400 text-sm">{vehicle.id}</p>
      </div>

      <div className="w-[15%] text-gray-300 font-medium text-lg">
        {vehicle.driver}
      </div>

      <div className="w-[18%] text-gray-300 text-lg">
        <p>{vehicle.mileage}</p>
        <p className="text-gray-500 text-sm">Service: {vehicle.serviceDate}</p>
      </div>

      <div className="w-[15%] text-gray-300 text-lg">
        {vehicle.inspectionDate}
      </div>

      <div className="w-[15%] text-gray-300 text-lg">
        {vehicle.insuranceDate}
      </div>

      <div className="w-[10%]">
        <span className={`px-4 py-2 rounded-full text-sm font-medium ${statusClasses}`}>
          {vehicle.status}
        </span>
      </div>

      <div className="w-[9%] flex justify-end">
        <button className="text-gray-500 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
          <MoreVertical className="w-6 h-6" />
        </button>
      </div>

    </div>
  );
};

// --- 2. Main Component ---
const VehicleManagement = () => {
  return (
    <div className="flex bg-gray-900 min-h-screen text-white">

      {/* Fixed Sidebar */}
      <div className="fixed h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-10 overflow-auto">

        <header className="mb-10">
          <h1 className="text-4xl font-bold">Vehicle Management</h1>
          <p className="text-lg text-gray-400 mt-2">
            Track and manage all registered vehicles and inspections
          </p>
        </header>

        {/* Search & Filters */}
        <div className="flex justify-between items-center mb-8 p-5 bg-gray-800 rounded-lg">

          <div className="relative w-full max-w-lg mr-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />
            <input
              type="text"
              placeholder="Search by make, model, plate, or driver..."
              className="w-full pl-14 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-lg"
            />
          </div>

          <div className="flex space-x-4">
            <button className="flex items-center bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg text-lg">
              All Statuses
              <ChevronDown className="w-5 h-5 ml-2" />
            </button>

            <button className="flex items-center bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg text-lg">
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              More Filters
            </button>

            <button className="flex items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg">
              <Download className="w-5 h-5 mr-2" />
              Export
            </button>
          </div>

        </div>

        {/* Table */}
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="flex text-lg font-semibold uppercase text-gray-400 tracking-wider bg-gray-800 py-4 px-6 border-b border-gray-700">
            <div className="w-[18%]">Vehicle</div>
            <div className="w-[15%]">Driver</div>
            <div className="w-[18%]">Details</div>
            <div className="w-[15%]">Inspection</div>
            <div className="w-[15%]">Insurance</div>
            <div className="w-[10%]">Status</div>
            <div className="w-[9%] text-right">Actions</div>
          </div>

          {/* Rows */}
          {vehicles.map((v) => (
            <VehicleRow key={v.id} vehicle={v} />
          ))}

        </div>
      </div>
    </div>
  );
};

export default VehicleManagement;
