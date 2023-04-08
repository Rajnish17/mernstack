import React, { useState } from 'react'
import "./css/login.css"
import {useNavigate,Link} from "react-router-dom";
import axios from "axios"
import { url } from './config';
import { userdata } from '../store/slices';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch =useDispatch();


  const navigate = useNavigate();
  const[data,setData] =useState({
    email:"",
    password:""
  });
  
  const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
  }

  const handleClick =()=>{
     axios.post(`${url}/login`,data).then((res)=>{
      if(res.status==200){
        alert("Login success")
        dispatch(userdata(res.data.data))
        navigate("/home")
      }
     }).catch((err)=>{
      console.log(err);
     })
  }
  return (
    <>
    <div className='loginform'>
    <div className='logindata'>
         <input type="text" placeholder='Enter Email'name='email' onChange={handleChange}/>
         <input type="text" placeholder='Enter Password' name='password' onChange={handleChange}  />
         <div className='signupbutton'>
         <button className="btn btn-primary" onClick={handleClick}>Login</button>
         <Link to="/signup"> <button className="btn btn-primary">Signup</button> </Link> </div>
         </div>
    </div>
    </>
  )
}

export default Login