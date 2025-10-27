import React, { useState } from 'react';
import theme from '../../utils/theme';

const ContactFoundation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: '',
    donationAmount: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact/foundation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Thank you for reaching out! We\'ll get back to you soon.' });
        setFormData({ name: '', email: '', phone: '', organization: '', inquiryType: '', donationAmount: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${theme.colors.dark.primary} 0%, ${theme.colors.dark.secondary} 50%, ${theme.colors.dark.tertiary} 100%)`,
      padding: '3rem 1rem',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{theme.services.foundation.icon}</div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            background: theme.services.foundation.gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem'
          }}>Connect With Our Foundation</h1>
          <p style={{ color: theme.colors.text.secondary, fontSize: '1.1rem' }}>
            Together we can make a difference
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{
          background: theme.colors.dark.card,
          backdropFilter: 'blur(20px)',
          border: `1px solid ${theme.colors.border.default}`,
          borderRadius: '1.5rem',
          padding: '2.5rem',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', color: theme.colors.text.primary, marginBottom: '0.5rem', fontWeight: '500' }}>
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
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
            <div>
              <label style={{ display: 'block', color: theme.colors.text.primary, marginBottom: '0.5rem', fontWeight: '500' }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
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

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', color: theme.colors.text.primary, marginBottom: '0.5rem', fontWeight: '500' }}>
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
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

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', color: theme.colors.text.primary, marginBottom: '0.5rem', fontWeight: '500' }}>
                Inquiry Type *
              </label>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                required
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
              >
                <option value="">Select Type</option>
                <option value="donation">Make a Donation</option>
                <option value="volunteer">Volunteer</option>
                <option value="partnership">Partnership</option>
                <option value="general">General Inquiry</option>
              </select>
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
              required
              rows="5"
              placeholder="Tell us how you'd like to contribute or get involved..."
              style={{
                width: '100%',
                padding: '0.875rem 1rem',
                background: theme.colors.dark.secondary,
                border: `1px solid ${theme.colors.border.default}`,
                borderRadius: '0.75rem',
                color: theme.colors.text.primary,
                fontSize: '1rem',
                outline: 'none',
                transition: 'all 0.3s ease',
                resize: 'vertical',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => e.target.style.borderColor = theme.services.foundation.primary}
              onBlur={(e) => e.target.style.borderColor = theme.colors.border.default}
            />
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
              padding: '1rem',
              background: theme.services.foundation.gradient,
              border: 'none',
              borderRadius: '0.75rem',
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              opacity: loading ? 0.7 : 1
            }}
            onMouseEnter={(e) => !loading && (e.target.style.transform = 'translateY(-2px)')}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            {loading ? 'Sending...' : 'Submit Inquiry'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFoundation;