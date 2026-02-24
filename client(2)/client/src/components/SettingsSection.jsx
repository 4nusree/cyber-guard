import React from 'react';
import '../styles/settings.css';

const SettingsSection = ({ label, title, children }) => {
  return (
    <section className="settings-section">
      <div className="section-divider">
        <span className="section-label">{label}</span>
        <div className="divider-line"></div>
        <h3 className="section-title">{title}</h3>
      </div>
      {children}
    </section>
  );
};

export default SettingsSection;
