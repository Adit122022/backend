import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NavBar from '../../components/others/NavBar';

const PostDetails = () => {
    const {postId} = useParams();
    const [user, setuser] = useState(null);
    const [error, setError] = useState('');

    
    const fetchUserData = async () => {
    await axios.get('http://localhost:3000/v1/api/users/profile' ,{headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },})
    .then(res => {setuser(res.data) })
    .catch(err => { setError(err.response.data.message)});
    }
    useEffect(()=>{
     fetchUserData();
    },[])
  
   
    if (error) return <p className="text-red-500">{error}</p>;
    if (!user) return <p className="text-center text-white">Loading...</p>;
  return (
          <div className="flex h-screen bg-gray-900 text-white">
            {/* Sidebar */}
           
              <NavBar />
           
            
            {/* Main Content */}
            <div className="main flex-1 p-6 flex justify-center items-start overflow-auto">
              <div className="max-w-lvh w-full border rounded-md shadow-md bg-gray-700">
                {/* Header */}
                <div className=" flex items-center p-4 border-b w-full border-gray-600">
                  <img
                    src={user.profileImage}
                    alt="profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-sm">{user.username}</p>
                    <p className="text-xs text-gray-400">Savitri Resorts Pushkar</p>
                  </div>
                </div>
      
                {/* Post Image */}
                <img
                  src={user.posts[postId].media}
                  alt="Instagram Post"
                  className="w-full h-96 object-cover"
                />
      
                {/* Actions */}
                <div className="flex justify-between px-4 py-3 border-b border-gray-600">
                  <div className="flex space-x-4 text-lg">
                    <button>❤</button>
                    <button>💬</button>
                    <button>📤</button>
                  </div>
                  <button>🔖</button>
                </div>
      
                {/* Likes */}
                <div className="px-4 py-2">
                  <p className="text-sm font-semibold">
                    Liked by ananya_sahu16 and 131 others
                  </p>
                </div>
      
                {/* Caption */}
                <div className="px-4 py-2">
                  <p>
                    <span className="font-semibold">{user.username}</span> {user.posts[postId].caption}
                  </p>
                </div>
      
                {/* Comments */}
                <div className="px-4 py-2">
                  <p className="text-sm text-gray-400">View all comments</p>
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
                <div className="px-4 py-3 border-t border-gray-600">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="w-full p-2 text-sm bg-gray-700 border-none focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
  );
};


export default PostDetails