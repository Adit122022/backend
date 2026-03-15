import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Register'

const App = () => {
  return (
 
     <Routes>
       <Route path="/" element={ <div> Heloo world</div>} />
       <Route path="/register" element={<Register />} />
     </Routes>
 
  )
}

export default App