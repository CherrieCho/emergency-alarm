import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes';
// import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
// const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// ✅ /api/users 라우터 연결
app.use('/api/users', userRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
