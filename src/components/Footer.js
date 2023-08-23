import React from 'react'
import Instagram from './images/instagram.jpeg';
import Whatsapp from'./images/whatsapp.jpeg';
import Linkdin from './images/linkdin.png';

export default function Footer() {
  return (
    <div className='footer'>
      <h1 className='text-slate-100 font-mono text-2xl text-center'>Contact us</h1>
      <div className='aboutus-contains'>
        <h2 className=' text-slate-400 ml-20'>maheshwarmh28@gmail.com</h2>
        <div className="logos flex flex-row w-1/6">
            <a href="https://www.instagram.com/manoharmaheshwar"><img src={Instagram} className='rounded-lg w-7 h-7' alt="" /></a>
            <img src={Whatsapp} className='whatsapp rounded-lg w-10 h-10' alt="whatsapp" />
            <img src={Linkdin} className='twitter rounded-lg w-10 h-10' alt="linkedin" />
        </div>
      </div>
    </div>
  )
}
