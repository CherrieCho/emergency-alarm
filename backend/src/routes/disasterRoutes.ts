import { Router } from 'express';
import { getSafetyDisasterMessages } from '../controllers/disasterController';

const router = Router();

// GET /disasters/safety-messages - 재난 안전 메시지 조회
router.get('/safety-messages', getSafetyDisasterMessages);

export default router;
