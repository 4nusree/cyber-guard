import React from 'react';

export function ModeCard({ title, description, features, buttonText, modeType }) {
  const isStory = modeType === 'story';
  
  return (
    <div className="hud-card" style={{ width: '400px' }}>
      <div className="scanning-line" style={isStory ? { animationDelay: '3s' } : {}}></div>
      <div className="quantico" style={{ fontSize: '9px', color: 'rgba(0, 255, 136, 0.4)', marginBottom: '2rem' }}>
        {isStory ? '[ SIM_ENV_09 ]' : '[ PROTO_V4 ]'}
      </div>
      
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ 
          width: '64px', 
          height: '64px', 
          background: 'rgba(0, 255, 136, 0.1)', 
          borderRadius: '4px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          border: '1px solid rgba(0, 255, 136, 0.3)'
        }}>
          <span className="quantico" style={{ color: '#00ff88' }}>{isStory ? '[MISN]' : '[TERM]'}</span>
        </div>
      </div>

      <h2 className="iceland" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>{title}</h2>
      
      <div className="quantico" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.75rem', marginBottom: '3rem', flexGrow: 1 }}>
        <p style={{ 
          padding: '0.5rem 1rem', 
          background: 'rgba(0, 255, 136, 0.05)', 
          borderLeft: '2px solid rgba(0, 255, 136, 0.4)',
          marginBottom: '1.5rem'
        }}>
          {description}
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {features.map((feature, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ color: '#00ff88' }}>▶</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="tactical-btn">
        <span style={{ opacity: 0.4 }}>「</span>
        <span>{buttonText}</span>
        <span style={{ opacity: 0.4 }}>」</span>
      </button>
      
      <div className="quantico" style={{ fontSize: '9px', color: 'rgba(0, 255, 136, 0.4)', marginTop: '1rem', textAlign: 'right' }}>
        {isStory ? 'SIM_REF: OPS_STORY' : 'SYS_REF: TECH_PRIME'}
      </div>
    </div>
  );
}
