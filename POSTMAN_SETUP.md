# Postman Collection Setup Guide

## 📥 Import the Collection

1. **Open Postman**
2. Click **"Import"** button (top left)
3. Select the file: `Star_Universal_Contact_APIs.postman_collection.json`
4. Click **"Import"**

## 🔧 Configure Environment Variables

### Option 1: Use Collection Variables (Already Set)

The collection includes a variable `base_url` set to:
- **Production:** `https://staruniversalgroup-be.onrender.com`
- **Local:** `http://localhost:4000` (change if needed)

### Option 2: Create Postman Environment

1. Click **"Environments"** in left sidebar
2. Click **"+"** to create new environment
3. Name it: `Star Universal - Production`
4. Add variable:
   - **Variable:** `base_url`
   - **Initial Value:** `https://staruniversalgroup-be.onrender.com`
   - **Current Value:** `https://staruniversalgroup-be.onrender.com`
5. Click **"Save"**
6. Select this environment from dropdown (top right)

For local testing, create another environment:
- **Name:** `Star Universal - Local`
- **Variable:** `base_url` = `http://localhost:4000`

## 📋 Available Requests

### 1. Health Check
- **Method:** GET
- **URL:** `{{base_url}}/api/health`
- **Purpose:** Check if server is running

### 2. Event Contact Form
- **Method:** POST
- **URL:** `{{base_url}}/api/contact/event`
- **Required Fields:**
  - `name` (string)
  - `email` (string)
  - `phone` (string)
  - `eventType` (string)
  - `eventDate` (string, format: YYYY-MM-DD)
- **Optional Fields:**
  - `guestCount` (string)
  - `budget` (string)
  - `venue` (string)
  - `message` (string)

### 3. Foundation Contact Form
- **Method:** POST
- **URL:** `{{base_url}}/api/contact/foundation`
- **Required Fields:**
  - `name` (string)
  - `email` (string)
  - `phone` (string)
  - `inquiryType` (string)
  - `message` (string)
- **Optional Fields:**
  - `organization` (string)
  - `donationAmount` (string)

### 4. Travel Contact Form
- **Method:** POST
- **URL:** `{{base_url}}/api/contact/travel`
- **Required Fields:**
  - `name` (string)
  - `email` (string)
  - `phone` (string)
  - `tourType` (string)
  - `destination` (string)
  - `travelDate` (string, format: YYYY-MM-DD)
- **Optional Fields:**
  - `travelers` (string)
  - `budget` (string)
  - `message` (string)

## 🧪 Testing

### Step 1: Test Health Check
1. Select **"Health Check"** request
2. Click **"Send"**
3. Should return: `{"status": "ok", "message": "Server is running", ...}`

### Step 2: Test Event Contact
1. Select **"Event Contact Form"** request
2. Review the JSON body (you can edit it)
3. Click **"Send"**
4. Should return: `{"message": "Email sent successfully"}`

### Step 3: Test Foundation Contact
1. Select **"Foundation Contact Form"** request
2. Click **"Send"**
3. Should return: `{"message": "Email sent successfully"}`

### Step 4: Test Travel Contact
1. Select **"Travel Contact Form"** request
2. Click **"Send"**
3. Should return: `{"message": "Email sent successfully"}`

## ✅ Expected Responses

### Success Response (200 OK)
```json
{
  "message": "Email sent successfully"
}
```

### Validation Error (400 Bad Request)
```json
{
  "error": "Missing required fields"
}
```

### Server Error (500 Internal Server Error)
```json
{
  "error": "Failed to send email",
  "details": "Error details (only in development)"
}
```

## 🔄 Switching Between Environments

1. Click environment dropdown (top right)
2. Select:
   - **"Star Universal - Production"** for Render server
   - **"Star Universal - Local"** for local testing
   - **"No Environment"** to use collection variables

## 📝 Customizing Requests

You can edit any request:
1. Select the request
2. Go to **"Body"** tab
3. Edit the JSON
4. Click **"Send"**

## 🐛 Troubleshooting

### "Could not get response"
- Check if server is running
- Verify `base_url` is correct
- Check network connection

### "400 Bad Request"
- Check required fields are present
- Verify field names match exactly
- Check data types (strings, not numbers)

### "500 Internal Server Error"
- Server might be starting up (Render free tier)
- Check server logs in Render dashboard
- Verify `RESEND_API_KEY` is set in Render

### "Connection timeout"
- Server might be spun down (Render free tier)
- Wait 30-60 seconds and try again
- Check server health endpoint first

## 💡 Tips

1. **Start with Health Check** - Always test this first
2. **Use Minimal Requests** - Test with required fields only first
3. **Check Server Logs** - View Render logs to see what's happening
4. **Test Locally First** - Use local environment to debug faster

---

**Happy Testing!** 🚀

