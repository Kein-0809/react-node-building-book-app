import React, { useState } from 'react';
import { Word } from '../redux/slices/wordSlice';

interface QuizProps {
  word: Word;
  options: string[];
  onSubmit: (selectedOption: string) => void;
}

const Quiz: React.FC<QuizProps> = ({ word, options, onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSubmit = () => {
    if (selectedOption) {
      onSubmit(selectedOption);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{word.en_word}</h2>
        <div className="mt-4">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedOption(option)}
              className={`block w-full text-left p-2 border rounded mt-2 ${
                selectedOption === option ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className={`w-full p-2 mt-4 bg-green-500 text-white rounded ${!selectedOption ? 'opacity-50' : ''}`}
          disabled={!selectedOption}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
