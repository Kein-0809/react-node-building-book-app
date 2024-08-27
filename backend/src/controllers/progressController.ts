import { Request, Response } from 'express';
import Progress from '../models/Progress';

export const getProgress = async (req: Request, res: Response) => {
  try {
    const progress = await Progress.findAll({ where: { user_id: (req as any).userId } });
    return res.status(200).json(progress);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching progress.' });
  }
};
