import React, { useState, useEffect } from "react";
import Footer from "../../components/footer";

// Theme configuration
const theme = {
  colors: {
    primary: {
      red: "#ff4444",
      orange: "#ff8800",
      yellow: "#ffdd00",
      gold: "#ffaa00",
      magenta: "#ee44aa",
      purple: "#cc2288",
    },
    dark: {
      primary: "#0a0a0a",
      secondary: "#1a1a1a",
      tertiary: "#0f0f0f",
      card: "rgba(255, 255, 255, 0.05)",
      cardHover: "rgba(255, 255, 255, 0.1)",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)",
      tertiary: "rgba(255, 255, 255, 0.5)",
      muted: "rgba(255, 255, 255, 0.3)",
    },
    border: {
      default: "rgba(255, 255, 255, 0.1)",
      hover: "rgba(255, 255, 255, 0.2)",
    },
  },
  services: {
    events: {
      primary: "#ff4444",
      secondary: "#ff8800",
      gradient: "linear-gradient(135deg, #ff4444, #ff8800)",
      icon: "🎉",
    },
    foundation: {
      primary: "#ffaa00",
      secondary: "#ffdd00",
      gradient: "linear-gradient(135deg, #ffdd00, #ffaa00)",
      icon: "🤝",
    },
    travel: {
      primary: "#ee44aa",
      secondary: "#cc2288",
      gradient: "linear-gradient(135deg, #ee44aa, #cc2288)",
      icon: "✈️",
    },
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  borderRadius: {
    md: "0.75rem",
    xl: "1.5rem",
  },
  transitions: {
    medium: "0.3s ease",
    bouncy: "0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
};

// Helpers
const getInputStyle = (hasError = false) => ({
  width: "100%",
  padding: "0.875rem",
  fontSize: "1rem",
  backgroundColor: theme.colors.dark.secondary,
  border: `2px solid ${hasError ? "#ef4444" : theme.colors.border.default}`,
  borderRadius: theme.borderRadius.md,
  color: theme.colors.text.primary,
  outline: "none",
  transition: theme.transitions.medium,
  fontFamily: theme.typography.fontFamily,
  boxShadow: hasError ? "0 0 0 3px rgba(239, 68, 68, 0.1)" : "none",
});

const getServiceTheme = (service) =>
  theme.services[service] || theme.services.events;

// Main Component
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    company: "",
    message: "",
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    submitStatus: "", // success, error, ""
    errors: {},
  });

  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    { value: "wedding", label: "Wedding Events", icon: "🎉" },
    { value: "corporate", label: "Corporate Events", icon: "🤝" },
  ];

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = "Invalid email format";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    else if (!/^[\+]?[\d\s\-\(\)]{10,}$/.test(formData.phone))
      errors.phone = "Invalid phone number";
    if (!formData.service) errors.service = "Please select a service";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formState.errors[name]) {
      setFormState((prev) => ({
        ...prev,
        errors: { ...prev.errors, [name]: "" },
      }));
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const errors = validateForm();
  if (Object.keys(errors).length > 0) {
    setFormState((prev) => ({ ...prev, errors }));
    return;
  }

  setFormState({ ...formState, isSubmitting: true, submitStatus: "" });

  try {
    const response = await fetch("/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormState({ isSubmitting: false, submitStatus: "success", errors: {} });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        company: "",
        message: "",
      });
    } else {
      throw new Error("Failed to send");
    }
  } catch (error) {
    setFormState({ isSubmitting: false, submitStatus: "error", errors: {} });
  }
};


  return (
    <div
      style={{
        padding: "2rem",
        background: theme.colors.dark.primary,
        minHeight: "100vh",
        color: theme.colors.text.primary,
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Contact Star Universal Event
      </h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
        {/* Name */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={getInputStyle(!!formState.errors.name)}
          />
          {formState.errors.name && (
            <p style={{ color: "#ef4444" }}>{formState.errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={getInputStyle(!!formState.errors.email)}
          />
          {formState.errors.email && (
            <p style={{ color: "#ef4444" }}>{formState.errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Phone *</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            style={getInputStyle(!!formState.errors.phone)}
          />
          {formState.errors.phone && (
            <p style={{ color: "#ef4444" }}>{formState.errors.phone}</p>
          )}
        </div>

        {/* Service */}
        {/* <div style={{ marginBottom: "1rem" }}>
          <label>Service *</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            style={getInputStyle(!!formState.errors.service)}
          >
            <option value="">Choose a service</option>
            {services.map((s) => (
              <option key={s.value} value={s.value}>
                {s.icon} {s.label}
              </option>
            ))}
          </select>
          {formState.errors.service && (
            <p style={{ color: "#ef4444" }}>{formState.errors.service}</p>
          )}
        </div> */}

        {/* Message */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="5"
            style={getInputStyle(!!formState.errors.message)}
          />
          {formState.errors.message && (
            <p style={{ color: "#ef4444" }}>{formState.errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={formState.isSubmitting}
          style={{
            background: formData.service
              ? getServiceTheme(formData.service).gradient
              : `linear-gradient(135deg, ${theme.colors.primary.red}, ${theme.colors.primary.orange})`,
            padding: "1rem 2rem",
            border: "none",
            borderRadius: theme.borderRadius.md,
            color: "#fff",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          {formState.isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {/* Status */}
        {formState.submitStatus === "success" && (
          <p style={{ color: "limegreen", marginTop: "1rem" }}>
            ✅ Message sent!
          </p>
        )}
        {formState.submitStatus === "error" && (
          <p style={{ color: "red", marginTop: "1rem" }}>
            ❌ Something went wrong.
          </p>
        )}
      </form>
      <Footer />
    </div>
  );
};

export default ContactUs;
