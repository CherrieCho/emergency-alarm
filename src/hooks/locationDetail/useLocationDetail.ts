import axios from 'axios';
import type {
  SafetyDisasterMessagesRequest,
  SafetyDisasterMessagesResponse,
  DisasterCategory,
} from '../../models';
import { useInfiniteQuery } from '@tanstack/react-query';
import { REGION_FULL_NAMES } from '../../pages/locationDetail/constants';

const getDetailSafetyDisasterMessages = async (
  params: SafetyDisasterMessagesRequest
) => {
  const SERVER_URL = import.meta.env.VITE_BACKEND_URL;

  const response = await axios.get<SafetyDisasterMessagesResponse>(
    `${SERVER_URL}disasters/safety-messages`,
    {
      params,
    }
  );

  return response.data;
};

const useLocationDetailDisasterMessages = (params: {
  rgnNm: string;
  category: DisasterCategory | '';
}) => {
  return useInfiniteQuery({
    queryKey: ['locationDetailDisasterMessages', params.rgnNm, params.category],
    queryFn: ({ pageParam = 1 }) =>
      getDetailSafetyDisasterMessages({
        numOfRows: 10,
        pageNo: pageParam,
        returnType: 'json',
        crtDt: '',
        rgnNm: REGION_FULL_NAMES[params.rgnNm],
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // API 응답에서 총 페이지 수나 다음 페이지 정보를 확인
      const currentPage = allPages.length;
      const totalPages = Math.ceil((lastPage.totalCount || 0) / 10);

      // 기존 로직
      return currentPage < totalPages ? currentPage + 1 : undefined;

      // 테스트용 최대 20개까지만 로드 (2페이지)
      // const maxPages = 2;

      // return currentPage < Math.min(totalPages, maxPages)
      //   ? currentPage + 1
      //   : undefined;
    },
    select: (data) => {
      // 클라이언트에서 필터링
      return {
        ...data,
        pages: data.pages.map((page) => ({
          ...page,
          body: page.body.filter((item) => {
            // 카테고리 필터링
            const categoryMatch =
              params.category === '' ||
              params.category.includes(item.DST_SE_NM);

            // 지역명 필터링 (띄어쓰기 앞부분만 추출)
            // const regionPrefix = item.RCPTN_RGN_NM.split(' ')[0];

            // const regionMatch =
            //   params.rgnNm === '' ||
            //   regionPrefix === REGION_FULL_NAMES[params.rgnNm];

            // return categoryMatch && regionMatch;
            return categoryMatch;
          }),
        })),
      };
    },
  });
};

export default useLocationDetailDisasterMessages;
