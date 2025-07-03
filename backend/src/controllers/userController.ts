import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { asyncHandler } from '../utils/asyncHandler';
import { createUser, findAllUsers, findUserByEmail } from '../models/userModel';

export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await findAllUsers();
  res.json(users);
});

//가입
export const register = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: 'name, email, password는 필수입니다.' });
  }

  const existing = await findUserByEmail(email);
  if (existing) {
    return res.status(400).json({ message: '이미 등록된 이메일입니다.' });
  }

  const hashed = await bcrypt.hash(password, 10);
  const newUser = await createUser(name, email, hashed);

  res.status(201).json({
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
  });
});
