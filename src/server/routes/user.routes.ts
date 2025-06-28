import { Router, type Request, type Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { asyncHandler } from '../utiles/asyncHandler';
import bcrypt from 'bcrypt';

const router = Router();
const prisma = new PrismaClient();

// ✅ 사용자 전체 조회 (GET /api/users)
router.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    const users = await prisma.user.findMany({
      select: { id: true, name: true, email: true }, // 비밀번호 제외
    });
    res.json(users);
  })
);

// ✅ 회원가입 처리 (POST /api/users)
router.post(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    // 입력값 검증
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'name, email, password는 필수입니다.' });
    }

    // ✅ 중복 이메일 체크
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: '이미 등록된 이메일입니다.' });
    }

    // ✅ 비밀번호 해시
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ DB 저장
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // 비밀번호는 응답에 포함하지 않음
    res.status(201).json({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    });
  })
);

export default router;
