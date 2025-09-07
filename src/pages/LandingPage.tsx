import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/SUGLogo.png';
import logotravel from '../assets/SUGTravel.jpg'
import logoFoundatiton from '../assets/SUGFoundation.png'
import logoEvents from '../assets/SUGEvent.jpg'

const options = [
  {
    title: 'Star Universal Event Planner',
    route: '/events',
    description: 'Professional event planning for every occasion.',
    icon: '🎉',
    logo: logoEvents,
    gradient: 'linear-gradient(135deg, #ff4444, #ff8800)',
    color: '#ff4444'
  },

  {
    title: 'Star Universal Tour & Travel',
    route: '/travel',
    description: 'Explore the world with our travel services.',
    logo: logotravel,
    gradient: 'linear-gradient(135deg, #ee44aa, #cc2288)',
    color: '#ee44aa'
  },
  {
    title: 'Star Universal Foundation',
    route: '/foundation',
    description: 'Empowering communities and making a difference.',
    icon: '🤝',
    logo: logoFoundatiton,
    gradient: 'linear-gradient(135deg, #ffdd00, #ffaa00)',
    color: '#ffaa00'
  },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const backgroundStyle = {
    background: `
      radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 68, 68, 0.05) 0%, transparent 50%),
      radial-gradient(circle at ${mousePos.x * 0.8}px ${mousePos.y * 1.2}px, rgba(255, 221, 0, 0.03) 0%, transparent 50%),
      radial-gradient(circle at ${mousePos.x * 1.2}px ${mousePos.y * 0.8}px, rgba(238, 68, 170, 0.04) 0%, transparent 50%),
      linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)
    `,
  };

  return (
    <div
      style={{
        ...backgroundStyle,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        padding: "2rem 1rem",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s ease",
      }}
    >
      {/* Animated background particles */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "4px",
          height: "4px",
          background: "#ff4444",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite",
          boxShadow: "0 0 10px #ff4444",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "60%",
          right: "15%",
          width: "3px",
          height: "3px",
          background: "#ffdd00",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite reverse",
          boxShadow: "0 0 8px #ffdd00",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "25%",
          width: "2px",
          height: "2px",
          background: "#ee44aa",
          borderRadius: "50%",
          animation: "float 7s ease-in-out infinite",
          boxShadow: "0 0 6px #ee44aa",
        }}
      />

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
            height: 100%;
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
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}
      </style>

      {/* Logo with glow effect */}
      <div
        style={{
          position: "relative",
          marginBottom: "3rem",
          animation: "pulse 4s ease-in-out infinite",
        }}
      >
        <img
          src={logo}
          alt="Star Universal Logo"
          style={{

            width: "10rem",
            height: "auto",
            filter: "drop-shadow(0 0 20px rgba(255, 68, 68, 0.3)) drop-shadow(0 0 40px rgba(255, 221, 0, 0.2)) drop-shadow(0 0 60px rgba(238, 68, 170, 0.1))",
            transition: "all 0.3s ease",
          }}
        />
      </div>

      {/* Main heading with gradient text */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            background: "linear-gradient(135deg, #ff4444, #ffdd00, #ee44aa)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "1rem",
            lineHeight: "1.1",
            animation: "shimmer 3s linear infinite",
            textShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
          }}
        >
          STAR UNIVERSAL GROUP
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            color: "rgba(255, 255, 255, 0.7)",
            fontWeight: "300",
            maxWidth: "600px",
            lineHeight: "1.6",
            letterSpacing: "0.5px",
          }}
        >
          Illuminating possibilities across events, foundation work, and travel experiences
        </p>
      </div>

      {/* Service cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          width: "100%",
          padding: "0 1rem",
        }}
      >
        {options.map((opt, index) => (
          <div
            key={opt.route}
            style={{
              background: hoveredCard === index
                ? `linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)`
                : "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(20px)",
              border: hoveredCard === index
                ? `2px solid ${opt.color}40`
                : "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              padding: "2.5rem",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              transform: hoveredCard === index ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
              boxShadow: hoveredCard === index
                ? `0 25px 50px -12px ${opt.color}25, 0 0 0 1px ${opt.color}20`
                : "0 10px 30px rgba(0, 0, 0, 0.2)",
              position: "relative",
              overflow: "hidden",
            }}
            onClick={() => navigate(opt.route)}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Card gradient overlay */}
            {hoveredCard === index && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `${opt.gradient}10`,
                  borderRadius: "20px",
                  zIndex: 0,
                }}
              />
            )}

            {/* Content */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  marginBottom: "1.5rem",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "120px",
                  height: "120px",
                  background: hoveredCard === index ? opt.gradient : "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  // transform: hoveredCard === index ? "rotate(360deg) scale(1.1)" : "rotate(0deg) scale(1)",
                  transition: "all 0.6s ease",
                  boxShadow: hoveredCard === index ? `0 0 30px ${opt.color}40` : "none",
                  padding: "15px", // Add padding to ensure logos don't touch the edges
                }}
              >
                {/* Display either emoji icon or image logo */}
                {opt.logo ? (
                  <img
                    src={opt.logo}
                    alt={`${opt.title} logo`}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain", // Changed to contain to prevent cropping
                      borderRadius: "50%", // Make it circular like the container
                      padding: "5px", // Add padding inside the image
                      backgroundColor: "rgba(255, 255, 255, 0.9)", // White background for better visibility
                      border: "2px solid rgba(255, 255, 255, 0.2)", // Subtle border
                    }}
                  />
                ) : (
                  <span style={{ fontSize: "3rem" }}>{opt.icon}</span>
                )}
              </div>

              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: hoveredCard === index ? opt.color : "#ffffff",
                  marginBottom: "1rem",
                  transition: "color 0.3s ease",
                  letterSpacing: "0.5px",
                }}
              >
                {opt.title}
              </h2>

              <p
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  fontWeight: "300",
                }}
              >
                {opt.description}
              </p>

              {/* Explore button */}
              <div
                style={{
                  marginTop: "2rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: hoveredCard === index ? opt.color : "rgba(255, 255, 255, 0.8)",
                  fontSize: "0.95rem",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                  letterSpacing: "0.5px",
                }}
              >
                Explore
                <span
                  style={{
                    transform: hoveredCard === index ? "translateX(5px)" : "translateX(0)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer tagline */}
      <div
        style={{
          marginTop: "4rem",
          textAlign: "center",
          opacity: "0.6",
        }}
      >
        <p
          style={{
            fontSize: "0.95rem",
            color: "rgba(255, 255, 255, 0.5)",
            fontWeight: "300",
            letterSpacing: "1px",
          }}
        >
          ✨ WHERE VISION MEETS REALITY ✨
        </p>
      </div>
    </div>
  );
}