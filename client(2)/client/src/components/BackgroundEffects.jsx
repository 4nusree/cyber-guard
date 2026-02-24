import React from 'react';
import '../styles/platformSelection.css';

export function BackgroundEffects() {
  return (
    <div className="hex-bg">
      <div className="grid-overlay"></div>
      <div className="node-anim" style={{ top: '25%', left: '35%' }}></div>
      <div className="node-anim" style={{ top: '55%', left: '65%', animationDelay: '1.5s' }}></div>
      <div className="node-anim" style={{ top: '80%', left: '20%', animationDelay: '2.5s' }}></div>
      <div className="node-anim" style={{ top: '15%', left: '80%', animationDelay: '0.8s' }}></div>
    </div>
  );
}
