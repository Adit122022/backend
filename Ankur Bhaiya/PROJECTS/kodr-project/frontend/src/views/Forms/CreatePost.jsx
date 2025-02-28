import React from 'react'
import axios from 'axios'
import {  useNavigate } from "react-router-dom";
import NavBar from '../../components/others/NavBar';

const CreatePost = () => {
 const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await axios.post(
        "http://localhost:3000/v1/api/post/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data", // ✅ Important for file upload
          },
        }
      );
 navigate('/');  
      console.log("Post created:", response.data);
    } catch (error) {
      console.error("Error creating post:", error.response?.data || error);
    }
  };


  return (
    <div className='flex min-h-screen'>
      <NavBar/>
    <main className="flex items-center justify-center w-full min-h-screen bg-gray-900">
      <section className="w-full max-w-lg bg-gray-800 p-8 shadow-2xl rounded-2xl">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Create Post
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Upload Media:</label>
            <input
              type="file"
              name="media"
              accept="image/*"
              className="w-full p-2 mt-1 border rounded-lg shadow-sm bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Content:</label>
            <textarea
              name="caption"
              rows="4"
              className="w-full p-3 mt-1 border rounded-lg shadow-sm bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Write something here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" >
            Submit
          </button>
        </form>
      </section>
    </main>
 </div>
  )
}

export default CreatePost