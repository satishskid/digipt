# 🔧 SKIDS App - Technical Operations Guide

**Project:** SKIDS Guidance Application  
**Tech Stack:** React 18 + TypeScript + Vite + Tailwind CSS v4 + Magic.link  
**Deployment:** Netlify + GitHub Integration  
**Status:** Production Ready  

---

## 🏗️ **ARCHITECTURE OVERVIEW**

### 📦 **Technology Stack**
```
Frontend Framework:  React 18.3.1 + TypeScript
Build Tool:          Vite 7.0.6
Styling:             Tailwind CSS v4 + PostCSS
Authentication:      Magic.link SDK
Routing:             React Router v6 (v7 ready)
Deployment:          Netlify (Static Site)
Version Control:     Git + GitHub
```

### 🔗 **Key Dependencies**
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.26.1",
  "magic-sdk": "^28.11.0",
  "tailwindcss": "^4.0.0-beta.10",
  "@google/generative-ai": "^0.21.0",
  "react-markdown": "^9.0.1"
}
```

---

## 🚀 **DEPLOYMENT ARCHITECTURE**

### 🌐 **Production Environment**
```
Source:           GitHub Repository (main branch)
Build Trigger:    Git push to main
Build Command:    npm run build
Build Output:     /dist directory
CDN:              Netlify Edge Network
SSL:              Auto-managed by Netlify
Domain:           *.netlify.app (+ custom domain)
```

### 🔄 **CI/CD Pipeline**
```
1. Developer pushes to main branch
2. Netlify detects git webhook
3. Netlify starts build process:
   - npm install (dependencies)
   - npm run build (Vite production build)
   - Deploy to CDN
4. Site goes live automatically
```

---

## ⚙️ **BUILD CONFIGURATION**

### 📄 **Key Configuration Files**

**vite.config.ts:**
```typescript
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser'
  }
})
```

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200  # SPA routing support
```

**tailwind.config.js:**
```javascript
// Tailwind CSS v4 configuration
export default {
  content: ['./**/*.{html,js,ts,jsx,tsx}']
}
```

---

## 🔐 **SECURITY CONFIGURATION**

### 🛡️ **Security Headers (netlify.toml)**
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### 🔑 **Magic.link Security**
```typescript
// API Key Configuration
const MAGIC_PUBLISHABLE_KEY = 'pk_live_D423B8C7EB41E595';

// Security Features:
// ✅ Passwordless authentication
// ✅ Email-based login
// ✅ Secure session management
// ✅ Auto-logout on tab close
```

---

## 🔍 **MONITORING & DEBUGGING**

### 🧪 **Built-in Debug Tools**

**1. Magic.link Test Component:**
```typescript
// Access via browser console
window.testMagicIntegration()
```

**2. Development Debug Panel:**
```
Location: Bottom-right corner in dev mode
Features: Magic.link integration testing
```

**3. Console Logging:**
```typescript
// AuthContext.tsx includes extensive logging:
console.log('🔍 MAGIC INITIALIZATION TEST:');
console.log('✅ Magic instance created:', magic);
console.log('🔧 Magic user methods:', methods);
```

### 📊 **Performance Monitoring**

**Bundle Analysis:**
```bash
# Check bundle size
npm run build
# Current size: ~519KB (optimized)
```

**Core Web Vitals Targets:**
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

---

## 🛠️ **DEVELOPMENT OPERATIONS**

### 🔧 **Local Development Setup**
```bash
# Prerequisites
node --version  # v18+ required
npm --version   # v9+ required

# Setup
git clone https://github.com/satishskid/digipt.git
cd digipt
npm install
npm run dev     # Starts dev server (usually port 4860+)
```

### 🧪 **Testing Commands**
```bash
# Development testing
npm run dev

# Production build testing
npm run build
npm run preview

# Magic.link testing
# Open browser to http://localhost:4173
# Use debug panel or browser console
```

### 🔄 **Deployment Commands**
```bash
# Deploy to production
git add .
git commit -m "feat: description"
git push origin main
# Netlify auto-deploys from main branch
```

---

## 🚨 **TROUBLESHOOTING GUIDE**

### ❌ **Common Build Issues**

**1. Build Fails - Dependency Issues:**
```bash
# Solution
rm -rf node_modules package-lock.json
npm install
npm run build
```

**2. Magic.link Authentication Errors:**
```bash
# Check API key validity
# Verify domain whitelist in Magic.link dashboard
# Test with debug tools
```

