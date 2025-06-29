import axios from 'axios';
import type {
  SafetyDisasterMessagesRequest,
  SafetyDisasterMessagesResponse,
  SafetyDisasterMessages,
  DisasterCategory,
} from '../../models';
import { useInfiniteQuery } from '@tanstack/react-query';
import { REGION_FULL_NAMES } from '../../pages/locationDetail/constants';

// 카테고리별 실제 재난 데이터
const disasterDataByCategory: Record<
  DisasterCategory,
  SafetyDisasterMessages[]
> = {
  산사태: [
    {
      SN: 205237,
      MSG_CN:
        '[서울특별시 강남구, 부산광역시 해운대구, 대구광역시 수성구, 인천광역시 연수구, 광주광역시 북구, 대전광역시 유성구, 울산광역시 남구, 세종특별자치시, 경기도 성남시 분당구, 강원도 강릉시, 충청북도 청주시 상당구, 전라북도 남원시] 주천,아영,산내,인월,운봉지역에 많은 비가내려 산사태 위험 높으므로 입산 및 산림주변 통행금지, 대피명령 있을시 마을회관 등 안전한 곳으로 대피바랍니다',
      RCPTN_RGN_NM:
        '서울특별시 강남구, 부산광역시 해운대구, 대구광역시 수성구, 인천광역시 연수구, 광주광역시 북구, 대전광역시 유성구, 울산광역시 남구, 세종특별자치시, 경기도 성남시 분당구, 강원도 강릉시, 충청북도 청주시 상당구, 전라북도 남원시',
      CRT_DT: '2023/09/16 16:56:05',
      REG_YMD: '2023-09-16',
      EMRG_STEP_NM: '안전안내',
      DST_SE_NM: '산사태',
      MDFCN_YMD: '2023-09-16',
    },
    {
      SN: 205239,
      MSG_CN:
        '[충주시] 모레까지 우리 시에 많은 비. 산사태 발생이 우려되므로 산림 주변 야외활동을 자제하시고 산에 있을 경우 즉시 산림 밖으로 피하시기 바랍니다.',
      RCPTN_RGN_NM: '충청북도 충주시',
      CRT_DT: '2023/09/16 17:42:20',
      REG_YMD: '2023-09-16',
      EMRG_STEP_NM: '안전안내',
      DST_SE_NM: '산사태',
      MDFCN_YMD: '2023-09-16',
    },
  ],
  조수: [
    {
      SN: 205244,
      MSG_CN:
        '[경기도청] 연천군(필승교) 수위 1m 이상 임진강 수위 상승 중. 하천변의 행락객, 야영객, 어민, 지역주민 등은 즉시 대피하시기 바랍니다.',
      RCPTN_RGN_NM: '임진강 수계지역(경기도 연천군,파주시)',
      CRT_DT: '2023/09/16 18:06:40',
      REG_YMD: '2023-09-16',
      EMRG_STEP_NM: '안전안내',
      DST_SE_NM: '조수',
      MDFCN_YMD: '2023-09-16',
    },
  ],
  지진: [
    {
      SN: 205001,
      MSG_CN:
        '[기상청] 경주시 서북쪽 8km 지역에서 규모 3.2 지진이 발생했습니다. 지진 발생 시 안전한 곳으로 대피하시기 바랍니다.',
      RCPTN_RGN_NM: '경상북도 경주시',
      CRT_DT: '2023/09/16 10:30:15',
      REG_YMD: '2023-09-16',
      EMRG_STEP_NM: '주의보',
      DST_SE_NM: '지진',
      MDFCN_YMD: '2023-09-16',
    },
  ],
  폭염: [
    {
      SN: 205002,
      MSG_CN:
        '[기상청] 전국 대부분 지역에 폭염주의보가 발효되었습니다. 외출 시 충분한 수분 섭취와 그늘 이용을 권장합니다.',
      RCPTN_RGN_NM: '전국',
      CRT_DT: '2023/09/16 12:00:00',
      REG_YMD: '2023-09-16',
      EMRG_STEP_NM: '주의보',
      DST_SE_NM: '폭염',
      MDFCN_YMD: '2023-09-16',
    },
  ],
  '풍수해(태풍,호우,대설)': [
    {
      SN: 205163,
      MSG_CN:
        '[행정안전부] 오늘 11시10분 부산 호우경보, 산사태ㆍ상습침수 등 위험지역 대피, 외출자제 등 안전에 주의바랍니다',
      RCPTN_RGN_NM: '부산광역시 전체',
      CRT_DT: '2023/09/16 11:09:49',
      REG_YMD: '2023-09-16',
      EMRG_STEP_NM: '안전안내',
      DST_SE_NM: '호우',
      MDFCN_YMD: '2023-09-16',
    },
    {
      SN: 205164,
      MSG_CN:
        '[울주군]오늘부터 내일까지 많은 비가 예상되고 있습니다. 하천변 산책로, 계곡, 저지대, 산 인접지 등 위험 지역에는 접근 삼가해주시기 바랍니다.',
      RCPTN_RGN_NM: '울산광역시 울주군',
      CRT_DT: '2023/09/16 11:11:56',
      REG_YMD: '2023-09-16',
      EMRG_STEP_NM: '안전안내',
      DST_SE_NM: '호우',
      MDFCN_YMD: '2023-09-16',
    },
  ],
  감염병: [
    {
      SN: 205003,
      MSG_CN:
        '[질병관리청] 코로나19 확진자 증가로 인해 실내 마스크 착용을 권장합니다. 발열, 기침 등 증상이 있으시면 즉시 검사를 받으시기 바랍니다.',
      RCPTN_RGN_NM: '전국',
      CRT_DT: '2023/09/16 14:30:00',
      REG_YMD: '2023-09-16',
      EMRG_STEP_NM: '안전안내',
      DST_SE_NM: '감염병',
      MDFCN_YMD: '2023-09-16',
    },
  ],
  다중밀집건축물붕괴대형사고: [
    {
      SN: 205004,
      MSG_CN:
        '[소방청] 서울 강남구 신축 건물에서 화재가 발생했습니다. 해당 지역 주민들은 안전한 곳으로 대피하시기 바랍니다.',
      RCPTN_RGN_NM: '서울특별시 강남구',
      CRT_DT: '2023/09/16 15:45:00',
      REG_YMD: '2023-09-16',
      EMRG_STEP_NM: '긴급재난',
      DST_SE_NM: '다중밀집건축물붕괴대형사고',
      MDFCN_YMD: '2023-09-16',
    },
  ],
  산불: [
    {
      SN: 205005,
      MSG_CN:
        '[산림청] 강원도 춘천시에서 산불이 발생했습니다. 산불 예방을 위해 산행을 자제하시고 화기 취급에 주의하시기 바랍니다.',
      RCPTN_RGN_NM: '강원특별자치도 춘천시',
      CRT_DT: '2023/09/16 16:20:00',
      REG_YMD: '2023-09-16',
      EMRG_STEP_NM: '경보',
      DST_SE_NM: '산불',
      MDFCN_YMD: '2023-09-16',
    },
  ],
  '초미세먼지 재난': [
    {
      SN: 205006,
      MSG_CN:
        '[환경부] 수도권 지역에 초미세먼지 농도가 높습니다. 실외활동을 자제하시고 마스크 착용을 권장합니다.',
      RCPTN_RGN_NM: '수도권',
      CRT_DT: '2023/09/16 17:10:00',
      REG_YMD: '2023-09-16',
      EMRG_STEP_NM: '주의보',
      DST_SE_NM: '초미세먼지 재난',
      MDFCN_YMD: '2023-09-16',
    },
  ],
  해양선박사고: [
    {
      SN: 205007,
      MSG_CN:
        '[해양경찰청] 부산항 인근에서 선박 충돌사고가 발생했습니다. 해당 해역을 이용하시는 선박들은 주의하여 주시기 바랍니다.',
      RCPTN_RGN_NM: '부산광역시',
      CRT_DT: '2023/09/16 18:30:00',
      REG_YMD: '2023-09-16',
      EMRG_STEP_NM: '안전안내',
      DST_SE_NM: '해양선박사고',
      MDFCN_YMD: '2023-09-16',
    },
  ],
  교통통제: [
    {
      SN: 205008,
      MSG_CN:
        '[경찰청] 서울 강남구 테헤란로에서 교통사고로 인한 교통통제가 실시되고 있습니다. 해당 구간을 이용하시는 운전자분들은 우회로를 이용해주시기 바랍니다.',
      RCPTN_RGN_NM: '서울특별시 강남구',
      CRT_DT: '2023/09/16 19:15:00',
      REG_YMD: '2023-09-16',
      EMRG_STEP_NM: '안전안내',
      DST_SE_NM: '교통통제',
      MDFCN_YMD: '2023-09-16',
    },
  ],
  기타: [
    {
      SN: 205009,
      MSG_CN:
        '[행정안전부] 전국적으로 안전사고 예방을 위한 안전점검이 실시됩니다. 각 가정과 사업장에서 안전관리에 주의를 기울여주시기 바랍니다.',
      RCPTN_RGN_NM: '전국',
      CRT_DT: '2023/09/16 20:00:00',
      REG_YMD: '2023-09-16',
      EMRG_STEP_NM: '안전안내',
      DST_SE_NM: '기타',
      MDFCN_YMD: '2023-09-16',
    },
  ],
};

