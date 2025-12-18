# Fix: Resend Domain Verification Required

## 🔍 The Problem

Resend error message:
```
You can only send testing emails to your own email address (mpiyush243@gmail.com). 
To send emails to other recipients, please verify a domain at resend.com/domains, 
and change the `from` address to an email using this domain.
```

**What this means:**
- When using Resend's default domain (`onboarding@resend.dev`), you can ONLY send to your Resend account email
- Your Resend account email is: `mpiyush243@gmail.com`
- To send to other email addresses, you MUST verify your own domain

---

## ✅ Solution Options

### Option 1: Quick Fix (For Testing Only)

**Set `RECIPIENT_EMAIL` to your Resend account email:**

1. Go to Render Dashboard → Your Service → Environment
2. Update `RECIPIENT_EMAIL`:
   - Key: `RECIPIENT_EMAIL`
   - Value: `mpiyush243@gmail.com`
3. Redeploy

**Limitation:** You'll only receive emails at `mpiyush243@gmail.com`

---

### Option 2: Proper Solution (Recommended)

**Verify your domain in Resend:**

#### Step 1: Add Domain to Resend

1. Go to [resend.com/domains](https://resend.com/domains)
2. Click **"Add Domain"**
3. Enter your domain (e.g., `staruniversalgroup.in`)
4. Click **"Add Domain"**

#### Step 2: Add DNS Records

Resend will show you DNS records to add:

1. **SPF Record** (TXT):
   - Name: `@` (or your domain)
   - Value: `v=spf1 include:_spf.resend.com ~all`

2. **DKIM Record** (TXT):
   - Name: Copy from Resend (usually `resend._domainkey`)
   - Value: Copy from Resend (long string)

3. **DMARC Record** (TXT) - Optional:
   - Name: `_dmarc`
   - Value: `v=DMARC1; p=none; rua=mailto:admin@yourdomain.com`

4. **Add to Your Domain Provider:**
   - Go to where you manage DNS (GoDaddy, Namecheap, Cloudflare, etc.)
   - Add the records above
   - Wait for verification (10-30 minutes, can take up to 48 hours)

#### Step 3: Update Environment Variables

Once domain is verified (green checkmark in Resend):

1. **Go to Render → Environment Tab**
2. **Update `FROM_EMAIL`:**
   - Key: `FROM_EMAIL`
   - Value: `Star Universal <noreply@staruniversalgroup.in>`
   - Or: `Star Universal <contact@staruniversalgroup.in>`
   - **Important:** Use your verified domain, NOT `onboarding@resend.dev`

3. **Update `RECIPIENT_EMAIL` (if needed):**
   - Key: `RECIPIENT_EMAIL`
   - Value: Your desired email address (can be any email now)

4. **Redeploy:**
   - Events tab → Manual Deploy

---

## 📋 Quick Checklist

**For Quick Fix (Testing):**
- [ ] Set `RECIPIENT_EMAIL` = `mpiyush243@gmail.com`
- [ ] Redeploy
- [ ] Test contact form

**For Proper Solution:**
- [ ] Domain added to Resend
- [ ] SPF record added to DNS
- [ ] DKIM record added to DNS
- [ ] Domain verified in Resend (green checkmark)
- [ ] `FROM_EMAIL` updated with verified domain
- [ ] `RECIPIENT_EMAIL` set to desired email
- [ ] Server redeployed
- [ ] Test contact form

---

## 🧪 Testing

After fixing:

1. **Submit a contact form**
2. **Check your email inbox** (not spam)
3. **Verify you received the email**

---

## 💡 Why This Happens

Resend's free tier has limitations:
- **Default domain** (`onboarding@resend.dev`) = Only send to account owner's email
- **Verified domain** = Send to any email address

This is a security measure to prevent spam.

---

## 🆘 Troubleshooting

### Domain Verification Failing?

1. **Check DNS Records:**
   - Make sure they're exactly as Resend shows
   - No extra spaces or characters
   - Use DNS checker tools to verify

2. **Wait Longer:**
   - DNS changes can take 5 minutes to 48 hours
   - Usually takes 10-30 minutes

3. **Check Record Types:**
   - SPF and DKIM must be TXT records
   - Not A or CNAME records

### Still Getting 403 Error?

1. **Verify `FROM_EMAIL` uses verified domain:**
   - Should be: `something@yourdomain.com`
   - NOT: `onboarding@resend.dev`

2. **Check domain status in Resend:**
   - Should show green checkmark
   - If not verified, wait longer

---

**Choose Option 1 for quick testing, or Option 2 for production use!** 🎉


