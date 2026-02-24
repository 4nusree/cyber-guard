import React, { useState } from 'react';
import { useLocation } from 'wouter';
import '../styles/authModal.css';

const AuthModal = ({ isOpen, onClose }) => {
  const [, setLocation] = useLocation();
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const identifier = formData.get('identifier');
    const passkey = formData.get('passkey');

    if (isLogin && identifier === 'admin' && passkey === 'admin123') {
      setLocation('/admin');
      onClose();
      return;
    }

    // Simulate successful login/register
    setLocation('/platform');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content neon-border" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} data-testid="button-close-modal">
          <span className="material-symbols-outlined" style={{ pointerEvents: 'none' }}>close</span>
        </button>

        <div className="modal-header">
          <h2 className="modal-title section-heading-glow iceland">
            {isLogin ? 'ACCESS_PROTOCOL' : 'ENLIST_UNIT'}
          </h2>
        </div>

        <div className="modal-body">
          <form className="auth-form" onSubmit={handleSubmit}>
            {isLogin ? (
              <>
                <div className="form-group">
                  <label className="quantico">IDENTIFIER</label>
                  <input type="text" name="identifier" placeholder="Username / Email" required />
                </div>
                <div className="form-group">
                  <label className="quantico">PASSKEY</label>
                  <input type="password" name="passkey" placeholder="••••••••" required />
                </div>
                <div className="form-utils">
                  <button type="button" className="text-btn quantico">Forgot password?</button>
                </div>
              </>
            ) : (
              <>
                <div className="form-group">
                  <label className="quantico">CODENAME</label>
                  <input type="text" placeholder="Username" required />
                </div>
                <div className="form-group">
                  <label className="quantico">COMMS_LINK</label>
                  <input type="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <label className="quantico">SECURITY_PHRASE</label>
                  <input type="password" placeholder="••••••••" required />
                </div>
              </>
            )}
            <button type="submit" className="submit-btn quantico">
              {isLogin ? 'INITIATE_SESSION' : 'RECRUIT_NOW'}
            </button>
          </form>
        </div>

        <div className="modal-footer">
          <p className="quantico">
            {isLogin ? "New operative?" : "Already registered?"}{' '}
            <button className="text-btn highlight quantico" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'CREATE_ACCOUNT' : 'RESUME_ACCESS'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
