import React,{useState} from 'react'
import axios from 'axios'
import "./login.css"
import {useNavigate} from 'react-router-dom'
function Login ({setLoginUser}) {
  const history=useNavigate()
    const [user,setUser]=useState({ 
        email:"",
        password:"",
       
    })
    const handel=e=>{
       const {name,value}=e.target
       setUser({
        ...user,
        [name]:value
       })
    }
    const login=()=>{
      axios.post("http://localhost:8000/login",user)
      .then(res=>{
        alert(res.data.massage)
        setLoginUser(res.data.user)
        history("/")
      })
    }
  return (
    <div className='login'>
         <h1>Login</h1>
         <input type="text" name="email" value={user.email} placeholder='Enter your Email' onChange={handel}></input>
         <input type="password" name="password" value={user.password} placeholder='Enter your Password' onChange={handel}></input>
         <div className='button' onClick={login}> Login</div>
         <div>or</div>
         <div className='button' onClick={()=>history("/register")}>Register</div>
    </div>
  )
}

export default Login