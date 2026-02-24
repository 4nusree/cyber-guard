import React, { useState } from "react";
import { Route, Switch } from "wouter";
import LandingPage from "./pages/LandingPage";
import PlatformSelection from "./pages/PlatformSelection";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import References from "./pages/References";
import Settings from "./pages/Settings";
import Admin from "./pages/Admin";
import AboutPage from "./pages/AboutPage";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Navbar from "./components/Navbar";
import AuthModal from "./components/AuthModal";
import PopupModal from "./components/PopupModal";
import { ToastProvider } from "./components/ui/Toast";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [activePopup, setActivePopup] = useState(null);

  const closePopup = () => setActivePopup(null);

  const renderPopupContent = () => {
    switch (activePopup) {
      case "profile": return <Profile />;
      case "community": return <Community />;
      case "platform": return <PlatformSelection />;
      case "references": return <References />;
      case "settings": return <Settings />;
      default: return null;
    }
  };

  const getPopupTitle = () => {
    if (!activePopup) return "";
    return activePopup.charAt(0).toUpperCase() + activePopup.slice(1);
  };

  return (
    <ToastProvider>
      <div className="app-container">
        <Navbar 
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          onOpenAuth={() => setIsAuthModalOpen(true)} 
          onOpenPopup={(type) => setActivePopup(type)}
        />
        <main>
          <Switch>
            <Route path="/" component={LandingPage} />
            <Route path="/platform" component={PlatformSelection} />
            <Route path="/community" component={Community} />
            <Route path="/profile" component={Profile} />
            <Route path="/references" component={References} />
            <Route path="/settings" component={Settings} />
            <Route path="/admin" component={Admin} />
            <Route path="/about" component={AboutPage} />
            <Route path="/terms" component={Terms} />
            <Route path="/privacy" component={Privacy} />
          </Switch>
        </main>
        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
        />
        <PopupModal
          isOpen={!!activePopup}
          onClose={closePopup}
          title={getPopupTitle()}
        >
          {renderPopupContent()}
        </PopupModal>
      </div>
    </ToastProvider>
  );
}

export default App;

