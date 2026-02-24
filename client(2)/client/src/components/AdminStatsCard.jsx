import React from 'react';

const AdminStatsCard = ({ label, value, icon, chartData }) => {
  return (
    <div className="stats-card">
      <div className="hud-bracket hud-tl"></div>
      <div className="hud-bracket hud-tr"></div>
      <div className="hud-bracket hud-bl"></div>
      <div className="hud-bracket hud-br"></div>
      <div className="stats-label">
        <span>{label}</span>
        <span className="material-symbols-outlined" style={{fontSize: '1rem'}}>{icon}</span>
      </div>
      <div className="stats-value">{value}</div>
      <div className="stats-chart">
        {chartData.map((h, i) => (
          <div key={i} className="chart-bar" style={{height: `${h*4}px`}}></div>
        ))}
      </div>
    </div>
  );
};

export default AdminStatsCard;
