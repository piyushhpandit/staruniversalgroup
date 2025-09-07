import React, { useState, useEffect } from 'react';
import {
    Users,
    Target,
    Lightbulb,
    Award,
    Star,
    Zap,
    Heart,
    CheckCircle,
    ArrowRight,
    Quote,
    Sparkles,
    Building,
    Globe,
    Trophy
} from 'lucide-react';
import EventsHeader from './eventHeader';
import Footer from '../../components/footer';
import hero from '../../assets/wedding hero.jpg'
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
            tertiary: 'rgba(255, 255, 255, 0.5)',
            muted: 'rgba(255, 255, 255, 0.3)'
        },
        border: {
            default: 'rgba(255, 255, 255, 0.1)',
            hover: 'rgba(255, 255, 255, 0.2)'
        }
    },
    services: {
        events: {
            primary: '#ff4444',
            secondary: '#ff8800',
            gradient: 'linear-gradient(135deg, #ff4444, #ff8800)',
            bgParticle: 'rgba(255, 68, 68, 0.05)'
        }
    },
    borderRadius: {
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        xxl: '2rem',
        full: '50%'
    },
    shadows: {
        sm: '0 4px 6px rgba(0, 0, 0, 0.1)',
        md: '0 10px 15px rgba(0, 0, 0, 0.1)',
        lg: '0 20px 25px rgba(0, 0, 0, 0.15)',
        xl: '0 25px 50px rgba(0, 0, 0, 0.2)'
    },
    transitions: {
        fast: '0.15s ease',
        medium: '0.3s ease',
        slow: '0.6s ease',
        bouncy: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    }
};

