import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../views/Forms/Login'
import Register from '../views/Forms/Register'
import Home from '../views/Pages/Home';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import CreatePost from '../views/Forms/CreatePost';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/'element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
