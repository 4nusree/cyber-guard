import React, { useState } from 'react';
import { useLocation } from 'wouter';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';
import { Camera, History, Monitor, Smartphone, Moon, Sun, AlertTriangle, RefreshCw, Share2, Radio } from "lucide-react";
import SettingsSidebar from '../components/SettingsSidebar';
import SettingsSection from '../components/SettingsSection';
import SettingsCard from '../components/SettingsCard';
import ToggleSwitch from '../components/ToggleSwitch';
import '../styles/settings.css';
import { useToast } from '../components/ui/Toast';

const Settings = () => {
  const [location] = useLocation();
  const isAdminView = location.startsWith('/admin') || document.referrer.includes('/admin');
  const { addToast } = useToast();
  const [activeSection, setActiveSection] = useState('account');
  // Account State
  const [username, setUsername] = useState('admin_root_77');
  const [email, setEmail] = useState('root@cyber-net.vault');

  // Security State
  const [twoFA, setTwoFA] = useState(true);

  // Appearance State
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('English (Terminal v1.0)');

  // Notification State
  const [criticalPings, setCriticalPings] = useState(true);
  const [systemSync, setSystemSync] = useState(false);
  const [neuralUpdates, setNeuralUpdates] = useState(true);
  const [commRelay, setCommRelay] = useState(true);

  const handleSave = () => {
    console.log('Saving Configuration:', {
      username,
      email,
      twoFA,
      theme,
      language,
      notifications: {
        criticalPings,
        systemSync,
        neuralUpdates,
        commRelay
      }
    });
    addToast("PROTOCOL_UPDATE: Configuration synced to encrypted cloud.", "info");
  };

  const handleBackup = () => {
    console.log('Initiating Data Backup...');
    addToast("SYSTEM_STATUS: Initializing full redundant backup...", "info");
  };

  const handleRevoke = (device) => {
    console.log(`Revoking access for: ${device}`);
    addToast(`SECURITY_ALERT: Access revoked for ${device}.`, "critical");
  };

  const handleDestroy = () => {
    if (window.confirm('WARNING: PERMANENT DATA WIPE REQUESTED. PROCEED?')) {
      console.log('CORE ACCOUNT DESTRUCTION INITIATED');
      addToast("CRITICAL_VULNERABILITY: CORE ACCOUNT WIPE INITIATED. GOODBYE.", "critical");
    }
  };

  const content = (
    <div className="settings-container" style={{ minHeight: isAdminView ? 'auto' : '100vh', padding: isAdminView ? '0' : 'inherit' }}>
      <SettingsSidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="settings-main">
        <div className="scanline"></div>
        <header className="settings-header">
          
        <div className="header-actions">
            <button className="btn-secondary" onClick={handleBackup}>Backup Data</button>
            <button className="btn-primary" onClick={handleSave}>Commit Changes</button>
          </div>
        </header>

        <div className="settings-content">
          {/* Account Section */}
          {(activeSection === 'account' || activeSection === 'all') && (
            <SettingsSection label="Section_01" title="Identity Profile">
              <div className="grid-2">
                <div className="account-fields">
                  <SettingsCard>
                    <label className="input-label">Username_Token</label>
                    <input 
                      className="input-field" 
                      type="text" 
                      value={username} 
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </SettingsCard>
                  <SettingsCard>
                    <label className="input-label">Email_Address</label>
                    <input 
                      className="input-field" 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </SettingsCard>
                </div>
                <SettingsCard className="avatar-container">
                  <div className="avatar-upload">
                    <div className="settings-icon" style={{ borderRadius: '50%', width: '100%', height: '100%' }}>
                      <Camera size={32} />
                    </div>
                  </div>
                  <button className="modify-avatar-btn">Modify_Avatar</button>
                </SettingsCard>
              </div>
            </SettingsSection>
          )}

          {/* Security Section */}
          {(activeSection === 'security' || activeSection === 'all') && (
            <SettingsSection label="Section_02" title="Cryptographic Shields">
              <SettingsCard>
                <div className="security-option">
                  <div>
                    <h4 className="option-title">Two-Factor Authorization</h4>
                    <p className="option-desc">Multi-layer biometric circuit breaker</p>
                  </div>
                  <div className={twoFA ? 'toggle-active' : ''}>
                    <button 
                      onClick={() => setTwoFA(!twoFA)} 
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    >
                      <ToggleSwitch checked={twoFA} onChange={setTwoFA} />
                    </button>
                  </div>
                </div>
                
                <div className="sessions-section">
                  <h4 className="sub-section-title">
                    <div className="settings-icon" style={{ width: '24px', height: '24px', marginRight: '8px' }}>
                      <History size={14} />
                    </div>
                    Active_Login_Sessions
                  </h4>
                  <div className="table-container">
                    <table className="sessions-table">
                      <thead>
                        <tr>
                          <th>Device_Type</th>
                          <th>IP_Address</th>
                          <th>Location</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="device-cell">
                              <div className="settings-icon" style={{ width: '24px', height: '24px' }}>
                                <Monitor size={14} />
                              </div>
                              Workstation_X9
                            </div>
                          </td>
                          <td>192.168.1.104</td>
                          <td>San Francisco, CA</td>
                          <td><button className="btn-revoke" onClick={() => handleRevoke('Workstation_X9')}>Revoke</button></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="device-cell">
                              <div className="settings-icon" style={{ width: '24px', height: '24px' }}>
                                <Smartphone size={14} />
                              </div>
                              Mobile_Neural_Link
                            </div>
                          </td>
                          <td>10.0.0.42</td>
                          <td>London, UK</td>
                          <td><button className="btn-revoke" onClick={() => handleRevoke('Mobile_Neural_Link')}>Revoke</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </SettingsCard>
            </SettingsSection>
          )}

          {/* Appearance Section */}
          {(activeSection === 'appearance' || activeSection === 'all') && (
            <SettingsSection label="Section_03" title="System_Visuals">
              <div className="grid-2">
                <SettingsCard>
                  <label className="input-label">Interface_Mode</label>
                  <div className="mode-selector">
                    <button 
                      className={`mode-btn ${theme === 'dark' ? 'active' : 'inactive'}`}
                      onClick={() => setTheme('dark')}
                    >
                      <div className="settings-icon" style={{ border: 'none', background: 'transparent', color: 'inherit' }}>
                        <Moon size={20} />
                      </div>
                      <span className="text-label">DEEP_VOID</span>
                    </button>
                    <button 
                      className={`mode-btn ${theme === 'light' ? 'active' : 'inactive'}`}
                      onClick={() => setTheme('light')}
                    >
                      <div className="settings-icon" style={{ border: 'none', background: 'transparent', color: 'inherit' }}>
                        <Sun size={20} />
                      </div>
                      <span className="text-label">LUMEN_CORE</span>
                    </button>
                  </div>
                </SettingsCard>
                <SettingsCard>
                  <label className="input-label">Language_Protocol</label>
                  <select 
                    className="select-field"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option>English (Terminal v1.0)</option>
                    <option>Japanese (Kanji Interface)</option>
                    <option>German (Cyber-Deut)</option>
                    <option>Russian (Cipher-Rus)</option>
                  </select>
                </SettingsCard>
              </div>
            </SettingsSection>
          )}

          {/* Language Section (Alias for Appearance/Language in this UI) */}
          {activeSection === 'language' && (
            <SettingsSection label="Section_05" title="Language_Protocols">
              <SettingsCard>
                <label className="input-label">Primary_Interface_Language</label>
                <select 
                  className="select-field"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option>English (Terminal v1.0)</option>
                  <option>Japanese (Kanji Interface)</option>
                  <option>German (Cyber-Deut)</option>
                  <option>Russian (Cipher-Rus)</option>
                </select>
              </SettingsCard>
            </SettingsSection>
          )}

          {/* Notifications Section */}
          {(activeSection === 'notifications' || activeSection === 'all') && (
            <SettingsSection label="Section_04" title="Alert_Matrix">
              <SettingsCard>
                <div className="alert-grid">
                  <div className="alert-item">
                    <div className="alert-info">
                      <div className="settings-icon">
                        <AlertTriangle size={18} />
                      </div>
                      <div>
                        <h5>Critical_Vuln_Pings</h5>
                        <p>Instant alerts for system breaches</p>
                      </div>
                    </div>
                    <div className={criticalPings ? 'toggle-active' : ''}>
                      <button 
                        onClick={() => setCriticalPings(!criticalPings)} 
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                      >
                        <ToggleSwitch checked={criticalPings} onChange={setCriticalPings} />
                      </button>
                    </div>
                  </div>
                  <div className="alert-item">
                    <div className="alert-info">
                      <div className="settings-icon">
                        <RefreshCw size={18} />
                      </div>
                      <div>
                        <h5>System_Sync_Logs</h5>
                        <p>Daily performance summaries</p>
                      </div>
                    </div>
                    <div className={systemSync ? 'toggle-active' : ''}>
                      <button 
                        onClick={() => setSystemSync(!systemSync)} 
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                      >
                        <ToggleSwitch checked={systemSync} onChange={setSystemSync} />
                      </button>
                    </div>
                  </div>
                  <div className="alert-item">
                    <div className="alert-info">
                      <div className="settings-icon">
                        <Share2 size={18} />
                      </div>
                      <div>
                        <h5>Neural_Network_Updates</h5>
                        <p>Patch notes and core updates</p>
                      </div>
                    </div>
                    <div className={neuralUpdates ? 'toggle-active' : ''}>
                      <button 
                        onClick={() => setNeuralUpdates(!neuralUpdates)} 
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                      >
                        <ToggleSwitch checked={neuralUpdates} onChange={setNeuralUpdates} />
                      </button>
                    </div>
                  </div>
                  <div className="alert-item">
                    <div className="alert-info">
                      <div className="settings-icon">
                        <Radio size={18} />
                      </div>
                      <div>
                        <h5>Comm_Relay_Alerts</h5>
                        <p>Direct messages from high command</p>
                      </div>
                    </div>
                    <div className={commRelay ? 'toggle-active' : ''}>
                      <button 
                        onClick={() => setCommRelay(!commRelay)} 
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                      >
                        <ToggleSwitch checked={commRelay} onChange={setCommRelay} />
                      </button>
                    </div>
                  </div>
                </div>
              </SettingsCard>
            </SettingsSection>
          )}

          {/* Danger Zone */}
          {activeSection === 'account' && (
            <section className="danger-zone">
              <SettingsCard className="danger-card">
                <div className="danger-info">
                  <div className="settings-icon" style={{ borderColor: '#ff4444', color: '#ff4444' }}>
                    <AlertTriangle size={24} />
                  </div>
                  <div className="danger-text">
                    <h4>Terminate_Session_Permanent</h4>
                    <p>Warning: This action cannot be undone. All data will be wiped from the encrypted cloud.</p>
                  </div>
                </div>
                <button className="btn-danger" onClick={handleDestroy}>Destroy_Core_Account</button>
              </SettingsCard>
            </section>
          )}
        </div>
      </main>

      {!isAdminView && (
        <aside className="stats-panel">
          <div className="stat-item">
            <span className="stat-label">CPU_Load</span>
            <div className="stat-bar-container">
              <div className="stat-bar-fill" style={{ height: '33%' }}></div>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-label">MEM_Usage</span>
            <div className="stat-bar-container">
              <div className="stat-bar-fill" style={{ height: '75%' }}></div>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-label">Uplink</span>
            <div className="stat-bar-container">
              <div className="stat-bar-fill glow" style={{ height: '15%' }}></div>
            </div>
          </div>
        </aside>
      )}

      <div className="hex-overlay"></div>
    </div>
  );

  if (isAdminView) {
    return (
      <div className="admin-container">
        <div className="scanline"></div>
        <AdminSidebar />
        <div className="admin-main">
          <AdminHeader />
          <div className="admin-section">
            {content}
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default Settings;