// 임시 데이터 생성 함수
const generateMockData = (
  pageNo: number,
  rgnNm: string
): SafetyDisasterMessagesResponse => {
  // 카테고리에 해당하는 데이터 가져오기
  const categoryData = disasterDataByCategory['풍수해(태풍,호우,대설)'];

  // 페이지별로 다른 데이터 생성 (10개씩)
  const mockMessages: SafetyDisasterMessages[] = Array.from(
    { length: 10 },
    (_, index) => {
      const baseData = categoryData[index % categoryData.length];
      return {
        ...baseData,
        SN: pageNo * 1000 + index + 1,
        RCPTN_RGN_NM: rgnNm || baseData.RCPTN_RGN_NM,
        CRT_DT: `2024/01/${String(pageNo).padStart(2, '0')} ${String(10 + index).padStart(2, '0')}:${String(index * 5).padStart(2, '0')}:00`,
        REG_YMD: `2024-01-${String(pageNo).padStart(2, '0')}`,
        MDFCN_YMD: `2024-01-${String(pageNo).padStart(2, '0')}`,
      };
    }
  );

  return {
    header: {
      resultMsg: '정상적으로 처리되었습니다.',
      resultCode: '00',
      errorMsg: null,
    },
    numOfRows: 10,
    pageNo: pageNo,
    totalCount: 50, // 총 5페이지
    body: mockMessages,
  };
};

