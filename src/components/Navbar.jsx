import React, { useState } from 'react'
import badge from '../assets/qwikcountr.png'



const Navbar = () => {
  const [navigationMenu, setNavigationMenu] = useState(false);
  const toggleMenu = () => setNavigationMenu(!navigationMenu);
  return (
    <div className="flex-row">
       <div className='flex content-around'>
          <img src={badge} alt="Logo" className='h-10' />
          <ul className='flex content-between ml-20' >
              <li className='p-4'>Home</li>
              <li className='p-4'>Features</li>
              <li className='p-4'>Pricing</li>
              <li className='p-4'>Blog</li>
              {/* <li className='p-4'>
                <div className='hidden md:flex pr-4'>
                  <button className=' text-blue px-7 py-2 my-4'>Login</button>   
                  <button className=' bg-blue text-white  px-7 py-2 my-4 rounded-full'>Get Started</button>   
                </div>
              </li> */}
              <li className='p-4 space-x-4 text-blue ml-30 mr-32 '><a href='#'>Login</a></li>
              <button className=' bg-blue text-white  px-7 py-2 my-4 rounded-full'>Get Started</button>       
          </ul>
          
        </div>
       
    </div>
  )
}

export default Navbar

