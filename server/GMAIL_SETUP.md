# Gmail Setup Guide - Fix Authentication Error

## The Error You're Seeing

```
Error: Invalid login: 535-5.7.8 Username and Password not accepted
```

This means Gmail is rejecting your credentials. Here's how to fix it:

## Step-by-Step Solution

### Step 1: Enable 2-Step Verification

1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Under "Signing in to Google", find **2-Step Verification**
4. Click **Get Started** and follow the prompts
5. Complete the setup (you'll need your phone)

### Step 2: Generate App Password

1. After enabling 2-Step Verification, go to: https://myaccount.google.com/apppasswords
   - Or navigate: Google Account → Security → 2-Step Verification → App passwords

2. You may need to sign in again

3. Under "Select app", choose **Mail**

4. Under "Select device", choose **Other (Custom name)**

5. Type a name like "Star Universal Server" and click **Generate**

6. Google will show you a **16-character password** (looks like: `abcd efgh ijkl mnop`)

7. **Copy this password** - you won't be able to see it again!

### Step 3: Update Your .env File

Open `server/.env` and update it:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
RECIPIENT_EMAIL=your-email@gmail.com
```

**Important:**
- Use the **16-character App Password** (remove spaces if any)
- **NOT** your regular Gmail password
- Both `EMAIL_USER` and `RECIPIENT_EMAIL` can be the same email

### Step 4: Restart Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
cd server
npm start
```

### Step 5: Verify It Works

You should see:
```
✅ Server is ready to send emails
```

Instead of the error message.

## Alternative: Use OAuth2 (More Secure)

If you want a more secure setup, you can use OAuth2 instead of App Passwords. However, App Passwords are simpler and work well for this use case.

## Troubleshooting

### Still getting errors?

1. **Double-check the App Password:**
   - Make sure you copied all 16 characters
   - Remove any spaces
   - Make sure it's the App Password, not your regular password

2. **Verify 2-Step Verification is enabled:**
   - Go to: https://myaccount.google.com/security
   - Check that "2-Step Verification" shows as "On"

3. **Check your email address:**
   - Make sure `EMAIL_USER` matches exactly (including @gmail.com)
   - No typos or extra spaces

4. **Wait a few minutes:**
   - Sometimes App Passwords take a minute to activate

5. **Generate a new App Password:**
   - Delete the old one and create a new one
   - Update `.env` with the new password

### Still Not Working?

Try these alternatives:

**Option 1: Use a different email provider**
- Outlook/Hotmail
- Yahoo
- Your own domain email

**Option 2: Use a service like SendGrid or Mailgun**
- More reliable for production
- Better deliverability
- Free tiers available

## Quick Checklist

- [ ] 2-Step Verification enabled on Google Account
- [ ] App Password generated (16 characters)
- [ ] `.env` file updated with App Password (not regular password)
- [ ] Server restarted
- [ ] No errors in console

## Example .env File

```env
# Email Configuration
EMAIL_USER=yourname@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
RECIPIENT_EMAIL=yourname@gmail.com

# SMTP Configuration (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587

# Server Port
PORT=4000
```

**Remember:** Never commit your `.env` file to git! It contains sensitive information.

