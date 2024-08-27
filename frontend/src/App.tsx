import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import QuizPage from './pages/QuizPage';
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/learn" element={<LearnPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
};

export default App;
