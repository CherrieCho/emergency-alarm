import axios from 'axios';
import type {
  SafetyDisasterMessagesRequest,
  SafetyDisasterMessagesResponse,
} from '../models';

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

  // console.log(response.data); // 구조 확인용
  return response.data;
};

export const getDetailSafetyDisasterMessages = async (
  params: SafetyDisasterMessagesRequest
) => {
  const SERVER_URL = import.meta.env.VITE_BACKEND_URL;

  const response = await axios.get<SafetyDisasterMessagesResponse>(
    `${SERVER_URL}/disasters/safety-messages`,
    {
      params,
    }
  );

  return response.data;
};
