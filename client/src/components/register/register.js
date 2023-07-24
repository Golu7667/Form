import React, { useState } from 'react'
import "./register.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
function Register() {
  const history=useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterpassword: ""
  })
  const handel = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  
  const p = async (e) => {  
    // e.preventDefault();
    const {name,email,password,reEnterpassword}=user
    if(name && email && password &&(password===reEnterpassword)){
      await axios.post("http://localhost:8000/register",{
        user
       })
      .then(res=>{alert(res.data.massage)
        history("/login")
      }).catch(err=> console.log(err))
    }else{
      alert("Invalid details")
    }
  
    
    

  }
  return (
    <div className='register'>
      <h1>Register</h1>
      <input type="text" name="name" value={user.name} placeholder='Enter Your Name' onChange={handel}></input>
      <input type="text" name="email" value={user.email} placeholder='Enter your Email' onChange={handel}></input>
      <input type="password" name="password" value={user.password} placeholder='your Password' onChange={handel}></input>
      <input type="password" name='reEnterpassword' value={user.reEnterpassword} placeholder='Re-enter Password' onChange={handel}></input>
      <div className='button' onClick={p}> Register</div>
      <div>or</div>
      <div className='button' onClick={()=>history("/login")}>Login</div>
    </div>
  )
}

export default Register