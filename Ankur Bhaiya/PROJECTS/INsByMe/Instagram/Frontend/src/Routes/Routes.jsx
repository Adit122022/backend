import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from '../views/RegisterPage/Register'
import Login from '../views/LoginPage/Login'
import Profile from '../views/Profile/Profile'
import PostDetails from '../views/Profile/posts/PostDetails'
import ProtectedRoute from './ProtectedRoute'
import NotFound from '../Pages/PageNotFound/NotFound'
import Home from '../Pages/Home/Home'
import PostCreate from '../views/Profile/posts/PostCreate'

const AppRoutes = () => {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={ <Home/>} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route   path="/profile"  element={<ProtectedRoute> <Profile /> </ProtectedRoute> }  />
    <Route path="/create"  element={ <ProtectedRoute>   <PostCreate /> </ProtectedRoute> } />
    <Route path="/post-details/:postId"  element={ <ProtectedRoute>   <PostDetails /> </ProtectedRoute> } />

    <Route path="*" element={<NotFound />} /> 
  </Routes>
  
  </BrowserRouter>

}

export default AppRoutes