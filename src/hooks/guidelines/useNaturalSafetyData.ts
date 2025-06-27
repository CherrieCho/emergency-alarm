import { useQuery } from '@tanstack/react-query';
import { fetchSafetyDataNatural } from '../../apis/guidelineApi';
import type { getSafetyDataRequest } from '../../models/guideline';

export const useNaturalSafetyData = (params: getSafetyDataRequest) => {
  return useQuery({
    queryKey: ['safetyData', params],
    queryFn: () => fetchSafetyDataNatural(params),
  });
};
