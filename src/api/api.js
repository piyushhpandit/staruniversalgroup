import axios from "axios";

const api = axios.create({
  // Use environment variable for production, fallback to localhost for development
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default api;
