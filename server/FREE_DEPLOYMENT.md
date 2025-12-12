# Free Server Deployment Guide

Here are the **best FREE options** to deploy your server.js:

## 🥇 Option 1: Railway (Easiest - Recommended)

**Free Tier:** $5 credit/month (enough for small apps)

### Step-by-Step:

1. **Sign Up**
   - Go to [railway.app](https://railway.app)
   - Click "Start a New Project"
   - Sign up with GitHub (free)

2. **Deploy**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your `staruniversal` repository
   - Railway will auto-detect it's Node.js

3. **Configure**
   - Click on your service
   - Go to "Settings" tab
   - Set **Root Directory** to: `server`
   - Set **Start Command** to: `npm start`

4. **Add Environment Variables**
   - Go to "Variables" tab
   - Click "New Variable"
   - Add each variable:
     ```
     EMAIL_USER = your-email@gmail.com
     EMAIL_PASSWORD = your-app-password
     RECIPIENT_EMAIL = your-email@gmail.com
     SMTP_HOST = smtp.gmail.com
     SMTP_PORT = 587
     PORT = 4000
     ```

5. **Deploy**
   - Railway will automatically deploy
   - Wait 1-2 minutes
   - Click "Settings" → "Generate Domain"
   - Copy your URL: `https://your-app.railway.app`

6. **Update Frontend**
   - Update `src/api/api.js`:
     ```javascript
     baseURL: "https://your-app.railway.app/api"
     ```

**That's it!** Your server is live and free! 🎉

---

## 🥈 Option 2: Render (100% Free)

**Free Tier:** Always free, but spins down after 15 min inactivity

### Step-by-Step:

1. **Sign Up**
   - Go to [render.com](https://render.com)
   - Click "Get Started for Free"
   - Sign up with GitHub

2. **Create Web Service**
   - Click "New +" button
   - Select "Web Service"
   - Connect your GitHub repository
   - Select `staruniversal` repo

3. **Configure**
   - **Name:** `staruniversal-api` (or any name)
   - **Root Directory:** `server`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`

4. **Add Environment Variables**
   - Scroll down to "Environment Variables"
   - Click "Add Environment Variable"
   - Add each one:
     ```
     EMAIL_USER = your-email@gmail.com
     EMAIL_PASSWORD = your-app-password
     RECIPIENT_EMAIL = your-email@gmail.com
     SMTP_HOST = smtp.gmail.com
     SMTP_PORT = 587
     PORT = 4000
     ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait 2-3 minutes for first deployment
   - Get your URL: `https://staruniversal-api.onrender.com`

6. **Update Frontend**
   ```javascript
   baseURL: "https://staruniversal-api.onrender.com/api"
   ```

**Note:** Free tier spins down after 15 min. First request after spin-down takes 30-60 seconds.

---

## 🥉 Option 3: Fly.io (Free Tier)

**Free Tier:** 3 shared VMs, 3GB storage

### Step-by-Step:

1. **Install Fly CLI**
   ```bash
   # macOS
   curl -L https://fly.io/install.sh | sh
   ```

2. **Login**
   ```bash
   fly auth login
   ```

3. **Initialize**
   ```bash
   cd server
   fly launch
   ```
   - Follow prompts
   - Don't deploy yet (say no)

4. **Create `fly.toml`** (if not created)
   ```toml
   app = "staruniversal-api"
   primary_region = "iad"

   [build]

   [http_service]
     internal_port = 4000
     force_https = true
     auto_stop_machines = true
     auto_start_machines = true
     min_machines_running = 0

   [[vm]]
     memory_mb = 256
   ```

5. **Set Secrets (Environment Variables)**
   ```bash
   fly secrets set EMAIL_USER=your-email@gmail.com
   fly secrets set EMAIL_PASSWORD=your-app-password
   fly secrets set RECIPIENT_EMAIL=your-email@gmail.com
   fly secrets set SMTP_HOST=smtp.gmail.com
   fly secrets set SMTP_PORT=587
   fly secrets set PORT=4000
   ```

6. **Deploy**
   ```bash
   fly deploy
   ```

7. **Get URL**
   ```bash
   fly status
   # URL will be: https://staruniversal-api.fly.dev
   ```

---

## 🆓 Option 4: Cyclic.sh (Serverless - Free)

**Free Tier:** Always free, serverless

### Step-by-Step:

1. **Sign Up**
   - Go to [cyclic.sh](https://cyclic.sh)
   - Sign up with GitHub

2. **Deploy**
   - Click "Deploy Now"
   - Connect GitHub repo
   - Select `staruniversal` repository
   - Set **Root Directory:** `server`

3. **Add Environment Variables**
   - Go to "Environment" tab
   - Add all variables

4. **Deploy**
   - Click "Deploy"
   - Get URL: `https://your-app.cyclic.app`

---

## 📊 Free Tier Comparison

| Platform | Free Tier | Spin Down | Best For |
|----------|-----------|-----------|----------|
| **Railway** | $5 credit/month | ❌ No | Easiest, always on |
| **Render** | Always free | ✅ Yes (15 min) | Simple, reliable |
| **Fly.io** | 3 VMs free | ✅ Yes (auto) | Fast, global |
| **Cyclic** | Always free | ❌ No | Serverless |

---

## 🎯 My Recommendation

**For You: Use Railway** because:
- ✅ Easiest setup (5 minutes)
- ✅ No spin-down (always running)
- ✅ $5 free credit/month (enough for your app)
- ✅ Automatic HTTPS
- ✅ GitHub integration

**Backup Option: Render** if Railway credit runs out (it's 100% free but spins down)

---

## 🚀 Quick Start with Railway (5 Minutes)

1. Go to [railway.app](https://railway.app) → Sign up with GitHub
2. New Project → Deploy from GitHub → Select repo
3. Settings → Root Directory: `server`
4. Variables → Add all your `.env` variables
5. Deploy → Copy URL → Update frontend

**Done!** 🎉

---

## 🔧 After Deployment

### Update Frontend API URL

**Option 1: Direct Update**
Edit `src/api/api.js`:
```javascript
baseURL: "https://your-railway-url.railway.app/api"
```

**Option 2: Environment Variable (Better)**
1. Create `.env` in project root:
   ```env
   VITE_API_BASE_URL=https://your-railway-url.railway.app/api
   ```

2. Update `src/api/api.js`:
   ```javascript
   baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api"
   ```

3. Rebuild:
   ```bash
   npm run build
   npm run deploy
   ```

---

## ✅ Test Your Deployment

1. **Health Check:**
   Visit: `https://your-url.com/api/health`
   Should return: `{"status":"ok","message":"Server is running"}`

2. **Test Contact Form:**
   - Go to your frontend
   - Fill out a contact form
   - Submit
   - Check your email inbox!

---

## 🆘 Troubleshooting

### Server not starting?
- Check environment variables are set correctly
- Check Railway/Render logs for errors
- Make sure Root Directory is `server`

### Emails not sending?
- Verify Gmail App Password is correct
- Check server logs
- Test SMTP connection locally first

### CORS errors?
- Backend already has CORS enabled
- Make sure frontend URL matches backend URL

---

## 💡 Pro Tips

1. **Keep server running:** Railway doesn't spin down (best for free tier)
2. **Monitor usage:** Check Railway dashboard for credit usage
3. **Backup option:** Set up Render as backup (100% free)
4. **Test locally first:** Always test server locally before deploying

---

## 📝 Quick Checklist

- [ ] Choose platform (Railway recommended)
- [ ] Sign up and connect GitHub
- [ ] Configure root directory: `server`
- [ ] Add all environment variables
- [ ] Deploy and get URL
- [ ] Update frontend API URL
- [ ] Test health endpoint
- [ ] Test contact form
- [ ] Check email inbox

**You're all set!** Your server is now live and free! 🚀

