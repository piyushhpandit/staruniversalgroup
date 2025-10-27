import api from "./api";

// Send event contact form
export const sendEventInquiry = async (data) => {
  return await api.post("/contact/event", data);
};

// Send travel contact form
export const sendTravelInquiry = async (data) => {
  return await api.post("/contact/travel", data);
};

// Send foundation contact form
export const sendFoundationInquiry = async (data) => {
  return await api.post("/contact/foundation", data);
};
