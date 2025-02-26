import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from '../views/Forms/Register';
import Login from '../views/Forms/Login';
import Home from '../views/Pages/Home';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/'element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
