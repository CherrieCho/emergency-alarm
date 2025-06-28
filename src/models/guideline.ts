export interface getSafetyDataRequest {
  numOfRows?: number;
  pageNo?: number;
  returnType?: string;
  safety_cate?: string;
}

export type DisasterItem = {
  name: string;
  cateId?: string;
  pageNo?: number;
};
