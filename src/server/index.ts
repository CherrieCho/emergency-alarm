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
  'https://4yd8adlh.up.railway.app/',
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));
app.use(express.json());
app.get('/api', (req, res) => {
  res.send('✅ API is running');
});
app.use('/api', authRoutes);

// ✅ /api/users 라우터 연결
app.use('/api/users', userRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running`);
});
