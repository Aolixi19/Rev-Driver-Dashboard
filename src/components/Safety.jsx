// Safety.jsx
import React from 'react';
import {
  Search,
  ChevronDown,
  SlidersHorizontal,
  Download,
  AlertTriangle,
  Shield,
  CheckCircle,
  MoreVertical,
} from 'lucide-react';
import Sidebar from '../types/Sidebar.jsx';
import Compliance from './Compliance.jsx';

// --- Metrics Data ---
const metrics = [
  { title: 'Total Incidents', value: '127', change: '-8% from last month', icon: AlertTriangle, color: 'text-blue-400', bgColor: 'bg-blue-900/10' },
  { title: 'Active Cases', value: '23', change: 'Requires attention', icon: Shield, color: 'text-yellow-400', bgColor: 'bg-yellow-900/10' },
  { title: 'Resolved Cases', value: '104', change: '+12% resolution rate', icon: CheckCircle, color: 'text-green-400', bgColor: 'bg-green-900/10' },
  { title: 'Compliance Rate', value: '96%', change: '+2% from last month', icon: Shield, color: 'text-sky-400', bgColor: 'bg-sky-900/10' },
];

// --- Incident Data ---
const incidentData = [
  { id: 'INC-2024-001', tripId: 'TRP-2024-156', driver: 'John Smith', type: 'Speeding', severity: 'Low', date: '2024-03-15 09:30', status: 'Completed' },
  { id: 'INC-2024-002', tripId: 'TRP-2024-166', driver: 'Emily Brown', type: 'Hard Braking', severity: 'Medium', date: '2024-03-15 10:15', status: 'Ongoing' },
  { id: 'INC-2024-003', tripId: 'TRP-2024-004', driver: 'Mike Wilson', type: 'Phone Usage', severity: 'High', date: '2024-03-14 14:20', status: 'Pending' },
  { id: 'INC-2024-004', tripId: 'TRP-2024-201', driver: 'Sarah Johnson', type: 'Passenger Complaint', severity: 'Medium', date: '2024-03-14 08:45', status: 'Pending' },
  { id: 'INC-2024-005', tripId: 'TRP-2024-178', driver: 'David Lee', type: 'Route Deviation', severity: 'Low', date: '2024-03-13 16:30', status: 'Completed' },
];

// --- Helper Functions ---
const getStatusClasses = (status) => {
  switch (status) {
    case 'Completed': return 'text-green-400 bg-green-900/50';
    case 'Ongoing': return 'text-yellow-400 bg-yellow-900/50';
    case 'Pending': return 'text-orange-400 bg-orange-900/50';
    default: return 'text-gray-400 bg-gray-800';
  }
};

const getSeverityClasses = (severity) => {
  switch (severity) {
    case 'High': return 'text-red-500 font-bold';
    case 'Medium': return 'text-yellow-500 font-medium';
    case 'Low': return 'text-green-500';
    default: return 'text-gray-400';
  }
};

// --- Metric Card Component ---
const MetricCard = ({ metric }) => {
  const Icon = metric.icon;
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-between h-full">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-gray-400 text-base font-medium">{metric.title}</h3>
        <div className={`p-3 rounded-lg ${metric.bgColor}`}>
          <Icon className={`w-6 h-6 ${metric.color}`} />
        </div>
      </div>
      <div className="mt-auto">
        <p className="text-3xl font-bold text-white">{metric.value}</p>
        <p className={`text-sm mt-1 ${metric.change.includes('+') ? 'text-green-400' : metric.change.includes('-') ? 'text-red-400' : 'text-gray-500'}`}>
          {metric.change}
        </p>
      </div>
    </div>
  );
};

// --- Incident Row Component ---
const IncidentRow = ({ incident }) => {
  const statusClasses = getStatusClasses(incident.status);
  const severityClasses = getSeverityClasses(incident.severity);

  return (
    <div className="flex items-center text-lg border-t border-gray-800 py-5 px-6 hover:bg-gray-800/50 transition-colors">
      <div className="w-[15%] min-w-[150px]">
        <p className="text-white font-medium">{incident.id}</p>
        <p className="text-gray-400 text-sm">{incident.tripId}</p>
      </div>
      <div className="w-[15%] min-w-[150px] text-gray-300 font-medium">{incident.driver}</div>
      <div className="w-[15%] min-w-[150px] text-gray-300">{incident.type}</div>
      <div className="w-[15%] min-w-[100px] text-gray-300"><span className={severityClasses}>{incident.severity}</span></div>
      <div className="w-[15%] min-w-[150px] text-gray-300">{incident.date}</div>
      <div className="w-[15%] min-w-[100px]"><span className={`px-2 py-1 rounded-full text-sm font-medium ${statusClasses}`}>{incident.status}</span></div>
      <div className="w-[10%] min-w-[50px] flex justify-end">
        <button className="text-gray-500 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
          <MoreVertical className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

// --- Main Safety Component ---
const Safety = () => {
  const [activeTab, setActiveTab] = React.useState('Incidents');

  const renderTableContent = () => {
    if (activeTab === 'Incidents') {
      return (
        <>
          <div className="flex text-sm font-semibold uppercase text-gray-400 tracking-wider bg-gray-800 py-3 px-6 sticky top-0 border-b border-gray-700">
            <div className="w-[15%] min-w-[150px]">Incident ID</div>
            <div className="w-[15%] min-w-[150px]">Driver</div>
            <div className="w-[15%] min-w-[150px]">Type</div>
            <div className="w-[15%] min-w-[100px]">Severity</div>
            <div className="w-[15%] min-w-[150px]">Date</div>
            <div className="w-[15%] min-w-[100px]">Status</div>
            <div className="w-[10%] min-w-[50px] text-right">Actions</div>
          </div>
          <div>
            {incidentData.map((incident, index) => <IncidentRow key={index} incident={incident} />)}
          </div>
        </>
      );
    }

    if (activeTab === 'Compliance') {
      return <Compliance />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      <div className="fixed h-full">
        <Sidebar />
      </div>

      <main className="flex-1 ml-64 p-10 text-white overflow-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Safety & Compliance</h1>
          <p className="text-gray-400 mt-1">Monitor incidents, track compliance, and ensure driver safety</p>
        </header>

        {/* Metrics Grid */}
        {activeTab === 'Incidents' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => <MetricCard key={index} metric={metric} />)}
          </div>
        )}

        {/* Tabs */}
        <div className="flex border-b border-gray-700 mb-6">
          <button
            className={`py-3 px-5 text-lg font-medium transition-colors ${activeTab === 'Incidents' ? 'text-white border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-300'}`}
            onClick={() => setActiveTab('Incidents')}
          >
            Incidents
          </button>
          <button
            className={`py-3 px-5 text-lg font-medium transition-colors ${activeTab === 'Compliance' ? 'text-white border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-300'}`}
            onClick={() => setActiveTab('Compliance')}
          >
            Compliance
          </button>
        </div>

        {/* Search & Filters */}
        {activeTab === 'Incidents' && (
          <div className="flex flex-wrap justify-between items-center mb-6 p-3 bg-gray-800 rounded-lg gap-4">
            <div className="relative w-full max-w-lg">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />
              <input
                type="text"
                placeholder="Search by incident ID, driver, or type..."
                className="w-full pl-16 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                All Statuses <ChevronDown className="w-4 h-4 ml-2" />
              </button>
              <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                <SlidersHorizontal className="w-4 h-4 mr-2" /> More Filters
              </button>
              <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                <Download className="w-4 h-4 mr-2" /> Export
              </button>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
          {renderTableContent()}
        </div>
      </main>
    </div>
  );
};

export default Safety;
