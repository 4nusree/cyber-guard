import React, { useState } from 'react';

const AdminTable = ({ users = [], onApprove, onBan }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.id?.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="section-container">
      <div className="hud-bracket hud-tl"></div>
      <div className="hud-bracket hud-tr"></div>
      <div className="hud-bracket hud-bl"></div>
      <div className="hud-bracket hud-br"></div>
      
      <div className="section-header">
        <h2 className="section-title">OPERATIVE_DATABASE</h2>
        <div className="search-container">
          <span className="material-symbols-outlined search-icon">search</span>
          <input 
            type="text" 
            className="search-input" 
            placeholder="FILTER BY CODENAME / ID..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Operative</th>
              <th>Role</th>
              <th>Clearance</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td>
                  <div className="user-cell">
                    <span className="material-symbols-outlined">account_circle</span>
                    <div>
                      <div style={{fontWeight: 'bold'}}>{user.name}</div>
                      <div style={{fontSize: '0.7rem', opacity: 0.6}}>{user.id}</div>
                    </div>
                  </div>
                </td>
                <td>{user.role}</td>
                <td>{user.level}</td>
                <td>
                  <span className={`status-badge status-${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <button 
                    className="action-btn" 
                    onClick={() => onApprove && onApprove(user.id)}
                    data-testid={`button-approve-${user.id}`}
                  >
                    APPROVE
                  </button>
                  <button 
                    className="action-btn ban" 
                    onClick={() => onBan && onBan(user.id)}
                    data-testid={`button-ban-${user.id}`}
                  >
                    BAN
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', opacity: 0.5, padding: '2rem' }}>
                  NO MATCHING OPERATIVES FOUND
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="page-btn" disabled>PREV</button>
        <button className="page-btn">1</button>
        <button className="page-btn" disabled>NEXT</button>
      </div>
    </div>
  );
};

export default AdminTable;
