// reports.jsx
import React from 'react';
import Sidebar from '../types/Sidebar.jsx';
import {
  Download,
  ChevronDown,
  FileText, // General Report Icon
  Users,    // Driver Reports Icon
  Car,      // Vehicle Reports Icon
  DollarSign, // Financial Reports Icon
  Map,      // Trip Reports Icon
} from 'lucide-react';

// --- Data Structures ---
const reportCategories = [
  {
    title: 'Driver Reports',
    icon: Users,
    color: 'text-blue-500',
    description: 'Performance, status, and activity reports',
    reports: [
      'Driver Performance Summary',
      'New Driver Applications',
      'Driver Ratings & Reviews',
      'Driver Earnings Report',
    ],
  },
  {
    title: 'Vehicle Reports',
    icon: Car,
    color: 'text-green-500',
    description: 'Fleet condition, usage, and maintenance reports',
    reports: [
      'Vehicle Inspection Status',
      'Maintenance History',
      'Fleet Utilization',
      'Vehicle Age Analysis',
    ],
  },
  {
    title: 'Financial Reports',
    icon: DollarSign,
    color: 'text-yellow-500',
    description: 'Revenue, subscriptions, and payment reports',
    reports: [
      'Revenue Summary',
      'Subscription Analysis',
      'Payment Processing',
      'Cancellation Resolution',
    ],
  },
  {
    title: 'Trip Reports',
    icon: Map,
    color: 'text-red-500',
    description: 'Trip analysis and performance metrics',
    reports: [
      'Trip Volume Analysis',
      'Route Efficiency',
      'Peak Hours Report',
      'Cancellation Analysis',
    ],
  },
];

const recentlyGenerated = [
  {
    name: 'Driver Performance Summary',
    details: 'Generated: 2024-03-20 | Period: 2024-02-01 - 2024-02-29',
    size: '1.2 MB',
  },
  {
    name: 'Revenue Summary',
    details: 'Generated: 2024-03-15 | Period: 2024-03-01 - 2024-03-14',
    size: '800 KB',
  },
  {
    name: 'Trip Volume Analysis',
    details: 'Generated: 2024-03-10 | Period: 2024-03-01 - 2024-03-09',
    size: '3.4 MB',
  },
];

// --- Helper Components ---
const ReportList = ({ reports }) => (
  <div className="space-y-4">
    {reports.map((reportName) => (
      <div key={reportName} className="flex justify-between items-center text-gray-300 text-lg">
        <span>{reportName}</span>
        <button className="flex items-center text-blue-500 hover:text-blue-400 text-sm font-semibold py-2 px-4 border border-blue-500 rounded-lg hover:bg-blue-900/20 transition-colors">
          <FileText className="w-4 h-4 mr-2" />
          Generate
        </button>
      </div>
    ))}
  </div>
);

const ReportCard = ({ category }) => {
  const Icon = category.icon;

  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg h-full">
      <div className="flex items-center mb-6">
        <Icon className={`w-8 h-8 mr-4 ${category.color}`} />
        <div>
          <h3 className="text-2xl font-bold text-white">{category.title}</h3>
          <p className="text-gray-400 text-base">{category.description}</p>
        </div>
      </div>
      <div className="mt-6">
        <ReportList reports={category.reports} />
      </div>
    </div>
  );
};

const GeneratedReportRow = ({ report }) => (
  <div className="flex justify-between items-center py-4 px-6 border-t border-gray-700 hover:bg-gray-700/50 transition-colors">
    <div>
      <p className="text-white font-medium text-lg">{report.name}</p>
      <p className="text-gray-400 text-base">{report.details}</p>
    </div>
    <button className="flex items-center text-green-400 hover:text-green-300 text-sm font-semibold py-2 px-4 border border-green-400 rounded-lg hover:bg-green-900/20 transition-colors">
      <Download className="w-4 h-4 mr-2" />
      Download
    </button>
  </div>
);

// --- Main Reports Component ---
const Reports = () => {
  return (
    <div className="flex min-h-screen bg-gray-900">
      
      <div className="h-screen sticky top-0">
        <Sidebar />
      </div>

      {/* Scrollable Main Content */}
      <main className="flex-1 p-10 text-white overflow-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold">Reports</h1>
          <p className="text-gray-400 mt-3 text-xl">
            Generate and download comprehensive reports
          </p>
        </header>

        {/* Date Range & Generate All */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center space-x-6">
            <span className="text-gray-400 text-lg">Date Range:</span>
            <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-colors text-lg">
              Last 30 Days
              <ChevronDown className="w-5 h-5 ml-3" />
            </button>
          </div>

          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-lg">
            <FileText className="w-5 h-5 mr-2" />
            Report All Reports
          </button>
        </div>

        {/* Report Categories Grid */}
        <div className="grid grid-cols-2 gap-10 mb-12">
          <div className="grid grid-cols-2 gap-10 col-span-2">
            <ReportCard category={reportCategories[0]} />
            <ReportCard category={reportCategories[1]} />
          </div>
          <div className="grid grid-cols-2 gap-10 col-span-2">
            <ReportCard category={reportCategories[2]} />
            <ReportCard category={reportCategories[3]} />
          </div>
        </div>

        {/* Recently Generated Reports */}
        <h2 className="text-3xl font-bold mb-6">Recently Generated Reports</h2>
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          {recentlyGenerated.map((report, index) => (
            <GeneratedReportRow key={index} report={report} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Reports;
