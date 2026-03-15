import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
  const Navigate  =useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
    axios.post('http://localhost:3000/users/register' ,{  username, email, password })
    .then(res =>{ 
        const data = res.data
        localStorage.setItem('token', data.token)
        Navigate('/profile')
    }).catch(err => { if(err.response.data?.message)   {
        console.log(err.response.data.message)
         setError(err.response.data.message) }})
    }

    return (
      
            <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
              <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-full max-w-sm">
                <h1 className="text-3xl font-bold mb-4 font-[Satisfy] text-center">Instagram</h1>
                <p className="text-center text-gray-300 mb-4">Sign up to see photos and videos from your friends.</p>
                <form onSubmit={handleSubmit}>
                {error && <p className="text-xs text-red-400 text-center my-2">{error}</p>}
                <input onChange={(e)=> setUsername(e.target.value)} className="w-full p-2 mb-3 bg-gray-800 text-white rounded-lg placeholder-gray-400" placeholder="Username" />
                <input onChange={(e)=>setEmail(e.target.value) } className="w-full p-2 mb-3 bg-gray-800 text-white rounded-lg placeholder-gray-400" placeholder=" Email" />
                <input onChange={(e)=>setPassword(e.target.value) } className="w-full p-2 mb-7 bg-gray-800 text-white rounded-lg placeholder-gray-400" placeholder="Password" type="password" />
               
                <p className="text-xs text-gray-400 mb-4">
                  People who use our service may have uploaded your contact information to Instagram. <a href="#" className="text-blue-400">Learn More</a>
                </p>
                <p className="text-xs text-gray-400 mb-4">
                  By signing up, you agree to our <a href="#" className="text-blue-400">Terms</a>, <a href="#" className="text-blue-400">Privacy Policy</a>, and <a href="#" className="text-blue-400">Cookies Policy</a>.
                </p>
                <button type='submit' className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
                  Sign up
                </button>
                </form>
              </div>
              <div className="mt-4 text-center bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-full max-w-sm">
                <p className="text-gray-400">
                  Have an account? <Link to='/login' className="text-blue-400 hover:underline">Log in</Link>
                </p>
              </div>
            </div>
          );
        }
        
export default Register