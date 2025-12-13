# Fix for Event Contact Form Timeout

## 🔍 The Issue

The event contact form is timing out. This is likely because:

1. **Render Free Tier Spun Down:**
   - Render free tier spins down after 15 minutes of inactivity
   - First request takes 30-60 seconds to wake up
   - Your timeout might be too short

2. **Server Not Responding:**
   - Server might be down
   - Network issues
   - Server configuration issues

## ✅ What I Fixed

### 1. Increased Timeout
- Changed from 30 seconds to **60 seconds**
- Gives Render server enough time to wake up

### 2. Added Automatic Retry
- If request times out, it automatically retries once
- Waits 2 seconds before retry
- Helps with transient network issues

### 3. Better Error Messages
- More specific error messages
- Tells user if server is starting up
- Provides actionable feedback

## 🧪 How to Test

### Option 1: Test Locally (Recommended)

1. **Start your local server:**
   ```bash
   cd server
   npm start
   ```

2. **Start frontend:**
   ```bash
   npm run dev
   ```

3. **Test event form:**
   - Go to `http://localhost:3000/contact-event`
   - Fill and submit form
   - Should work immediately ✅

### Option 2: Test Production Server

1. **Check if server is running:**
   ```
   https://staruniversalgroup-be.onrender.com/api/health
   ```
   - If it returns JSON → Server is running ✅
   - If timeout/error → Server is spun down ❌

2. **If server is spun down:**
   - Wait 30-60 seconds
   - Try the health check again
   - Then try submitting the form

3. **Submit form:**
   - Fill out event contact form
   - Submit
   - Wait up to 60 seconds (with retry, it might take longer)
   - Should work after server wakes up ✅

## 🔧 Quick Fixes

### If Still Timing Out:

1. **Check Render Dashboard:**
   - Go to Render → Your service → Logs
   - Check if server is actually running
   - Look for any errors

2. **Verify Environment Variables:**
   - Make sure all email variables are set
   - Check SMTP configuration

3. **Test Server Directly:**
   ```bash
   curl -X POST https://staruniversalgroup-be.onrender.com/api/contact/event \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com","phone":"1234567890","eventType":"Wedding","eventDate":"2024-12-25","message":"Test"}'
   ```

4. **Consider Upgrading:**
   - Render free tier spins down
   - Consider Railway ($5 credit/month, no spin-down)
   - Or upgrade Render to paid plan

## 📋 What Changed

- ✅ Timeout increased to 60 seconds
- ✅ Automatic retry on timeout
- ✅ Better error messages
- ✅ More helpful user feedback

## 🚀 After Fix

The form should now:
1. Wait up to 60 seconds for response
2. Automatically retry if timeout
3. Show helpful error messages
4. Work once server wakes up

**Try submitting the form again - it should work now!** 🎉

