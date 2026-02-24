import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/legal.css";

const Privacy = () => {
  return (
    <div className="legal-container">
      <Navbar />
      <div className="legal-content">
        <div className="legal-header">
          <h1>Privacy Protocols</h1>
          <p>Security Compliance Protocol v4.0.2 // Last Updated: 2023.10.24</p>
        </div>

        <div className="legal-section">
          <h2><span>01.</span> Data Collection</h2>
          <p>Our platform operates on a <strong>Zero-Persistence</strong> philosophy. We only collect the minimal telemetry required to maintain network stability and threat mitigation.</p>
          <div className="grid-info">
            <div className="info-card">
              <span className="info-label">TECHNICAL LOGS</span>
              <span className="info-value">Masked IP addresses and encrypted session tokens for authentication.</span>
            </div>
            <div className="info-card">
              <span className="info-label">ENCRYPTED METADATA</span>
              <span className="info-value">Non-identifiable routing headers used for threat analysis.</span>
            </div>
            <div className="info-card">
              <span className="info-label">DEVICE IDENTITY</span>
              <span className="info-value">Salted hashes of hardware identifiers to prevent unauthorized access.</span>
            </div>
            <div className="info-card">
              <span className="info-label">CONTACT INFO</span>
              <span className="info-value">Purely for account recovery and critical security alerts.</span>
            </div>
          </div>
        </div>

        <div className="legal-section">
          <h2><span>02.</span> Data Usage</h2>
          <p>All data processed within the CyberSentinel ecosystem is strictly used for protocol optimization and defensive posture enhancement.</p>
          <ul>
            <li>
              <i className="material-icons">verified_user</i>
              <span>Automated threat detection and neutralization sequences.</span>
            </li>
            <li>
              <i className="material-icons">verified_user</i>
              <span>User authentication via cryptographically secure handshakes.</span>
            </li>
            <li>
              <i className="material-icons">verified_user</i>
              <span>Real-time monitoring of system integrity and performance.</span>
            </li>
          </ul>
        </div>

        <div className="legal-section">
          <h2><span>03.</span> Security Measures</h2>
          <p>We employ military-grade encryption protocols and multi-layer defensive architectures to safeguard all transmitted information.</p>
          <div className="highlight-box">
            "Every data packet is encapsulated within multi-layer TLS 1.3 tunnels with AES-256-GCM encryption."
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
