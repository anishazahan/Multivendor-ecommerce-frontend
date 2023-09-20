import axios from "axios";
const local = "https://multivendor-ecommerce-backend.onrender.com";
const production = "";
const api = axios.create({
  baseURL: `${local}/api`,
  withCredentials: true,
});
export default api;
