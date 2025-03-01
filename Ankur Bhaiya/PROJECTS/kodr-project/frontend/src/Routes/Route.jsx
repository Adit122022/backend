import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../views/Forms/Login'
import Register from '../views/Forms/Register'
import Home from '../views/Pages/Home';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import CreatePost from '../views/Forms/CreatePost';
import Profile from '../views/Pages/Profile';
import PostDetails from '../views/Pages/PostDetails';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/'element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/post-details/:postId" element={<PostDetails/> } />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
