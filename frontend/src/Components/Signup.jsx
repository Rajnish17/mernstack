import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import "./css/signup.css"
import { url } from './config';
import axios from "axios"

const Signup = () => {

  const navigate = useNavigate();
  const[data,setData] =useState({

    name:"",
    email:"",
    contact:"",
    password:""
  });
  

  const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
  }

  const handleClick =()=>{
     axios.post(`${url}/Signup`,data).then((res)=>{
      if(res.status==200){
        alert("Signup success")
        navigate("/")
      }
      console.log(res.data.data);
     }).catch((err)=>{
      console.log(err);
     })
  }
  return (
    <>
    <div className='Signupform'>
    <div className='Signupdata'>
         <input type="text" placeholder='Enter Name'name='name' onChange={handleChange}/>
         <input type="text" placeholder='Enter Email'name='email' onChange={handleChange}/>
         <input type="number" placeholder='Enter Contact details'name='contact'maxLength={"10"} onChange={handleChange}/>
         <input type="text" placeholder='Enter Password' name='password' onChange={handleChange}  />
         <div>
         <button className="btn btn-primary" onClick={handleClick}>Signup</button>
        </div>
         
         </div>
    </div>
    </>
  )
}

export default Signup