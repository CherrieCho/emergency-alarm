import type { getSafetyDataRequest } from '../models/guideline';
import { safetyApi, socialSafetyApi } from '../utils/guideApi';

export const fetchSafetyDataNatural = async (params: getSafetyDataRequest) => {
  try {
    const res = await safetyApi.get('/V2/api/DSSP-IF-20588', {
      params: {
        returnType: 'json',
        numOfRows: '60',
        ...params, //컴포넌트에서 추가한 파라미터
      },
    });
    return res.data;
  } catch (error) {
    throw new Error('자연재해 행동요령 가져오기 실패');
  }
};

export const fetchSafetyDataSocial = async (params: getSafetyDataRequest) => {
  try {
    const res = await socialSafetyApi.get('/V2/api/DSSP-IF-20589', {
      params: {
        returnType: 'json',
        numOfRows: '60',
        ...params, //컴포넌트에서 추가한 파라미터
      },
    });
    return res.data;
  } catch (error) {
    throw new Error('자연재해 행동요령 가져오기 실패');
  }
};
