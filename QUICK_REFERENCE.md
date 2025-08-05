# 🚀 SKIDS App - Quick Reference Card

**Emergency Use Only** | **Print and Keep Handy**

---

## 🌐 **CRITICAL URLS**
- **Live Site:** [URL after Netlify deployment]
- **GitHub Repo:** https://github.com/satishskid/digipt.git
- **Netlify Dashboard:** https://app.netlify.com
- **Magic.link Dashboard:** https://dashboard.magic.link

---

## 🔑 **CRITICAL CREDENTIALS**
- **Magic.link API Key:** `pk_live_D423B8C7EB41E595`
- **GitHub Repo:** `satishskid/digipt`
- **Node Version:** `18.x`
- **Build Command:** `npm run build`

---

## ⚡ **QUICK HEALTH CHECK (2 minutes)**
```
1. Visit live site URL → Should load instantly
2. Try login with your email → Should send magic link
3. Check Netlify dashboard → Should show "Published"
4. Check Magic.link dashboard → Should show recent activity
```

---

## 🚨 **EMERGENCY PROCEDURES**

### 🔴 **SITE DOWN**
```bash
# 1. Check Netlify
Go to app.netlify.com → Check latest deploy

# 2. Quick rollback if needed
git log --oneline -5
git reset --hard <previous-commit>
git push --force origin main
```

### ⚠️ **AUTH NOT WORKING**
```
1. Check Magic.link dashboard
2. Verify API key: pk_live_D423B8C7EB41E595
3. Test with different email provider
4. Check browser console for errors
```

### 📱 **SITE SLOW**
```
1. Check Netlify edge locations
2. Test from different locations
3. Run Chrome Performance audit
4. Check bundle size: should be ~519KB
```

---

## 🔧 **QUICK COMMANDS**

### 🏠 **Local Testing**
```bash
cd /path/to/project
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Test production build
```

### 🌐 **Deployment**
```bash
git add .
git commit -m "fix: description"
git push origin main  # Auto-deploys via Netlify
```

### 🔍 **Debug Magic.link**
```javascript
// In browser console
window.testMagicIntegration()
```

---

## 📊 **DAILY CHECKLIST (5 minutes)**
- [ ] Visit live site - loads correctly?
- [ ] Check Netlify dashboard - any red indicators?
- [ ] Review Magic.link usage - normal activity?
- [ ] Any error emails from monitoring?

---

## 📞 **EMERGENCY CONTACTS**
- **Netlify Support:** https://netlify.com/support
- **Magic.link Support:** support@magic.link
- **Primary Dev:** [Add contact info]
- **Emergency:** [Add 24/7 contact]

---

## 🎯 **SUCCESS INDICATORS**
- ✅ Site loads in < 3 seconds
- ✅ Authentication works smoothly  
- ✅ All role flows functional
- ✅ Mobile responsive
- ✅ No console errors

---

## ❌ **RED FLAGS**
- 🚨 Site completely inaccessible
- 🚨 Authentication consistently failing
- 🚨 Build failures in Netlify
- 🚨 Multiple user complaints
- 🚨 Security alerts from vendors

---

**Print Date:** August 5, 2025  
**Version:** 1.0  
**Next Update:** Monthly
