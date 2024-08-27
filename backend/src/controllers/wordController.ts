import { Request, Response } from 'express';
import Word from '../models/Word';

export const getWords = async (req: Request, res: Response) => {
  try {
    const words = await Word.findAll();
    return res.status(200).json(words);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching words.' });
  }
};

export const getWordById = async (req: Request, res: Response) => {
  try {
    const word = await Word.findByPk(req.params.id);
    if (!word) {
      return res.status(404).json({ message: 'Word not found.' });
    }
    return res.status(200).json(word);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching word.' });
  }
};
