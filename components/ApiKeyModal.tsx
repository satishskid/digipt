import React, { useState } from 'react';
import { Icon } from './Icon';

interface ApiKeyModalProps {
  onClose: () => void;
  onSave: (key: string) => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ onClose, onSave }) => {
  const [key, setKey] = useState('');

  const handleSave = () => {
    if (key.trim()) {
      onSave(key.trim());
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900 bg-opacity-70 flex items-center justify-center z-50 animate-fade-in p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-center">
          <Icon icon="key" className="w-12 h-12 mx-auto text-primary-500"/>
          <h2 className="text-2xl font-bold text-slate-900 mt-4">Unlock AI Features</h2>
          <p className="text-slate-500 mt-2">To use the Specialist Chat and create custom plans, please provide your own Google Gemini API key.</p>
        </div>

        <div className="mt-6">
          <label htmlFor="api-key-input" className="block text-sm font-medium text-slate-700">Your Gemini API Key</label>
          <input
            id="api-key-input"
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="mt-1 block w-full px-4 py-2 text-slate-900 bg-slate-50 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="Enter your API key"
          />
        </div>
        
        <div className="mt-6 text-sm bg-slate-100 p-4 rounded-lg">
          <h4 className="font-semibold text-slate-800">How to get a free API key:</h4>
          <ol className="list-decimal list-inside mt-2 space-y-1 text-slate-600">
            <li>Go to <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-semibold hover:underline">Google AI Studio</a>.</li>
            <li>Click "Create API key in new project".</li>
            <li>Copy your new API key and paste it above.</li>
          </ol>
        </div>

        <div className="mt-8 flex justify-end space-x-3">
          <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-md hover:bg-slate-200 transition-colors">
            Cancel
          </button>
          <button onClick={handleSave} disabled={!key.trim()} className="px-6 py-2 text-sm font-medium text-white bg-primary-600 rounded-md shadow-sm hover:bg-primary-700 disabled:bg-primary-300 disabled:cursor-not-allowed transition-colors">
            Save & Unlock
          </button>
        </div>
      </div>
    </div>
  );
};