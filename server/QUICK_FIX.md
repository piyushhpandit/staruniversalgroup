# 🚨 Quick Fix: SMTP Timeout Issue

## The Problem
Render blocks SMTP connections to Gmail, causing connection timeouts.

## The Solution
I've replaced SMTP with **Resend** - a cloud-friendly email service.

---

## ⚡ Quick Setup (5 minutes)

### 1. Get Resend API Key
1. Go to [resend.com](https://resend.com) and sign up (free)
2. Go to **API Keys** → **Create API Key**
3. Copy the key (starts with `re_...`)

### 2. Add to Render
1. Render Dashboard → Your Service → **Environment** tab
2. Click **"Add Environment Variable"**
3. Add:
   - **Key:** `RESEND_API_KEY`
   - **Value:** Your Resend API key
4. Click **Save**

### 3. Keep RECIPIENT_EMAIL
Make sure you still have:
- **Key:** `RECIPIENT_EMAIL`  
- **Value:** Your email address

### 4. Redeploy
Render will auto-redeploy, or manually deploy from **Events** tab.

---

## ✅ That's It!

Your contact forms will work now! Test by submitting a form.

**Free tier:** 3,000 emails/month - perfect for contact forms!

---

## 📝 What Changed

- ✅ Removed SMTP/Nodemailer (blocked by Render)
- ✅ Added Resend (works with cloud deployments)
- ✅ Updated all 3 contact endpoints
- ✅ No more connection timeouts!

See `RESEND_SETUP.md` for detailed instructions.

