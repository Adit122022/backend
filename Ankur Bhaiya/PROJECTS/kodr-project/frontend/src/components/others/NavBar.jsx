import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
<>
         {/* Sidebar */}
      <div className="w-20 md:w-60 bg-gray-500 border-r border-gray-300 p-4">
        <h1 className="text-2xl font-bold mb-6">Instagram</h1>
        <nav className="flex flex-col space-y-6">
          <Link to="/" className="flex items-center space-x-3 text-lg hover:bg-gray-400 py-2 px-4 rounded-xl hover:text-gray-700">
            <span>🏠</span>
            <span className="hidden md:block">Home</span>
          </Link>
          <Link to="/search" className="flex items-center space-x-3 text-lg hover:bg-gray-400 py-2 px-4 rounded-xl hover:text-gray-700">
            <span>🔍</span>
            <span className="hidden md:block">Search</span>
          </Link>
          <Link to="/explore" className="flex items-center space-x-3 text-lg hover:bg-gray-400 py-2 px-4 rounded-xl hover:text-gray-700">
            <span>🧭</span>
            <span className="hidden md:block">Explore</span>
          </Link>
          <Link to="/reels" className="flex items-center space-x-3 text-lg hover:bg-gray-400 py-2 px-4 rounded-xl hover:text-gray-700">
            <span>🎥</span>
            <span className="hidden md:block">Reels</span>
          </Link>
          <Link to="/messages" className="flex items-center space-x-3 text-lg hover:bg-gray-400 py-2 px-4 rounded-xl hover:text-gray-700">
            <span>✉</span>
            <span className="hidden md:block">Messages</span>
          </Link>
          <Link to="/notifications" className="flex items-center space-x-3 text-lg hover:bg-gray-400 py-2 px-4 rounded-xl hover:text-gray-700">
            <span>❤</span>
            <span className="hidden md:block">Notifications</span>
          </Link>
          <Link to="/create-post" className="flex items-center space-x-3 text-lg hover:bg-gray-400 py-2 px-4 rounded-xl hover:text-gray-700">
            <span>➕</span>
            <span className="hidden md:block">Create</span>
          </Link>
          <Link to="/profile" className="flex items-center space-x-3 text-lg hover:bg-gray-400 py-2 px-4 rounded-xl hover:text-gray-700">
            <span>👤</span>
            <span className="hidden md:block">Profile</span>
          </Link>
        </nav>
      </div>
</>
  )
}

export default NavBar









