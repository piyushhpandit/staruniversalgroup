import axios from "axios";

const api = axios.create({
  baseURL: "https://staruniversalgroup-be.onrender.com/api" || "http://localhost:4000/api", // backend base URL
  // baseURL: "http://localhost:4000/api", // backend base URL
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default api;
