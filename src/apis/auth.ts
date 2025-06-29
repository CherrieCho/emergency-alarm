import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL;

export const login = async (email: string, password: string) => {
  console.log("🔗 API_BASE:", API_BASE);
  const res = await axios.post(`${API_BASE}/login`, { email, password });
  return res.data;
};
