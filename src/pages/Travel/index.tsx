import React, { useState, useEffect } from 'react';
import { Plane, Train, Bus, Car, MapPin, Star, Phone, Mail, Clock, Shield, Award, Users } from 'lucide-react';
import Footer from '../../components/footer';
import logo from '../../assets/SUGLogo.png'
import theme from '../../utils/theme';
import Bihar from '../../assets/travel/Bihar.jpeg'
import India from '../../assets/travel/India.jpeg'
import Nepal from '../../assets/travel/Nepal.jpeg'
import TravelHeader from './travelHeader';
import hero2 from '../../assets/nepal-tour.jpg'

const StarUniversalTravel = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(testimonialTimer);
  }, []);

  // const theme = {
  //   colors: {
  //     primary: {
  //       red: '#ff4444',
  //       orange: '#ff8800',
  //       yellow: '#ffdd00',
  //       gold: '#ffaa00',
  //       magenta: '#ee44aa',
  //       purple: '#cc2288'
  //     },
  //     dark: {
  //       primary: '#0a0a0a',
  //       secondary: '#1a1a1a',
  //       tertiary: '#0f0f0f',
  //       card: 'rgba(255, 255, 255, 0.05)',
  //       cardHover: 'rgba(255, 255, 255, 0.1)'
  //     },
  //     text: {
  //       primary: '#ffffff',
  //       secondary: 'rgba(255, 255, 255, 0.7)',
  //       tertiary: 'rgba(255, 255, 255, 0.5)',
  //       muted: 'rgba(255, 255, 255, 0.3)'
  //     },
  //     border: {
  //       default: 'rgba(255, 255, 255, 0.1)',
  //       hover: 'rgba(255, 255, 255, 0.2)'
  //     }
  //   },
  //   services: {
  //     travel: {
  //       primary: '#ee44aa',
  //       secondary: '#cc2288',
  //       gradient: 'linear-gradient(135deg, #ee44aa, #cc2288)',
  //       bgParticle: 'rgba(238, 68, 170, 0.05)'
  //     }
  //   }
  // };

  const services = [
    {
      id: 'flights',
      icon: <Plane style={{ width: '48px', height: '48px' }} />,
      title: 'Flight Booking',
      description: 'Domestic and international flight reservations with best prices across all major airlines',
      features: ['Pan-India Coverage', 'International Routes', 'Instant Confirmation', '24/7 Support'],
      color: theme.colors.primary.red,
      gradient: 'linear-gradient(135deg, #ff4444, #ff8800)'
    },
    {
      id: 'railways',
      icon: <Train style={{ width: '48px', height: '48px' }} />,
      title: 'Railway Reservations',
      description: 'Complete railway booking services for all classes including Tatkal and premium trains',
      features: ['All Train Classes', 'Tatkal Booking', 'Group Reservations', 'Route Planning'],
      color: theme.colors.primary.orange,
      gradient: 'linear-gradient(135deg, #ff8800, #ffaa00)'
    },
    {
      id: 'buses',
      icon: <Bus style={{ width: '48px', height: '48px' }} />,
      title: 'Bus Services',
      description: 'Luxury and regular bus bookings connecting Bihar, Nepal, and major Indian cities',
      features: ['AC & Non-AC Options', 'Sleeper Coaches', 'Bihar-Nepal Routes', 'Advance Booking'],
      color: theme.colors.primary.magenta,
      gradient: 'linear-gradient(135deg, #ee44aa, #cc2288)'
    },
    {
      id: 'taxis',
      icon: <Car style={{ width: '48px', height: '48px' }} />,
      title: 'Taxi & Car Rental',
      description: 'Premium taxi services and car rentals for local and outstation journeys',
      features: ['Local & Outstation', 'Airport Transfers', 'Wedding Cars', 'Corporate Travel'],
      color: theme.colors.primary.gold,
      gradient: 'linear-gradient(135deg, #ffaa00, #ffdd00)'
    }
  ];

  const stats = [
    { icon: <Users />, value: '50,000+', label: 'Happy Customers' },
    { icon: <MapPin />, value: '500+', label: 'Cities Connected' },
    { icon: <Award />, value: '15+', label: 'Years Experience' },
    { icon: <Shield />, value: '99.9%', label: 'Success Rate' }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Patna, Bihar',
      text: 'Excellent service for my family trip to Nepal. The bus was comfortable and the journey was smooth.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      location: 'Muzaffarpur, Bihar',
      text: 'Best railway booking service in Bihar. Got confirmed tickets even during festival season.',
      rating: 5
    },
    {
      name: 'Amit Singh',
      location: 'Kathmandu, Nepal',
      text: 'Reliable taxi service for airport transfers. Professional drivers and fair pricing.',
      rating: 5
    }
  ];

  const createServiceBackground = (service) => ({
    background: `
      radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${theme.services.travel.bgParticle} 0%, transparent 50%),
      radial-gradient(circle at ${mousePos.x * 0.8}px ${mousePos.y * 1.2}px, ${theme.services.travel.bgParticle} 0%, transparent 50%),
      linear-gradient(135deg, ${theme.colors.dark.primary} 0%, ${theme.colors.dark.secondary} 50%, ${theme.colors.dark.tertiary} 100%)
    `
  });

  const createHoverCard = (service, isHovered) => ({
    background: isHovered
      ? `linear-gradient(135deg, ${theme.colors.dark.cardHover} 0%, ${theme.colors.dark.card} 100%)`
      : theme.colors.dark.card,
    backdropFilter: 'blur(20px)',
    border: isHovered
      ? `2px solid ${service.color}40`
      : `1px solid ${theme.colors.border.default}`,
    borderRadius: '24px',
    transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
    boxShadow: isHovered
      ? `0 25px 50px -12px ${service.color}25, 0 0 0 1px ${service.color}20`
      : '0 20px 25px rgba(0, 0, 0, 0.15)'
  });

  // Global styles to remove viewport white border
  const globalStyles = {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  };

  // Apply global styles to html and body
  useEffect(() => {
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        color: '#ffffff',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        margin: 0,
        padding: 0,
        ...createServiceBackground('travel')
      }}
    >
      <TravelHeader />
      {/* Hero Section */}
    <section
  style={{
    position: "relative",
    zIndex: 10,
    width: "100%",
    minHeight: "100vh", // 👈 Full screen height
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundImage: `url(${hero2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark Overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.6)", // 👈 Adjustable darkness
      zIndex: 1,
    }}
  ></div>

  {/* Hero Content */}
  <div style={{ position: "relative", zIndex: 2, padding: "40px" }}>
    <h1
      style={{
        fontSize: "80px",
        fontWeight: "800",
        marginBottom: "24px",
        lineHeight: "1.1",
        background: theme.services.travel.gradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      Travel Beyond
      <br />
      Boundaries
    </h1>
    <p
      style={{
        fontSize: "24px",
        marginBottom: "32px",
        maxWidth: "768px",
        margin: "0 auto 32px auto",
        fontWeight: "300",
        lineHeight: "1.6",
        color: theme.colors.text.secondary,
      }}
    >
      Premium travel services connecting Bihar, Nepal, and Pan-India. Experience
      seamless journeys with flights, trains, buses, and taxi services.
    </p>

    {/* Buttons */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          padding: "16px 32px",
          borderRadius: "16px",
          color: "white",
          fontWeight: "600",
          fontSize: "18px",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
          background: theme.services.travel.gradient,
          boxShadow: `0 10px 30px ${theme.colors.primary.magenta}30`,
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.05)";
          e.target.style.boxShadow = `0 20px 40px ${theme.colors.primary.magenta}40`;
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = `0 10px 30px ${theme.colors.primary.magenta}30`;
        }}
      >
        Book Your Journey
      </button>
      <button
        style={{
          padding: "16px 32px",
          borderRadius: "16px",
          fontWeight: "600",
          fontSize: "18px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          background: theme.colors.dark.card,
          border: `2px solid ${theme.colors.border.default}`,
          color: theme.colors.text.primary,
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
        }}
      >
        Explore Services
      </button>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                marginBottom: '24px',
                color: theme.colors.text.primary,
                margin: '0 0 24px 0'
              }}
            >
              Complete Travel Solutions
            </h2>
            <p
              style={{
                fontSize: '20px',
                maxWidth: '768px',
                margin: '0 auto',
                color: theme.colors.text.secondary
              }}
            >
              From flights to local transport, we provide comprehensive travel services across Bihar, Nepal, and all major Indian destinations.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {services.map((service, index) => (
              <div
                key={service.id}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  ...createHoverCard(service, hoveredService === service.id)
                }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div style={{ padding: '32px' }}>
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                      margin: '0 auto 24px auto',
                      background: service.gradient,
                      color: 'white'
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      marginBottom: '16px',
                      textAlign: 'center',
                      color: theme.colors.text.primary,
                      margin: '0 0 16px 0'
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      textAlign: 'center',
                      marginBottom: '24px',
                      lineHeight: '1.6',
                      color: theme.colors.text.secondary,
                      margin: '0 0 24px 0'
                    }}
                  >
                    {service.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: '14px',
                          color: theme.colors.text.tertiary,
                          marginBottom: '8px'
                        }}
                      >
                        <div
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            marginRight: '12px',
                            background: service.color
                          }}
                        ></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px'
          }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '24px',
                  borderRadius: '16px',
                  background: theme.colors.dark.card,
                  border: `1px solid ${theme.colors.border.default}`
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto',
                    background: theme.services.travel.gradient,
                    color: 'white'
                  }}
                >
                  {React.cloneElement(stat.icon, { style: { width: '32px', height: '32px' } })}
                </div>
                <div
                  style={{
                    fontSize: '48px',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: theme.colors.text.primary,
                    margin: '0 0 8px 0'
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    color: theme.colors.text.secondary,
                    margin: 0
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                marginBottom: '24px',
                color: theme.colors.text.primary,
                margin: '0 0 24px 0'
              }}
            >
              Popular Destinations
            </h2>
            <p
              style={{
                fontSize: '20px',
                maxWidth: '768px',
                margin: '0 auto',
                color: theme.colors.text.secondary
              }}
            >
              Connect with major cities across Bihar, Nepal, and India with our reliable transport network.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {[
              {
                title: 'Bihar Routes',
                destinations: ['Patna', 'Muzaffarpur', 'Gaya', 'Darbhanga', 'Bhagalpur', 'Purnia'],
                bgImage: Bihar
              },
              {
                title: 'Nepal Connections',
                destinations: ['Kathmandu', 'Pokhara', 'Chitwan', 'Lumbini', 'Janakpur', 'Biratnagar'],
                bgImage: Nepal
              },
              {
                title: 'Pan-India Network',
                destinations: ['Delhi', 'Mumbai', 'Kolkata', 'Bangalore', 'Chennai', 'Hyderabad'],
                bgImage: India
              }
            ].map((route, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  height: '400px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  border: `1px solid ${theme.colors.border.default}`,
                  background: `url(${route.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {/* Overlay to darken image */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.85) 100%)'
                }} />

                {/* Content at bottom */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  padding: '24px',
                  color: theme.colors.text.primary,
                  textAlign: 'center'
                }}>
                  <h3 style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    marginBottom: '16px'
                  }}>
                    {route.title}
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px'
                  }}>
                    {route.destinations.map((dest, idx) => (
                      <div
                        key={idx}
                        style={{
                          padding: '8px 16px',
                          borderRadius: '12px',
                          textAlign: 'center',
                          fontSize: '14px',
                          background: theme.colors.dark.secondary,
                          color: theme.colors.text.secondary,
                          transition: 'transform 0.2s ease, background 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1)';
                          e.currentTarget.style.background = theme.colors.dark.cardHover;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.background = theme.colors.dark.secondary;
                        }}
                      >
                        {dest}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                marginBottom: '24px',
                color: theme.colors.text.primary,
                margin: '0 0 24px 0'
              }}
            >
              What Our Customers Say
            </h2>
          </div>

          <div
            style={{
              padding: '48px',
              borderRadius: '24px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              background: theme.colors.dark.card,
              border: `1px solid ${theme.colors.border.default}`
            }}
          >
            <div style={{ marginBottom: '32px' }}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  style={{
                    width: '32px',
                    height: '32px',
                    display: 'inline-block',
                    margin: '0 4px',
                    color: theme.colors.primary.gold,
                    fill: theme.colors.primary.gold
                  }}
                />
              ))}
            </div>
            <blockquote
              style={{
                fontSize: '32px',
                marginBottom: '32px',
                lineHeight: '1.6',
                color: theme.colors.text.primary,
                margin: '0 0 32px 0',
                fontStyle: 'italic'
              }}
            >
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            <div>
              <div
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '4px',
                  color: theme.colors.text.primary,
                  margin: '0 0 4px 0'
                }}
              >
                {testimonials[currentTestimonial].name}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: theme.colors.text.tertiary,
                  margin: 0
                }}
              >
                {testimonials[currentTestimonial].location}
              </div>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '32px',
              gap: '8px'
            }}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    background: index === currentTestimonial
                      ? theme.colors.primary.magenta
                      : theme.colors.text.muted
                  }}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              padding: '48px',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              background: theme.services.travel.gradient,
              boxShadow: `0 30px 60px ${theme.colors.primary.magenta}20`
            }}
          >
            <h2 style={{
              fontSize: '64px',
              fontWeight: 'bold',
              marginBottom: '24px',
              color: 'white',
              margin: '0 0 24px 0'
            }}>
              Ready to Start Your Journey?
            </h2>
            <p style={{
              fontSize: '20px',
              marginBottom: '32px',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '512px',
              margin: '0 auto 32px auto'
            }}>
              Book your tickets now and experience the difference with Star Universal Travel. Available 24/7 for all your travel needs.
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <button style={{
                padding: '16px 32px',
                background: 'white',
                color: 'black',
                borderRadius: '16px',
                fontWeight: '600',
                fontSize: '18px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}>
                Book Now
              </button>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'white'
              }}>
                <Phone style={{ width: '20px', height: '20px' }} />
                <span style={{ fontSize: '18px', fontWeight: '500' }}>
                  Call: +91-9097963373
                </span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default StarUniversalTravel;
