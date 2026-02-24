import React from 'react';
import '../styles/settings.css';

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <input 
      type="checkbox" 
      className="circuit-toggle" 
      checked={checked} 
      onChange={(e) => onChange(e.target.checked)} 
    />
  );
};

export default ToggleSwitch;
