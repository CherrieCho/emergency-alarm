import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
// import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
// const prisma = new PrismaClient();

const allowedOrigins = [
  'http://localhost:3000',
  'https://emergency-alarm.vercel.app',
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));
app.use(express.json());
app.get('/api', (_req, res) => {
  res.send('✅ API is running');
});
app.use('/api', authRoutes);

// ✅ /api/users 라우터 연결
app.use('/api/users', userRoutes);

const port = Number(process.env.PORT) || 3001;
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${port}`);
});