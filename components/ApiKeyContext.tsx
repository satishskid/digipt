import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { ApiKeyModal } from './ApiKeyModal';

interface ApiKeyContextType {
  apiKey: string | null;
  saveApiKey: (key: string) => void;
  openModal: () => void;
}

const ApiKeyContext = createContext<ApiKeyContextType | undefined>(undefined);

export const ApiKeyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [apiKey, setApiKey] = useState<string | null>(() => {
    try {
      return window.localStorage.getItem('geminiApiKey');
    } catch (e) {
      return null;
    }
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const saveApiKey = useCallback((key: string) => {
    if (key) {
        try {
            window.localStorage.setItem('geminiApiKey', key);
            setApiKey(key);
            setIsModalOpen(false);
        } catch (e) {
            console.error("Could not save API key to local storage", e);
        }
    }
  }, []);
  
  const openModal = useCallback(() => setIsModalOpen(true), []);

  const contextValue = { apiKey, saveApiKey, openModal };

  return (
    <ApiKeyContext.Provider value={contextValue}>
      {children}
      {isModalOpen && <ApiKeyModal onClose={() => setIsModalOpen(false)} onSave={saveApiKey} />}
    </ApiKeyContext.Provider>
  );
};

export const useApiKey = (): ApiKeyContextType => {
  const context = useContext(ApiKeyContext);
  if (context === undefined) {
    throw new Error('useApiKey must be used within an ApiKeyProvider');
  }
  return context;
};