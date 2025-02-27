import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
 const navigate = useNavigate()
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    setSuccess(""); 

    try {
    const res =  await axios.post("http://localhost:3000/v1/api/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setSuccess("Registration successful! Please log in.");
      setEmail("");
      setPassword("");
      navigate('/');
    } catch (err) {
        console.log(err.response.data.message);
      setError(err.response.data.message);
    }
  };

  return (
    
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
         <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg relative">
           <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2">
             <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center shadow-md">
               <FaUser className="text-white text-3xl" />
             </div>
           </div>
   
           <h1 className="text-3xl font-bold text-center text-gray-800 mt-8 mb-6">Sign Up</h1>
   
           {error && <p className="text-red-500 font-bold text-sm text-center mb-4">{error}</p>}
           {success && <p className="text-green-500 text-sm text-center mb-4">{success}</p>}
   
           <form onSubmit={handleSubmit} className="space-y-4">
               {/* Email Input */}
             <div className="relative">
               <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
               <input
                 type="email"
                 placeholder="Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                 required
               />
             </div>
   
             {/* Password Input */}
             <div className="relative">
               <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
               <input
                 type="password"
                 placeholder="Password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                 required
               />
             </div>
   
             {/* Submit Button */}
             <button
               type="submit"
               className="w-full py-2 font-bold text-white bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg hover:from-purple-600 hover:to-blue-700 transition"
             >
               Sign Up
             </button>
           </form>
   
           <p className="mt-4 text-sm text-gray-600 text-center">
             Don't have an account?{" "}
             <Link to="/register" className="text-blue-600 hover:underline">
               Create an Account
             </Link>
           </p>
         </div>
       </div>
  );
};

export default Login;
