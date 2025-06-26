import axios from 'axios';

const SERVICE_KEY = import.meta.env.VITE_APP_API_KEY;

export const getSafetyDisasterMessages = async () => {
  const response = await axios.get('/safety-api/V2/api/DSSP-IF-00247', {
    params: {
      serviceKey: SERVICE_KEY,
      pageNo: 1,
      numOfRows: 10,
      returnType: 'json',
    },
  });

  console.log(response.data); // 구조 확인용
  return response.data;
};
