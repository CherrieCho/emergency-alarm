import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();

// ✅ 허용할 프론트엔드 주소 목록
const allowedOrigins = [
  'http://localhost:3000',
  'https://emergency-alarm.vercel.app',
];

// ✅ CORS 설정
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`Not allowed by CORS: ${origin}`));
      }
    },
    credentials: true, // 프론트에서 쿠키/인증 필요 시
  })
);

// ✅ JSON 요청 파싱
app.use(express.json());

// ✅ 라우터 연결
app.use('/api/users', userRoutes);
app.use('/api', authRoutes);

export default app;
