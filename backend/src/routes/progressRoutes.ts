import { Router } from 'express';
import { getProgress } from '../controllers/progressController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.get('/', authMiddleware, getProgress);

export default router;
