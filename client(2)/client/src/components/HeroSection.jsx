import React from 'react';
import '../styles/hero.css';

const HeroSection = () => {
  return (
    <>
      <header className="hero-section" id="about">
        <div className="hero-background-layer">
          <div className="grid-3d"></div>
          <div className="digital-texture"></div>
          <div className="particle p1"></div>
          <div className="particle p2"></div>
          <div className="particle p3"></div>
          <div className="particle p4"></div>
          <div className="particle p5"></div>
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <h1 className="cyber-title">
            CYBERLEARN
          </h1>
        </div>

        <div className="hero-scroll-indicator">
          <span className="hero-scroll-text">Initiate Sequence</span>
          <div className="animate-bounce">
            <span className="material-symbols-outlined" style={{ fontSize: '30px' }}>
              keyboard_double_arrow_down
            </span>
          </div>
        </div>
      </header>

      <section className="intro-section">
        <div className="intro-container">
          <div className="divider mb"></div>
          <p className="intro-text">
            Step into a world where learning meets reality. Our premium platform combines cutting-edge theory with high-stakes simulations, ensuring you don't just learn cybersecurity—<span className="highlight">you live it.</span>
          </p>
          <div className="divider mt"></div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
