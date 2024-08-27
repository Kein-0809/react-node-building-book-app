import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'express';
import { sequelize } from './utils/db';

import authRoutes from './routes/authRoutes';
import wordRoutes from './routes/wordRoutes';
import progressRoutes from './routes/progressRoutes';
import quizRoutes from './routes/quizRoutes';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes
app.use('/auth', authRoutes);
app.use('/words', wordRoutes);
app.use('/progress', progressRoutes);
app.use('/quizzes', quizRoutes);

sequelize.sync().then(() => console.log('Database connected.'));

export default app;
