import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PostCreate = () => {
    const [media, setMediaUrl] = useState('');
    const [caption, setCaption] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
let token = localStorage.getItem('token');
axios.post(
    'http://localhost:3000/posts/create',
    { media, caption }, // Correct placement for request body
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  )
  .then(() => navigate('/profile'))
  .catch(err => {
    const message = err.response?.data?.message || 'Failed to create post';
    setError(message);
  });
  
    };
  
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-xl w-96 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Upload Media</h2>
          
          <input 
            type="url" 
            placeholder="Media URL" 
            value={media} 
            onChange={(e) => setMediaUrl(e.target.value)}
            className="w-full p-3 border rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          
          <input 
            type="text" 
            placeholder="Caption" 
            value={caption} 
            onChange={(e) => setCaption(e.target.value)}
            className="w-full p-3 border rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          
          <button 
            type="submit" 
            className="w-full py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };

export default PostCreate