import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {postId} = useParams();
    const [user, setuser] = useState(null);
    const [error, setError] = useState('');

    
    const fetchUserData = async () => {
    await axios.get('http://localhost:3000/users/profile' ,{headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },})
    .then(res => {setuser(res.data) })
    .catch(err => { setError(err.response.data.message)});
    }
    useEffect(()=>{
     fetchUserData();
    },[])
    console.log(user)
   
    if (error) return <p className="text-red-500">{error}</p>;
    if (!user) return <p className="text-center text-white">Loading...</p>;
  return (
    <div className="max-w-lg mx-auto border rounded-md shadow-md bg-white">
      {/* Header */}
      <div className="flex items-center p-4">
        <img
          src={user.profileImage}
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <p className="font-semibold text-sm">{user.username}</p>
          <p className="text-xs text-gray-500">Savitri Resorts Pushkar</p>
        </div>
      </div>

      {/* Post Image */}
      <img
        src={user.posts[postId].media}
        alt="Instagram Post"
        className="w-full h-96 object-cover"
      />

      {/* Actions */}
      <div className="flex justify-between px-4 py-3">
        <div className="flex space-x-4">
          <button>❤</button>
          <button>💬</button>
          <button>📤</button>
        </div>
        <button>🔖</button>
      </div>

      {/* Likes */}
      <div className="px-4">
        <p className="text-sm font-semibold">Liked by ananya_sahu16 and 131 others</p>
      </div>

      {/* Caption */}
      <div className="px-4 py-2">
        <p>
          <span className="font-semibold">{user.username}</span> {user.posts[postId].caption}
        </p>
      </div>

      {/* Comments */}
      <div className="px-4 py-2">
        <p className="text-sm text-gray-500">View all comments</p>
        <p className="text-sm">
          <span className="font-semibold">khushbu__nankani</span> ❤
        </p>
        <p className="text-sm">
          <span className="font-semibold">anuj_saini_8209</span> ❤🔥
        </p>
        <p className="text-sm">
          <span className="font-semibold">mayank_chandnani</span> ❤🔥
        </p>
        <p className="text-sm">
          <span className="font-semibold">gaurav_singh_shekhawat23</span> Hero🔥
        </p>
      </div>

      {/* Add Comment */}
      <div className="px-4 py-3 border-t">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full p-2 text-sm border-none focus:outline-none"
        />
      </div>
    </div>
  );
};


export default PostDetails