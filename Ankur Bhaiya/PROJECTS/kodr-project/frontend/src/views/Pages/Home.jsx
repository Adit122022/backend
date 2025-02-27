import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/create-post')
  };
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900">
    <button 
      className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-300 focus:ring-4 focus:ring-blue-400 focus:outline-none"
      onClick={handleClick}
    >
      Create Post
    </button>
  </main>
  
  );
};

export default Home;
