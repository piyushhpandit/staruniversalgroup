import React from "react";
import logo from "../../assets/axislogo.png";
import { useIsMobile } from "../../hooks/useMediaQuery";

const Donation = () => {
  const isMobile = useIsMobile();
  const details = [
    { label: "Account No.", value: "923020020340780" },
    { label: "Account Name", value: "Star Universal" },
    { label: "Bank", value: "Axis Bank" },
    { label: "IFSC", value: "UTIB0002173" },
    { label: "Branch", value: "Sector 12B, Dwarka, Delhi" },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f9fafb, #fef3c7)",
        padding: isMobile ? "2rem 1rem" : "40px 20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          width: "100%",
          padding: isMobile ? "1.5rem" : "32px",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Axis Bank Logo"
          style={{
            width: isMobile ? "100px" : "120px",
            height: "auto",
            margin: "0 auto 20px auto",
            display: "block",
          }}
        />

        {/* Heading */}
        <h1
          style={{
            fontSize: isMobile ? "1.5rem" : "28px",
            fontWeight: "bold",
            marginBottom: "12px",
            background: "linear-gradient(90deg, #fbbf24, #d97706)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            padding: isMobile ? "0 0.5rem" : "0",
            lineHeight: "1.3"
          }}
        >
          Axis Bank Trust Account
        </h1>
        <p style={{ 
          color: "#6b7280", 
          marginBottom: "28px", 
          fontSize: isMobile ? "0.9rem" : "16px",
          padding: isMobile ? "0 0.5rem" : "0"
        }}>
          Support <strong>Star Universal Foundation</strong> by making a donation.
        </p>

        {/* Bank Details */}
        <div
          style={{
            display: "grid",
            gap: isMobile ? "12px" : "16px",
            textAlign: "left",
          }}
        >
          {details.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "space-between",
                gap: isMobile ? "4px" : "0",
                padding: isMobile ? "10px 12px" : "12px 16px",
                border: "1px solid #e5e7eb",
                borderRadius: "10px",
                background: "#f9fafb",
              }}
            >
              <span style={{ 
                fontWeight: "600", 
                color: "#374151",
                fontSize: isMobile ? "0.85rem" : "1rem"
              }}>
                {item.label}
              </span>
              <span style={{ 
                color: "#1f2937",
                fontSize: isMobile ? "0.85rem" : "1rem",
                wordBreak: "break-word",
                textAlign: isMobile ? "left" : "right"
              }}>{item.value}</span>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          style={{
            marginTop: "24px",
            fontSize: isMobile ? "0.85rem" : "14px",
            color: "#9ca3af",
            fontStyle: "italic",
            padding: isMobile ? "0 0.5rem" : "0"
          }}
        >
          Thank you for contributing towards empowering lives 🙏
        </p>
      </div>
    </section>
  );
};

export default Donation;
