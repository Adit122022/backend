import React, { useState } from 'react'

const PostCreate = () => {
    const [mediaUrl, setMediaUrl] = useState('');
    const [caption, setCaption] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ mediaUrl, caption });
    };
  
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-xl w-96 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Upload Media</h2>
          
          <input 
            type="url" 
            placeholder="Media URL" 
            value={mediaUrl} 
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