import React, { useState, useEffect } from 'react';
import { Heart, Users, Globe, Target, Award, ArrowRight, Play, Quote, Newspaper } from 'lucide-react';
import tree from '../../assets/Foundation/NGOPic1.jpg'
import drug from '../../assets/Foundation/NGOPic2.jpg'
import khadi from '../../assets/Foundation/NGOPic3.jpg'
import medical from '../../assets/Foundation/NGOPic4.jpg'
import hero3 from '../../assets/ngo-hero.jpg'

import news1 from '../../assets/news/newspaper1.jpg'
import news2 from '../../assets/news/newspaper2.jpg'
import news3 from '../../assets/news/newspaper3.jpg'
import news4 from '../../assets/news/newspaper4.jpg'
import news5 from '../../assets/news/newspaper5.jpg'
import news6 from '../../assets/news/newspaper6.jpg'
import Footer from '../../components/footer';
import FoundationHeader from './foundationHeader';

// Theme from the provided theme.js
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
      tertiary: 'rgba(255, 255, 255, 0.5)'
    }
  },
  services: {
    foundation: {
      primary: '#ffaa00',
      secondary: '#ffdd00',
      gradient: 'linear-gradient(135deg, #ffdd00, #ffaa00)',
      bgParticle: 'rgba(255, 221, 0, 0.05)'
    }
  }
};

