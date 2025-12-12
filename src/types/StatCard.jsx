import React from "react";

const StatCard = ({ icon: Icon, label, value }) => {
  return (
    <div className="flex items-center p-6 bg-gray-800 border border-gray-700 shadow-md rounded-xl">

      {Icon && (
        <div className="flex items-center justify-center w-12 h-12 mr-4 bg-gray-700 rounded-full">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
      )}

      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-2xl font-bold text-white mt-1">{value}</p>
      </div>

    </div>
  );
};

export default StatCard;
