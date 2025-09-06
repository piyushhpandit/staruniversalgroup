// components/EventsHeader.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../utils/theme';
import logo from '../../assets/logo.png';

const EventsHeader = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events', active: true },
    { name: 'Foundation', path: '/foundation' },
    { name: 'Travel', path: '/travel' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled 
          ? `rgba(10, 10, 10, 0.95)` 
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? `1px solid ${theme.colors.border.default}` : 'none',
        transition: theme.transitions.medium,
        fontFamily: theme.typography.fontFamily
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: `${theme.spacing.md} ${theme.spacing.lg}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Logo Section */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            transition: theme.transitions.medium
          }}
          onClick={() => navigate('/')}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          <img
            src={logo}
            alt="Star Universal Logo"
            style={{
              width: '2.5rem',
              height: 'auto',
              marginRight: theme.spacing.sm,
              filter: `drop-shadow(0 0 10px ${theme.services.events.primary}30)`
            }}
          />
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: '1.25rem',
                fontWeight: '700',
                color: theme.colors.text.primary,
                lineHeight: '1.2'
              }}
            >
              Star Universal
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: '0.75rem',
                color: theme.services.events.primary,
                fontWeight: '500',
                letterSpacing: '0.5px'
              }}
            >
              EVENTS
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.lg,
            '@media (max-width: 768px)': {
              display: 'none'
            }
          }}
        >
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              style={{
                background: 'transparent',
                border: 'none',
                color: item.active ? theme.services.events.primary : theme.colors.text.secondary,
                fontSize: '0.95rem',
                fontWeight: item.active ? '600' : '400',
                cursor: 'pointer',
                padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
                borderRadius: theme.borderRadius.sm,
                transition: theme.transitions.medium,
                position: 'relative',
                fontFamily: theme.typography.fontFamily
              }}
              onMouseEnter={(e) => {
                if (!item.active) {
                  e.target.style.color = theme.colors.text.primary;
                  e.target.style.background = theme.colors.dark.card;
                }
              }}
              onMouseLeave={(e) => {
                if (!item.active) {
                  e.target.style.color = theme.colors.text.secondary;
                  e.target.style.background = 'transparent';
                }
              }}
            >
              {item.name}
              {item.active && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '20px',
                    height: '2px',
                    background: theme.services.events.gradient,
                    borderRadius: '1px'
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/contact')}
          style={{
            background: theme.services.events.gradient,
            border: 'none',
            color: theme.colors.text.primary,
            padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
            borderRadius: theme.borderRadius.md,
            fontSize: '0.9rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: theme.transitions.medium,
            fontFamily: theme.typography.fontFamily,
            boxShadow: `0 4px 15px ${theme.services.events.primary}25`,
            '@media (max-width: 640px)': {
              display: 'none'
            }
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = `0 8px 25px ${theme.services.events.primary}35`;
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = `0 4px 15px ${theme.services.events.primary}25`;
          }}
        >
          Get Quote
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: `1px solid ${theme.colors.border.default}`,
            color: theme.colors.text.primary,
            padding: theme.spacing.sm,
            borderRadius: theme.borderRadius.sm,
            cursor: 'pointer',
            transition: theme.transitions.medium,
            '@media (max-width: 768px)': {
              display: 'block'
            }
          }}
        >
          <div
            style={{
              width: '20px',
              height: '2px',
              background: theme.colors.text.primary,
              margin: '3px 0',
              transition: theme.transitions.medium,
              transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
            }}
          />
          <div
            style={{
              width: '20px',
              height: '2px',
              background: theme.colors.text.primary,
              margin: '3px 0',
              transition: theme.transitions.medium,
              opacity: isMobileMenuOpen ? 0 : 1
            }}
          />
          <div
            style={{
              width: '20px',
              height: '2px',
              background: theme.colors.text.primary,
              margin: '3px 0',
              transition: theme.transitions.medium,
              transform: isMobileMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: `rgba(10, 10, 10, 0.98)`,
            backdropFilter: 'blur(20px)',
            borderBottom: `1px solid ${theme.colors.border.default}`,
            padding: theme.spacing.lg,
            '@media (min-width: 769px)': {
              display: 'none'
            }
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing.md
            }}
          >
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  navigate(item.path);
                  setIsMobileMenuOpen(false);
                }}
                style={{
                  background: item.active ? theme.colors.dark.card : 'transparent',
                  border: item.active ? `1px solid ${theme.services.events.primary}40` : 'none',
                  color: item.active ? theme.services.events.primary : theme.colors.text.secondary,
                  padding: theme.spacing.md,
                  borderRadius: theme.borderRadius.md,
                  fontSize: '1rem',
                  fontWeight: item.active ? '600' : '400',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: theme.transitions.medium,
                  fontFamily: theme.typography.fontFamily
                }}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                navigate('/contact');
                setIsMobileMenuOpen(false);
              }}
              style={{
                background: theme.services.events.gradient,
                border: 'none',
                color: theme.colors.text.primary,
                padding: theme.spacing.md,
                borderRadius: theme.borderRadius.md,
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: theme.transitions.medium,
                fontFamily: theme.typography.fontFamily,
                marginTop: theme.spacing.md
              }}
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default EventsHeader;