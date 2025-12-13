#!/bin/bash

# Quick test script for email service

echo "🧪 Testing Email Service..."
echo ""

# Test Health Endpoint
echo "1. Testing Health Endpoint..."
curl -s http://localhost:4000/api/health | jq '.' || echo "❌ Server not running or jq not installed"
echo ""

# Test Event Form
echo "2. Testing Event Contact Form..."
curl -X POST http://localhost:4000/api/contact/event \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "9876543210",
    "eventType": "Wedding",
    "eventDate": "2024-12-25",
    "guestCount": "100",
    "budget": "₹5L",
    "venue": "Outdoor",
    "message": "This is a test message from localhost"
  }' | jq '.' || echo "Response received"
echo ""

echo "✅ Test complete! Check your email inbox (mpiyush243@gmail.com)"

