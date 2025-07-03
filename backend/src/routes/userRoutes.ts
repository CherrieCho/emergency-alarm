import { Router } from 'express';
import { getUsers, register } from '../controllers/userController';

const router = Router();

router.get('/', getUsers);
router.post('/register', register);

export default router;
