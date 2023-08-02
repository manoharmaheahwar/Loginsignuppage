import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom';


export default function SignUp() {
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
      const auth=localStorage.getItem('user')
      if(auth){
        navigate("/")
      }
    },[])

    const collectdata= async ()=>{
        console.log(firstname,lastname,email,password);
       let result=await fetch("http://localhost:5000/register",{
        method:'post',
        body:JSON.stringify({firstname,lastname,email,password}),
        headers:{
          'Content-Type':'application/json'
        }
       })
       result=await result.json();
       localStorage.setItem('user',JSON.stringify(result));
       navigate("/");
    }

  return (
    <div id='form-page-container' className='signup-container flex justify-center items-center bg-blue-200'>
      <div id='form-container' className='form-container bg-slate-50 rounded-xl block shadow-slate-200 w-90 p-6'>
        <form action="">
          <h2 className=' header text-black-200 my-4 text-mxl font-semibold'>Register</h2>

          <div id="fullname" className=' fullname flex flex-row'>
            <div id="firstname" className='firstname w-1/2 mr-1'>
              <input id='fname' onChange={(e)=>setFirstname(e.target.value)} value={firstname} type="text" placeholder='First name' className=' border border-slate-300 rounded-md text-sm h-7 w-full text-sm pl-2 outline-blue-10 bg-transparent'/>
            </div>

            <div id="lastname" className='lastname w-1/2 mr-1'>
              <input id='lname' onChange={(e)=>setLastname(e.target.value)} value={lastname} type="text" placeholder='Last name' className=' border border-slate-300 rounded-md text-sm h-7 w-full text-sm pl-2 outline-blue-10 bg-transparent'/>
            </div>
          </div>
          <br />
          <input  type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' id='email' className='email border border-slate-300 rounded-md text-sm h-7 w-full text-sm pl-2 outline-blue-10 bg-transparent'/>
          <br />
          <br />
          <input  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' id='password' className=' border border-slate-300 rounded-md text-sm h-7 w-full text-sm pl-2 outline-blue-10 bg-transparent'/>
          <br />
          <br />
          <input  type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='Confirm password' id='confirm-password' className=' border border-slate-300 rounded-md text-sm h-7 w-full text-sm pl-2 outline-blue-10 bg-transparent'/>
          <br />
          <br />
          <button type='button' onClick={collectdata}  className=' bg-yellow-500 h-10 w-full rounded-md text-white hover:bg-blue-400 outline-blue-500 outline-offset-2 text-sm'>Submit</button>
          <br />
          <p className=' text-xs my-2'>Already have an account? <a href="/login" className='text-blue-600'>Login</a></p>
        </form>
      </div>
    </div>
  )
}
