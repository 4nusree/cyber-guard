import React from "react";
import "../styles/authModal.css"; // Reuse modal styles or add specific ones

const PopupModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal-container neon-border" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="modal-header">
          <h2 className="neon-text">{title}</h2>
        </div>
        <div className="modal-body" style={{ maxHeight: '80vh', overflowY: 'auto', padding: '1rem' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
