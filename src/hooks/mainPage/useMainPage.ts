import { useQuery } from '@tanstack/react-query';
import { getDetailSafetyDisasterMessages } from '../../apis/disasterApi';
import { format } from 'date-fns';

const useMainPageDisasterMessages = () => {
  return useQuery({
    queryKey: ['mainPageDisasterMessages'],
    queryFn: () =>
      getDetailSafetyDisasterMessages({
        numOfRows: 5,
        pageNo: 1,
        returnType: 'json',
        crtDt: format(new Date(), 'yyyyMMdd'),
        rgnNm: '',
      }),
  });
};

export default useMainPageDisasterMessages;
