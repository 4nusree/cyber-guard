import React from "react";
import { BackgroundEffects } from "../components/BackgroundEffects";
import { ModeCard } from "../components/ModeCard";
import { PlatformFooter } from "../components/PlatformFooter";
import "../styles/platformSelection.css";

export default function PlatformSelection() {
  return (
    <div className="platform-container">
      <BackgroundEffects />

      <main
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 2rem",
        }}
      >
        <header className="page-header">
          <h1
            className="iceland glow-green"
            style={{ fontSize: "5rem", marginBottom: "1rem" }}
          >
            CHOOSE YOUR LEARNING MODE
          </h1>
          <p
            className="quantico glitch-text"
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              letterSpacing: "0.2em",
            }}
          >
            [ INITIALIZING SYSTEM PROTOCOLS... SELECT OPERATIONAL ENVIRONMENT ]
          </p>
        </header>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <ModeCard
            title="Professional Learning"
            description="Standard technical proficiency modules."
            features={[
              "Theory & Advanced Lessons",
              "Integrated Terminal Labs",
              "Cert-Ready Curriculum",
            ]}
            buttonText="ENTER PROFESSIONAL MODE"
            modeType="professional"
          />

          <div
            className="power-core"
            style={{
              display: "none" /* Hidden on mobile, handled via flex-wrap */,
            }}
          >
            <div className="power-line"></div>
            <div className="pulse-circle">
              <div className="heartbeat"></div>
            </div>
            <div className="power-line"></div>
          </div>

          <ModeCard
            title="Storyline Mode"
            description="Mission-based immersive campaign."
            features={[
              "Mission-Based Campaign",
              "XP & Skill Tree System",
              "Global Ranks & Achievements",
            ]}
            buttonText="INITIATE STORY MODE"
            modeType="story"
          />
        </div>

        <PlatformFooter />
      </main>
    </div>
  );
}
