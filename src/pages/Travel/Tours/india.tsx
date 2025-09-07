// pages/India.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme, createHoverCard } from "../../../utils/theme";
import TravelHeader from "../travelHeader";

// Import images (replace with actual images in your assets folder)
import tajmahal from "../../../assets/travel/india/tajmahal.jpeg";
import jaipur from "../../../assets/travel/india/jaipur.jpeg";
import kerala from "../../../assets/travel/india/kerala.jpeg";
import varanasi from "../../../assets/travel/india/varanasi.jpeg";
import goa from "../../../assets/travel/india/goa.jpeg";
import ladakh from "../../../assets/travel/india/ladakh.jpeg";

const India = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  const packages = [
    {
      title: "Golden Triangle Tour (Delhi, Agra, Jaipur)",
      duration: "5 Nights / 6 Days",
      description:
        "Explore India’s heritage circuit – Taj Mahal, Jaipur’s forts, and Delhi’s culture.",
      image: tajmahal,
    },
    {
      title: "Royal Rajasthan Tour",
      duration: "7 Nights / 8 Days",
      description:
        "Discover Jaipur, Udaipur, Jodhpur & Jaisalmer with palaces, forts, and deserts.",
      image: jaipur,
    },
    {
      title: "Kerala Backwaters & Ayurveda",
      duration: "6 Nights / 7 Days",
      description:
        "Experience houseboats, beaches, hill stations, and Ayurveda therapies in Kerala.",
      image: kerala,
    },
    {
      title: "Spiritual Varanasi & Ganga Tour",
      duration: "3 Nights / 4 Days",
      description:
        "Witness Ganga Aarti, temples, ghats, and cultural traditions of Varanasi.",
      image: varanasi,
    },
    {
      title: "Goa Beaches & Nightlife",
      duration: "4 Nights / 5 Days",
      description:
        "Relax on golden beaches, enjoy vibrant nightlife, and explore Portuguese heritage.",
      image: goa,
    },
    {
      title: "Leh Ladakh Adventure",
      duration: "7 Nights / 8 Days",
      description:
        "Thrilling road trip with monasteries, Pangong Lake, Nubra Valley & mountain passes.",
      image: ladakh,
    },
  ];

  return (
    <div
      style={{
        padding: theme.spacing.xxl,
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
          textAlign: "center",
          marginBottom: theme.spacing.xl,
          color: theme.services.travel.primary,
        }}
      >
        Incredible India Tour Packages
      </h1>

      <p
        style={{
          ...theme.typography.body.large,
          textAlign: "center",
          marginBottom: theme.spacing.xl,
          color: theme.colors.text.secondary,
        }}
      >
        From the heritage of Rajasthan to the serenity of Kerala and the
        spirituality of Varanasi – explore India’s diversity with our curated
        travel packages.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: theme.spacing.lg,
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

export default India;
