import React, { useState } from "react";
import { theme, createHoverCard } from "../../utils/theme";
import client1 from "../../assets/client/client1.jpg";
import client2 from "../../assets/client/client2.jpg";
import client3 from "../../assets/client/client3.jpg";
import client4 from "../../assets/client/client4.jpg";
import client5 from "../../assets/client/client5.jpg";
import client6 from "../../assets/client/client6.jpg";
import client7 from "../../assets/client/client7.jpg";
import client8 from "../../assets/client/client8.jpg";
import client9 from "../../assets/client/client9.jpg";
import client10 from "../../assets/client/client10.jpg";
import client11 from "../../assets/client/client11.jpg";
import client12 from "../../assets/client/client12.jpg";
import client13 from "../../assets/client/client13.jpg";
import client14 from "../../assets/client/client14.jpg";
import client15 from "../../assets/client/client15.jpg";
import client16 from "../../assets/client/client16.jpeg";
import client17 from "../../assets/client/client17.jpg";
import client18 from "../../assets/client/client18.jpg";
import client19 from "../../assets/client/client19.jpg";
import client20 from "../../assets/client/client20.png";
import client21 from "../../assets/client/client21.png";
import client22 from "../../assets/client/client22.jpeg";
import client23 from "../../assets/client/client23.jpeg";

import EventsHeader from "./eventHeader";
import Footer from "../../components/footer";

// Sample logos (replace with your client logos)
const clientLogos = [
  { name: "Google", logo: client1, service: "events" },
  { name: "Microsoft", logo: client2, service: "foundation" },
  { name: "Amazon", logo: client3, service: "travel" },
  { name: "Apple", logo: client4, service: "events" },
  { name: "Netflix", logo: client5, service: "foundation" },
  { name: "Spotify", logo: client6, service: "travel" },
  { name: "IBM", logo: client7, service: "events" },
  { name: "Intel", logo: client8, service: "foundation" },
  { name: "Oracle", logo: client9, service: "travel" },
  { name: "Salesforce", logo: client10, service: "events" },
  { name: "Adobe", logo: client11, service: "foundation" },
  { name: "SAP", logo: client12, service: "travel" },
  { name: "Cisco", logo: client13, service: "events" },
  { name: "Dell", logo: client14, service: "foundation" },
  { name: "HP", logo: client15, service: "travel" },
  { name: "Lenovo", logo: client16, service: "events" },
  { name: "Nvidia", logo: client17, service: "foundation" },
  { name: "Qualcomm", logo: client18, service: "travel" },
  { name: "Twitter", logo: client19, service: "events" },
  { name: "Twitter", logo: client20, service: "events" },
  { name: "Twitter", logo: client21, service: "events" },
  { name: "Twitter", logo: client22, service: "events" },
  { name: "Twitter", logo: client23, service: "events" },
];

const Clients = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      style={{
        background: theme.colors.dark.primary,
        minHeight: "100vh",
        padding: theme.spacing.xxl,
        color: theme.colors.text.primary,
        fontFamily: theme.typography.fontFamily,
      }}
    >
        <EventsHeader />
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "100px",  marginTop: "100px" }}>
        <h1
          style={{
            ...theme.typography.heading.h1,
            color: theme.colors.text.primary,
          }}
        >
          Our Clients
        </h1>
        <p
          style={{
            ...theme.typography.body.medium,
            color: theme.colors.text.secondary,
            marginTop: theme.spacing.sm,
          }}
        >
          We are proud to collaborate with leading brands worldwide.
        </p>
      </div>

      {/* Logo Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: theme.spacing.lg,
        }}
      >
        {clientLogos.map((client, index) => (
          <div
            key={client.name}
            style={{
              ...createHoverCard(client.service, hoveredIndex === index),
              padding: theme.spacing.lg,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "150px",
              cursor: "pointer",
              transition: theme.transitions.bouncy,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={client.logo}
            //   alt={client.name}
              style={{
                maxWidth: "120px",
                maxHeight: "80px",
                // filter: "brightness(0) invert(1)", // make logos white-ish for dark bg
                opacity: hoveredIndex === index ? 1 : 0.7,
                transition: theme.transitions.medium,
              }}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Clients;
