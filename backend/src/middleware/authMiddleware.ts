import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express'

export const generateToken = (userId: number) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: '1d' });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET!);
};

// authMiddleware関数を追加
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: '認証トークンがありません' });
  }

  try {
    const decoded = verifyToken(token) as { userId: number };
    (req as any).userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: '無効なトークンです' });
  }
};