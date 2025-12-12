// src/types/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  UserCheck,
  Truck,
  Users,
  DollarSign,
  MapPin,
  Shield,
  FileText,
  BarChart,
  Car
} from 'lucide-react';

// Sidebar Item Component
const SidebarItem = ({ icon, label, to, isActive }) => (
  <Link
    to={to}
    className={`flex items-center p-3 rounded-lg transition-colors ${
      isActive ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-700'
    }`}
  >
    {React.createElement(icon, { className: 'w-5 h-5 mr-3' })}
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

// Sidebar Component
const Sidebar = () => {
  const location = useLocation();

  // Grouped sidebar items for spacing between sections
  const sidebarSections = [
    {
      title: 'Main',
      items: [
        { icon: LayoutDashboard, label: 'Dashboard', to: '/' },
        { icon: UserCheck, label: 'Driver Management', to: '/drivers' },
        { icon: Truck, label: 'Vehicle Management', to: '/vehicles' },
        { icon: Users, label: 'Partner Drivers', to: '/partners' },
      ],
    },
    {
      title: 'Operations',
      items: [
        { icon: DollarSign, label: 'Subscriptions', to: '/subscriptions' },
        { icon: MapPin, label: 'Trip Monitoring', to: '/trips' },
        { icon: Shield, label: 'Safety & Compliance', to: '/safety' },
        { icon: FileText, label: 'Reports', to: '/reports' },
      ],
    },
    {
      title: 'Analytics',
      items: [
        { icon: BarChart, label: 'Analytics', to: '/analytics' },
      ],
    },
  ];

  return (
    <aside className="flex flex-col justify-between w-64 bg-gray-800 h-screen">
      <div>
        {/* Logo */}
        <div className="flex items-center p-6 text-xl font-bold text-blue-500">
          <Car className="w-6 h-6 mr-2" />
          RevDrive
        </div>

        {/* Sidebar Sections */}
        <nav className="p-4 space-y-8">
          {sidebarSections.map((section, sIndex) => (
            <div key={sIndex}>
              <h3 className="text-gray-400 uppercase text-xs mb-2">{section.title}</h3>
              <div className="space-y-2">
                {section.items.map((item, index) => (
                  <SidebarItem
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    to={item.to}
                    isActive={location.pathname === item.to}
                  />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Admin User Section */}
      <div className="p-4 border-t border-gray-700 mt-4">
        <div className="flex items-center p-3 bg-gray-700 rounded-lg">
          <div className="flex items-center justify-center w-10 h-10 mr-3 text-lg font-semibold text-white bg-blue-600 rounded-full">
            A
          </div>
          <div>
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-gray-400">Super Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
