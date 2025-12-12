// pages/BuddhaCircuit.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme, createHoverCard } from "../../../utils/theme";
import TravelHeader from "../travelHeader";
import { useIsMobile } from "../../../hooks/useMediaQuery";

// Import images (replace with actual images you have in assets)
import lumbini from "../../../assets/travel/buddha/lumbini.jpeg";
import bodhgaya from "../../../assets/travel/buddha/bodhgaya.jpeg";
import sarnath from "../../../assets/travel/buddha/sarnath.jpeg";
import kushinagar from "../../../assets/travel/buddha/kushinagar.jpeg";
import nalanda from "../../../assets/travel/buddha/nalanda.jpeg";

const BuddhaCircuit = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [hovered, setHovered] = useState(null);

  const packages = [
    {
      title: "Lumbini (Nepal) – Birthplace of Buddha",
      duration: "2 Days",
      description:
        "Visit the birthplace of Lord Buddha – Maya Devi Temple, Ashokan Pillar & Monastic Zone.",
      image: lumbini,
    },
    {
      title: "Bodhgaya (Bihar, India) – Enlightenment",
      duration: "2 Days",
      description:
        "Explore Mahabodhi Temple (UNESCO Site), Bodhi Tree, Sujata Stupa & more.",
      image: bodhgaya,
    },
    {
      title: "Sarnath (Uttar Pradesh, India) – First Sermon",
      duration: "1 Day",
      description:
        "Visit Dhamek Stupa, Chaukhandi Stupa, Ashokan Pillar, and Sarnath Museum.",
      image: sarnath,
    },
    {
      title: "Kushinagar (Uttar Pradesh, India) – Mahaparinirvana",
      duration: "1 Day",
      description:
        "Explore Mahaparinirvana Temple, Ramabhar Stupa & Matha Kuar Shrine.",
      image: kushinagar,
    },
    {
      title: "Rajgir & Nalanda (Bihar, India)",
      duration: "2 Days",
      description:
        "Experience Vulture’s Peak (Rajgir), Hot Springs, and the ruins of Nalanda University.",
      image: nalanda,
    },
  ];

  return (
    <div
      style={{
        padding: isMobile ? theme.spacing.lg : theme.spacing.xxl,
        fontFamily: theme.typography.fontFamily,
        background: theme.colors.dark.primary,
        color: theme.colors.text.primary,
        minHeight: "100vh",
      }}
    >
      <TravelHeader />
      <h1
        style={{
          ...theme.typography.heading.h1,
          fontSize: isMobile ? "2rem" : theme.typography.heading.h1.fontSize,
          textAlign: "center",
          marginBottom: theme.spacing.xl,
          color: theme.services.travel.primary,
          padding: isMobile ? "0 1rem" : "0",
          marginTop: isMobile ? "100px" : "0"
        }}
      >
        🌍 Buddha Circuit Tour Packages
      </h1>

      <p
        style={{
          ...theme.typography.body.large,
          fontSize: isMobile ? "1rem" : theme.typography.body.large.fontSize,
          textAlign: "center",
          marginBottom: theme.spacing.xl,
          color: theme.colors.text.secondary,
          padding: isMobile ? "0 1rem" : "0"
        }}
      >
        A sacred journey covering Lumbini, Bodhgaya, Sarnath, Kushinagar, Rajgir
        & Nalanda – the most important destinations of Lord Buddha's life.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
          gap: isMobile ? theme.spacing.md : theme.spacing.lg,
        }}
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            style={{
              ...createHoverCard("travel", hovered === index),
              overflow: "hidden",
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderTopLeftRadius: theme.borderRadius.xl,
                borderTopRightRadius: theme.borderRadius.xl,
              }}
            />
            <div style={{ padding: theme.spacing.md }}>
              <h3 style={theme.typography.heading.h3}>{pkg.title}</h3>
              <p
                style={{
                  ...theme.typography.body.small,
                  color: theme.colors.text.secondary,
                  margin: "4px 0",
                }}
              >
                {pkg.duration}
              </p>
              <p
                style={{
                  ...theme.typography.body.medium,
                  color: theme.colors.text.tertiary,
                  marginBottom: theme.spacing.md,
                }}
              >
                {pkg.description}
              </p>
              <button
                onClick={() => navigate("/contact")}
                style={{
                  background: theme.services.travel.gradient,
                  border: "none",
                  padding: `${theme.spacing.sm} ${theme.spacing.md}`,
                  borderRadius: theme.borderRadius.md,
                  color: theme.colors.text.primary,
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: theme.transitions.medium,
                  width: "100%",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = 0.9)}
                onMouseLeave={(e) => (e.target.style.opacity = 1)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuddhaCircuit;
