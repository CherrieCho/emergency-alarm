import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { asyncHandler } from '../utils/asyncHandler';
import { findUserByEmail } from '../models/userModel';

const JWT_SECRET = process.env.JWT_SECRET!;

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: '이메일과 비밀번호를 입력해주세요.' });
    }

    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: '사용자를 찾을 수 없습니다.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: '비밀번호가 틀렸습니다.' });
    }

    const token = jwt.sign(
      { userId: user.id, name: user.name, email: user.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({
      message: '로그인 성공!',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '서버 에러' });
  }
});
