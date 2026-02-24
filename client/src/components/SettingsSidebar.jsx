import React from 'react';
import { User, Shield, Bell, Palette, Globe, Lock } from "lucide-react";
import '../styles/settings.css';

const SettingsSidebar = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'language', label: 'Language', icon: Globe },
  ];

  return (
    <aside className="settings-sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon">
            <div className="settings-icon">
              <Lock size={18} />
            </div>
          </div>
          <div className="logo-text">
            <h1>OS_IRIS</h1>
            <p>Kernel V4.0.2-Stable</p>
          </div>
        </div>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => onSectionChange(item.id)}
            style={{ background: 'none', border: 'none', width: '100%', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center' }}
          >
            <div className="settings-icon">
              <item.icon size={18} />
            </div>
            <span className="nav-text">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="user-profile-card">
          <div className="profile-avatar">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDULYXqr2HcyBW8gYrw5abAzA4LzhUnCUToaIWq4r0WA9F7rY7UL0VRWVZUOCoi__eH6FklkPPYfxUOyQsojB5vhi5-0QxDFVjhi9O4q9G-XFFRuxmLwYF0p4JDs60ivWnYCzXF1Oe0SI2R-lK5i6owN-3AoW91p7IgJuzAXvaDgmbgUfUG_6y2cMGgtN60Vfv1wDVCH1E_h0vL72PyNTJErIsxFF6rpuTJNWKl-t6E75GbqRvltfdJaPPySyISyY4u1eYUSYMzSM0" 
              alt="Profile" 
            />
          </div>
          <div className="profile-info">
            <p className="profile-name">Admin_Root</p>
            <p className="profile-status">Session: Active</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SettingsSidebar;
