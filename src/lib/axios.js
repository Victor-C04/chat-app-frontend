// src/lib/axios.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:5001"
    : "https://chat-app-backend-0663.onrender.com",   // <-- your Render backend URL
  withCredentials: true, // only if your backend sends cookies (optional for now)
});
