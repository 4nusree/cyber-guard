import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';
import AdminStatsCard from '../components/AdminStatsCard';
import AdminTable from '../components/AdminTable';
import '../styles/admin.css';

const Admin = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const userRole = "admin"; // Simulated role check

  if (userRole !== "admin") {
    return <div className="access-denied">Access Restricted</div>;
  }

  const stats = [
    { label: "Total Users", value: "12,409", icon: "groups", chartData: [4, 6, 8, 5, 10, 7, 12] },
    { label: "Active Modules", value: "342", icon: "terminal", chartData: [8, 5, 10, 12, 4, 7, 3] },
    { label: "Tactical Assets", value: "1,895", icon: "play_circle", chartData: [5, 7, 4, 8, 6, 10, 12] },
    { label: "Daily Syncs", value: "882", icon: "sync", chartData: [12, 10, 8, 6, 9, 11, 4] }
  ];

  const users = [
    { id: 'OP-7721', name: 'Alex Rivera', role: 'Infiltrator', status: 'Active', level: 'LV 12' },
    { id: 'OP-4402', name: 'Sarah Chen', role: 'SecOps', status: 'Banned', level: 'LV 8' },
    { id: 'OP-9118', name: 'Marcus Vane', role: 'Architect', status: 'Active', level: 'LV 24' },
    { id: 'OP-2234', name: 'Elena Frost', role: 'Infiltrator', status: 'Active', level: 'LV 15' },
    { id: 'OP-5561', name: 'John Doe', role: 'Rookie', status: 'Banned', level: 'LV 2' },
  ];

  const handleApprove = (id) => {
    if (id === 'OP-7721') {
      window.location.href = "/profile";
    } else {
      console.log(`Approved user: ${id}`);
    }
  };
  const handleBan = (id) => console.log(`Banned user: ${id}`);

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <>
            <div className="admin-dashboard">
              {stats.map((stat, index) => (
                <AdminStatsCard key={index} {...stat} />
              ))}
            </div>
            <div className="admin-section">
              <AdminTable 
                users={users} 
                onApprove={handleApprove} 
                onBan={handleBan} 
              />
            </div>
          </>
        );
      case "users":
        return (
          <div className="admin-section">
            <h2 className="section-title">User Management</h2>
            <AdminTable 
              users={users} 
              onApprove={handleApprove} 
              onBan={handleBan} 
            />
          </div>
        );
      case "reports":
        return (
          <div className="admin-section">
            <h2 className="section-title">Incidents & Reports</h2>
            <div className="section-container">
              <p style={{ opacity: 0.7 }}>No active incident reports in the current queue.</p>
            </div>
          </div>
        );
      case "courses":
        return (
          <div className="admin-section">
            <h2 className="section-title">Course Management</h2>
            <div className="section-container">
              <p style={{ opacity: 0.7 }}>Module tactical assets are currently synchronized.</p>
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="admin-section">
            <h2 className="section-title">System Configuration</h2>
            <div className="section-container">
              <p style={{ opacity: 0.7 }}>Core systems operating at peak efficiency.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="admin-container">
      <div className="scanline"></div>
      <AdminSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="admin-main">
        <AdminHeader />
        <div className="admin-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Admin;