**3. Tailwind CSS Not Loading:**
```bash
# Verify postcss.config.js exists
# Check tailwind.config.js content array
# Restart dev server
```

### 🔧 **Production Issues**

**1. Site Not Loading:**
- Check Netlify deploy status
- Verify build logs
- Check for JS errors in browser console

**2. Authentication Not Working:**
- Verify Magic.link API key
- Check domain whitelist
- Test with different email providers

**3. Routing Issues (404 on refresh):**
- Verify netlify.toml redirects configuration
- Check SPA routing setup

---

## 📊 **PERFORMANCE OPTIMIZATION**

### ⚡ **Current Optimizations**
- ✅ Vite production build with tree-shaking
- ✅ Terser minification
- ✅ CSS optimization with Tailwind CSS purging
- ✅ React production build optimizations
- ✅ Netlify CDN and compression

### 🎯 **Future Optimization Opportunities**
```typescript
// Code splitting example
const LazyComponent = lazy(() => import('./Component'));

// Bundle splitting
// vite.config.ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom'],
        auth: ['magic-sdk']
      }
    }
  }
}
```

---

## 🔄 **BACKUP & RECOVERY**

### 💾 **Data Backup Strategy**
```
Source Code:      Git repository (GitHub)
Configuration:    Included in repository
Dependencies:     package.json + package-lock.json
Build Artifacts:  Regenerated from source
User Data:        Handled by Magic.link (external)
```

### 🔙 **Recovery Procedures**

**1. Complete Site Recovery:**
```bash
# Clone repository
git clone https://github.com/satishskid/digipt.git
cd digipt
npm install
npm run build
# Redeploy to Netlify
```

**2. Rollback to Previous Version:**
```bash
# Git rollback
git log --oneline  # Find commit hash
git reset --hard <commit-hash>
git push --force origin main
```

**3. Emergency Maintenance Page:**
```html
<!-- Place in /dist/index.html for emergency -->
<!DOCTYPE html>
<html>
<head><title>SKIDS - Maintenance</title></head>
<body>
  <h1>🔧 Maintenance in Progress</h1>
  <p>We'll be back shortly!</p>
</body>
</html>
```

---

## 📋 **ENVIRONMENT VARIABLES**

### 🔑 **Current Configuration**
```typescript
// All configuration is currently hardcoded
// For future use, consider environment variables:

// .env (not tracked in git)
VITE_MAGIC_API_KEY=pk_live_D423B8C7EB41E595
VITE_GEMINI_API_KEY=your_key_here
VITE_ENVIRONMENT=production

// Usage in code:
const apiKey = import.meta.env.VITE_MAGIC_API_KEY;
```

### 🚀 **Netlify Environment Variables**
```
Site Settings > Environment Variables:
- VITE_MAGIC_API_KEY: pk_live_D423B8C7EB41E595
- NODE_VERSION: 18
```

---

## 🔍 **LOG ANALYSIS**

### 📊 **Available Logs**

**1. Netlify Build Logs:**
```
Location: Netlify Dashboard > Deploys > Build log
Information: Build process, errors, warnings
Retention: 30 days
```

**2. Browser Console Logs:**
```
Magic.link initialization logs
Authentication flow logs
React development warnings
Performance metrics
```

**3. Network Logs:**
```
Magic.link API calls
Resource loading times
Failed requests
CORS issues
```

---

## 🔧 **MAINTENANCE SCHEDULES**

### ⏰ **Automated Maintenance**
- **Daily:** Netlify build status monitoring
- **Weekly:** Dependency vulnerability scans
- **Monthly:** Performance monitoring review

### 👥 **Manual Maintenance**
- **Weekly:** Review logs and errors
- **Monthly:** Update dependencies
- **Quarterly:** Security audit and API key rotation

---

## 📞 **SUPPORT ESCALATION**

### 🎯 **Issue Categories**

**Level 1 - Self Service:**
- Use debug tools
- Check build logs
- Verify configuration

**Level 2 - Documentation:**
- GitHub issues
- Vendor documentation
- Community forums

**Level 3 - Vendor Support:**
- Magic.link support
- Netlify support
- React/Vite communities

**Level 4 - Emergency:**
- Complete site outage
- Security breaches
- Data integrity issues

---

*Technical Guide Version: 1.0*  
*Last Updated: August 5, 2025*  
*Next Review: November 5, 2025*
