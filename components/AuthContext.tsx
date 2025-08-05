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
  // Add to window for debugging
  (window as any).magic = magic;
  
  // Immediate test logging
  console.log('🔍 MAGIC INITIALIZATION TEST:');
  console.log('✅ Magic instance created:', magic);
  console.log('🔧 Magic user methods:', Object.getOwnPropertyNames(magic.user));
  console.log('🔑 API Key used:', MAGIC_PUBLISHABLE_KEY);
  
  // Test basic functionality immediately
  magic.user.isLoggedIn().then(isLoggedIn => {
    console.log('✅ isLoggedIn() test result:', isLoggedIn);
  }).catch(error => {
    console.error('❌ isLoggedIn() test failed:', error);
  });
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ email: string | null } | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      if (!magic) {
          console.log('Magic not initialized');
          setIsLoading(false);
          return;
      }
      
      console.log('Magic initialized, checking login status...', magic);
      
      try {
        const loggedIn = await magic.user.isLoggedIn();
        console.log('User logged in:', loggedIn);
        
        if (loggedIn) {
          console.log('Getting user info...');
          
          // Try the correct method for the current Magic SDK version
          try {
            const userData = await magic.user.getInfo();
            console.log('✅ getInfo() success:', userData);
            setUser({ email: userData.email });
            setIsLoggedIn(true);
          } catch (infoError) {
            console.error('❌ getInfo() failed:', infoError);
            // If getInfo fails, we'll need to handle this case
            setIsLoggedIn(false);
            setUser(null);
          }
        } else {
            setIsLoggedIn(false);
            setUser(null);
        }
      } catch (error) {
        console.error('Error checking login status:', error);
        console.error('Available magic.user methods:', Object.getOwnPropertyNames(magic.user));
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
