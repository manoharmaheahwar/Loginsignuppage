import React, { useState } from 'react'
import Logo from './images/cover-page.jpg';
import Google from './images/google_icon.svg';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")
const navigate=useNavigate();

const auth=localStorage.getItem('user')
  if(auth){
    navigate("/");
  }

  const logintdata=async ()=>{
    console.log("email,password",email,password);
    let result= await fetch("http://localhost:5000/login",{
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    result=await result.json();
    console.log(result);
    if(result.auth){
      localStorage.setItem('user',JSON.stringify(result.user));
      localStorage.setItem('token',JSON.stringify(result.auth));
      navigate("/");
    }
    else{
      alert("please enter correct details")
    }
  }

  const regitserbtn=async()=>{
    navigate("/signup");
  }
  return (
    <div className="login-container w-full flex items-start">
            <div className="relative w-1/2 h-full flex flex-col">
                <div className='absolute top-[25%] left-[10%] flex flex-col'>
                    <h1 className='text-4xl font-bold text-orange-300 my-4'>Turn into ideas into reality</h1>
                    <p className='text-xl font-normal text-orange-300'>Start for free get attractive offers from community</p>
                </div>
                <img src={Logo} className="w-full h-full" alt="cover-page" />
            </div>
            
            <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>


                <div className=' w-full flex flex-col max-w-[500px]'>
                    <div className='w-full flex flex-col mb-2'>
                        <h3 className='text-3xl font-semibold mb-2'>Login</h3>
                        <p className='text-sm mb-2'>Welcome ! please enter your details</p>
                    </div>

                    <div className=' w-full flex flex-col'>
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}
                        className='email w-full text-black bg-transparent border-black border-b my-4 py-1 outline-none focus:outline-none'
                        placeholder='Email' />

                        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}
                        className='password  w-full text-black bg-transparent border-black border-b my-4 py-1 outline-none focus:outline-none' 
                        placeholder='enter password'/>
                    </div>

                    <div className='w-full flex items-center justify-between'>
                        <div className=' w-full flex items-center'>
                            <input type="checkbox" className='w-4 h-4 mr-2' />
                            <p className=' text-sm'>Remember Me</p>
                        </div>

                        <p className=' text-sm whitespace-nowrap underline underline-offset-2'> <a href="" className="cursor-pointer">Forgot password</a></p>
                    </div>

                    <div className=' w-full flex flex-col my-3'>
                        <button type='button' onClick={logintdata} className='w-full flex font-semibold items-center justify-center text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center cursor-pointer'>Log in</button>
                        <button type='button' onClick={regitserbtn} className='w-full text-[#060606] font-semibold my-2 bg-white border border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>Register</button>
                    </div>

                    <div className=' w-full relative flex items-center justify-center'>
                        <p className='relative text-black bg-[#f5f5f5]'>or</p>
                    </div>

                    <div className='w-full text-[#060606] font-semibold my-2 bg-white border border-black/40 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                        <img src={Google} className='h-6 mr-6' alt="" />
                        Sign In with google
                    </div>
                </div>    

                    <div className='w-full flex items-center justify-center'>
                        <p className=' text-sm font-normal text-[#060606]'>first time user?<span className=' font-semibold underline underline-offset-2 cursor-pointer'><a href="/signup">Sign up</a></span></p>
                    </div>
            </div>
    </div>
  )
}
