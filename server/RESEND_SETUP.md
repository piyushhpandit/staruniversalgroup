# Fix: SMTP Connection Timeout on Render

## 🔍 The Problem

Render's free tier **blocks outbound SMTP connections** to Gmail. This is why you're seeing:
```
Error: Connection timeout
code: 'ETIMEDOUT'
command: 'CONN'
```

## ✅ The Solution: Use Resend

I've replaced Nodemailer/SMTP with **Resend** - a cloud-friendly email service that works perfectly with Render.

### Why Resend?
- ✅ **Free tier**: 3,000 emails/month
- ✅ **Works with cloud deployments** (no SMTP blocking)
- ✅ **Easy setup** - just an API key
- ✅ **Fast and reliable**

---

## 🚀 Setup Steps

### Step 1: Get Resend API Key

1. Go to [resend.com](https://resend.com)
2. Sign up for free account
3. Go to **API Keys** section
4. Click **"Create API Key"**
5. Name it: `Star Universal Production`
6. Copy the API key (starts with `re_...`)

### Step 2: Add Domain (Optional but Recommended)

**For production emails**, you need to verify a domain:

1. In Resend dashboard, go to **Domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `staruniversal.com`)
4. Add the DNS records Resend provides to your domain
5. Wait for verification (usually 5-10 minutes)

**For testing**, you can use Resend's default domain: `onboarding@resend.dev`

### Step 3: Add Environment Variable to Render

1. Go to Render Dashboard → Your Service
2. Go to **Environment** tab
3. Click **"Add Environment Variable"**
4. Add:
   - **Key:** `RESEND_API_KEY`
   - **Value:** Your Resend API key (starts with `re_...`)
5. Click **"Save"**

### Step 4: Add FROM_EMAIL (Optional)

If you verified a domain, add:
- **Key:** `FROM_EMAIL`
- **Value:** `Star Universal <noreply@yourdomain.com>`

If not using a custom domain, leave it blank (will use `onboarding@resend.dev`)

### Step 5: Keep RECIPIENT_EMAIL

Make sure you still have:
- **Key:** `RECIPIENT_EMAIL`
- **Value:** Your email where you want to receive inquiries

### Step 6: Redeploy

1. Render will auto-redeploy when you add environment variables
2. OR go to **Events** tab → **Manual Deploy** → **Deploy latest commit**
3. Wait 1-2 minutes

---

## 📋 Environment Variables Summary

**Required:**
- `RESEND_API_KEY` - Your Resend API key

**Optional:**
- `FROM_EMAIL` - Custom sender email (e.g., `Star Universal <noreply@yourdomain.com>`)
- If not set, uses: `Star Universal <onboarding@resend.dev>`

**Still Needed:**
- `RECIPIENT_EMAIL` - Where to send inquiries

**Can Remove (no longer needed):**
- `EMAIL_USER`
- `EMAIL_PASSWORD`
- `SMTP_HOST`
- `SMTP_PORT`

---

## 🧪 Test It

After redeploying, test the contact form:
1. Go to your website
2. Fill out the event contact form
3. Submit
4. Check your email inbox!

---

## 💰 Pricing

**Free Tier:**
- 3,000 emails/month
- 100 emails/day
- Perfect for contact forms!

**Paid Plans:**
- Start at $20/month for 50,000 emails
- Only needed if you exceed free tier

---

## ✅ What Changed in Code

1. **Removed:** Nodemailer/SMTP code
2. **Added:** Resend SDK
3. **Updated:** All three contact endpoints (event, foundation, travel)
4. **Simplified:** No more SMTP connection issues!

---

## 🆘 Troubleshooting

### "API key is invalid"
- Check you copied the full API key
- Make sure it starts with `re_`
- Verify it's added correctly in Render environment variables

### "Domain not verified"
- If using custom domain, verify DNS records
- Or use default `onboarding@resend.dev` for testing

### Still not working?
- Check Render logs for errors
- Verify `RESEND_API_KEY` is set
- Make sure `RECIPIENT_EMAIL` is set

---

**That's it!** Your email service should work perfectly now! 🎉

