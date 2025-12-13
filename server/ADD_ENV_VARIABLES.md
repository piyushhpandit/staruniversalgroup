# How to Add Environment Variables to Existing Render Service

## 🚀 Quick Steps

### Step 1: Go to Your Service

1. Go to [render.com](https://render.com)
2. Login to your account
3. Click on your service (e.g., `staruniversalgroup-be`)

### Step 2: Navigate to Environment Tab

1. In your service dashboard, look at the top menu
2. Click on **"Environment"** tab
   - It's next to "Settings", "Logs", "Events", etc.

### Step 3: Add Environment Variables

1. Scroll down to **"Environment Variables"** section
2. Click **"Add Environment Variable"** button
3. Add each variable one by one:

#### Variable 1: EMAIL_USER
- **Key:** `EMAIL_USER`
- **Value:** `your-email@gmail.com`
- Click **"Save"**

#### Variable 2: EMAIL_PASSWORD
- **Key:** `EMAIL_PASSWORD`
- **Value:** `your-gmail-app-password` (16 characters)
- Click **"Save"**

#### Variable 3: RECIPIENT_EMAIL
- **Key:** `RECIPIENT_EMAIL`
- **Value:** `your-email@gmail.com` (same as EMAIL_USER usually)
- Click **"Save"**

#### Variable 4: SMTP_HOST
- **Key:** `SMTP_HOST`
- **Value:** `smtp.gmail.com`
- Click **"Save"**

#### Variable 5: SMTP_PORT
- **Key:** `SMTP_PORT`
- **Value:** `587`
- Click **"Save"**

### Step 4: Redeploy (Important!)

After adding all variables:

1. Go to **"Events"** tab (or stay on Environment tab)
2. Click **"Manual Deploy"** button
3. Select **"Deploy latest commit"**
4. Wait for deployment to complete (1-2 minutes)

**OR** Render will automatically redeploy when you save environment variables (check the Events tab).

---

## 📋 Complete List of Variables

Add these 5 environment variables:

| Key | Value | Example |
|-----|-------|---------|
| `EMAIL_USER` | Your Gmail address | `yourname@gmail.com` |
| `EMAIL_PASSWORD` | Gmail App Password | `abcdefghijklmnop` |
| `RECIPIENT_EMAIL` | Where to receive emails | `yourname@gmail.com` |
| `SMTP_HOST` | SMTP server | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port | `587` |

---

## 🔍 How to Find Environment Tab

If you can't find it:

1. **Dashboard View:**
   - Click on your service name
   - Look for tabs: Overview | Logs | Events | **Environment** | Settings

2. **Service Settings:**
   - Click "Settings" tab
   - Scroll down to "Environment Variables" section
   - Click "Add Environment Variable"

---

## ✅ Verify Variables Are Added

1. Go to **Environment** tab
2. You should see all 5 variables listed
3. Values are hidden (showing as dots) for security
4. You can edit or delete them anytime

---

## 🔄 After Adding Variables

### Option 1: Automatic Redeploy
- Render may automatically redeploy
- Check **"Events"** tab to see deployment status

### Option 2: Manual Redeploy
1. Go to **"Events"** tab
2. Click **"Manual Deploy"**
3. Select **"Deploy latest commit"**

---

## 🧪 Test After Adding Variables

1. **Check Server Status:**
   - Visit: `https://your-app.onrender.com/`
   - Should show "Server is Running" page

2. **Test Health Endpoint:**
   - Visit: `https://your-app.onrender.com/api/health`
   - Should return JSON with status

3. **Check Logs:**
   - Go to **"Logs"** tab in Render
   - Should see: `✅ Server is ready to send emails`
   - Should NOT see SMTP authentication errors

4. **Test Contact Form:**
   - Go to your frontend
   - Submit a contact form
   - Check your email inbox!

---

## ⚠️ Important Notes

1. **Gmail App Password:**
   - Don't use your regular Gmail password
   - Generate App Password: https://myaccount.google.com/apppasswords
   - Use the 16-character password

2. **Variable Names:**
   - Must match exactly (case-sensitive)
   - `EMAIL_USER` not `email_user`

3. **No Spaces:**
   - Don't add spaces in values
   - `smtp.gmail.com` not ` smtp.gmail.com `

4. **Redeploy Required:**
   - Server needs to restart to use new variables
   - Always redeploy after adding variables

---

## 🐛 Troubleshooting

### Variables not working?

1. **Check spelling:**
   - Variable names must match exactly
   - Check for typos

2. **Redeploy:**
   - Variables only take effect after redeploy
   - Go to Events → Manual Deploy

3. **Check logs:**
   - Go to Logs tab
   - Look for SMTP errors
   - Should see "Server is ready to send emails"

4. **Verify values:**
   - Double-check email addresses
   - Verify App Password is correct

---

## 📸 Visual Guide

**Environment Tab Location:**
```
Render Dashboard
  └── Your Service
      ├── Overview
      ├── Logs
      ├── Events
      ├── Environment  ← Click here!
      └── Settings
```

**Adding Variable:**
```
Environment Tab
  └── Environment Variables Section
      └── [Add Environment Variable] button
          ├── Key: EMAIL_USER
          ├── Value: your-email@gmail.com
          └── [Save]
```

---

## 🎯 Quick Checklist

- [ ] Go to Render dashboard
- [ ] Click on your service
- [ ] Click "Environment" tab
- [ ] Add EMAIL_USER
- [ ] Add EMAIL_PASSWORD
- [ ] Add RECIPIENT_EMAIL
- [ ] Add SMTP_HOST
- [ ] Add SMTP_PORT
- [ ] Redeploy service
- [ ] Check logs for "Server is ready"
- [ ] Test contact form

---

**That's it!** After adding variables and redeploying, your server will be able to send emails! 🎉

