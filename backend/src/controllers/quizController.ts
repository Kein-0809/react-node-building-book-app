import { Request, Response } from 'express';
import Quiz from '../models/Quiz';

export const submitQuiz = async (req: Request, res: Response) => {
  const { word_id, selected_option, is_correct } = req.body;

  try {
    const quiz = await Quiz.create({
      user_id: (req as any).userId,
      word_id,
      selected_option,
      is_correct,
    });
    return res.status(201).json(quiz);
  } catch (error) {
    return res.status(500).json({ message: 'Error submitting quiz.' });
  }
};
