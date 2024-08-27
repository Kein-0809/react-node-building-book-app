import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchWords } from '../redux/slices/wordSlice';
import WordCard from '../components/WordCard';

const LearnPage = () => {
  const dispatch = useAppDispatch();
  const { words, loading, error } = useAppSelector((state) => state.words);

  useEffect(() => {
    dispatch(fetchWords());
  }, [dispatch]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Learn</h1>
      {words.map((word) => (
        <WordCard
          key={word.word_id}
          word={word}
          onSwipeLeft={() => console.log(`Missed: ${word.en_word}`)}
          onSwipeRight={() => console.log(`Remembered: ${word.en_word}`)}
        />
      ))}
    </div>
  );
};

export default LearnPage;
