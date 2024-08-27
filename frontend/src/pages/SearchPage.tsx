import React, { useState } from 'react';

const SearchPage = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log(`Searching for: ${query}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Search</h1>
      <div className="max-w-md mx-auto">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Search for a word..."
        />
        <button
          onClick={handleSearch}
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
