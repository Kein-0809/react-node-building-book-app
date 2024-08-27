import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import wordReducer from './slices/wordSlice';
import quizReducer from './slices/quizSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    words: wordReducer,
    quizzes: quizReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
