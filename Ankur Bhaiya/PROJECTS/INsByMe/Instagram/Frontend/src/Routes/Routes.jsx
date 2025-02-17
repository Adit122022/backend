import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from '../views/RegisterPage/Register'
import Login from '../views/LoginPage/Login'
import Profile from '../views/Profile/Profile'
import PostDetails from '../views/Profile/posts/PostDetails'

const AppRoutes = () => {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={ <div className='text-8xl'> Hello World</div>} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/post-details/:postId" element={<PostDetails />} />
    {/* <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />*/ }
    <Route path="*" element={<NotFound />} /> 
  </Routes>
  
  </BrowserRouter>

}

export default AppRoutes