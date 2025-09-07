// pages/Events.jsx
import React, { useState, useEffect } from 'react';
import { theme, createServiceBackground } from '../../utils/theme';
import EventsHeader from './eventHeader';
import Footer from '../../components/footer';
import hero from '../../assets/wedding hero.jpg'

const Events = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: 'Corporate Events',
      description: 'Professional conferences, seminars, and business gatherings that leave lasting impressions.',
      icon: '🏢',
      features: ['Product Launches', 'Conferences', 'Team Building', 'Awards Ceremonies']
    },
    {
      title: 'Wedding Planning',
      description: 'Create magical moments with our comprehensive wedding planning and coordination services.',
      icon: '💒',
      features: ['Venue Selection', 'Decor Design', 'Catering', 'Photography']
    },
    {
      title: 'Social Celebrations',
      description: 'Birthday parties, anniversaries, and special occasions crafted to perfection.',
      icon: '🎊',
      features: ['Birthday Parties', 'Anniversaries', 'Baby Showers', 'Graduations']
    },
    {
      title: 'Cultural Events',
      description: 'Traditional festivals, cultural programs, and community celebrations.',
      icon: '🎭',
      features: ['Festival Celebrations', 'Cultural Shows', 'Art Exhibitions', 'Music Concerts']
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      company: 'Tech Solutions Ltd.',
      text: 'Star Universal Events made our product launch absolutely spectacular. Every detail was perfect!',
      rating: 5
    },
    {
      name: 'Rahul & Meera',
      company: 'Wedding Couple',
      text: 'Our dream wedding became reality thanks to their incredible team. Highly recommended!',
      rating: 5
    },
    {
      name: 'Amit Patel',
      company: 'Cultural Society',
      text: 'They organized our Diwali celebration beautifully. The attention to cultural details was amazing.',
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Events Completed' },
    { number: '300+', label: 'Happy Clients' },
    { number: '13+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  const backgroundStyle = createServiceBackground(mousePos, 'events');

  return (
    <div
      style={{
        ...backgroundStyle,
        minHeight: '100vh',
        fontFamily: theme.typography.fontFamily,
        color: theme.colors.text.primary,
        overflow: 'hidden'
      }}
    >
      {/* Global Styles */}
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            overflow-x: hidden;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>

      <EventsHeader />

      {/* Animated Background Particles */}
      <div
        style={{
          position: 'fixed',
          top: '15%',
          left: '8%',
          width: '6px',
          height: '6px',
          background: theme.services.events.primary,
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
          boxShadow: `0 0 15px ${theme.services.events.primary}`,
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'fixed',
          top: '70%',
          right: '10%',
          width: '4px',
          height: '4px',
          background: theme.services.events.secondary,
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse',
          boxShadow: `0 0 10px ${theme.services.events.secondary}`,
          zIndex: 0

        }}
      />

      {/* Hero Section */}
      <section
        style={{
          padding: `8rem ${theme.spacing.lg} 4rem`,
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          backgroundImage: `url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
        linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6)),
        linear-gradient(135deg, rgba(255,68,68,0.2), rgba(255,136,0,0.1))
      `,
            zIndex: -1
          }}
        />
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            animation: 'slideUp 1s ease-out'
          }}
        >
          <h1
            style={{
              ...theme.typography.heading.hero,
              background: theme.services.events.gradient,
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: theme.spacing.lg,
              animation: 'fadeIn 1.2s ease-out'
            }}
          >
            Star Universal Events
          </h1>
          <p
            style={{
              ...theme.typography.body.large,
              color: theme.colors.text.secondary,
              marginBottom: theme.spacing.xl,
              animation: 'slideUp 1s ease-out 0.2s both'
            }}
          >
            Professional event planning for every occasion. From corporate conferences to dream weddings,
            we create unforgettable experiences that exceed expectations.
          </p>

          <div
            style={{
              display: 'flex',
              gap: theme.spacing.lg,
              justifyContent: 'center',
              flexWrap: 'wrap',
              animation: 'slideUp 1s ease-out 0.4s both'
            }}
          >
            <button
              style={{
                background: theme.services.events.gradient,
                border: 'none',
                color: theme.colors.text.primary,
                padding: `${theme.spacing.md} ${theme.spacing.xl}`,
                borderRadius: theme.borderRadius.md,
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: theme.transitions.medium,
                fontFamily: theme.typography.fontFamily,
                boxShadow: `0 8px 25px ${theme.services.events.primary}35`
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = `0 15px 35px ${theme.services.events.primary}45`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = `0 8px 25px ${theme.services.events.primary}35`;
              }}
            >
              Plan Your Event
            </button>
            <button
              style={{
                background: 'transparent',
                border: `2px solid ${theme.services.events.primary}`,
                color: theme.services.events.primary,
                padding: `${theme.spacing.md} ${theme.spacing.xl}`,
                borderRadius: theme.borderRadius.md,
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: theme.transitions.medium,
                fontFamily: theme.typography.fontFamily
              }}
              onMouseEnter={(e) => {
                e.target.style.background = theme.services.events.primary;
                e.target.style.color = theme.colors.text.primary;
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = theme.services.events.primary;
                e.target.style.transform = 'translateY(0)';
              }}
            >
              View Portfolio
            </button>
          </div>
        </div>
      </section >

  {/* Stats Section */ }
  < section
style = {{
  padding: `${theme.spacing.xl} ${theme.spacing.lg}`,
    position: 'relative',
      zIndex: 1
}}
      >
  <div
    style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: theme.spacing.lg,
      textAlign: 'center'
    }}
  >
    {stats.map((stat, index) => (
      <div
        key={index}
        style={{
          background: theme.colors.dark.card,
          backdropFilter: 'blur(20px)',
          border: `1px solid ${theme.colors.border.default}`,
          borderRadius: theme.borderRadius.xl,
          padding: theme.spacing.xl,
          transition: theme.transitions.medium,
          animation: `slideUp 1s ease-out ${index * 0.1 + 0.6}s both`
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-5px)';
          e.target.style.border = `1px solid ${theme.services.events.primary}40`;
          e.target.style.boxShadow = `0 10px 30px ${theme.services.events.primary}20`;
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.border = `1px solid ${theme.colors.border.default}`;
          e.target.style.boxShadow = 'none';
        }}
      >
        <h3
          style={{
            ...theme.typography.heading.h2,
            color: theme.services.events.primary,
            marginBottom: theme.spacing.sm
          }}
        >
          {stat.number}
        </h3>
        <p
          style={{
            ...theme.typography.body.medium,
            color: theme.colors.text.secondary
          }}
        >
          {stat.label}
        </p>
      </div>
    ))}
  </div>
      </section >

  {/* Services Section */ }
  < section
