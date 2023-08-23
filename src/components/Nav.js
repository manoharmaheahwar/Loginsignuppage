import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Logo from './images/logo.png';
import Profilelogo from './images/proimage.jpg'


export default function Nav() {
  const auth=localStorage.getItem('user');
  let navlogin=false;
  let navsignup=false;
  const navigate=useNavigate();
  const data=window.location.pathname;
  const logout=()=>{
    localStorage.clear();
    navigate('/signup')
    navlogin=true
  }

  const login=()=>{
    navlogin=true
    console.log(navlogin)
  }
  const signup=()=>{
    navsignup=true
    console.log(navsignup)
  }

  return (
    <div>
    <Link to="/">
      <span><img src={Logo} alt="logo" className='logo' />
        <span className='brandname'>𝚖̷𝚂̷𝙷̷𝙾̷𝙿̷</span>
      </span>
    </Link>
      { auth 
        ?<ul className='nav-ul'>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Products</Link></li>
            <li><Link to="/update">update Products</Link></li>
            <li><Link to="/profile">profile</Link></li>
            <li><Link onClick={logout} to="/login">logout</Link></li>
            <li className=' text-inherit float-right -mt-2'><Link className='flex flex-row'><img className=' w-10 h-10 mr-2 -mt-1 border-2 border-slate-150 rounded-full' src={Profilelogo} alt="" />{JSON.parse(auth).firstname} {JSON.parse(auth).lastname}</Link></li>
          </ul>
        :
        <ul className='nav-ul nav-right'>
              {(data==="/login")?
              <li><Link onClick={signup} to="/signup">SignUp</Link></li>
              :
              <li><Link onClick={login} to="/login">login</Link></li>
              }
        </ul>
        
      }
    </div>
  )
}
