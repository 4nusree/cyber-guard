import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export function PlatformNavbar() {
  const navigate = useNavigate();

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, padding: '1.5rem 2rem' }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        background: 'rgba(5, 8, 7, 0.6)',
        backdropFilter: 'blur(20px)',
        borderRadius: '999px',
        padding: '0.75rem 2rem',
        border: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <Link to="/">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }} data-testid="link-home">
            <div style={{ 
              width: '40px', 
              height: '40px', 
              background: 'rgba(0, 255, 136, 0.1)', 
              borderRadius: '8px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              border: '1px solid rgba(0, 255, 136, 0.3)'
            }}>
              <span className="iceland" style={{ color: '#00ff88', fontSize: '1.25rem' }}>[SEC]</span>
            </div>
            <span className="iceland" style={{ fontSize: '1.5rem', letterSpacing: '0.2em', color: 'white' }}>ELITE_OPS_CMD</span>
          </div>
        </Link>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '8px', color: 'rgba(255, 255, 255, 0.4)', margin: 0 }}>OPERATIVE</p>
            <p className="quantico" style={{ fontSize: '10px', fontWeight: 'bold', margin: 0 }}>GHOST_USER_X</p>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              border: '1px solid #00ff88',
              background: '#1a1a1a'
            }}></div>
            <div style={{ 
              position: 'absolute', 
              bottom: 0, 
              right: 0, 
              width: '12px', 
              height: '12px', 
              background: '#00ff88', 
              border: '2px solid #050807', 
              borderRadius: '50%' 
            }}></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
