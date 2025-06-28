import { useQuery } from '@tanstack/react-query';

import type { getSafetyDataRequest } from '../../models/guideline';
import { fetchSafetyDataSocial } from '../../apis/guidelineApi';

export const useSocialSafetyData = (params: getSafetyDataRequest) => {
  return useQuery({
    queryKey: ['safetyData', params],
    queryFn: () => fetchSafetyDataSocial(params),
  });
};
