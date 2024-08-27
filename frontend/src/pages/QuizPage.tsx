import React from 'react';
import Quiz from '../components/Quiz';
import { Word } from '../redux/slices/wordSlice';

const sampleWord: Word = {
  word_id: 1,
  en_word: 'apple',
  jp_word: 'りんご',
  pronounce: 'ˈæpəl',
  part_of_speech: 'noun',
  en_example: 'She ate an apple for breakfast.',
  jp_example: '彼女は朝食にりんごを食べた。',
  image: 'apple.png',
  synonyms: ['fruit', 'pome'],
};

const QuizPage = () => {
  const handleSubmit = (selectedOption: string) => {
    console.log(`Selected: ${selectedOption}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Quiz</h1>
      <Quiz word={sampleWord} options={['りんご', '犬', '美しい', '本']} onSubmit={handleSubmit} />
    </div>
  );
};

export default QuizPage;
