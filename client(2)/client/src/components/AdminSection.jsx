import React from 'react';

const AdminSection = ({ title, children }) => {
  return (
    <div className="admin-section">
      <div className="section-container">
        <div className="hud-bracket hud-tl"></div>
        <div className="hud-bracket hud-tr"></div>
        <div className="hud-bracket hud-bl"></div>
        <div className="hud-bracket hud-br"></div>
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AdminSection;
