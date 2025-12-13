# Check Server Status - Troubleshooting Guide

## 🔍 Issue: Travel Contact Form Getting Error

The request URL is correct (`/api/contact/travel`), but you're getting an error. Here's how to diagnose:

## Step 1: Check if Server is Running

### Test Server Health Endpoint

Open in browser:
```
https://staruniversalgroup-be.onrender.com/api/health
```

**Expected Response:**
```json
{
  "status": "ok",
  "message": "Server is running",
  "timestamp": "...",
  "uptime": 123.45
}
```

**If you get:**
- ❌ **404 or Connection Error** = Server is down or spun down
- ❌ **Timeout** = Server is starting up (Render free tier)
- ✅ **200 OK** = Server is running

## Step 2: Render Free Tier Issue

**Render free tier spins down after 15 minutes of inactivity.**

### First Request After Spin-Down:
- Takes **30-60 seconds** to wake up
- Request will timeout if timeout is too short
- **Solution:** I've increased timeout to 30 seconds

### How to Keep Server Awake:
1. **Upgrade to paid plan** ($7/month)
2. **Use Railway instead** (doesn't spin down, $5 credit/month)
3. **Accept the delay** (users wait 30-60s on first request)

## Step 3: Check Server Logs

1. Go to Render dashboard
2. Click on your service
3. Go to **"Logs"** tab
4. Check for:
   - ✅ `✅ Server is ready to send emails`
   - ❌ Any error messages
   - ❌ SMTP authentication errors

## Step 4: Test Server Directly

### Using curl:
```bash
# Test health
curl https://staruniversalgroup-be.onrender.com/api/health

# Test travel endpoint
curl -X POST https://staruniversalgroup-be.onrender.com/api/contact/travel \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@test.com",
    "phone": "1234567890",
    "tourType": "Nepal Tour",
    "destination": "Nepal",
    "travelDate": "2024-12-25",
    "message": "Test"
  }'
```

## Step 5: Check Environment Variables

In Render dashboard:
1. Go to **Environment** tab
2. Verify all variables are set:
   - ✅ EMAIL_USER
   - ✅ EMAIL_PASSWORD
   - ✅ RECIPIENT_EMAIL
   - ✅ SMTP_HOST
   - ✅ SMTP_PORT

## Common Issues & Solutions

### Issue 1: Server Spun Down (Render Free Tier)
**Symptom:** First request times out or takes 30-60 seconds
**Solution:** 
- Wait 30-60 seconds for server to wake up
- Or upgrade to paid plan
- Or switch to Railway

### Issue 2: SMTP Not Configured
**Symptom:** Server returns 500 error
**Solution:**
- Check environment variables in Render
- Verify Gmail App Password is correct
- Check server logs for SMTP errors

### Issue 3: Wrong API URL
**Symptom:** 404 error
**Solution:**
- Verify baseURL includes `/api`
- Check `src/api/api.js` configuration
- Update `.env` with correct URL

### Issue 4: CORS Error
**Symptom:** CORS error in browser console
**Solution:**
- Server already has CORS enabled
- Check if frontend URL matches backend CORS settings

## ✅ What I've Fixed

1. ✅ **Foundation menu** - Added Contact button
2. ✅ **Travel menu** - Added Contact button  
3. ✅ **Error messages** - More specific error messages
4. ✅ **Timeout** - Increased to 30 seconds (for Render wake-up time)
5. ✅ **API URL** - Ensures `/api` is always included

## 🧪 Test Checklist

- [ ] Server health endpoint works
- [ ] Server logs show "ready to send emails"
- [ ] All environment variables set in Render
- [ ] Test contact form locally (works)
- [ ] Test contact form in production
- [ ] Check email inbox for test submission

## 🚀 Next Steps

1. **Check server status** using health endpoint
2. **If server is down:** Wait 30-60 seconds and try again
3. **If still failing:** Check Render logs for errors
4. **If SMTP error:** Verify environment variables
5. **Test locally first** to ensure forms work

---

**The improved error messages will now tell you exactly what's wrong!** 🎯

