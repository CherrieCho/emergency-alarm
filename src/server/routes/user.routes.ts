import { Router } from 'express';
import type { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { asyncHandler } from '../utiles/asyncHandler';

const router = Router();
const prisma = new PrismaClient();

router.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.json(users);
    console.log(req);
  })
);

router.post(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: 'name과 email은 필수입니다.' });
    }

    const newUser = await prisma.user.create({
      data: { name, email },
    });

    res.status(201).json(newUser);
  })
);

export default router;
