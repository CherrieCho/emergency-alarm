import axios from 'axios';
import type {
  SafetyDisasterMessagesRequest,
  SafetyDisasterMessagesResponse,
} from '../../models';
import { useQuery } from '@tanstack/react-query';

const getDetailSafetyDisasterMessages = async (
  params: SafetyDisasterMessagesRequest
) => {
  const SERVICE_KEY = import.meta.env.VITE_APP_API_KEY;

  const response = await axios.get<SafetyDisasterMessagesResponse>(
    '/safety-api/V2/api/DSSP-IF-00247',
    {
      params: {
        serviceKey: SERVICE_KEY,
        ...params,
      },
    }
  );

  return response.data;
};

const useLocationDetailDisasterMessages = (
  params: SafetyDisasterMessagesRequest
) => {
  return useQuery({
    queryKey: ['locationDetailDisasterMessages', params.rgnNm],
    queryFn: () =>
      getDetailSafetyDisasterMessages({
        numOfRows: 10,
        pageNo: 1,
        returnType: 'json',
        crtDt: '',
        rgnNm: params.rgnNm,
      }),
  });
};

export default useLocationDetailDisasterMessages;
