import { Router } from 'express';
import { submitQuiz } from '../controllers/quizController';
// authMiddlewareをnamed importに変更
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.post('/', authMiddleware, submitQuiz);

export default router;
