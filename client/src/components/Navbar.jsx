import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import '../styles/navbar.css';

const Navbar = ({ isAuthenticated, setIsAuthenticated, onOpenAuth }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const notifications = [
    { id: 1, text: "Welcome to Cyber Academy!", time: "2 mins ago", icon: "celebration" },
    { id: 2, text: "New module unlocked: Network Security", time: "1 hour ago", icon: "lock_open" },
    { id: 3, text: "Community: New reply to your post", time: "3 hours ago", icon: "forum" },
  ];

  const handleAuthClick = () => {
    if (!isAuthenticated) {
      onOpenAuth();
    } else {
      setIsAuthenticated(false);
      setLocation("/");
    }
  };

  const handleAboutClick = () => {
    setLocation("/about");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <div className="navbar-logo cursor-pointer" data-testid="link-home">
            <span className="material-symbols-outlined icon">shield</span>
            <span>CyberLearn</span>
          </div>
        </Link>
        
        <div className="navbar-actions">
          <ul className="navbar-links">
            <li>
              <button onClick={handleAboutClick} className="nav-link-btn">
                About
              </button>
            </li>
            <li><a href="/#features">Features</a></li>
            <li><a href="/#modules">Modules</a></li>
          </ul>

          <div className="nav-controls">
            <div className="notifications-container" ref={notificationRef}>
              <button 
                className={`nav-icon-btn ${isNotificationsOpen ? 'active' : ''}`}
                onClick={() => {
                  setIsNotificationsOpen(!isNotificationsOpen);
                  setIsProfileOpen(false);
                }}
                aria-label="Notifications" 
                data-testid="button-notifications"
              >
                <span className="material-symbols-outlined">notifications</span>
                <span className="notification-badge"></span>
              </button>

              {isNotificationsOpen && (
                <div className="notifications-dropdown neon-border" data-testid="dropdown-notifications">
                  <div className="dropdown-header">
                    <span>Notifications</span>
                    <button className="mark-read-btn">Mark all as read</button>
                  </div>
                  <div className="notifications-list">
                    {notifications.map(notification => (
                      <div key={notification.id} className="notification-item">
                        <span className="material-symbols-outlined notification-icon">
                          {notification.icon}
                        </span>
                        <div className="notification-content">
                          <p className="notification-text">{notification.text}</p>
                          <span className="notification-time">{notification.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link to="/notifications" className="view-all-link" onClick={() => setIsNotificationsOpen(false)}>
                    View all notifications
                  </Link>
                </div>
              )}
            </div>

            <div className="profile-container" ref={profileRef}>
              <button 
                className={`nav-icon-btn profile-trigger ${isProfileOpen ? 'active' : ''}`}
                onClick={() => {
                  setIsProfileOpen(!isProfileOpen);
                  setIsNotificationsOpen(false);
                }}
                aria-label="Profile Menu"
                data-testid="button-profile-menu"
              >
                <span className="material-symbols-outlined">account_circle</span>
              </button>

              {isProfileOpen && (
                <div className="profile-dropdown neon-border" data-testid="dropdown-profile">
                  <Link to="/profile" className="dropdown-item" onClick={() => setIsProfileOpen(false)} data-testid="link-profile">
                    <span className="material-symbols-outlined">person</span>
                    <span>Profile</span>
                  </Link>
                  <Link to="/community" className="dropdown-item" onClick={() => setIsProfileOpen(false)} data-testid="link-community">
                    <span className="material-symbols-outlined">groups</span>
                    <span>Community</span>
                  </Link>
                  <Link to="/platform" className="dropdown-item" onClick={() => setIsProfileOpen(false)} data-testid="link-courses">
                    <span className="material-symbols-outlined">menu_book</span>
                    <span>Courses</span>
                  </Link>
                  <Link to="/references" className="dropdown-item" onClick={() => setIsProfileOpen(false)} data-testid="link-references">
                    <span className="material-symbols-outlined">library_books</span>
                    <span>References</span>
                  </Link>
                  <Link to="/settings" className="dropdown-item" onClick={() => setIsProfileOpen(false)} data-testid="link-settings">
                    <span className="material-symbols-outlined">settings</span>
                    <span>Settings</span>
                  </Link>
                </div>
              )}
            </div>

            <button
              className="auth-btn"
              onClick={handleAuthClick}
            >
              {isAuthenticated ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
