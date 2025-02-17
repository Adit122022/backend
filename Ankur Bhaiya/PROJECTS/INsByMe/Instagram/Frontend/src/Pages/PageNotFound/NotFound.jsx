// src/views/NotFound.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <h2 className="text-4xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-6">Sorry, the page you are looking for doesn't exist.</p>
      <button 
        onClick={() => navigate('/')} 
        className="px-6 py-3 bg-blue-500 text-white font-medium rounded-2xl shadow-lg hover:bg-blue-600 transition-all"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;