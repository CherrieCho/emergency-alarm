export interface getSafetyDisasterMessagesParams {
  numOfRows?: number; // 페이지 당 개수
  pageNo?: number; // 페이지 번호
  returnType?: string; // 응답 타입
  crtDt?: string; //조회 시작 일자 (YYYYMMDD)
  rgnNm: string; // 지역 명(시도명, 시군구명)
}
