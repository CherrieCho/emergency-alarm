import axios from 'axios';

const API_URL = 'https://www.safetydata.go.kr/V2/api/DSSP-IF-20588';

const SERVICE_KEY = import.meta.env.VITE_APP_GUIDE_NATURAL_API_KEY;

const naturalSafetyApi = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  params: {
    serviceKey: SERVICE_KEY,
  },
});

export default naturalSafetyApi;
