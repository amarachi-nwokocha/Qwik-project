import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import badge from '../assets/qwikcountr.png'



const Navbar = () => {
  const [navigationMenu, setNavigationMenu] = useState(false);
  const toggleMenu = () => setNavigationMenu(!navigationMenu);
  return (
    <div className='w-screen h-[80px] z-10 bg-white fixed'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
         <img src={badge} alt="logo" className='w-15 h-7' />
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
           <button className='px-7 py-2 my-4 text-blue'>Login</button>
          <button className='px-7 py-2 my-4 bg-blue text-sm text-white rounded-full border'>Get Started</button>  
        </div>
        <div className='md:hidden' onClick={toggleMenu}>
           {!navigationMenu ? <HiMenu className='w-5' /> : <HiX/>}
        </div>
      </div>


      <ul className={!navigationMenu ? 'hidden' : 'absolute bg-white w-full px-8'}>
            <li className='border-b-2 border-white w-full'>Home</li>
            <li className='border-b-2 border-white w-full'>Features</li>
            <li className='border-b-2 border-white w-full'>Pricing</li>
            <li className='border-b-2 border-white w-full'>Blog</li>
            <div className='flex flex-col my-4'>
                <button className='px-7 py-2 my-4 text-blue'>Login</button>
                <button className='px-7 py-2 my-4 bg-blue text-sm text-white rounded-full border'>Get Started</button>  
            </div>
        </ul>
    
    </div>
    // <div className="flex-row">
    //    <div className='flex content-around'>
    //       <img src={badge} alt="Logo" className='h-10' />
    //       <ul className='flex content-between ml-20' >
    //           <li className='p-4'>Home</li>
    //           <li className='p-4'>Features</li>
    //           <li className='p-4'>Pricing</li>
    //           <li className='p-4'>Blog</li>
    //           {/* <li className='p-4'>
    //             <div className='hidden md:flex pr-4'>
    //               <button className=' text-blue px-7 py-2 my-4'>Login</button>   
    //               <button className=' bg-blue text-white  px-7 py-2 my-4 rounded-full'>Get Started</button>   
    //             </div>
    //           </li> */}
    //           <li className='p-4 space-x-4 text-blue ml-30 mr-32 '><a href='#'>Login</a></li>
    //           <button className=' bg-blue text-white  px-7 py-2 my-4 rounded-full'>Get Started</button>       
    //       </ul>
          
    //     </div>
       
    // </div>
  )
}

export default Navbar

