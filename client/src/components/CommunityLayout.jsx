import React from 'react';

const CommunityLayout = ({ children }) => {
  return (
    <div className="community-container">
      <header className="community-header">
        <div className="header-title-container">
          <div className="status-dot"></div>
          <h1 className="header-title">TERMINAL v4.0.2</h1>
        </div>
        <div className="header-stats">
          <div className="stat-item hide-mobile">
            <span className="stat-label">NODES:</span>
            <span className="stat-value">1,024</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">LATENCY:</span>
            <span className="stat-value">12ms</span>
          </div>
        </div>
      </header>
      <main className="message-area">
        {children}
      </main>
    </div>
  );
};

export default CommunityLayout;
