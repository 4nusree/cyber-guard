import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/legal.css";

const Terms = () => {
  return (
    <div className="legal-container">
      <Navbar />
      <div className="legal-content">
        <div className="legal-header">
          <h1>Terms & Conditions</h1>
          <p>Security Protocol 404-T&C // Last Updated: 2023.11.24</p>
        </div>

        <div className="legal-section">
          <h2><span>01 //</span> Acceptance of Terms</h2>
          <p>
            By accessing or using the CyberSentinel platform ("Platform"), you agree to be bound by these Terms and Conditions. This is a legally binding agreement between you and CyberSentinel Inc. If you do not agree to these terms, you must immediately cease all access to the system.
          </p>
          <p>
            The Platform provides advanced cybersecurity testing, monitoring, and threat detection tools. Use of these tools is subject to strict ethical guidelines and legal compliance.
          </p>
        </div>

        <div className="legal-section">
          <h2><span>02 //</span> User Obligations</h2>
          <p>Users must maintain the confidentiality of their terminal access credentials. Any activity performed under your encrypted session ID is your sole responsibility.</p>
          <ul>
            <li>
              <i className="material-icons">code</i>
              <span>You shall not use the Platform to initiate unauthorized attacks on third-party infrastructure.</span>
            </li>
            <li>
              <i className="material-icons">code</i>
              <span>Reverse engineering of the proprietary scanning algorithms is strictly prohibited.</span>
            </li>
            <li>
              <i className="material-icons">code</i>
              <span>Users must report any discovered vulnerabilities within the Platform itself through the Bug Bounty protocol.</span>
            </li>
          </ul>
        </div>

        <div className="legal-section">
          <h2><span>03 //</span> Intellectual Property</h2>
          <p>All source code, neural network models, interface designs, and documentation hosted on the Platform are the exclusive property of CyberSentinel Inc.</p>
          <div className="highlight-box">
            "The neural fingerprinting technology and automated exploit detection sequences are protected under international patent law."
          </div>
        </div>

        <div className="legal-section">
          <h2><span>04 //</span> Limitation of Liability</h2>
          <p>CYBERSENTINEL PROVIDES THE PLATFORM "AS IS" AND "AS AVAILABLE." WE DO NOT GUARANTEE THAT THE PLATFORM WILL BE 100% FREE FROM ZERO-DAY VULNERABILITIES OR NETWORK LATENCY.</p>
          <p>In no event shall CyberSentinel be liable for any indirect, incidental, or consequential damages arising from the loss of data or service interruptions during high-level security audits.</p>
        </div>

        <div className="legal-section">
          <h2><span>05 //</span> Privacy & Data Handling</h2>
          <p>Our data handling protocols are compliant with the most stringent global standards. All user logs are anonymized and stored behind multi-layer cryptographic barriers.</p>
          <div className="grid-info">
            <div className="info-card">
              <span className="info-label">ENCRYPTION TYPE</span>
              <span className="info-value">ChaCha20-Poly1305</span>
            </div>
            <div className="info-card">
              <span className="info-label">STORAGE POLICY</span>
              <span className="info-value">Ephemeral / Non-Persistent</span>
            </div>
          </div>
        </div>

        <div className="legal-section">
          <h2><span>06 //</span> Governing Law</h2>
          <p>These terms are governed by the laws of the Jurisdiction of Silicon Valley, without regard to its conflict of law principles. Any disputes shall be resolved through binding arbitration in a secure digital environment.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
