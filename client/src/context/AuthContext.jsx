import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { apiRequest, configureApiClient, refreshSessionRequest } from '../lib/apiClient';
import { useToast } from '../components/ui/Toast';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const { addToast } = useToast();
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pendingMfa, setPendingMfa] = useState(null);

  const applyAuthPayload = useCallback((payload) => {
    const nextUser = payload?.user ?? null;
    const nextAccessToken = payload?.tokens?.access_token ?? null;
    setUser(nextUser);
    setRoles(nextUser?.role ? [nextUser.role] : []);
    setAccessToken(nextAccessToken);
  }, []);

  const clearAuthState = useCallback(() => {
    setAccessToken(null);
    setUser(null);
    setRoles([]);
    setPendingMfa(null);
  }, []);

  const refreshAccessToken = useCallback(async () => {
    const payload = await refreshSessionRequest().catch(() => null);
    if (!payload?.tokens?.access_token) {
      clearAuthState();
      return false;
    }

    applyAuthPayload(payload);
    return true;
  }, [applyAuthPayload, clearAuthState]);

  const handleSessionFailure = useCallback(() => {
    clearAuthState();
    addToast('SESSION EXPIRED. PLEASE LOG IN AGAIN.', 'critical');
  }, [addToast, clearAuthState]);

  useEffect(() => {
    configureApiClient({
      getAccessToken: () => accessToken,
      refreshAccessToken,
      onAuthFailure: handleSessionFailure,
    });
  }, [accessToken, handleSessionFailure, refreshAccessToken]);

  useEffect(() => {
    let isMounted = true;

    const bootstrapAuth = async () => {
      setIsLoading(true);
      try {
        const me = await apiRequest('/auth/me', { suppressAuthFailure: true });
        if (!isMounted) return;
        setUser(me);
        setRoles(me?.role ? [me.role] : []);
      } catch (error) {
        if (!isMounted) return;
        clearAuthState();
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    bootstrapAuth();

    return () => {
      isMounted = false;
    };
  }, [clearAuthState]);

  const login = useCallback(async ({ email, password }) => {
    const payload = await apiRequest('/auth/login', {
      method: 'POST',
      auth: false,
      retryOnUnauthorized: false,
      body: { email, password },
    });

    if (payload.mfa_required) {
      setPendingMfa({ email, requiredAt: Date.now() });
      clearAuthState();
      return payload;
    }

    applyAuthPayload(payload);
    setPendingMfa(null);
    addToast('LOGIN SUCCESSFUL.', 'success');
    return payload;
  }, [addToast, applyAuthPayload, clearAuthState]);

  const register = useCallback(async ({ email, password }) => {
    const payload = await apiRequest('/auth/register', {
      method: 'POST',
      auth: false,
      retryOnUnauthorized: false,
      body: { email, password },
    });

    applyAuthPayload(payload);
    setPendingMfa(null);
    addToast('ACCOUNT CREATED SUCCESSFULLY.', 'success');
    return payload;
  }, [addToast, applyAuthPayload]);

  const logout = useCallback(async () => {
    try {
      await apiRequest('/auth/logout', {
        method: 'POST',
        retryOnUnauthorized: false,
      });
    } catch (error) {
      // Clear client state even if server revocation fails.
    } finally {
      clearAuthState();
      addToast('SESSION TERMINATED.', 'info');
    }
  }, [addToast, clearAuthState]);

  const value = useMemo(() => ({
    user,
    roles,
    isAuthenticated: Boolean(user && accessToken),
    isLoading,
    pendingMfa,
    login,
    register,
    logout,
    clearAuthState,
    accessToken,
  }), [accessToken, clearAuthState, isLoading, login, logout, pendingMfa, register, roles, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
