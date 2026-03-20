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
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute, RoleProtectedRoute } from "./components/ProtectedRoute";

function AppShell() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [activePopup, setActivePopup] = useState(null);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);
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
    <div className="app-container">
      <Navbar onOpenAuth={openAuthModal} />
      <main>
        <Switch>
          <Route path="/" component={LandingPage} />
          <Route path="/platform">
            {() => (
              <ProtectedRoute onRequireAuth={openAuthModal}>
                <PlatformSelection />
              </ProtectedRoute>
            )}
          </Route>
          <Route path="/community">
            {() => (
              <ProtectedRoute onRequireAuth={openAuthModal}>
                <Community />
              </ProtectedRoute>
            )}
          </Route>
          <Route path="/profile">
            {() => (
              <ProtectedRoute onRequireAuth={openAuthModal}>
                <Profile />
              </ProtectedRoute>
            )}
          </Route>
          <Route path="/references" component={References} />
          <Route path="/settings">
            {() => (
              <ProtectedRoute onRequireAuth={openAuthModal}>
                <Settings />
              </ProtectedRoute>
            )}
          </Route>
          <Route path="/admin">
            {() => (
              <RoleProtectedRoute allowedRoles={["admin"]} onRequireAuth={openAuthModal}>
                <Admin />
              </RoleProtectedRoute>
            )}
          </Route>
          <Route path="/about" component={AboutPage} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
        </Switch>
      </main>
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
      />
      <PopupModal
        isOpen={!!activePopup}
        onClose={closePopup}
        title={getPopupTitle()}
      >
        {renderPopupContent()}
      </PopupModal>
    </div>
  );
}

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <AppShell />
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
