import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  useEffect(() => {
    console.log("LandingPage mounted");
  }, []);

  return (
    <div className="landing-page">
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
