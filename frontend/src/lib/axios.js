import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.Vite_Backend_Api,
  header: { "Content-Type": "application/json" },
});
