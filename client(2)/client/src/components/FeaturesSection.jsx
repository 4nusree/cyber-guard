import React from 'react';
import '../styles/features.css';

const FeaturesSection = () => {
  const systemFeatures = [
    {
      icon: "touch_app",
      title: "INTERACTIVE",
      desc: "Real-time sandboxed environments where your actions have immediate consequences."
    },
    {
      icon: "school",
      title: "SCALEABLE",
      desc: "From script kiddie to zero-day hunter, our adaptive paths scale to your skill level."
    },
    {
      icon: "videocam",
      title: "CONTENT",
      desc: "High-definition modules led by industry veterans from top-tier security firms."
    },
    {
      icon: "sports_esports",
      title: "GAMIFIED",
      desc: "Earn XP, unlock badges, and climb the global leaderboards as you secure the web."
    }
  ];

  const coreFeatures = [
    {
      icon: "verified",
      title: "PROFESSIONAL GRADE",
      desc: "Curriculum aligned with OSCP, CISSP, and CEH standards for real-world career advancement."
    },
    {
      icon: "auto_stories",
      title: "STORY DRIVEN",
      desc: "Immerse yourself in complex narratives where your choices affect the digital outcome of nations."
    },
    {
      icon: "terminal",
      title: "BROWSER TERMINAL",
      desc: "Full Linux environments running directly in your browser. No VM setup required."
    },
    {
      icon: "assessment",
      title: "SMART ASSESSMENT",
      desc: "AI-powered analytics identify your weak points and generate custom drills to master them."
    }
  ];

  return (
    <>
      <section className="features-section" id="features">
        <div className="container">
          <h3 className="section-heading-glow">SYSTEM_OVERVIEW</h3>
          <div className="features-grid">
            {systemFeatures.map((feature, index) => (
              <div className="feature-card neon-border" key={index}>
                <span className="material-symbols-outlined feature-icon">{feature.icon}</span>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="core-features-section" id="modules">
        <div className="container">
          <h3 className="section-heading-glow">CORE_FEATURES</h3>
          <div className="core-grid-container">
            <div className="core-grid">
              {coreFeatures.map((feature, index) => (
                <div className="core-card" key={index}>
                  <div className="core-card-content">
                    <div className="core-icon-box">
                      <span className="material-symbols-outlined">{feature.icon}</span>
                    </div>
                    <div>
                      <h4 className="feature-title">{feature.title}</h4>
                      <p className="feature-desc">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
