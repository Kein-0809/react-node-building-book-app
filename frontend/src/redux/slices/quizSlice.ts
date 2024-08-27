import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface QuizState {
  loading: boolean;
  error: string | null;
}

const initialState: QuizState = {
  loading: false,
  error: null,
};

export const submitQuiz = createAsyncThunk('quiz/submitQuiz', async (quizData: { word_id: number, selected_option: string, is_correct: boolean }) => {
  const response = await axios.post('/quizzes', quizData);
  return response.data;
});

const quizSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitQuiz.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitQuiz.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(submitQuiz.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Quiz submission failed';
      });
  },
});

export default quizSlice.reducer;
