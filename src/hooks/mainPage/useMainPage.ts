import { useQuery } from '@tanstack/react-query';
import { getDetailSafetyDisasterMessages } from '../../apis/disasterApi';
import { addDays, format } from 'date-fns';

const useMainPageDisasterMessages = () => {
  // 0시되면 재난문자 0개뜨는거 방지: 어제 날짜를 디폴트로 설정
  const yesterday = format(addDays(new Date(), -1), 'yyyyMMdd');

  return useQuery({
    queryKey: ['mainPageDisasterMessages', yesterday],
    queryFn: () =>
      getDetailSafetyDisasterMessages({
        numOfRows: 5,
        pageNo: 1,
        returnType: 'json',
        crtDt: yesterday,
        rgnNm: '',
      }),
    retry: false,
    refetchOnWindowFocus: false,
  });
};

export default useMainPageDisasterMessages;
