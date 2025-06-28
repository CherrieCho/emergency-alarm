import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL;

export const createUser = async (name: string, email: string, password: string) => {
  const response = await axios.post(`${API_BASE}/users`, {
    name,
    email,
    password,
  });
  return response.data;
};
