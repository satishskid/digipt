import React, { useState } from 'react';

export const MagicTestComponent: React.FC = () => {
  const [testResult, setTestResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  // Only show in development mode - hide in production
  const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  
  if (!isDevelopment) {
    return null;
  }

  const runMagicTest = async () => {
    setIsLoading(true);
    setTestResult('');
    
    try {
      const magic = (window as any).magic;
      
      if (!magic) {
        setTestResult('❌ Magic not initialized');
        return;
      }

      let result = '🔍 Magic.link Integration Test Results:\n\n';
      
      // Test 1: Basic initialization
      result += '✅ Magic instance found\n';
      result += `📋 Magic version: ${magic.version || 'unknown'}\n`;
      
      // Test 2: Domain check
      result += `🌐 Current domain: ${window.location.origin}\n`;
      result += `⚠️ Ensure this domain is in Magic.link dashboard\n\n`;
      
      // Test 3: Available methods
      const userMethods = Object.getOwnPropertyNames(magic.user);
      result += `🔧 Available user methods: ${userMethods.join(', ')}\n\n`;
      
      // Test 4: isLoggedIn test
      try {
        const isLoggedIn = await magic.user.isLoggedIn();
        result += `✅ isLoggedIn() works: ${isLoggedIn}\n`;
        
        // Test 5: If logged in, get user info
        if (isLoggedIn) {
          try {
            const userInfo = await magic.user.getInfo();
            result += `✅ getInfo() works: ${JSON.stringify(userInfo, null, 2)}\n`;
          } catch (infoError) {
            result += `⚠️ getInfo() failed: ${(infoError as Error).message}\n`;
            
            // Try getMetadata as fallback
            try {
              const userData = await magic.user.getMetadata();
              result += `✅ getMetadata() works: ${JSON.stringify(userData, null, 2)}\n`;
            } catch (metadataError) {
              result += `❌ getMetadata() also failed: ${(metadataError as Error).message}\n`;
            }
          }
        } else {
          result += '🔄 User not logged in - test login to verify full functionality\n';
        }
        
      } catch (error) {
        result += `❌ isLoggedIn() failed: ${(error as Error).message}\n`;
      }
      
      // Test 6: API key validation (indirect)
      result += '\n🔑 API Key Status:\n';
      try {
        // Try to create a test session (this will validate the API key)
        await magic.user.isLoggedIn();
        result += '✅ API key appears to be valid\n';
      } catch (error) {
        const errorMsg = (error as Error).message;
        if (errorMsg.includes('API key') || errorMsg.includes('unauthorized')) {
          result += '❌ API key appears to be invalid\n';
        } else {
          result += '⚠️ Cannot determine API key validity\n';
        }
      }

      // Test 7: Domain configuration check
      result += '\n🌐 Domain Configuration:\n';
      result += 'Required domains in Magic.link dashboard:\n';
      result += '• https://digiadol.netlify.app\n';
      result += '• https://legendary-pothos-de8a43.netlify.app\n';
      result += `• ${window.location.origin} (current)\n`;
      
      setTestResult(result);
      
    } catch (error) {
      setTestResult(`❌ Test failed: ${(error as Error).message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-dashed border-gray-300 max-w-md">
        <h3 className="font-bold text-sm mb-2">🔧 Magic.link Debug Tool</h3>
        <button 
          onClick={runMagicTest}
          disabled={isLoading}
          className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 disabled:opacity-50"
        >
          {isLoading ? 'Testing...' : 'Test Magic Integration'}
        </button>
        
        {testResult && (
          <div className="mt-3 p-2 bg-gray-100 rounded text-xs font-mono whitespace-pre-wrap max-h-40 overflow-y-auto">
            {testResult}
          </div>
        )}
      </div>
    </div>
  );
};
