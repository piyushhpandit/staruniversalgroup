# Server Deployment Guide

This guide covers multiple ways to host your `server.js` backend.

## 🚀 Quick Deployment Options

### Option 1: Railway (Recommended - Easiest)

**Best for:** Quick deployment, automatic HTTPS, free tier available

#### Steps:

1. **Create Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your `staruniversal` repository

3. **Configure Project**
   - Railway will auto-detect Node.js
   - Set **Root Directory** to `server`
   - Set **Start Command** to `npm start`

4. **Add Environment Variables**
   - Go to "Variables" tab
   - Add all variables from your `.env`:
     ```
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASSWORD=your-app-password
     RECIPIENT_EMAIL=your-email@gmail.com
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     PORT=4000
     ```

5. **Deploy**
   - Railway will automatically deploy
   - Get your URL: `https://your-app.railway.app`

6. **Update Frontend**
   - Update `src/api/api.js`:
     ```javascript
     baseURL: "https://your-app.railway.app/api"
     ```

---

### Option 2: Render (Free Tier Available)

**Best for:** Free hosting, easy setup

#### Steps:

1. **Create Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Create Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

3. **Configure Service**
   - **Name:** `staruniversal-api`
   - **Root Directory:** `server`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`

4. **Add Environment Variables**
   - Scroll to "Environment Variables"
   - Add all your `.env` variables

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment (2-3 minutes)
   - Get your URL: `https://staruniversal-api.onrender.com`

6. **Update Frontend**
   ```javascript
   baseURL: "https://staruniversal-api.onrender.com/api"
   ```

**Note:** Free tier spins down after 15 minutes of inactivity. First request may take 30-60 seconds.

---

### Option 3: Heroku (Classic Option)

**Best for:** Reliable, well-documented

#### Steps:

1. **Install Heroku CLI**
   ```bash
   # macOS
   brew tap heroku/brew && brew install heroku
   
   # Or download from: https://devcenter.heroku.com/articles/heroku-cli
   ```

2. **Login**
   ```bash
   heroku login
   ```

3. **Create App**
   ```bash
   cd server
   heroku create staruniversal-api
   ```

4. **Add Environment Variables**
   ```bash
   heroku config:set EMAIL_USER=your-email@gmail.com
   heroku config:set EMAIL_PASSWORD=your-app-password
   heroku config:set RECIPIENT_EMAIL=your-email@gmail.com
   heroku config:set SMTP_HOST=smtp.gmail.com
   heroku config:set SMTP_PORT=587
   ```

5. **Create Procfile**
   ```bash
   echo "web: node server.js" > Procfile
   ```

6. **Deploy**
   ```bash
   git add .
   git commit -m "Add server files"
   git push heroku main
   ```

7. **Check Status**
   ```bash
   heroku logs --tail
   ```

8. **Get URL**
   ```bash
   heroku info
   # URL will be: https://staruniversal-api.herokuapp.com
   ```

---

### Option 4: Vercel (Serverless Functions)

**Best for:** Serverless, fast, free tier

#### Steps:

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Create `vercel.json` in server folder**
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "server.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "server.js"
       }
     ]
     "env": {
       "EMAIL_USER": "@email_user",
       "EMAIL_PASSWORD": "@email_password",
       "RECIPIENT_EMAIL": "@recipient_email"
     }
   }
   ```

3. **Deploy**
   ```bash
   cd server
   vercel
   ```

4. **Add Environment Variables**
   - Go to Vercel dashboard
   - Project → Settings → Environment Variables
   - Add all variables

**Note:** Vercel is serverless, so long-running connections may timeout. Consider Railway or Render for this use case.

---

### Option 5: DigitalOcean App Platform

**Best for:** Production-ready, scalable

#### Steps:

1. **Create Account**
   - Go to [digitalocean.com](https://www.digitalocean.com)

2. **Create App**
   - Click "Create" → "App"
   - Connect GitHub repository

3. **Configure**
   - **Type:** Web Service
   - **Source Directory:** `server`
   - **Build Command:** `npm install`
   - **Run Command:** `npm start`

4. **Add Environment Variables**
   - Add all `.env` variables

5. **Deploy**
   - Click "Create Resources"
   - Get URL: `https://your-app.ondigitalocean.app`