style = {{
  padding: `${theme.spacing.xxl} ${theme.spacing.lg}`,
    position: 'relative',
      zIndex: 1
}}
      >
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <div
      style={{
        textAlign: 'center',
        marginBottom: theme.spacing.xxl,
        animation: 'slideUp 1s ease-out 0.8s both'
      }}
    >
      <h2
        style={{
          ...theme.typography.heading.h1,
          color: theme.colors.text.primary,
          marginBottom: theme.spacing.lg
        }}
      >
        Our Services
      </h2>
      <p
        style={{
          ...theme.typography.body.large,
          color: theme.colors.text.secondary,
          maxWidth: '600px',
          margin: '0 auto'
        }}
      >
        From intimate gatherings to grand celebrations, we specialize in creating memorable events
        tailored to your vision and budget.
      </p>
    </div>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: theme.spacing.xl
      }}
    >
      {services.map((service, index) => (
        <div
          key={index}
          style={{
            background: hoveredService === index
              ? theme.colors.dark.cardHover
              : theme.colors.dark.card,
            backdropFilter: 'blur(20px)',
            border: hoveredService === index
              ? `2px solid ${theme.services.events.primary}40`
              : `1px solid ${theme.colors.border.default}`,
            borderRadius: theme.borderRadius.xl,
            padding: theme.spacing.xl,
            transition: theme.transitions.bouncy,
            transform: hoveredService === index ? 'translateY(-10px)' : 'translateY(0)',
            boxShadow: hoveredService === index
              ? `0 20px 40px ${theme.services.events.primary}20`
              : theme.shadows.md,
            cursor: 'pointer',
            animation: `slideUp 1s ease-out ${index * 0.1 + 1}s both`
          }}
          onMouseEnter={() => setHoveredService(index)}
          onMouseLeave={() => setHoveredService(null)}
        >
          <div
            style={{
              fontSize: '3rem',
              marginBottom: theme.spacing.lg,
              display: 'inline-block',
              padding: theme.spacing.md,
              background: hoveredService === index
                ? theme.services.events.gradient
                : theme.colors.dark.cardHover,
              borderRadius: theme.borderRadius.full,
              transition: theme.transitions.slow,
              transform: hoveredService === index ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg)'
            }}
          >
            {service.icon}
          </div>

          <h3
            style={{
              ...theme.typography.heading.h3,
              color: hoveredService === index ? theme.services.events.primary : theme.colors.text.primary,
              marginBottom: theme.spacing.md,
              transition: theme.transitions.medium
            }}
          >
            {service.title}
          </h3>

          <p
            style={{
              ...theme.typography.body.medium,
              color: theme.colors.text.secondary,
              marginBottom: theme.spacing.lg,
              lineHeight: '1.6'
            }}
          >
            {service.description}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.xs }}>
            {service.features.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: theme.spacing.sm,
                  color: theme.colors.text.secondary,
                  fontSize: '0.9rem'
                }}
              >
                <span style={{ color: theme.services.events.primary }}>✓</span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
      </section >

  {/* Testimonials Section */ }
  < section
