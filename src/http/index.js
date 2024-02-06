import axios from "axios";

axios.defaults.withCredentials = true;

const API_URL = import.meta.env.VITE_API_URL;

const API = axios.create({
  withCredentials: true,
  baseURL: API_URL
})

API.interceptors.request.use((config)=>{
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`
  return config;
})


export {
  API, API_URL
}