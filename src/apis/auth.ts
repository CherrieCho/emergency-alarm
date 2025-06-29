import axios from 'axios';

const API_BASE = import.meta.env.VITE_APP_DEP_API_URL;

export const login = async (email: string, password: string) => {
  const res = await axios.post(`${API_BASE}/login`, { email, password });
  return res.data;
};
