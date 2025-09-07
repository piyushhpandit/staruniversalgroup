import React, { useState, useEffect, useRef } from 'react';

// Theme configuration
const theme = {
  colors: {
    primary: {
      red: '#ff4444',
      orange: '#ff8800',
      yellow: '#ffdd00',
      gold: '#ffaa00',
      magenta: '#ee44aa',
      purple: '#cc2288'
    },
    dark: {
      primary: '#0a0a0a',
      secondary: '#1a1a1a',
      tertiary: '#0f0f0f',
      card: 'rgba(255, 255, 255, 0.05)',
      cardHover: 'rgba(255, 255, 255, 0.1)'
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      tertiary: 'rgba(255, 255, 255, 0.5)',
      muted: 'rgba(255, 255, 255, 0.3)'
    },
    border: {
      default: 'rgba(255, 255, 255, 0.1)',
      hover: 'rgba(255, 255, 255, 0.2)'
    }
  },
  services: {
    foundation: {
      primary: '#ffaa00',
      secondary: '#ffdd00',
      gradient: 'linear-gradient(135deg, #ffdd00, #ffaa00)',
      icon: '🤝',
      bgParticle: 'rgba(255, 221, 0, 0.05)'
    }
  }
};

const FoundationAboutUs = () => {
  const [activeSection, setActiveSection] = useState('mission');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [visibleItems, setVisibleItems] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const initiatives = [
    {
      icon: '💊',
      title: 'De-addiction Campaigns',
      description: 'Creating awareness about the harmful effects of drugs and helping individuals overcome addiction.',
      color: theme.colors.primary.red,
      stats: '500+ Lives Transformed'
    },
    {
      icon: '🌳',
      title: 'Tree Plantation Drives',
      description: 'Promoting environmental conservation through regular tree plantation programs.',
      color: theme.colors.primary.orange,
      stats: '10,000+ Trees Planted'
    },
    {
      icon: '🏥',
      title: 'Free Medical Camps',
      description: 'Providing free healthcare services to underprivileged communities in rural and remote areas.',
      color: theme.services.foundation.primary,
      stats: '50+ Camps Organized'
    },
    {
      icon: '👨‍🎓',
      title: 'Youth Awareness Programs',
      description: 'Engaging and educating the youth on education, health, employment opportunities, and social responsibility.',
      color: theme.colors.primary.magenta,
      stats: '2,000+ Youth Reached'
    }
  ];

  const sections = {
    mission: {
      title: 'Our Mission',
      content: 'To empower rural communities by promoting health, education, and social awareness while working towards a drug-free and environmentally sustainable society.',
      icon: '🎯'
    },
    vision: {
      title: 'Our Vision',
      content: 'To build a healthier, greener, and progressive Bihar where every individual lives with dignity, free from addiction, and in harmony with nature.',
      icon: '🌟'
    },
    impact: {
      title: 'Our Impact',
      content: 'Through dedicated efforts and community partnerships, we have created lasting positive change in over 100 villages across Bihar, touching thousands of lives.',
      icon: '📈'
    }
  };

  return (
    <div 
      ref={containerRef}
      style={{
        minHeight: '100vh',
        padding: '80px 16px',
        position: 'relative',
        overflow: 'hidden',
        background: `
          radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${theme.services.foundation.bgParticle} 0%, transparent 50%),
          radial-gradient(circle at ${mousePos.x * 0.8}px ${mousePos.y * 1.2}px, ${theme.services.foundation.bgParticle} 0%, transparent 50%),
          linear-gradient(135deg, ${theme.colors.dark.primary} 0%, ${theme.colors.dark.secondary} 50%, ${theme.colors.dark.tertiary} 100%)
        `
      }}
    >
      {/* Floating Particles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              opacity: 0.2,
              background: theme.services.foundation.primary,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float${i} ${3 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Header Section */}
        <div 
          style={{
            textAlign: 'center',
            marginBottom: '80px',
            transform: visibleItems.includes('0') ? 'translateY(0)' : 'translateY(80px)',
            opacity: visibleItems.includes('0') ? 1 : 0,
            transition: 'all 1s ease'
          }}
          data-animate
          data-index="0"
        >
          <h1 
            style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              marginBottom: '24px',
              background: theme.services.foundation.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            About Our Foundation
          </h1>
          <p 
            style={{
              fontSize: '1.25rem',
              maxWidth: '896px',
              margin: '0 auto',
              lineHeight: '1.75',
              color: theme.colors.text.secondary,
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            Our NGO is dedicated to bringing positive change in the rural areas of Bihar by focusing on 
            health, awareness, and environmental sustainability. We believe that a healthy, drug-free, 
            and environmentally conscious society is the foundation of true progress.
          </p>
        </div>

        {/* Mission/Vision/Impact Tabs */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px', gap: '16px', flexWrap: 'wrap' }}>
            {Object.keys(sections).map((key) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                style={{
                  padding: '16px 32px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '1.125rem',
                  transition: 'all 0.3s ease',
                  transform: activeSection === key ? 'scale(1.05)' : 'scale(1)',
                  background: activeSection === key ? theme.services.foundation.gradient : 'transparent',
                  border: activeSection === key ? 'none' : `2px solid ${theme.colors.border.default}`,
                  color: activeSection === key ? '#000' : '#fff',
                  cursor: 'pointer',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  boxShadow: activeSection === key ? '0 10px 25px rgba(0,0,0,0.2)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== key) {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== key) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {sections[key].icon} {sections[key].title}
              </button>
            ))}
          </div>

          <div 
            style={{
              textAlign: 'center',
              padding: '40px',
              borderRadius: '16px',
              backdropFilter: 'blur(20px)',
              border: `1px solid ${theme.colors.border.default}`,
              background: theme.colors.dark.card,
              transition: 'all 0.5s ease'
            }}
          >
            <div style={{ fontSize: '4rem', marginBottom: '24px' }}>{sections[activeSection].icon}</div>
            <h2 
              style={{
                fontSize: '2.25rem',
                fontWeight: 'bold',
                marginBottom: '24px',
                color: theme.services.foundation.primary,
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              {sections[activeSection].title}
            </h2>
            <p 
              style={{
                fontSize: '1.25rem',
                lineHeight: '1.75',
                maxWidth: '896px',
                margin: '0 auto',
                color: theme.colors.text.secondary,
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              {sections[activeSection].content}
            </p>
          </div>
        </div>

        {/* Key Initiatives */}
        <div style={{ marginBottom: '80px' }}>
          <h2 
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '64px',
              color: theme.colors.text.primary,
              transform: visibleItems.includes('1') ? 'translateY(0)' : 'translateY(80px)',
              opacity: visibleItems.includes('1') ? 1 : 0,
              transition: 'all 1s ease 0.2s',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
            data-animate
            data-index="1"
          >
            Our Key Initiatives
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '32px',
            '@media (max-width: 768px)': {
              gridTemplateColumns: '1fr'
            }
          }}>
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                style={{
                  transform: visibleItems.includes(`${index + 2}`) ? 'translateY(0)' : 'translateY(80px)',
                  opacity: visibleItems.includes(`${index + 2}`) ? 1 : 0,
                  transition: `all 0.7s ease ${(index + 2) * 0.1}s`
                }}
                data-animate
                data-index={`${index + 2}`}
              >
                <div 
                  style={{
                    padding: '32px',
                    borderRadius: '16px',
                    backdropFilter: 'blur(20px)',
                    border: hoveredCard === index ? `1px solid ${initiative.color}` : `1px solid ${theme.colors.border.default}`,
                    background: theme.colors.dark.card,
                    transition: 'all 0.5s ease',
                    cursor: 'pointer',
                    transform: hoveredCard === index ? 'scale(1.05) translateY(-8px)' : 'scale(1) translateY(0)',
                    boxShadow: hoveredCard === index ? `0 20px 40px ${initiative.color}20` : 'none'
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div style={{
                    fontSize: '4rem',
                    marginBottom: '24px',
                    transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                  }}>
                    {initiative.icon}
                  </div>
                  <h3 
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '16px',
                      color: initiative.color,
                      transition: 'all 0.3s ease',
                      fontFamily: 'Inter, system-ui, sans-serif'
                    }}
                  >
                    {initiative.title}
                  </h3>
                  <p 
                    style={{
                      fontSize: '1.125rem',
                      lineHeight: '1.75',
                      marginBottom: '24px',
                      color: theme.colors.text.secondary,
                      fontFamily: 'Inter, system-ui, sans-serif'
                    }}
                  >
                    {initiative.description}
                  </p>
                  <div 
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      display: 'inline-block',
                      background: `${initiative.color}20`,
                      color: initiative.color,
                      fontFamily: 'Inter, system-ui, sans-serif'
                    }}
                  >
                    {initiative.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div 
          style={{
            textAlign: 'center',
            transform: visibleItems.includes('6') ? 'translateY(0)' : 'translateY(80px)',
            opacity: visibleItems.includes('6') ? 1 : 0,
            transition: 'all 1s ease 0.7s'
          }}
          data-animate
          data-index="6"
        >
          <div 
            style={{
              padding: '48px',
              borderRadius: '24px',
              backdropFilter: 'blur(20px)',
              border: `1px solid ${theme.colors.border.default}`,
              background: theme.colors.dark.card
            }}
          >
            <h3 
              style={{
                fontSize: '2.25rem',
                fontWeight: 'bold',
                marginBottom: '24px',
                color: theme.services.foundation.primary,
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              Join Our Mission
            </h3>
            <p 
              style={{
                fontSize: '1.25rem',
                marginBottom: '32px',
                maxWidth: '512px',
                margin: '0 auto 32px auto',
                color: theme.colors.text.secondary,
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              Together, we can create lasting change in Bihar's rural communities. 
              Every contribution, no matter how small, makes a difference.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
              <button 
                style={{
                  padding: '16px 32px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '1.125rem',
                  color: '#000',
                  transition: 'all 0.3s ease',
                  background: theme.services.foundation.gradient,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  minWidth: '200px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Get Involved
              </button>
              <button 
                style={{
                  padding: '16px 32px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '1.125rem',
                  transition: 'all 0.3s ease',
                  border: `2px solid ${theme.services.foundation.primary}`,
                  color: theme.colors.text.primary,
                  background: 'transparent',
                  cursor: 'pointer',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  minWidth: '200px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Keyframes for floating animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          ${[...Array(20)].map((_, i) => `
            @keyframes float${i} {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-${10 + Math.random() * 20}px) rotate(180deg); }
            }
          `).join('')}
          
          @media (max-width: 768px) {
            h1 { font-size: 2.5rem !important; }
            h2 { font-size: 2rem !important; }
            .grid { grid-template-columns: 1fr !important; }
          }
        `
      }} />
    </div>
  );
};

export default FoundationAboutUs;