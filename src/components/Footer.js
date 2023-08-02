import React from 'react'
import Instagram from './images/instagram.png';
import Whatsapp from'./images/whatsapp.jpeg';
import Twitter from './images/twitter.jpg';

export default function Footer() {
  return (
    <div className='footer'>
      <h1 className='text-slate-100 font-mono text-2xl text-center'>Contact us</h1>
      <div className='aboutus-contains'>
        <h2 className=' text-slate-400 ml-20'>maheshwarmh28@gmail.com</h2>
        <div className="logos flex flex-row w-1/6">
            <a href="https://www.instagram.com/manoharmaheshwar"><img src={Instagram} className='insta' alt="" /></a>
            <img src={Whatsapp} className='whatsapp' alt="whatsapp" />
            <img src={Twitter} className='twitter' alt="twitter" />
        </div>
      </div>
    </div>
  )
}
