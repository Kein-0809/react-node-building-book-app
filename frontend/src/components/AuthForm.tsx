import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { login, register } from '../redux/slices/authSlice';

interface AuthFormProps {
  type: 'login' | 'register';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === 'login') {
      dispatch(login({ email, password }));
    } else {
      dispatch(register({ email, password }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      {error && <div className="bg-red-100 text-red-700 p-2 rounded mb-4">{error}</div>}
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mt-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mt-2"
          required
        />
      </div>
      <button
        type="submit"
        className={`w-full p-2 bg-blue-500 text-white rounded ${loading ? 'opacity-50' : ''}`}
        disabled={loading}
      >
        {loading ? 'Loading...' : type === 'login' ? 'Login' : 'Register'}
      </button>
    </form>
  );
};

export default AuthForm;
