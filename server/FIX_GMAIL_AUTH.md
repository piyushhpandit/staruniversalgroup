# Fix Gmail Authentication Error

## ❌ Error You're Seeing

```
SMTP configuration error: Error: Invalid login: 535-5.7.8 Username and Password not accepted
```

This means Gmail is rejecting your credentials.

## 🔧 Quick Fix Steps

### Step 1: Check Your Email Address

Your `.env` shows:
```
EMAIL_USER=robincode@08@gmail.com
```

**⚠️ Check if this is correct:**
- Is it `robincode@08@gmail.com` or `robincode08@gmail.com`?
- Make sure there's no typo
- Remove any spaces

### Step 2: Generate New Gmail App Password

The App Password might be incorrect. Generate a new one:

1. **Go to:** https://myaccount.google.com/apppasswords
   - Or: Google Account → Security → 2-Step Verification → App passwords

2. **Make sure 2-Step Verification is enabled:**
   - If not, enable it first
   - Go to: https://myaccount.google.com/security

3. **Generate App Password:**
   - Select app: **Mail**
   - Select device: **Other (Custom name)**
   - Name it: "Star Universal Server"
   - Click **Generate**

4. **Copy the 16-character password:**
   - It looks like: `abcd efgh ijkl mnop`
   - **Remove spaces** when adding to `.env`
   - Should be: `abcdefghijklmnop`

### Step 3: Update .env File

Edit `server/.env`:

```env
EMAIL_USER=robincode08@gmail.com
EMAIL_PASSWORD=your-new-16-char-app-password
RECIPIENT_EMAIL=mpiyush243@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
PORT=4000
```

**Important:**
- Use the **16-character App Password** (no spaces)
- **NOT** your regular Gmail password
- Double-check email address spelling

### Step 4: Restart Server

```bash
# Stop server (Ctrl+C)
# Then restart:
npm start
```

You should now see:
```
✅ Server is ready to send emails
```

**NOT:**
```
❌ SMTP configuration error
```

---

## 🧪 Test After Fixing

1. **Check server logs:**
   - Should see: `✅ Server is ready to send emails`
   - Should NOT see: `SMTP configuration error`

2. **Test health endpoint:**
   ```bash
   curl http://localhost:4000/api/health
   ```

3. **Test email sending:**
   ```bash
   curl -X POST http://localhost:4000/api/contact/event \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test",
       "email": "test@test.com",
       "phone": "1234567890",
       "eventType": "Wedding",
       "eventDate": "2024-12-25",
       "message": "Test message"
     }'
   ```

4. **Check email inbox:**
   - Check: `mpiyush243@gmail.com`
   - Check spam folder

---

## 🔍 Common Issues

### Issue 1: Wrong Email Format
**Problem:** `robincode@08@gmail.com` (has @08)
**Fix:** Check if it should be `robincode08@gmail.com` (no @ before 08)

### Issue 2: Using Regular Password
**Problem:** Using Gmail account password
**Fix:** Must use App Password (16 characters)

### Issue 3: App Password Has Spaces
**Problem:** `abcd efgh ijkl mnop` (with spaces)
**Fix:** Remove spaces: `abcdefghijklmnop`

### Issue 4: 2-Step Verification Not Enabled
**Problem:** Can't generate App Password
**Fix:** Enable 2-Step Verification first

### Issue 5: App Password Expired/Revoked
**Problem:** Old App Password no longer works
**Fix:** Generate a new App Password

---

## ✅ Verification Checklist

- [ ] Email address is correct (no typos)
- [ ] 2-Step Verification is enabled
- [ ] App Password is generated (16 characters)
- [ ] App Password has no spaces in `.env`
- [ ] Using App Password, not regular password
- [ ] `.env` file saved
- [ ] Server restarted
- [ ] See "Server is ready to send emails" message

---

## 🚀 Quick Fix Command

If you want to quickly update the password:

```bash
cd server
nano .env
# Update EMAIL_PASSWORD with new App Password
# Save and exit (Ctrl+X, Y, Enter)
npm start
```

---

## 📧 Still Not Working?

1. **Double-check email:**
   - Try logging into Gmail with that email
   - Make sure it's the correct account

2. **Generate fresh App Password:**
   - Delete old App Password
   - Generate new one
   - Update `.env`

3. **Check Gmail security:**
   - Go to: https://myaccount.google.com/security
   - Make sure "Less secure app access" is NOT the issue (it's deprecated)
   - Use App Passwords instead

4. **Try different email:**
   - If you have another Gmail account, try that
   - Or use a different email provider

---

**After fixing, restart the server and you should see the success message!** ✅

