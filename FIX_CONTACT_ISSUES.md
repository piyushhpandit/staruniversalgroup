# Fix Contact Form Issues

## Issues Fixed

### 1. ✅ Foundation Menu - Added Contact Button
- Added "Contact" to Foundation header menu
- Links to `/contact-foundation`
- Added to both desktop and mobile menus

### 2. ✅ Travel Menu - Added Contact Button  
- Added "Contact" to Travel header menu
- Links to `/contact-travel`
- Added to both desktop and mobile menus

### 3. ✅ API Endpoint Fix
- Updated `api.js` to ensure baseURL always includes `/api`
- Fixed issue where requests were going to `/contact/travel` instead of `/api/contact/travel`

## 🔧 What Was Changed

### Foundation Header
- Added `{ name: 'Contact', path: '/contact-foundation' }` to navItems
- Mobile menu button now says "Contact Us" instead of "Donate Now"

### Travel Header
- Added `{ name: 'Contact', path: '/contact-travel' }` to navItems
- Mobile menu button now says "Contact Us" instead of "Book Now"

### API Configuration
- Updated `src/api/api.js` to ensure baseURL always ends with `/api`
- This fixes the 404 error for travel contact form

## 🚀 After Deployment

### Update Frontend API URL

If your backend is deployed at `https://staruniversalgroup-be.onrender.com`, you need to:

1. **Create `.env` file in project root:**
   ```env
   VITE_API_BASE_URL=https://staruniversalgroup-be.onrender.com/api
   ```

2. **Or update `src/api/api.js` directly:**
   ```javascript
   baseURL: "https://staruniversalgroup-be.onrender.com/api"
   ```

3. **Rebuild and redeploy:**
   ```bash
   npm run build
   npm run deploy
   ```

## ✅ Verification

After redeploying:

1. **Foundation Menu:**
   - Should show "Contact" in menu
   - Clicking should go to `/contact-foundation`
   - Form should submit successfully

2. **Travel Menu:**
   - Should show "Contact" in menu
   - Clicking should go to `/contact-travel`
   - Form should submit successfully (no 404 error)

3. **All Contact Forms:**
   - Event: `/contact-event` ✅
   - Foundation: `/contact-foundation` ✅
   - Travel: `/contact-travel` ✅

## 🧪 Test Locally First

1. **Start backend:**
   ```bash
   cd server
   npm start
   ```

2. **Start frontend:**
   ```bash
   npm run dev
   ```

3. **Test all three forms:**
   - Visit `/contact-event` - should work
   - Visit `/contact-foundation` - should work
   - Visit `/contact-travel` - should work (no 404)

4. **Check Network tab:**
   - Requests should go to `http://localhost:4000/api/contact/...`
   - Should return 200 status, not 404

## 📝 Summary

- ✅ Foundation menu now has Contact button
- ✅ Travel menu now has Contact button
- ✅ API endpoint fixed (always includes `/api`)
- ✅ All three contact forms should work

**Next step:** Update production API URL and redeploy frontend!

