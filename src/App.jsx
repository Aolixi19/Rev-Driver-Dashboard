// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RevDriveDashboard from './components/RevDriveDashboard.jsx';
import DriverManagement from './components/DriverManagement.jsx';
import SubscriptionManagement from './components/SubscriptionManagement.jsx';
import VehicleManagement from "./components/VehicleManagement.jsx";
import TripMonitoring from './components/TripMonitoring.jsx';
import Safety from './components/Safety.jsx';       
import Compliance from './components/Compliance.jsx'; 
import PartnerD from './components/PartnerD.jsx';
import Reports from './components/reports.jsx';
import Analytics from './components/Analytics.jsx';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RevDriveDashboard />} />
        <Route path="/drivers" element={<DriverManagement />} />
        <Route path="/vehicles" element={<VehicleManagement />} />
        <Route path="/subscriptions" element={<SubscriptionManagement />} />
        <Route path="/trips" element={<TripMonitoring />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/partners" element={<PartnerD />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/compliance" element={<Compliance />} />
      </Routes>
    </Router>
  );
};

export default App;
