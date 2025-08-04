import React, { createContext, useState, useContext, ReactNode } from 'react';
import type { UserRole } from '../types';

interface RoleContextType {
  role: UserRole | null;
  setRole: (role: UserRole) => void;
  clearRole: () => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const RoleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [role, setRoleState] = useState<UserRole | null>(() => {
    try {
      const storedRole = window.localStorage.getItem('userRole');
      return storedRole ? (storedRole as UserRole) : null;
    } catch (error) {
      console.warn('Could not read user role from localStorage', error);
      return null;
    }
  });

  const setRole = (newRole: UserRole) => {
    try {
      window.localStorage.setItem('userRole', newRole);
      // When a new role is explicitly set, we should show the onboarding again for that session.
      window.sessionStorage.removeItem('hasOnboarded');
      setRoleState(newRole);
    } catch (error) {
      console.warn('Could not save user role to localStorage', error);
      setRoleState(newRole); // Still set in state for current session
    }
  };

  const clearRole = () => {
    try {
      window.localStorage.removeItem('userRole');
      window.sessionStorage.removeItem('hasOnboarded');
    } catch (error) {
      console.warn('Could not clear user role from localStorage', error);
    } finally {
      setRoleState(null);
    }
  };

  const contextValue = { role, setRole, clearRole };

  return (
    <RoleContext.Provider value={contextValue}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = (): RoleContextType => {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};
