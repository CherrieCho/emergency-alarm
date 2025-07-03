import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const backendApi = axios.create({
  baseURL: BACKEND_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