const AboutUs = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [activeObjective, setActiveObjective] = useState(0);
    const [hoveredService, setHoveredService] = useState(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveObjective((prev) => (prev + 1) % 5);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const objectives = [
        {
            icon: Target,
            text: "To provide the necessary expertise in managing the client's program from initial concept to completion of the event.",
            color: theme.colors.primary.red
        },
        {
            icon: Star,
            text: "To exceed our client's expectations.",
            color: theme.colors.primary.orange
        },
        {
            icon: Sparkles,
            text: "To provide an event that will be remembered as a 'unique experience'.",
            color: theme.colors.primary.yellow
        },
        {
            icon: Award,
            text: "To maintain a consistent, high level of service.",
            color: theme.colors.primary.magenta
        },
        {
            icon: Heart,
            text: "To be fair, honest and ethical in all dealings with our employees, clients and suppliers.",
            color: theme.colors.primary.purple
        }
    ];

    const services = [
        {
            title: "Event Planning & Management",
            description: "Complete end-to-end event solutions for personal, corporate, and marketing events",
            icon: "🎯",
            features: ["Corporate Events", "Personal Celebrations", "Marketing Events", "Product Launches"]
        },
        {
            title: "Conferences & Exhibitions",
            description: "Professional conference management and exhibition setup services",
            icon: "🏢",
            features: ["Conference Planning", "Exhibition Stalls", "Consumer Shows", "Trade Shows"]
        },
        {
            title: "Fabrication & Design",
            description: "In-house fabrication workshop for custom setups and designs",
            icon: "🔨",
            features: ["Stage Design", "Wedding Setups", "Thematic Sets", "Custom Fabrication"]
        },
        {
            title: "Digital Solutions",
            description: "Web-based event registration and online conference management",
            icon: "💻",
            features: ["Online Registration", "Digital Marketing", "Event Websites", "Virtual Events"]
        }
    ];

    return (
        <div style={{
            margin: 0,
            padding: 0,
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #111827 0%, #000000 50%, #111827 100%)',
            color: 'white',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
        }}>

            <EventsHeader />

            {/* Animated Background */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.3,
                background: `
          radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${theme.services.events.bgParticle} 0%, transparent 50%),
          radial-gradient(circle at ${mousePos.x * 0.8}px ${mousePos.y * 1.2}px, ${theme.services.events.bgParticle} 0%, transparent 50%)
        `,
                pointerEvents: 'none'
            }} />

            {/* Hero Section */}
            <section
                style={{
                    position: 'relative',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 24px',
                    overflow: 'hidden',
                    backgroundImage: `
 
      url(${hero})
    `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >

                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <img
                            src="/api/placeholder/1920/1080"
                            alt="About Star Universal"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                position: 'absolute',
                                top: 0,
                                left: 0
                            }}
                        />
                        {/* Dark overlay */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))',
                            zIndex: 5
                        }} />
                        {/* Events gradient overlay */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(135deg, rgba(255, 68, 68, 0.2), rgba(255, 136, 0, 0.1))',
                            zIndex: 6
                        }} />
                    </div>
                </div>

                <div style={{
                    position: 'relative',
                    zIndex: 20,
                    maxWidth: '1152px',
                    textAlign: 'center'
                }}>
                    <div style={{ marginBottom: '32px' }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '12px 24px',
                            borderRadius: '50px',
                            fontSize: '14px',
                            fontWeight: '600',
                            marginBottom: '24px',
                            background: theme.services.events.gradient,
                            color: 'white'
                        }}>
                            🎉 Creating Extraordinary Experiences
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: window.innerWidth >= 768 ? '72px' : '48px',
                        fontWeight: 'bold',
                        marginBottom: '24px',
                        lineHeight: '1.1',
                        margin: '0 0 24px 0'
                    }}>
                        <span>About</span>
                        <br />
                        <span style={{
                            background: theme.services.events.gradient,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent'
                        }}>
                            Star Universal
                        </span>
                    </h1>

                    <p style={{
                        fontSize: window.innerWidth >= 768 ? '24px' : '20px',
                        color: '#d1d5db',
                        marginBottom: '48px',
                        maxWidth: '768px',
                        margin: '0 auto 48px auto',
                        lineHeight: '1.5'
                    }}>
                        Professional event management company based in Patna, Bihar,
                        integrating creativity, technology & communication to create
                        high-profile & entertaining events.
                    </p>

                    <div style={{
                        display: 'flex',
                        flexDirection: window.innerWidth >= 640 ? 'row' : 'column',
                        gap: '16px',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <button style={{
                            padding: '16px 32px',
                            borderRadius: '50px',
                            fontWeight: '600',
                            color: 'white',
                            background: theme.services.events.gradient,
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            fontSize: '16px'
                        }}
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                            Our Services <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section style={{ padding: '80px 24px', background: 'rgba(255, 255, 255, 0.02)' }}>
                <div style={{
                    maxWidth: '1152px',
                    margin: '0 auto',
                    textAlign: 'center'
                }}>
                    <Quote size={64} style={{ color: theme.colors.primary.red, margin: '0 auto 32px', display: 'block' }} />
                    <blockquote style={{
                        fontSize: window.innerWidth >= 768 ? '32px' : '24px',
                        fontWeight: '300',
                        lineHeight: '1.5',
                        color: '#e5e7eb',
                        marginBottom: '32px',
                        margin: '0 0 32px 0'
                    }}>
                        "Explore, Excel, Expand... The vision is to zoom to perfection!
                        Your success is our mission! Perfection is our mission.
                        Your permission is all we need to achieve our mission of making your dream event a reality!"
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
                            background: theme.services.events.gradient,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold'
                        }}>
                            SU
                        </div>
                        <div>
                            <div style={{ fontWeight: '600' }}>Star Universal</div>
                            <div style={{ color: '#9ca3af' }}>Event Management Company</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section style={{ padding: '80px 24px' }}>
                <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <Building size={64} style={{ color: theme.colors.primary.orange, margin: '0 auto 24px', display: 'block' }} />
                        <h2 style={{
                            fontSize: window.innerWidth >= 768 ? '48px' : '36px',
                            fontWeight: 'bold',
                            marginBottom: '24px',
                            margin: '0 0 24px 0'
                        }}>
                            Our <span style={{ color: theme.colors.primary.red }}>Story</span>
                        </h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
                        gap: '48px',
                        alignItems: 'center'
                    }}>
                        <div>
                            <p style={{
                                fontSize: '18px',
                                color: theme.colors.text.secondary,
                                lineHeight: '1.7',
                                marginBottom: '24px'
                            }}>
                                We are a professional event management company based in Patna, Bihar.
                                From events and promotions to convergence and loyalty programmes,
                                from sports events to seminars - We do it all.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: theme.colors.text.secondary,
                                lineHeight: '1.7',
                                marginBottom: '24px'
                            }}>
                                We take away the hassle of having you juggle between agencies for different needs.
                                In an era where Above the line and Below the line is converging, we are the line.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: theme.colors.text.secondary,
                                lineHeight: '1.7'
                            }}>
                                Star Universal is focused on integrating creativity, technology & communication
                                to create high profile & entertaining events. Our aim is to integrate Events &
                                Entertainment into highly effective communication vehicles.
                            </p>
                        </div>

                        <div style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '24px',
                            padding: '32px',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                            <Globe size={48} style={{ color: theme.colors.primary.yellow, marginBottom: '24px' }} />
                            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>
                                Complete Solutions
                            </h3>
                            <p style={{ color: theme.colors.text.secondary, lineHeight: '1.6' }}>
                                Event management is the new buzzword on the media, glamour and education circuits.
                                We take care of every little detail – right from the color scheme at the venue
                                to the food and beverages catering, and the amusements and contests lined up
                                for the entertainment of guests.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section style={{ padding: '80px 24px', background: 'rgba(255, 255, 255, 0.02)' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <h2 style={{
                            fontSize: window.innerWidth >= 768 ? '48px' : '36px',
                            fontWeight: 'bold',
                            marginBottom: '24px',
                            margin: '0 0 24px 0'
                        }}>
                            Our <span style={{ color: theme.colors.primary.red }}>Services</span>
                        </h2>
                        <p style={{
                            fontSize: '20px',
                            color: '#d1d5db',
                            maxWidth: '768px',
                            margin: '0 auto'
                        }}>
                            Comprehensive event management solutions tailored to your needs
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth >= 1024 ? 'repeat(2, 1fr)' : '1fr',
                        gap: '32px'
                    }}>
                        {services.map((service, index) => (
                            <div key={index}
                                style={{
                                    background: hoveredService === index ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(20px)',
                                    borderRadius: '24px',
                                    padding: '32px',
                                    border: hoveredService === index
                                        ? `2px solid ${theme.colors.primary.red}40`
                                        : '1px solid rgba(255, 255, 255, 0.1)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    transform: hoveredService === index ? 'translateY(-8px)' : 'translateY(0)'
                                }}
                                onMouseEnter={() => setHoveredService(index)}
                                onMouseLeave={() => setHoveredService(null)}>

                                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{service.icon}</div>
                                <h3 style={{
                                    fontSize: '24px',
                                    fontWeight: 'bold',
                                    marginBottom: '16px',
                                    color: 'white'
                                }}>
                                    {service.title}
                                </h3>
                                <p style={{
                                    color: theme.colors.text.secondary,
                                    lineHeight: '1.6',
                                    marginBottom: '24px'
                                }}>
                                    {service.description}
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {service.features.map((feature, idx) => (
                                        <span key={idx} style={{
                                            background: 'rgba(255, 68, 68, 0.2)',
                                            color: theme.colors.primary.red,
                                            padding: '4px 12px',
                                            borderRadius: '20px',
                                            fontSize: '14px',
                                            fontWeight: '500'
                                        }}>
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Objectives */}
            <section style={{ padding: '80px 24px' }}>
                <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <Trophy size={64} style={{ color: theme.colors.primary.magenta, margin: '0 auto 24px', display: 'block' }} />
                        <h2 style={{
                            fontSize: window.innerWidth >= 768 ? '48px' : '36px',
                            fontWeight: 'bold',
                            marginBottom: '24px',
                            margin: '0 0 24px 0'
                        }}>
                            Our <span style={{ color: theme.colors.primary.red }}>Objectives</span>
                        </h2>
                        <p style={{
                            fontSize: '20px',
                            color: '#d1d5db',
                            maxWidth: '768px',
                            margin: '0 auto'
                        }}>
                            The primary objectives that drive our commitment to excellence
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: '24px',
                        maxWidth: '896px',
                        margin: '0 auto'
                    }}>
                        {objectives.map((objective, index) => {
                            const Icon = objective.icon;
                            return (
                                <div key={index} style={{
                                    background: activeObjective === index
                                        ? 'rgba(255, 255, 255, 0.1)'
                                        : 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(20px)',
                                    borderRadius: '20px',
                                    padding: '32px',
                                    border: activeObjective === index
                                        ? `2px solid ${objective.color}`
                                        : '1px solid rgba(255, 255, 255, 0.1)',
                                    transition: 'all 0.5s ease',
                                    transform: activeObjective === index ? 'scale(1.02)' : 'scale(1)'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '24px'
                                    }}>
                                        <div style={{
                                            width: '64px',
                                            height: '64px',
                                            borderRadius: '16px',
                                            background: `${objective.color}20`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <Icon size={32} style={{ color: objective.color }} />
                                        </div>
                                        <div>
                                            <div style={{
                                                fontSize: '20px',
                                                fontWeight: '600',
                                                color: objective.color,
                                                marginBottom: '8px'
                                            }}>
                                                Objective {index + 1}
                                            </div>
                                            <p style={{
                                                fontSize: '16px',
                                                color: theme.colors.text.secondary,
                                                lineHeight: '1.6',
                                                margin: 0
                                            }}>
                                                {objective.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Fabrication Workshop */}
            <section style={{ padding: '80px 24px', background: 'rgba(255, 255, 255, 0.02)' }}>
                <div style={{
                    maxWidth: '1152px',
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
                        background: theme.services.events.gradient
                    }} />

                    <div style={{ position: 'relative', zIndex: 10 }}>
                        <Zap size={64} style={{ color: theme.colors.primary.orange, margin: '0 auto 24px', display: 'block' }} />
                        <h2 style={{
                            fontSize: window.innerWidth >= 768 ? '36px' : '32px',
                            fontWeight: 'bold',
                            marginBottom: '24px',
                            margin: '0 0 24px 0'
                        }}>
                            In-House <span style={{ color: theme.colors.primary.red }}>Fabrication Workshop</span>
                        </h2>
                        <p style={{
                            fontSize: '20px',
                            color: '#d1d5db',
                            marginBottom: '32px',
                            maxWidth: '768px',
                            margin: '0 auto 32px',
                            lineHeight: '1.6'
                        }}>
                            We have an in-house Fabrication Workshop that enables us to offer the most competitive rates
                            in the event management industry. Our full-fledged workshop brings innovative ideas to life
                            with skilled professionals and cutting-edge technology.
                        </p>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
                            gap: '24px',
                            marginBottom: '32px'
                        }}>
                            {['Exhibition Stalls', 'Stage Design', 'Wedding Setups', 'Custom Fabrication'].map((item, index) => (
                                <div key={index} style={{
                                    background: 'rgba(255, 68, 68, 0.1)',
                                    border: `1px solid ${theme.colors.primary.red}30`,
                                    borderRadius: '16px',
                                    padding: '20px 16px',
                                    color: theme.colors.primary.red,
                                    fontWeight: '600',
                                    fontSize: '14px'
                                }}>
                                    <CheckCircle size={20} style={{ marginBottom: '8px', display: 'block', margin: '0 auto 8px' }} />
                                    {item}
                                </div>
                            ))}
                        </div>

                        <button style={{
                            padding: '16px 32px',
                            borderRadius: '50px',
                            fontWeight: '600',
                            color: 'white',
                            background: theme.services.events.gradient,
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontSize: '16px'
                        }}
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                            Explore Our Workshop
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{
                padding: '48px 24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                <div style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    textAlign: 'center'
                }}>
                    <div style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        marginBottom: '16px',
                        color: theme.colors.primary.red,
                        margin: '0 0 16px 0'
                    }}>
                        Star Universal
                    </div>
                    <p style={{
                        color: '#9ca3af',
                        marginBottom: '32px',
                        margin: '0 0 32px 0'
                    }}>
                        Creating extraordinary experiences. Building lasting memories.
                    </p>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '32px',
                        fontSize: '14px',
                        color: '#9ca3af',
                        flexWrap: 'wrap'
                    }}>
                        <a href="#" style={{
                            color: '#9ca3af',
                            textDecoration: 'none',
                            transition: 'color 0.3s'
                        }}
                            onMouseEnter={(e) => e.target.style.color = theme.colors.primary.red}
                            onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
                            Services
                        </a>
                        <a href="#" style={{
                            color: '#9ca3af',
                            textDecoration: 'none',
                            transition: 'color 0.3s'
                        }}
                            onMouseEnter={(e) => e.target.style.color = theme.colors.primary.red}
                            onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
                            Portfolio
                        </a>
                        <a href="#" style={{
                            color: '#9ca3af',
                            textDecoration: 'none',
                            transition: 'color 0.3s'
                        }}
                            onMouseEnter={(e) => e.target.style.color = theme.colors.primary.red}
                            onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
                            Contact
                        </a>
                        <a href="#" style={{
                            color: '#9ca3af',
                            textDecoration: 'none',
                            transition: 'color 0.3s'
                        }}
                            onMouseEnter={(e) => e.target.style.color = theme.colors.primary.red}
                            onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
                            Careers
                        </a>
                    </div>
                </div>
            </footer>
            <Footer />
        </div>
    );
};

export default AboutUs;