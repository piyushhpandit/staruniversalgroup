# Debugging Event Contact Form Timeout

## 🔍 What I've Added for Debugging

### 1. **Frontend Logging** (`src/api/api.js`)
- Request interceptor logs every API call
- Response interceptor logs success/errors with full details
- Check browser console for these logs

### 2. **Server Logging** (`server/server.js`)
- Request logging middleware logs every incoming request
- Detailed logging in event endpoint:
  - When request is received
  - Validation status
  - Email sending progress
  - Success/error details

### 3. **Email Timeout Protection**
- Added SMTP connection timeouts (10 seconds each)
- Added 20-second timeout wrapper around email sending
- Prevents server from hanging on email issues

## 🧪 How to Debug

### Step 1: Check Browser Console
Open browser DevTools → Console tab, then submit the form. You should see:
```
🚀 API Request: POST https://staruniversalgroup-be.onrender.com/api/contact/event
```

If you see an error, check:
- ❌ `ERR_NETWORK` → Server is down or unreachable
- ❌ `ECONNABORTED` → Request timed out (check server logs)
- ❌ `404` → Wrong URL (check baseURL)
- ❌ `CORS error` → CORS configuration issue

### Step 2: Check Server Logs (Render Dashboard)
1. Go to Render Dashboard → Your Service → Logs
2. Submit the form
3. Look for these logs:

**If request reaches server:**
```
[2024-12-13T...] POST /api/contact/event
📧 Event contact form received: { ... }
```

**If you DON'T see these logs:**
- Request is not reaching the server
- Check CORS configuration
- Check if server is running
- Check URL in frontend

**If you see request but it hangs:**
```
📧 Event contact form received: { ... }
✅ Validation passed, preparing email...
📤 Sending email...
```
Then nothing → Email sending is hanging

### Step 3: Test Server Directly
```bash
curl -X POST https://staruniversalgroup-be.onrender.com/api/contact/event \
  -H "Content-Type: application/json" \
  -H "Origin: http://localhost:3000" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "eventType": "Wedding",
    "eventDate": "2024-12-25",
    "message": "Test message"
  }'
```

**Expected response:**
- `200 OK` with `{"message": "Email sent successfully"}` → Server works
- `500` with error → Email sending issue
- `Timeout` → Server not responding
- `404` → Wrong endpoint

### Step 4: Check Email Configuration
If server receives request but email fails:
1. Check Render environment variables:
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
   - `RECIPIENT_EMAIL`
   - `SMTP_HOST`
   - `SMTP_PORT`

2. Test email locally:
   ```bash
   cd server
   node test-send-email.js
   ```

## 🐛 Common Issues & Fixes

### Issue 1: Request Not Reaching Server
**Symptoms:** No logs in Render, browser shows timeout
**Fix:**
- Check if server is running (visit `/api/health`)
- Check CORS configuration
- Verify `VITE_API_BASE_URL` in frontend `.env`

### Issue 2: Email Sending Hangs
**Symptoms:** Server logs show "📤 Sending email..." but no response
**Fix:**
- Check SMTP credentials
- Check if Gmail App Password is correct
- Check firewall/network restrictions
- The timeout wrapper should catch this now (20 seconds)

### Issue 3: CORS Error
**Symptoms:** Browser console shows CORS error
**Fix:**
- Check `app.use(cors())` in server.js
- Verify frontend origin is allowed

### Issue 4: Wrong URL
**Symptoms:** 404 error in browser console
**Fix:**
- Check `baseURL` in `src/api/api.js`
- Should be: `https://staruniversalgroup-be.onrender.com/api`
- Check `VITE_API_BASE_URL` environment variable

## 📋 Next Steps

1. **Submit the form and check browser console** - Look for the API request logs
2. **Check Render logs** - See if request reaches server
3. **Test with curl** - Verify server works independently
4. **Share the logs** - Browser console + Render logs to identify exact issue

The detailed logging will show exactly where the problem is!

