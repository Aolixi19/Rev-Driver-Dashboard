// Compliance.jsx - Tab Content (Table Only)
import React from 'react';
import { MoreVertical, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

// --- Compliance Table Data ---
const complianceData = [
  {
    driver: 'John Smith',
    license: { status: 'Valid' },
    insurance: { status: 'Valid' },
    backgroundCheck: { status: 'Valid' },
    safetyTraining: { status: 'Completed' },
  },
  {
    driver: 'Sarah Johnson',
    license: { status: 'Expiring Soon' },
    insurance: { status: 'Valid' },
    backgroundCheck: { status: 'Valid' },
    safetyTraining: { status: 'Completed' },
  },
  {
    driver: 'Mike Wilson',
    license: { status: 'Valid' },
    insurance: { status: 'Valid' },
    backgroundCheck: { status: 'Valid' },
    safetyTraining: { status: 'Completed' },
  },
  {
    driver: 'Emily Brown',
    license: { status: 'Valid' },
    insurance: { status: 'Expired' },
    backgroundCheck: { status: 'Valid' },
    safetyTraining: { status: 'Pending' },
  },
  {
    driver: 'David Lee',
    license: { status: 'Valid' },
    insurance: { status: 'Valid' },
    backgroundCheck: { status: 'Pending' },
    safetyTraining: { status: 'Completed' },
  },
];

// --- Helper Components ---
const ComplianceCell = ({ status }) => {
  let icon, textClasses;
  switch (status) {
    case 'Valid':
    case 'Completed':
      icon = <CheckCircle className="w-4 h-4 text-green-500 fill-green-900/20 mr-2" />;
      textClasses = 'text-green-400 font-medium';
      break;
    case 'Expiring Soon':
    case 'Pending':
      icon = <AlertCircle className="w-4 h-4 text-yellow-500 fill-yellow-900/20 mr-2" />;
      textClasses = 'text-yellow-400 font-medium';
      break;
    case 'Expired':
    case 'Incomplete':
      icon = <XCircle className="w-4 h-4 text-red-500 fill-red-900/20 mr-2" />;
      textClasses = 'text-red-400 font-medium';
      break;
    default:
      icon = <AlertCircle className="w-4 h-4 text-gray-500 mr-2" />;
      textClasses = 'text-gray-400';
  }
  return (
    <div className="flex items-center">
      {icon}
      <span className={textClasses}>{status}</span>
    </div>
  );
};

const ComplianceRow = ({ data }) => (
  <div className="flex items-center text-sm border-t border-gray-800 py-3.5 px-4 hover:bg-gray-800/50 transition-colors">
    <div className="w-[15%] min-w-[150px] text-white font-medium">{data.driver}</div>
    <div className="w-[17%] min-w-[150px]"><ComplianceCell status={data.license.status} /></div>
    <div className="w-[17%] min-w-[150px]"><ComplianceCell status={data.insurance.status} /></div>
    <div className="w-[17%] min-w-[150px]"><ComplianceCell status={data.backgroundCheck.status} /></div>
    <div className="w-[24%] min-w-[200px]"><ComplianceCell status={data.safetyTraining.status} /></div>
    <div className="w-[10%] min-w-[50px] flex justify-end">
      <button className="text-gray-500 hover:text-white p-1 rounded-full hover:bg-gray-800 transition-colors">
        <MoreVertical className="w-5 h-5" />
      </button>
    </div>
  </div>
);

// --- Main Component ---
const Compliance = () => (
  <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
    {/* Table Header */}
    <div className="flex text-xs font-semibold uppercase text-gray-400 tracking-wider bg-gray-800 py-3 px-4 sticky top-0 border-b border-gray-700">
      <div className="w-[15%] min-w-[150px]">Driver</div>
      <div className="w-[17%] min-w-[150px]">License</div>
      <div className="w-[17%] min-w-[150px]">Insurance</div>
      <div className="w-[17%] min-w-[150px]">Background Check</div>
      <div className="w-[24%] min-w-[200px]">Safety Training</div>
      <div className="w-[10%] min-w-[50px] text-right">Actions</div>
    </div>

    {/* Table Body */}
    <div>
      {complianceData.map((data, index) => (
        <ComplianceRow key={index} data={data} />
      ))}
    </div>
  </div>
);

export default Compliance;
