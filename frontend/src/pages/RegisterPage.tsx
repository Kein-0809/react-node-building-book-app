import React from 'react';
import AuthForm from '../components/AuthForm';

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h1>
        <AuthForm type="register" />
      </div>
    </div>
  );
};

export default RegisterPage;
