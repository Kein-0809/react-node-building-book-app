import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Home</h1>
        <nav className="space-y-4">
          <Link to="/learn" className="block w-full p-4 bg-blue-500 text-white rounded">
            Learn
          </Link>
          <Link to="/quiz" className="block w-full p-4 bg-green-500 text-white rounded">
            Quiz
          </Link>
          <Link to="/search" className="block w-full p-4 bg-yellow-500 text-white rounded">
            Search
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;
