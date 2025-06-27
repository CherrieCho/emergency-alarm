import { useQuery } from '@tanstack/react-query';
import naturalSafetyApi from '../../utils/guideApi';

const fetchSafetyData = async () => {
  const res = await naturalSafetyApi.get('', {
    params: {
      returnType: 'json',
      pageNo: '1',
      numOfRows: '5',
    },
  });
  return res.data;
};

export const useNaturalSafetyData = () => {
  return useQuery({
    queryKey: ['safetyData'],
    queryFn: fetchSafetyData,
  });
};
