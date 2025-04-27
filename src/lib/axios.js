// src/lib/axios.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "https://chat-app-backend-0663.onrender.com/api",   // <-- your Render backend URL
  withCredentials: true, // only if your backend sends cookies (optional for now)
});
