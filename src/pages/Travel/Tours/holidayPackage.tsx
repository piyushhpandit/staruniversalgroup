// pages/HolidayPackage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme, createHoverCard } from "../../../utils/theme";
import TravelHeader from "../travelHeader";

// Import images (replace with your actual images in assets)
import andaman from "../../../assets/travel/holiday/andaman.jpeg";
import bhutan from "../../../assets/travel/holiday/bhutan.jpeg";
import goa from "../../../assets/travel/holiday/goa.jpeg";
import gujarat from "../../../assets/travel/holiday/gujarat.jpeg";
import indore from "../../../assets/travel/holiday/indore.jpeg";
import meghalaya from "../../../assets/travel/holiday/meghalaya.jpeg";
import orissa from "../../../assets/travel/holiday/orissa.jpeg";
import pondicherry from "../../../assets/travel/holiday/pondicherry.jpeg";
import kashmir from "../../../assets/travel/holiday/kashmir.jpeg";
import haridwar from "../../../assets/travel/holiday/haridwar.jpeg";
import shimla from "../../../assets/travel/holiday/shimla.jpeg";
import kolkata from "../../../assets/travel/holiday/kolkata.jpeg";

const HolidayPackage = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  const packages = [
    {
      title: "Andaman Islands Tour",
      duration: "5 Nights / 6 Days",
      description:
        "Crystal clear waters, pristine beaches, and adventure sports in Andaman & Nicobar.",
      image: andaman,
    },
    {
      title: "Bhutan Happiness Tour",
      duration: "6 Nights / 7 Days",
      description:
        "Explore monasteries, mountains, and the unique Gross National Happiness culture.",
      image: bhutan,
    },
    {
      title: "Goa Holiday Package",
      duration: "4 Nights / 5 Days",
      description:
        "Golden beaches, nightlife, churches, and water sports in vibrant Goa.",
      image: goa,
    },
    {
      title: "Gujarat Heritage Tour",
      duration: "7 Nights / 8 Days",
      description:
        "Gir National Park, Somnath, Dwarka, Rann of Kutch, and cultural Gujarat highlights.",
      image: gujarat,
    },
    {
      title: "Indore & Ujjain Tour",
      duration: "3 Nights / 4 Days",
      description:
        "Blend of food, temples, and cultural heritage in Indore and Ujjain.",
      image: indore,
    },
    {
      title: "Meghalaya Nature Escape",
      duration: "5 Nights / 6 Days",
      description:
        "Cherrapunji, Shillong, Living Root Bridges, and mesmerizing waterfalls.",
      image: meghalaya,
    },
    {
      title: "Orissa Cultural Tour",
      duration: "6 Nights / 7 Days",
      description:
        "Jagannath Puri, Konark Sun Temple, Chilika Lake, and Odisha’s traditions.",
      image: orissa,
    },
    {
      title: "Pondicherry French Retreat",
      duration: "3 Nights / 4 Days",
      description:
        "French-style architecture, beaches, and Auroville’s spiritual vibes.",
      image: pondicherry,
    },
    {
      title: "Kashmir Paradise Tour",
      duration: "6 Nights / 7 Days",
      description:
        "Houseboats, Gulmarg, Pahalgam, and Srinagar’s mesmerizing landscapes.",
      image: kashmir,
    },
    {
      title: "Haridwar & Rishikesh Tour",
      duration: "3 Nights / 4 Days",
      description:
        "Ganga Aarti, yoga, adventure sports, and spiritual experiences in Uttarakhand.",
      image: haridwar,
    },
    {
      title: "Shimla & Manali Hills Tour",
      duration: "5 Nights / 6 Days",
      description:
        "Snow peaks, Kufri, Solang Valley, and Himachal’s serene landscapes.",
      image: shimla,
    },
    {
      title: "Kolkata & Digha Beach Tour",
      duration: "4 Nights / 5 Days",
      description:
        "Kolkata’s cultural sites with a relaxing seaside getaway at Digha Beach.",
      image: kolkata,
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
        Holiday Packages
      </h1>

      <p
        style={{
          ...theme.typography.body.large,
          textAlign: "center",
          marginBottom: theme.spacing.xl,
          color: theme.colors.text.secondary,
        }}
      >
        From beaches and mountains to spiritual retreats and cultural tours –
        explore our curated holiday packages across India & beyond.
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

export default HolidayPackage;
