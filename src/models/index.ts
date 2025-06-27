// 개별 알림 메시지 타입
export interface SafetyDisasterMessages {
  MSG_CN: string; // 메시지 내용
  RCPTN_RGN_NM: string; // 수신 지역 이름
  CRT_DT: string; // 생성 일시 (예: "2023/09/16 11:09:49")
  REG_YMD: string; // 등록 일자 (예: "2023-09-16")
  EMRG_STEP_NM: string; // 비상 단계 이름 (예: "안전안내")
  SN: number; // 일련번호
  DST_SE_NM: string; // 재난 유형 (예: "호우", "교통통제", "기타")
  MDFCN_YMD: string; // 수정 일자
}

// 헤더 정보 타입
export interface ApiResponseHeader {
  resultMsg: string; // 결과 메시지
  resultCode: string; // 결과 코드 (예: "00")
  errorMsg: string | null; // 에러 메시지 (nullable)
}

// 전체 응답 타입
export interface SafetyDisasterMessagesResponse {
  header: ApiResponseHeader;
  numOfRows: number; // 한 페이지당 개수
  pageNo: number; // 페이지 번호
  totalCount: number; // 전체 데이터 수
  body: SafetyDisasterMessages[]; // 실제 경보 메시지 배열
}

export interface SafetyDisasterMessagesRequest {
  numOfRows?: number; // 페이지 당 개수
  pageNo?: number; // 페이지 번호
  returnType?: string; // 응답 타입
  crtDt?: string; //조회 시작 일자 (YYYYMMDD)
  rgnNm: string; // 지역 명(시도명, 시군구명)
}
