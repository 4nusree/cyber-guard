import React, { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '../context/AuthContext';
import { useToast } from './ui/Toast';

export const ProtectedRoute = ({ children, onRequireAuth }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const { addToast } = useToast();
  const [, setLocation] = useLocation();
  const hasRedirected = useRef(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated && !hasRedirected.current) {
      hasRedirected.current = true;
      addToast('LOGIN REQUIRED TO ACCESS THAT PAGE.', 'critical');
      onRequireAuth?.();
      setLocation('/');
    }
  }, [addToast, isAuthenticated, isLoading, onRequireAuth, setLocation]);

  if (isLoading || !isAuthenticated) {
    return null;
  }

  return children;
};

export const RoleProtectedRoute = ({ allowedRoles = [], children, onRequireAuth }) => {
  const { isAuthenticated, isLoading, roles } = useAuth();
  const { addToast } = useToast();
  const [, setLocation] = useLocation();
  const hasRedirected = useRef(false);

  useEffect(() => {
    if (isLoading || hasRedirected.current) {
      return;
    }

    if (!isAuthenticated) {
      hasRedirected.current = true;
      addToast('LOGIN REQUIRED TO ACCESS THAT PAGE.', 'critical');
      onRequireAuth?.();
      setLocation('/');
      return;
    }

    if (!allowedRoles.some((role) => roles.includes(role))) {
      hasRedirected.current = true;
      addToast('UNAUTHORIZED ACCESS BLOCKED.', 'critical');
      setLocation('/');
    }
  }, [addToast, allowedRoles, isAuthenticated, isLoading, onRequireAuth, roles, setLocation]);

  if (isLoading || !isAuthenticated) {
    return null;
  }

  if (!allowedRoles.some((role) => roles.includes(role))) {
    return null;
  }

  return children;
};
