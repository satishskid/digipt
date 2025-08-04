import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Magic } from 'magic-sdk';

interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: { email: string | null } | null;
  login: (email: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// IMPORTANT: Replace this with your own Magic.link publishable API key!
const MAGIC_PUBLISHABLE_KEY = 'pk_live_D423B8C7EB41E595';

let magic: Magic | null = null;
if (typeof window !== 'undefined') {
  magic = new Magic(MAGIC_PUBLISHABLE_KEY);
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ email: string | null } | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      if (!magic) {
          setIsLoading(false);
          return;
      }
      try {
        const loggedIn = await magic.user.isLoggedIn();
        if (loggedIn) {
          const userData = await magic.user.getInfo();
          setUser({ email: userData.email });
          setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
            setUser(null);
        }
      } catch (error) {
        console.error('Error checking login status:', error);
        setIsLoggedIn(false);
        setUser(null);
      } finally {
          setIsLoading(false);
      }
    };
    checkLoginStatus();
  }, []);

  const login = async (email: string) => {
    if (!magic) return;
    try {
      setIsLoading(true);
      await magic.auth.loginWithMagicLink({ email });
      const userData = await magic.user.getInfo();
      setUser({ email: userData.email });
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login failed:', error);
      throw error; // Re-throw to be caught by the calling component
    } finally {
        setIsLoading(false);
    }
  };

  const logout = async () => {
    if (!magic) return;
    try {
      await magic.user.logout();
      setUser(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const contextValue = { isLoggedIn, user, login, logout, isLoading };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
