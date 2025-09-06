// components/Footer.jsx
import React from 'react';
import {theme} from "../utils/theme.js";
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: '📧', label: 'Email', href: 'mailto:info@staruniversal.com' },
    { icon: '📱', label: 'WhatsApp', href: 'https://wa.me/1234567890' },
    { icon: '📍', label: 'Location', href: '#' },
    { icon: '🌐', label: 'Website', href: '#' }
  ];

  const quickLinks = [
    { name: 'Events', href: '/events' },
    { name: 'Foundation', href: '/foundation' },
    { name: 'Travel', href: '/travel' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer
      style={{
        background: `linear-gradient(180deg, ${theme.colors.dark.tertiary} 0%, ${theme.colors.dark.primary} 100%)`,
        color: theme.colors.text.primary,
        padding: `${theme.spacing.xxl} ${theme.spacing.lg} ${theme.spacing.lg}`,
        fontFamily: theme.typography.fontFamily,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 25% 25%, ${theme.colors.primary.red}05 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, ${theme.colors.primary.magenta}05 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, ${theme.colors.primary.yellow}03 0%, transparent 50%)
          `,
          zIndex: 0
        }}
      />
      
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Main Footer Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: theme.spacing.xl,
            marginBottom: theme.spacing.xl
          }}
        >
          {/* Company Info */}
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: theme.spacing.lg
              }}
            >
              <img
                src={logo}
                alt="Star Universal Logo"
                style={{
                  width: '3rem',
                  height: 'auto',
                  marginRight: theme.spacing.sm,
                  filter: createGlowEffect(theme.colors.primary.red, '0.2')
                }}
              />
              <h3
                style={{
                  ...theme.typography.heading.h3,
                  background: theme.services.events.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: 0
                }}
              >
                Star Universal Group
              </h3>
            </div>
            <p
              style={{
                ...theme.typography.body.medium,
                color: theme.colors.text.secondary,
                marginBottom: theme.spacing.lg,
                lineHeight: '1.6'
              }}
            >
              Illuminating possibilities across events, foundation work, and travel experiences. 
              Where vision meets reality.
            </p>
            
            {/* Social Links */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: theme.spacing.md,
                flexWrap: 'wrap'
              }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '3rem',
                    height: '3rem',
                    background: theme.colors.dark.card,
                    borderRadius: theme.borderRadius.full,
                    color: theme.colors.text.primary,
                    textDecoration: 'none',
                    fontSize: '1.2rem',
                    transition: theme.transitions.medium,
                    border: `1px solid ${theme.colors.border.default}`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px) scale(1.1)';
                    e.target.style.background = theme.services.events.gradient;
                    e.target.style.boxShadow = `0 10px 20px ${theme.colors.primary.red}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.background = theme.colors.dark.card;
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div style={{ textAlign: 'center' }}>
            <h4
              style={{
                ...theme.typography.heading.h3,
                color: theme.colors.text.primary,
                marginBottom: theme.spacing.lg,
                fontSize: '1.25rem'
              }}
            >
              Quick Links
            </h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing.sm,
                alignItems: 'center'
              }}
            >
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  style={{
                    ...theme.typography.body.medium,
                    color: theme.colors.text.secondary,
                    textDecoration: 'none',
                    transition: theme.transitions.medium,
                    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
                    borderRadius: theme.borderRadius.sm,
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = theme.colors.primary.yellow;
                    e.target.style.background = theme.colors.dark.card;
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = theme.colors.text.secondary;
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Info */}
          <div style={{ textAlign: 'center' }}>
            <h4
              style={{
                ...theme.typography.heading.h3,
                color: theme.colors.text.primary,
                marginBottom: theme.spacing.lg,
                fontSize: '1.25rem'
              }}
            >
              Get In Touch
            </h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing.md,
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: theme.spacing.sm,
                  color: theme.colors.text.secondary,
                  ...theme.typography.body.medium
                }}
              >
                <span>📧</span>
                <span>info@staruniversal.com</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: theme.spacing.sm,
                  color: theme.colors.text.secondary,
                  ...theme.typography.body.medium
                }}
              >
                <span>📱</span>
                <span>+91 12345 67890</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: theme.spacing.sm,
                  color: theme.colors.text.secondary,
                  ...theme.typography.body.medium,
                  textAlign: 'left'
                }}
              >
                <span>📍</span>
                <span>Ghaziabad, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div
          style={{
            borderTop: `1px solid ${theme.colors.border.default}`,
            paddingTop: theme.spacing.lg,
            textAlign: 'center'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: theme.spacing.sm
            }}
          >
            <p
              style={{
                ...theme.typography.body.small,
                color: theme.colors.text.tertiary,
                margin: 0
              }}
            >
              © {currentYear} Star Universal Group. All rights reserved.
            </p>
            <div
              style={{
                display: 'flex',
                gap: theme.spacing.lg,
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}
            >
              <a
                href="/privacy"
                style={{
                  ...theme.typography.body.small,
                  color: theme.colors.text.tertiary,
                  textDecoration: 'none',
                  transition: theme.transitions.medium
                }}
                onMouseEnter={(e) => e.target.style.color = theme.colors.primary.yellow}
                onMouseLeave={(e) => e.target.style.color = theme.colors.text.tertiary}
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                style={{
                  ...theme.typography.body.small,
                  color: theme.colors.text.tertiary,
                  textDecoration: 'none',
                  transition: theme.transitions.medium
                }}
                onMouseEnter={(e) => e.target.style.color = theme.colors.primary.yellow}
                onMouseLeave={(e) => e.target.style.color = theme.colors.text.tertiary}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper function (import from theme.js)
const createGlowEffect = (color, intensity = '0.3') => 
  `drop-shadow(0 0 20px ${color}${intensity}) drop-shadow(0 0 40px ${color}20)`;

export default Footer;