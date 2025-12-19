import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import theme from '../../utils/theme';
import { sendEventInquiry } from "../../api/contactService";

const ContactEvent = () => {
  const location = useLocation();
  const rootRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    venue: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  // If navigated from CTAs (e.g. Events page "Plan Your Event"), autofocus first input.
  useEffect(() => {
    if (!location?.state?.autofocus) return;
    window.setTimeout(() => {
      const el = rootRef.current?.querySelector?.('input, select, textarea, button');
      if (el && typeof el.focus === 'function') el.focus();
    }, 0);
  }, [location?.state?.autofocus]);

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (min 10 digits)';
    }

    if (!formData.eventType) {
      newErrors.eventType = 'Please select an event type';
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Event date is required';
    } else {
      const selectedDate = new Date(formData.eventDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.eventDate = 'Event date cannot be in the past';
      }
    }

    if (formData.guestCount && (parseInt(formData.guestCount) < 1 || parseInt(formData.guestCount) > 10000)) {
      newErrors.guestCount = 'Guest count must be between 1 and 10,000';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus({ type: 'error', message: 'Please fix the errors in the form' });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await sendEventInquiry(formData);
      if (response.status === 200) {
        setStatus({
          type: "success",
          message: "Thank you! We'll contact you soon about your event.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          eventDate: "",
          guestCount: "",
          budget: "",
          venue: "",
          message: "",
        });
        setErrors({});
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: "", message: "" });
        }, 5000);
      }
    } catch (error) {
      // Log error details for debugging (only in console, not shown to user)
      console.error("Error sending event form:", {
        message: error.message,
        code: error.code,
        status: error.response?.status,
        data: error.response?.data,
        url: error.config?.url,
        timestamp: new Date().toISOString()
      });
      
      // User-friendly error message (always the same for security)
      setStatus({
        type: "error",
        message: "Oops! It's not you, it's us. Please try again in sometime.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1rem',
    background: theme.colors.dark.secondary,
    border: `1px solid ${theme.colors.border.default}`,
    borderRadius: '0.75rem',
    color: theme.colors.text.primary,
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box'
  };

  const errorInputStyle = {
    ...inputStyle,
    borderColor: '#ef4444'
  };

  const labelStyle = {
    display: 'block',
    color: theme.colors.text.primary,
    marginBottom: '0.5rem',
    fontWeight: '500',
    fontSize: '0.95rem'
  };

  return (
    <div ref={rootRef} style={{
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${theme.colors.dark.primary} 0%, ${theme.colors.dark.secondary} 50%, ${theme.colors.dark.tertiary} 100%)`,
      padding: '2rem 1rem',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto',
        width: '100%'
      }}>
        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2.5rem'
        }}>
          <div style={{ 
            fontSize: 'clamp(3rem, 8vw, 4rem)', 
            marginBottom: '1rem' 
          }}>
            {theme.services.events.icon}
          </div>
          <h1 style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
            fontWeight: '700',
            background: theme.services.events.gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem',
            padding: '0 1rem'
          }}>
            Plan Your Event
          </h1>
          <p style={{ 
            color: theme.colors.text.secondary, 
            fontSize: 'clamp(1rem, 3vw, 1.1rem)',
            padding: '0 1rem'
          }}>
            Let's create an unforgettable experience together
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} style={{
          background: theme.colors.dark.card,
          backdropFilter: 'blur(20px)',
          border: `1px solid ${theme.colors.border.default}`,
          borderRadius: '1.5rem',
          padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          
          {/* Row 1: Name & Email */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'clamp(1rem, 3vw, 1.5rem)', 
            marginBottom: '1.5rem' 
          }}>
            <div>
              <label style={labelStyle}>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                style={errors.name ? errorInputStyle : inputStyle}
                onFocus={(e) => e.target.style.borderColor = theme.services.events.primary}
                onBlur={(e) => {
                  if (!errors.name) {
                    e.target.style.borderColor = theme.colors.border.default;
                  }
                }}
              />
              {errors.name && (
                <span style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                  {errors.name}
                </span>
              )}
            </div>
            <div>
              <label style={labelStyle}>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                style={errors.email ? errorInputStyle : inputStyle}
                onFocus={(e) => e.target.style.borderColor = theme.services.events.primary}
                onBlur={(e) => {
                  if (!errors.email) {
                    e.target.style.borderColor = theme.colors.border.default;
                  }
                }}
              />
              {errors.email && (
                <span style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Row 2: Phone & Event Type */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'clamp(1rem, 3vw, 1.5rem)', 
            marginBottom: '1.5rem' 
          }}>
            <div>
              <label style={labelStyle}>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                style={errors.phone ? errorInputStyle : inputStyle}
                onFocus={(e) => e.target.style.borderColor = theme.services.events.primary}
                onBlur={(e) => {
                  if (!errors.phone) {
                    e.target.style.borderColor = theme.colors.border.default;
                  }
                }}
              />
              {errors.phone && (
                <span style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                  {errors.phone}
                </span>
              )}
            </div>
            <div>
              <label style={labelStyle}>Event Type *</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                style={errors.eventType ? errorInputStyle : inputStyle}
                onFocus={(e) => e.target.style.borderColor = theme.services.events.primary}
                onBlur={(e) => {
                  if (!errors.eventType) {
                    e.target.style.borderColor = theme.colors.border.default;
                  }
                }}
              >
                <option value="">Select Event Type</option>
                <option value="Wedding">Wedding</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Birthday Party">Birthday Party</option>
                <option value="Conference">Conference</option>
                <option value="Product Launch">Product Launch</option>
                <option value="Concert/Music Event">Concert/Music Event</option>
                <option value="Other">Other</option>
              </select>
              {errors.eventType && (
                <span style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                  {errors.eventType}
                </span>
              )}
            </div>
          </div>

          {/* Row 3: Date, Guest Count, Budget */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'clamp(1rem, 3vw, 1.5rem)', 
            marginBottom: '1.5rem' 
          }}>
            <div>
              <label style={labelStyle}>Event Date *</label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                style={errors.eventDate ? errorInputStyle : inputStyle}
                onFocus={(e) => e.target.style.borderColor = theme.services.events.primary}
                onBlur={(e) => {
                  if (!errors.eventDate) {
                    e.target.style.borderColor = theme.colors.border.default;
                  }
                }}
              />
              {errors.eventDate && (
                <span style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                  {errors.eventDate}
                </span>
              )}
            </div>
            <div>
              <label style={labelStyle}>Guest Count</label>
              <input
                type="number"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                placeholder="e.g., 150"
                min="1"
                max="10000"
                style={errors.guestCount ? errorInputStyle : inputStyle}
                onFocus={(e) => e.target.style.borderColor = theme.services.events.primary}
                onBlur={(e) => {
                  if (!errors.guestCount) {
                    e.target.style.borderColor = theme.colors.border.default;
                  }
                }}
              />
              {errors.guestCount && (
                <span style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                  {errors.guestCount}
                </span>
              )}
            </div>
            <div>
              <label style={labelStyle}>Budget Range</label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="e.g., ₹5L-10L"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = theme.services.events.primary}
                onBlur={(e) => e.target.style.borderColor = theme.colors.border.default}
              />
            </div>
          </div>

          {/* Row 4: Venue */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle}>Venue Preference</label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              placeholder="Indoor, Outdoor, Specific location..."
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = theme.services.events.primary}
              onBlur={(e) => e.target.style.borderColor = theme.colors.border.default}
            />
          </div>

          {/* Row 5: Message */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={labelStyle}>Additional Details</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell us more about your vision... (catering preferences, theme ideas, special requirements, etc.)"
              style={{
                ...inputStyle,
                resize: 'vertical',
                fontFamily: 'inherit',
                minHeight: '120px'
              }}
              onFocus={(e) => e.target.style.borderColor = theme.services.events.primary}
              onBlur={(e) => e.target.style.borderColor = theme.colors.border.default}
            />
          </div>

          {/* Status Message */}
          {status.message && (
            <div style={{
              padding: 'clamp(0.875rem, 2vw, 1rem)',
              borderRadius: '0.75rem',
              marginBottom: '1.5rem',
              background: status.type === 'success' 
                ? 'rgba(34, 197, 94, 0.1)' 
                : 'rgba(239, 68, 68, 0.1)',
              border: `1px solid ${status.type === 'success' 
                ? 'rgba(34, 197, 94, 0.3)' 
                : 'rgba(239, 68, 68, 0.3)'}`,
              color: status.type === 'success' ? '#4ade80' : '#f87171',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              textAlign: 'center',
              animation: 'slideIn 0.3s ease-out'
            }}>
              {status.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: 'clamp(0.875rem, 2vw, 1rem)',
              background: loading 
                ? theme.colors.dark.secondary 
                : theme.services.events.gradient,
              border: 'none',
              borderRadius: '0.75rem',
              color: 'white',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              opacity: loading ? 0.7 : 1,
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 25px rgba(142, 68, 173, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            {loading ? (
              <span>
                <span style={{
                  display: 'inline-block',
                  width: '16px',
                  height: '16px',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderTopColor: 'white',
                  borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite',
                  marginRight: '0.5rem',
                  verticalAlign: 'middle'
                }}></span>
                Sending...
              </span>
            ) : (
              '🎉 Submit Event Inquiry'
            )}
          </button>

          {/* Info Text */}
          <p style={{
            marginTop: '1rem',
            textAlign: 'center',
            color: theme.colors.text.secondary,
            fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
            lineHeight: '1.5'
          }}>
            We'll respond within 24 hours to discuss your event details
          </p>
        </form>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile Responsive Adjustments */
        @media (max-width: 768px) {
          input[type="date"]::-webkit-calendar-picker-indicator {
            background-size: 18px;
          }
        }

        /* Better touch targets for mobile */
        @media (hover: none) {
          input, select, textarea, button {
            font-size: 16px !important; /* Prevents zoom on iOS */
          }
        }
      `}</style>
    </div>
  );
};

export default ContactEvent;