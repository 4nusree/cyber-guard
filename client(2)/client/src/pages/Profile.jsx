import React from "react";
import { Link, useLocation } from "wouter";
import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import { 
  User, 
  LayoutDashboard, 
  GraduationCap, 
  Users, 
  LogOut, 
  Edit3, 
  Camera, 
  ShieldCheck, 
  Mail, 
  Phone, 
  Terminal, 
  Zap, 
  Brain, 
  Shield, 
  Lock,
  Settings,
  Bell,
  EyeOff
} from "lucide-react";
import "../styles/profile.css";

const Profile = () => {
  const [location] = useLocation();
  const isAdminView = location.startsWith('/admin') || document.referrer.includes('/admin');
  const [activeSection, setActiveSection] = React.useState("profile");

  const handleLogout = () => {
    window.location.href = "/";
  };

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return (
          <div className="section-container">
            <section className="profile-banner">
              <div className="banner-grid-overlay"></div>
              <div className="banner-content">
                <div className="avatar-wrapper">
                  <div className="avatar-frame">
                    <div className="avatar-placeholder"></div>
                  </div>
                  <div className="camera-badge">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="operative-header">
                  <h1 className="username">ALEX 'CYPHER' VANE</h1>
                  <p className="operative-id">OPERATIVE ID: #V-88022-QC</p>
                  
                  <div className="stats-row">
                    <div className="stat-pill">
                      <span className="pill-label">RANK</span>
                      <span className="pill-value">Elite Breacher</span>
                    </div>
                    <div className="stat-pill">
                      <span className="pill-label">EXP POINTS</span>
                      <span className="pill-value">12,450 XP</span>
                    </div>
                    <div className="stat-pill">
                      <span className="pill-label">MISSIONS</span>
                      <span className="pill-value">24 Complete</span>
                    </div>
                  </div>
                </div>

                <div className="banner-icon-bg">
                  <ShieldCheck className="w-16 h-16 opacity-20" />
                </div>
              </div>
            </section>

            <section className="profile-row">
              <div className="card comms">
                <span className="card-label">DIRECT COMMS</span>
                <div className="card-body">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  <span>cypher.v@academy.cyber</span>
                </div>
              </div>
              <div className="card secure">
                <span className="card-label">SECURE LINE</span>
                <div className="card-body">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  <span>+1 (555) 012-9921</span>
                </div>
              </div>
              <div className="card bio">
                <span className="card-label">OPERATIVE BIO</span>
                <div className="card-body bio-text">
                  [LOG_START] Alex is a specialized network analyst with over 5 years of experience in offensive security. Expert in packet sniffing, zero-day research, and social engineering protocols. Known for a 100% success rate in 'Dark Room' simulations. [LOG_END]
                </div>
              </div>
            </section>

            <section className="profile-lower">
              <div className="card mission-logs">
                <div className="card-header-flex">
                  <h2 className="card-title flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-primary" />
                    ACTIVE MISSION LOGS
                  </h2>
                  <span className="record-count">4 Records Found</span>
                </div>
                <div className="log-list">
                  <div className="log-item">
                    <div className="log-meta">
                      <span className="log-name">Advanced Penetration Testing (Lvl 4)</span>
                      <span className="log-percent">82%</span>
                    </div>
                    <div className="progress-container">
                      <div className="progress-fill" style={{ width: '82%' }}></div>
                    </div>
                    <div className="log-sub">
                      <span>CURRENT NODE: POST-EXPLOITATION TACTICS</span>
                      <span>LAST ACTIVE: 2H AGO</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right-column">
                <div className="card skills">
                  <span className="card-label">COMBAT SPECIALIZATIONS</span>
                  <div className="skills-grid">
                    <span className="skill-tag">LINUX KERNEL</span>
                    <span className="skill-tag">WEB SECURITY</span>
                    <span className="skill-tag">PYTHON</span>
                    <span className="skill-tag">METASPLOIT</span>
                  </div>
                </div>
                
                <div className="card medals">
                  <span className="card-label">EARNED MEDALS</span>
                  <div className="medals-row">
                    <div className="medal">
                      <div className="hexagon"><Zap className="w-5 h-5 text-yellow-400" /></div>
                      <span className="medal-name">FIRST BREACH</span>
                    </div>
                    <div className="medal">
                      <div className="hexagon"><Brain className="w-5 h-5 text-blue-400" /></div>
                      <span className="medal-name">MASTER MIND</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      case "account":
        return (
          <div className="section-container">
            <section className="card full-width">
              <h2 className="card-title">
                <Settings className="w-5 h-5 text-primary" />
                ACCOUNT SETTINGS
              </h2>
              <div className="settings-grid">
                <div className="settings-item">
                  <label>Change Password</label>
                  <button className="edit-profile-btn">UPDATE SECURITY KEY</button>
                </div>
                <div className="settings-item">
                  <label>Two-Factor Auth</label>
                  <span className="status-badge active">ENABLED</span>
                </div>
              </div>
            </section>
          </div>
        );
      case "notifications":
        return (
          <div className="section-container">
            <section className="card full-width">
              <h2 className="card-title">
                <Bell className="w-5 h-5 text-primary" />
                NOTIFICATION PROTOCOLS
              </h2>
              <div className="settings-grid">
                <div className="settings-item">
                  <label>Email Alerts</label>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="settings-item">
                  <label>System Pings</label>
                  <input type="checkbox" defaultChecked />
                </div>
              </div>
            </section>
          </div>
        );
      case "privacy":
        return (
          <div className="section-container">
            <section className="card full-width">
              <h2 className="card-title">
                <EyeOff className="w-5 h-5 text-primary" />
                PRIVACY CONTROLS
              </h2>
              <div className="settings-grid">
                <div className="settings-item">
                  <label>Ghost Mode</label>
                  <input type="checkbox" />
                </div>
                <div className="settings-item">
                  <label>Data Encryption</label>
                  <span className="status-badge active">AES-256</span>
                </div>
              </div>
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  const content = (
    <div className="profile-layout">
      <aside className="sidebar">
        <div className="logo-container">
          <div className="logo-box">CA</div>
        </div>
        <nav className="sidebar-nav">
          <button 
            onClick={() => setActiveSection("profile")} 
            className={`nav-btn ${activeSection === "profile" ? "active" : ""}`}
            title="Profile"
            data-testid="button-nav-profile"
          >
            <User className="w-5 h-5" />
            {activeSection === "profile" && <div className="active-indicator"></div>}
          </button>
          <button 
            onClick={() => setActiveSection("account")} 
            className={`nav-btn ${activeSection === "account" ? "active" : ""}`}
            title="Account"
            data-testid="button-nav-account"
          >
            <Settings className="w-5 h-5" />
            {activeSection === "account" && <div className="active-indicator"></div>}
          </button>
          <button 
            onClick={() => setActiveSection("notifications")} 
            className={`nav-btn ${activeSection === "notifications" ? "active" : ""}`}
            title="Notifications"
            data-testid="button-nav-notifications"
          >
            <Bell className="w-5 h-5" />
            {activeSection === "notifications" && <div className="active-indicator"></div>}
          </button>
          <button 
            onClick={() => setActiveSection("privacy")} 
            className={`nav-btn ${activeSection === "privacy" ? "active" : ""}`}
            title="Privacy"
            data-testid="button-nav-privacy"
          >
            <EyeOff className="w-5 h-5" />
            {activeSection === "privacy" && <div className="active-indicator"></div>}
          </button>
        </nav>
        <button onClick={handleLogout} className="logout-button" data-testid="button-logout">
          <LogOut className="w-5 h-5" />
        </button>
      </aside>

      <div className="profile-content">
        {renderSection()}

        <div className="card system-info">
          <div className="info-row">
            <span className="info-label">SYSTEM UPTIME</span>
            <span className="info-value">124:32:01</span>
          </div>
          <div className="info-row">
            <span className="info-label">LAST LOGIN LOCATION</span>
            <span className="info-value">STOCKHOLM, SE</span>
          </div>
          <div className="info-row">
            <span className="info-label">CLEARANCE LEVEL</span>
            <span className="info-value highlight">ALPHA-01</span>
          </div>
        </div>
      </div>
    </div>
  );

  if (isAdminView) {
    return (
      <div className="admin-container">
        <div className="scanline"></div>
        <AdminSidebar />
        <div className="admin-main">
          <AdminHeader />
          <div className="admin-section" style={{ padding: '0 2rem' }}>
            {content}
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default Profile;


