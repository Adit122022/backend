import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
 const [user, setuser] = useState(null);
 const [error, setError] = useState('');
 const [isLoading, setIsLoading] = useState(true);
 
 const fetchUserData = async () => {
 await axios.get('http://localhost:3000/users/profile' ,{headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },})
 .then(res => {setuser(res.data); setIsLoading(false); })
 .catch(err => { setError(err.response.data.message); setIsLoading(false); });
 }
 useEffect(()=>{
  fetchUserData();
 },[])
 console.log(user)

 if (error) return <p className="text-red-500">{error}</p>;
 if (!user) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-20 md:w-60 bg-gray-100 border-r border-gray-300 p-4">
        <h1 className="text-2xl font-bold mb-6">Instagram</h1>
        <nav className="flex flex-col space-y-6">
          <Link to="/home" className="flex items-center space-x-3 text-lg hover:text-gray-700">
            <span>🏠</span>
            <span className="hidden md:block">Home</span>
          </Link>
          <Link to="/search" className="flex items-center space-x-3 text-lg hover:text-gray-700">
            <span>🔍</span>
            <span className="hidden md:block">Search</span>
          </Link>
          <Link to="/explore" className="flex items-center space-x-3 text-lg hover:text-gray-700">
            <span>🧭</span>
            <span className="hidden md:block">Explore</span>
          </Link>
          <Link to="/reels" className="flex items-center space-x-3 text-lg hover:text-gray-700">
            <span>🎥</span>
            <span className="hidden md:block">Reels</span>
          </Link>
          <Link to="/messages" className="flex items-center space-x-3 text-lg hover:text-gray-700">
            <span>✉</span>
            <span className="hidden md:block">Messages</span>
          </Link>
          <Link to="/notifications" className="flex items-center space-x-3 text-lg hover:text-gray-700">
            <span>❤</span>
            <span className="hidden md:block">Notifications</span>
          </Link>
          <Link to="/create" className="flex items-center space-x-3 text-lg hover:text-gray-700">
            <span>➕</span>
            <span className="hidden md:block">Create</span>
          </Link>
          <Link to="/profile" className="flex items-center space-x-3 text-lg hover:text-gray-700">
            <span>👤</span>
            <span className="hidden md:block">Profile</span>
          </Link>
        </nav>
      </div>

      {/* Profile Content */}
      <div className="flex-1 p-6">
        {/* Profile Info */}
        <div className="flex items-center space-x-6 mb-6">
          <img
            src={user.profileImage}
            alt="Profile"
            className="w-36 h-36 rounded-full border border-gray-400"
          />
          <div>
            <div className="flex items-center space-x-4 mb-2">
              <h2 className="text-xl font-semibold">{user.username}</h2>
              <button className="bg-gray-200 px-4 py-2 rounded-md text-sm">Edit profile</button>
              <button className="bg-gray-200 px-4 py-2 rounded-md text-sm">View archive</button>
              <button className="text-xl">⚙</button>
            </div>
            <div className="flex space-x-6 mb-3">
              <div><span className="font-semibold">5</span> posts</div>
              <div><span className="font-semibold">346</span> followers</div>
              <div><span className="font-semibold">556</span> following</div>
            </div>
            <div>
              <p className="text-lg">{user.username}</p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="flex space-x-4 mb-6">
          {['kodr💀', '🤝', '✈', '🐂'].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 border-2 border-gray-400 rounded-full"></div>
              <span className="text-xs mt-1">{item}</span>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-6 border-t border-gray-300 py-4">
          <button className="text-sm font-semibold">📸 POSTS</button>
          <button className="text-sm font-semibold">🔖 SAVED</button>
          <button className="text-sm font-semibold">🏷 TAGGED</button>
        </div>

        <div className="grid grid-cols-4 gap-2">
  {user.posts && user.posts.map((post,index) => (
  
    <div key={index} className=" bg-gray-300">
       <Link to={`/post-details/${index}`}>
      <img 
        src={post.media} 
        alt={`Post`} 
        className="w-full h-full object-cover" 
      />
    </Link>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default Profile;