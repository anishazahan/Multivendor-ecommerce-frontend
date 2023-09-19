import axios from "axios";
const local = "https://multivendor-backend-eight.vercel.app";
const production = "";
const api = axios.create({
  baseURL: `${local}/api`,
  withCredentials: true,
});
export default api;
