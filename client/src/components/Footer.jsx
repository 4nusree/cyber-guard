import React from 'react';
import { Link } from 'wouter';
import '../styles/footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="material-symbols-outlined icon">shield</span>
              <span className="footer-brand-text">CyberLearn</span>
            </div>
            <div className="footer-links">
              <Link href="/privacy">Privacy_Policy</Link>
              <Link href="/terms">Service_Terms</Link>
              <a href="#">Connect</a>
            </div>
            <div className="footer-copyright">
              © 2024 CYBERLEARN PROTOCOL. SECURED.
            </div>
          </div>
        </div>
      </footer>
      
      <button 
        className="theme-toggle" 
        onClick={() => document.documentElement.classList.toggle('dark')}
        aria-label="Toggle Theme"
      >
        <span className="material-symbols-outlined">settings_ethernet</span>
      </button>
    </>
  );
};

export default Footer;
