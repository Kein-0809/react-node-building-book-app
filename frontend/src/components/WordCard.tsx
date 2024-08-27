import React, { useState } from 'react';
import { Word } from '../redux/slices/wordSlice';

interface WordCardProps {
  word: Word;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const WordCard: React.FC<WordCardProps> = ({ word, onSwipeLeft, onSwipeRight }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{word.en_word}</h2>
        {showDetails && (
          <>
            <img src={`/images/${word.image}`} alt={word.en_word} className="w-full h-40 object-cover mt-4" />
            <p className="text-gray-600 mt-2">{word.jp_word}</p>
            <p className="text-gray-500 text-sm mt-1">{word.en_example}</p>
            <p className="text-gray-500 text-sm mt-1">{word.jp_example}</p>
          </>
        )}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-blue-500 hover:underline mt-4"
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        <div className="flex justify-between mt-4">
          <button onClick={onSwipeLeft} className="text-red-500 hover:underline">分からない</button>
          <button onClick={onSwipeRight} className="text-green-500 hover:underline">覚えた</button>
        </div>
      </div>
    </div>
  );
};

export default WordCard;
