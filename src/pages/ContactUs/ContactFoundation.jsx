import React, { useState } from 'react';
import theme from '../../utils/theme';
import { useIsMobile } from '../../hooks/useMediaQuery';
import { sendFoundationInquiry } from '../../api/contactService';

const ContactFoundation = () => {
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: '',
    donationAmount: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

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

    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
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
    setStatus({ type: '', message: '' });

    try {
      const response = await sendFoundationInquiry(formData);
      if (response.status === 200) {
        setStatus({
          type: 'success',
          message: 'Thank you for reaching out! We\'ll get back to you soon.',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          inquiryType: '',
          donationAmount: '',
          message: ''
        });
        setErrors({});
        
        setTimeout(() => {
          setStatus({ type: '', message: '' });
        }, 5000);
      }
    } catch (error) {
      // Log error details for debugging (only in console, not shown to user)
      console.error('Error sending foundation form:', {
        message: error.message,
        code: error.code,
        status: error.response?.status,
        data: error.response?.data,
        url: error.config?.url,
        timestamp: new Date().toISOString()
      });
      
      // User-friendly error message (always the same for security)
      setStatus({
        type: 'error',
        message: "Oops! It's not you, it's us. Please try again in sometime.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${theme.colors.dark.primary} 0%, ${theme.colors.dark.secondary} 50%, ${theme.colors.dark.tertiary} 100%)`,
      padding: isMobile ? '2rem 1rem' : '3rem 1rem',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          textAlign: 'center',
          marginBottom: isMobile ? '2rem' : '3rem'
        }}>
          <div style={{ fontSize: isMobile ? '3rem' : '4rem', marginBottom: '1rem' }}>{theme.services.foundation.icon}</div>
          <h1 style={{
            fontSize: isMobile ? '1.8rem' : '2.5rem',
            fontWeight: '700',
            background: theme.services.foundation.gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem',
            padding: isMobile ? '0 0.5rem' : '0'
          }}>Connect With Our Foundation</h1>
          <p style={{ color: theme.colors.text.secondary, fontSize: isMobile ? '1rem' : '1.1rem', padding: isMobile ? '0 0.5rem' : '0' }}>
            Together we can make a difference
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{
          background: theme.colors.dark.card,
          backdropFilter: 'blur(20px)',
          border: `1px solid ${theme.colors.border.default}`,
          borderRadius: '1.5rem',
          padding: isMobile ? '1.5rem' : '2.5rem',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '1rem' : '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', color: theme.colors.text.primary, marginBottom: '0.5rem', fontWeight: '500' }}>
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  background: theme.colors.dark.secondary,
                  border: `1px solid ${errors.name ? '#ef4444' : theme.colors.border.default}`,
                  borderRadius: '0.75rem',
                  color: theme.colors.text.primary,
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = theme.services.foundation.primary}
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
              <label style={{ display: 'block', color: theme.colors.text.primary, marginBottom: '0.5rem', fontWeight: '500' }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  background: theme.colors.dark.secondary,
                  border: `1px solid ${errors.email ? '#ef4444' : theme.colors.border.default}`,
                  borderRadius: '0.75rem',
                  color: theme.colors.text.primary,
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = theme.services.foundation.primary}
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

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '1rem' : '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', color: theme.colors.text.primary, marginBottom: '0.5rem', fontWeight: '500' }}>
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  background: theme.colors.dark.secondary,
                  border: `1px solid ${errors.phone ? '#ef4444' : theme.colors.border.default}`,
                  borderRadius: '0.75rem',
                  color: theme.colors.text.primary,
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = theme.services.foundation.primary}
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
              <label style={{ display: 'block', color: theme.colors.text.primary, marginBottom: '0.5rem', fontWeight: '500' }}>
                Organization
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Optional"
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  background: theme.colors.dark.secondary,
                  border: `1px solid ${theme.colors.border.default}`,
                  borderRadius: '0.75rem',
                  color: theme.colors.text.primary,
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = theme.services.foundation.primary}
                onBlur={(e) => e.target.style.borderColor = theme.colors.border.default}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '1rem' : '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', color: theme.colors.text.primary, marginBottom: '0.5rem', fontWeight: '500' }}>
                Inquiry Type *
              </label>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  background: theme.colors.dark.secondary,
                  border: `1px solid ${errors.inquiryType ? '#ef4444' : theme.colors.border.default}`,
                  borderRadius: '0.75rem',
                  color: theme.colors.text.primary,
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = theme.services.foundation.primary}
                onBlur={(e) => {
                  if (!errors.inquiryType) {
                    e.target.style.borderColor = theme.colors.border.default;
                  }
                }}
              >
                <option value="">Select Type</option>
                <option value="donation">Make a Donation</option>
                <option value="volunteer">Volunteer</option>
                <option value="partnership">Partnership</option>
                <option value="general">General Inquiry</option>
              </select>
              {errors.inquiryType && (
                <span style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                  {errors.inquiryType}
                </span>
              )}
            </div>
            <div>
              <label style={{ display: 'block', color: theme.colors.text.primary, marginBottom: '0.5rem', fontWeight: '500' }}>
                Donation Amount
              </label>
              <input
                type="text"
                name="donationAmount"
                value={formData.donationAmount}
                onChange={handleChange}
                placeholder="Optional"
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  background: theme.colors.dark.secondary,
                  border: `1px solid ${theme.colors.border.default}`,
                  borderRadius: '0.75rem',
                  color: theme.colors.text.primary,
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = theme.services.foundation.primary}
                onBlur={(e) => e.target.style.borderColor = theme.colors.border.default}
              />
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', color: theme.colors.text.primary, marginBottom: '0.5rem', fontWeight: '500' }}>
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell us how you'd like to contribute or get involved..."
              style={{
                width: '100%',
                padding: '0.875rem 1rem',
                background: theme.colors.dark.secondary,
                border: `1px solid ${errors.message ? '#ef4444' : theme.colors.border.default}`,
                borderRadius: '0.75rem',
                color: theme.colors.text.primary,
                fontSize: '1rem',
                outline: 'none',
                transition: 'all 0.3s ease',
                resize: 'vertical',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
                minHeight: '120px'
              }}
              onFocus={(e) => e.target.style.borderColor = theme.services.foundation.primary}
              onBlur={(e) => {
                if (!errors.message) {
                  e.target.style.borderColor = theme.colors.border.default;
                }
              }}
            />
            {errors.message && (
              <span style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                {errors.message}
              </span>
            )}
          </div>

          {status.message && (
            <div style={{
              padding: '1rem',
              borderRadius: '0.75rem',
              marginBottom: '1.5rem',
              background: status.type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
              border: `1px solid ${status.type === 'success' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
              color: status.type === 'success' ? '#4ade80' : '#f87171'
            }}>
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: 'clamp(0.875rem, 2vw, 1rem)',
              background: loading 
                ? theme.colors.dark.secondary 
                : theme.services.foundation.gradient,
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
                e.target.style.boxShadow = '0 10px 25px rgba(255, 221, 0, 0.4)';
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
              '🤝 Submit Inquiry'
            )}
          </button>
          
          <p style={{
            marginTop: '1rem',
            textAlign: 'center',
            color: theme.colors.text.secondary,
            fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
            lineHeight: '1.5'
          }}>
            We'll respond within 24 hours to discuss how we can work together
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

        @media (hover: none) {
          input, select, textarea, button {
            font-size: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactFoundation;