import React, { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import '../styles/authModal.css';
import { useAuth } from '../context/AuthContext';
import { useToast } from './ui/Toast';

const initialFormState = {
  email: '',
  password: '',
  registerEmail: '',
  registerPassword: '',
  registerCodename: '',
};

const AuthModal = ({ isOpen, onClose }) => {
  const [, setLocation] = useLocation();
  const { login, register, pendingMfa, isAuthenticated } = useAuth();
  const { addToast } = useToast();
  const [isLogin, setIsLogin] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    if (isAuthenticated && isOpen) {
      onClose();
    }
  }, [isAuthenticated, isOpen, onClose]);

  if (!isOpen) return null;

  const updateField = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (isLogin) {
        const payload = await login({
          email: formState.email,
          password: formState.password,
        });

        if (payload.mfa_required) {
          addToast('MFA REQUIRED. COMPLETE SECOND FACTOR TO CONTINUE.', 'info');
          onClose();
          return;
        }

        setLocation(payload.user?.role === 'admin' ? '/admin' : '/platform');
        onClose();
        setFormState(initialFormState);
        return;
      }

      await register({
        email: formState.registerEmail,
        password: formState.registerPassword,
      });
      setLocation('/platform');
      onClose();
      setFormState(initialFormState);
    } catch (error) {
      addToast((error.message || 'AUTHENTICATION FAILED.').toUpperCase(), 'critical');
    } finally {
      setIsSubmitting(false);
    }
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
          {pendingMfa && isLogin && (
            <p className="quantico" style={{ fontSize: '0.75rem', opacity: 0.8 }}>
              PENDING_MFA: {pendingMfa.email}
            </p>
          )}
        </div>

        <div className="modal-body">
          <form className="auth-form" onSubmit={handleSubmit}>
            {isLogin ? (
              <>
                <div className="form-group">
                  <label className="quantico">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="user@example.com"
                    value={formState.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="quantico">PASSKEY</label>
                  <input
                    type="password"
                    name="passkey"
                    placeholder="••••••••"
                    value={formState.password}
                    onChange={(e) => updateField('password', e.target.value)}
                    required
                  />
                </div>
              </>
            ) : (
              <>
                <div className="form-group">
                  <label className="quantico">CODENAME</label>
                  <input
                    type="text"
                    placeholder="Username"
                    value={formState.registerCodename}
                    onChange={(e) => updateField('registerCodename', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="quantico">COMMS_LINK</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formState.registerEmail}
                    onChange={(e) => updateField('registerEmail', e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="quantico">SECURITY_PHRASE</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={formState.registerPassword}
                    onChange={(e) => updateField('registerPassword', e.target.value)}
                    required
                  />
                </div>
              </>
            )}
            <button type="submit" className="submit-btn quantico" disabled={isSubmitting}>
              {isSubmitting ? 'PROCESSING...' : isLogin ? 'INITIATE_SESSION' : 'RECRUIT_NOW'}
            </button>
          </form>
        </div>

        <div className="modal-footer">
          <p className="quantico">
            {isLogin ? 'New operative?' : 'Already registered?'}{' '}
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
