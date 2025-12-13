# Deploying Server.js to Render - Step by Step

## ⚠️ Important: You Need to Configure Settings

**Just connecting the repo is NOT enough!** You need to tell Render:
1. Where your server code is (`server/` folder)
2. How to build it (`npm install`)
3. How to start it (`npm start`)

---

## 🚀 Step-by-Step Render Deployment

### Step 1: Sign Up / Login to Render

1. Go to [render.com](https://render.com)
2. Sign up with GitHub (free)

### Step 2: Create New Web Service

1. Click the **"New +"** button (top right)
2. Select **"Web Service"**
3. Connect your GitHub account (if not already connected)
4. Select your repository: **`staruniversalgroup`** (or `staruniversal`)

### Step 3: Configure Settings ⚠️ THIS IS CRITICAL

Render will show a form. Fill it like this:

#### Basic Settings:
- **Name:** `staruniversal-api` (or any name you like)
- **Region:** Choose closest to you (e.g., `Oregon (US West)`)
- **Branch:** `main` (or `master`)

#### Build & Deploy Settings:

**⚠️ IMPORTANT - These settings are crucial:**

1. **Root Directory:** 
   ```
   server
   ```
   *(This tells Render your server code is in the `server/` folder, not root)*

2. **Environment:** 
   ```
   Node
   ```
   *(Select from dropdown)*

3. **Build Command:**
   ```
   npm install
   ```
   *(This installs dependencies)*

4. **Start Command:**
   ```
   npm start
   ```
   *(This runs `node server.js` from package.json)*

### Step 4: Add Environment Variables

Scroll down to **"Environment Variables"** section and click **"Add Environment Variable"**

Add each one:

```
EMAIL_USER = your-email@gmail.com
```

```
EMAIL_PASSWORD = your-gmail-app-password
```

```
RECIPIENT_EMAIL = your-email@gmail.com
```

```
SMTP_HOST = smtp.gmail.com
```

```
SMTP_PORT = 587
```

```
PORT = 4000
```

*(Render will automatically set PORT, but you can add it anyway)*

### Step 5: Choose Plan

- Select **"Free"** plan
- Click **"Create Web Service"**

### Step 6: Wait for Deployment

- Render will start building (takes 2-3 minutes)
- You'll see logs in real-time
- Wait for: **"Your service is live"** message

### Step 7: Get Your URL

Once deployed, you'll see:
- **URL:** `https://staruniversal-api.onrender.com` (or similar)
- Copy this URL!

---

## ✅ Verify It's Working

### 1. Test Health Endpoint

Visit in browser:
```
https://your-app-name.onrender.com/api/health
```

Should return:
```json
{"status":"ok","message":"Server is running"}
```

### 2. Check Logs

In Render dashboard:
- Click on your service
- Go to **"Logs"** tab
- Should see: `✅ Server is ready to send emails`
- Should see: `🚀 Server running on port 4000`

---

## 🔧 Update Frontend to Use Backend

After deployment, update your frontend:

### Option 1: Update `src/api/api.js` directly

```javascript
const api = axios.create({
  baseURL: "https://your-app-name.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
```

### Option 2: Use Environment Variable (Better)

1. Create `.env` in project root:
   ```env
   VITE_API_BASE_URL=https://your-app-name.onrender.com/api
   ```

2. The code already uses this (in `src/api/api.js`)

3. Rebuild and redeploy frontend:
   ```bash
   npm run build
   npm run deploy
   ```

---

## 📋 Render Settings Summary

Here's what you need to set:

| Setting | Value |
|---------|-------|
| **Name** | `staruniversal-api` |
| **Root Directory** | `server` ⚠️ |
| **Environment** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Plan** | `Free` |

---

## ⚠️ Common Mistakes

### ❌ Wrong: Not setting Root Directory
- Render will look for `package.json` in root
- Your `package.json` is in `server/` folder
- **Result:** Build fails

### ❌ Wrong: Wrong Start Command
- Using `node server.js` directly
- Should use `npm start` (which runs from package.json)
- **Result:** Server won't start

### ❌ Wrong: Missing Environment Variables
- Server needs email credentials
- **Result:** Server starts but emails won't send

### ✅ Correct: All settings configured
- Root Directory: `server`
- Build: `npm install`
- Start: `npm start`
- All env variables added

---

## 🔄 After First Deployment

### Automatic Deploys

Render will automatically redeploy when you:
- Push to `main` branch
- Update code in `server/` folder

### Manual Redeploy

1. Go to Render dashboard
2. Click on your service
3. Click **"Manual Deploy"** → **"Deploy latest commit"**

---

## 🐛 Troubleshooting

### Build Fails?

**Check:**
1. Root Directory is set to `server`
2. Build command is `npm install`
3. Check logs for specific error

### Server Won't Start?

**Check:**
1. Start command is `npm start`
2. All environment variables are set
3. Check logs for errors

### Emails Not Sending?

**Check:**
1. Environment variables are correct
2. Gmail App Password is valid
3. Check server logs for SMTP errors

### CORS Errors?

**Already fixed!** Server has CORS enabled. If still getting errors:
- Make sure frontend URL matches backend URL
- Check browser console for specific error

---

## 📊 Render Free Tier Limits

- ✅ Always free
- ⚠️ Spins down after 15 minutes of inactivity
- ⚠️ First request after spin-down takes 30-60 seconds
- ✅ Automatic HTTPS
- ✅ Custom domain support

**Tip:** For always-on service, consider Railway ($5 credit/month)

---

## ✅ Quick Checklist

Before deploying:
- [ ] Root Directory set to `server`
- [ ] Build Command: `npm install`
- [ ] Start Command: `npm start`
- [ ] All environment variables added
- [ ] Gmail App Password ready

After deploying:
- [ ] Health endpoint works
- [ ] Server logs show "ready to send emails"
- [ ] Frontend API URL updated
- [ ] Test contact form submission
- [ ] Check email inbox

---

## 🎯 Summary

**Answer to your question:**

**NO, just connecting the repo is NOT enough!**

You MUST configure:
1. ✅ **Root Directory:** `server` (most important!)
2. ✅ **Build Command:** `npm install`
3. ✅ **Start Command:** `npm start`
4. ✅ **Environment Variables:** All email settings

Without these settings, Render won't know where your server code is or how to run it!

---

## 🚀 Ready to Deploy?

1. Go to [render.com](https://render.com)
2. New Web Service
3. Connect repo
4. **Set Root Directory to `server`** ⚠️
5. Add environment variables
6. Deploy!

Good luck! 🎉

