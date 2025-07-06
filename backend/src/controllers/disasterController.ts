import { Request, Response } from 'express';
import axios from 'axios';
import { asyncHandler } from '../utils/asyncHandler';

// 재난 안전 메시지 조회
export const getSafetyDisasterMessages = asyncHandler(
  async (req: Request, res: Response) => {
    const SERVICE_KEY = process.env.API_KEY;

    if (!SERVICE_KEY) {
      return res.status(500).json({ message: 'API 키가 설정되지 않았습니다.' });
    }

    const { pageNo, rgnNm, numOfRows, returnType, crtDt } = req.query;

    try {
      const response = await axios.get('/safety-api/V2/api/DSSP-IF-00247', {
        baseURL: 'https://www.safetydata.go.kr',
        params: {
          serviceKey: SERVICE_KEY,
          numOfRows,
          returnType,
          pageNo,
          crtDt,
          rgnNm,
        },
      });

      res.json(response.data);
    } catch (error) {
      res.status(500).json({
        message: '재난 메시지 API 호출 중 오류가 발생했습니다.',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }
);