const Foundation = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeImpact, setActiveImpact] = useState(0);
  const [hoveredArea, setHoveredArea] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImpact((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const impactStats = [
    { number: '50,000+', label: 'Lives Touched', icon: Heart, color: theme.colors.primary.red },
    { number: '200+', label: 'Communities Served', icon: Users, color: theme.colors.primary.orange },
    { number: '15+', label: 'Countries Reached', icon: Globe, color: theme.colors.primary.magenta },
    { number: '100+', label: 'Programs Running', icon: Target, color: theme.services.foundation.primary }
  ];

  const focusAreas = [
    {
      title: 'Drug Deaddiction Drive',
      description: 'Comprehensive rehabilitation programs, counseling, and community support to help individuals overcome addiction and rebuild their lives.',
      icon: '📚',
      image: drug,
      stats: '50,000+ Lives Touched'
    },
    {
      title: 'Healthcare Access',
      description: 'Mobile clinics, vaccination drives, and health awareness programs bringing medical care to remote areas.',
      icon: '🏥',
      image: medical,
      stats: '15,000+ Patients Treated'
    },
    {
      title: 'Environmental Conservation',
      description: 'Reforestation projects, clean water initiatives, and sustainable farming programs protecting our planet.',
      icon: '🌱',
      image: tree,
      stats: '100,000+ Trees Planted'
    },
    {
      title: 'Economic Empowerment',
      description: 'Microfinance, vocational training, and entrepreneurship support helping communities achieve financial independence.',
      icon: '💼',
      image: khadi,
      stats: '5,000+ Entrepreneurs Supported'
    }
  ];

  const newspaperCuttings = [
    {
      title: "Star Universal Foundation Builds 50 Schools in Rural Areas",
      newspaper: "Times of India",
      date: "March 15, 2024",
      excerpt: "A remarkable initiative that has transformed education accessibility in remote villages across three states...",
      image: news1
    },
    {
      title: "Healthcare Revolution: Mobile Clinics Reach Remote Communities",
      newspaper: "Hindustan Times",
      date: "February 28, 2024",
      excerpt: "The foundation's innovative mobile healthcare program has successfully treated over 15,000 patients...",
      image: news2
    },
    {
      title: "Environmental Champions: 100,000 Trees Planted This Year",
      newspaper: "The Hindu",
      date: "January 20, 2024",
      excerpt: "Star Universal Foundation's green initiative shows remarkable progress in combating climate change...",
      image: news3
    },
    {
      title: "Empowering Women Entrepreneurs in Rural India",
      newspaper: "Economic Times",
      date: "December 10, 2023",
      excerpt: "Microfinance programs have enabled thousands of women to start their own businesses and achieve financial independence...",
      image: news4
    },
    {
      title: "Digital Learning Centers Transform Village Education",
      newspaper: "Indian Express",
      date: "November 5, 2023",
      excerpt: "Technology-enabled learning centers are bridging the digital divide in remote communities...",
      image: news5
    },
    {
      title: "Clean Water Initiative Reaches 100 Villages",
      newspaper: "Deccan Herald",
      date: "October 18, 2023",
      excerpt: "Sustainable water solutions have provided clean drinking water access to over 50,000 villagers...",
      image: news6
    }
  ];

  return (
    <div style={{
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #111827 0%, #000000 50%, #111827 100%)',
      color: 'white',
      overflow: 'hidden',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      <FoundationHeader />

      {/* Animated Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.3,
        background: `
          radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${theme.services.foundation.bgParticle} 0%, transparent 50%),
          radial-gradient(circle at ${mousePos.x * 0.8}px ${mousePos.y * 1.2}px, ${theme.services.foundation.bgParticle} 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }} />

      {/* Hero Section */}
<section
  style={{
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${hero3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
  }}
>
  {/* Gradient Overlays */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to right, rgba(0,0,0,0.75), transparent)",
        zIndex: 5,
      }}
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(135deg, rgba(161,98,7,0.25), rgba(194,65,12,0.25))",
        zIndex: 6,
      }}
    />
  </div>

  {/* Content */}
  <div
    style={{
      position: "relative",
      zIndex: 10,
      maxWidth: "1100px",
      margin: "0 auto",
      textAlign: "center",
      padding: "0 24px",
    }}
  >
    {/* Badge */}
    <div style={{ marginBottom: "24px" }}>
      <span
        style={{
          display: "inline-block",
          padding: "10px 22px",
          borderRadius: "40px",
          fontSize: "14px",
          fontWeight: "600",
          background: theme.services.foundation.gradient,
          color: theme.colors.dark.primary,
          boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
        }}
      >
        🤝 Transforming Lives, Building Futures
      </span>
    </div>

    {/* Heading */}
    <h1
      style={{
        fontSize: window.innerWidth >= 768 ? "64px" : "42px",
        fontWeight: 800,
        marginBottom: "16px",
        lineHeight: 1.1,
        color: "#fff",
      }}
    >
      Star Universal <br />
      <span
        style={{
          background: theme.services.foundation.gradient,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Foundation
      </span>
    </h1>

    {/* Subtitle */}
    <p
      style={{
        fontSize: window.innerWidth >= 768 ? "22px" : "18px",
        color: "#e5e7eb",
        marginBottom: "40px",
        maxWidth: "700px",
        margin: "0 auto",
        lineHeight: 1.6,
      }}
    >
      Empowering communities across the globe through sustainable development,
      education, healthcare, and environmental conservation initiatives.
    </p>

    {/* Buttons */}
    <div
      style={{
        display: "flex",
        flexDirection: window.innerWidth >= 640 ? "row" : "column",
        gap: "16px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* CTA Button */}
      <button
        style={{
          padding: "16px 32px",
          borderRadius: "50px",
          fontWeight: "600",
          color: "black",
          background: theme.services.foundation.gradient,
          border: "none",
          cursor: "pointer",
          transition: "transform 0.3s ease",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontSize: "16px",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Join Our Mission <ArrowRight size={20} />
      </button>

      {/* Secondary Button */}
      <button
        style={{
          padding: "16px 32px",
          borderRadius: "50px",
          border: "2px solid rgba(251, 191, 36, 0.4)",
          color: "white",
          background: "transparent",
          cursor: "pointer",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontSize: "16px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#fbbf24";
          e.currentTarget.style.backgroundColor = "rgba(251,191,36,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(251,191,36,0.4)";
          e.currentTarget.style.backgroundColor = "transparent";
        }}
      >
        <Play size={20} /> Watch Our Story
      </button>
    </div>
  </div>
</section>


      {/* Impact Statistics */}
      <section style={{ padding: '80px 0', position: 'relative' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
          gap: '32px',
          padding: '0 24px'
        }}>
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} style={{
                textAlign: 'center',
                padding: '24px',
                borderRadius: '16px',
                transition: 'all 0.5s ease',
                transform: activeImpact === index ? 'scale(1.1)' : 'scale(1)',
                background: activeImpact === index ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)'
              }}>
                <Icon size={48} style={{ color: stat.color, margin: '0 auto 16px', display: 'block' }} />
                <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '8px', color: stat.color }}>
                  {stat.number}
                </div>
                <div style={{ color: '#d1d5db' }}>{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mission Statement */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{
          maxWidth: '896px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <Quote size={64} style={{ color: '#fbbf24', margin: '0 auto 32px', display: 'block' }} />
          <blockquote style={{
            fontSize: window.innerWidth >= 768 ? '32px' : '24px',
            fontWeight: '300',
            lineHeight: '1.5',
            color: '#e5e7eb',
            marginBottom: '32px',
            margin: '0 0 32px 0'
          }}>
            "We believe that every human being deserves access to education, healthcare,
            and opportunities for growth. Through collaborative action and sustainable solutions,
            we're building a world where potential knows no boundaries."
          </blockquote>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(to right, #fbbf24, #f97316)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'black',
              fontWeight: 'bold'
            }}>
              SF
            </div>
            <div>
              <div style={{ fontWeight: '600' }}>Star Universal Foundation</div>
              <div style={{ color: '#9ca3af' }}>Founders & Board</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newspaper Coverage Section */}
      <section style={{ padding: '80px 24px', background: 'rgba(255, 255, 255, 0.02)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <Newspaper size={64} style={{ color: theme.services.foundation.primary, margin: '0 auto 24px', display: 'block' }} />
            <h2 style={{
              fontSize: window.innerWidth >= 768 ? '48px' : '36px',
              fontWeight: 'bold',
              marginBottom: '24px',
              margin: '0 0 24px 0'
            }}>
              <span style={{ color: theme.services.foundation.primary }}>Media</span> Coverage
            </h2>
            <p style={{
              fontSize: '20px',
              color: '#d1d5db',
              maxWidth: '768px',
              margin: '0 auto'
            }}>
              Our impact recognized by leading newspapers and media outlets across the nation
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 1024 ? 'repeat(3, 1fr)' : window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
            gap: '32px'
          }}>
            {newspaperCuttings.map((cutting, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                {/* Newspaper Image */}
                <div style={{
                  aspectRatio: '4/5',
                  background: 'linear-gradient(135deg, rgba(161, 98, 7, 0.1), rgba(194, 65, 12, 0.1))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(254, 240, 138, 0.5)',
                  fontSize: '16px',
                  padding: '20px',
                  position: 'relative'
                }}>

                  <div style={{ textAlign: 'center' }}>
                    <Newspaper size={40} style={{ marginBottom: '8px' }} />
                    <img
                      src={cutting.image}
                      alt={`${cutting.title} in action`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                    {/* <div style={{ fontSize: '12px', marginTop: '8px' }}>{cutting.newspaper}</div> */}
                  </div>
                </div>


                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '8px',
                    margin: '0 0 8px 0',
                    lineHeight: '1.4'
                  }}>
                    {cutting.title}
                  </h3>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '12px',
                    fontSize: '14px',
                    color: '#9ca3af'
                  }}>
                    {/* <span style={{
                      background: theme.services.foundation.gradient,
                      color: theme.colors.dark.primary,
                      padding: '2px 8px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      {cutting.newspaper}
                    </span> */}
                    <span>{cutting.date}</span>
                  </div>

                  <p style={{
                    color: '#d1d5db',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    margin: 0
                  }}>
                    {cutting.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button style={{
              padding: '16px 32px',
              borderRadius: '50px',
              border: `2px solid ${theme.services.foundation.primary}`,
              color: theme.services.foundation.primary,
              background: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '16px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              margin: '0 auto'
            }}
              onMouseEnter={(e) => {
                e.target.style.background = theme.services.foundation.primary;
                e.target.style.color = 'black';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = theme.services.foundation.primary;
                e.target.style.transform = 'scale(1)';
              }}>
              View All Coverage <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: window.innerWidth >= 768 ? '48px' : '36px',
              fontWeight: 'bold',
              marginBottom: '24px',
              margin: '0 0 24px 0'
            }}>
              Our <span style={{ color: theme.services.foundation.primary }}>Focus Areas</span>
            </h2>
            <p style={{
              fontSize: '20px',
              color: '#d1d5db',
              maxWidth: '768px',
              margin: '0 auto'
            }}>
              Comprehensive programs designed to create lasting impact across multiple sectors
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
            gap: '32px'
          }}>
            {focusAreas.map((area, index) => (
              <div key={index} style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoveredArea(index)}
                onMouseLeave={() => setHoveredArea(null)}>
                <div style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  transition: 'all 0.5s ease',
                  transform: hoveredArea === index ? 'scale(1.05)' : 'scale(1)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{
                    aspectRatio: '16/9',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={area.image}
                      alt={`${area.title} in action`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        color: 'white',
                        fontSize: '48px',
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                      }}>
                        {area.icon}
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: '32px' }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      marginBottom: '16px',
                      color: 'white',
                      margin: '0 0 16px 0'
                    }}>
                      {area.title}
                    </h3>
                    <p style={{
                      color: '#d1d5db',
                      marginBottom: '24px',
                      lineHeight: '1.5',
                      margin: '0 0 24px 0'
                    }}>
                      {area.description}
                    </p>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <div style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        padding: '4px 12px',
                        borderRadius: '50px',
                        background: theme.services.foundation.gradient,
                        color: theme.colors.dark.primary
                      }}>
                        {area.stats}
                      </div>
                      <ArrowRight size={20} style={{
                        color: '#fbbf24',
                        transition: 'transform 0.3s ease',
                        transform: hoveredArea === index ? 'translateX(8px)' : 'translateX(0)'
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{
          maxWidth: '896px',
          margin: '0 auto',
          borderRadius: '24px',
          padding: '48px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            background: theme.services.foundation.gradient
          }} />

          <div style={{ position: 'relative', zIndex: 10 }}>
            <Award size={64} style={{ color: '#fbbf24', margin: '0 auto 24px', display: 'block' }} />
            <h2 style={{
              fontSize: window.innerWidth >= 768 ? '36px' : '32px',
              fontWeight: 'bold',
              marginBottom: '24px',
              margin: '0 0 24px 0'
            }}>
              Be Part of the <span style={{ color: theme.services.foundation.primary }}>Change</span>
            </h2>
            <p style={{
              fontSize: '20px',
              color: '#d1d5db',
              marginBottom: '32px',
              maxWidth: '512px',
              margin: '0 auto 32px'
            }}>
              Every contribution, whether time, resources, or expertise, creates ripple effects
              that transform communities and lives.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: window.innerWidth >= 640 ? 'row' : 'column',
              gap: '16px',
              justifyContent: 'center'
            }}>
              <button style={{
                padding: '16px 32px',
                borderRadius: '50px',
                fontWeight: '600',
                color: 'black',
                background: theme.services.foundation.gradient,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '16px'
              }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                Donate Now
              </button>
              <button style={{
                padding: '16px 32px',
                borderRadius: '50px',
                border: '2px solid rgba(251, 191, 36, 0.3)',
                color: 'white',
                background: 'transparent',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '16px'
              }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#fbbf24';
                  e.target.style.backgroundColor = 'rgba(251, 191, 36, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(251, 191, 36, 0.3)';
                  e.target.style.backgroundColor = 'transparent';
                }}>
                Become a Volunteer
              </button>
              <button style={{
                padding: '16px 32px',
                borderRadius: '50px',
                border: '2px solid rgba(251, 191, 36, 0.3)',
                color: 'white',
                background: 'transparent',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '16px'
              }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#fbbf24';
                  e.target.style.backgroundColor = 'rgba(251, 191, 36, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(251, 191, 36, 0.3)';
                  e.target.style.backgroundColor = 'transparent';
                }}>
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <Footer />
    </div>
  );
};

export default Foundation;