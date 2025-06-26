import { useQuery } from '@tanstack/react-query';
import { getSafetyDisasterMessages } from '../apis/disasterApi';

const useSafetyDisasterMessages = () => {
  return useQuery({
    queryKey: ['safetyDisasterMessages'],
    queryFn: getSafetyDisasterMessages,
  });
};

export default useSafetyDisasterMessages;
