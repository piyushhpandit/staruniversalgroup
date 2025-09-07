import React from "react";
import logo from "../../assets/axislogo.png";

const Donation = () => {
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
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          width: "100%",
          padding: "32px",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Axis Bank Logo"
          style={{
            width: "120px",
            height: "auto",
            margin: "0 auto 20px auto",
            display: "block",
          }}
        />

        {/* Heading */}
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "12px",
            background: "linear-gradient(90deg, #fbbf24, #d97706)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Axis Bank Trust Account
        </h1>
        <p style={{ color: "#6b7280", marginBottom: "28px", fontSize: "16px" }}>
          Support <strong>Star Universal Foundation</strong> by making a donation.
        </p>

        {/* Bank Details */}
        <div
          style={{
            display: "grid",
            gap: "16px",
            textAlign: "left",
          }}
        >
          {details.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 16px",
                border: "1px solid #e5e7eb",
                borderRadius: "10px",
                background: "#f9fafb",
              }}
            >
              <span style={{ fontWeight: "600", color: "#374151" }}>
                {item.label}
              </span>
              <span style={{ color: "#1f2937" }}>{item.value}</span>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          style={{
            marginTop: "24px",
            fontSize: "14px",
            color: "#9ca3af",
            fontStyle: "italic",
          }}
        >
          Thank you for contributing towards empowering lives 🙏
        </p>
      </div>
    </section>
  );
};

export default Donation;
