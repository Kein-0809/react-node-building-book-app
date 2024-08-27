import { Router } from 'express';
import { getWords, getWordById } from '../controllers/wordController';

const router = Router();

router.get('/', getWords);
router.get('/:id', getWordById);

export default router;
