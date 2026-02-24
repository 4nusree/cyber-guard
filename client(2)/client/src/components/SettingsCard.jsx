import React from 'react';
import '../styles/settings.css';

const SettingsCard = ({ children, className = "" }) => {
  return (
    <div className={`hud-bracket-tl ${className}`}>
      {children}
    </div>
  );
};

export default SettingsCard;
