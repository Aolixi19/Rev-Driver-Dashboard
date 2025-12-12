// PartnerD.jsx - Updated Component Code
import React from 'react';
import {
  Search,
  ChevronDown,
  MoreVertical,
  SlidersHorizontal,
  Download,
  Star,
  Building2,
} from 'lucide-react';
import Sidebar from '../types/Sidebar.jsx';

// --- 1. Data Structure ---
const partners = [
  {
    id: 'TS-001',
    company: 'Swift Transport LLC',
    joined: '2023-06-15',
    contactName: 'Michael Chen',
    contactEmail: 'michael@swift-transport.com',
    drivers: 45,
    vehicles: 38,
    rating: 4.7,
    revenue: '$126,400 revenue',
    status: 'Partner',
  },
  {
    id: 'MR-005',
    company: 'Metro Rides Inc',
    joined: '2023-03-20',
    contactName: 'Jennifer Lopez',
    contactEmail: 'jlopez@metrorides.com',
    drivers: 67,
    vehicles: 52,
    rating: 4.9,
    revenue: '$189,230 revenue',
    status: 'Partner',
  },
  {
    id: 'CC-012',
    company: 'City Cabs Co',
    joined: '2024-03-10',
    contactName: 'Robert Taylor',
    contactEmail: 'rtaylor@citycabs.com',
    drivers: 23,
    vehicles: 20,
    rating: 'N/A',
    revenue: '$0 revenue',
    status: 'Pending',
  },
  {
    id: 'ED-008',
    company: 'Express Drivers',
    joined: '2023-09-05',
    contactName: 'Lisa Wang',
    contactEmail: 'lwang@expressdriv.com',
    drivers: 34,
    vehicles: 29,
    rating: 4.6,
    revenue: '$98,650 revenue',
    status: 'Partner',
  },
  {
    id: 'PFS-002',
    company: 'Premium Fleet Services',
    joined: '2023-11-20',
    contactName: 'David Anderson',
    contactEmail: 'danderson@premiumfleet.com',
    drivers: 12,
    vehicles: 10,
    rating: 4.1,
    revenue: '$45,320 revenue',
    status: 'Suspended',
  },
];

// --- Helper function ---
const getStatusClasses = (status) => {
  switch (status) {
    case 'Partner': return 'text-indigo-300 bg-purple-900/50';
    case 'Pending': return 'text-yellow-400 bg-yellow-900/50';
    case 'Suspended': return 'text-red-400 bg-red-900/50';
    default: return 'text-gray-400 bg-gray-800';
  }
};

// --- Partner Row Component ---
const PartnerRow = ({ partner }) => {
  const statusClasses = getStatusClasses(partner.status);

  return (
    <div className="flex items-center text-lg border-t border-gray-800 py-5 px-6 hover:bg-gray-800/50 transition-colors">
      {/* Company Column */}
      <div className="w-[20%] min-w-[200px] flex items-center space-x-3">
        <Building2 className="w-6 h-6 text-blue-500" />
        <div>
          <p className="text-white font-medium text-lg">{partner.company}</p>
          <p className="text-gray-400 text-sm">Since {partner.joined}</p>
        </div>
      </div>

      {/* Contact Column */}
      <div className="w-[20%] min-w-[200px] text-gray-300 text-lg">
        <p className="font-medium">{partner.contactName}</p>
        <p className="text-gray-500 text-sm">{partner.contactEmail}</p>
      </div>

      {/* Fleet Size Column */}
      <div className="w-[15%] min-w-[150px] text-gray-300 text-lg">
        <p>{partner.drivers} drivers</p>
        <p className="text-gray-500 text-sm">{partner.vehicles} vehicles</p>
      </div>

      {/* Performance Column */}
      <div className="w-[20%] min-w-[180px] text-gray-300 text-lg flex items-center">
        {partner.rating !== 'N/A' && (
          <Star className="w-5 h-5 text-yellow-500 mr-2 fill-yellow-500" />
        )}
        <p className="font-medium text-white">{partner.rating}</p>
        <p className="text-gray-500 text-sm ml-4">{partner.revenue}</p>
      </div>

      {/* Status Column */}
      <div className="w-[15%] min-w-[100px]">
        <span className={`px-4 py-2 rounded-full text-sm font-medium ${statusClasses}`}>
          {partner.status}
        </span>
      </div>

      {/* Actions Column */}
      <div className="w-[10%] min-w-[50px] flex justify-end">
        <button className="text-gray-500 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
          <MoreVertical className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

// --- Main PartnerD Component ---
const PartnerD = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      
      {/* Fixed Sidebar */}
      <div className="fixed h-full">
        <Sidebar />
      </div>

      <main className="flex-1 ml-64 p-10 overflow-auto">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold">Partner Driver Management</h1>
          <p className="text-lg text-gray-400 mt-2">Manage corporate partnerships and fleet operators</p>
        </header>

        {/* Search and Filters */}
        <div className="flex justify-between items-center mb-8 p-5 bg-gray-800 rounded-lg">
          <div className="relative w-full max-w-lg mr-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />
            <input
              type="text"
              placeholder="Search by company, contact, or email..."
              className="w-full pl-14 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex space-x-4">
            <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg text-lg transition-colors">
              All Statuses
              <ChevronDown className="w-5 h-5 ml-2" />
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

        {/* Partners Table */}
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Table Header */}
          <div className="flex text-lg font-semibold uppercase text-gray-400 tracking-wider bg-gray-800 py-4 px-6 sticky top-0 border-b border-gray-700">
            <div className="w-[20%] min-w-[200px]">Company</div>
            <div className="w-[20%] min-w-[200px]">Contact</div>
            <div className="w-[15%] min-w-[150px]">Fleet Size</div>
            <div className="w-[20%] min-w-[180px]">Performance</div>
            <div className="w-[15%] min-w-[100px]">Status</div>
            <div className="w-[10%] min-w-[50px] text-right">Actions</div>
          </div>

          {/* Table Body */}
          <div>
            {partners.map((partner) => (
              <PartnerRow key={partner.id} partner={partner} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PartnerD;
