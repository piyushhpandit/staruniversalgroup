// theme.js
export const theme = {
  // Brand Colors from Logo
  colors: {
    primary: {
      red: '#ff4444',
      orange: '#ff8800',
      yellow: '#ffdd00',
      gold: '#ffaa00',
      magenta: '#ee44aa',
      purple: '#cc2288'
    },
    
    // Background Colors
    dark: {
      primary: '#0a0a0a',
      secondary: '#1a1a1a',
      tertiary: '#0f0f0f',
      card: 'rgba(255, 255, 255, 0.05)',
      cardHover: 'rgba(255, 255, 255, 0.1)'
    },
    
    // Text Colors
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      tertiary: 'rgba(255, 255, 255, 0.5)',
      muted: 'rgba(255, 255, 255, 0.3)'
    },
    
    // Border Colors
    border: {
      default: 'rgba(255, 255, 255, 0.1)',
      hover: 'rgba(255, 255, 255, 0.2)'
    }
  },

  // Service Specific Themes
  services: {
    events: {
      primary: '#ff4444',
      secondary: '#ff8800',
      gradient: 'linear-gradient(135deg, #ff4444, #ff8800)',
      icon: '🎉',
      bgParticle: 'rgba(255, 68, 68, 0.05)'
    },
    foundation: {
      primary: '#ffaa00',
      secondary: '#ffdd00',
      gradient: 'linear-gradient(135deg, #ffdd00, #ffaa00)',
      icon: '🤝',
      bgParticle: 'rgba(255, 221, 0, 0.05)'
    },
    travel: {
      primary: '#ee44aa',
      secondary: '#cc2288',
      gradient: 'linear-gradient(135deg, #ee44aa, #cc2288)',
      icon: '✈️',
      bgParticle: 'rgba(238, 68, 170, 0.05)'
    }
  },

  // Typography
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    heading: {
      hero: {
        fontSize: '3.5rem',
        fontWeight: '800',
        lineHeight: '1.1'
      },
      h1: {
        fontSize: '2.5rem',
        fontWeight: '700',
        lineHeight: '1.2'
      },
      h2: {
        fontSize: '2rem',
        fontWeight: '600',
        lineHeight: '1.3'
      },
      h3: {
        fontSize: '1.5rem',
        fontWeight: '600',
        lineHeight: '1.4'
      }
    },
    body: {
      large: {
        fontSize: '1.3rem',
        fontWeight: '300',
        lineHeight: '1.6'
      },
      medium: {
        fontSize: '1.1rem',
        fontWeight: '400',
        lineHeight: '1.6'
      },
      small: {
        fontSize: '0.95rem',
        fontWeight: '400',
        lineHeight: '1.5'
      }
    }
  },

  // Spacing
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem'
  },

  // Border Radius
  borderRadius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    xxl: '2rem',
    full: '50%'
  },

  // Shadows
  shadows: {
    sm: '0 4px 6px rgba(0, 0, 0, 0.1)',
    md: '0 10px 15px rgba(0, 0, 0, 0.1)',
    lg: '0 20px 25px rgba(0, 0, 0, 0.15)',
    xl: '0 25px 50px rgba(0, 0, 0, 0.2)'
  },

  // Transitions
  transitions: {
    fast: '0.15s ease',
    medium: '0.3s ease',
    slow: '0.6s ease',
    bouncy: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px'
  },

  // Animations
  animations: {
    float: 'float 6s ease-in-out infinite',
    pulse: 'pulse 4s ease-in-out infinite',
    shimmer: 'shimmer 3s linear infinite',
    spin: 'spin 1s linear infinite'
  }
};

// Utility Functions
export const createServiceBackground = (mousePos, service) => ({
  background: `
    radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${theme.services[service].bgParticle} 0%, transparent 50%),
    radial-gradient(circle at ${mousePos.x * 0.8}px ${mousePos.y * 1.2}px, ${theme.services[service].bgParticle} 0%, transparent 50%),
    linear-gradient(135deg, ${theme.colors.dark.primary} 0%, ${theme.colors.dark.secondary} 50%, ${theme.colors.dark.tertiary} 100%)
  `
});

export const createGlowEffect = (color, intensity = '0.3') => 
  `drop-shadow(0 0 20px ${color}${intensity}) drop-shadow(0 0 40px ${color}20)`;

export const createHoverCard = (service, isHovered) => ({
  background: isHovered 
    ? `linear-gradient(135deg, ${theme.colors.dark.cardHover} 0%, ${theme.colors.dark.card} 100%)`
    : theme.colors.dark.card,
  backdropFilter: 'blur(20px)',
  border: isHovered 
    ? `2px solid ${theme.services[service].primary}40`
    : `1px solid ${theme.colors.border.default}`,
  borderRadius: theme.borderRadius.xl,
  transition: theme.transitions.bouncy,
  transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
  boxShadow: isHovered 
    ? `0 25px 50px -12px ${theme.services[service].primary}25, 0 0 0 1px ${theme.services[service].primary}20`
    : theme.shadows.lg
});