const getMockApiData = async (
  params: SafetyDisasterMessagesRequest
): Promise<SafetyDisasterMessagesResponse> => {
  // API 요청 대신 임시 데이터 반환
  return generateMockData(params.pageNo || 1, params.rgnNm || '');
};

const getDetailSafetyDisasterMessages = async (
  params: SafetyDisasterMessagesRequest
) => {
  const SERVICE_KEY = import.meta.env.VITE_APP_API_KEY;

  // 개발 환경에서 목데이터 사용
  if (import.meta.env.DEV) {
    return getMockApiData(params);
  }

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
        rgnNm: '',
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // API 응답에서 총 페이지 수나 다음 페이지 정보를 확인
      const currentPage = allPages.length;
      const totalPages = Math.ceil((lastPage.totalCount || 0) / 10);

      // 기존 로직
      // return currentPage < totalPages ? currentPage + 1 : undefined;

      // 테스트용 최대 20개까지만 로드 (2페이지)
      const maxPages = 2;

      return currentPage < Math.min(totalPages, maxPages)
        ? currentPage + 1
        : undefined;
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
            const regionPrefix = item.RCPTN_RGN_NM.split(' ')[0];

            const regionMatch =
              params.rgnNm === '' ||
              regionPrefix === REGION_FULL_NAMES[params.rgnNm];

            return categoryMatch && regionMatch;
          }),
        })),
      };
    },
  });
};

export default useLocationDetailDisasterMessages;
