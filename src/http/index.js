import axios from "axios";

axios.defaults.withCredentials = true;

const API_URL = 'http://localhost:3000/api';

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