import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  const [error, setError] = useState('')

    const Navigate  =useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
    axios.post('http://localhost:3000/users/login' ,{ username, password })
    .then(res =>{ 
        const data = res.data
        localStorage.setItem('token', data.token)
        Navigate('/profile')
    }).catch(err => { if(err.response.data?.message)   {
        console.log(err.response.data.message)
         setError(err.response.data.message) }})
    }
  return (
    <div className="min-h-screen bg-black flex flex-col items-center gap-10 justify-center p-4">
    <div className="bg-gray-900 text-white p-6 rounded-2xl flex flex-col gap-10 shadow-lg w-full max-w-sm">
      <h1 className="text-3xl font-bold mb-4 font-[Satisfy] text-center">Instagram</h1>

      {error && <p className="text-xs text-red-400 text-center my-2">{error}</p>}
 <form onSubmit={handleSubmit} >
      <input onChange={(e)=>setUsername(e.target.value) } className="w-full p-2 mb-3 bg-gray-800 text-white rounded-lg placeholder-gray-400" placeholder=" username" />
      <input onChange={(e)=>setPassword(e.target.value) }  className="w-full p-2 mb-7 bg-gray-800 text-white rounded-lg placeholder-gray-400" placeholder="Password" type="password" />
    
    
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 my-10 rounded-lg">
       Log In
      </button>
      </form>
    </div>
    <div className="mt-4 text-center bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-full max-w-sm">
      <p className="text-gray-400"> Don't have an account? <Link to="/register" className="text-blue-400 hover:underline">Sign up</Link>   </p>
    </div>
  </div>
  )
}

export default Login