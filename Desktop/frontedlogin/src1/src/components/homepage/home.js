import React from 'react'
import "./home.css"
import {useNavigate} from 'react-router-dom'
function Home(props){
    const history=useNavigate()
    console.log(props.email)
    return(
        <div className='home'>
           <h1>home</h1>
           <h4>{props.email}</h4>
           <div className='button' onClick={()=>history("/login")} >Logout</div>
        </div>
    )
}

export default Home