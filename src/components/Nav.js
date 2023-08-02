import React from 'react'
import {Link, json, useNavigate} from 'react-router-dom';
import Logo from './images/logo.png';
import Profilelogo from './images/proimage.jpg'

export default function Nav() {
  const auth=localStorage.getItem('user');
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div>
    <span><img src={Logo} alt="logo" className='logo' />
    <span className='brandname'>𝚖̷𝚂̷𝙷̷𝙾̷𝙿̷</span></span>
      { auth 
        ?<ul className='nav-ul'>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Products</Link></li>
            <li><Link to="/update">update Products</Link></li>
            <li><Link to="/profile">profile</Link></li>
            <li><Link onClick={logout} to="/login">logout</Link></li>
            <li className=' text-slate-50 float-right -mt-2'><Link className='flex flex-row'><img className=' w-10 h-10 mr-2 -mt-1 border-2 border-slate-150 rounded-full' src={Profilelogo} alt="" />{JSON.parse(auth).firstname} {JSON.parse(auth).lastname}</Link></li>
          </ul>
        :
        <ul className='nav-ul nav-right'>
            <li><Link to="/login">login</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
        </ul>
      }
    </div>
  )
}
