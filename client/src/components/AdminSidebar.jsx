import React from 'react';

const AdminSidebar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="admin-sidebar">
      <div className="sidebar-logo cursor-pointer" onClick={() => window.location.href = "/"}>
        <span className="material-symbols-outlined icon">security</span>
        <div className="logo-text">
          <div style={{ fontWeight: 'bold', letterSpacing: '2px' }}>COMMAND</div>
          <div style={{ fontSize: '0.6rem', opacity: 0.6 }}>CENTER V2.4.0</div>
        </div>
      </div>
      <nav className="sidebar-nav">
        <div 
          className={`nav-item ${activeSection === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveSection("dashboard")}
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span>OVERVIEW</span>
        </div>
        <div className="nav-item back-to-site" onClick={() => window.location.href = "/"}>
          <span className="material-symbols-outlined">arrow_back</span>
          <span>BACK TO SITE</span>
        </div>
        <div 
          className={`nav-item ${activeSection === 'users' ? 'active' : ''}`}
          onClick={() => setActiveSection("users")}
        >
          <span className="material-symbols-outlined">groups</span>
          <span>OPERATIVES</span>
        </div>
        <div 
          className={`nav-item ${activeSection === 'courses' ? 'active' : ''}`}
          onClick={() => setActiveSection("courses")}
        >
          <span className="material-symbols-outlined">terminal</span>
          <span>MODULES</span>
        </div>
        <div 
          className={`nav-item ${activeSection === 'reports' ? 'active' : ''}`}
          onClick={() => setActiveSection("reports")}
        >
          <span className="material-symbols-outlined">report</span>
          <span>INCIDENTS</span>
        </div>
        <div 
          className={`nav-item ${activeSection === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveSection("settings")}
        >
          <span className="material-symbols-outlined">settings</span>
          <span>CONFIG</span>
        </div>
      </nav>
    </div>
  );
};

export default AdminSidebar;

