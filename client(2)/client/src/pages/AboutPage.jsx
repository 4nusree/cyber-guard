import React from "react";
import "../styles/about.css";

const AboutPage = () => {
  const stepByStep = [
    {
      step: 1,
      title: "Create an Account",
      desc: "Register and log in to access the learning dashboard.",
    },
    {
      step: 2,
      title: "Choose Your Mode",
      desc: "Select between Professional Mode or Storyline Mode.",
    },
    {
      step: 3,
      title: "Complete Lessons",
      desc: "Read content, watch videos, and use integrated terminal simulations.",
    },
    {
      step: 4,
      title: "Take Assessments",
      desc: "Test your knowledge at the end of each level to unlock new challenges.",
    },
    {
      step: 5,
      title: "Engage with Community",
      desc: "Collaborate, ask questions, and participate in discussions.",
    },
    {
      step: 6,
      title: "Track Progress",
      desc: "Monitor your achievements, XP, badges, and course completion.",
    },
    {
      step: 7,
      title: "Unlock Opportunities",
      desc: "Advanced learners gain access to higher-level challenges and hiring posts.",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="cyber-grid-bg"></div>
        <div className="hero-content-wrapper">
          <h1 className="hero-title">About Cyber Academy</h1>
          <h2 className="hero-subtitle">
            Empowering the Next Generation of Ethical Hackers and Cyber
            Defenders
          </h2>
          <p className="hero-description">
            Cyber Academy is an advanced cybersecurity learning platform
            designed to provide both structured professional education and
            immersive gamified experiences. Our mission is to bridge the gap
            between theoretical knowledge and real-world cyber defense skills.
          </p>
          <div className="hero-ctas">
            <button className="cta-btn primary">Explore the Platform</button>
            <button className="cta-btn secondary">Start Learning</button>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container grid-2">
          <div className="glass-card">
            <h2 className="section-title-small">Mission</h2>
            <p>
              To deliver practical, hands-on cybersecurity education through
              structured professional training and immersive story-driven
              simulations.
            </p>
          </div>
          <div className="glass-card">
            <h2 className="section-title-small">Vision</h2>
            <p>
              To build a global community of skilled cybersecurity professionals
              capable of defending digital infrastructure against evolving
              threats.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique Section */}
      <section className="unique-features">
        <div className="container">
          <h2 className="section-heading-glow">WHAT MAKES US UNIQUE</h2>
          <div className="features-grid-4">
            <div className="glass-card feature-card">
              <span className="material-symbols-outlined">menu_book</span>
              <h3>Professional Learning Mode</h3>
              <p>
                Structured courses with reading materials, videos, assessments,
                and integrated terminal practice environments.
              </p>
            </div>
            <div className="glass-card feature-card">
              <span className="material-symbols-outlined">sports_esports</span>
              <h3>Storyline Mode</h3>
              <p>
                Gamified cybersecurity missions that simulate real-world attack
                and defense scenarios.
              </p>
            </div>
            <div className="glass-card feature-card">
              <span className="material-symbols-outlined">groups</span>
              <h3>Interactive Community</h3>
              <p>
                Secure communication channels where learners collaborate and
                grow together.
              </p>
            </div>
            <div className="glass-card feature-card">
              <span className="material-symbols-outlined">monitoring</span>
              <h3>Admin & Monitoring Panel</h3>
              <p>
                Structured learning management system with performance insights
                and moderation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Cyber Academy Timeline */}
      <section className="procedure-section">
        <div className="container">
          <h2 className="section-heading-glow">HOW TO USE CYBER ACADEMY</h2>
          <div className="timeline">
            {stepByStep.map((item) => (
              <div className="timeline-item" key={item.step}>
                <div className="step-number">{item.step}</div>
                <div className="step-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Ethics Commitment Section */}
      <section className="ethics-section">
        <div className="container">
          <div className="neon-glow-box">
            <p>
              Cyber Academy promotes ethical hacking practices and responsible
              disclosure. All training is designed for defensive cybersecurity
              education only. Users are expected to adhere to ethical guidelines
              and legal standards.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Creators Section */}
      <section className="creators-section">
        <div className="container">
          <h2 className="section-heading-glow">MADE BY</h2>
          <div className="creators-grid">
            <div className="creator-card">
              <div className="profile-img-placeholder"></div>
              <h3>Anusree S Nair</h3>
              <p className="role">
                Cybersecurity Enthusiast & Platform Architect
              </p>
            </div>
            <div className="creator-card">
              <div className="profile-img-placeholder"></div>
              <h3>Mohammed Rahzin</h3>
              <p className="role">Developer & System Designer</p>
            </div>
          </div>
          <p className="creators-desc">
            This platform was built with a vision to combine structured
            cybersecurity education with immersive experiential learning.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
