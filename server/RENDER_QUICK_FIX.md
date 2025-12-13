# Quick Fix for Your Render Settings

## ⚠️ What You Need to Change Right Now

Looking at your Render form, here are the exact changes:

### 1. Root Directory (Currently Empty)
**Change to:**
```
server
```

### 2. Build Command (Currently: `$ npm install; npm run build`)
**Change to:**
```
npm install
```
*(Remove `npm run build` - your server doesn't need building, just installing dependencies)*

### 3. Start Command (Currently: `$ yarn start`)
**Change to:**
```
npm start
```
*(Change from `yarn` to `npm` - your package.json uses npm)*

---

## ✅ Correct Settings Summary

| Field | Current (Wrong) | Should Be |
|-------|----------------|-----------|
| **Root Directory** | *(empty)* | `server` |
| **Build Command** | `$ npm install; npm run build` | `npm install` |
| **Start Command** | `$ yarn start` | `npm start` |

---

## 🎯 Quick Steps

1. **Root Directory field:** Type `server`
2. **Build Command field:** Delete everything, type `npm install`
3. **Start Command field:** Delete everything, type `npm start`
4. Scroll down and add environment variables
5. Click "Create Web Service"

---

## 📝 Environment Variables to Add

After fixing the above, scroll down and add:

- `EMAIL_USER` = your-email@gmail.com
- `EMAIL_PASSWORD` = your-gmail-app-password
- `RECIPIENT_EMAIL` = your-email@gmail.com
- `SMTP_HOST` = smtp.gmail.com
- `SMTP_PORT` = 587

---

**That's it!** Make these 3 changes and you're good to go! 🚀

