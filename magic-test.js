// Simple Magic.link test - you can run this in the browser console
// or add it temporarily to a component

async function testMagicIntegration() {
  console.log('🔍 Testing Magic.link integration...');
  
  // Check if Magic is initialized
  if (typeof window.magic === 'undefined') {
    console.error('❌ Magic not found on window object');
    return false;
  }
  
  const magic = window.magic;
  
  try {
    // Test 1: Check if Magic instance is valid
    console.log('✅ Magic instance found:', magic);
    
    // Test 2: Check available methods
    console.log('🔧 Available Magic methods:', Object.getOwnPropertyNames(magic));
    console.log('🔧 Available user methods:', Object.getOwnPropertyNames(magic.user));
    
    // Test 3: Test isLoggedIn (should not throw error)
    const isLoggedIn = await magic.user.isLoggedIn();
    console.log('✅ isLoggedIn() works:', isLoggedIn);
    
    // Test 4: If logged in, try to get user info
    if (isLoggedIn) {
      try {
        const userInfo = await magic.user.getInfo();
        console.log('✅ User info:', userInfo);
      } catch (infoError) {
        console.log('⚠️ getInfo() error, trying getMetadata():', infoError.message);
        try {
          const userData = await magic.user.getMetadata();
          console.log('✅ User metadata:', userData);
        } catch (metadataError) {
          console.error('❌ Both getInfo() and getMetadata() failed:', metadataError);
        }
      }
    }
    
    return true;
  } catch (error) {
    console.error('❌ Magic integration test failed:', error);
    return false;
  }
}

// Make it available globally for testing
window.testMagicIntegration = testMagicIntegration;

console.log('🔧 Magic test function added. Run window.testMagicIntegration() in console to test.');
