import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token)   return <Navigate to="/login" replace />;
  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
