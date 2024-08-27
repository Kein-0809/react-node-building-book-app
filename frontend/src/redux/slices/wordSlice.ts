import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Word {
  word_id: number;
  en_word: string;
  jp_word: string;
  pronounce: string;
  part_of_speech: string;
  en_example: string;
  jp_example: string;
  image: string;
  synonyms: string[];
}

interface WordState {
  words: Word[];
  loading: boolean;
  error: string | null;
}

const initialState: WordState = {
  words: [],
  loading: false,
  error: null,
};

export const fetchWords = createAsyncThunk('words/fetchWords', async () => {
  const response = await axios.get('/words');
  return response.data;
});

const wordSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWords.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWords.fulfilled, (state, action) => {
        state.loading = false;
        state.words = action.payload;
      })
      .addCase(fetchWords.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch words';
      });
  },
});

export default wordSlice.reducer;