style = {{
  padding: `${theme.spacing.xxl} ${theme.spacing.lg}`,
    position: 'relative',
      zIndex: 1
}}
      >
  <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
    <h2
      style={{
        ...theme.typography.heading.h1,
        color: theme.colors.text.primary,
        marginBottom: theme.spacing.xxl
      }}
    >
      What Our Clients Say
    </h2>

    <div
      style={{
        background: theme.colors.dark.card,
        backdropFilter: 'blur(20px)',
        border: `1px solid ${theme.colors.border.default}`,
        borderRadius: theme.borderRadius.xl,
        padding: theme.spacing.xxl,
        position: 'relative',
        minHeight: '200px'
      }}
    >
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: theme.spacing.xxl,
            left: theme.spacing.xxl,
            right: theme.spacing.xxl,
            opacity: activeTestimonial === index ? 1 : 0,
            transition: 'opacity 0.5s ease',
            pointerEvents: activeTestimonial === index ? 'auto' : 'none'
          }}
        >
          <div style={{ marginBottom: theme.spacing.lg }}>
            {[...Array(testimonial.rating)].map((_, starIndex) => (
              <span
                key={starIndex}
                style={{
                  color: theme.services.events.primary,
                  fontSize: '1.5rem',
                  marginRight: theme.spacing.xs
                }}
              >
                ⭐
              </span>
            ))}
          </div>

          <p
            style={{
              ...theme.typography.body.large,
              color: theme.colors.text.secondary,
              fontStyle: 'italic',
              marginBottom: theme.spacing.lg,
              lineHeight: '1.7'
            }}
          >
            "{testimonial.text}"
          </p>

          <div>
            <h4
              style={{
                color: theme.colors.text.primary,
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: theme.spacing.xs
              }}
            >
              {testimonial.name}
            </h4>
            <p
              style={{
                color: theme.services.events.primary,
                fontSize: '0.9rem'
              }}
            >
              {testimonial.company}
            </p>
          </div>
        </div>
      ))}

      {/* Testimonial Navigation Dots */}
      <div
        style={{
          position: 'absolute',
          bottom: theme.spacing.lg,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: theme.spacing.sm
        }}
      >
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTestimonial(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: activeTestimonial === index
                ? theme.services.events.primary
                : theme.colors.border.default,
              cursor: 'pointer',
              transition: theme.transitions.medium
            }}
          />
        ))}
      </div>
    </div>
  </div>
      </section >

  {/* CTA Section */ }
  < section
style = {{
  padding: `${theme.spacing.xxl} ${theme.spacing.lg}`,
    textAlign: 'center',
      position: 'relative',
        zIndex: 1
}}
      >
  <div
    style={{
      maxWidth: '600px',
      margin: '0 auto',
      background: theme.colors.dark.card,
      backdropFilter: 'blur(20px)',
      border: `1px solid ${theme.services.events.primary}40`,
      borderRadius: theme.borderRadius.xl,
      padding: theme.spacing.xxl
    }}
  >
    <h2
      style={{
        ...theme.typography.heading.h2,
        color: theme.colors.text.primary,
        marginBottom: theme.spacing.lg
      }}
    >
      Ready to Create Something Amazing?
    </h2>
    <p
      style={{
        ...theme.typography.body.large,
        color: theme.colors.text.secondary,
        marginBottom: theme.spacing.xl
      }}
    >
      Let's discuss your event vision and make it a reality. Get in touch for a free consultation.
    </p>
    <button
      style={{
        background: theme.services.events.gradient,
        border: 'none',
        color: theme.colors.text.primary,
        padding: `${theme.spacing.md} ${theme.spacing.xxl}`,
        borderRadius: theme.borderRadius.md,
        fontSize: '1.1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: theme.transitions.medium,
        fontFamily: theme.typography.fontFamily,
        boxShadow: `0 8px 25px ${theme.services.events.primary}35`
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-3px) scale(1.02)';
        e.target.style.boxShadow = `0 15px 35px ${theme.services.events.primary}45`;
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0) scale(1)';
        e.target.style.boxShadow = `0 8px 25px ${theme.services.events.primary}35`;
      }}
    >
      Get Started Today
    </button>
  </div>
      </section >

  <Footer />
    </div >
  );
};

export default Events;