import React from 'react';
import NavBar from '../../components/others/NavBar';

const Profile = () => {

  return (
   <main className='flex min-h-screen'>
   <NavBar/>
   
  {/* Profile Content */}
      <div className="flex-1 p-6 bg-gray-800 text-white">
        {/* Profile Info */}
        <div className="flex items-center space-x-6 mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-36 h-36 rounded-full border border-gray-400"
          />
          <div>
            <div className="flex items-center space-x-4 mb-2">
              <h2 className="text-xl font-semibold">manish_adtani</h2>
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
              <p className="text-lg">Manish Adtani</p>
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

        {/* Posts Grid */}
        <div className="grid grid-cols-3 gap-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-48 bg-gray-300"></div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Profile;