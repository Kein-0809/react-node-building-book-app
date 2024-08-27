import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User';
import { generateToken } from '../utils/jwtUtils';

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const password_hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password_hash });
    const token = generateToken(user.user_id);
    return res.status(201).json({ token, user });
  } catch (error) {
    return res.status(500).json({ message: 'Error registering user.' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const token = generateToken(user.user_id);
    return res.status(200).json({ token, user });
  } catch (error) {
    return res.status(500).json({ message: 'Error logging in.' });
  }
};
