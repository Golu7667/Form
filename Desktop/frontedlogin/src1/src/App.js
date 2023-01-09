import React, { useState } from 'react'
import Home from './components/homepage/home'
import Login from './components/login/login'
import Register from './components/register/register'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  const [user , setLoginUser]=useState({})
  console.log(user.email)
  return (
   
    <div className='App'>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={user && user._id ?<Home email={user.email}/>:<Login setLoginUser={setLoginUser}/>} />
          <Route path='/login' element={<Login setLoginUser={setLoginUser}/>} />
          <Route path='/register' element={<Register/>} />
          </Routes>
        
        </BrowserRouter>
      
    </div>
    
  )
}

export default App