**Pricing:** Starts at $5/month

---

### Option 6: Your Own VPS/Server

**Best for:** Full control, custom setup

#### Steps:

1. **Get a VPS**
   - DigitalOcean Droplet ($5/month)
   - Linode
   - AWS EC2
   - Any Linux server

2. **SSH into Server**
   ```bash
   ssh root@your-server-ip
   ```

3. **Install Node.js**
   ```bash
   # Using NodeSource
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Clone Repository**
   ```bash
   git clone https://github.com/your-username/staruniversal.git
   cd staruniversal/server
   npm install
   ```

5. **Create .env File**
   ```bash
   nano .env
   # Add all your environment variables
   ```

6. **Install PM2 (Process Manager)**
   ```bash
   npm install -g pm2
   pm2 start server.js --name staruniversal-api
   pm2 save
   pm2 startup
   ```

7. **Set Up Nginx (Reverse Proxy)**
   ```bash
   sudo apt install nginx
   sudo nano /etc/nginx/sites-available/staruniversal
   ```

   Add this configuration:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:4000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/staruniversal /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

8. **Set Up SSL (Let's Encrypt)**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

---

## 🔧 Update Frontend After Deployment

After deploying your backend, update the frontend to use the new URL:

### Option 1: Environment Variable (Recommended)

1. **Create `.env` in project root:**
   ```env
   VITE_API_BASE_URL=https://your-backend-url.com/api
   ```

2. **Update `src/api/api.js`:**
   ```javascript
   const api = axios.create({
     baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api",
     headers: {
       "Content-Type": "application/json",
     },
     timeout: 10000,
   });
   ```

3. **Rebuild and deploy frontend:**
   ```bash
   npm run build
   npm run deploy
   ```

### Option 2: Direct Update

Update `src/api/api.js` directly:
```javascript
baseURL: "https://your-backend-url.com/api"
```

---

## 📋 Deployment Checklist

Before deploying:

- [ ] All environment variables are set
- [ ] Gmail App Password is configured (if using Gmail)
- [ ] Server runs locally without errors
- [ ] `.env` file is NOT committed to git
- [ ] Frontend API URL is updated
- [ ] CORS is enabled (already done in server.js)

After deploying:

- [ ] Test health endpoint: `https://your-url.com/api/health`
- [ ] Test contact form submission
- [ ] Check email inbox for test submission
- [ ] Monitor server logs for errors
- [ ] Update frontend API URL
- [ ] Test from production frontend

---

## 🆘 Troubleshooting

### Server won't start
- Check environment variables are set
- Check Node.js version (needs 18+)
- Check server logs: `heroku logs` or `pm2 logs`

### Emails not sending
- Verify SMTP credentials
- Check server logs for SMTP errors
- Test SMTP connection locally first

### CORS errors
- Backend already has CORS enabled
- Make sure frontend URL matches backend CORS settings
- Check browser console for specific error

### Timeout errors
- Some free tiers have request timeouts
- Consider upgrading or using a different provider
- Add timeout handling in frontend

---

## 💰 Cost Comparison

| Platform | Free Tier | Paid Starts At | Best For |
|----------|-----------|----------------|----------|
| Railway | ✅ Yes | $5/month | Easiest setup |
| Render | ✅ Yes | $7/month | Free tier with limits |
| Heroku | ❌ No | $7/month | Classic, reliable |
| Vercel | ✅ Yes | $20/month | Serverless |
| DigitalOcean | ❌ No | $5/month | Production-ready |
| VPS | ❌ No | $5/month | Full control |

---

## 🎯 Recommended for You

**For Quick Start:** Railway or Render (both have free tiers)

**For Production:** DigitalOcean App Platform or VPS

**For Learning:** Start with Railway (easiest), then move to VPS for more control

---

## 📞 Need Help?

1. Check server logs
2. Verify environment variables
3. Test locally first
4. Check platform-specific documentation

